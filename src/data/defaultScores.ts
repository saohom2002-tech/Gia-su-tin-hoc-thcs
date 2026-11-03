import { StudentScoreRecord } from '../types/quiz';

export const DEFAULT_EXAM_BATCHES = [
  'Đợt 1: Ôn tập Giữa kỳ 1',
  'Đợt 2: Thi đua theo chủ đề',
  'Đợt 3: Ôn tập Cuối kỳ 1',
  'Đợt 4: Ôn tập Giữa kỳ 2',
  'Đợt 5: Ôn tập Cuối kỳ 2',
];

/**
 * Chuẩn hóa tên đợt thi (tương thích ngược với các tên đợt cũ đã lưu trong máy / Firebase)
 */
export const normalizeExamBatch = (rawBatch?: string): string => {
  if (!rawBatch) return DEFAULT_EXAM_BATCHES[0];
  const b = rawBatch.trim().toLowerCase();
  if (b.includes('đợt 5') || b.includes('cuối kì 2') || b.includes('cuối kỳ 2')) {
    return 'Đợt 5: Ôn tập Cuối kỳ 2';
  }
  if (b.includes('đợt 4') || b.includes('giữa kì 2') || b.includes('giữa kỳ 2')) {
    return 'Đợt 4: Ôn tập Giữa kỳ 2';
  }
  if (
    b.includes('đợt 3') ||
    b.includes('cuối kì 1') ||
    b.includes('cuối kỳ 1') ||
    b.includes('năng lực số cuối') ||
    b.includes('học kì 1 chuẩn')
  ) {
    return 'Đợt 3: Ôn tập Cuối kỳ 1';
  }
  if (
    b.includes('đợt 2') ||
    b.includes('chủ đề') ||
    b.includes('chuyên đề') ||
    b.includes('tin học trẻ')
  ) {
    return 'Đợt 2: Thi đua theo chủ đề';
  }
  if (
    b.includes('đợt 1') ||
    b.includes('giữa kì 1') ||
    b.includes('giữa kỳ 1') ||
    b.includes('khảo sát chất lượng')
  ) {
    return 'Đợt 1: Ôn tập Giữa kỳ 1';
  }
  return rawBatch;
};

/**
 * Tự động nhận diện Đợt thi theo đề bài học sinh làm:
 * - Khi học sinh thi "Cuối kì 2" hoặc "Cuối kỳ 2" ➔ Đợt 5: Ôn tập Cuối kỳ 2
 * - Khi học sinh thi "Giữa kì 2" hoặc "Giữa kỳ 2" ➔ Đợt 4: Ôn tập Giữa kỳ 2
 * - Khi học sinh thi các bài hoặc đề có chữ "Cuối kì" hoặc "Học kì 1 chuẩn" hoặc "Học kì 1" hoặc "Cuối kỳ 1" ➔ Đợt 3: Ôn tập Cuối kỳ 1
 * - Khi học sinh thi "Giữa kì 1" hoặc "Giữa kỳ 1" ➔ Đợt 1: Ôn tập Giữa kỳ 1
 * - Khi học sinh ôn tập "Chủ đề / Chuyên đề / Bài" ➔ Đợt 2: Thi đua theo chủ đề
 */
export const inferExamBatchFromTitle = (title: string): string => {
  const lower = (title || '').toLowerCase();

  // 1. Cuối kì 2 / Học kì 2
  if (
    lower.includes('cuối kì 2') ||
    lower.includes('cuối kỳ 2') ||
    lower.includes('học kì 2') ||
    lower.includes('học kỳ 2')
  ) {
    return 'Đợt 5: Ôn tập Cuối kỳ 2';
  }

  // 2. Giữa kì 2
  if (lower.includes('giữa kì 2') || lower.includes('giữa kỳ 2')) {
    return 'Đợt 4: Ôn tập Giữa kỳ 2';
  }

  // 3. Cuối kì 1 / Học kì 1 chuẩn / Học kì 1
  if (
    lower.includes('cuối kì 1') ||
    lower.includes('cuối kỳ 1') ||
    lower.includes('cuối kì') ||
    lower.includes('cuối kỳ') ||
    lower.includes('học kì 1 chuẩn') ||
    lower.includes('học kì 1') ||
    lower.includes('học kỳ 1')
  ) {
    return 'Đợt 3: Ôn tập Cuối kỳ 1';
  }

  // 4. Giữa kì 1
  if (
    lower.includes('giữa kì 1') ||
    lower.includes('giữa kỳ 1') ||
    lower.includes('giữa kì') ||
    lower.includes('giữa kỳ')
  ) {
    return 'Đợt 1: Ôn tập Giữa kỳ 1';
  }

  // 5. Chủ đề / Chuyên đề / Bài học
  if (
    lower.includes('chủ đề') ||
    lower.includes('chuyên đề') ||
    lower.includes('bài') ||
    lower.includes('thi đua') ||
    lower.includes('sổ tay câu sai')
  ) {
    return 'Đợt 2: Thi đua theo chủ đề';
  }

  // Mặc định
  return 'Đợt 1: Ôn tập Giữa kỳ 1';
};

export const INITIAL_SCORE_RECORDS: StudentScoreRecord[] = [
  {
    id: 'score-rec-1',
    studentName: 'Nguyễn Minh Anh',
    className: '8A1',
    schoolName: 'Trường THCS Lê Quý Đôn',
    gradeNumber: 8,
    grade: 'Khối 8',
    examBatch: 'Đợt 1: Ôn tập Giữa kỳ 1',
    lessonTitle: 'Bài 1: Lược sử công cụ tính toán',
    score: 10.0,
    percentage: 100,
    totalQuestions: 10,
    correctAnswersCount: 10,
    timeSpentSeconds: 320,
    date: Date.now() - 86400000 * 2,
    rankTitle: 'Xuất sắc',
    avatar: 'girl-1',
    notes: 'Thủ khoa đợt khảo sát, làm bài rất nhanh và chuẩn xác.',
  },
  {
    id: 'score-rec-2',
    studentName: 'Trần Gia Bảo',
    className: '8A1',
    schoolName: 'Trường THCS Lê Quý Đôn',
    gradeNumber: 8,
    grade: 'Khối 8',
    examBatch: 'Đợt 1: Ôn tập Giữa kỳ 1',
    lessonTitle: 'Bài 5: Sử dụng bảng tính giải quyết bài toán thực tế',
    score: 9.5,
    percentage: 95,
    totalQuestions: 10,
    correctAnswersCount: 9,
    timeSpentSeconds: 410,
    date: Date.now() - 86400000 * 3,
    rankTitle: 'Xuất sắc',
    avatar: 'boy-1',
    notes: 'Kỹ năng sử dụng hàm tính toán Excel rất tốt.',
  },
  {
    id: 'score-rec-3',
    studentName: 'Lê Hoàng Nam',
    className: '9A2',
    schoolName: 'Trường THCS Chu Văn An',
    gradeNumber: 9,
    grade: 'Khối 9',
    examBatch: 'Đợt 1: Ôn tập Giữa kỳ 1',
    lessonTitle: 'Bài 1: Nhận biết phần mềm mô phỏng và an toàn thông tin',
    score: 9.0,
    percentage: 90,
    totalQuestions: 10,
    correctAnswersCount: 9,
    timeSpentSeconds: 380,
    date: Date.now() - 86400000 * 4,
    rankTitle: 'Giỏi',
    avatar: 'boy-2',
    notes: 'Nắm chắc kiến thức bản quyền và an toàn mạng.',
  },
  {
    id: 'score-rec-4',
    studentName: 'Phạm Quỳnh Chi',
    className: '5A1',
    schoolName: 'Trường Tiểu học Thăng Long',
    gradeNumber: 5,
    grade: 'Khối 5',
    examBatch: 'Đợt 1: Ôn tập Giữa kỳ 1',
    lessonTitle: 'Ôn tập Giữa kì 1 Tin học 5 (Bài 1, 2, 3, 4)',
    score: 10.0,
    percentage: 100,
    totalQuestions: 10,
    correctAnswersCount: 10,
    timeSpentSeconds: 290,
    date: Date.now() - 86400000 * 1,
    rankTitle: 'Xuất sắc',
    avatar: 'girl-2',
    notes: 'Thủ khoa Khối 5, hoàn thành xuất sắc các câu hỏi tương tác.',
  },
  {
    id: 'score-rec-5',
    studentName: 'Vũ Đức Khang',
    className: '8A2',
    schoolName: 'Trường THCS Lê Quý Đôn',
    gradeNumber: 8,
    grade: 'Khối 8',
    examBatch: 'Đợt 2: Thi đua theo chủ đề',
    lessonTitle: 'Bài 3: Thông tin với giải quyết vấn đề',
    score: 9.0,
    percentage: 90,
    totalQuestions: 10,
    correctAnswersCount: 9,
    timeSpentSeconds: 350,
    date: Date.now() - 86400000 * 5,
    rankTitle: 'Giỏi',
    avatar: 'robot-ai',
    notes: 'Tư duy logic tốt, phản xạ nhanh.',
  },
  {
    id: 'score-rec-6',
    studentName: 'Hoàng Mai Phương',
    className: '7A1',
    schoolName: 'Trường THCS Đoàn Thị Điểm',
    gradeNumber: 7,
    grade: 'Khối 7',
    examBatch: 'Đợt 2: Thi đua theo chủ đề',
    lessonTitle: 'Bài 1: Thiết bị vào - ra và phần mềm bảng tính',
    score: 8.5,
    percentage: 85,
    totalQuestions: 10,
    correctAnswersCount: 8,
    timeSpentSeconds: 420,
    date: Date.now() - 86400000 * 6,
    rankTitle: 'Giỏi',
    avatar: 'girl-1',
    notes: 'Bài làm cẩn thận, trình bày bài bản.',
  },
];
