import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set } from 'firebase/database';
import { DEFAULT_CUSTOM_EXAMS } from '../src/data/defaultCustomExams';
import { INITIAL_SCORE_RECORDS } from '../src/data/defaultScores';
import { CURRICULUM_LESSONS, BUILT_IN_QUESTIONS } from '../src/data/curriculum';
import { rebalanceExamAnswers } from '../src/utils/quizShuffler';

// Cho phép kết nối TLS khi đồng hồ hệ thống đặt ở năm 2026
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const oldConfig = {
  apiKey: 'AIzaSyC8tvxuX0hGZBifaFzd4ZY2WhkI-R8wop4',
  authDomain: 'tpn123-cb59c.firebaseapp.com',
  databaseURL: 'https://tpn123-cb59c-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'tpn123-cb59c',
};

const newConfig = {
  apiKey: 'AIzaSyA03JGC5MofF0WZTbChvY3Z2T6Eego6MmE',
  authDomain: 'gstinhoc.firebaseapp.com',
  databaseURL: 'https://gstinhoc-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'gstinhoc',
  storageBucket: 'gstinhoc.firebasestorage.app',
  messagingSenderId: '932677144311',
  appId: '1:932677144311:web:396e0c28dc4b784ff14df2',
  measurementId: 'G-77J4Y3QJT7',
};

function sanitize<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

async function main() {
  console.log('--- Bắt đầu đồng bộ dữ liệu & đề thi sang Firebase mới (gstinhoc) ---');

  const oldApp = initializeApp(oldConfig, 'oldApp');
  const oldDb = getDatabase(oldApp);

  const newApp = initializeApp(newConfig, 'newApp');
  const newDb = getDatabase(newApp);

  const examsMap = new Map<string, any>();

  // 1. Đọc dữ liệu hiện có trên Firebase mới trước để bảo lưu toàn bộ đề đã tạo
  try {
    const newExamsSnap = await get(ref(newDb, 'admin_custom_exams'));
    if (newExamsSnap.exists()) {
      const data = newExamsSnap.val();
      console.log(`📋 Hiện có ${Object.keys(data).length} đề trên Firebase (gstinhoc):`);
      for (const key of Object.keys(data)) {
        const item = data[key];
        const id = item?.id || key;
        const qCount = Array.isArray(item?.questions)
          ? item.questions.length
          : item?.questions && typeof item.questions === 'object'
          ? Object.keys(item.questions).length
          : 0;
        console.log(`  - [${item?.grade || 'Khối ' + item?.gradeNumber}] (${item?.category}) ${item?.title} (${qCount} câu) [id=${id}]`);
        examsMap.set(id, sanitize({ ...item, id }));
      }
    }
  } catch (e: any) {
    console.warn('Lưu ý khi đọc admin_custom_exams trên Firebase mới:', e?.message);
  }

  // 1b. Đọc danh sách các đề đã bị Admin xóa để tuyệt đối không khôi phục lại
  const deletedIds = new Set<string>();
  try {
    const deletedSnap = await get(ref(newDb, 'admin_deleted_exam_ids'));
    if (deletedSnap.exists()) {
      Object.keys(deletedSnap.val()).forEach((id) => deletedIds.add(id));
    }
  } catch {}

  // Lọc bỏ bất kỳ đề nào nằm trong danh sách đã xóa
  for (const dId of deletedIds) {
    if (examsMap.has(dId)) {
      examsMap.delete(dId);
    }
  }

  // 2. Bổ sung các đề chuẩn từ DEFAULT_CUSTOM_EXAMS nếu chưa có trên Firebase và chưa bị xóa
  const existingTitleCat = new Set(
    Array.from(examsMap.values()).map(
      (e) => `${(e.title || '').trim().toLowerCase()}__${e.category || 'exam'}`
    )
  );
  for (const ex of DEFAULT_CUSTOM_EXAMS) {
    if (deletedIds.has(ex.id)) continue;
    const keyTitleCat = `${(ex.title || '').trim().toLowerCase()}__${ex.category || 'exam'}`;
    if (!examsMap.has(ex.id) && !existingTitleCat.has(keyTitleCat)) {
      examsMap.set(ex.id, sanitize(ex));
      existingTitleCat.add(keyTitleCat);
      console.log(`  + Khôi phục đề: [${ex.grade}] (${ex.category}) ${ex.title} (${ex.questions.length} câu)`);
    } else if (examsMap.has(ex.id)) {
      examsMap.set(ex.id, sanitize(ex));
    }
  }

  // 2b. Cập nhật các đề ngân hàng chủ đề (topic-bank-*) với bộ câu hỏi mới nhất từ BUILT_IN_QUESTIONS
  for (const lesson of CURRICULUM_LESSONS) {
    const bankId = `topic-bank-${lesson.id}`;
    const builtIn = BUILT_IN_QUESTIONS[lesson.id] || [];
    if (builtIn.length > 0 && examsMap.has(bankId)) {
      const existing = examsMap.get(bankId);
      const existingIds = new Set((existing.questions || []).map((q: any) => q.id));
      const existingTexts = new Set(
        (existing.questions || []).map((q: any) => (q.question || '').trim().toLowerCase())
      );
      const missing = builtIn.filter(
        (q) => !existingIds.has(q.id) && !existingTexts.has(q.question.trim().toLowerCase())
      );
      if (missing.length > 0) {
        existing.questions = [...(existing.questions || []), ...missing];
        existing.updatedAt = Date.now();
        examsMap.set(bankId, sanitize(existing));
        console.log(
          `  + Đã bổ sung ${missing.length} câu hỏi mới vào đề [${existing.title}] -> Tổng số: ${existing.questions.length} câu`
        );
      }
    }
  }

  const scoresMap = new Map<string, any>();
  for (const sc of INITIAL_SCORE_RECORDS) {
    scoresMap.set(sc.id, sanitize(sc));
  }

  // 2b. Cân bằng ngẫu nhiên các đáp án A, B, C, D cho toàn bộ đề thi nếu phát hiện bị lệch sang đáp án A
  for (const [id, ex] of examsMap.entries()) {
    if (Array.isArray(ex.questions) && ex.questions.length > 0) {
      let zeroCount = 0;
      let mcqCount = 0;
      ex.questions.forEach((q: any) => {
        if (q.type === 'multiple_choice' || (!q.type && q.options && q.options.length === 4)) {
          mcqCount++;
          if (q.correctAnswer === 0) zeroCount++;
        }
      });
      if (mcqCount >= 4 && zeroCount / mcqCount > 0.4) {
        console.log(`  -> Tự động cân bằng vị trí đáp án cho đề [${ex.title}] (${zeroCount}/${mcqCount} câu là đáp án A)...`);
        ex.questions = rebalanceExamAnswers(ex.questions);
        ex.updatedAt = Date.now();
      }
    }
  }

  // 3. Ghi đề thi lên Firebase mới (gstinhoc)
  const examsPayload: Record<string, any> = {};
  for (const [id, ex] of examsMap.entries()) {
    examsPayload[id] = ex;
  }

  await set(ref(newDb, 'admin_custom_exams'), examsPayload);
  console.log(`✅ Đã cập nhật ${Object.keys(examsPayload).length} đề thi lên Firebase mới (gstinhoc/admin_custom_exams)!`);

  // 4. Đồng bộ thêm danh mục bài học & ngân hàng câu hỏi SGK lên nhánh curriculum_bank để lưu trữ đầy đủ trên đám mây
  await set(
    ref(newDb, 'curriculum_bank'),
    sanitize({
      updatedAt: Date.now(),
      googleSheetId: '1sw7iAQZw2cD7USR3O5tY6P6MvOqbWBvhuBORvr0dxNo',
      lessonsCount: CURRICULUM_LESSONS.length,
      lessons: CURRICULUM_LESSONS,
      questionBankByLesson: BUILT_IN_QUESTIONS,
    })
  );
  console.log(`✅ Đã đồng bộ ngân hàng câu hỏi SGK (${CURRICULUM_LESSONS.length} bài học) lên Firebase mới (gstinhoc/curriculum_bank)!`);

  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Lỗi khi đồng bộ Firebase:', err);
  process.exit(1);
});
