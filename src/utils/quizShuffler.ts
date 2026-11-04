import { Question } from '../types/quiz';
import {
  isMultipleSelectQuestion,
  getMultipleSelectCorrectIndices,
} from './questionEvaluator';

/**
 * Thuật toán Fisher-Yates trộn ngẫu nhiên mảng.
 * Đảm bảo nếu mảng có từ 2 phần tử trở lên sẽ ưu tiên tạo thứ tự mới khác thứ tự ban đầu.
 */
export function shuffleArray<T>(items: T[]): T[] {
  if (!items || items.length <= 1) return [...(items || [])];
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Nếu vô tình kết quả sau khi trộn vẫn giống hệt ban đầu thì đảo 2 phần tử đầu
  const isIdentical = arr.every((val, idx) => val === items[idx]);
  if (isIdentical && arr.length >= 2) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
  }

  return arr;
}

/**
 * Kiểm tra xem phương án có chứa cụm từ phụ thuộc vị trí cố định như "Cả A và B", "Cả B, C" hay không
 */
function hasFixedLetterReference(options: string[]): boolean {
  return options.some((opt) =>
    /\b(cả\s+[a-d]\s*(và|,)\s*[a-d]|phương án\s+[a-d]\s+và\s+[a-d]|đáp án\s+[a-d]\s+và\s+[a-d])\b/i.test(
      opt
    )
  );
}

/**
 * Kiểm tra xem phương án cuối có phải là "Tất cả các đáp án trên đều đúng/sai" hay không
 */
function isLastOptionAllOfAbove(options: string[]): boolean {
  if (options.length < 3) return false;
  const last = options[options.length - 1];
  return /\b(tất cả\s+(các\s+)?(đáp án|phương án|ý)\s+trên|cả\s+3\s+(đáp án|phương án|ý)\s+trên)\b/i.test(
    last
  );
}

/**
 * ĐÃ BỎ CHỨC NĂNG TRỘN ĐÁP ÁN:
 * Luôn giữ nguyên thứ tự các phương án A, B, C, D gốc của câu hỏi để tránh làm
 * lệch đáp án đúng và lời giải thích chi tiết sư phạm (Explanation).
 */
export function shuffleQuestionAnswers(question: Question): Question {
  return question;
}

/**
 * Trộn danh sách câu hỏi: Tự động xáo ngẫu nhiên thứ tự các câu hỏi trong đề
 * khi học sinh vào luyện thi, nhưng giữ nguyên các phương án đáp án và lời giải.
 */
export function applyQuizShuffle(
  questions: Question[],
  options?: { shuffleQuestions?: boolean; shuffleAnswers?: boolean }
): Question[] {
  if (!questions || questions.length === 0) return [];

  let result = [...questions];

  // Mặc định xáo trộn ngẫu nhiên thứ tự các câu hỏi trong đề
  const shouldShuffleQ = options ? options.shuffleQuestions !== false : true;
  if (shouldShuffleQ && result.length > 1) {
    result = shuffleArray(result);
  }

  // Tuyệt đối không xáo trộn đáp án bên trong câu hỏi để đảm bảo đáp án và lời giải luôn khớp 100%
  return result;
}
