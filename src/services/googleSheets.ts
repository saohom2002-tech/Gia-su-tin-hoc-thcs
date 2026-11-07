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

let globalWebhookUrl = '';
try {
  globalWebhookUrl = localStorage.getItem('ontap_gsheet_webhook_url') || '';
} catch {}

export function setGlobalWebhookUrl(url: string): void {
  globalWebhookUrl = url.trim();
  try {
    localStorage.setItem('ontap_gsheet_webhook_url', globalWebhookUrl);
  } catch {}
}

export function getGlobalWebhookUrl(): string {
  if (!globalWebhookUrl) {
    try {
      globalWebhookUrl = localStorage.getItem('ontap_gsheet_webhook_url') || '';
    } catch {}
  }
  return globalWebhookUrl;
}

export const GOOGLE_APPS_SCRIPT_SAMPLE_CODE = `/**
 * GOOGLE APPS SCRIPT ĐỒNG BỘ ĐIỂM HỌC SINH TỰ ĐỘNG - GSTRUC TIN HỌC
 * Bảng tính: cosodulieu
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(15000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Bang_Diem_Hoc_Sinh") || ss.getSheets()[0];
    var data = JSON.parse(e.postData.contents);

    function toRow(item) {
      return [
        item.id || ('score-' + new Date().getTime()),
        item.studentName || '',
        item.className || '',
        item.schoolName || '',
        item.grade || ('Khối ' + (item.gradeNumber || '')),
        item.examBatch || '',
        item.lessonTitle || '',
        item.score !== undefined ? item.score : '',
        item.percentage !== undefined ? item.percentage + '%' : '',
        item.correctCount !== undefined ? item.correctCount : (item.correctAnswersCount || 0),
        item.totalCount !== undefined ? item.totalCount : (item.totalQuestions || 0),
        item.timeSpentSeconds || 0,
        item.date || new Date().toLocaleString('vi-VN'),
        item.rankTitle || '',
        item.notes || ''
      ];
    }

    if (data.batch && Array.isArray(data.batch)) {
      var rows = data.batch.map(toRow);
      if (rows.length > 0) {
        sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, 15).setValues(rows);
      }
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', count: rows.length })).setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow(toRow(data));
    return ContentService.createTextOutput(JSON.stringify({ status: 'success', id: data.id })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok', message: 'Webhook đang hoạt động tốt!' })).setMimeType(ContentService.MimeType.JSON);
}`;

/**
 * Gửi tự động 1 bản ghi điểm sang Google Apps Script (Realtime khi học sinh nộp bài)
 */
export async function sendScoreToGoogleSheetWebhook(
  score: StudentScoreRecord,
  webhookUrl?: string
): Promise<boolean> {
  const url = webhookUrl || getGlobalWebhookUrl();
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
      notes: score.notes || '',
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
 * Đồng bộ hàng loạt nhiều bản ghi điểm sang Google Sheets Webhook theo từng đợt (chunks)
 */
export async function syncBatchScoresToGoogleSheet(
  scores: StudentScoreRecord[],
  webhookUrl?: string,
  onBatchProgress?: (sentCount: number, totalCount: number) => void
): Promise<{ success: boolean; sent: number; error?: string }> {
  const url = webhookUrl || getGlobalWebhookUrl();
  if (!url) {
    return { success: false, sent: 0, error: 'Chưa cấu hình URL Google Sheets Webhook' };
  }

  const chunkSize = 200; // Mỗi đợt 200 bản ghi để tránh quá tải Google Apps Script
  let sentTotal = 0;

  try {
    for (let i = 0; i < scores.length; i += chunkSize) {
      const slice = scores.slice(i, i + chunkSize);
      const payloadBatch = slice.map((score) => ({
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
        notes: score.notes || '',
      }));

      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ batch: payloadBatch }),
      });

      sentTotal += slice.length;
      if (onBatchProgress) {
        onBatchProgress(sentTotal, scores.length);
      }

      // Nghỉ nhẹ 300ms giữa các đợt
      if (i + chunkSize < scores.length) {
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }

    return { success: true, sent: sentTotal };
  } catch (err: any) {
    console.error('Lỗi khi đồng bộ hàng loạt sang Google Sheets:', err);
    return { success: false, sent: sentTotal, error: err?.message || String(err) };
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
