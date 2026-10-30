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
 * Trộn ngẫu nhiên thứ tự các đáp án bên trong 1 câu hỏi (hỗ trợ đầy đủ các dạng câu hỏi)
 */
export function shuffleQuestionAnswers(question: Question): Question {
  const q: Question = { ...question };
  const isMultiSelect = isMultipleSelectQuestion(q);
  const qType = isMultiSelect ? 'multiple_select' : q.type || 'multiple_choice';

  // 1. Dạng chọn nhiều đáp án đúng (multiple_select)
  if (qType === 'multiple_select' && Array.isArray(q.options) && q.options.length > 1) {
    const oldCorrects = getMultipleSelectCorrectIndices(q);
    const indices = shuffleArray(q.options.map((_, idx) => idx));
    const newOptions = indices.map((oldIdx) => q.options[oldIdx]);
    const newCorrectAnswers = oldCorrects
      .map((oldIdx) => indices.indexOf(oldIdx))
      .filter((i) => i >= 0)
      .sort((a, b) => a - b);

    return {
      ...q,
      options: newOptions,
      correctAnswers: newCorrectAnswers,
      correctAnswer: newCorrectAnswers[0] ?? 0,
    };
  }

  // 2. Dạng Đúng / Sai nhiều mệnh đề (a, b, c, d)
  if (
    qType === 'true_false' &&
    Array.isArray(q.trueFalseAnswers) &&
    q.trueFalseAnswers.length > 1 &&
    Array.isArray(q.options) &&
    q.options.length === q.trueFalseAnswers.length
  ) {
    const indices = shuffleArray(q.options.map((_, idx) => idx));
    const newOptions = indices.map((oldIdx) =>
      q.options[oldIdx].replace(/^[a-dA-D][).]\s*/, '').trim()
    );
    const newTrueFalseAnswers = indices.map((oldIdx) => q.trueFalseAnswers![oldIdx]);

    return {
      ...q,
      options: newOptions,
      trueFalseAnswers: newTrueFalseAnswers,
    };
  }

  // 3. Dạng Điền khuyết (trộn ngân hàng từ gợi ý wordBank)
  if (qType === 'fill_blank') {
    if (Array.isArray(q.wordBank) && q.wordBank.length > 1) {
      return {
        ...q,
        wordBank: shuffleArray(q.wordBank),
      };
    }
    return q;
  }

  // 4. Dạng Ghép nối cột (trộn thứ tự cột A hoặc cột B)
  if (qType === 'matching') {
    if (Array.isArray(q.matchingRight) && q.matchingRight.length > 1) {
      const shuffledRight = shuffleArray(q.matchingRight).map((item, idx) => ({
        ...item,
        label: String.fromCharCode(65 + idx),
      }));
      return {
        ...q,
        matchingRight: shuffledRight,
      };
    }
    return q;
  }

  // 5. Dạng Kéo thả sắp xếp thứ tự (trộn các bước ban đầu để học sinh sắp xếp)
  if (qType === 'drag_drop_order' || qType === 'drag_drop') {
    if (Array.isArray(q.orderItems) && q.orderItems.length > 1) {
      return {
        ...q,
        orderItems: shuffleArray(q.orderItems),
      };
    }
    return q;
  }

  // 6. Dạng Trắc nghiệm 4 lựa chọn (multiple_choice)
  if (Array.isArray(q.options) && q.options.length > 1) {
    // Không trộn nếu là câu Đúng/Sai 2 lựa chọn đơn giản
    const isSimpleTrueFalse =
      q.options.length === 2 &&
      q.options.every((opt) => /^(đúng|sai)/i.test(opt.trim()));
    if (isSimpleTrueFalse) {
      return q;
    }

    // Nếu đáp án chứa tham chiếu chữ cái cố định như "Cả A và B đều đúng" thì giữ nguyên vị trí
    if (hasFixedLetterReference(q.options)) {
      return q;
    }

    const oldCorrect = typeof q.correctAnswer === 'number' ? q.correctAnswer : 0;
    let indices: number[];

    if (isLastOptionAllOfAbove(q.options)) {
      // Trộn các đáp án phía trước, giữ nguyên đáp án "Tất cả các đáp án trên" ở cuối
      const prefixIndices = shuffleArray(
        q.options.slice(0, q.options.length - 1).map((_, idx) => idx)
      );
      indices = [...prefixIndices, q.options.length - 1];
    } else {
      indices = shuffleArray(q.options.map((_, idx) => idx));
    }

    const newOptions = indices.map((oldIdx) => q.options[oldIdx]);
    const newCorrect = indices.indexOf(oldCorrect);
    const oldLetter = String.fromCharCode(65 + oldCorrect);
    const newLetter = String.fromCharCode(65 + (newCorrect >= 0 ? newCorrect : 0));

    let updatedExplanation = q.explanation || '';
    if (updatedExplanation && oldLetter !== newLetter) {
      updatedExplanation = updatedExplanation.replace(
        new RegExp(`^(Đáp án đúng là\\s+)${oldLetter}\\b`, 'i'),
        `$1${newLetter}`
      );
    }

    return {
      ...q,
      options: newOptions,
      correctAnswer: newCorrect >= 0 ? newCorrect : 0,
      explanation: updatedExplanation,
    };
  }

  return q;
}

/**
 * Trộn danh sách câu hỏi và/hoặc các đáp án theo tùy chọn
 */
export function applyQuizShuffle(
  questions: Question[],
  options: { shuffleQuestions: boolean; shuffleAnswers: boolean }
): Question[] {
  if (!questions || questions.length === 0) return [];

  let result = [...questions];

  if (options.shuffleQuestions && result.length > 1) {
    result = shuffleArray(result);
  }

  if (options.shuffleAnswers) {
    result = result.map((q) => shuffleQuestionAnswers(q));
  }

  return result;
}
