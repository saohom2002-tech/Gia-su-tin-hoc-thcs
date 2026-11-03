import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CertificateData, StudentProfile } from '../types/quiz';
import {
  Award,
  Printer,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Medal,
  UserCheck,
  Type,
  Filter,
  Search,
  Calendar,
  GraduationCap,
  Layers,
  FileCheck2
} from 'lucide-react';
import { sound } from '../utils/sound';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificates: CertificateData[];
  studentProfile?: StudentProfile;
}

const themeStyles = {
  gold: {
    outerBorder: 'border-amber-500',
    innerBorder: 'border-amber-400/80',
    bgLinear: 'from-amber-50/70 via-yellow-50/40 to-amber-50/80',
    titleColor: 'text-amber-800',
    accentColor: 'text-amber-900',
    sealColor: 'border-amber-600 bg-amber-500 text-amber-950',
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
  },
  red: {
    outerBorder: 'border-rose-600',
    innerBorder: 'border-amber-400',
    bgLinear: 'from-rose-50/60 via-amber-50/40 to-rose-50/60',
    titleColor: 'text-rose-800',
    accentColor: 'text-rose-950',
    sealColor: 'border-rose-600 bg-rose-600 text-white',
    badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
  },
  blue: {
    outerBorder: 'border-blue-600',
    innerBorder: 'border-cyan-400',
    bgLinear: 'from-blue-50/60 via-indigo-50/40 to-cyan-50/60',
    titleColor: 'text-blue-900',
    accentColor: 'text-slate-900',
    sealColor: 'border-blue-600 bg-blue-600 text-white',
    badgeBg: 'bg-blue-100 text-blue-900 border-blue-300',
  },
};

const getRankByScore = (score: number): string => {
  if (score >= 9.0) return 'Xuất sắc';
  if (score >= 8.0) return 'Giỏi';
  if (score >= 6.5) return 'Khá';
  if (score >= 5.0) return 'Đạt yêu cầu';
  return 'Chưa đạt yêu cầu';
};

const formatDate = (timestamp: number) => {
  const d = new Date(timestamp);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  return `Ngày ${day} tháng ${month} năm ${year}`;
};

/**
 * Reusable Certificate Sheet Card
 */
const CertificateCard: React.FC<{
  cert: CertificateData;
  theme: 'gold' | 'red' | 'blue';
  calligraphyStyle: 'great-vibes' | 'dancing' | 'charm';
  studentProfile?: StudentProfile;
  useLoginProfile?: boolean;
  isPrint?: boolean;
}> = ({ cert, theme, calligraphyStyle, studentProfile, useLoginProfile, isPrint }) => {
  const activeTheme = themeStyles[theme];

  // In batch/print mode, always respect the specific student's record
  const displayStudentName =
    !isPrint && useLoginProfile && studentProfile?.fullName
      ? studentProfile.fullName
      : cert.studentName || studentProfile?.fullName || 'Học Sinh Xuất Sắc';

  const displayClassName =
    !isPrint && useLoginProfile && studentProfile?.className
      ? studentProfile.className
      : cert.className || studentProfile?.className || '7/1';

  // Infer Grade
  const inferredGradeNum = (() => {
    if (!isPrint && useLoginProfile && studentProfile?.grade) {
      const m = studentProfile.grade.match(/\d+/);
      if (m) return parseInt(m[0], 10);
    }
    if (cert.gradeNumber) return cert.gradeNumber;
    const classMatch = (displayClassName || '').match(/^(\d+)/);
    if (classMatch) return parseInt(classMatch[1], 10);
    if (!isPrint && studentProfile?.grade) {
      const m = studentProfile.grade.match(/\d+/);
      if (m) return parseInt(m[0], 10);
    }
    return 8;
  })();

  const isPrimarySchool = inferredGradeNum >= 1 && inferredGradeNum <= 5;
  const educationLevelLabel = isPrimarySchool ? 'TIỂU HỌC' : 'THCS';
  const displayGradeLabel = `KHỐI ${inferredGradeNum}`;

  const rawSchool =
    !isPrint && useLoginProfile && studentProfile?.schoolName
      ? studentProfile.schoolName
      : cert.schoolName || studentProfile?.schoolName || 'THCS Tân Bình';

  const displaySchoolName = (() => {
    const trimmed = (rawSchool || '').trim();
    const lower = trimmed.toLowerCase();
    if (!trimmed || lower === 'thcs' || lower === 'trường thcs' || lower === 'tiểu học' || lower === 'trường tiểu học') {
      return isPrimarySchool ? 'Trường Tiểu học' : 'THCS Tân Bình';
    }
    return trimmed;
  })();

  const calligraphyFontClass =
    calligraphyStyle === 'great-vibes'
      ? 'font-calligraphy'
      : calligraphyStyle === 'dancing'
      ? 'font-calligraphy-dancing'
      : 'font-calligraphy-charm';

  return (
    <div
      className={`w-full ${
        isPrint
          ? 'h-full max-h-[196mm] p-7 rounded-2xl'
          : 'max-w-[800px] min-h-[530px] p-6 sm:p-8 rounded-2xl shadow-xl'
      } border-8 ${activeTheme.outerBorder} bg-gradient-to-br ${
        activeTheme.bgLinear
      } relative text-slate-900 font-serif-vn flex flex-col justify-between`}
      style={{ boxSizing: 'border-box' }}
    >
      {/* Inner Double Golden Border */}
      <div className={`absolute inset-3 sm:inset-4 border-2 border-dashed ${activeTheme.innerBorder} pointer-events-none rounded-xl`} />

      {/* Corner Decorative Ornaments */}
      <div className="absolute top-5 left-5 text-amber-600 font-serif-vn text-2xl select-none leading-none opacity-80">❖</div>
      <div className="absolute top-5 right-5 text-amber-600 font-serif-vn text-2xl select-none leading-none opacity-80">❖</div>
      <div className="absolute bottom-5 left-5 text-amber-600 font-serif-vn text-2xl select-none leading-none opacity-80">❖</div>
      <div className="absolute bottom-5 right-5 text-amber-600 font-serif-vn text-2xl select-none leading-none opacity-80">❖</div>

      {/* Certificate Header */}
      <div className="text-center space-y-1 relative z-10 pt-1">
        <p className="text-[10px] sm:text-xs font-extrabold tracking-widest text-slate-700 uppercase font-sans">
          HỆ THỐNG GIA SƯ TIN HỌC {educationLevelLabel} • {displaySchoolName.toUpperCase()} • {displayGradeLabel} (LỚP {displayClassName.toUpperCase()})
        </p>
        <p className="text-[10px] sm:text-[11px] font-medium tracking-wider text-slate-500 italic font-serif-vn">
          CHƯƠNG TRÌNH GDPT 2018 • BỘ SÁCH GIÁO KHOA: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
        </p>

        <div className="pt-2 pb-0.5">
          <h1 className={`text-2xl sm:text-4xl font-extrabold uppercase tracking-wide ${activeTheme.titleColor} font-title-serif-vn drop-shadow-2xs`}>
            GIẤY CHỨNG NHẬN VINH DANH
          </h1>
          <div className="w-32 sm:w-44 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-1" />
          <p className="text-xs sm:text-sm font-bold tracking-wider text-slate-600 mt-1 uppercase font-sans">
            BẢNG VÀNG THÀNH TÍCH MÔN TIN HỌC {educationLevelLabel} ({displayGradeLabel})
          </p>
        </div>
      </div>

      {/* Certificate Body */}
      <div className="text-center space-y-2 relative z-10 my-auto py-1">
        <p className="text-xs sm:text-sm italic text-slate-700 font-serif-vn">
          Chứng nhận và biểu dương thành tích xuất sắc của em:
        </p>

        {/* Recipient Student Name in Vietnamese Calligraphy Font */}
        <div className="py-0.5">
          <h2
            className={`text-4xl sm:text-6xl font-normal text-indigo-950 ${calligraphyFontClass} tracking-normal leading-tight py-1 drop-shadow-2xs`}
          >
            {displayStudentName}
          </h2>
          <p className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5 font-sans">
            {displayGradeLabel} • Lớp:{' '}
            <span className="underline underline-offset-4 decoration-amber-500 text-indigo-800 font-extrabold">
              {displayClassName}
            </span>
            {displaySchoolName ? ` • ${displaySchoolName}` : ''}
          </p>
        </div>

        {/* Achievement Citation */}
        <div className="max-w-xl mx-auto space-y-1 text-xs sm:text-sm text-slate-800 leading-relaxed font-serif-vn">
          <p>
            Đã hoàn thành xuất sắc đợt thi:{' '}
            <strong className="text-slate-900 font-bold">{cert.examBatch || 'Khảo sát năng lực Tin học'}</strong>
          </p>
          <p className="text-xs text-slate-600 font-sans">
            Nội dung: <span className="font-semibold text-slate-800">{cert.lessonTitle}</span>
          </p>

          {/* Score badge highlight */}
          <div className="pt-1.5 flex items-center justify-center gap-3">
            <div className={`px-4 py-1.5 rounded-xl border ${activeTheme.badgeBg} font-sans shadow-xs flex items-center gap-2`}>
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-xs sm:text-sm font-bold">
                Điểm số: <strong className="text-base sm:text-lg font-black text-indigo-950">{cert.score.toFixed(1)}/10.0</strong> ({cert.percentage}%)
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-xs sm:text-sm font-extrabold uppercase text-amber-900">
                Xếp loại: {getRankByScore(cert.score)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Footer: Date, Official Seal & Teacher Signature */}
      <div className="grid grid-cols-3 items-end pt-3 relative z-10 text-center font-sans text-xs">
        {/* Left Column: Certificate Code & QR info */}
        <div className="text-left text-[10px] text-slate-500 space-y-0.5">
          <p className="font-mono">
            Số hiệu:{' '}
            <strong>
              {cert.certificateCode || `VINH-DANH-${displayClassName.toUpperCase()}-${Math.abs(cert.date).toString().slice(-6)}`}
            </strong>
          </p>
          <p className="text-[9px] text-slate-400">Hệ thống khảo thí tự động</p>
          <div className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Xác thực chuẩn SGK</span>
          </div>
        </div>

        {/* Middle Column: Golden Seal */}
        <div className="flex flex-col items-center justify-center">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 ${activeTheme.sealColor} flex flex-col items-center justify-center shadow-lg relative transform rotate-6 select-none`}>
            <Award className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider text-center leading-tight">
              VINH DANH<br />XUẤT SẮC
            </span>
          </div>
        </div>

        {/* Right Column: Date & Teacher Signature */}
        <div className="text-right space-y-1">
          <p className="text-[11px] text-slate-600 italic font-serif-vn">
            {formatDate(cert.date)}
          </p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
            GIÁO VIÊN CHUYÊN MÔN
          </p>
          <div className="h-9 flex items-center justify-end">
            <span className="font-calligraphy text-2xl sm:text-3xl font-normal text-indigo-900 pr-1">
              Ms. Trúc
            </span>
          </div>
          <p className="text-xs font-black text-indigo-900 font-sans">
            GV: Ms. Trúc Tin Học
          </p>
        </div>
      </div>
    </div>
  );
};

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificates,
  studentProfile,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [theme, setTheme] = useState<'gold' | 'red' | 'blue'>('gold');
  const [calligraphyStyle, setCalligraphyStyle] = useState<'great-vibes' | 'dancing' | 'charm'>('great-vibes');
  const [useLoginProfile, setUseLoginProfile] = useState<boolean>(false);

  // Filters for Certificates
  const [filterBatch, setFilterBatch] = useState<string>('all');
  const [filterGrade, setFilterGrade] = useState<string>('all');
  const [filterClass, setFilterClass] = useState<string>('all');
  const [filterSearch, setFilterSearch] = useState<string>('');

  // Print Mode: 'single' (only current viewed certificate) or 'batch' (all filtered certificates)
  const [printMode, setPrintMode] = useState<'single' | 'batch'>('single');

  // Extract available filter options
  const availableBatches = useMemo(() => {
    const set = new Set<string>();
    certificates.forEach((c) => {
      if (c.examBatch && c.examBatch.trim()) set.add(c.examBatch.trim());
    });
    return Array.from(set);
  }, [certificates]);

  const availableGrades = useMemo(() => {
    const set = new Set<number>();
    certificates.forEach((c) => {
      if (c.gradeNumber) {
        set.add(c.gradeNumber);
      } else {
        const m = (c.className || '').match(/^(\d+)/);
        if (m) set.add(parseInt(m[1], 10));
      }
    });
    return Array.from(set).sort((a, b) => a - b);
  }, [certificates]);

  const availableClasses = useMemo(() => {
    const set = new Set<string>();
    certificates.forEach((c) => {
      if (c.className && c.className.trim()) set.add(c.className.trim());
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }, [certificates]);

  // Filtered certificates list
  const filteredCertificates = useMemo(() => {
    return certificates.filter((c) => {
      if (filterBatch !== 'all' && c.examBatch !== filterBatch) return false;
      if (filterGrade !== 'all') {
        const g = c.gradeNumber || (c.className.match(/^(\d+)/) ? parseInt(c.className.match(/^(\d+)/)![1], 10) : 0);
        if (String(g) !== filterGrade) return false;
      }
      if (filterClass !== 'all' && c.className !== filterClass) return false;
      if (filterSearch.trim()) {
        const q = filterSearch.toLowerCase().trim();
        const matchName = (c.studentName || '').toLowerCase().includes(q);
        const matchClass = (c.className || '').toLowerCase().includes(q);
        const matchBatch = (c.examBatch || '').toLowerCase().includes(q);
        if (!matchName && !matchClass && !matchBatch) return false;
      }
      return true;
    });
  }, [certificates, filterBatch, filterGrade, filterClass, filterSearch]);

  // Ensure currentIndex stays within bounds when filter changes
  useEffect(() => {
    if (currentIndex >= filteredCertificates.length) {
      setCurrentIndex(0);
    }
  }, [filteredCertificates.length, currentIndex]);

  // Listen to print lifecycle
  useEffect(() => {
    const handleBeforePrint = () => {
      document.body.classList.add('printing-certificates');
    };
    const handleAfterPrint = () => {
      document.body.classList.remove('printing-certificates');
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
      document.body.classList.remove('printing-certificates');
    };
  }, []);

  if (!isOpen || certificates.length === 0) return null;

  const currentCert = filteredCertificates[currentIndex] || filteredCertificates[0];

  const handlePrintSingle = () => {
    sound.playClick();
    setPrintMode('single');
    document.body.classList.add('printing-certificates');
    setTimeout(() => {
      window.print();
    }, 120);
  };

  const handlePrintBatch = () => {
    if (filteredCertificates.length === 0) {
      alert('Không có giấy chứng nhận nào thỏa mãn bộ lọc để in!');
      return;
    }
    sound.playClick();
    setPrintMode('batch');
    document.body.classList.add('printing-certificates');
    setTimeout(() => {
      window.print();
    }, 120);
  };

  const handlePrev = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredCertificates.length - 1));
  };

  const handleNext = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev < filteredCertificates.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      {/* Interactive Modal (Screen view only) */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in overflow-y-auto no-print">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-5xl w-full my-auto flex flex-col overflow-hidden animate-in zoom-in-95">
          {/* Top Controls Bar */}
          <div className="p-3.5 sm:px-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-xs">
                <Medal className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold">
                  Giấy Chứng Nhận Vinh Danh Học Sinh
                </h2>
                <p className="text-xs text-slate-400">
                  {filteredCertificates.length > 0 ? (
                    <>
                      Đang xem <strong className="text-amber-300 font-bold">{currentIndex + 1}</strong>/
                      <strong className="text-white">{filteredCertificates.length}</strong> chứng nhận
                      {filteredCertificates.length !== certificates.length && (
                        <span> (lọc từ tổng số {certificates.length})</span>
                      )}
                    </>
                  ) : (
                    'Không có chứng nhận nào phù hợp bộ lọc'
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Nút đồng bộ theo Khai báo đăng nhập của học sinh */}
              {studentProfile && (
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setUseLoginProfile((prev) => !prev);
                  }}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    useLoginProfile
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-xs'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white hover:border-slate-500'
                  }`}
                  title="Cập nhật thông tin Giấy chứng nhận hiện tại theo Hồ sơ học sinh đang đăng nhập"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>{useLoginProfile ? 'Đang dùng Hồ sơ ĐN' : 'Theo Hồ sơ ĐN'}</span>
                </button>
              )}

              {/* Chọn kiểu chữ Thư pháp */}
              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
                <Type className="w-3.5 h-3.5 text-amber-400 ml-1 hidden sm:inline" />
                <button
                  type="button"
                  onClick={() => setCalligraphyStyle('great-vibes')}
                  className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    calligraphyStyle === 'great-vibes'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  title="Phông thư pháp nghệ thuật 1 (Great Vibes)"
                >
                  Thư pháp 1
                </button>
                <button
                  type="button"
                  onClick={() => setCalligraphyStyle('dancing')}
                  className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    calligraphyStyle === 'dancing'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  title="Phông thư pháp thanh thoát 2 (Dancing Script)"
                >
                  Thư pháp 2
                </button>
                <button
                  type="button"
                  onClick={() => setCalligraphyStyle('charm')}
                  className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    calligraphyStyle === 'charm'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  title="Phông thư pháp truyền thống 3 (Charm)"
                >
                  Thư pháp 3
                </button>
              </div>

              {/* Theme switcher */}
              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
                <button
                  type="button"
                  onClick={() => setTheme('gold')}
                  className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    theme === 'gold' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Vàng Kim
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('red')}
                  className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    theme === 'red' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Đỏ Thắm
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('blue')}
                  className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    theme === 'blue' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Xanh Hoàng Gia
                </button>
              </div>

              {/* Carousel navigation */}
              {filteredCertificates.length > 1 && (
                <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-1 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Chứng nhận trước"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono font-bold px-1 text-amber-300">
                    {currentIndex + 1}/{filteredCertificates.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-1 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Chứng nhận tiếp theo"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Close */}
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="w-8 h-8 rounded-full hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filter Bar (Theo Đợt, Theo Khối, Theo Lớp, Tìm Kiếm) */}
          <div className="px-4 sm:px-6 py-2.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2.5 text-xs">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Lọc theo Đợt thi */}
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="font-bold text-slate-700">Đợt thi:</span>
                <select
                  value={filterBatch}
                  onChange={(e) => {
                    setFilterBatch(e.target.value);
                    setCurrentIndex(0);
                  }}
                  className="px-2.5 py-1.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 text-xs max-w-[200px] truncate"
                >
                  <option value="all">Tất cả đợt thi ({certificates.length})</option>
                  {availableBatches.map((b, idx) => {
                    const count = certificates.filter((c) => c.examBatch === b).length;
                    return (
                      <option key={idx} value={b}>
                        {b} ({count})
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Lọc theo Khối */}
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="font-bold text-slate-700">Khối:</span>
                <select
                  value={filterGrade}
                  onChange={(e) => {
                    setFilterGrade(e.target.value);
                    setCurrentIndex(0);
                  }}
                  className="px-2.5 py-1.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 text-xs"
                >
                  <option value="all">Tất cả khối ({certificates.length})</option>
                  {availableGrades.map((g) => {
                    const count = certificates.filter((c) => {
                      const gradeNum = c.gradeNumber || (c.className.match(/^(\d+)/) ? parseInt(c.className.match(/^(\d+)/)![1], 10) : 0);
                      return gradeNum === g;
                    }).length;
                    return (
                      <option key={g} value={String(g)}>
                        Khối {g} ({count})
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Lọc theo Lớp */}
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-700">Lớp:</span>
                <select
                  value={filterClass}
                  onChange={(e) => {
                    setFilterClass(e.target.value);
                    setCurrentIndex(0);
                  }}
                  className="px-2.5 py-1.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 text-xs max-w-[120px] truncate"
                >
                  <option value="all">Tất cả lớp ({certificates.length})</option>
                  {availableClasses.map((cls, idx) => {
                    const count = certificates.filter((c) => c.className === cls).length;
                    return (
                      <option key={idx} value={cls}>
                        Lớp {cls} ({count})
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Tìm kiếm tên */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                <input
                  type="text"
                  placeholder="Tìm tên học sinh..."
                  value={filterSearch}
                  onChange={(e) => {
                    setFilterSearch(e.target.value);
                    setCurrentIndex(0);
                  }}
                  className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-300 bg-white text-xs w-36 sm:w-44 focus:outline-indigo-500"
                />
              </div>
            </div>

            {/* Print Action Buttons */}
            <div className="flex items-center gap-2 ml-auto">
              {/* Nút 1: In 1 giấy đang xem */}
              <button
                type="button"
                onClick={handlePrintSingle}
                disabled={!currentCert}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs transition-all shadow-xs cursor-pointer disabled:opacity-50"
                title="In duy nhất 1 giấy chứng nhận đang xem trên màn hình"
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>In 1 giấy này</span>
              </button>

              {/* Nút 2: In / Xuất PDF Hàng Loạt Tất Cả Giấy Theo Bộ Lọc */}
              <button
                type="button"
                onClick={handlePrintBatch}
                disabled={filteredCertificates.length === 0}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50"
                title={`In / Lưu PDF toàn bộ ${filteredCertificates.length} giấy chứng nhận theo bộ lọc hiện tại (mỗi học sinh 1 trang A4 riêng)`}
              >
                <FileCheck2 className="w-4 h-4" />
                <span>In tất cả ({filteredCertificates.length} giấy)</span>
              </button>
            </div>
          </div>

          {/* Certificate Canvas Preview */}
          <div className="p-4 sm:p-8 bg-slate-100 flex items-center justify-center overflow-x-auto min-h-[460px]">
            {currentCert ? (
              <CertificateCard
                cert={currentCert}
                theme={theme}
                calligraphyStyle={calligraphyStyle}
                studentProfile={studentProfile}
                useLoginProfile={useLoginProfile}
                isPrint={false}
              />
            ) : (
              <div className="text-center py-16 px-4">
                <Award className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-700">
                  Không tìm thấy giấy chứng nhận nào phù hợp
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Hãy thử chọn lại Đợt thi, Khối, Lớp hoặc xóa ô tìm kiếm để hiển thị danh sách chứng nhận.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFilterBatch('all');
                    setFilterGrade('all');
                    setFilterClass('all');
                    setFilterSearch('');
                  }}
                  className="mt-4 px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md cursor-pointer hover:bg-indigo-700"
                >
                  Đặt lại tất cả bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dedicated Print Portal (Rendered into document.body, visible ONLY when printing) */}
      {createPortal(
        <div id="certificate-print-portal">
          {printMode === 'single' ? (
            currentCert && (
              <div className="certificate-page-item">
                <CertificateCard
                  cert={currentCert}
                  theme={theme}
                  calligraphyStyle={calligraphyStyle}
                  studentProfile={studentProfile}
                  useLoginProfile={useLoginProfile}
                  isPrint={true}
                />
              </div>
            )
          ) : (
            filteredCertificates.map((cert, index) => (
              <div
                key={cert.certificateCode || `${cert.studentName}-${cert.className}-${index}`}
                className="certificate-page-item"
              >
                <CertificateCard
                  cert={cert}
                  theme={theme}
                  calligraphyStyle={calligraphyStyle}
                  studentProfile={studentProfile}
                  useLoginProfile={false} // Never overwrite batch certificates with login profile!
                  isPrint={true}
                />
              </div>
            ))
          )}
        </div>,
        document.body
      )}
    </>
  );
};
