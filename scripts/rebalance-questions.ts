import fs from 'fs';
import path from 'path';
import { QUESTIONS_GRADE_3 } from '../src/data/questionsGrade3';
import { QUESTIONS_GRADE_4 } from '../src/data/questionsGrade4';
import { QUESTIONS_GRADE_5 } from '../src/data/questionsGrade5';
import { QUESTIONS_GRADE_6 } from '../src/data/questionsGrade6';
import { QUESTIONS_GRADE_7 } from '../src/data/questionsGrade7';
import { QUESTIONS_GRADE_8 } from '../src/data/questionsGrade8';
import { QUESTIONS_GRADE_9 } from '../src/data/questionsGrade9';
import { Question } from '../src/types/quiz';

// Balanced cycle ensures each group of 4 questions has exactly one A, B, C, D
// and no two consecutive questions have the exact same answer
const CYCLE = [1, 2, 3, 0, 2, 0, 3, 1, 3, 1, 0, 2, 0, 3, 1, 2];

export function rebalanceQuestion(q: Question, assignedIndex: number): Question {
  // Only rebalance multiple-choice questions with 4 options
  if (q.type && q.type !== 'multiple_choice') return q;
  if (!Array.isArray(q.options) || q.options.length !== 4) return q;
  if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) return q;

  // Check if options have fixed positional dependencies (e.g. "Cả A và B", "Tất cả các đáp án trên")
  const hasPositionDeps = q.options.some((opt) =>
    /\b(cả\s+[a-d]\s*(và|,)\s*[a-d]|phương án\s+[a-d]|đáp án\s+[a-d]|tất cả\s+.*trên|cả\s+3\s+.*trên|cả\s+bốn\s+phương án)\b/i.test(opt)
  );
  if (hasPositionDeps) return q;

  const originalIndex = q.correctAnswer;
  const correctText = q.options[originalIndex];
  const wrongTexts = q.options.filter((_, i) => i !== originalIndex);

  // Randomize wrong options order
  for (let i = wrongTexts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wrongTexts[i], wrongTexts[j]] = [wrongTexts[j], wrongTexts[i]];
  }

  const newOptions: string[] = [];
  let w = 0;
  for (let i = 0; i < 4; i++) {
    if (i === assignedIndex) {
      newOptions.push(correctText);
    } else {
      newOptions.push(wrongTexts[w++]);
    }
  }

  // Update explanation if it explicitly mentions "Đáp án đúng là A:" or "Đáp án A:"
  let newExplanation = q.explanation;
  if (newExplanation) {
    const oldLetter = String.fromCharCode(65 + originalIndex);
    const newLetter = String.fromCharCode(65 + assignedIndex);
    newExplanation = newExplanation.replace(
      new RegExp(`\\b(Đáp án(\\s+đúng)?(\\s+là)?|Phương án)\\s+${oldLetter}\\b`, 'gi'),
      `$1 ${newLetter}`
    );
  }

  return {
    ...q,
    options: newOptions,
    correctAnswer: assignedIndex,
    explanation: newExplanation,
  };
}

function processBank(bank: Record<string, Question[]>, gradeNum: number): string {
  let globalIdx = 0;
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  let mcqCount = 0;

  const rebalancedBank: Record<string, Question[]> = {};

  for (const lessonId of Object.keys(bank)) {
    rebalancedBank[lessonId] = bank[lessonId].map((q) => {
      if (q.type === 'multiple_choice' || (!q.type && q.options && q.options.length === 4)) {
        const assigned = CYCLE[globalIdx % CYCLE.length];
        const newQ = rebalanceQuestion(q, assigned);
        const letter = String.fromCharCode(65 + (newQ.correctAnswer as number));
        counts[letter as keyof typeof counts]++;
        mcqCount++;
        globalIdx++;
        return newQ;
      }
      return q;
    });
  }

  console.log(`Grade ${gradeNum} (${mcqCount} MCQs):`, counts);

  const fileContent = `import { Question } from '../types/quiz';

export const QUESTIONS_GRADE_${gradeNum}: Record<string, Question[]> = ${JSON.stringify(
    rebalancedBank,
    null,
    2
  )};
`;
  return fileContent;
}

function main() {
  const grades = [
    { num: 3, bank: QUESTIONS_GRADE_3 },
    { num: 4, bank: QUESTIONS_GRADE_4 },
    { num: 5, bank: QUESTIONS_GRADE_5 },
    { num: 6, bank: QUESTIONS_GRADE_6 },
    { num: 7, bank: QUESTIONS_GRADE_7 },
    { num: 8, bank: QUESTIONS_GRADE_8 },
    { num: 9, bank: QUESTIONS_GRADE_9 },
  ];

  for (const { num, bank } of grades) {
    const content = processBank(bank, num);
    const filePath = path.join(process.cwd(), `src/data/questionsGrade${num}.ts`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  -> Đã cập nhật xong src/data/questionsGrade${num}.ts`);
  }

  console.log('\n✅ Hoàn tất tái cấu trúc và phân bổ ngẫu nhiên đáp án cho toàn bộ ngân hàng câu hỏi Khối 3 -> Khối 9!');
}

main();
