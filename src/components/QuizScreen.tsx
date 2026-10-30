import React, { useState, useEffect } from 'react';
import { QuizSession, Question, StudentProfile } from '../types/quiz';
import { DifficultyBadge } from './DifficultyBadge';
import { StudentAvatar } from './StudentAvatar';
import {
  Clock,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Send,
  HelpCircle,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ListOrdered,
  X,
  Sparkles,
  BookOpen,
  Layers,
  ArrowRightLeft,
  Edit3,
  GripVertical,
  Shuffle
} from 'lucide-react';
import { sound } from '../utils/sound';
import {
  isQuestionAnswered,
  isQuestionAnswerCorrect,
  isMultipleSelectQuestion,
  getMultipleSelectCorrectIndices,
} from '../utils/questionEvaluator';
import { FillBlankQuestion } from './questionTypes/FillBlankQuestion';
import { MatchingQuestion } from './questionTypes/MatchingQuestion';
import { DragDropOrderQuestion } from './questionTypes/DragDropOrderQuestion';
import { TrueFalseQuestion } from './questionTypes/TrueFalseQuestion';

interface QuizScreenProps {
  session: QuizSession;
  onAnswerQuestion: (questionIndex: number, answer: any) => void;
  onToggleFlag: (questionIndex: number) => void;
  onSubmitQuiz: () => void;
  onExitQuiz: () => void;
  studentProfile?: StudentProfile;
  onSaveToCustomExams?: (session: QuizSession) => void;
  onShuffleSession?: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  session,
  onAnswerQuestion,
  onToggleFlag,
  onSubmitQuiz,
  onExitQuiz,
  studentProfile,
  onSaveToCustomExams,
  onShuffleSession,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [showPalette, setShowPalette] = useState<boolean>(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [shuffleNotice, setShuffleNotice] = useState<string>('');

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ: Question = session.questions[currentIndex];
  const selectedAnswer = session.userAnswers[currentIndex];
  const isFlagged = session.flaggedQuestions.includes(currentIndex);
  const total = session.questions.length;

  const answeredCount = session.questions.filter((q, idx) =>
    isQuestionAnswered(q, session.userAnswers[idx])
  ).length;

  const progressPercent = Math.round((answeredCount / total) * 100);

  const handleSelectAnswer = (answer: any) => {
    sound.playClick();
    onAnswerQuestion(currentIndex, answer);

    // In practice mode, play sound if correct
    if (session.mode === 'practice') {
      if (isQuestionAnswerCorrect(currentQ, answer)) {
        sound.playCorrect();
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      sound.playClick();
      setCurrentIndex((prev) => prev + 1);
      setShowHint(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      sound.playClick();
      setCurrentIndex((prev) => prev - 1);
      setShowHint(false);
    }
  };

  // Keyboard navigation for computer science students (A/B/C/D, 1/2/3/4, Arrows, F, H)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (showSubmitConfirm || showExitConfirm || showPalette) {
        if (e.key === 'Escape') {
          setShowSubmitConfirm(false);
          setShowExitConfirm(false);
          setShowPalette(false);
        }
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        sound.playClick();
        onToggleFlag(currentIndex);
      } else if (e.key === 'h' || e.key === 'H') {
        if (currentQ?.hint) {
          e.preventDefault();
          sound.playClick();
          setShowHint((prev) => !prev);
        }
      } else if (currentQ && (!currentQ.type || currentQ.type === 'multiple_choice')) {
        let optIdx = -1;
        const key = e.key.toLowerCase();
        if (key === '1' || key === 'a') optIdx = 0;
        else if (key === '2' || key === 'b') optIdx = 1;
        else if (key === '3' || key === 'c') optIdx = 2;
        else if (key === '4' || key === 'd') optIdx = 3;

        if (optIdx >= 0 && optIdx < currentQ.options.length) {
          e.preventDefault();
          handleSelectAnswer(optIdx);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentQ, total, showSubmitConfirm, showExitConfirm, showPalette]);

  const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const isCurrentMultiSelect = isMultipleSelectQuestion(currentQ);
  const qType = isCurrentMultiSelect ? 'multiple_select' : currentQ.type || 'multiple_choice';

  const getTypeBadge = () => {
    switch (qType) {
      case 'multiple_select':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-800 bg-purple-100/90 px-2.5 py-0.5 rounded-lg border border-purple-300">
            <CheckCircle2 className="w-3 h-3 text-purple-600" />
            Chọn nhiều đáp án đúng
          </span>
        );
      case 'true_false':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded-lg border border-teal-300">
            <CheckCircle2 className="w-3 h-3 text-teal-600" />
            Trắc nghiệm Đúng / Sai
          </span>
        );
      case 'fill_blank':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-lg border border-amber-300">
            <Edit3 className="w-3 h-3 text-amber-600" />
            Điền khuyết
          </span>
        );
      case 'matching':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-800 bg-purple-100/80 px-2 py-0.5 rounded-lg border border-purple-300">
            <ArrowRightLeft className="w-3 h-3 text-purple-600" />
            Ghép nối cột
          </span>
        );
      case 'drag_drop_order':
      case 'drag_drop':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded-lg border border-teal-300">
            <GripVertical className="w-3 h-3 text-teal-600" />
            Kéo thả sắp xếp
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-extrabold text-sky-800 bg-sky-100 px-2.5 py-1 rounded-xl border border-sky-300 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            Trắc nghiệm
          </span>
        );
    }
  };

  const optionBadgeColors = [
    {
      badge: 'bg-sky-500 text-white shadow-xs shadow-sky-500/30 group-hover:bg-sky-600',
      cardHover: 'hover:border-sky-400 hover:bg-sky-50/70',
    },
    {
      badge: 'bg-violet-500 text-white shadow-xs shadow-violet-500/30 group-hover:bg-violet-600',
      cardHover: 'hover:border-violet-400 hover:bg-violet-50/70',
    },
    {
      badge: 'bg-amber-500 text-white shadow-xs shadow-amber-500/30 group-hover:bg-amber-600',
      cardHover: 'hover:border-amber-400 hover:bg-amber-50/70',
    },
    {
      badge: 'bg-teal-500 text-white shadow-xs shadow-teal-500/30 group-hover:bg-teal-600',
      cardHover: 'hover:border-teal-400 hover:bg-teal-50/70',
    },
    {
      badge: 'bg-rose-500 text-white shadow-xs shadow-rose-500/30 group-hover:bg-rose-600',
      cardHover: 'hover:border-rose-400 hover:bg-rose-50/70',
    },
    {
      badge: 'bg-indigo-500 text-white shadow-xs shadow-indigo-500/30 group-hover:bg-indigo-600',
      cardHover: 'hover:border-indigo-400 hover:bg-indigo-50/70',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-4 pb-12">
      {/* Top Banner & Progress */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-50/90 via-white to-indigo-50/90 rounded-3xl border-2 border-sky-200/90 shadow-md shadow-sky-500/5 p-4 sm:p-5 space-y-3.5">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600" />
        <div className="flex flex-wrap items-center justify-between gap-3 pt-0.5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowExitConfirm(true)}
              className="p-2 text-sky-700 bg-sky-100 hover:bg-sky-200 hover:text-sky-900 rounded-xl transition-colors shadow-2xs cursor-pointer"
              title="Dừng làm bài"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-extrabold text-white bg-gradient-to-r from-sky-500 to-blue-600 px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                  {session.subject || 'Ôn tập'}
                </span>
                <DifficultyBadge difficulty={session.difficultyMode} size="sm" />
                {studentProfile && (
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-indigo-900 font-bold bg-indigo-100/80 px-2.5 py-0.5 rounded-full border border-indigo-200">
                    <StudentAvatar avatarIdOrUrl={studentProfile.avatar} size="xs" />
                    <span>{studentProfile.fullName} ({studentProfile.className})</span>
                  </span>
                )}
              </div>
              <h1 className="text-base sm:text-xl font-black text-slate-900 line-clamp-1 mt-1">
                {session.lessonTitle}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Timer */}
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 font-mono text-sm font-black text-orange-700 border-2 border-amber-300 shadow-2xs">
              <Clock className="w-4 h-4 text-orange-600" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>

            {/* Flag bookmark button */}
            <button
              onClick={() => {
                sound.playClick();
                onToggleFlag(currentIndex);
              }}
              className={`px-3 py-2 rounded-xl border-2 transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer ${
                isFlagged
                  ? 'bg-amber-500 text-white border-amber-500 shadow-sm shadow-amber-500/30'
                  : 'bg-white text-slate-700 border-sky-200 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-800'
              }`}
              title="Đánh dấu câu này để xem lại"
            >
              <Bookmark className={`w-4 h-4 ${isFlagged ? 'fill-white' : 'text-amber-500'}`} />
              <span className="hidden sm:inline">
                {isFlagged ? 'Đã ghim' : 'Ghim câu này'}
              </span>
            </button>

            {/* Shuffle Questions & Answers button */}
            {onShuffleSession && (
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onShuffleSession();
                  setCurrentIndex(0);
                  setShowHint(false);
                  setShuffleNotice('✓ Đã trộn ngẫu nhiên thứ tự câu hỏi và các đáp án!');
                  setTimeout(() => setShuffleNotice(''), 3000);
                }}
                className="px-3 py-2 rounded-xl border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-900 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                title="Trộn ngẫu nhiên lại thứ tự các câu hỏi và các đáp án A, B, C, D"
              >
                <Shuffle className="w-4 h-4 text-purple-600" />
                <span>Trộn câu & đáp án</span>
              </button>
            )}

            {/* Save & Manage Exam button */}
            {onSaveToCustomExams && (
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onSaveToCustomExams(session);
                }}
                className="px-3 py-2 rounded-xl border-2 border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Lưu đề này vào Quản trị Đề đã tạo để sửa, xóa hoặc thêm câu hỏi"
              >
                <Edit3 className="w-4 h-4 text-indigo-600" />
                <span className="hidden md:inline">Quản trị / Sửa đề này</span>
              </button>
            )}

            {/* Palette toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setShowPalette(!showPalette);
              }}
              className="px-3 py-2 rounded-xl border-2 border-sky-200 bg-white text-sky-900 hover:bg-sky-50 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Xem danh sách tất cả các câu"
            >
              <ListOrdered className="w-4 h-4 text-sky-600" />
              <span className="hidden sm:inline">Bảng câu hỏi</span>
              <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] flex items-center justify-center font-extrabold border border-sky-200">
                {currentIndex + 1}/{total}
              </span>
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-slate-700 font-bold">
            <span>
              Đã làm: <strong className="text-sky-600 text-sm">{answeredCount}</strong>/{total} câu ({progressPercent}%)
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200 text-[11px] font-extrabold">
              {session.mode === 'practice' ? '🌱 Chế độ Học tập' : '🏆 Chế độ Thi thử'}
            </span>
          </div>
          <div className="w-full h-3 bg-sky-100/90 rounded-full overflow-hidden border border-sky-200/70 p-0.5">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.max(progressPercent, 2)}%` }}
            />
          </div>
          {shuffleNotice && (
            <div className="text-xs font-extrabold text-purple-800 bg-purple-100/90 border border-purple-300 px-3 py-1 rounded-xl inline-flex items-center gap-1.5 animate-in fade-in-50">
              <Shuffle className="w-3.5 h-3.5 text-purple-600" />
              <span>{shuffleNotice}</span>
            </div>
          )}
        </div>
      </div>

      {/* Question Palette Drawer (Collapsible) */}
      {showPalette && (
        <div className="bg-white rounded-3xl border-2 border-sky-300 p-4 sm:p-5 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-sky-100">
            <h3 className="font-extrabold text-sm text-sky-950 flex items-center gap-1.5">
              <ListOrdered className="w-4 h-4 text-sky-600" />
              Danh Sách Câu Hỏi ({total} câu)
            </h3>
            <button
              onClick={() => setShowPalette(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {session.questions.map((q, idx) => {
              const isAns = isQuestionAnswered(q, session.userAnswers[idx]);
              const isCurrent = idx === currentIndex;
              const isFlg = session.flaggedQuestions.includes(idx);

              let bg = 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-sky-50 hover:border-sky-300';
              if (isAns) {
                bg = 'bg-emerald-100 text-emerald-900 border-emerald-400 font-extrabold';
              }
              if (isFlg) {
                bg = 'bg-amber-100 text-amber-900 border-amber-400 font-extrabold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    sound.playClick();
                    setCurrentIndex(idx);
                    setShowPalette(false);
                    setShowHint(false);
                  }}
                  className={`h-10 rounded-xl border-2 text-xs flex flex-col items-center justify-center relative transition-all cursor-pointer ${bg} ${
                    isCurrent ? 'ring-2 ring-sky-600 scale-105 shadow-sm' : ''
                  }`}
                >
                  <span>{idx + 1}</span>
                  {isFlg && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-1 right-1" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-3 pt-2 text-[11px] text-slate-600 font-semibold border-t border-sky-100">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-400" />
              <span>Đã trả lời</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-amber-100 border border-amber-400" />
              <span>Đã ghim xem lại</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-slate-50 border border-slate-200" />
              <span>Chưa trả lời</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md ring-2 ring-sky-600 bg-white" />
              <span>Câu hiện tại</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div className="relative overflow-hidden bg-white rounded-3xl border-2 border-amber-300/90 shadow-lg shadow-amber-500/10 p-5 sm:p-7 space-y-6">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-sky-500" />
        {/* Header of Question */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-0.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-black text-xs sm:text-sm font-mono shadow-md shadow-sky-500/25">
              Câu {currentIndex + 1}
            </span>
            {getTypeBadge()}
            <DifficultyBadge difficulty={currentQ.difficulty} size="sm" showSubtext={true} />
          </div>

          {currentQ.hint && (
            <button
              onClick={() => {
                sound.playClick();
                setShowHint(!showHint);
              }}
              className="text-xs font-extrabold text-amber-800 bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>{showHint ? 'Ẩn gợi ý' : '💡 Xem gợi ý'}</span>
            </button>
          )}
        </div>

        {/* Hint Box */}
        {showHint && currentQ.hint && (
          <div className="p-4 rounded-2xl bg-[#FFF5CF] border-2 border-amber-300 text-amber-950 text-xs sm:text-sm leading-relaxed animate-in fade-in-50 flex items-start gap-2.5 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-extrabold">Gợi ý tư duy:</strong> {currentQ.hint}
            </div>
          </div>
        )}

        {/* Dynamic Question Body by Type */}
        {qType === 'true_false' || (currentQ.trueFalseAnswers && currentQ.trueFalseAnswers.length > 0) ? (
          <TrueFalseQuestion
            question={currentQ}
            userAnswer={selectedAnswer}
            onAnswer={handleSelectAnswer}
            isPracticeMode={session.mode === 'practice'}
          />
        ) : qType === 'fill_blank' ? (
          <FillBlankQuestion
            question={currentQ}
            userAnswer={selectedAnswer}
            onAnswer={handleSelectAnswer}
            isPracticeMode={session.mode === 'practice'}
          />
        ) : qType === 'matching' ? (
          <div>
            <div className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed font-['Plus_Jakarta_Sans'] mb-4 p-4 rounded-2xl bg-[#FFF5CF] border-2 border-amber-300/90 shadow-2xs">
              {currentQ.question}
            </div>
            <MatchingQuestion
              question={currentQ}
              userAnswer={selectedAnswer}
              onAnswer={handleSelectAnswer}
              isPracticeMode={session.mode === 'practice'}
            />
          </div>
        ) : qType === 'drag_drop_order' || qType === 'drag_drop' ? (
          <div>
            <div className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed font-['Plus_Jakarta_Sans'] mb-4 p-4 rounded-2xl bg-[#FFF5CF] border-2 border-amber-300/90 shadow-2xs">
              {currentQ.question}
            </div>
            <DragDropOrderQuestion
              question={currentQ}
              userAnswer={selectedAnswer}
              onAnswer={handleSelectAnswer}
              isPracticeMode={session.mode === 'practice'}
            />
          </div>
        ) : qType === 'multiple_select' ? (
          /* Multiple Select (Chọn nhiều đáp án đúng) */
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed font-['Plus_Jakarta_Sans'] whitespace-pre-line p-4 rounded-2xl bg-[#FFF5CF] border-2 border-amber-300/90 shadow-2xs">
                {currentQ.question}
              </div>
              <p className="text-xs font-extrabold text-purple-800 bg-purple-100 border border-purple-300 px-3.5 py-1.5 rounded-xl inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                <span>Lưu ý: Câu hỏi này có thể chọn nhiều đáp án đúng (Bấm để chọn hoặc bỏ chọn)</span>
              </p>
            </div>

            <div className="space-y-3">
              {currentQ.options.map((optionText, optIdx) => {
                const selectedArr: number[] = Array.isArray(selectedAnswer)
                  ? selectedAnswer
                  : typeof selectedAnswer === 'number'
                  ? [selectedAnswer]
                  : [];
                const isSelected = selectedArr.includes(optIdx);
                const correctIndices = getMultipleSelectCorrectIndices(currentQ);
                const isRightOption = correctIndices.includes(optIdx);
                const isPracticeMode = session.mode === 'practice';
                const isFullyAnswered = isQuestionAnswerCorrect(currentQ, selectedAnswer);
                const colorPreset = optionBadgeColors[optIdx % optionBadgeColors.length];

                let optionStyle = `border-slate-200/90 bg-white ${colorPreset.cardHover} text-slate-900 font-semibold shadow-2xs`;

                if (isSelected) {
                  optionStyle =
                    'border-purple-600 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-950 ring-2 ring-purple-500/25 font-bold shadow-md';
                }

                if (isPracticeMode && isFullyAnswered) {
                  if (isRightOption) {
                    optionStyle =
                      'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-bold';
                  } else {
                    optionStyle = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => {
                      const nextArr = isSelected
                        ? selectedArr.filter((i) => i !== optIdx)
                        : [...selectedArr, optIdx].sort((a, b) => a - b);
                      handleSelectAnswer(nextArr);
                    }}
                    className={`w-full p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3.5 group cursor-pointer ${optionStyle}`}
                  >
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shrink-0 transition-all ${
                        isSelected
                          ? 'bg-purple-600 text-white shadow-sm'
                          : colorPreset.badge
                      }`}
                    >
                      {isSelected ? '✓' : optionLetters[optIdx] || String.fromCharCode(65 + optIdx)}
                    </div>
                    <div className="flex-1 pt-1 text-sm sm:text-base leading-relaxed">
                      <span className="font-extrabold mr-1.5">
                        {optionLetters[optIdx] || String.fromCharCode(65 + optIdx)}.
                      </span>
                      {optionText}
                    </div>
                    {isSelected && (
                      <span className="text-[11px] font-extrabold text-purple-800 bg-purple-200/80 px-2.5 py-0.5 rounded-lg self-center shrink-0">
                        Đã chọn
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Multiple Choice (Default) */
          <div className="space-y-5">
            <div className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed font-['Plus_Jakarta_Sans'] whitespace-pre-line p-4 sm:p-5 rounded-2xl bg-[#FFF5CF] border-2 border-amber-300/90 shadow-2xs">
              {currentQ.question}
            </div>

            <div className="space-y-3">
              {currentQ.options.map((optionText, optIdx) => {
                const isSelected = selectedAnswer === optIdx;
                const isPracticeMode = session.mode === 'practice';
                const isAnswered = selectedAnswer !== undefined;
                const colorPreset = optionBadgeColors[optIdx % optionBadgeColors.length];

                let optionStyle = `border-slate-200/90 bg-white ${colorPreset.cardHover} text-slate-900 font-semibold shadow-2xs`;

                if (isSelected) {
                  optionStyle =
                    'border-blue-600 bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 text-indigo-950 ring-2 ring-blue-500/25 font-bold shadow-md';
                }

                // In practice mode, colorize options once answered
                if (isPracticeMode && isAnswered) {
                  if (optIdx === currentQ.correctAnswer) {
                    optionStyle =
                      'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/25 font-bold shadow-sm';
                  } else if (isSelected && optIdx !== currentQ.correctAnswer) {
                    optionStyle =
                      'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20 font-semibold';
                  } else {
                    optionStyle = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectAnswer(optIdx)}
                    className={`w-full p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3.5 group cursor-pointer ${optionStyle}`}
                  >
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shrink-0 transition-all ${
                        isSelected
                          ? 'bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-sm'
                          : isPracticeMode && isAnswered && optIdx === currentQ.correctAnswer
                          ? 'bg-emerald-600 text-white'
                          : colorPreset.badge
                      }`}
                    >
                      {optionLetters[optIdx]}
                    </div>
                    <div className="flex-1 pt-1 text-sm sm:text-base leading-relaxed">
                      {optionText}
                    </div>
                    {isPracticeMode && isAnswered && optIdx === currentQ.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                    )}
                    {isPracticeMode && isAnswered && isSelected && optIdx !== currentQ.correctAnswer && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Practice Mode Instant Explanation Box */}
        {session.mode === 'practice' && isQuestionAnswered(currentQ, selectedAnswer) && (
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-50/90 to-amber-50/80 border-2 border-red-300 space-y-2 animate-in fade-in-50 shadow-xs">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              <h4 className="font-extrabold text-sm sm:text-base text-red-600">
                Lời Giải Chi Tiết & Ghi Nhớ:
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-red-700 leading-relaxed font-semibold whitespace-pre-line">
              {currentQ.explanation ||
                (currentQ.pairs && currentQ.pairs.length > 0
                  ? `Đáp án ghép nối chuẩn:\n${currentQ.pairs.map((p, idx) => `• ${idx + 1}) ${p.left} ➔ ${p.right}`).join('\n')}`
                  : currentQ.blankAnswers && currentQ.blankAnswers.length > 0
                  ? `Từ cần điền chuẩn: ${currentQ.blankAnswers.join(' ; ')}`
                  : typeof currentQ.correctAnswer === 'number' && currentQ.options && currentQ.options[currentQ.correctAnswer]
                  ? `Đáp án đúng là ${optionLetters[currentQ.correctAnswer]}: ${currentQ.options[currentQ.correctAnswer]}`
                  : 'Hãy đối chiếu kết quả hiển thị màu xanh lá ở trên để ghi nhớ kiến thức chuẩn SGK.')}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Navigation Controls */}
      <div className="bg-gradient-to-r from-sky-50/90 via-white to-indigo-50/90 rounded-2xl border-2 border-sky-200/90 p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-md shadow-sky-500/5">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2.5 rounded-xl border-2 border-sky-200 hover:border-sky-400 bg-white text-sky-900 hover:bg-sky-50 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-2xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Câu trước</span>
        </button>

        <div className="px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-xs font-extrabold text-slate-700">
          Câu <span className="text-sky-700 font-black">{currentIndex + 1}</span> / {total}
        </div>

        <div className="flex items-center gap-2">
          {currentIndex < total - 1 ? (
            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-md shadow-sky-500/25 cursor-pointer active:scale-95"
            >
              <span>Câu tiếp</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                sound.playClick();
                setShowSubmitConfirm(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-md shadow-emerald-600/25 cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Nộp bài thi</span>
            </button>
          )}
        </div>
      </div>

      {/* Keyboard Shortcuts Hint Bar for Desktop */}
      <div className="hidden sm:flex items-center justify-center gap-4 text-[11px] text-slate-400 font-medium py-1">
        <span>⌨️ Phím tắt:</span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-mono font-bold text-[10px]">1-4</kbd> hoặc <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-mono font-bold text-[10px]">A-D</kbd> Chọn đáp án
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-mono font-bold text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-mono font-bold text-[10px]">→</kbd> Đổi câu
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-mono font-bold text-[10px]">F</kbd> Ghim
        </span>
        {currentQ?.hint && (
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-mono font-bold text-[10px]">H</kbd> Gợi ý
          </span>
        )}
      </div>

      {/* Submit Confirmation Dialog */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Send className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-slate-800">
                Xác Nhận Nộp Bài Thi
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Bạn đã hoàn thành <strong>{answeredCount}/{total}</strong> câu hỏi.
              </p>
            </div>

            {answeredCount < total && (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Bạn vẫn còn <strong>{total - answeredCount}</strong> câu chưa trả lời. Bạn có chắc chắn muốn nộp bài bây giờ không?
                </span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(false)}
                className="py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors"
              >
                Tiếp tục làm bài
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setShowSubmitConfirm(false);
                  onSubmitQuiz();
                }}
                className="py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
              >
                Nộp bài ngay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Dialog */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-slate-800">
                Dừng Làm Bài?
              </h3>
              <p className="text-xs text-slate-500">
                Nếu thoát bây giờ, kết quả của lượt làm bài này sẽ không được lưu vào lịch sử.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors"
              >
                Ở lại làm tiếp
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setShowExitConfirm(false);
                  onExitQuiz();
                }}
                className="py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-rose-600/20 transition-all"
              >
                Thoát bài thi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
