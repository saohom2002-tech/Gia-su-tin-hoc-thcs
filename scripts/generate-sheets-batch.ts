import fs from 'fs';
import { DEFAULT_CUSTOM_EXAMS } from '../src/data/defaultCustomExams';
import { INITIAL_SCORE_RECORDS } from '../src/data/defaultScores';
import { CURRICULUM_LESSONS } from '../src/data/curriculum';

const outPath = process.argv[2] || 'C:/Users/Welcome/.gemini/antigravity/brain/105d0ca6-de68-4f02-8206-9f20b1f0db1e/scratch/sheets_batch.json';

// 1. Sheet 1: Bang_Diem_Hoc_Sinh
const scoreHeaders = [
  'Mã bản ghi',
  'Họ và tên',
  'Lớp',
  'Trường',
  'Khối',
  'Đợt thi / Chuyên đề',
  'Bài học',
  'Điểm số (thang 10)',
  'Tỷ lệ đúng (%)',
  'Số câu đúng',
  'Tổng số câu',
  'Thời gian (giây)',
  'Ngày làm bài',
  'Danh hiệu / Xếp loại',
  'Ghi chú',
];

const scoreRows = INITIAL_SCORE_RECORDS.map((s) => [
  s.id || '',
  s.studentName || '',
  s.className || '',
  s.schoolName || '',
  s.grade || `Khối ${s.gradeNumber}`,
  s.examBatch || '',
  s.lessonTitle || '',
  String(s.score),
  `${s.percentage}%`,
  String(s.correctAnswersCount),
  String(s.totalQuestions),
  String(s.timeSpentSeconds),
  new Date(s.date).toLocaleString('vi-VN'),
  s.rankTitle || '',
  s.notes || '',
]);

// 2. Sheet 2: Danh_Sach_De_Thi
const examHeaders = [
  'Mã đề thi',
  'Tên đề thi',
  'Khối lớp',
  'Phân loại',
  'Thời lượng (phút)',
  'Tổng số câu hỏi',
  'Trạng thái',
  'Tác giả',
  'Email quản trị',
  'Mô tả chi tiết',
  'Nền tảng đồng bộ Realtime',
];

const examRows = DEFAULT_CUSTOM_EXAMS.map((ex) => [
  ex.id,
  ex.title,
  ex.grade || `Khối ${ex.gradeNumber}`,
  ex.category === 'exam' ? 'Đề kiểm tra (Tính giờ)' : 'Đề ôn tập tự do',
  String(ex.durationMinutes || 45),
  String(ex.questions?.length || 0),
  ex.isPublished !== false ? 'Đang mở (Published)' : 'Bản nháp',
  ex.authorName || 'Admin Ms. Trúc',
  ex.authorEmail || 'saohom2002@gmail.com',
  ex.description || '',
  `Firebase: gstinhoc/admin_custom_exams/${ex.id}`,
]);

// 3. Sheet 3: Chi_Tiet_Cau_Hoi_De_Thi
const questionHeaders = [
  'Mã đề thi',
  'Tên đề thi',
  'Khối',
  'Mã câu hỏi',
  'Loại câu hỏi',
  'Cấp độ',
  'Nội dung câu hỏi',
  'Phương án A',
  'Phương án B',
  'Phương án C',
  'Phương án D',
  'Đáp án đúng',
  'Giải thích chi tiết (SGK KNTT)',
  'Gợi ý tư duy',
  'Chủ đề / Bài học',
];

const questionRows: string[][] = [];
for (const ex of DEFAULT_CUSTOM_EXAMS) {
  for (const q of ex.questions || []) {
    const opts = q.options || [];
    const correctLabel =
      q.type === 'true_false' && Array.isArray(q.trueFalseAnswers)
        ? q.trueFalseAnswers.map((v, i) => `${String.fromCharCode(97 + i)}:${v ? 'Đ' : 'S'}`).join(', ')
        : ['A', 'B', 'C', 'D'][q.correctAnswer ?? 0] || 'A';
    const diffLabel =
      q.difficulty === 'de' ? 'Dễ (Nhận biết)' : q.difficulty === 'kho' ? 'Khó (Vận dụng cao)' : 'Trung bình (Thông hiểu)';

    questionRows.push([
      ex.id,
      ex.title,
      ex.grade || `Khối ${ex.gradeNumber}`,
      q.id,
      q.type || 'multiple_choice',
      diffLabel,
      q.question || '',
      opts[0] || '',
      opts[1] || '',
      opts[2] || '',
      opts[3] || '',
      correctLabel,
      q.explanation || '',
      q.hint || '',
      q.topic || '',
    ]);
  }
}

// 4. Sheet 4: Thong_Ke_Tong_Hop (Báo cáo tổng hợp & sơ đồ phân chia lưu trữ 2 nền tảng)
const summaryRows = [
  ['BÁO CÁO THỐNG KÊ & PHÂN CHIA LƯU TRỮ DỮ LIỆU HỆ THỐNG GIA SƯ TIN HỌC', '', '', ''],
  ['Hạng mục chỉ số', 'Giá trị / Công thức tự động', 'Nền tảng lưu trữ chính', 'Ghi chú vận hành'],
  ['Tổng số lượt làm bài của học sinh', '=COUNTA(Bang_Diem_Hoc_Sinh!A2:A1000)', 'Firebase (ontap_scores) + Google Sheets (Bang_Diem_Hoc_Sinh)', 'Đồng bộ 2 chiều: Realtime Leaderboard & Sổ điểm giáo viên'],
  ['Điểm trung bình toàn hệ thống', '=ROUND(AVERAGE(Bang_Diem_Hoc_Sinh!H2:H1000), 2)', 'Google Sheets (Tự động tính từ Bang_Diem_Hoc_Sinh)', 'Thang điểm 10'],
  ['Điểm cao nhất (Thủ khoa)', '=MAX(Bang_Diem_Hoc_Sinh!H2:H1000)', 'Firebase + Google Sheets', 'Vinh danh Bảng Vàng'],
  ['Số học sinh đạt loại Xuất sắc (>= 9.0)', '=COUNTIF(Bang_Diem_Hoc_Sinh!N2:N1000, "Xuất sắc")', 'Google Sheets (Thong_Ke_Tong_Hop)', 'Đủ điều kiện cấp Giấy khen Xuất sắc'],
  ['Số học sinh đạt loại Giỏi (8.0 - 8.9)', '=COUNTIF(Bang_Diem_Hoc_Sinh!N2:N1000, "Giỏi")', 'Google Sheets (Thong_Ke_Tong_Hop)', 'Đủ điều kiện cấp Giấy khen Giỏi'],
  ['Tổng số Đề thi & Đề ôn tập của Admin', '=COUNTA(Danh_Sach_De_Thi!A2:A200)', 'Firebase (admin_custom_exams) + Google Sheets (Danh_Sach_De_Thi)', 'Admin tạo/sửa trên Web -> Lưu Realtime trên Firebase'],
  ['Tổng số Câu hỏi trong Đề thi Admin', '=COUNTA(Chi_Tiet_Cau_Hoi_De_Thi!D2:D2000)', 'Firebase (admin_custom_exams) + Google Sheets (Chi_Tiet_Cau_Hoi_De_Thi)', 'Lưu trữ chi tiết câu hỏi & đáp án để giáo viên tra cứu/in ấn'],
  ['Tổng số Bài học SGK Kết Nối Tri Thức (Khối 3 -> 9)', String(CURRICULUM_LESSONS.length), 'Firebase (curriculum_bank) + Mã nguồn Offline', 'Đảm bảo học sinh ôn tập 100% cả khi có mạng và mất mạng'],
];

const batchOps = [
  {
    op: 'write',
    range: 'Bang_Diem_Hoc_Sinh!A1',
    data: [scoreHeaders, ...scoreRows],
  },
  {
    op: 'write',
    range: 'Danh_Sach_De_Thi!A1',
    data: [examHeaders, ...examRows],
  },
  {
    op: 'write',
    range: 'Chi_Tiet_Cau_Hoi_De_Thi!A1',
    data: [questionHeaders, ...questionRows],
  },
  {
    op: 'write',
    range: 'Thong_Ke_Tong_Hop!A1',
    data: summaryRows,
  },
];

fs.writeFileSync(outPath, JSON.stringify(batchOps, null, 2), 'utf-8');
console.log('Generated batch JSON successfully:', outPath);
