import { Question } from '../types/quiz';

/**
 * Normalizes Vietnamese text for accurate comparisons across platforms:
 * - NFC Unicode normalization
 * - Unifies smart quotes and apostrophes
 * - Collapses non-breaking and multiple whitespaces
 * - Trims and converts to lowercase
 * - Strips trailing punctuation (periods, commas)
 */
export function normalizeText(text: string | undefined | null): string {
  if (!text) return '';
  return text
    .normalize('NFC')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u00A0\s]+/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/[.,;:]+$/, '');
}

/**
 * Checks whether a user-entered blank value matches the expected blank answer.
 * Supports:
 * - Normalization (case-insensitive, unicode NFC, whitespace collapse)
 * - Multiple acceptable variants separated by '/' or '|'
 */
export function isBlankValueMatch(userVal: string | undefined | null, expected: string): boolean {
  if (!userVal) return false;
  const normUser = normalizeText(userVal);
  const normExp = normalizeText(expected);
  if (normUser && normUser === normExp) return true;

  // Check possible variants in expected answer (e.g. "máy tính / máy vi tính")
  const variants = expected.split(/[/|]/).map((v) => normalizeText(v)).filter(Boolean);
  if (variants.includes(normUser)) return true;

  // Also check without quotes or parentheses
  const stripSymbols = (s: string) => s.replace(/["'“”()]/g, '').trim();
  if (stripSymbols(normUser) === stripSymbols(normExp)) return true;

  return false;
}

/**
 * Checks whether a question is a multiple-select (chọn nhiều đáp án) question.
 */
export function isMultipleSelectQuestion(question: Question): boolean {
  if (question.type === 'multiple_select') return true;
  if (
    (!question.type || question.type === 'multiple_choice') &&
    Array.isArray(question.correctAnswers) &&
    question.correctAnswers.length > 1
  ) {
    return true;
  }
  return false;
}

/**
 * Returns sorted unique array of correct option indices (0-based) for multiple_select questions.
 */
export function getMultipleSelectCorrectIndices(question: Question): number[] {
  if (Array.isArray(question.correctAnswers) && question.correctAnswers.length > 0) {
    return Array.from(new Set(question.correctAnswers.filter((n) => typeof n === 'number' && n >= 0))).sort(
      (a, b) => a - b
    );
  }
  if (typeof question.correctAnswer === 'number' && question.correctAnswer >= 0) {
    return [question.correctAnswer];
  }
  return [0];
}

/**
 * Checks if a question has been answered by the user.
 */
export function isQuestionAnswered(question: Question, userAnswer: any): boolean {
  if (userAnswer === undefined || userAnswer === null) {
    return false;
  }

  if (isMultipleSelectQuestion(question)) {
    if (Array.isArray(userAnswer)) {
      return userAnswer.length > 0;
    }
    return typeof userAnswer === 'number';
  }

  const type = question.type || 'multiple_choice';

  if (type === 'multiple_choice') {
    return typeof userAnswer === 'number';
  }

  if (type === 'true_false') {
    if (Array.isArray(question.trueFalseAnswers) && question.trueFalseAnswers.length > 0) {
      if (Array.isArray(userAnswer)) {
        return userAnswer.some((val) => typeof val === 'boolean');
      }
      if (typeof userAnswer === 'object' && userAnswer !== null) {
        return Object.values(userAnswer).some((val) => typeof val === 'boolean');
      }
      return false;
    }
    return typeof userAnswer === 'number' || typeof userAnswer === 'boolean';
  }

  if (type === 'fill_blank') {
    if (!Array.isArray(userAnswer)) return false;
    return userAnswer.some((val) => typeof val === 'string' && val.trim().length > 0);
  }

  if (type === 'matching') {
    if (typeof userAnswer !== 'object' || userAnswer === null) return false;
    return Object.keys(userAnswer).length > 0;
  }

  if (type === 'drag_drop_order' || (type as string) === 'drag_drop') {
    return Array.isArray(userAnswer) && userAnswer.length > 0;
  }

  return false;
}

/**
 * Extracts normalized correct matches for a matching question.
 */
export function getMatchingPairsAndMap(question: Question): {
  lefts: { id: string; text: string; label?: string }[];
  rights: { id: string; text: string; label?: string }[];
  correctMatches: Record<string, string>;
} {
  const lefts =
    question.matchingLeft && question.matchingLeft.length > 0
      ? question.matchingLeft
      : (question.pairs || []).map((p, idx) => ({
          id: `left-${idx + 1}`,
          text: p.left,
          label: `${idx + 1}`,
        }));

  const rights =
    question.matchingRight && question.matchingRight.length > 0
      ? question.matchingRight
      : (question.pairs || []).map((p, idx) => ({
          id: `right-${idx + 1}`,
          text: p.right,
          label: `CN${idx + 1}`,
        }));

  let correctMatches = question.correctMatches;
  if (!correctMatches || Object.keys(correctMatches).length === 0) {
    correctMatches = {};
    if (question.pairs && question.pairs.length > 0) {
      question.pairs.forEach((_, idx) => {
        correctMatches![`left-${idx + 1}`] = `right-${idx + 1}`;
      });
    } else if (lefts.length > 0 && rights.length > 0) {
      lefts.forEach((l, idx) => {
        if (rights[idx]) {
          correctMatches![l.id] = rights[idx].id;
        }
      });
    }
  }

  return { lefts, rights, correctMatches: correctMatches || {} };
}

/**
 * Checks if a specific left-right match is correct.
 */
export function isPairMatch(
  lId: string,
  userRId: string | undefined | null,
  correctMatches: Record<string, string>,
  rights: { id: string; text: string }[]
): boolean {
  if (!userRId) return false;
  const expectedRId = correctMatches[lId];
  if (expectedRId && userRId === expectedRId) return true;

  // Fallback check by text similarity
  const userRItem = rights.find((r) => r.id === userRId);
  const expectedRItem = rights.find((r) => r.id === expectedRId);
  if (
    userRItem &&
    expectedRItem &&
    normalizeText(userRItem.text) === normalizeText(expectedRItem.text)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether the user's answer is 100% correct.
 */
export function isQuestionAnswerCorrect(question: Question, userAnswer: any): boolean {
  if (userAnswer === undefined || userAnswer === null) {
    return false;
  }

  if (isMultipleSelectQuestion(question)) {
    const expectedIndices = getMultipleSelectCorrectIndices(question);
    const userIndices: number[] = Array.isArray(userAnswer)
      ? Array.from(new Set(userAnswer.filter((n: any) => typeof n === 'number'))).sort((a, b) => a - b)
      : typeof userAnswer === 'number'
      ? [userAnswer]
      : [];

    if (userIndices.length !== expectedIndices.length) return false;
    return expectedIndices.every((val, idx) => userIndices[idx] === val);
  }

  const type = question.type || 'multiple_choice';

  if (type === 'multiple_choice') {
    return userAnswer === question.correctAnswer;
  }

  if (type === 'true_false') {
    if (Array.isArray(question.trueFalseAnswers) && question.trueFalseAnswers.length > 0) {
      const expected = question.trueFalseAnswers;
      return expected.every((expVal, idx) => {
        const actualVal = Array.isArray(userAnswer) ? userAnswer[idx] : userAnswer?.[idx];
        return actualVal === expVal;
      });
    }
    if (typeof userAnswer === 'boolean') {
      return (userAnswer ? 0 : 1) === (question.correctAnswer ?? 0);
    }
    return userAnswer === question.correctAnswer;
  }

  if (type === 'fill_blank') {
    if (!Array.isArray(userAnswer) || !question.blankAnswers || question.blankAnswers.length === 0) return false;

    // Must fill all blanks
    if (userAnswer.length < question.blankAnswers.length) return false;

    return question.blankAnswers.every((expected, idx) => {
      return isBlankValueMatch(userAnswer[idx], expected);
    });
  }

  if (type === 'matching') {
    const { rights, correctMatches } = getMatchingPairsAndMap(question);
    if (!userAnswer || typeof userAnswer !== 'object') return false;

    const expectedKeys = Object.keys(correctMatches);
    if (expectedKeys.length === 0) return false;

    // Check each expected pair
    return expectedKeys.every((lId) => {
      return isPairMatch(lId, userAnswer[lId], correctMatches, rights);
    });
  }

  if (type === 'drag_drop_order' || (type as string) === 'drag_drop') {
    const orderItems =
      question.orderItems && question.orderItems.length > 0
        ? question.orderItems
        : (question.items || []).map((txt, idx) => ({ id: `step-${idx + 1}`, text: txt }));

    const correctOrder =
      question.correctOrder && question.correctOrder.length > 0
        ? question.correctOrder
        : orderItems.map((it) => it.id);

    if (!Array.isArray(userAnswer) || userAnswer.length !== correctOrder.length) return false;

    return correctOrder.every((expectedId, idx) => {
      const actualId = userAnswer[idx];
      if (actualId === expectedId) return true;

      const userItem = orderItems.find((it) => it.id === actualId);
      const expectedItem = orderItems.find((it) => it.id === expectedId);
      if (
        userItem &&
        expectedItem &&
        normalizeText(userItem.text) === normalizeText(expectedItem.text)
      ) {
        return true;
      }
      return false;
    });
  }

  return false;
}

/**
 * Calculates a score between 0 and 1 (with accurate partial credit for matching & fill_blank).
 */
export function getQuestionAnswerScore(question: Question, userAnswer: any): number {
  if (userAnswer === undefined || userAnswer === null) return 0;

  // Short-circuit if 100% correct
  if (isQuestionAnswerCorrect(question, userAnswer)) {
    return 1;
  }

  if (isMultipleSelectQuestion(question)) {
    const expectedIndices = getMultipleSelectCorrectIndices(question);
    const userIndices: number[] = Array.isArray(userAnswer)
      ? Array.from(new Set(userAnswer.filter((n: any) => typeof n === 'number')))
      : typeof userAnswer === 'number'
      ? [userAnswer]
      : [];
    if (userIndices.length === 0 || expectedIndices.length === 0) return 0;

    let correctPicked = 0;
    let wrongPicked = 0;
    userIndices.forEach((idx) => {
      if (expectedIndices.includes(idx)) {
        correctPicked++;
      } else {
        wrongPicked++;
      }
    });
    const rawRatio = Math.max(0, (correctPicked - wrongPicked * 0.5) / expectedIndices.length);
    return Number(rawRatio.toFixed(2));
  }

  const type = question.type || 'multiple_choice';

  if (type === 'multiple_choice') {
    return userAnswer === question.correctAnswer ? 1 : 0;
  }

  if (type === 'true_false') {
    if (Array.isArray(question.trueFalseAnswers) && question.trueFalseAnswers.length > 0) {
      const expected = question.trueFalseAnswers;
      let correctCount = 0;
      expected.forEach((expVal, idx) => {
        const actualVal = Array.isArray(userAnswer) ? userAnswer[idx] : userAnswer?.[idx];
        if (actualVal === expVal) {
          correctCount++;
        }
      });
      return Number((correctCount / expected.length).toFixed(2));
    }
    return userAnswer === question.correctAnswer ? 1 : 0;
  }

  if (type === 'fill_blank') {
    if (!Array.isArray(userAnswer) || !question.blankAnswers || question.blankAnswers.length === 0) return 0;
    let correctCount = 0;
    question.blankAnswers.forEach((expected, idx) => {
      if (isBlankValueMatch(userAnswer[idx], expected)) {
        correctCount++;
      }
    });
    return Number((correctCount / question.blankAnswers.length).toFixed(2));
  }

  if (type === 'matching') {
    const { rights, correctMatches } = getMatchingPairsAndMap(question);
    if (!userAnswer || typeof userAnswer !== 'object') return 0;
    const expectedKeys = Object.keys(correctMatches);
    if (expectedKeys.length === 0) return 0;

    let correctCount = 0;
    expectedKeys.forEach((lId) => {
      if (isPairMatch(lId, userAnswer[lId], correctMatches, rights)) {
        correctCount++;
      }
    });
    return Number((correctCount / expectedKeys.length).toFixed(2));
  }

  if (type === 'drag_drop_order' || (type as string) === 'drag_drop') {
    const orderItems =
      question.orderItems && question.orderItems.length > 0
        ? question.orderItems
        : (question.items || []).map((txt, idx) => ({ id: `step-${idx + 1}`, text: txt }));

    const correctOrder =
      question.correctOrder && question.correctOrder.length > 0
        ? question.correctOrder
        : orderItems.map((it) => it.id);

    if (!Array.isArray(userAnswer) || correctOrder.length === 0) return 0;

    let correctCount = 0;
    correctOrder.forEach((expectedId, idx) => {
      const actualId = userAnswer[idx];
      if (actualId === expectedId) {
        correctCount++;
        return;
      }
      const userItem = orderItems.find((it) => it.id === actualId);
      const expectedItem = orderItems.find((it) => it.id === expectedId);
      if (
        userItem &&
        expectedItem &&
        normalizeText(userItem.text) === normalizeText(expectedItem.text)
      ) {
        correctCount++;
      }
    });
    return Number((correctCount / correctOrder.length).toFixed(2));
  }

  return 0;
}

/**
 * Returns question answer evaluation status:
 * - 'correct': 100% correct
 * - 'partial': Partially correct (e.g. 2/3 blanks, 3/4 pairs)
 * - 'wrong': 0% correct
 * - 'unanswered': Not answered by user
 */
export function getQuestionAnswerStatus(
  question: Question,
  userAnswer: any
): 'correct' | 'partial' | 'wrong' | 'unanswered' {
  if (!isQuestionAnswered(question, userAnswer)) {
    return 'unanswered';
  }
  const score = getQuestionAnswerScore(question, userAnswer);
  if (score >= 0.99) return 'correct';
  if (score > 0) return 'partial';
  return 'wrong';
}

/**
 * Xáo trộn ngẫu nhiên các phương án lựa chọn trong câu trắc nghiệm
 * và cập nhật chính xác lại correctAnswer.
 */
export function shuffleQuestionOptions(question: Question): Question {
  if (question.type && question.type !== 'multiple_choice' && question.type !== 'multiple_select') {
    return question;
  }
  if (question.subType === 'true_false' || Array.isArray(question.trueFalseAnswers)) {
    return question;
  }
  if (!question.options || question.options.length <= 1) {
    return question;
  }

  const indexedOptions = question.options.map((text, idx) => ({ text, origIdx: idx }));

  // Fisher-Yates shuffle
  for (let i = indexedOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexedOptions[i], indexedOptions[j]] = [indexedOptions[j], indexedOptions[i]];
  }

  const shuffled = indexedOptions.map((item) => item.text);
  const currentCorrect = question.correctAnswer ?? 0;
  const newCorrectIndex = indexedOptions.findIndex((item) => item.origIdx === currentCorrect);

  let newCorrectAnswers: number[] | undefined = undefined;
  if (Array.isArray(question.correctAnswers) && question.correctAnswers.length > 0) {
    newCorrectAnswers = question.correctAnswers
      .map((origIdx) => indexedOptions.findIndex((item) => item.origIdx === origIdx))
      .filter((idx) => idx >= 0)
      .sort((a, b) => a - b);
  }

  return {
    ...question,
    options: shuffled,
    correctAnswer: newCorrectIndex >= 0 ? newCorrectIndex : 0,
    ...(newCorrectAnswers ? { correctAnswers: newCorrectAnswers } : {}),
  };
}
