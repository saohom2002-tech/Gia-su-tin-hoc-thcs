import React, { useState, useMemo } from 'react';
import { StudentScoreRecord, CertificateData } from '../types/quiz';
import { DEFAULT_EXAM_BATCHES, normalizeExamBatch } from '../data/defaultScores';
import {
  Trophy,
  Award,
  Medal,
  BookOpen,
  Search,
  Plus,
  Trash2,
  FileSpreadsheet,
  Printer,
  X,
  Crown,
  Sparkles,
  Calendar,
  Filter,
  CheckCircle2,
  User,
  GraduationCap,
  ExternalLink,
  Cloud,
  RefreshCw,
  Copy,
  Check,
  Settings,
  AlertCircle,
  Send,
  Zap,
  ArrowUpDown,
  Clock,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { sound } from '../utils/sound';
import { StudentAvatar } from './StudentAvatar';
import {
  GOOGLE_SHEET_URL,
  exportScoresToGoogleSheetCSV,
  getGlobalWebhookUrl,
  setGlobalWebhookUrl,
  syncBatchScoresToGoogleSheet,
  GOOGLE_APPS_SCRIPT_SAMPLE_CODE
} from '../services/googleSheets';
import { saveGSheetWebhookUrlToFirebase } from '../services/firebase';

interface ScorebookLeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  scores: StudentScoreRecord[];
  onAddScore: (score: StudentScoreRecord) => void;
  onDeleteScore: (scoreId: string) => void;
  onDeleteClass?: (className: string) => Promise<number>;
  onRenameClass?: (oldClassName: string, newClassName: string) => Promise<number>;
  onResetDemoScores?: () => void;
  onOpenCertificate: (cert: CertificateData) => void;
  onOpenBatchCertificates: (certs: CertificateData[]) => void;
}

export const ScorebookLeaderboardModal: React.FC<ScorebookLeaderboardModalProps> = ({
  isOpen,
  onClose,
  scores,
  onAddScore,
  onDeleteScore,
  onDeleteClass,
  onRenameClass,
  onResetDemoScores,
  onOpenCertificate,
  onOpenBatchCertificates,
}) => {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'gradebook'>('leaderboard');

  // Filter states
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'score_desc' | 'score_asc' | 'time_asc' | 'date_desc' | 'name_asc'>('score_desc');

  // Format seconds to mm:ss
  const formatTimeSpent = (seconds?: number): string => {
    if (!seconds || seconds <= 0) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Add manual score modal state
  const [isAddScoreOpen, setIsAddScoreOpen] = useState<boolean>(false);
  const [manualName, setManualName] = useState<string>('');
  const [manualClass, setManualClass] = useState<string>('8A1');
  const [manualSchool, setManualSchool] = useState<string>('THCS');
  const [manualBatch, setManualBatch] = useState<string>(DEFAULT_EXAM_BATCHES[0]);
  const [manualLesson, setManualLesson] = useState<string>('Bài kiểm tra khảo sát');
  const [manualScore, setManualScore] = useState<string>('10');
  const [manualNotes, setManualNotes] = useState<string>('');

  // Google Sheets Webhook & Realtime Sync States
  const [isGSheetModalOpen, setIsGSheetModalOpen] = useState<boolean>(false);
  const [webhookUrlInput, setWebhookUrlInput] = useState<string>(() => getGlobalWebhookUrl());
  const [isSavingWebhook, setIsSavingWebhook] = useState<boolean>(false);
  const [isSyncingBatch, setIsSyncingBatch] = useState<boolean>(false);
  const [batchProgress, setBatchProgress] = useState<{ sent: number; total: number } | null>(null);
  const [syncStatusMsg, setSyncStatusMsg] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [hasCopiedScript, setHasCopiedScript] = useState<boolean>(false);

  // Class Management States
  const [isClassManagerOpen, setIsClassManagerOpen] = useState<boolean>(false);
  const [classManagerSearch, setClassManagerSearch] = useState<string>('');
  const [renameTargetClass, setRenameTargetClass] = useState<string | null>(null);
  const [renameInputVal, setRenameInputVal] = useState<string>('');
  const [isProcessingClass, setIsProcessingClass] = useState<boolean>(false);

  // Class Management Handlers
  const handleDeleteClassDirect = async (targetClass: string) => {
    const count = normalizedScores.filter((s) => s.className === targetClass).length;
    const confirmed = window.confirm(
      `⚠️ CẢNH BÁO QUẢN TRỊ VIÊN:\n\nBạn có chắc chắn muốn xóa LỚP "${targetClass}" và TOÀN BỘ ${count} lượt làm bài của lớp này khỏi hệ thống không?\n\n(Thao tác này sẽ xóa vĩnh viễn khỏi Firebase và Bảng Vàng).`
    );
    if (!confirmed) return;

    setIsProcessingClass(true);
    try {
      if (onDeleteClass) {
        await onDeleteClass(targetClass);
      } else {
        const toDelete = normalizedScores.filter((s) => s.className === targetClass);
        for (const item of toDelete) {
          onDeleteScore(item.id);
        }
      }
      sound.playTrash();
      if (selectedClass === targetClass) {
        setSelectedClass('all');
      }
    } finally {
      setIsProcessingClass(false);
    }
  };

  const handleStartRenameClass = (targetClass: string) => {
    setRenameTargetClass(targetClass);
    setRenameInputVal(targetClass);
  };

  const handleConfirmRenameClass = async () => {
    if (!renameTargetClass || !renameInputVal.trim()) return;
    const cleanNew = renameInputVal.trim();
    if (cleanNew === renameTargetClass) {
      setRenameTargetClass(null);
      return;
    }

    setIsProcessingClass(true);
    try {
      if (onRenameClass) {
        await onRenameClass(renameTargetClass, cleanNew);
      }
      sound.playSuccess();
      if (selectedClass === renameTargetClass) {
        setSelectedClass(cleanNew);
      }
      setRenameTargetClass(null);
    } finally {
      setIsProcessingClass(false);
    }
  };

  // Cập nhật webhookUrlInput khi mở modal
  const handleOpenGSheetModal = () => {
    setWebhookUrlInput(getGlobalWebhookUrl());
    setSyncStatusMsg(null);
    setBatchProgress(null);
    setIsGSheetModalOpen(true);
  };

  const handleCopyAppsScript = async () => {
    try {
      await navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_SAMPLE_CODE);
      setHasCopiedScript(true);
      sound.playClick();
      setTimeout(() => setHasCopiedScript(false), 3000);
    } catch {
      alert('Vui lòng chọn và sao chép thủ công đoạn mã.');
    }
  };

  const handleSaveWebhookUrl = async () => {
    const cleanUrl = webhookUrlInput.trim();
    setIsSavingWebhook(true);
    setGlobalWebhookUrl(cleanUrl);
    const saved = await saveGSheetWebhookUrlToFirebase(cleanUrl);
    setIsSavingWebhook(false);

    if (saved) {
      sound.playSuccess();
      setSyncStatusMsg({
        type: 'success',
        text: cleanUrl
          ? 'Đã lưu và đồng bộ Webhook URL lên toàn hệ thống thành công! Từ bây giờ học sinh nộp bài sẽ tự động vào Google Sheets.'
          : 'Đã hủy cấu hình Webhook Google Sheets.',
      });
    } else {
      setSyncStatusMsg({
        type: 'error',
        text: 'Không thể lưu Webhook URL. Vui lòng kiểm tra lại kết nối mạng.',
      });
    }
  };

  const handleSyncAllExistingToGSheets = async () => {
    const currentUrl = webhookUrlInput.trim() || getGlobalWebhookUrl();
    if (!currentUrl) {
      setSyncStatusMsg({
        type: 'error',
        text: 'Vui lòng dán và lưu Webhook URL trước khi bấm đồng bộ hàng loạt.',
      });
      return;
    }

    if (scores.length === 0) {
      setSyncStatusMsg({
        type: 'info',
        text: 'Hiện chưa có dữ liệu điểm học sinh để đồng bộ.',
      });
      return;
    }

    setIsSyncingBatch(true);
    setBatchProgress({ sent: 0, total: scores.length });
    setSyncStatusMsg({
      type: 'info',
      text: `Đang gửi ${scores.length} học sinh sang Google Sheets...`,
    });

    const result = await syncBatchScoresToGoogleSheet(
      scores,
      currentUrl,
      (sent, total) => {
        setBatchProgress({ sent, total });
      }
    );

    setIsSyncingBatch(false);
    if (result.success) {
      sound.playSuccess();
      setSyncStatusMsg({
        type: 'success',
        text: `Đã hoàn tất đồng bộ thành công toàn bộ ${result.sent} học sinh sang Google Sheets!`,
      });
    } else {
      setSyncStatusMsg({
        type: 'error',
        text: `Đồng bộ bị gián đoạn: ${result.error || 'Lỗi không xác định'}`,
      });
    }
  };

  // Chuẩn hóa tên đợt thi của toàn bộ danh sách điểm
  const normalizedScores = useMemo(() => {
    return scores.map((s) => ({
      ...s,
      examBatch: normalizeExamBatch(s.examBatch),
    }));
  }, [scores]);

  // Distinct exam batches available (luôn đảm bảo có 5 đợt chuẩn của năm học)
  const availableBatches = useMemo(() => {
    const list = [...DEFAULT_EXAM_BATCHES];
    normalizedScores.forEach((s) => {
      if (s.examBatch && !list.includes(s.examBatch)) {
        list.push(s.examBatch);
      }
    });
    return list;
  }, [normalizedScores]);

  // Distinct classes available
  const availableClasses = useMemo(() => {
    const set = new Set<string>();
    normalizedScores.forEach((s) => {
      if (s.className && s.className.trim()) {
        set.add(s.className.trim());
      }
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }, [normalizedScores]);

  // Filtered scores
  const filteredScores = useMemo(() => {
    return normalizedScores.filter((s) => {
      if (selectedBatch !== 'all' && s.examBatch !== selectedBatch) return false;
      if (selectedGrade !== 'all' && String(s.gradeNumber) !== selectedGrade) return false;
      if (selectedClass !== 'all' && s.className !== selectedClass) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = s.studentName.toLowerCase().includes(q);
        const matchesClass = s.className.toLowerCase().includes(q);
        const matchesLesson = s.lessonTitle.toLowerCase().includes(q);
        if (!matchesName && !matchesClass && !matchesLesson) return false;
      }
      return true;
    });
  }, [normalizedScores, selectedBatch, selectedGrade, selectedClass, searchQuery]);

  // Leaderboard ranking (sorted by score desc, then timeSpent asc, then date desc)
  const rankedLeaderboard = useMemo(() => {
    return [...filteredScores].sort((a, b) => {
      // 1. Điểm cao xuống thấp
      if (b.score !== a.score) return b.score - a.score;
      // 2. Trùng điểm: xếp theo thời gian làm bài tính giờ (làm nhanh hơn xếp trên)
      const timeA = typeof a.timeSpentSeconds === 'number' && a.timeSpentSeconds > 0 ? a.timeSpentSeconds : 999999;
      const timeB = typeof b.timeSpentSeconds === 'number' && b.timeSpentSeconds > 0 ? b.timeSpentSeconds : 999999;
      if (timeA !== timeB) return timeA - timeB;
      // 3. Trùng cả thời gian: nộp mới hơn xếp trên
      return (b.date || 0) - (a.date || 0);
    });
  }, [filteredScores]);

  // Sổ Điểm Lớp: Sắp xếp linh hoạt theo tiêu chí người dùng chọn
  const sortedScores = useMemo(() => {
    return [...filteredScores].sort((a, b) => {
      if (sortBy === 'score_desc') {
        // 1. Điểm từ cao xuống thấp
        if (b.score !== a.score) return b.score - a.score;
        // 2. Trùng điểm: xếp theo thời gian làm bài tính giờ (làm nhanh hơn xếp trên)
        const timeA = typeof a.timeSpentSeconds === 'number' && a.timeSpentSeconds > 0 ? a.timeSpentSeconds : 999999;
        const timeB = typeof b.timeSpentSeconds === 'number' && b.timeSpentSeconds > 0 ? b.timeSpentSeconds : 999999;
        if (timeA !== timeB) return timeA - timeB;
        // 3. Trùng cả thời gian: nộp mới hơn xếp trên
        return (b.date || 0) - (a.date || 0);
      }

      if (sortBy === 'score_asc') {
        if (a.score !== b.score) return a.score - b.score;
        const timeA = typeof a.timeSpentSeconds === 'number' && a.timeSpentSeconds > 0 ? a.timeSpentSeconds : 999999;
        const timeB = typeof b.timeSpentSeconds === 'number' && b.timeSpentSeconds > 0 ? b.timeSpentSeconds : 999999;
        if (timeA !== timeB) return timeA - timeB;
        return (b.date || 0) - (a.date || 0);
      }

      if (sortBy === 'time_asc') {
        const timeA = typeof a.timeSpentSeconds === 'number' && a.timeSpentSeconds > 0 ? a.timeSpentSeconds : 999999;
        const timeB = typeof b.timeSpentSeconds === 'number' && b.timeSpentSeconds > 0 ? b.timeSpentSeconds : 999999;
        if (timeA !== timeB) return timeA - timeB;
        return b.score - a.score;
      }

      if (sortBy === 'date_desc') {
        return (b.date || 0) - (a.date || 0);
      }

      if (sortBy === 'name_asc') {
        return a.studentName.localeCompare(b.studentName, 'vi');
      }

      return 0;
    });
  }, [filteredScores, sortBy]);

  if (!isOpen) return null;

  const getRankByScore = (score: number): string => {
    if (score >= 9.0) return 'Xuất sắc';
    if (score >= 8.0) return 'Giỏi';
    if (score >= 6.5) return 'Khá';
    if (score >= 5.0) return 'Đạt yêu cầu';
    return 'Chưa đạt yêu cầu';
  };

  // Convert a score record to CertificateData
  const createCertFromScore = (record: StudentScoreRecord): CertificateData => {
    return {
      studentName: record.studentName,
      className: record.className,
      schoolName: record.schoolName || (record.gradeNumber <= 5 ? 'Trường Tiểu học' : 'Trường THCS'),
      grade: record.grade || `Khối ${record.gradeNumber}`,
      gradeNumber: record.gradeNumber,
      examBatch: record.examBatch || 'Đợt khảo sát năng lực Tin học',
      lessonTitle: record.lessonTitle,
      score: record.score,
      percentage: record.percentage || Math.round((record.score / 10) * 100),
      rankTitle: getRankByScore(record.score),
      date: record.date || Date.now(),
      certificateCode: `VINH-DANH-${record.className}-${record.id.slice(-6).toUpperCase()}`,
    };
  };

  // Handle batch certificate export
  const handleExportAllCertificates = () => {
    sound.playClick();
    // Export certificate for all students with score >= 8.0 in current view
    const eligible = rankedLeaderboard.filter((s) => s.score >= 7.5);
    if (eligible.length === 0) {
      alert('Không có học sinh nào đạt tiêu chuẩn (điểm >= 7.5) trong danh sách đang lọc!');
      return;
    }
    const certList = eligible.map(createCertFromScore);
    onOpenBatchCertificates(certList);
  };

  // Export Gradebook to CSV (theo đúng thứ tự đã sắp xếp)
  const handleExportCSV = () => {
    sound.playClick();
    const headers = [
      'STT',
      'Họ và tên',
      'Lớp',
      'Trường',
      'Đợt thi',
      'Nội dung bài thi',
      'Điểm số',
      'Thời gian làm bài',
      'Tỷ lệ %',
      'Xếp loại',
      'Ngày thi',
    ];
    const rows = sortedScores.map((s, idx) => [
      idx + 1,
      `"${s.studentName}"`,
      `"${s.className}"`,
      `"${s.schoolName || ''}"`,
      `"${s.examBatch}"`,
      `"${s.lessonTitle}"`,
      s.score.toFixed(1),
      `"${formatTimeSpent(s.timeSpentSeconds)}"`,
      `${s.percentage}%`,
      `"${getRankByScore(s.score)}"`,
      `"${new Date(s.date).toLocaleDateString('vi-VN')}"`,
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `So_Diem_Hoc_Sinh_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Handle manual score save
  const handleSaveManualScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualName.trim()) {
      alert('Vui lòng nhập họ và tên học sinh!');
      return;
    }
    const numScore = Math.max(0, Math.min(10, parseFloat(manualScore) || 10));
    const gradeNum = parseInt(manualClass.replace(/\D/g, ''), 10) || 8;

    const newRecord: StudentScoreRecord = {
      id: `score-manual-${Date.now()}`,
      studentName: manualName.trim(),
      className: manualClass.trim(),
      schoolName: manualSchool.trim() || 'Trường THCS',
      gradeNumber: gradeNum,
      grade: `Khối ${gradeNum}`,
      examBatch: manualBatch,
      lessonTitle: manualLesson.trim() || 'Bài thi Tin học',
      score: numScore,
      percentage: Math.round((numScore / 10) * 100),
      totalQuestions: 10,
      correctAnswersCount: Math.round((numScore / 10) * 10),
      timeSpentSeconds: 300,
      date: Date.now(),
      rankTitle: getRankByScore(numScore),
      notes: manualNotes.trim(),
      avatar: 'robot-ai',
    };

    onAddScore(newRecord);
    sound.playSuccess();
    setIsAddScoreOpen(false);
    setManualName('');
    setManualNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 my-auto relative">
        {/* Nút đóng cửa sổ (X) ở góc phải trên cùng */}
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 sm:top-5 sm:right-6 w-9 h-9 rounded-full bg-white/90 hover:bg-slate-200 border border-slate-200 shadow-xs flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all z-20 cursor-pointer"
          title="Đóng cửa sổ"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-4 sm:p-6 pr-14 sm:pr-16 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-amber-50 via-yellow-50/50 to-indigo-50/40">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-black text-slate-900 font-['Lexend']">
                  Bảng Vàng Vinh Danh & Sổ Lưu Điểm Học Sinh
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-black text-[11px] uppercase tracking-wider">
                  Năm học 2026 - 2027
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Firebase Online
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Lưu giữ điểm số, xếp hạng thi đua và xuất Giấy chứng nhận khen thưởng theo từng đợt khảo sát
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switchers */}
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setActiveTab('leaderboard');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeTab === 'leaderboard'
                    ? 'bg-amber-400 text-amber-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Crown className="w-4 h-4 text-amber-700" />
                <span>Bảng Vàng</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setActiveTab('gradebook');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeTab === 'gradebook'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Sổ Điểm Lớp ({normalizedScores.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="px-4 sm:px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter by Exam Batch */}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="font-bold text-slate-700">Đợt thi:</span>
              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 text-xs max-w-[240px] truncate"
              >
                <option value="all">Tất cả các đợt thi ({normalizedScores.length})</option>
                {availableBatches.map((b, idx) => {
                  const count = normalizedScores.filter((s) => s.examBatch === b).length;
                  return (
                    <option key={idx} value={b}>
                      {b} ({count})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Filter by Grade */}
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span className="font-bold text-slate-700">Khối:</span>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="px-2 py-1.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 text-xs"
              >
                <option value="all">Tất cả khối ({normalizedScores.length})</option>
                {[3, 4, 5, 6, 7, 8, 9].map((g) => {
                  const count = normalizedScores.filter((s) => s.gradeNumber === g).length;
                  return (
                    <option key={g} value={String(g)}>
                      Khối {g} ({count})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Filter by Class */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-slate-700">Lớp:</span>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-2 py-1.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 text-xs max-w-[130px] truncate"
              >
                <option value="all">Tất cả lớp ({normalizedScores.length})</option>
                {availableClasses.map((cls, idx) => {
                  const count = normalizedScores.filter((s) => s.className === cls).length;
                  return (
                    <option key={idx} value={cls}>
                      Lớp {cls} ({count})
                    </option>
                  );
                })}
              </select>

              {/* Nút Xóa lớp này (khi đang chọn 1 lớp cụ thể) */}
              {selectedClass !== 'all' && (
                <button
                  type="button"
                  onClick={() => handleDeleteClassDirect(selectedClass)}
                  disabled={isProcessingClass}
                  className="px-2 py-1.5 rounded-xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center gap-1 transition-all shadow-2xs cursor-pointer animate-in fade-in"
                  title={`Xóa toàn bộ điểm của lớp "${selectedClass}"`}
                >
                  <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                  <span className="hidden sm:inline">Xóa lớp này</span>
                </button>
              )}

              {/* Nút Quản lý lớp */}
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setClassManagerSearch('');
                  setIsClassManagerOpen(true);
                }}
                className="px-2 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1 transition-all shadow-2xs cursor-pointer"
                title="Mở danh sách quản lý, đổi tên và xóa các lớp học"
              >
                <Settings className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden md:inline">Quản lý lớp</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
              <input
                type="text"
                placeholder="Tìm tên học sinh, lớp..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-300 bg-white text-xs w-36 sm:w-48 focus:outline-indigo-500"
              />
            </div>

            {/* Sắp xếp tiêu chí */}
            <div className="flex items-center gap-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="font-bold text-slate-700">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  sound.playClick();
                  setSortBy(e.target.value as any);
                }}
                className="px-2.5 py-1.5 rounded-xl border border-blue-300 bg-blue-50/70 hover:bg-blue-100/70 font-bold text-blue-900 text-xs shadow-2xs focus:outline-blue-500 cursor-pointer"
                title="Chọn tiêu chuẩn sắp xếp danh sách"
              >
                <option value="score_desc">🏆 Điểm cao ➔ thấp (Trùng điểm: làm nhanh xếp trên)</option>
                <option value="time_asc">⏱️ Thời gian làm bài nhanh nhất</option>
                <option value="date_desc">📅 Mới nộp gần đây nhất</option>
                <option value="score_asc">📉 Điểm thấp ➔ cao</option>
                <option value="name_asc">🔤 Tên học sinh (A ➔ Z)</option>
              </select>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {activeTab === 'leaderboard' ? (
              <button
                type="button"
                onClick={handleExportAllCertificates}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                title="Xuất Giấy khen hàng loạt cho các em đạt điểm cao theo bộ lọc (Đợt, Khối, Lớp)"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Xuất Giấy Khen ({rankedLeaderboard.filter((s) => s.score >= 7.5).length} em)</span>
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleExportAllCertificates}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                  title="Xuất Giấy khen hàng loạt cho các em đạt điểm cao theo bộ lọc hiện tại"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Xuất Giấy Khen ({rankedLeaderboard.filter((s) => s.score >= 7.5).length} em)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddScoreOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Nhập điểm</span>
                </button>
                <button
                  type="button"
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all cursor-pointer"
                  title="Tải tệp bảng điểm CSV tương thích Google Sheets / Excel"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Xuất Excel/CSV</span>
                </button>
                <button
                  type="button"
                  onClick={handleOpenGSheetModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-xs transition-all cursor-pointer shadow-xs"
                  title="Cấu hình tự động đồng bộ điểm thi từ Firebase sang Google Sheets theo thời gian thực"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-blue-600 ${isSyncingBatch ? 'animate-spin' : ''}`} />
                  <span>Tự động đồng bộ</span>
                  {Boolean(getGlobalWebhookUrl()) && (
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5" title="Đang kích hoạt đồng bộ Realtime" />
                  )}
                </button>
                <a
                  href={GOOGLE_SHEET_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition-all cursor-pointer shadow-xs"
                  title="Mở trực tiếp bảng điểm trên Google Sheets"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mở Google Sheets</span>
                </a>
              </>
            )}
          </div>
        </div>

        {/* Tab 1: Leaderboard (Bảng Vàng Vinh Danh) */}
        {activeTab === 'leaderboard' && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
            {/* Top 3 Podium (If we have at least 1 result) */}
            {rankedLeaderboard.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {/* 2nd Place (Silver) */}
                {rankedLeaderboard[1] && (
                  <div className="p-4 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white text-center flex flex-col justify-between order-2 md:order-1 shadow-xs">
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-slate-300 text-slate-800 font-black text-xl flex items-center justify-center mx-auto shadow-sm">
                        🥈 2
                      </div>
                      <StudentAvatar avatarIdOrUrl={rankedLeaderboard[1].avatar || 'girl-1'} size="md" className="mx-auto" />
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-sm">{rankedLeaderboard[1].studentName}</h4>
                        <p className="text-xs text-indigo-700 font-bold">Lớp {rankedLeaderboard[1].className}</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
                      <div className="text-2xl font-black text-slate-800 font-['Lexend']">
                        {rankedLeaderboard[1].score.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/10</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          onOpenCertificate(createCertFromScore(rankedLeaderboard[1]));
                        }}
                        className="w-full py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1"
                      >
                        <Award className="w-3.5 h-3.5 text-amber-600" />
                        <span>Xem Giấy Khen</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 1st Place (Gold Champion) */}
                {rankedLeaderboard[0] && (
                  <div className="p-5 rounded-3xl border-2 border-amber-400 bg-gradient-to-b from-amber-50/80 to-white text-center flex flex-col justify-between order-1 md:order-2 shadow-lg relative transform md:-translate-y-2">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 font-black text-[10px] uppercase px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
                      <Crown className="w-3 h-3" /> THỦ KHOA
                    </div>
                    <div className="space-y-2 pt-2">
                      <div className="w-14 h-14 rounded-2xl bg-amber-400 text-amber-950 font-black text-2xl flex items-center justify-center mx-auto shadow-md">
                        🥇 1
                      </div>
                      <StudentAvatar avatarIdOrUrl={rankedLeaderboard[0].avatar || 'boy-1'} size="lg" className="mx-auto" />
                      <div>
                        <h4 className="font-black text-slate-900 text-base">{rankedLeaderboard[0].studentName}</h4>
                        <p className="text-xs text-indigo-700 font-bold">Lớp {rankedLeaderboard[0].className}</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-amber-200 mt-3 space-y-2">
                      <div className="text-3xl font-black text-amber-900 font-['Lexend']">
                        {rankedLeaderboard[0].score.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/10</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          onOpenCertificate(createCertFromScore(rankedLeaderboard[0]));
                        }}
                        className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5"
                      >
                        <Award className="w-4 h-4 text-amber-200" />
                        <span>Cấp Giấy Khen Thủ Khoa</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 3rd Place (Bronze) */}
                {rankedLeaderboard[2] && (
                  <div className="p-4 rounded-3xl border border-slate-200 bg-gradient-to-b from-amber-50/40 to-white text-center flex flex-col justify-between order-3 md:order-3 shadow-xs">
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-amber-700/20 text-amber-900 font-black text-xl flex items-center justify-center mx-auto shadow-sm">
                        🥉 3
                      </div>
                      <StudentAvatar avatarIdOrUrl={rankedLeaderboard[2].avatar || 'boy-2'} size="md" className="mx-auto" />
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-sm">{rankedLeaderboard[2].studentName}</h4>
                        <p className="text-xs text-indigo-700 font-bold">Lớp {rankedLeaderboard[2].className}</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
                      <div className="text-2xl font-black text-slate-800 font-['Lexend']">
                        {rankedLeaderboard[2].score.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/10</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          onOpenCertificate(createCertFromScore(rankedLeaderboard[2]));
                        }}
                        className="w-full py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1"
                      >
                        <Award className="w-3.5 h-3.5 text-amber-600" />
                        <span>Xem Giấy Khen</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Complete Ranking List */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Toàn Bộ Bảng Vàng Vinh Danh ({rankedLeaderboard.length} học sinh)
              </h3>

              {rankedLeaderboard.length === 0 ? (
                <div className="text-center py-12 text-slate-500 space-y-2">
                  <Trophy className="w-10 h-10 mx-auto text-slate-300" />
                  <p className="text-sm font-semibold">Chưa có kết quả thi nào khớp với bộ lọc!</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {rankedLeaderboard.map((item, idx) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-amber-300 hover:shadow-xs transition-all flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-xl font-mono font-bold text-xs flex items-center justify-center shrink-0 ${
                            idx === 0
                              ? 'bg-amber-400 text-amber-950 shadow-xs'
                              : idx === 1
                              ? 'bg-slate-300 text-slate-800'
                              : idx === 2
                              ? 'bg-amber-700/30 text-amber-900'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {idx + 1}
                        </span>

                        <StudentAvatar avatarIdOrUrl={item.avatar || 'robot-ai'} size="xs" />

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-slate-900">
                              {item.studentName}
                            </span>
                            <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                              Lớp {item.className}
                            </span>
                            <span className="hidden sm:inline-block text-[11px] text-slate-400">
                              • {item.examBatch}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            {item.lessonTitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right">
                          <div className="text-sm sm:text-base font-black text-indigo-950 font-['Lexend']">
                            {item.score.toFixed(1)}/10
                          </div>
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              item.score >= 9
                                ? 'bg-amber-100 text-amber-800'
                                : item.score >= 8
                                ? 'bg-emerald-100 text-emerald-800'
                                : item.score >= 6.5
                                ? 'bg-blue-100 text-blue-800'
                                : item.score >= 5
                                ? 'bg-slate-100 text-slate-700'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {getRankByScore(item.score)}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            sound.playClick();
                            onOpenCertificate(createCertFromScore(item));
                          }}
                          className="px-2.5 py-1.5 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1 transition-colors"
                          title="Cấp Giấy chứng nhận cho học sinh này"
                        >
                          <Award className="w-3.5 h-3.5 text-amber-600" />
                          <span className="hidden sm:inline">Giấy Khen</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Gradebook (Sổ Lưu Điểm Lớp Học) */}
        {activeTab === 'gradebook' && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-3 w-12 text-center">STT</th>
                    <th
                      className="py-3 px-3 cursor-pointer hover:bg-slate-200/60 transition-colors select-none"
                      onClick={() => {
                        sound.playClick();
                        setSortBy(sortBy === 'name_asc' ? 'score_desc' : 'name_asc');
                      }}
                      title="Bấm để sắp xếp theo tên học sinh"
                    >
                      <div className="flex items-center gap-1">
                        <span>Học sinh</span>
                        {sortBy === 'name_asc' ? (
                          <ArrowUp className="w-3 h-3 text-indigo-600" />
                        ) : (
                          <ArrowUpDown className="w-3 h-3 text-slate-400" />
                        )}
                      </div>
                    </th>
                    <th className="py-3 px-3">Lớp & Trường</th>
                    <th className="py-3 px-3">Đợt thi</th>
                    <th className="py-3 px-3">Bài kiểm tra</th>
                    <th
                      className="py-3 px-3 text-center cursor-pointer hover:bg-slate-200/60 transition-colors select-none bg-indigo-50/50"
                      onClick={() => {
                        sound.playClick();
                        setSortBy(sortBy === 'score_desc' ? 'score_asc' : 'score_desc');
                      }}
                      title="Bấm để đảo chiều sắp xếp theo điểm số"
                    >
                      <div className="inline-flex items-center gap-1 font-extrabold text-indigo-900">
                        <span>Điểm</span>
                        {sortBy === 'score_desc' ? (
                          <ArrowDown className="w-3.5 h-3.5 text-indigo-600" />
                        ) : sortBy === 'score_asc' ? (
                          <ArrowUp className="w-3.5 h-3.5 text-indigo-600" />
                        ) : (
                          <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </div>
                    </th>
                    <th className="py-3 px-3 text-center">Xếp loại</th>
                    <th
                      className="py-3 px-3 text-center cursor-pointer hover:bg-slate-200/60 transition-colors select-none"
                      onClick={() => {
                        sound.playClick();
                        setSortBy(sortBy === 'date_desc' ? 'time_asc' : 'date_desc');
                      }}
                      title="Bấm để sắp xếp theo ngày thi hoặc thời gian"
                    >
                      <div className="inline-flex items-center gap-1">
                        <span>Ngày thi</span>
                        {sortBy === 'date_desc' ? (
                          <ArrowDown className="w-3 h-3 text-indigo-600" />
                        ) : (
                          <ArrowUpDown className="w-3 h-3 text-slate-400" />
                        )}
                      </div>
                    </th>
                    <th className="py-3 px-3 text-center">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {sortedScores.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="py-8 text-center text-slate-400">
                        Chưa có dữ liệu điểm nào trong sổ!
                      </td>
                    </tr>
                  ) : (
                    sortedScores.map((s, idx) => (
                      <tr key={s.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-2.5 px-3 text-center font-mono font-semibold text-slate-500">
                          {idx + 1}
                        </td>
                        <td className="py-2.5 px-3 font-bold text-slate-900">
                          <div className="flex items-center gap-1.5">
                            <StudentAvatar avatarIdOrUrl={s.avatar || 'robot-ai'} size="xs" />
                            <span>{s.studentName}</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3">
                          <span className="font-semibold text-indigo-700">{s.className}</span>
                          {s.schoolName && <div className="text-[10px] text-slate-400">{s.schoolName}</div>}
                        </td>
                        <td className="py-2.5 px-3 text-slate-600 max-w-[160px] truncate" title={s.examBatch}>
                          {s.examBatch}
                        </td>
                        <td className="py-2.5 px-3 font-medium text-slate-800 max-w-[180px] truncate" title={s.lessonTitle}>
                          {s.lessonTitle}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <div className="font-black text-sm text-indigo-950 font-['Lexend']">
                            {s.score.toFixed(1)}
                          </div>
                          {s.timeSpentSeconds !== undefined && s.timeSpentSeconds > 0 && (
                            <div
                              className="text-[10px] text-slate-500 font-mono inline-flex items-center justify-center gap-0.5 mt-0.5 bg-slate-100 px-1.5 py-0.5 rounded-md"
                              title={`Thời gian làm bài: ${formatTimeSpent(s.timeSpentSeconds)}`}
                            >
                              <Clock className="w-2.5 h-2.5 text-slate-400" />
                              <span>{formatTimeSpent(s.timeSpentSeconds)}</span>
                            </div>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              s.score >= 9
                                ? 'bg-amber-100 text-amber-800'
                                : s.score >= 8
                                ? 'bg-emerald-100 text-emerald-800'
                                : s.score >= 6.5
                                ? 'bg-blue-100 text-blue-800'
                                : s.score >= 5
                                ? 'bg-slate-100 text-slate-700'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {getRankByScore(s.score)}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-center text-slate-500 text-[11px]">
                          {new Date(s.date).toLocaleDateString('vi-VN')}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <button
                              type="button"
                              onClick={() => {
                                sound.playClick();
                                onOpenCertificate(createCertFromScore(s));
                              }}
                              className="p-1 rounded-lg hover:bg-amber-50 text-amber-600 transition-colors"
                              title="Xuất giấy chứng nhận vinh danh"
                            >
                              <Award className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Bạn có chắc muốn xóa điểm của học sinh ${s.studentName}?`)) {
                                  sound.playClick();
                                  onDeleteScore(s.id);
                                }
                              }}
                              className="p-1 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"
                              title="Xóa dòng điểm này"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Bottom tools for gradebook */}
            <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
              <div>Tổng số: <strong>{sortedScores.length} lượt điểm</strong> đã lưu</div>
              {onResetDemoScores && (
                <button
                  type="button"
                  onClick={onResetDemoScores}
                  className="text-slate-400 hover:text-slate-700 underline text-xs"
                >
                  Nạp lại danh sách mẫu
                </button>
              )}
            </div>
          </div>
        )}

        {/* Modal: Nhập điểm thủ công */}
        {isAddScoreOpen && (
          <div className="fixed inset-0 z-60 bg-slate-900/60 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <Plus className="w-4 h-4 text-indigo-600" />
                  Nhập Điểm Học Sinh Vào Sổ
                </h3>
                <button
                  type="button"
                  onClick={() => setIsAddScoreOpen(false)}
                  className="w-7 h-7 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSaveManualScore} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Họ và tên học sinh *</label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Nguyễn Văn An"
                    value={manualName}
                    onChange={(e) => setManualName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-indigo-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Lớp *</label>
                    <input
                      type="text"
                      required
                      placeholder="VD: 8A1, 5A2..."
                      value={manualClass}
                      onChange={(e) => setManualClass(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Điểm số (0 - 10) *</label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="10"
                      required
                      value={manualScore}
                      onChange={(e) => setManualScore(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-indigo-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Đợt thi / Khảo sát *</label>
                  <select
                    value={manualBatch}
                    onChange={(e) => setManualBatch(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  >
                    {availableBatches.map((b, i) => (
                      <option key={i} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Nội dung bài thi / Chuyên đề</label>
                  <input
                    type="text"
                    placeholder="VD: Bài 1 - Lược sử công cụ tính toán"
                    value={manualLesson}
                    onChange={(e) => setManualLesson(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Ghi chú nhận xét</label>
                  <input
                    type="text"
                    placeholder="VD: Nắm chắc kiến thức, thao tác tốt"
                    value={manualNotes}
                    onChange={(e) => setManualNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddScoreOpen(false)}
                    className="px-3 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md shadow-indigo-600/20"
                  >
                    Lưu vào Sổ điểm
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* Modal Cấu hình & Đồng bộ Google Sheets Realtime Webhook */}
        {isGSheetModalOpen && (
          <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
                    <FileSpreadsheet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-base sm:text-lg flex items-center gap-2">
                      Tự Động Đồng Bộ Google Sheets
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-emerald-400 text-emerald-950">
                        Realtime Webhook
                      </span>
                    </h3>
                    <p className="text-xs text-emerald-100 font-medium">
                      Học sinh nộp bài thi ➔ Điểm số tự động ghi thẳng 1 dòng mới vào Google Sheets
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsGSheetModalOpen(false)}
                  className="p-1.5 rounded-xl hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 text-slate-800 text-xs sm:text-sm">
                {/* Trạng thái kết nối */}
                <div
                  className={`p-3.5 rounded-2xl border flex items-center gap-3 ${
                    Boolean(getGlobalWebhookUrl())
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full shrink-0 ${
                      Boolean(getGlobalWebhookUrl()) ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'
                    }`}
                  />
                  <div className="flex-1">
                    <div className="font-bold text-xs uppercase tracking-wider">
                      {Boolean(getGlobalWebhookUrl()) ? '🟢 Đang hoạt động Realtime' : '🟡 Chưa kích hoạt Webhook'}
                    </div>
                    <div className="text-xs opacity-90 mt-0.5">
                      {Boolean(getGlobalWebhookUrl())
                        ? 'Mỗi khi học sinh hoàn thành bài thi ở bất kỳ máy nào, điểm số sẽ tự động gửi thẳng vào Google Sheets.'
                        : 'Làm theo 4 bước bên dưới để tạo Webhook tự động ghi điểm lên Google Sheets.'}
                    </div>
                  </div>
                </div>

                {/* 4 Bước thiết lập nhanh */}
                <div className="space-y-3 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  <div className="font-extrabold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Hướng dẫn thiết lập 4 bước nhanh (chỉ cần làm 1 lần duy nhất)</span>
                  </div>

                  <ol className="list-decimal list-inside space-y-2 text-xs text-slate-700 leading-relaxed font-medium">
                    <li>
                      Mở Google Sheets{' '}
                      <a
                        href={GOOGLE_SHEET_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-600 font-bold underline hover:text-emerald-700"
                      >
                        cosodulieu
                      </a>
                      , chọn menu <b>Tiện ích mở rộng (Extensions)</b> ➔ chọn <b>Apps Script</b>.
                    </li>
                    <li>
                      Xóa hết mã có sẵn, bấm nút sao chép bên dưới rồi dán vào ➔ bấm <b>Ctrl + S</b> để lưu.
                    </li>
                    <li>
                      Bấm nút <b>Triển khai (Deploy)</b> ở góc trên bên phải ➔ <b>Tùy chọn triển khai mới (New deployment)</b>:
                      <ul className="list-disc list-inside ml-4 mt-1 space-y-0.5 text-slate-600">
                        <li>Chọn loại hình: <b>Ứng dụng web (Web app)</b>.</li>
                        <li>Ai có quyền truy cập (Who has access): <b>Bất kỳ ai (Anyone)</b>.</li>
                        <li>Bấm <b>Triển khai</b> ➔ Cấp quyền nếu hỏi ➔ Sao chép <b>URL ứng dụng web</b>.</li>
                      </ul>
                    </li>
                    <li>
                      Dán URL nhận được vào ô bên dưới rồi nhấn <b>Lưu & Kích hoạt</b>.
                    </li>
                  </ol>

                  {/* Nút sao chép mã Apps Script */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleCopyAppsScript}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer shadow-sm ${
                        hasCopiedScript
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
                      }`}
                    >
                      {hasCopiedScript ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4 text-indigo-600" />}
                      <span>{hasCopiedScript ? 'Đã sao chép mã Apps Script!' : 'Sao chép mã Google Apps Script mẫu'}</span>
                    </button>
                  </div>
                </div>

                {/* Ô nhập Webhook URL */}
                <div className="space-y-2">
                  <label className="font-bold text-slate-800 text-xs block">
                    Đường link Webhook URL (URL ứng dụng web từ Google Apps Script):
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={webhookUrlInput}
                      onChange={(e) => setWebhookUrlInput(e.target.value)}
                      placeholder="https://script.google.com/macros/s/.../exec"
                      className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50"
                    />
                    <button
                      type="button"
                      onClick={handleSaveWebhookUrl}
                      disabled={isSavingWebhook}
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/20 cursor-pointer shrink-0"
                    >
                      {isSavingWebhook ? (
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Check className="w-3.5 h-3.5" />
                      )}
                      <span>Lưu & Kích hoạt</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    URL này được lưu lên Firebase Realtime Database nên tất cả học sinh làm bài trên mọi máy/điện thoại đều sẽ tự động đồng bộ.
                  </p>
                </div>

                {/* Thông báo kết quả thao tác */}
                {syncStatusMsg && (
                  <div
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 ${
                      syncStatusMsg.type === 'success'
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                        : syncStatusMsg.type === 'error'
                        ? 'bg-rose-50 border-rose-300 text-rose-800'
                        : 'bg-blue-50 border-blue-300 text-blue-800'
                    }`}
                  >
                    {syncStatusMsg.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                    {syncStatusMsg.type === 'error' && <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                    {syncStatusMsg.type === 'info' && <RefreshCw className="w-4 h-4 text-blue-600 animate-spin shrink-0" />}
                    <span>{syncStatusMsg.text}</span>
                  </div>
                )}

                {/* Card Đồng bộ toàn bộ dữ liệu cũ hiện có từ Firebase */}
                <div className="p-4 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/80 to-blue-50/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-extrabold text-indigo-950 text-xs uppercase tracking-wide flex items-center gap-2">
                        <Cloud className="w-4 h-4 text-indigo-600" />
                        <span>Đồng bộ ngay {scores.length} học sinh hiện có sang Google Sheets</span>
                      </div>
                      <p className="text-xs text-indigo-800/80 mt-0.5">
                        Đẩy toàn bộ {scores.length} lượt thi hiện đang lưu trên Firebase vào bảng tính Google Sheets ngay lập tức.
                      </p>
                    </div>
                  </div>

                  {batchProgress && (
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs font-bold text-indigo-900">
                        <span>Tiến độ đồng bộ:</span>
                        <span>
                          {batchProgress.sent} / {batchProgress.total} học sinh ({Math.round((batchProgress.sent / batchProgress.total) * 100)}%)
                        </span>
                      </div>
                      <div className="w-full bg-indigo-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.round((batchProgress.sent / batchProgress.total) * 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="pt-1 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={handleSyncAllExistingToGSheets}
                      disabled={isSyncingBatch}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all cursor-pointer"
                    >
                      {isSyncingBatch ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      <span>
                        {isSyncingBatch
                          ? `Đang gửi ${batchProgress?.sent || 0}/${scores.length}...`
                          : `Đẩy ngay ${scores.length} học sinh sang Google Sheets`}
                      </span>
                    </button>
                    <a
                      href={GOOGLE_SHEET_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                      <span>Xem Google Sheets</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setIsGSheetModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Quản Lý Danh Sách Lớp Học (Xóa & Đổi tên lớp dành riêng cho Admin) */}
        {isClassManagerOpen && (
          <div className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-base sm:text-lg flex items-center gap-2">
                      Quản Lý Danh Sách Lớp Học
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-indigo-400 text-indigo-950">
                        {availableClasses.length} lớp
                      </span>
                    </h3>
                    <p className="text-xs text-indigo-100 font-medium">
                      Xóa các lớp học sinh đặt tên không chuẩn hoặc đổi tên lớp để chuẩn hóa dữ liệu
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsClassManagerOpen(false);
                    setRenameTargetClass(null);
                  }}
                  className="p-1.5 rounded-xl hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search & Actions */}
              <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={classManagerSearch}
                    onChange={(e) => setClassManagerSearch(e.target.value)}
                    placeholder="Tìm tên lớp cần xóa hoặc đổi tên (VD: chó ngu, 9A1...)"
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold focus:outline-indigo-500"
                  />
                </div>
              </div>

              {/* Class List */}
              <div className="p-4 sm:p-5 overflow-y-auto space-y-2 flex-1 divide-y divide-slate-100">
                {availableClasses
                  .filter((cls) => cls.toLowerCase().includes(classManagerSearch.toLowerCase().trim()))
                  .map((cls) => {
                    const count = normalizedScores.filter((s) => s.className === cls).length;
                    const isRenaming = renameTargetClass === cls;

                    return (
                      <div
                        key={cls}
                        className="pt-2 first:pt-0 flex items-center justify-between gap-3 hover:bg-slate-50/80 p-2 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-2.5 flex-1 min-w-0">
                          {isRenaming ? (
                            <div className="flex items-center gap-2 flex-1">
                              <input
                                type="text"
                                value={renameInputVal}
                                onChange={(e) => setRenameInputVal(e.target.value)}
                                className="px-3 py-1.5 rounded-xl border-2 border-indigo-500 text-xs font-bold text-slate-900 bg-white flex-1"
                                placeholder="Nhập tên lớp chuẩn..."
                                autoFocus
                              />
                              <button
                                type="button"
                                onClick={handleConfirmRenameClass}
                                disabled={isProcessingClass}
                                className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer"
                              >
                                Lưu
                              </button>
                              <button
                                type="button"
                                onClick={() => setRenameTargetClass(null)}
                                className="px-2 py-1.5 rounded-xl border border-slate-300 text-slate-600 text-xs font-bold hover:bg-slate-100 cursor-pointer"
                              >
                                Hủy
                              </button>
                            </div>
                          ) : (
                            <>
                              <span className="font-extrabold text-xs sm:text-sm text-slate-900 truncate">
                                Lớp {cls}
                              </span>
                              <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full shrink-0">
                                {count} học sinh
                              </span>
                            </>
                          )}
                        </div>

                        {!isRenaming && (
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleStartRenameClass(cls)}
                              className="px-2.5 py-1.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-600 hover:text-indigo-700 font-bold text-xs flex items-center gap-1 transition-all cursor-pointer"
                              title={`Đổi tên lớp "${cls}"`}
                            >
                              <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
                              <span className="hidden sm:inline">Đổi tên</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteClassDirect(cls)}
                              disabled={isProcessingClass}
                              className="px-2.5 py-1.5 rounded-xl border border-rose-200 bg-rose-50/70 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center gap-1 transition-all cursor-pointer shadow-2xs"
                              title={`Xóa vĩnh viễn toàn bộ ${count} học sinh của lớp "${cls}"`}
                            >
                              <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                              <span>Xóa lớp</span>
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
                <span>* Lưu ý: Xóa lớp sẽ xóa vĩnh viễn toàn bộ học sinh thuộc lớp đó.</span>
                <button
                  type="button"
                  onClick={() => setIsClassManagerOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
