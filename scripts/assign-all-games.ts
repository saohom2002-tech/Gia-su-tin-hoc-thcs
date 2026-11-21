import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import * as fs from 'fs';
import * as path from 'path';

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

const ALL_GAME_IDS = [
  'olympia',
  'dau-truong',
  'keo-co',
  'dua-xe',
  'dua-vit',
  'dua-thuyen-rong',
  'nhay-bao-bo',
  'xuc-xac',
  'trieu-phu',
  'lat-manh',
  'o-chu',
  'vong-quay',
  'zombie',
  'bong-bay'
];

const GRADE_SETS = [
  { grade: '6', name: 'Tin học 6 — SGK Kết nối tri thức', setId: 'set_tin_6', desc: '160 câu hỏi Tin học Khối 6' },
  { grade: '7', name: 'Tin học 7 — SGK Kết nối tri thức', setId: 'set_tin_7', desc: '160 câu hỏi Tin học Khối 7' },
  { grade: '8', name: 'Tin học 8 — SGK Kết nối tri thức', setId: 'set_tin_8', desc: '297 câu hỏi Tin học Khối 8' },
  { grade: '9', name: 'Tin học 9 — SGK Kết nối tri thức', setId: 'set_tin_9', desc: '301 câu hỏi Tin học Khối 9' },
  { grade: 'All', name: 'Toàn bộ 1.089 câu Tin học (Lớp 3 - 9)', setId: 'set_tin_all', desc: 'Ngân hàng toàn trường đầy đủ 1.089 câu' }
];

async function main() {
  console.log('--- Bắt đầu phân bổ ngân hàng câu hỏi vào tất cả 14 trò chơi ---');

  // 1. Tạo gameConfigs cho tất cả 14 game
  const gameConfigs: Record<string, any> = {};
  ALL_GAME_IDS.forEach((gid) => {
    gameConfigs[gid] = {
      enabled: true,
      setId: 'set_tin_all', // Mặc định gán toàn bộ 1.089 câu
      updatedAt: Date.now()
    };
  });
  console.log(`✓ Đã tạo cấu hình mặc định (set_tin_all) cho ${ALL_GAME_IDS.length} trò chơi`);

  // 2. Tạo presets (Cấu hình mẫu) theo từng khối cho mỗi game
  const presets: any[] = [];
  ALL_GAME_IDS.forEach((gid) => {
    GRADE_SETS.forEach((gs) => {
      presets.push({
        id: `pre_${gid}_k${gs.grade.toLowerCase()}`,
        gameId: gid,
        name: `[Khối ${gs.grade}] ${gs.name}`,
        note: `Cấu hình soạn sẵn của Ms Trúc: ${gs.desc}`,
        where: 'cloud',
        by: 'Ms Trúc',
        updatedAt: Date.now(),
        createdAt: Date.now(),
        cfg: {
          source: { kind: 'set', setId: gs.setId },
          shuffleQ: true,
          shuffleA: true,
          explain: true,
          teamCount: 2,
          teamNames: ['Đội Xanh', 'Đội Đỏ'],
          allowGuests: true
        }
      });
    });
  });
  console.log(`✓ Đã tạo ${presets.length} cấu hình soạn sẵn (Presets) cho tất cả các khối lớp`);

  // 3. Cập nhật vào file questions-offline.js
  const offPath = path.join(process.cwd(), 'public', 'games', 'data', 'questions-offline.js');
  const offContent = fs.readFileSync(offPath, 'utf8');
  const data = new Function('const window = {}; ' + offContent + '; return window.OFFLINE_DATA;')();

  data.gameConfigs = gameConfigs;
  data.presets = presets;
  data.exportedAt = new Date().toISOString();

  const newOfflineJS = `/* File dữ liệu offline — GIA SƯ TIN HỌC THCS TÂN BÌNH
   Ngân hàng câu hỏi Tin học chuẩn SGK Kết nối tri thức (Lớp 3 - Lớp 9)
   Tổng số lượng: ${data.questions.length} câu hỏi
   Tác giả: Ms Trúc
   Xuất lúc: ${data.exportedAt} */
window.OFFLINE_DATA = ${JSON.stringify(data, null, 2)};
`;

  fs.writeFileSync(offPath, newOfflineJS, 'utf8');
  console.log(`✓ Đã cập nhật public/games/data/questions-offline.js với gameConfigs và ${presets.length} presets`);

  // 4. Đồng bộ lên Firebase gstinhoc Realtime Database
  console.log('Đang đồng bộ gameConfigs và presets lên Firebase Realtime Database (gstinhoc)...');
  const app = initializeApp(firebaseConfig);
  const rtdb = getDatabase(app);

  await set(ref(rtdb, 'game_bank/gameConfigs'), gameConfigs);
  console.log('✓ Đã lưu gameConfigs vào Firebase gstinhoc');

  await set(ref(rtdb, 'game_bank/presets'), presets);
  console.log(`✓ Đã lưu ${presets.length} presets vào Firebase gstinhoc`);

  console.log('🎉 PHÂN BỔ THÀNH CÔNG TẤT CẢ NGÂN HÀNG CÂU HỎI VÀO TẤT CẢ GAME!');
  process.exit(0);
}

main().catch((err) => {
  console.error('Lỗi khi phân bổ game:', err);
  process.exit(1);
});
