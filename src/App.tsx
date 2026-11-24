import React, { useState, useEffect, useMemo } from 'react';
import {
  DifficultyLevel,
  LessonTopic,
  Question,
  QuizMode,
  QuizSession,
  StudentProfile,
  QuestionSourcePreference,
  EducationLevel,
  WrongQuestionRecord,
  StudentScoreRecord,
  CertificateData,
  CustomExam,
} from './types/quiz';
import {
  CURRICULUM_LESSONS,
  generateFallbackQuestions,
} from './data/curriculum';
import { Header } from './components/Header';
import { LessonSelector } from './components/LessonSelector';
import { QuestionCountSelector } from './components/QuestionCountSelector';
import { DifficultySelector } from './components/DifficultySelector';
import { ModeSelector } from './components/ModeSelector';
import { QuestionSourceSelector } from './components/QuestionSourceSelector';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { PrintView } from './components/PrintView';
import { HistoryModal } from './components/HistoryModal';
import { Dashboard } from './components/Dashboard';
import { StudentProfileModal } from './components/StudentProfileModal';
import { StudentProfileDisplay } from './components/StudentProfileDisplay';
import { RolePortalHero } from './components/RolePortalHero';
import { sound } from './utils/sound';
import { isQuestionAnswerCorrect, getQuestionAnswerScore } from './utils/questionEvaluator';
import { applyQuizShuffle } from './utils/quizShuffler';
import { EssayModal } from './components/EssayModal';
import { MistakeNotebookModal } from './components/MistakeNotebookModal';
import { ScorebookLeaderboardModal } from './components/ScorebookLeaderboardModal';
import { CertificateModal } from './components/CertificateModal';
import { BgmMusicPlayer } from './components/BgmMusicPlayer';
import { SidebarMenu } from './components/SidebarMenu';
import { GuideModal } from './components/GuideModal';
import { LinksDirectoryModal } from './components/LinksDirectoryModal';
import {
  INITIAL_SCORE_RECORDS,
  DEFAULT_EXAM_BATCHES,
  normalizeExamBatch,
  inferExamBatchFromTitle,
} from './data/defaultScores';
import { DEFAULT_CUSTOM_EXAMS } from './data/defaultCustomExams';
import {
  subscribeToScores,
  saveScoreToFirebase,
  deleteScoreFromFirebase,
  deleteScoresByClassFromFirebase,
  renameClassInFirebase,
  syncBatchScoresToFirebase,
  subscribeToCustomExams,
  syncInitialCustomExamsToFirebase,
  saveCustomExamToFirebase,
  deleteCustomExamFromFirebase,
  moveCustomExamToTrash,
  getLocalCustomExams,
  subscribeToCurriculumBank,
  subscribeToGSheetWebhookUrl,
  getStoredAdminSession,
  saveAdminSession,
  isAuthorizedAdmin,
  ADMIN_EMAIL,
  AdminSession,
} from './services/firebase';
import { BUILT_IN_QUESTIONS } from './data/questionBank';
import { AdminAuthModal } from './components/admin/AdminAuthModal';
import { AdminStudioModal } from './components/admin/AdminStudioModal';
import { AdminExamSection } from './components/admin/AdminExamSection';
import { sendScoreToGoogleSheetWebhook, setGlobalWebhookUrl } from './services/googleSheets';
import { QUESTIONS_GRADE_5 } from './data/questionsGrade5';
import { Grade5ExamAuditAndGameModal } from './components/Grade5ExamAuditAndGameModal';
import { InteractiveGameModal } from './components/InteractiveGameModal';
import { TBSGameItem } from './data/sidebarGames';
import schoolLogo from './assets/logo-thcs-tan-binh.jpg';
import {
  Sparkles,
  Play,
  Loader2,
  CheckCircle,
  BrainCircuit,
  GraduationCap,
  Layers,
  Award,
  Layers3,
  Bot,
  BookOpen,
  ArrowRightLeft,
  Edit3,
  GripVertical,
  ShieldCheck,
  Gamepad2,
  Printer
} from 'lucide-react';

const STUDY_TIPS = [
  'Mẹo: Đọc kỹ từ khóa phủ định như "không phải", "ngoại trừ" trong đề thi!',
  'Phương pháp 40-40-20 giúp cân bằng giữa lấy chắc điểm cơ bản và bứt phá điểm 9-10.',
  'Làm trắc nghiệm: Hãy áp dụng phương pháp loại trừ 2 phương án sai rõ rệt trước.',
  'Ôn tập theo cấp độ giúp bạn phát hiện chính xác lỗ hổng kiến thức để bù đắp kịp thời!',
  'Bạn có thể chọn kết hợp nhiều bài học để tạo đề kiểm tra tổng hợp kiến thức cả chương!',
];

export default function App() {
  const [step, setStep] = useState<'setup' | 'quiz' | 'result' | 'print'>('setup');

  // Education level state ('tieu_hoc' | 'thcs')
  const [educationLevel, setEducationLevel] = useState<EducationLevel>('thcs');

  // Grade filter state (3 | 4 | 5 | 6 | 7 | 8 | 9)
  const [currentGradeFilter, setCurrentGradeFilter] = useState<3 | 4 | 5 | 6 | 7 | 8 | 9>(8);

  // Multi-selection lessons state
  const [selectedLessons, setSelectedLessons] = useState<LessonTopic[]>(() => {
    const defaultGrade8Lessons = CURRICULUM_LESSONS.filter((l) => l.gradeNumber === 8);
    return defaultGrade8Lessons.slice(0, 1);
  });

  // Custom lesson mode
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [customLessonTitle, setCustomLessonTitle] = useState<string>('');
  const [customSubject, setCustomSubject] = useState<string>('');
  const [customGrade, setCustomGrade] = useState<string>('');
  const [customNotes, setCustomNotes] = useState<string>('');

  // Quiz settings
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('tong_hop');
  const [quizMode, setQuizMode] = useState<QuizMode>('exam');
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);
  const [shuffleAnswers, setShuffleAnswers] = useState<boolean>(true);

  // Question generation source: AI vs Offline + Personal API Key
  const [sourcePreference, setSourcePreference] = useState<QuestionSourcePreference>('ai');
  const [customApiKey, setCustomApiKey] = useState<string>('');

  // Loading & generation state
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [loadingTipIndex, setLoadingTipIndex] = useState<number>(0);

  // Active session and history
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null);
  const [history, setHistory] = useState<QuizSession[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Student Profile state
  const [studentProfile, setStudentProfile] = useState<StudentProfile>({
    fullName: 'Bạn Nhỏ Thông Thái',
    grade: 'Khối 8',
    className: '8A1',
    schoolName: 'THCS',
    avatar: 'robot-ai',
  });
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isEssayModalOpen, setIsEssayModalOpen] = useState<boolean>(false);
  const [essayModalGrade, setEssayModalGrade] = useState<number>(9);
  const [midtermBannerGrade, setMidtermBannerGrade] = useState<5 | 8 | 9>(5);
  const [isGrade5AuditModalOpen, setIsGrade5AuditModalOpen] = useState<boolean>(false);
  const [grade5AuditInitialTab, setGrade5AuditInitialTab] = useState<'audit' | 'game'>('audit');
  const [lastUpdatedProfileMsg, setLastUpdatedProfileMsg] = useState<string>('');

  const [selectedGame, setSelectedGame] = useState<TBSGameItem | null>(null);
  const [isGameModalOpen, setIsGameModalOpen] = useState<boolean>(false);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [homeView, setHomeView] = useState<'overview' | 'topics' | 'exams'>('overview');

  // Sidebar state (Thanh Menu bên trái)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('ontap_sidebar_collapsed') === 'true';
    } catch {
      return false;
    }
  });
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState<boolean>(false);

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('ontap_sidebar_collapsed', String(next));
      } catch {}
      return next;
    });
  };

  const handleToggleSidebar = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsSidebarMobileOpen((prev) => !prev);
    } else {
      toggleSidebarCollapse();
    }
  };

  const handleScrollToCustomExams = () => {
    if (step !== 'setup') {
      setStep('setup');
    }
    setHomeView('exams');
  };

  const handleScrollToLessonTopics = () => {
    if (step !== 'setup') {
      setStep('setup');
    }
    setHomeView('topics');
  };

  // Track previous step before entering print view
  const [stepBeforePrint, setStepBeforePrint] = useState<'setup' | 'result'>('setup');
  // Pending session restore across browser reloads
  const [pendingResumeSession, setPendingResumeSession] = useState<QuizSession | null>(null);

  // Mistake Notebook state
  const [mistakes, setMistakes] = useState<WrongQuestionRecord[]>([]);
  const [isMistakeModalOpen, setIsMistakeModalOpen] = useState<boolean>(false);

  // Scorebook & Leaderboard state
  const [scores, setScores] = useState<StudentScoreRecord[]>(() => {
    try {
      const saved = localStorage.getItem('ontap_student_scorebook');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((s: StudentScoreRecord) => ({
            ...s,
            examBatch: normalizeExamBatch(s.examBatch),
          }));
        }
      }
    } catch {}
    return INITIAL_SCORE_RECORDS;
  });
  const [isScorebookModalOpen, setIsScorebookModalOpen] = useState<boolean>(false);
  const [activeCertificates, setActiveCertificates] = useState<CertificateData[]>([]);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState<boolean>(false);
  const [isLinksModalOpen, setIsLinksModalOpen] = useState<boolean>(false);

  // Admin Studio state (Chỉ dành riêng cho saohom2002@gmail.com)
  const [adminSession, setAdminSession] = useState<AdminSession | null>(() => getStoredAdminSession());
  const [isAdminAuthModalOpen, setIsAdminAuthModalOpen] = useState<boolean>(false);
  const [isAdminStudioModalOpen, setIsAdminStudioModalOpen] = useState<boolean>(false);
  const [studioInitialExamId, setStudioInitialExamId] = useState<string | null>(null);
  const [studioInitialAction, setStudioInitialAction] = useState<
    'list' | 'create' | 'edit_info' | 'edit_questions' | null
  >(null);
  const [topicQuestionCounts, setTopicQuestionCounts] = useState<Record<string, number>>({});
  const [customExams, setCustomExams] = useState<CustomExam[]>(() => getLocalCustomExams());

  // Load history, student profile, custom API key, sound preference & mistakes from localStorage
  useEffect(() => {
    try {
      const savedMistakes = localStorage.getItem('ontap_wrong_questions');
      if (savedMistakes) {
        const parsed = JSON.parse(savedMistakes);
        if (Array.isArray(parsed)) {
          setMistakes(parsed);
        }
      }
      const savedProfile = localStorage.getItem('ontap_student_profile');
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        if (parsed && typeof parsed === 'object' && parsed.fullName) {
          setStudentProfile(parsed);
          // Sync grade filter & education level
          const gNum = parseInt(String(parsed.grade).replace(/\D/g, ''), 10);
          if ([3, 4, 5, 6, 7, 8, 9].includes(gNum)) {
            const validGrade = gNum as 3 | 4 | 5 | 6 | 7 | 8 | 9;
            setCurrentGradeFilter(validGrade);
            setEducationLevel([3, 4, 5].includes(validGrade) ? 'tieu_hoc' : 'thcs');
            const inGrade = CURRICULUM_LESSONS.filter((l) => l.gradeNumber === validGrade);
            if (inGrade.length > 0) {
              setSelectedLessons([inGrade[0]]);
            }
          }
        }
      }

      const savedApiKey = localStorage.getItem('ontap_gemini_api_key');
      if (savedApiKey) {
        setCustomApiKey(savedApiKey);
      }

      const savedSource = localStorage.getItem('ontap_source_preference');
      if (savedSource === 'offline' || savedSource === 'ai') {
        setSourcePreference(savedSource);
      }

      const savedHist = localStorage.getItem('ontap_quiz_history');
      if (savedHist) {
        const parsed = JSON.parse(savedHist);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setHistory(parsed);
        } else {
          initDemoData();
        }
      } else {
        initDemoData();
      }

      const savedSound = localStorage.getItem('ontap_sound_enabled');
      if (savedSound !== null) {
        const val = savedSound === 'true';
        setSoundEnabled(val);
        sound.enabled = val;
      }

      // Check for active in-progress quiz session across reloads
      const savedActive = localStorage.getItem('ontap_active_session');
      if (savedActive) {
        try {
          const parsedActive: QuizSession = JSON.parse(savedActive);
          if (
            parsedActive &&
            parsedActive.status === 'in_progress' &&
            Array.isArray(parsedActive.questions) &&
            parsedActive.questions.length > 0
          ) {
            setPendingResumeSession(parsedActive);
          }
        } catch {}
      }
    } catch {
      initDemoData();
    }

    // Đồng bộ điểm ban đầu lên Firebase nếu trên đám mây chưa có
    syncBatchScoresToFirebase(INITIAL_SCORE_RECORDS);

    // Lắng nghe điểm số thời gian thực từ Firebase Realtime Database
    const unsubscribeScores = subscribeToScores((remoteScores) => {
      if (remoteScores && remoteScores.length > 0) {
        const normalized = remoteScores.map((s) => ({
          ...s,
          examBatch: normalizeExamBatch(s.examBatch),
        }));
        setScores(normalized);
        try {
          localStorage.setItem('ontap_student_scorebook', JSON.stringify(normalized));
        } catch {}
      }
    });

    // Đồng bộ đề thi Admin mẫu ban đầu lên Firebase nếu trên đám mây chưa có
    syncInitialCustomExamsToFirebase();

    // Lắng nghe đề thi và đề ôn tập thời gian thực từ Firebase Realtime Database
    const unsubscribeExams = subscribeToCustomExams((remoteExams) => {
      if (Array.isArray(remoteExams)) {
        setCustomExams(remoteExams);
      }
    });

    // Lắng nghe Ngân hàng câu hỏi theo Chủ đề / Bài học SGK (curriculum_bank)
    const unsubscribeCurriculumBank = subscribeToCurriculumBank((counts) => {
      setTopicQuestionCounts(counts);
    });

    // Lắng nghe cấu hình Google Sheets Webhook từ Firebase (để mọi máy học sinh đều nhận được)
    const unsubscribeGSheetWebhook = subscribeToGSheetWebhookUrl((url) => {
      setGlobalWebhookUrl(url);
    });

    return () => {
      unsubscribeScores();
      unsubscribeExams();
      unsubscribeCurriculumBank();
      unsubscribeGSheetWebhook();
    };
  }, []);

  // Auto-save active quiz session to survive accidental browser reloads
  useEffect(() => {
    if (step === 'quiz' && currentSession && currentSession.status === 'in_progress') {
      try {
        localStorage.setItem('ontap_active_session', JSON.stringify(currentSession));
      } catch {}
    }
  }, [step, currentSession]);

  // Multi-lesson toggle
  const handleToggleLesson = (lesson: LessonTopic) => {
    if (lesson.gradeNumber === 5 || lesson.gradeNumber === 8 || lesson.gradeNumber === 9) {
      setMidtermBannerGrade(lesson.gradeNumber);
    }
    setSelectedLessons((prev) => {
      const exists = prev.some((l) => l.id === lesson.id);
      if (exists) {
        return prev.filter((l) => l.id !== lesson.id);
      } else {
        return [...prev, lesson];
      }
    });
  };

  // Launch Midterm Exam directly (Grade 5, Grade 8 or Grade 9) with optional game mode filtering
  const handleLaunchMidtermExam = (
    gradeNum: 5 | 8 | 9 = 5,
    gameTypeFilter?: 'all' | 'multiple_choice' | 'true_false' | 'fill_blank' | 'matching'
  ) => {
    sound.playClick();
    setCurrentGradeFilter(gradeNum);
    setMidtermBannerGrade(gradeNum);
    setEducationLevel(gradeNum === 5 ? 'tieu_hoc' : 'thcs');

    if (gradeNum === 5 && gameTypeFilter && gameTypeFilter !== 'all') {
      const allQ = QUESTIONS_GRADE_5['tin5-on-tap-giua-ki-1'] || [];
      const isTrueFalse = (q: Question) => {
        if (q.subType === 'true_false') return true;
        const lower = q.question.toLowerCase();
        return lower.includes('đúng hay sai') || lower.includes('đúng/sai');
      };

      let filtered: Question[] = [];
      let gameTitle = '';
      if (gameTypeFilter === 'multiple_choice') {
        filtered = allQ.filter((q) => (q.type === 'multiple_choice' || !q.type) && !isTrueFalse(q));
        gameTitle = '⚡ Trò chơi: Trắc nghiệm nhanh - Tin học 5 (Bài 1, 2, 3, 4)';
      } else if (gameTypeFilter === 'true_false') {
        filtered = allQ.filter((q) => isTrueFalse(q));
        gameTitle = '🎯 Trò chơi: Đúng hay Sai? - Tin học 5 (Bài 1, 2, 3, 4)';
      } else if (gameTypeFilter === 'fill_blank') {
        filtered = allQ.filter((q) => q.type === 'fill_blank');
        gameTitle = '✍️ Trò chơi: Ô chữ Điền khuyết - Tin học 5 (Bài 1, 2, 3, 4)';
      } else if (gameTypeFilter === 'matching') {
        filtered = allQ.filter((q) => q.type === 'matching');
        gameTitle = '🔗 Trò chơi: Nối cột thông thái - Tin học 5 (Bài 1, 2, 3, 4)';
      }

      if (filtered.length > 0) {
        const newSession: QuizSession = {
          id: `sess-game-${Date.now()}`,
          lessonId: 'tin5-on-tap-giua-ki-1',
          lessonIds: ['tin5-on-tap-giua-ki-1'],
          lessonTitle: gameTitle,
          selectedLessonTitles: [gameTitle],
          subject: 'Trò chơi học tập Tin học 5',
          grade: 'Khối 5',
          gradeNumber: 5,
          difficultyMode: 'tong_hop',
          totalQuestions: filtered.length,
          questions: filtered,
          userAnswers: {},
          flaggedQuestions: [],
          startTime: Date.now(),
          score: 0,
          percentage: 0,
          status: 'in_progress',
          mode: 'practice',
          timeSpentSeconds: 0,
          source: 'offline_bank',
        };
        setCurrentSession(newSession);
        setStep('quiz');
        setIsGrade5AuditModalOpen(false);
        return;
      }
    }

    const targetId =
      gradeNum === 5
        ? 'tin5-on-tap-giua-ki-1'
        : gradeNum === 9
        ? 'tin9-on-tap-giua-ki-1'
        : 'tin8-on-tap-giua-ki-1';
    const midtermTopic = CURRICULUM_LESSONS.find((l) => l.id === targetId);
    if (midtermTopic) {
      setSelectedLessons([midtermTopic]);
    }
    const el = document.getElementById('lesson-selector-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Export / Print Grade 5 Exam with all 42 questions
  const handleExportGrade5Exam = () => {
    sound.playClick();
    const allQ = QUESTIONS_GRADE_5['tin5-on-tap-giua-ki-1'] || [];
    const newSession: QuizSession = {
      id: `sess-print-${Date.now()}`,
      lessonId: 'tin5-on-tap-giua-ki-1',
      lessonIds: ['tin5-on-tap-giua-ki-1'],
      lessonTitle: 'ĐỀ ÔN TẬP KIỂM TRA GIỮA KÌ 1 TIN HỌC 5 (BÀI 1, 2, 3, 4 - KNTT)',
      selectedLessonTitles: ['⭐ Ôn tập Giữa kì 1 Tin học 5 (Bài 1, 2, 3, 4 - KNTT)'],
      subject: 'Tin học 5',
      grade: 'Khối 5',
      gradeNumber: 5,
      difficultyMode: 'tong_hop',
      totalQuestions: allQ.length,
      questions: allQ,
      userAnswers: {},
      flaggedQuestions: [],
      startTime: Date.now(),
      score: 10,
      percentage: 100,
      status: 'completed',
      mode: 'exam',
      timeSpentSeconds: 0,
      source: 'offline_bank',
    };
    setStepBeforePrint('setup');
    setCurrentSession(newSession);
    setStep('print');
    setIsGrade5AuditModalOpen(false);
  };

  // ==========================================================================
  // ADMIN STUDIO & QUẢN TRỊ ĐỀ ĐÃ TẠO HANDLERS
  // ==========================================================================
  const handleOpenAdminStudio = (options?: {
    examId?: string;
    action?: 'list' | 'create' | 'edit_info' | 'edit_questions';
  }) => {
    sound.playClick();
    if (adminSession && isAuthorizedAdmin(adminSession.email)) {
      setStudioInitialExamId(options?.examId || null);
      setStudioInitialAction(options?.action || 'list');
      setIsAdminStudioModalOpen(true);
    } else {
      setIsAdminAuthModalOpen(true);
    }
  };

  // Mở trình Quản trị / Bổ sung câu hỏi trực tiếp cho 1 Chủ đề / Bài học SGK (Chỉ dành cho Admin)
  const handleManageTopicBank = async (lesson: LessonTopic) => {
    sound.playClick();
    if (!adminSession || !isAuthorizedAdmin(adminSession.email)) {
      setIsAdminAuthModalOpen(true);
      return;
    }
    const bankExamId = `topic-bank-${lesson.id}`;
    let targetExam = customExams.find((e) => e.id === bankExamId);
    const currentBuiltIn = BUILT_IN_QUESTIONS[lesson.id] || [];

    if (!targetExam) {
      targetExam = {
        id: bankExamId,
        title: `[Ngân hàng Chủ đề] ${lesson.subject} - ${lesson.title}`,
        description: `Ngân hàng câu hỏi chuẩn SGK của bài "${lesson.title}" (${lesson.subject} - Khối ${lesson.gradeNumber}). Mọi câu hỏi thêm/sửa tại đây sẽ tự động cập nhật trực tiếp vào bài học ngoài trang chủ.`,
        subject: lesson.subject,
        grade: `Khối ${lesson.gradeNumber}`,
        gradeNumber: (lesson.gradeNumber || 8) as 3 | 4 | 5 | 6 | 7 | 8 | 9,
        category: 'practice',
        durationMinutes: 30,
        questions: currentBuiltIn.map((q, idx) => ({
          ...q,
          id: q.id || `q-${lesson.id}-${idx + 1}`,
        })),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        authorEmail: ADMIN_EMAIL,
        authorName: 'GV: Ms. Trúc Tin Học',
        isPublished: true,
      };
      setCustomExams((prev) => [targetExam!, ...prev]);
      await saveCustomExamToFirebase(targetExam);
    } else if (currentBuiltIn.length > (targetExam.questions?.length || 0)) {
      const existingIds = new Set(targetExam.questions.map((q) => q.id));
      const existingTexts = new Set(targetExam.questions.map((q) => q.question.trim().toLowerCase()));
      const missing = currentBuiltIn.filter(
        (q) => !existingIds.has(q.id) && !existingTexts.has(q.question.trim().toLowerCase())
      );
      if (missing.length > 0) {
        const updatedExam: CustomExam = {
          ...targetExam,
          questions: [...targetExam.questions, ...missing],
          updatedAt: Date.now(),
        };
        targetExam = updatedExam;
        setCustomExams((prev) => prev.map((e) => (e.id === updatedExam.id ? updatedExam : e)));
        await saveCustomExamToFirebase(updatedExam);
      }
    }

    setStudioInitialExamId(bankExamId);
    setStudioInitialAction('edit_questions');
    setIsAdminStudioModalOpen(true);
  };

  const handleUpdateCustomExam = async (updatedExam: CustomExam) => {
    setCustomExams((prev) =>
      prev.map((ex) => (ex.id === updatedExam.id ? updatedExam : ex))
    );
    await saveCustomExamToFirebase(updatedExam);
  };

  const handleDeleteCustomExam = async (examId: string) => {
    sound.playClick();
    setCustomExams((prev) => prev.filter((ex) => ex.id !== examId));
    await deleteCustomExamFromFirebase(examId);
  };

  const handleDuplicateCustomExam = async (exam: CustomExam) => {
    const clonedExam: CustomExam = {
      ...exam,
      id: `exam-admin-${Date.now()}`,
      title: `${exam.title} (Bản sao)`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      questions: (exam.questions || []).map((q, idx) => ({
        ...q,
        id: `q-copy-${Date.now()}-${idx + 1}`,
      })),
    };
    setCustomExams((prev) => [clonedExam, ...prev]);
    await saveCustomExamToFirebase(clonedExam);
  };

  const handleSaveSessionAsCustomExam = async (session: QuizSession) => {
    if (!adminSession || !isAuthorizedAdmin(adminSession.email)) {
      setIsAdminAuthModalOpen(true);
      return;
    }
    const gNum = ([3, 4, 5, 6, 7, 8, 9].includes(session.gradeNumber || 8)
      ? session.gradeNumber
      : 8) as 3 | 4 | 5 | 6 | 7 | 8 | 9;

    const newExam: CustomExam = {
      id: `exam-created-${Date.now()}`,
      title: session.lessonTitle || `Đề ôn tập Khối ${gNum}`,
      description: `Đề đã tạo gồm ${session.questions.length} câu hỏi (${
        session.selectedLessonTitles?.join(', ') || session.lessonTitle
      }).`,
      subject: gNum <= 5 ? 'Tin học Tiểu học' : 'Tin học THCS',
      grade: `Khối ${gNum}`,
      gradeNumber: gNum,
      category: session.mode === 'exam' ? 'exam' : 'practice',
      durationMinutes: session.questions.length <= 15 ? 15 : 45,
      questions: session.questions.map((q, idx) => ({
        ...q,
        id: q.id || `q-saved-${Date.now()}-${idx + 1}`,
      })),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      authorEmail: ADMIN_EMAIL,
      authorName: 'GV: Ms. Trúc Tin Học',
      isPublished: true,
    };

    setCustomExams((prev) => [newExam, ...prev]);
    await saveCustomExamToFirebase(newExam);

    // Mở ngay trình quản trị câu hỏi của đề vừa lưu để có thể thêm/sửa/xóa
    setStudioInitialExamId(newExam.id);
    setStudioInitialAction('edit_questions');
    setIsAdminStudioModalOpen(true);
  };

  const handleLaunchCustomExam = (exam: CustomExam, mode: 'exam' | 'practice' = 'exam') => {
    sound.playClick();
    if (!exam.questions || exam.questions.length === 0) {
      alert('Đề thi này hiện chưa có câu hỏi nào. Vui lòng vào Studio để thêm câu hỏi!');
      return;
    }

    // Tự động xáo ngẫu nhiên thứ tự câu hỏi trong đề khi học sinh vào luyện thi, giữ nguyên đáp án & lời giải
    const preparedQuestions = applyQuizShuffle(exam.questions, {
      shuffleQuestions: true,
      shuffleAnswers: false,
    });

    const newSession: QuizSession = {
      id: `sess-custom-${exam.id}-${Date.now()}`,
      lessonId: exam.id,
      lessonIds: [exam.id],
      lessonTitle: exam.title,
      selectedLessonTitles: [exam.title],
      subject: exam.subject || 'Tin học THCS',
      grade: exam.grade || `Khối ${exam.gradeNumber}`,
      gradeNumber: exam.gradeNumber,
      difficultyMode: 'tong_hop',
      totalQuestions: preparedQuestions.length,
      questions: preparedQuestions,
      userAnswers: {},
      flaggedQuestions: [],
      startTime: Date.now(),
      score: 0,
      percentage: 0,
      status: 'in_progress',
      mode: mode || exam.category || 'exam',
      timeSpentSeconds: 0,
      source: 'offline_bank',
    };

    setCurrentGradeFilter(exam.gradeNumber);
    setEducationLevel([3, 4, 5].includes(exam.gradeNumber) ? 'tieu_hoc' : 'thcs');
    setCurrentSession(newSession);
    setStep('quiz');
    setIsAdminStudioModalOpen(false);
  };

  const handlePrintCustomExam = (exam: CustomExam) => {
    sound.playClick();
    if (!exam.questions || exam.questions.length === 0) {
      alert('Đề thi này hiện chưa có câu hỏi nào để in!');
      return;
    }

    const newSession: QuizSession = {
      id: `sess-print-custom-${exam.id}-${Date.now()}`,
      lessonId: exam.id,
      lessonIds: [exam.id],
      lessonTitle: exam.title,
      selectedLessonTitles: [exam.title],
      subject: exam.subject || 'Tin học THCS',
      grade: exam.grade || `Khối ${exam.gradeNumber}`,
      gradeNumber: exam.gradeNumber,
      difficultyMode: 'tong_hop',
      totalQuestions: exam.questions.length,
      questions: exam.questions,
      userAnswers: {},
      flaggedQuestions: [],
      startTime: Date.now(),
      score: 10,
      percentage: 100,
      status: 'completed',
      mode: 'exam',
      timeSpentSeconds: 0,
      source: 'offline_bank',
    };

    setStepBeforePrint('setup');
    setCurrentSession(newSession);
    setStep('print');
    setIsAdminStudioModalOpen(false);
  };

  // Select all lessons in current grade
  const handleSelectAllInGrade = (gradeNum: 3 | 4 | 5 | 6 | 7 | 8 | 9) => {
    const inGrade = CURRICULUM_LESSONS.filter((l) => l.gradeNumber === gradeNum);
    setSelectedLessons((prev) => {
      const map = new Map<string, LessonTopic>();
      prev.forEach((l) => map.set(l.id, l));
      inGrade.forEach((l) => map.set(l.id, l));
      return Array.from(map.values());
    });
  };

  // Deselect all lessons
  const handleDeselectAll = () => {
    setSelectedLessons([]);
  };

  // Switch Grade Filter tab
  const handleGradeFilterChange = (newGrade: 3 | 4 | 5 | 6 | 7 | 8 | 9) => {
    setCurrentGradeFilter(newGrade);
    if ([3, 4, 5].includes(newGrade)) {
      setEducationLevel('tieu_hoc');
    } else {
      setEducationLevel('thcs');
    }
    if (newGrade === 5 || newGrade === 8 || newGrade === 9) {
      setMidtermBannerGrade(newGrade);
    }
    // If no lessons selected in this new grade, preselect the first lesson
    const inGrade = CURRICULUM_LESSONS.filter((l) => l.gradeNumber === newGrade);
    const hasSome = selectedLessons.some((l) => l.gradeNumber === newGrade);
    if (!hasSome && inGrade.length > 0) {
      setSelectedLessons([inGrade[0]]);
    }
  };

  // Save student profile
  const handleSaveProfile = (newProfile: StudentProfile) => {
    setStudentProfile(newProfile);
    setLastUpdatedProfileMsg(
      `Đã cập nhật hồ sơ: ${newProfile.fullName} - ${newProfile.grade} (Lớp ${newProfile.className})`
    );
    setTimeout(() => {
      setLastUpdatedProfileMsg('');
    }, 4000);

    // Auto-sync grade tab if valid
    const gNum = parseInt(String(newProfile.grade).replace(/\D/g, ''), 10);
    if ([3, 4, 5, 6, 7, 8, 9].includes(gNum)) {
      const validGrade = gNum as 3 | 4 | 5 | 6 | 7 | 8 | 9;
      setCurrentGradeFilter(validGrade);
      setEducationLevel([3, 4, 5].includes(validGrade) ? 'tieu_hoc' : 'thcs');
      const inGrade = CURRICULUM_LESSONS.filter((l) => l.gradeNumber === validGrade);
      if (inGrade.length > 0) {
        setSelectedLessons([inGrade[0]]);
      }
    }

    try {
      localStorage.setItem('ontap_student_profile', JSON.stringify(newProfile));
    } catch {}
  };

  // Save personal API key
  const handleSaveApiKey = (key: string) => {
    setCustomApiKey(key);
    try {
      if (key) {
        localStorage.setItem('ontap_gemini_api_key', key);
      } else {
        localStorage.removeItem('ontap_gemini_api_key');
      }
    } catch {}
  };

  // Save source preference
  const handleSelectSourcePreference = (val: QuestionSourcePreference) => {
    setSourcePreference(val);
    try {
      localStorage.setItem('ontap_source_preference', val);
    } catch {}
  };

  // Demo data generator
  const initDemoData = () => {
    const demoItems: QuizSession[] = [
      {
        id: 'demo-1',
        lessonTitle: 'Bài 1: Lược sử công cụ tính toán',
        subject: 'Chủ đề 1',
        grade: 'Khối 8',
        gradeNumber: 8,
        difficultyMode: 'tong_hop',
        totalQuestions: 10,
        questions: generateFallbackQuestions('Bài 1: Lược sử công cụ tính toán', 10, 'tong_hop', 8),
        userAnswers: { 0: 0, 1: 1, 2: 1, 3: 0, 4: 1, 5: 0, 6: 1, 7: 0, 8: 1 },
        flaggedQuestions: [2],
        startTime: Date.now() - 86400000 * 3,
        endTime: Date.now() - 86400000 * 3 + 480000,
        score: 9.0,
        percentage: 90,
        status: 'completed',
        mode: 'exam',
        timeSpentSeconds: 480,
        source: 'offline_bank',
      },
      {
        id: 'demo-2',
        lessonTitle: 'Bài 5: Sử dụng bảng tính giải quyết bài toán thực tế',
        subject: 'Chủ đề 4',
        grade: 'Khối 8',
        gradeNumber: 8,
        difficultyMode: 'trung_binh',
        totalQuestions: 10,
        questions: generateFallbackQuestions('Bài 5: Sử dụng bảng tính giải quyết bài toán thực tế', 10, 'trung_binh', 8),
        userAnswers: { 0: 3, 1: 1, 2: 1, 3: 2, 4: 1, 5: 1, 6: 0, 7: 1 },
        flaggedQuestions: [],
        startTime: Date.now() - 86400000 * 2,
        endTime: Date.now() - 86400000 * 2 + 520000,
        score: 8.0,
        percentage: 80,
        status: 'completed',
        mode: 'exam',
        timeSpentSeconds: 520,
        source: 'gemini_ai',
      },
      {
        id: 'demo-3',
        lessonTitle: 'Bài 1: Thông tin và dữ liệu',
        subject: 'Chủ đề 1',
        grade: 'Khối 6',
        gradeNumber: 6,
        difficultyMode: 'de',
        totalQuestions: 5,
        questions: generateFallbackQuestions('tin6-bai-1', 5, 'de', 6),
        userAnswers: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
        flaggedQuestions: [],
        startTime: Date.now() - 86400000 * 1.5,
        endTime: Date.now() - 86400000 * 1.5 + 240000,
        score: 10.0,
        percentage: 100,
        status: 'completed',
        mode: 'practice',
        timeSpentSeconds: 240,
        source: 'offline_bank',
      },
    ];
    setHistory(demoItems);
    try {
      localStorage.setItem('ontap_quiz_history', JSON.stringify(demoItems));
    } catch {}
  };

  // Save history to localStorage
  const saveSessionToHistory = (session: QuizSession) => {
    try {
      const updated = [session, ...history.filter((h) => h.id !== session.id)].slice(0, 50);
      setHistory(updated);
      localStorage.setItem('ontap_quiz_history', JSON.stringify(updated));
    } catch {}
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.enabled = next;
    try {
      localStorage.setItem('ontap_sound_enabled', String(next));
    } catch {}
  };

  // Rotate tips during loading
  useEffect(() => {
    if (!isGenerating) return;
    const interval = setInterval(() => {
      setLoadingTipIndex((prev) => (prev + 1) % STUDY_TIPS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isGenerating]);

  // Main action: Generate Quiz Questions (supports regenerating from existing session)
  const handleStartGenerateQuiz = async (
    overrideSession?: QuizSession | React.MouseEvent | any
  ) => {
    sound.playClick();

    const validOverride: QuizSession | undefined =
      overrideSession &&
      typeof overrideSession === 'object' &&
      'id' in overrideSession &&
      'lessonTitle' in overrideSession
        ? (overrideSession as QuizSession)
        : undefined;

    let title = '';
    let subject = '';
    let grade = `Khối ${currentGradeFilter}`;
    let gradeNum: 3 | 4 | 5 | 6 | 7 | 8 | 9 = currentGradeFilter;
    let targetKeys: string[] = [];
    let targetLessonTitles: string[] = [];
    let reqCount = questionCount;
    let reqDifficulty = difficulty;
    let reqMode = quizMode;

    if (validOverride) {
      title = validOverride.lessonTitle;
      subject = validOverride.subject || 'Ôn tập';
      grade = validOverride.grade || `Khối ${validOverride.gradeNumber || currentGradeFilter}`;
      const gN = validOverride.gradeNumber;
      if (gN && [3, 4, 5, 6, 7, 8, 9].includes(gN)) {
        gradeNum = gN as 3 | 4 | 5 | 6 | 7 | 8 | 9;
      }
      targetKeys =
        validOverride.lessonIds && validOverride.lessonIds.length > 0
          ? validOverride.lessonIds
          : [validOverride.lessonId || title];
      targetLessonTitles =
        validOverride.selectedLessonTitles && validOverride.selectedLessonTitles.length > 0
          ? validOverride.selectedLessonTitles
          : [title];
      reqCount = validOverride.totalQuestions || questionCount;
      reqDifficulty = validOverride.difficultyMode || difficulty;
      reqMode = validOverride.mode || quizMode;
    } else if (isCustomMode) {
      if (!customLessonTitle.trim()) {
        alert('Vui lòng nhập tên bài học hoặc chủ đề muốn ôn tập!');
        return;
      }
      title = customLessonTitle.trim();
      subject = customSubject.trim() || 'Tự chọn';
      grade = customGrade.trim() || `Khối ${currentGradeFilter}`;
      targetKeys = [title];
      targetLessonTitles = [title];
    } else {
      if (!selectedLessons || selectedLessons.length === 0) {
        alert('Vui lòng chọn ít nhất một bài học để tạo đề!');
        return;
      }

      if (selectedLessons.length === 1) {
        title = selectedLessons[0].title;
        subject = selectedLessons[0].subject;
      } else {
        const shortNames = selectedLessons.map((l) => l.title.split(':')[0]).join(', ');
        title = `Đề tổng hợp ${selectedLessons.length} bài học Khối ${currentGradeFilter} (${shortNames})`;
        subject = `Tổng hợp ${selectedLessons.length} bài học`;
      }

      targetKeys = selectedLessons.map((l) => l.id);
      targetLessonTitles = selectedLessons.map((l) => l.title);
    }

    setIsGenerating(true);

    try {
      let questions: Question[] = [];
      let finalSource: 'gemini_ai' | 'offline_bank' | 'offline_fallback' = 'offline_bank';

      if (sourcePreference === 'offline') {
        questions = generateFallbackQuestions(targetKeys, reqCount, reqDifficulty, gradeNum);
        finalSource = 'offline_bank';
      } else {
        const response = await fetch('/api/generate-quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lessonIds: isCustomMode && !overrideSession ? [] : targetKeys,
            lessons: isCustomMode && !overrideSession ? [title] : targetLessonTitles,
            lesson: title,
            subject,
            grade,
            gradeNumber: gradeNum,
            count: reqCount,
            difficulty: reqDifficulty,
            customContent: isCustomMode && !overrideSession ? customNotes : '',
            apiKey: customApiKey,
            sourcePreference,
          }),
        });

        const data = await response.json();

        if (data && data.success && Array.isArray(data.questions) && data.questions.length > 0) {
          finalSource = data.source || 'gemini_ai';
          const seen = new Set<string>();
          const unique = data.questions.filter((q: Question) => {
            const k = q.question.trim().toLowerCase();
            if (seen.has(k)) return false;
            seen.add(k);
            return true;
          });

          if (unique.length >= reqCount) {
            questions = unique.slice(0, reqCount);
          } else {
            const extra = generateFallbackQuestions(targetKeys, reqCount, reqDifficulty, gradeNum);
            for (const ex of extra) {
              if (unique.length >= reqCount) break;
              const k = ex.question.trim().toLowerCase();
              if (!seen.has(k)) {
                seen.add(k);
                unique.push(ex);
              }
            }
            questions = unique.slice(0, reqCount);
          }
        } else {
          questions = generateFallbackQuestions(targetKeys, reqCount, reqDifficulty, gradeNum);
          finalSource = 'offline_fallback';
        }
      }

      // Tự động xáo ngẫu nhiên thứ tự các câu hỏi khi học sinh vào luyện thi, giữ nguyên đáp án & lời giải
      const preparedQuestions = applyQuizShuffle(questions, {
        shuffleQuestions: true,
        shuffleAnswers: false,
      });

      // Initialize session
      const newSession: QuizSession = {
        id: `sess-${Date.now()}`,
        lessonId: targetKeys[0],
        lessonIds: targetKeys,
        lessonTitle: title,
        selectedLessonTitles: targetLessonTitles,
        subject,
        grade,
        gradeNumber: gradeNum,
        difficultyMode: reqDifficulty,
        totalQuestions: preparedQuestions.length,
        questions: preparedQuestions,
        userAnswers: {},
        flaggedQuestions: [],
        startTime: Date.now(),
        score: 0,
        percentage: 0,
        status: 'in_progress',
        mode: reqMode,
        timeSpentSeconds: 0,
        source: finalSource,
      };

      setCurrentSession(newSession);
      setStep('quiz');
    } catch (err) {
      console.warn('API error, using local fallback:', err);
      const fallback = applyQuizShuffle(
        generateFallbackQuestions(targetKeys, reqCount, reqDifficulty, gradeNum),
        { shuffleQuestions: true, shuffleAnswers: false }
      );
      const newSession: QuizSession = {
        id: `sess-${Date.now()}`,
        lessonId: targetKeys[0],
        lessonIds: targetKeys,
        lessonTitle: title,
        selectedLessonTitles: targetLessonTitles,
        subject,
        grade,
        gradeNumber: gradeNum,
        difficultyMode: reqDifficulty,
        totalQuestions: fallback.length,
        questions: fallback,
        userAnswers: {},
        flaggedQuestions: [],
        startTime: Date.now(),
        score: 0,
        percentage: 0,
        status: 'in_progress',
        mode: reqMode,
        timeSpentSeconds: 0,
        source: 'offline_fallback',
      };
      setCurrentSession(newSession);
      setStep('quiz');
    } finally {
      setIsGenerating(false);
    }
  };

  // Answer question handler
  const handleAnswerQuestion = (questionIndex: number, answer: any) => {
    if (!currentSession) return;
    setCurrentSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        userAnswers: {
          ...prev.userAnswers,
          [questionIndex]: answer,
        },
      };
    });
  };

  // Flag toggle handler
  const handleToggleFlag = (questionIndex: number) => {
    if (!currentSession) return;
    setCurrentSession((prev) => {
      if (!prev) return null;
      const flags = [...prev.flaggedQuestions];
      const foundIdx = flags.indexOf(questionIndex);
      if (foundIdx > -1) {
        flags.splice(foundIdx, 1);
      } else {
        flags.push(questionIndex);
      }
      return {
        ...prev,
        flaggedQuestions: flags,
      };
    });
  };

  // Submit Quiz handler
  const handleSubmitQuiz = () => {
    if (!currentSession) return;

    let totalScorePoints = 0;
    currentSession.questions.forEach((q, idx) => {
      totalScorePoints += getQuestionAnswerScore(q, currentSession.userAnswers[idx]);
    });

    const total = currentSession.totalQuestions;
    const score = Number(((totalScorePoints / total) * 10).toFixed(1));
    const percentage = Math.round((totalScorePoints / total) * 100);
    const duration = Math.max(1, Math.round((Date.now() - currentSession.startTime) / 1000));

    const completedSession: QuizSession = {
      ...currentSession,
      endTime: Date.now(),
      score,
      percentage,
      status: 'completed',
      timeSpentSeconds: duration,
    };

    // Update Mistake Review Book
    const newMistakes: WrongQuestionRecord[] = [];
    const correctlyAnsweredIds = new Set<string>();

    currentSession.questions.forEach((q, idx) => {
      const isRight = isQuestionAnswerCorrect(q, currentSession.userAnswers[idx]);
      if (!isRight) {
        newMistakes.push({
          id: `mistake-${q.id}-${Date.now()}`,
          question: q,
          userAnswer: currentSession.userAnswers[idx],
          lessonTitle: currentSession.lessonTitle,
          gradeNumber: currentSession.gradeNumber,
          addedAt: Date.now(),
        });
      } else {
        correctlyAnsweredIds.add(q.id);
        correctlyAnsweredIds.add(q.question.trim().toLowerCase());
      }
    });

    setMistakes((prev) => {
      // Remove any previously wrong question that was answered correctly now
      const filtered = prev.filter(
        (m) =>
          !correctlyAnsweredIds.has(m.question.id) &&
          !correctlyAnsweredIds.has(m.question.question.trim().toLowerCase())
      );
      // Append new mistakes without duplicating question text
      const seenTexts = new Set(filtered.map((m) => m.question.question.trim().toLowerCase()));
      const toAdd = newMistakes.filter(
        (m) => !seenTexts.has(m.question.question.trim().toLowerCase())
      );
      const combined = [...toAdd, ...filtered].slice(0, 100);
      try {
        localStorage.setItem('ontap_wrong_questions', JSON.stringify(combined));
      } catch {}
      return combined;
    });

    // Tự động nhận diện Đợt thi theo đề bài học sinh làm chuẩn khoa học
    const examBatch = inferExamBatchFromTitle(currentSession.lessonTitle);

    // Auto-record to Sổ Điểm & Bảng Vàng
    const scoreRecord: StudentScoreRecord = {
      id: `score-${Date.now()}`,
      studentName: studentProfile?.fullName || 'Bạn Nhỏ Thông Thái',
      className: studentProfile?.className || `${currentSession.gradeNumber || 8}A1`,
      schoolName: studentProfile?.schoolName || 'Trường THCS',
      gradeNumber: currentSession.gradeNumber || currentGradeFilter,
      grade: currentSession.grade || `Khối ${currentSession.gradeNumber || currentGradeFilter}`,
      examBatch,
      lessonTitle: currentSession.lessonTitle,
      score,
      percentage,
      totalQuestions: currentSession.totalQuestions,
      correctAnswersCount: Math.round((percentage / 100) * currentSession.totalQuestions),
      timeSpentSeconds: duration,
      date: Date.now(),
      rankTitle:
        score >= 9.0
          ? 'Xuất sắc'
          : score >= 8.0
          ? 'Giỏi'
          : score >= 6.5
          ? 'Khá'
          : score >= 5.0
          ? 'Đạt yêu cầu'
          : 'Chưa đạt yêu cầu',
      avatar: studentProfile?.avatar || 'robot-ai',
    };

    // Tự động lưu lên Firebase và gửi đến Google Sheets Webhook (nếu có)
    saveScoreToFirebase(scoreRecord);
    sendScoreToGoogleSheetWebhook(scoreRecord);

    setScores((prev) => {
      const updated = [scoreRecord, ...prev.filter((s) => s.id !== scoreRecord.id)].slice(0, 100);
      try {
        localStorage.setItem('ontap_student_scorebook', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    setCurrentSession(completedSession);
    saveSessionToHistory(completedSession);
    try {
      localStorage.removeItem('ontap_active_session');
    } catch {}
    setStep('result');
  };

  // Exit Quiz handler
  const handleExitQuiz = () => {
    sound.playClick();
    setCurrentSession(null);
    setStep('setup');
    try {
      localStorage.removeItem('ontap_active_session');
    } catch {}
  };

  // Mistake Notebook operations
  const handleRemoveMistake = (questionId: string) => {
    sound.playClick();
    setMistakes((prev) => {
      const updated = prev.filter((m) => m.id !== questionId && m.question.id !== questionId);
      try {
        localStorage.setItem('ontap_wrong_questions', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleClearAllMistakes = () => {
    sound.playClick();
    setMistakes([]);
    try {
      localStorage.removeItem('ontap_wrong_questions');
    } catch {}
  };

  const handlePracticeMistakes = (practiceQuestions: Question[]) => {
    if (!practiceQuestions || practiceQuestions.length === 0) return;
    sound.playClick();
    setIsMistakeModalOpen(false);

    const newSession: QuizSession = {
      id: `sess-mistakes-${Date.now()}`,
      lessonTitle: `Luyện tập Sổ tay câu sai (${practiceQuestions.length} câu)`,
      selectedLessonTitles: ['Sổ tay câu sai & lỗ hổng kiến thức'],
      subject: 'Ôn tập câu sai',
      grade: `Khối ${currentGradeFilter}`,
      gradeNumber: currentGradeFilter,
      difficultyMode: 'tong_hop',
      totalQuestions: practiceQuestions.length,
      questions: practiceQuestions,
      userAnswers: {},
      flaggedQuestions: [],
      startTime: Date.now(),
      score: 0,
      percentage: 0,
      status: 'in_progress',
      mode: 'practice', // Practice mode to see explanations right away
      timeSpentSeconds: 0,
      source: 'offline_bank',
    };

    setCurrentSession(newSession);
    setStep('quiz');
  };

  // Scorebook & Certificate operations
  const handleAddScore = (newScore: StudentScoreRecord) => {
    saveScoreToFirebase(newScore);
    sendScoreToGoogleSheetWebhook(newScore);
    setScores((prev) => {
      const updated = [newScore, ...prev.filter((s) => s.id !== newScore.id)];
      try {
        localStorage.setItem('ontap_student_scorebook', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleDeleteScore = (scoreId: string) => {
    deleteScoreFromFirebase(scoreId);
    setScores((prev) => {
      const updated = prev.filter((s) => s.id !== scoreId);
      try {
        localStorage.setItem('ontap_student_scorebook', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleDeleteClass = async (className: string): Promise<number> => {
    const res = await deleteScoresByClassFromFirebase(className);
    setScores((prev) => {
      const updated = prev.filter(
        (s) => (s.className || '').trim().toLowerCase() !== className.trim().toLowerCase()
      );
      try {
        localStorage.setItem('ontap_student_scorebook', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    return res.count;
  };

  const handleRenameClass = async (oldClassName: string, newClassName: string): Promise<number> => {
    const res = await renameClassInFirebase(oldClassName, newClassName);
    setScores((prev) => {
      const updated = prev.map((s) => {
        if ((s.className || '').trim().toLowerCase() === oldClassName.trim().toLowerCase()) {
          return { ...s, className: newClassName.trim() };
        }
        return s;
      });
      try {
        localStorage.setItem('ontap_student_scorebook', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    return res.count;
  };

  const handleResetDemoScores = () => {
    sound.playClick();
    setScores(INITIAL_SCORE_RECORDS);
    try {
      localStorage.setItem('ontap_student_scorebook', JSON.stringify(INITIAL_SCORE_RECORDS));
    } catch {}
  };

  const handleOpenCertificate = (cert: CertificateData) => {
    setActiveCertificates([cert]);
    setIsCertificateModalOpen(true);
  };

  const handleOpenBatchCertificates = (certs: CertificateData[]) => {
    setActiveCertificates(certs);
    setIsCertificateModalOpen(true);
  };

  // Retake current quiz (Tự động xáo lại thứ tự các câu hỏi, giữ nguyên đáp án)
  const handleRetakeQuiz = () => {
    if (!currentSession) return;
    const reshuffled = applyQuizShuffle(currentSession.questions, {
      shuffleQuestions: true,
      shuffleAnswers: false,
    });
    const resetSession: QuizSession = {
      ...currentSession,
      id: `sess-${Date.now()}`,
      questions: reshuffled,
      userAnswers: {},
      flaggedQuestions: [],
      startTime: Date.now(),
      score: 0,
      percentage: 0,
      status: 'in_progress',
      timeSpentSeconds: 0,
    };
    setCurrentSession(resetSession);
    setStep('quiz');
  };

  // Trộn ngẫu nhiên câu hỏi ngay trong lúc đang làm bài (giữ nguyên đáp án)
  const handleShuffleActiveSession = () => {
    setCurrentSession((prev) => {
      if (!prev) return null;
      const reshuffled = applyQuizShuffle(prev.questions, {
        shuffleQuestions: true,
        shuffleAnswers: false,
      });
      return {
        ...prev,
        questions: reshuffled,
        userAnswers: {},
        flaggedQuestions: [],
      };
    });
  };

  // Generate fresh questions for same topic
  const handleGenerateNewWithSameTopic = () => {
    if (!currentSession) return;
    handleStartGenerateQuiz(currentSession);
  };

  // Clear all history
  const handleClearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem('ontap_quiz_history');
    } catch {}
  };

  // Action when student clicks a lesson from Dashboard
  const handleSelectLessonToPractice = (lessonTitle: string) => {
    const found = CURRICULUM_LESSONS.find(
      (l) =>
        l.title.toLowerCase().includes(lessonTitle.toLowerCase()) ||
        lessonTitle.toLowerCase().includes(l.title.toLowerCase())
    );
    if (found) {
      if (found.gradeNumber && ([3, 4, 5, 6, 7, 8, 9].includes(found.gradeNumber))) {
        setCurrentGradeFilter(found.gradeNumber as 3 | 4 | 5 | 6 | 7 | 8 | 9);
      }
      setSelectedLessons([found]);
      setIsCustomMode(false);
    } else {
      setCustomLessonTitle(lessonTitle);
      setIsCustomMode(true);
    }
    const el = document.getElementById('lesson-selector-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Thông tin tóm tắt cho nút cố định trên Header
  const headerSummaryInfo = useMemo(() => {
    const lessonText = isCustomMode
      ? customLessonTitle || 'Bài học tự nhập'
      : selectedLessons.length === 0
      ? 'Chưa chọn bài nào'
      : selectedLessons.length === 1
      ? `${selectedLessons[0].title} (Khối ${currentGradeFilter})`
      : `${selectedLessons.length} bài học Khối ${currentGradeFilter}`;

    const diffText =
      difficulty === 'de'
        ? 'Cấp độ Dễ'
        : difficulty === 'trung_binh'
        ? 'Cấp độ Trung bình'
        : difficulty === 'kho'
        ? 'Cấp độ Khó'
        : 'Tổng hợp 3 cấp độ';

    const sourceText = sourcePreference === 'ai' ? '🤖 AI Thông Minh' : '💾 Kho Offline';

    return {
      lesson: lessonText,
      count: questionCount,
      difficulty: diffText,
      source: sourceText,
    };
  }, [
    isCustomMode,
    customLessonTitle,
    selectedLessons,
    currentGradeFilter,
    difficulty,
    sourcePreference,
    questionCount,
  ]);

  return (
    <div className="min-h-screen bg-[#FFF5CF] flex text-slate-800">
      {/* Thanh Menu Chính Bên Trái (Desktop Pinned & Mobile Drawer) */}
      <SidebarMenu
        isOpenMobile={isSidebarMobileOpen}
        onCloseMobile={() => setIsSidebarMobileOpen(false)}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={toggleSidebarCollapse}
        activeSection={step === 'setup' ? homeView : step}
        onGoHome={() => {
          setStep('setup');
          setHomeView('overview');
        }}
        onScrollToCustomExams={handleScrollToCustomExams}
        onScrollToTopics={handleScrollToLessonTopics}
        onOpenScorebook={() => setIsScorebookModalOpen(true)}
        onOpenMistakes={() => setIsMistakeModalOpen(true)}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onOpenAdminStudio={handleOpenAdminStudio}
        onOpenEssayModal={() => setIsEssayModalOpen(true)}
        onOpenGrade5Game={() => handleLaunchMidtermExam(5, 'all')}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenLinksDirectory={() => setIsLinksModalOpen(true)}
        onSelectGame={(game) => {
          setSelectedGame(game);
          setIsGameModalOpen(true);
        }}
        studentProfile={studentProfile}
        mistakesCount={mistakes.length}
        historyCount={history.length}
        customExamsCount={customExams.length}
        isAdminLoggedIn={Boolean(adminSession && isAuthorizedAdmin(adminSession.email))}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Vùng Nội Dung Chính: Tự động thụt lề theo Sidebar trên màn hình Desktop */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'
        }`}
      >
        {/* Global Header với các Tab điều hướng gom nhóm chuẩn TBS */}
        <Header
          onToggleSidebar={handleToggleSidebar}
          onOpenHistory={() => setIsHistoryOpen(true)}
          historyCount={history.length}
          onGoHome={() => {
            setStep('setup');
            setHomeView('overview');
          }}
          isHome={step === 'setup'}
          activeTab={homeView}
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
          studentProfile={studentProfile}
          onOpenProfileModal={() => setIsProfileModalOpen(true)}
          onOpenMistakes={() => setIsMistakeModalOpen(true)}
          mistakesCount={mistakes.length}
          onOpenScorebook={() => setIsScorebookModalOpen(true)}
          onOpenAdminStudio={handleOpenAdminStudio}
          isAdminLoggedIn={Boolean(adminSession && isAuthorizedAdmin(adminSession.email))}
          onScrollToTopics={handleScrollToLessonTopics}
          onScrollToCustomExams={handleScrollToCustomExams}
          onOpenGuide={() => setIsGuideOpen(true)}
          onOpenLinksDirectory={() => setIsLinksModalOpen(true)}
          onStartGenerateQuiz={handleStartGenerateQuiz}
          isGenerating={isGenerating}
          canStartQuiz={isCustomMode || selectedLessons.length > 0}
          summaryInfo={headerSummaryInfo}
        />

        {/* Main Container */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {step === 'setup' && (
          <div className="space-y-8 animate-in fade-in-50">
            {/* Resume pending in-progress quiz banner */}
            {pendingResumeSession && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 text-amber-950 shadow-md flex flex-wrap items-center justify-between gap-4 animate-in slide-in-from-top-2">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md shadow-amber-500/30 shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 font-bold text-[11px] uppercase">
                        Khôi phục bài thi
                      </span>
                      <h4 className="font-extrabold text-sm sm:text-base text-amber-950 line-clamp-1">
                        {pendingResumeSession.lessonTitle}
                      </h4>
                    </div>
                    <p className="text-xs text-amber-800 mt-0.5">
                      Bạn có một bài thi chưa hoàn thành (đã làm {Object.keys(pendingResumeSession.userAnswers).length}/{pendingResumeSession.totalQuestions} câu). Bạn có muốn tiếp tục làm bài không?
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      try {
                        localStorage.removeItem('ontap_active_session');
                      } catch {}
                      setPendingResumeSession(null);
                    }}
                    className="px-3.5 py-2 rounded-xl border border-amber-300 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Bỏ qua
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setCurrentSession(pendingResumeSession);
                      setPendingResumeSession(null);
                      setStep('quiz');
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-amber-600/30 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Tiếp tục làm bài</span>
                  </button>
                </div>
              </div>
            )}

            {/* 1. MÀN HÌNH TỔNG QUAN: CHỈ HIỂN THỊ CỔNG PHÂN VAI (ROLE PORTAL) */}
            {homeView === 'overview' && (
              <div className="space-y-6">
                <RolePortalHero
                  studentProfile={studentProfile}
                  onOpenProfileModal={() => setIsProfileModalOpen(true)}
                  onScrollToTopics={handleScrollToLessonTopics}
                  onScrollToCustomExams={handleScrollToCustomExams}
                  onOpenScorebook={() => setIsScorebookModalOpen(true)}
                  onOpenHistory={() => setIsHistoryOpen(true)}
                  onOpenMistakes={() => setIsMistakeModalOpen(true)}
                  mistakesCount={mistakes.length}
                  onOpenEssay={() => setIsEssayModalOpen(true)}
                  onOpenAdminStudio={handleOpenAdminStudio}
                  isAdminLoggedIn={Boolean(adminSession && isAuthorizedAdmin(adminSession.email))}
                  adminEmail={adminSession?.email}
                  onAdminLogin={() => setIsAdminAuthModalOpen(true)}
                  onAdminLogout={() => {
                    sound.playClick();
                    saveAdminSession(null);
                    setAdminSession(null);
                  }}
                />

                {/* Dashboard: Biểu đồ thống kê kết quả học tập - CHỈ HIỂN THỊ KHI GIÁO VIÊN ĐĂNG NHẬP */}
                {Boolean(adminSession && isAuthorizedAdmin(adminSession.email)) && (
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-xs font-black uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
                      <span>Khu vực Giáo viên: Thống kê kết quả học tập & Năng lực học sinh</span>
                    </div>
                    <Dashboard
                      history={history}
                      onSelectLessonToPractice={handleSelectLessonToPractice}
                      onLoadDemoData={initDemoData}
                      studentProfile={studentProfile}
                      mistakesCount={mistakes.length}
                      onOpenMistakes={() => setIsMistakeModalOpen(true)}
                      onOpenScorebook={() => setIsScorebookModalOpen(true)}
                    />
                  </div>
                )}
              </div>
            )}

            {/* 2. MÀN HÌNH KHO ĐỀ THI */}
            {homeView === 'exams' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-top-2">
                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-sky-50 border border-sky-200 shadow-xs">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setHomeView('overview');
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-sky-100 border border-sky-300 text-sky-900 text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-xs transition-all active:scale-95"
                    >
                      <span>← Quay lại Tổng quan</span>
                    </button>
                    <span className="text-xs font-bold text-sky-950">Kho Đề Thi Chuẩn SGK</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setHomeView('topics');
                    }}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Luyện tập theo Chủ đề SGK</span>
                    <span>→</span>
                  </button>
                </div>

                <div id="admin-exam-section">
                  <AdminExamSection
                    customExams={customExams}
                    currentGradeFilter={currentGradeFilter}
                    onLaunchExam={handleLaunchCustomExam}
                    onPrintExam={handlePrintCustomExam}
                    onOpenAdminStudio={handleOpenAdminStudio}
                    onUpdateExam={handleUpdateCustomExam}
                    onDeleteExam={handleDeleteCustomExam}
                    onDuplicateExam={handleDuplicateCustomExam}
                    isAdmin={Boolean(adminSession && isAuthorizedAdmin(adminSession.email))}
                  />
                </div>
              </div>
            )}

            {/* 3. MÀN HÌNH LUYỆN TẬP THEO CHỦ ĐỀ & BÀI HỌC SGK */}
            {homeView === 'topics' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-top-2">
                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-xs">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setHomeView('overview');
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-xs transition-all active:scale-95"
                    >
                      <span>← Quay lại Tổng quan</span>
                    </button>
                    <span className="text-xs font-bold text-emerald-950">Luyện Tập Theo Chủ Đề SGK</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setHomeView('exams');
                    }}
                    className="text-xs font-bold text-sky-700 hover:text-sky-800 hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Xem Kho đề thi chuẩn SGK</span>
                    <span>→</span>
                  </button>
                </div>

                {/* Step 1: Chọn Khối lớp & Bài học (Hỗ trợ chọn nhiều bài học) */}
                <div id="lesson-selector-section" className="scroll-mt-20">
                  <LessonSelector
                    selectedLessons={selectedLessons}
                    onToggleLesson={handleToggleLesson}
                    onSelectAllInGrade={handleSelectAllInGrade}
                    onDeselectAll={handleDeselectAll}
                    currentGradeFilter={currentGradeFilter}
                    setCurrentGradeFilter={handleGradeFilterChange}
                    educationLevel={educationLevel}
                    setEducationLevel={setEducationLevel}
                    customLessonTitle={customLessonTitle}
                    setCustomLessonTitle={setCustomLessonTitle}
                    customSubject={customSubject}
                    setCustomSubject={setCustomSubject}
                    customGrade={customGrade}
                    setCustomGrade={setCustomGrade}
                    customNotes={customNotes}
                    setCustomNotes={setCustomNotes}
                    isCustomMode={isCustomMode}
                    setIsCustomMode={setIsCustomMode}
                    onManageTopicBank={handleManageTopicBank}
                    topicQuestionCounts={topicQuestionCounts}
                    isAdmin={Boolean(adminSession && isAuthorizedAdmin(adminSession.email))}
                  />
                </div>

                {/* Step 2: Chọn số câu hỏi */}
                <QuestionCountSelector
                  count={questionCount}
                  onSelectCount={setQuestionCount}
                />

                {/* Step 3: Chọn cấp độ (3 cấp độ + Tổng hợp 3 cấp độ) */}
                <DifficultySelector
                  difficulty={difficulty}
                  onSelectDifficulty={setDifficulty}
                  count={questionCount}
                />

                {/* Step 4: Chọn phương thức thi thử hay học tập & Tùy chọn trộn đề */}
                <ModeSelector
                  mode={quizMode}
                  onSelectMode={setQuizMode}
                  shuffleQuestions={shuffleQuestions}
                  onToggleShuffleQuestions={setShuffleQuestions}
                  shuffleAnswers={shuffleAnswers}
                  onToggleShuffleAnswers={setShuffleAnswers}
                />

                {/* Step 5: Nguồn tạo câu hỏi & Tích hợp AI / API Key */}
                <QuestionSourceSelector
                  sourcePreference={sourcePreference}
                  onSelectSourcePreference={handleSelectSourcePreference}
                  apiKey={customApiKey}
                  onSaveApiKey={handleSaveApiKey}
                />

                {/* Submit Action Block */}
                <div className="pt-4 pb-6">
                  <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs sm:text-sm text-slate-600">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-bold text-slate-800">Cấu hình ôn tập hiện tại:</span>
                      </div>
                      <span>Bạn đang chọn: </span>
                      <strong className="text-indigo-700">
                        {isCustomMode
                          ? customLessonTitle || 'Bài học tự nhập'
                          : selectedLessons.length === 0
                          ? 'Chưa chọn bài nào'
                          : selectedLessons.length === 1
                          ? `${selectedLessons[0].title} (Khối ${currentGradeFilter})`
                          : `${selectedLessons.length} bài học Khối ${currentGradeFilter}`}
                      </strong>{' '}
                      • <strong className="text-indigo-700">{questionCount} câu</strong> •{' '}
                      <strong className="text-indigo-700">
                        {difficulty === 'de'
                          ? 'Cấp độ Dễ'
                          : difficulty === 'trung_binh'
                          ? 'Cấp độ Trung bình'
                          : difficulty === 'kho'
                          ? 'Cấp độ Khó'
                          : 'Tổng hợp 3 cấp độ'}
                      </strong>{' '}
                      •{' '}
                      <span className="inline-flex items-center gap-1 font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                        {sourcePreference === 'ai' ? '🤖 AI Thông Minh' : '💾 Kho Offline'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        handleStartGenerateQuiz();
                      }}
                      disabled={isGenerating || (!isCustomMode && selectedLessons.length === 0)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm shadow-lg shadow-emerald-600/30 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Đang chuẩn bị đề thi...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-white" />
                          <span>BẮT ĐẦU ÔN TẬP NGAY</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Loading Overlay */}
        {isGenerating && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-200 text-center space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-3xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600 relative">
                <Loader2 className="w-8 h-8 animate-spin" />
                <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-800 font-['Lexend']">
                  Đang Tạo Bộ Câu Hỏi Ôn Tập
                </h3>
                <p className="text-xs text-slate-500">
                  {sourcePreference === 'ai'
                    ? `Hệ thống AI đang soạn thảo ${questionCount} câu hỏi mới nhất, bao quát các chủ đề đã chọn`
                    : `Đang trích xuất ${questionCount} câu hỏi chuẩn từ kho dữ liệu SGK offline`}
                </p>
              </div>

              {/* Rotating study tip */}
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 italic leading-relaxed">
                "{STUDY_TIPS[loadingTipIndex]}"
              </div>
            </div>
          </div>
        )}

        {/* Step: Quiz Screen */}
        {step === 'quiz' && currentSession && (
          <QuizScreen
            session={currentSession}
            onAnswerQuestion={handleAnswerQuestion}
            onToggleFlag={handleToggleFlag}
            onSubmitQuiz={handleSubmitQuiz}
            onExitQuiz={handleExitQuiz}
            studentProfile={studentProfile}
            onSaveToCustomExams={handleSaveSessionAsCustomExam}
            onShuffleSession={handleShuffleActiveSession}
          />
        )}

        {/* Step: Result Screen */}
        {step === 'result' && currentSession && (
          <ResultScreen
            session={currentSession}
            onRetakeQuiz={handleRetakeQuiz}
            onGenerateNewWithSameTopic={handleGenerateNewWithSameTopic}
            onGoHome={() => {
              setCurrentSession(null);
              setStep('setup');
            }}
            onPrint={() => {
              setStepBeforePrint('result');
              setStep('print');
            }}
            studentProfile={studentProfile}
            onViewCertificate={handleOpenCertificate}
            onSaveToCustomExams={handleSaveSessionAsCustomExam}
          />
        )}

        {/* Step: Print / Export Screen */}
        {step === 'print' && currentSession && (
          <PrintView
            session={currentSession}
            onBack={() => setStep(stepBeforePrint)}
            studentProfile={studentProfile}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="no-print mt-auto py-6 border-t border-slate-200/80 bg-white text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span className="font-extrabold text-slate-800">GIA SƯ TIN HỌC</span>
            <span>-</span>
            <span className="font-bold text-indigo-700">Tác giả: GV: Ms. Trúc Tin Học</span>
          </div>
          <div className="text-slate-500 font-medium">
            Hệ thống ôn luyện & thi trắc nghiệm Tin học các Khối Tiểu học (3, 4, 5) và THCS (6, 7, 8, 9) theo 3 cấp độ (Dễ, Trung bình, Khó, Tổng hợp)
          </div>
        </div>
      </footer>
    </div>

      {/* History Modal */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelectSession={(sess) => {
          setCurrentSession(sess);
          setStep('result');
        }}
        onClearHistory={handleClearHistory}
      />

      {/* Student Profile Modal Dialog (Chọn Lớp, Tên học sinh, Ảnh đại diện, Lưu, Cài đặt) */}
      <StudentProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={studentProfile}
        onSaveProfile={handleSaveProfile}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onClearHistory={handleClearHistory}
      />

      {/* Essay & Situation Review Modal */}
      <EssayModal
        isOpen={isEssayModalOpen}
        onClose={() => setIsEssayModalOpen(false)}
        initialGrade={essayModalGrade}
      />

      {/* Grade 5 Exam Audit & Game Modal */}
      <Grade5ExamAuditAndGameModal
        isOpen={isGrade5AuditModalOpen}
        onClose={() => setIsGrade5AuditModalOpen(false)}
        questions={QUESTIONS_GRADE_5['tin5-on-tap-giua-ki-1'] || []}
        onStartGame={(gameType) => handleLaunchMidtermExam(5, gameType)}
        onExportExam={handleExportGrade5Exam}
        initialTab={grade5AuditInitialTab}
      />

      {/* Sổ tay câu sai & Lỗ hổng kiến thức */}
      <MistakeNotebookModal
        isOpen={isMistakeModalOpen}
        onClose={() => setIsMistakeModalOpen(false)}
        mistakes={mistakes}
        onRemoveMistake={handleRemoveMistake}
        onClearAll={handleClearAllMistakes}
        onPracticeMistakes={handlePracticeMistakes}
      />

      {/* Bảng Vàng Vinh Danh & Sổ Lưu Điểm Học Sinh */}
      <ScorebookLeaderboardModal
        isOpen={isScorebookModalOpen}
        onClose={() => setIsScorebookModalOpen(false)}
        scores={scores}
        onAddScore={handleAddScore}
        onDeleteScore={handleDeleteScore}
        onDeleteClass={handleDeleteClass}
        onRenameClass={handleRenameClass}
        onResetDemoScores={handleResetDemoScores}
        onOpenCertificate={handleOpenCertificate}
        onOpenBatchCertificates={handleOpenBatchCertificates}
      />

      {/* Giấy Chứng Nhận Vinh Danh & Khen Thưởng */}
      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
        certificates={activeCertificates}
        studentProfile={studentProfile}
      />

      {/* Admin Authentication Modal (Xác thực saohom2002@gmail.com) */}
      <AdminAuthModal
        isOpen={isAdminAuthModalOpen}
        onClose={() => setIsAdminAuthModalOpen(false)}
        onSuccessOpenStudio={() => {
          setIsAdminAuthModalOpen(false);
          setIsAdminStudioModalOpen(true);
        }}
        adminSession={adminSession}
        setAdminSession={setAdminSession}
      />

      {/* Admin Studio Modal (Tạo đề thi, đề ôn tập, quản trị câu hỏi) */}
      <AdminStudioModal
        isOpen={isAdminStudioModalOpen}
        onClose={() => setIsAdminStudioModalOpen(false)}
        adminSession={adminSession}
        onOpenAuth={() => {
          setIsAdminStudioModalOpen(false);
          setIsAdminAuthModalOpen(true);
        }}
        customExams={customExams}
        setCustomExams={setCustomExams}
        onLaunchExam={handleLaunchCustomExam}
        onPrintExam={handlePrintCustomExam}
        initialExamId={studioInitialExamId}
        initialAction={studioInitialAction}
        onClearInitialAction={() => {
          setStudioInitialExamId(null);
          setStudioInitialAction(null);
        }}
      />

      {/* Modal Trò Chơi Tương Tác Học Tập TBS & Đua Vịt */}
      <InteractiveGameModal
        game={selectedGame}
        isOpen={isGameModalOpen}
        onClose={() => {
          setIsGameModalOpen(false);
          setSelectedGame(null);
        }}
      />

      {/* Modal Hướng Dẫn Sử Dụng Hệ Thống */}
      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        onOpenGamesTab={() => window.open('/games/', '_blank')}
        onScrollToTopics={handleScrollToLessonTopics}
        onOpenProfile={() => setIsProfileModalOpen(true)}
      />

      {/* Modal Danh Bạ Liên Kết & Quản Lý Liên Kết Hệ Thống */}
      <LinksDirectoryModal
        isOpen={isLinksModalOpen}
        onClose={() => setIsLinksModalOpen(false)}
        isAdminLoggedIn={Boolean(adminSession && isAuthorizedAdmin(adminSession.email))}
      />

      {/* Trình phát nhạc nền không lời chuẩn Wayground / Lofi Focus */}
      <BgmMusicPlayer />
    </div>
  );
}
