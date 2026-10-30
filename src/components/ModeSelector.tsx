import React from 'react';
import { QuizMode } from '../types/quiz';
import { Timer, Lightbulb, Check, Shuffle } from 'lucide-react';
import { sound } from '../utils/sound';

interface ModeSelectorProps {
  mode: QuizMode;
  onSelectMode: (mode: QuizMode) => void;
  shuffleQuestions?: boolean;
  onToggleShuffleQuestions?: (val: boolean) => void;
  shuffleAnswers?: boolean;
  onToggleShuffleAnswers?: (val: boolean) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({
  mode,
  onSelectMode,
  shuffleQuestions = true,
  onToggleShuffleQuestions,
  shuffleAnswers = true,
  onToggleShuffleAnswers,
}) => {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-800">
            Chọn Phương Thức Làm Bài & Trộn Đề
          </h3>
          <p className="text-xs text-slate-500">
            Tùy chọn phong cách học tập và chế độ đảo ngẫu nhiên câu hỏi / đáp án
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Exam Mode */}
        <div
          onClick={() => {
            sound.playClick();
            onSelectMode('exam');
          }}
          className={`cursor-pointer p-3.5 rounded-xl border transition-all flex items-start gap-3 relative ${
            mode === 'exam'
              ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-xs'
              : 'border-slate-200 hover:border-indigo-200 bg-white'
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              mode === 'exam'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            <Timer className="w-5 h-5" />
          </div>
          <div className="flex-1 pr-6">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-sm text-slate-800">
                Chế độ Thi Thử (Bấm giờ)
              </h4>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-100 text-indigo-700">
                Chuẩn thi
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Có đồng hồ đếm giờ, làm toàn bộ đề rồi mới nộp bài để xem điểm số và phân tích xếp loại.
            </p>
          </div>
          {mode === 'exam' && (
            <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
          )}
        </div>

        {/* Practice Mode */}
        <div
          onClick={() => {
            sound.playClick();
            onSelectMode('practice');
          }}
          className={`cursor-pointer p-3.5 rounded-xl border transition-all flex items-start gap-3 relative ${
            mode === 'practice'
              ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-xs'
              : 'border-slate-200 hover:border-indigo-200 bg-white'
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              mode === 'practice'
                ? 'bg-amber-500 text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="flex-1 pr-6">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-sm text-slate-800">
                Chế độ Học Tập (Xem giải thích ngay)
              </h4>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-800">
                Gợi ý & Mẹo
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Không tính thời gian. Trả lời câu nào xem ngay đáp án đúng và lời giải chi tiết để ghi nhớ bài học.
            </p>
          </div>
          {mode === 'practice' && (
            <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
          )}
        </div>
      </div>

      {/* Shuffle Options Bar */}
      {(onToggleShuffleQuestions || onToggleShuffleAnswers) && (
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <Shuffle className="w-4 h-4 text-sky-600" />
            <span>Tùy chọn trộn đề ngẫu nhiên (Chống học vẹt):</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {onToggleShuffleQuestions && (
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onToggleShuffleQuestions(!shuffleQuestions);
                }}
                className={`px-3.5 py-2 rounded-xl border-2 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  shuffleQuestions
                    ? 'bg-sky-50 border-sky-500 text-sky-900 shadow-2xs'
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] ${
                    shuffleQuestions
                      ? 'bg-sky-600 text-white'
                      : 'bg-white border border-slate-300 text-transparent'
                  }`}
                >
                  ✓
                </span>
                <Shuffle className="w-3.5 h-3.5 text-sky-600" />
                <span>Trộn thứ tự câu hỏi</span>
              </button>
            )}

            {onToggleShuffleAnswers && (
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onToggleShuffleAnswers(!shuffleAnswers);
                }}
                className={`px-3.5 py-2 rounded-xl border-2 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  shuffleAnswers
                    ? 'bg-purple-50 border-purple-500 text-purple-900 shadow-2xs'
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] ${
                    shuffleAnswers
                      ? 'bg-purple-600 text-white'
                      : 'bg-white border border-slate-300 text-transparent'
                  }`}
                >
                  ✓
                </span>
                <Shuffle className="w-3.5 h-3.5 text-purple-600" />
                <span>Trộn thứ tự đáp án (A, B, C, D)</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
