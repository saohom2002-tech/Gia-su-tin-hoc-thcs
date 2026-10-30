import React from 'react';
import { Question } from '../../types/quiz';
import { Check, X, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import { sound } from '../../utils/sound';

interface TrueFalseQuestionProps {
  question: Question;
  userAnswer?: any; // (boolean | null)[] for multi-statement, or number (0/1) for single-statement
  onAnswer: (answer: any) => void;
  isPracticeMode?: boolean;
  disabled?: boolean;
}

export const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({
  question,
  userAnswer,
  onAnswer,
  isPracticeMode = false,
  disabled = false,
}) => {
  const isMultiStatement =
    (Array.isArray(question.trueFalseAnswers) && question.trueFalseAnswers.length > 0) ||
    (question.options &&
      question.options.length >= 2 &&
      !question.options.every((opt) => /^(đúng|sai)/i.test(opt.trim())));

  // Single-statement True/False fallback (2 choices: Đúng / Sai)
  if (!isMultiStatement) {
    const tfOptions =
      question.options && question.options.length >= 2
        ? question.options.slice(0, 2)
        : ['Đúng (Đ)', 'Sai (S)'];
    const selectedIdx =
      typeof userAnswer === 'number'
        ? userAnswer
        : typeof userAnswer === 'boolean'
        ? userAnswer
          ? 0
          : 1
        : undefined;
    const isAnswered = selectedIdx !== undefined;
    const correctIdx = question.correctAnswer ?? 0;

    return (
      <div className="space-y-5">
        <div className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed font-['Plus_Jakarta_Sans'] whitespace-pre-line">
          {question.question}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {tfOptions.map((optText, idx) => {
            const isSelected = selectedIdx === idx;
            const isTrueBtn = idx === 0;

            let btnStyle = isTrueBtn
              ? 'border-slate-200 bg-slate-50/70 hover:border-emerald-400 hover:bg-emerald-50/40 text-slate-800'
              : 'border-slate-200 bg-slate-50/70 hover:border-rose-400 hover:bg-rose-50/40 text-slate-800';

            if (isSelected) {
              btnStyle = isTrueBtn
                ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-bold shadow-xs'
                : 'border-rose-600 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20 font-bold shadow-xs';
            }

            if (isPracticeMode && isAnswered) {
              if (idx === correctIdx) {
                btnStyle =
                  'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-bold';
              } else if (isSelected && idx !== correctIdx) {
                btnStyle =
                  'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20 font-semibold';
              } else {
                btnStyle = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={disabled}
                onClick={() => {
                  if (disabled) return;
                  sound.playClick();
                  onAnswer(idx);
                }}
                className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm shrink-0 ${
                      isSelected
                        ? isTrueBtn
                          ? 'bg-emerald-600 text-white'
                          : 'bg-rose-600 text-white'
                        : 'bg-white border border-slate-200 text-slate-600'
                    }`}
                  >
                    {isTrueBtn ? 'Đ' : 'S'}
                  </span>
                  <span className="text-sm sm:text-base font-bold">{optText}</span>
                </div>
                {isPracticeMode && isAnswered && idx === correctIdx && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isPracticeMode && isAnswered && isSelected && idx !== correctIdx && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Multi-statement True/False (a, b, c, d - Chuẩn GDPT 2018 / Công văn 7991)
  const statements = question.options || [];
  const expectedAnswers =
    Array.isArray(question.trueFalseAnswers) && question.trueFalseAnswers.length === statements.length
      ? question.trueFalseAnswers
      : statements.map((_, idx) =>
          question.trueFalseAnswers?.[idx] !== undefined
            ? question.trueFalseAnswers[idx]
            : idx === (question.correctAnswer ?? 0)
        );

  const currentAnswers: (boolean | null)[] = statements.map((_, idx) => {
    if (Array.isArray(userAnswer) && typeof userAnswer[idx] === 'boolean') {
      return userAnswer[idx];
    }
    if (userAnswer && typeof userAnswer === 'object' && typeof userAnswer[idx] === 'boolean') {
      return userAnswer[idx];
    }
    return null;
  });

  const handleToggleStatement = (idx: number, val: boolean) => {
    if (disabled) return;
    sound.playClick();
    const next = [...currentAnswers];
    next[idx] = val;
    onAnswer(next);
  };

  const handleResetAll = () => {
    if (disabled) return;
    sound.playClick();
    onAnswer(statements.map(() => null));
  };

  const answeredCount = currentAnswers.filter((v) => typeof v === 'boolean').length;

  return (
    <div className="space-y-5">
      <div className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed font-['Plus_Jakarta_Sans'] whitespace-pre-line p-4 rounded-2xl bg-[#FFF5CF] border-2 border-amber-300/90 shadow-2xs">
        {question.question}
      </div>

      <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200 flex items-center justify-between gap-3 text-xs sm:text-sm text-teal-950">
        <div className="font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
          <span>
            Hãy xét từng phát biểu <strong>a), b), c), d)</strong> bên dưới và chọn{' '}
            <strong className="text-emerald-700">ĐÚNG</strong> hoặc{' '}
            <strong className="text-rose-600">SAI</strong> ({answeredCount}/{statements.length} ý đã chọn)
          </span>
        </div>
        {!disabled && answeredCount > 0 && (
          <button
            type="button"
            onClick={handleResetAll}
            className="text-xs font-semibold text-slate-500 hover:text-rose-600 flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Chọn lại</span>
          </button>
        )}
      </div>

      <div className="space-y-3">
        {statements.map((stmtText, idx) => {
          const letter = String.fromCharCode(97 + idx); // a, b, c, d
          const userVal = currentAnswers[idx];
          const expectedVal = expectedAnswers[idx];
          const isItemAnswered = typeof userVal === 'boolean';
          const isItemCorrect = isPracticeMode && isItemAnswered && userVal === expectedVal;
          const isItemWrong = isPracticeMode && isItemAnswered && userVal !== expectedVal;

          return (
            <div
              key={idx}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 ${
                isItemCorrect
                  ? 'border-emerald-400 bg-emerald-50/60 shadow-2xs'
                  : isItemWrong
                  ? 'border-rose-300 bg-rose-50/50 shadow-2xs'
                  : isItemAnswered
                  ? 'border-indigo-300 bg-indigo-50/30 shadow-2xs'
                  : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-3 flex-1">
                <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 font-black text-xs sm:text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {letter})
                </span>
                <div className="flex-1 text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  {stmtText}
                  {isPracticeMode && isItemAnswered && (
                    <div className="mt-1 text-xs font-bold">
                      {isItemCorrect ? (
                        <span className="text-emerald-700">
                          ✓ Chính xác ({expectedVal ? 'Đúng' : 'Sai'})
                        </span>
                      ) : (
                        <span className="text-rose-600">
                          ✗ Chưa đúng — Đáp án chuẩn là: {expectedVal ? 'ĐÚNG' : 'SAI'}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => handleToggleStatement(idx, true)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold border flex items-center gap-1.5 transition-all cursor-pointer ${
                    userVal === true
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm scale-102'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-400 hover:text-emerald-700'
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Đúng</span>
                </button>

                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => handleToggleStatement(idx, false)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold border flex items-center gap-1.5 transition-all cursor-pointer ${
                    userVal === false
                      ? 'bg-rose-600 text-white border-rose-600 shadow-sm scale-102'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-rose-400 hover:text-rose-700'
                  }`}
                >
                  <X className="w-4 h-4 stroke-[3]" />
                  <span>Sai</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
