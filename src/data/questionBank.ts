import { Question } from '../types/quiz';
import { QUESTIONS_GRADE_3 } from './questionsGrade3';
import { QUESTIONS_GRADE_4 } from './questionsGrade4';
import { QUESTIONS_GRADE_5 } from './questionsGrade5';
import { QUESTIONS_GRADE_6 } from './questionsGrade6';
import { QUESTIONS_GRADE_7 } from './questionsGrade7';
import { QUESTIONS_GRADE_8 } from './questionsGrade8';
import { QUESTIONS_GRADE_9 } from './questionsGrade9';
import { ALL_GRADE_8_MIDTERM_QUESTIONS } from './grade8MidtermReview';
import { ALL_GRADE_9_MIDTERM_QUESTIONS } from './grade9MidtermReview';

export const BUILT_IN_QUESTIONS: Record<string, Question[]> = {
  ...QUESTIONS_GRADE_3,
  ...QUESTIONS_GRADE_4,
  ...QUESTIONS_GRADE_5,
  ...QUESTIONS_GRADE_6,
  ...QUESTIONS_GRADE_7,
  ...QUESTIONS_GRADE_8,
  ...QUESTIONS_GRADE_9,
  'tin8-on-tap-giua-ki-1': ALL_GRADE_8_MIDTERM_QUESTIONS,
  'tin9-on-tap-giua-ki-1': ALL_GRADE_9_MIDTERM_QUESTIONS,
};
