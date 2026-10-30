import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set } from 'firebase/database';
import { DEFAULT_CUSTOM_EXAMS } from '../src/data/defaultCustomExams';
import { INITIAL_SCORE_RECORDS } from '../src/data/defaultScores';
import { CURRICULUM_LESSONS, BUILT_IN_QUESTIONS } from '../src/data/curriculum';

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
  for (const ex of DEFAULT_CUSTOM_EXAMS) {
    examsMap.set(ex.id, sanitize(ex));
  }

  const scoresMap = new Map<string, any>();
  for (const sc of INITIAL_SCORE_RECORDS) {
    scoresMap.set(sc.id, sanitize(sc));
  }

  // 1. Đọc dữ liệu từ Firebase cũ (nếu có đề thi/điểm đã tạo trước đó)
  try {
    const oldExamsSnap = await get(ref(oldDb, 'admin_custom_exams'));
    if (oldExamsSnap.exists()) {
      const data = oldExamsSnap.val();
      for (const key of Object.keys(data)) {
        const item = data[key];
        const id = item?.id || key;
        examsMap.set(id, sanitize({ ...item, id }));
      }
      console.log(`Đã đọc ${Object.keys(data).length} đề thi từ Firebase cũ (tpn123-cb59c).`);
    }
  } catch (e: any) {
    console.warn('Lưu ý khi đọc đề thi từ Firebase cũ:', e?.message);
  }

  try {
    const oldScoresSnap = await get(ref(oldDb, 'ontap_scores'));
    if (oldScoresSnap.exists()) {
      const data = oldScoresSnap.val();
      for (const key of Object.keys(data)) {
        const item = data[key];
        const id = item?.id || key;
        scoresMap.set(id, sanitize({ ...item, id }));
      }
      console.log(`Đã đọc ${Object.keys(data).length} bản ghi điểm từ Firebase cũ (tpn123-cb59c).`);
    }
  } catch (e: any) {
    console.warn('Lưu ý khi đọc điểm từ Firebase cũ:', e?.message);
  }

  // 2. Bảo lưu dữ liệu nếu đã có sẵn trên Firebase mới
  try {
    const newExamsSnap = await get(ref(newDb, 'admin_custom_exams'));
    if (newExamsSnap.exists()) {
      const data = newExamsSnap.val();
      for (const key of Object.keys(data)) {
        const item = data[key];
        const id = item?.id || key;
        const existing = examsMap.get(id);
        if (!existing || (item?.updatedAt || 0) >= (existing?.updatedAt || 0)) {
          examsMap.set(id, sanitize({ ...item, id }));
        }
      }
    }
  } catch (e: any) {
    console.warn('Lưu ý khi đọc admin_custom_exams trên Firebase mới:', e?.message);
  }

  // 3. Ghi đề thi và bảng điểm lên Firebase mới (gstinhoc)
  const examsPayload: Record<string, any> = {};
  for (const [id, ex] of examsMap.entries()) {
    examsPayload[id] = ex;
  }

  const scoresPayload: Record<string, any> = {};
  for (const [id, sc] of scoresMap.entries()) {
    scoresPayload[id] = sc;
  }

  await set(ref(newDb, 'admin_custom_exams'), examsPayload);
  console.log(`✅ Đã cập nhật ${Object.keys(examsPayload).length} đề thi lên Firebase mới (gstinhoc/admin_custom_exams)!`);

  await set(ref(newDb, 'ontap_scores'), scoresPayload);
  console.log(`✅ Đã cập nhật ${Object.keys(scoresPayload).length} bản ghi điểm lên Firebase mới (gstinhoc/ontap_scores)!`);

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
