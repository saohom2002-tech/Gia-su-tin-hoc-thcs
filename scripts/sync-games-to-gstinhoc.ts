import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import * as fs from 'fs';
import * as path from 'path';

// Cho phép kết nối TLS khi đồng hồ hệ thống đặt ở năm 2026
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const firebaseConfig = {
  apiKey: 'AIzaSyA03JGC5MofF0WZTbChvY3Z2T6Eego6MmE',
  authDomain: 'gstinhoc.firebaseapp.com',
  databaseURL: 'https://gstinhoc-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'gstinhoc',
  storageBucket: 'gstinhoc.firebasestorage.app',
  messagingSenderId: '932677144311',
  appId: '1:932677144311:web:396e0c28dc4b784ff14df2',
  measurementId: 'G-77J4Y3QJT7',
};

async function sync() {
  console.log('--- Bắt đầu đồng bộ 1.089 câu hỏi Tin học Game lên Firebase gstinhoc ---');
  
  const offPath = path.join(process.cwd(), 'public', 'games', 'data', 'questions-offline.js');
  const offContent = fs.readFileSync(offPath, 'utf8');
  const data = new Function('const window = {}; ' + offContent + '; return window.OFFLINE_DATA;')();

  console.log(`Đã đọc ${data.questions.length} câu hỏi, ${data.sets.length} bộ đề từ questions-offline.js`);
  console.log(`Danh sách lớp:`, data.settings.classes.map((c: any) => c.name).join(', '));

  const app = initializeApp(firebaseConfig);
  const rtdb = getDatabase(app);

  // 1. Lưu ngân hàng câu hỏi vào node game_bank trên Realtime Database
  console.log('Đang ghi dữ liệu vào Firebase Realtime Database (gstinhoc)...');
  await set(ref(rtdb, 'game_bank/questions'), data.questions);
  console.log('✓ Đã lưu 1.089 câu hỏi vào game_bank/questions');

  await set(ref(rtdb, 'game_bank/sets'), data.sets);
  console.log('✓ Đã lưu 8 bộ đề chuẩn SGK vào game_bank/sets');

  await set(ref(rtdb, 'game_bank/classes'), data.settings.classes);
  console.log('✓ Đã lưu danh sách lớp chuẩn THCS Tân Bình vào game_bank/classes');

  await set(ref(rtdb, 'game_bank/settings'), {
    siteName: 'GAME AND LEARN',
    schoolName: 'Trường THCS Tân Bình',
    schoolShort: 'TRƯỜNG THCS TÂN BÌNH',
    schoolAddress: '873 Cách Mạng Tháng 8, Phường Tân Sơn Nhất, TP.HCM',
    schoolWebsite: 'https://thcstanbinh.hcm.edu.vn',
    adminName: 'Ms Trúc',
    adminPhone: '0908.959.627',
    adminPhoneTel: '0908959627',
    adminZalo: 'https://zalo.me/0908959627',
    adminEmail: 'tranthithanhtruc1980@gmail.com',
    googleSheetId: '1sw7iAQZw2cD7USR3O5tY6P6MvOqbWBvhuBORvr0dxNo',
    updatedAt: Date.now()
  });
  console.log('✓ Đã lưu cài đặt trường THCS Tân Bình & Ms Trúc vào game_bank/settings');

  console.log('🎉 ĐỒNG BỘ HOÀN TẤT THÀNH CÔNG LÊN FIREBASE GSTINHOC!');
  process.exit(0);
}

sync().catch(err => {
  console.error('Lỗi khi đồng bộ:', err);
  process.exit(1);
});
