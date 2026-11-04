import React, { useState } from 'react';
import { Question } from '../../types/quiz';
import { Sparkles, RotateCcw, Check, X, Keyboard } from 'lucide-react';
import { sound } from '../../utils/sound';
import { isBlankValueMatch } from '../../utils/questionEvaluator';

interface FillBlankQuestionProps {
  question: Question;
  userAnswer?: string[]; // array of strings for blanks
  onAnswer: (answer: string[]) => void;
  isPracticeMode?: boolean;
  disabled?: boolean;
}

// Biểu thức regex nhận diện linh hoạt mọi định dạng chỗ trống mà giáo viên hay soạn:
// 1) [1], [2], (1), (2), {{0}}, {{1}}, [blank1]
// 2) [...], (...), [___], (___)
// 3) Chuỗi dấu chấm liên tiếp: ....., .............. (từ 3 dấu chấm trở lên)
// 4) Chuỗi gạch dưới: ___, _______ (từ 2 dấu gạch dưới trở lên)
export const BLANK_REGEX =
  /(\{\{\d+\}\}|\[\d+\]|\(\d+\)|\[blank\d*\]|\[\.\.\.+\]|\(\.\.\.+\)|\[_{2,}\]|\(_{2,}\)|_{2,}|\.{3,}|\(\s*\.{2,}\s*\)|\(\s*_{2,}\s*\))/gi;

export const FillBlankQuestion: React.FC<FillBlankQuestionProps> = ({
  question,
  userAnswer = [],
  onAnswer,
  isPracticeMode = false,
  disabled = false,
}) => {
  const blanks = question.blankAnswers || [];
  const wordBank = question.wordBank || blanks;
  const [activeBlankIndex, setActiveBlankIndex] = useState<number>(0);

  // Initialize or align answers
  const currentAnswers: string[] = blanks.map((_, idx) => userAnswer[idx] || '');

  // Xử lý khi học sinh gõ phím trực tiếp vào ô trống
  const handleTypeWord = (blankIdx: number, val: string) => {
    if (disabled) return;
    const newAnswers = [...currentAnswers];
    newAnswers[blankIdx] = val;
    onAnswer(newAnswers);
    setActiveBlankIndex(blankIdx);
  };

  // Xử lý khi học sinh bấm chọn từ trong Ngân hàng từ khóa gợi ý
  const handleSelectWord = (word: string) => {
    if (disabled) return;
    sound.playClick();

    const newAnswers = [...currentAnswers];
    newAnswers[activeBlankIndex] = word;
    onAnswer(newAnswers);

    // Tự động chuyển con trỏ sang ô trống kế tiếp còn trống
    const nextEmpty = newAnswers.findIndex((ans, i) => i > activeBlankIndex && !ans);
    if (nextEmpty !== -1) {
      setActiveBlankIndex(nextEmpty);
    } else {
      const firstEmpty = newAnswers.findIndex((ans) => !ans);
      if (firstEmpty !== -1) {
        setActiveBlankIndex(firstEmpty);
      }
    }
  };

  const handleClearBlank = (blankIdx: number) => {
    if (disabled) return;
    sound.playClick();
    const newAnswers = [...currentAnswers];
    newAnswers[blankIdx] = '';
    onAnswer(newAnswers);
    setActiveBlankIndex(blankIdx);
  };

  const handleResetAll = () => {
    if (disabled) return;
    sound.playClick();
    onAnswer(blanks.map(() => ''));
    setActiveBlankIndex(0);
  };

  // Phân tích câu hỏi và hiển thị các ô nhập liệu / ô chọn trực tiếp
  const renderQuestionText = () => {
    let rawText = question.question || '';

    // Kiểm tra xem trong đề bài có chứa chỗ trống không
    const testRegex = new RegExp(BLANK_REGEX.source, 'gi');
    const hasPlaceholder = testRegex.test(rawText);

    // Nếu giáo viên không chèn bất kỳ ký hiệu nào (hoặc chỉ ghi đề), tự động thêm [1], [2]... vào cuối câu
    if (!hasPlaceholder && blanks.length > 0) {
      const appended = blanks.map((_, idx) => ` [${idx + 1}]`).join(' ');
      rawText = rawText + appended;
    }

    const splitRegex = new RegExp(BLANK_REGEX.source, 'gi');
    const parts = rawText.split(splitRegex);
    let blankCounter = 0;

    return (
      <div className="text-base sm:text-lg leading-relaxed text-slate-800 font-medium space-x-1">
        {parts.map((part, i) => {
          const matchCheck = new RegExp(BLANK_REGEX.source, 'i');
          const isBlankPlaceholder = matchCheck.test(part);

          if (isBlankPlaceholder && blankCounter < blanks.length) {
            const currentBlankIdx = blankCounter;
            blankCounter++;

            const filledWord = currentAnswers[currentBlankIdx] || '';
            const isActive = activeBlankIndex === currentBlankIdx;
            const isCorrect =
              isPracticeMode && filledWord && isBlankValueMatch(filledWord, blanks[currentBlankIdx]);
            const isWrong = isPracticeMode && filledWord && !isCorrect;

            return (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 my-1 mx-0.5 rounded-xl text-sm font-bold border-2 transition-all shadow-2xs ${
                  isActive
                    ? 'bg-amber-50 text-amber-950 border-amber-400 ring-3 ring-amber-300/40 shadow-xs'
                    : filledWord
                    ? isCorrect
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-400'
                      : isWrong
                      ? 'bg-rose-50 text-rose-900 border-rose-400'
                      : 'bg-indigo-50 text-indigo-900 border-indigo-300'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                }`}
              >
                <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono font-bold select-none shrink-0">
                  {currentBlankIdx + 1}
                </span>

                {/* Ô Input cho phép học sinh GÕ TRỰC TIẾP TỪ BÀN PHÍM */}
                <input
                  type="text"
                  value={filledWord}
                  onChange={(e) => handleTypeWord(currentBlankIdx, e.target.value)}
                  onFocus={() => setActiveBlankIndex(currentBlankIdx)}
                  disabled={disabled}
                  placeholder="Nhập hoặc chọn từ..."
                  className="bg-transparent border-none outline-none font-bold text-sm text-slate-900 placeholder:text-slate-400 placeholder:font-normal placeholder:italic min-w-[120px] max-w-[260px] text-center"
                  style={{ width: `${Math.max(120, (filledWord.length + 4) * 9.5)}px` }}
                />

                {/* Nút xóa từ nhanh */}
                {filledWord && !disabled && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClearBlank(currentBlankIdx);
                    }}
                    className="p-1 hover:bg-slate-200/80 rounded-full text-slate-400 hover:text-slate-700 cursor-pointer shrink-0"
                    title="Xóa từ này"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Trạng thái chấm điểm tức thì trong chế độ Ôn tập */}
                {isCorrect && <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />}
                {isWrong && <X className="w-4 h-4 text-rose-600 stroke-[3] shrink-0" />}
              </span>
            );
          }

          return <span key={i}>{part}</span>;
        })}
      </div>
    );
  };

  return (
    <div className="space-y-5">
      {/* Question prompt with interactive blanks */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/40 border-2 border-amber-300/80 shadow-2xs">
        {renderQuestionText()}
      </div>

      {/* Helper notice */}
      <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100/80 px-3.5 py-2 rounded-xl border border-slate-200">
        <Keyboard className="w-4 h-4 text-indigo-600 shrink-0" />
        <span>
          <strong>Cách làm bài:</strong> Em có thể <u>gõ trực tiếp từ bàn phím</u> vào ô trống{' '}
          <strong>[{activeBlankIndex + 1}]</strong> hoặc <u>nhấp chọn các từ khóa gợi ý</u> bên dưới.
        </span>
      </div>

      {/* Word Bank section */}
      {wordBank && wordBank.length > 0 && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Ngân hàng từ khóa gợi ý (Nhấp để điền nhanh vào ô [{activeBlankIndex + 1}]):</span>
            </div>

            {!disabled && (
              <button
                type="button"
                onClick={handleResetAll}
                className="text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Làm lại từ đầu</span>
              </button>
            )}
          </div>

          {/* Chips of candidate words */}
          <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
            {wordBank.map((word, wIdx) => {
              const isUsed = currentAnswers.includes(word);

              return (
                <button
                  key={wIdx}
                  type="button"
                  onClick={() => handleSelectWord(word)}
                  disabled={disabled}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    isUsed
                      ? 'bg-slate-100 text-slate-400 border-slate-200 opacity-60'
                      : 'bg-indigo-50/80 hover:bg-indigo-100 text-indigo-900 border-indigo-200 hover:border-indigo-400 hover:shadow-xs active:scale-95'
                  }`}
                >
                  {word}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Practice mode instant validation feedback */}
      {isPracticeMode && currentAnswers.some(Boolean) && (
        <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-800 flex items-center justify-between">
          <span>
            Đã điền {currentAnswers.filter(Boolean).length}/{blanks.length} vị trí.
          </span>
          <span className="font-semibold">
            {currentAnswers.every((ans, idx) => isBlankValueMatch(ans, blanks[idx]))
              ? '🎉 Tuyệt vời! Bạn đã điền chính xác toàn bộ!'
              : '💡 Hãy kiểm tra lại các từ chưa đúng màu đỏ.'}
          </span>
        </div>
      )}
    </div>
  );
};
