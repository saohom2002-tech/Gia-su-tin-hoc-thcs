import { StudentScoreRecord, CustomExam } from '../types/quiz';

export const GOOGLE_SHEET_ID = '1sw7iAQZw2cD7USR3O5tY6P6MvOqbWBvhuBORvr0dxNo';
export const GOOGLE_SHEET_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/edit?gid=0#gid=0`;
export const GOOGLE_SHEET_EXAMS_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/edit?gid=2130695117#gid=2130695117`;
export const GOOGLE_SHEET_QUESTIONS_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/edit?gid=383399013#gid=383399013`;
export const GOOGLE_SHEET_SUMMARY_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/edit?gid=679088154#gid=679088154`;

/**
 * Xuất dữ liệu bảng điểm sang định dạng CSV tương thích 100% với Google Sheets (UTF-8 with BOM)
 */
export function exportScoresToGoogleSheetCSV(scores: StudentScoreRecord[]): void {
  const headers = [
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

  const rows = scores.map((s) => {
    const dateFormatted = new Date(s.date).toLocaleString('vi-VN');
    return [
      `"${s.id || ''}"`,
      `"${s.studentName || ''}"`,
      `"${s.className || ''}"`,
      `"${s.schoolName || ''}"`,
      `"${s.grade || ('Khối ' + s.gradeNumber)}"`,
      `"${s.examBatch || ''}"`,
      `"${s.lessonTitle || ''}"`,
      `"${s.score}"`,
      `"${s.percentage}%"`,
      `"${s.correctAnswersCount}"`,
      `"${s.totalQuestions}"`,
      `"${s.timeSpentSeconds}"`,
      `"${dateFormatted}"`,
      `"${s.rankTitle || ''}"`,
      `"${s.notes || ''}"`,
    ].join(',');
  });

  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Bang_Diem_Hoc_Sinh_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Gửi tự động 1 bản ghi điểm sang Google Apps Script (nếu người dùng cấu hình Webhook URL)
 */
export async function sendScoreToGoogleSheetWebhook(
  score: StudentScoreRecord,
  webhookUrl?: string
): Promise<boolean> {
  const url = webhookUrl || localStorage.getItem('ontap_gsheet_webhook_url');
  if (!url) return false;

  try {
    const payload = {
      id: score.id,
      studentName: score.studentName,
      className: score.className,
      schoolName: score.schoolName,
      grade: score.grade || `Khối ${score.gradeNumber}`,
      examBatch: score.examBatch,
      lessonTitle: score.lessonTitle,
      score: score.score,
      percentage: score.percentage,
      correctCount: score.correctAnswersCount,
      totalCount: score.totalQuestions,
      timeSpentSeconds: score.timeSpentSeconds,
      date: new Date(score.date).toLocaleString('vi-VN'),
      rankTitle: score.rankTitle || '',
    };

    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (error) {
    console.warn('Không thể gửi đến Google Sheets Webhook:', error);
    return false;
  }
}

/**
 * Xuất danh sách đề thi và câu hỏi của Admin sang CSV tương thích với Google Sheets (Danh_Sach_De_Thi)
 */
export function exportExamsToGoogleSheetCSV(exams: CustomExam[]): void {
  const headers = [
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

  const rows = exams.map((ex) => [
    `"${(ex.id || '').replace(/"/g, '""')}"`,
    `"${(ex.title || '').replace(/"/g, '""')}"`,
    `"${ex.grade || 'Khối ' + ex.gradeNumber}"`,
    `"${ex.category === 'exam' ? 'Đề kiểm tra (Tính giờ)' : 'Đề ôn tập tự do'}"`,
    `"${ex.durationMinutes || 45}"`,
    `"${ex.questions?.length || 0}"`,
    `"${ex.isPublished !== false ? 'Đang mở (Published)' : 'Bản nháp'}"`,
    `"${(ex.authorName || 'Admin Ms. Trúc').replace(/"/g, '""')}"`,
    `"${ex.authorEmail || 'saohom2002@gmail.com'}"`,
    `"${(ex.description || '').replace(/"/g, '""')}"`,
    `"Firebase: gstinhoc/admin_custom_exams/${ex.id}"`,
  ].join(','));

  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Danh_Sach_De_Thi_Admin_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
