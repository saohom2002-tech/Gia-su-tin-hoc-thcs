import fs from 'fs';
import path from 'path';
import { BUILT_IN_QUESTIONS } from '../src/data/questionBank';
import { CURRICULUM_LESSONS } from '../src/data/curriculum';

interface StandardQuestion15 {
  stt: number;
  id: string;
  type: string;
  level: string;
  grade: string;
  subject: string;
  chapter: string;
  topic: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: string;
  explain: string;
}

const LEVEL_MAP: Record<string, string> = {
  de: 'Nhận biết',
  trung_binh: 'Thông hiểu',
  kho: 'Vận dụng',
  van_dung_cao: 'Vận dụng cao'
};

const rows: StandardQuestion15[] = [];
let stt = 1;

for (const [lessonId, qList] of Object.entries(BUILT_IN_QUESTIONS)) {
  const lesson = CURRICULUM_LESSONS.find(l => l.id === lessonId);
  const gradeNum = lesson?.gradeNumber || 
    (lessonId.includes('tin3') ? 3 :
     lessonId.includes('tin4') ? 4 :
     lessonId.includes('tin5') ? 5 :
     lessonId.includes('tin6') ? 6 :
     lessonId.includes('tin7') ? 7 :
     lessonId.includes('tin8') ? 8 :
     lessonId.includes('tin9') ? 9 : 6);

  const chapter = lesson?.subject || (lesson?.isSpecialExam ? 'Ôn tập & Kiểm tra' : 'Kiến thức cốt lõi');
  const topic = lesson?.title || lessonId;

  for (const q of qList) {
    const rawType = q.type || 'multiple_choice';
    let type = 'MC';
    let opt1 = '';
    let opt2 = '';
    let opt3 = '';
    let opt4 = '';
    let correctAnswer = '';

    const opts = q.options || [];

    if (rawType === 'multiple_choice' || rawType === 'single_choice' || !q.type) {
      type = 'MC';
      opt1 = opts[0] || '';
      opt2 = opts[1] || '';
      opt3 = opts[2] || '';
      opt4 = opts[3] || '';
      if (typeof q.correctAnswer === 'number') {
        correctAnswer = ['A', 'B', 'C', 'D'][q.correctAnswer] || 'A';
      } else if (typeof q.correctAnswer === 'string') {
        const ca = q.correctAnswer.trim().toUpperCase();
        if (['A', 'B', 'C', 'D'].includes(ca)) {
          correctAnswer = ca;
        } else {
          const idx = opts.findIndex(o => o.trim() === q.correctAnswer.trim());
          correctAnswer = idx >= 0 ? ['A', 'B', 'C', 'D'][idx] : 'A';
        }
      } else {
        correctAnswer = 'A';
      }
    } else if (rawType === 'true_false') {
      type = 'TF';
      opt1 = (opts[0] || '').replace(/^[a-d]\)\s*/i, '');
      opt2 = (opts[1] || '').replace(/^[a-d]\)\s*/i, '');
      opt3 = (opts[2] || '').replace(/^[a-d]\)\s*/i, '');
      opt4 = (opts[3] || '').replace(/^[a-d]\)\s*/i, '');

      if (Array.isArray(q.trueFalseAnswers)) {
        correctAnswer = q.trueFalseAnswers.map(b => b ? 'Đ' : 'S').join('');
      } else if (typeof q.correctAnswer === 'number') {
        correctAnswer = q.correctAnswer === 0 ? 'Đúng' : 'Sai';
      } else {
        correctAnswer = 'ĐSĐS';
      }
    } else if (rawType === 'fill_blank') {
      type = 'SA';
      if (Array.isArray(q.blankAnswers) && q.blankAnswers.length > 0) {
        correctAnswer = q.blankAnswers.join('; ');
      } else if (opts.length > 0 && typeof q.correctAnswer === 'number') {
        correctAnswer = opts[q.correctAnswer] || '';
      } else {
        correctAnswer = String(q.correctAnswer || '');
      }
      opt1 = opts[0] || '';
      opt2 = opts[1] || '';
      opt3 = opts[2] || '';
      opt4 = opts[3] || '';
    } else if (rawType === 'matching') {
      type = 'MC';
      opt1 = opts[0] || '';
      opt2 = opts[1] || '';
      opt3 = opts[2] || '';
      opt4 = opts[3] || '';
      correctAnswer = 'A';
    } else {
      type = 'SA';
      opt1 = opts[0] || '';
      opt2 = opts[1] || '';
      opt3 = opts[2] || '';
      opt4 = opts[3] || '';
      correctAnswer = String(q.correctAnswer || opts[0] || '');
    }

    const level = LEVEL_MAP[q.difficulty || ''] || 'Thông hiểu';
    const cleanId = q.id || `TIN${gradeNum}_${stt}`;
    const questionText = (q.question || '').replace(/[\r\n]+/g, ' ').trim();
    const explanationText = (q.explanation || q.hint || '').replace(/[\r\n]+/g, ' ').trim();

    rows.push({
      stt: stt++,
      id: cleanId,
      type,
      level,
      grade: String(gradeNum),
      subject: 'Tin học',
      chapter,
      topic,
      question: questionText,
      option1: opt1.replace(/[\r\n]+/g, ' ').trim(),
      option2: opt2.replace(/[\r\n]+/g, ' ').trim(),
      option3: opt3.replace(/[\r\n]+/g, ' ').trim(),
      option4: opt4.replace(/[\r\n]+/g, ' ').trim(),
      correctAnswer,
      explain: explanationText
    });
  }
}

console.log(`Đã chuyển đổi thành công ${rows.length} câu hỏi Tin học.`);

// 1. Xuất file CSV chuẩn 15 cột với UTF-8 BOM
const CSV_HEADERS = [
  'STT',
  'ID question',
  'Type',
  'Level',
  'Grade',
  'Subject',
  'Chapter',
  'Topic',
  'Question',
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Correct answer',
  'Explain'
];

const escapeCSV = (str: string) => {
  if (str == null) return '""';
  const s = String(str);
  if (s.includes('"') || s.includes(',') || s.includes('\n') || s.includes('\r')) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return `"${s}"`;
};

const csvContent = '\uFEFF' + [
  CSV_HEADERS.join(','),
  ...rows.map(r => [
    r.stt,
    escapeCSV(r.id),
    escapeCSV(r.type),
    escapeCSV(r.level),
    escapeCSV(r.grade),
    escapeCSV(r.subject),
    escapeCSV(r.chapter),
    escapeCSV(r.topic),
    escapeCSV(r.question),
    escapeCSV(r.option1),
    escapeCSV(r.option2),
    escapeCSV(r.option3),
    escapeCSV(r.option4),
    escapeCSV(r.correctAnswer),
    escapeCSV(r.explain)
  ].join(','))
].join('\r\n');

const outDir = path.resolve(process.cwd(), 'public/games/data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const csvPath = path.join(outDir, 'ngan-hang-cau-hoi-tin-hoc-1089-cau.csv');
fs.writeFileSync(csvPath, csvContent, 'utf8');
console.log(`✓ Đã ghi file CSV: ${csvPath}`);

// 2. Xuất file TSV (Tab Separated Values) để có thể copy - paste trực tiếp 1 click vào Google Sheet
const tsvContent = '\uFEFF' + [
  CSV_HEADERS.join('\t'),
  ...rows.map(r => [
    r.stt,
    r.id,
    r.type,
    r.level,
    r.grade,
    r.subject,
    r.chapter,
    r.topic,
    r.question,
    r.option1,
    r.option2,
    r.option3,
    r.option4,
    r.correctAnswer,
    r.explain
  ].map(s => String(s).replace(/\t/g, ' ').replace(/[\r\n]+/g, ' ')).join('\t'))
].join('\r\n');

const tsvPath = path.join(outDir, 'ngan-hang-cau-hoi-tin-hoc-paste-google-sheet.tsv');
fs.writeFileSync(tsvPath, tsvContent, 'utf8');
console.log(`✓ Đã ghi file TSV để dán trực tiếp: ${tsvPath}`);

// 3. Cập nhật thẳng questions-offline.js để bên Game có sẵn luôn
const offlineQuestions = rows.map(r => {
  const qObj: any = {
    Id: r.id,
    Type: r.type,
    Level: r.level,
    Grade: r.grade,
    Subject: r.subject,
    Chapter: r.chapter,
    Topic: r.topic,
    Question: r.question,
    CorrectAnswer: r.correctAnswer,
    Explain: r.explain
  };
  if (r.type === 'MC') {
    qObj.Options = { A: r.option1, B: r.option2, C: r.option3, D: r.option4 };
  } else if (r.type === 'TF') {
    qObj.Options = { a: r.option1, b: r.option2, c: r.option3, d: r.option4 };
  } else {
    qObj.Options = {};
  }
  return qObj;
});

// Tạo các bộ đề theo khối lớp để chọn nhanh trong game
const sets = [
  {
    id: 'set_tin_all',
    name: 'Toàn bộ 1.089 câu Tin học (Lớp 3 - 9)',
    desc: 'Ngân hàng tổng hợp đầy đủ SGK Kết nối tri thức',
    color: '#0d6efd',
    questionIds: offlineQuestions.map(q => q.Id)
  },
  {
    id: 'set_tin_3',
    name: 'Tin học Khối 3 (41 câu)',
    desc: 'Khám phá máy tính, bàn phím, chuột và vẽ hình cơ bản',
    color: '#f59e0b',
    questionIds: offlineQuestions.filter(q => q.Grade === '3').map(q => q.Id)
  },
  {
    id: 'set_tin_4',
    name: 'Tin học Khối 4 (35 câu)',
    desc: 'Phần cứng, phần mềm, Internet và soạn thảo văn bản',
    color: '#10b981',
    questionIds: offlineQuestions.filter(q => q.Grade === '4').map(q => q.Id)
  },
  {
    id: 'set_tin_5',
    name: 'Tin học Khối 5 (95 câu)',
    desc: 'Bản quyền nội dung, an toàn thông tin và lập trình Scratch',
    color: '#0284c7',
    questionIds: offlineQuestions.filter(q => q.Grade === '5').map(q => q.Id)
  },
  {
    id: 'set_tin_6',
    name: 'Tin học Khối 6 (160 câu)',
    desc: 'Thông tin và dữ liệu, mạng máy tính, sơ đồ tư duy, thuật toán',
    color: '#8b5cf6',
    questionIds: offlineQuestions.filter(q => q.Grade === '6').map(q => q.Id)
  },
  {
    id: 'set_tin_7',
    name: 'Tin học Khối 7 (160 câu)',
    desc: 'Thiết bị vào - ra, bảng tính điện tử Excel, phần mềm ứng dụng',
    color: '#ec4899',
    questionIds: offlineQuestions.filter(q => q.Grade === '7').map(q => q.Id)
  },
  {
    id: 'set_tin_8',
    name: 'Tin học Khối 8 (297 câu)',
    desc: 'Lịch sử máy tính, bảng tính Excel nâng cao, đạo đức số, thuật toán',
    color: '#f97316',
    questionIds: offlineQuestions.filter(q => q.Grade === '8').map(q => q.Id)
  },
  {
    id: 'set_tin_9',
    name: 'Tin học Khối 9 (301 câu)',
    desc: 'Dịch vụ mạng, máy tính và xã hội, lập trình, giải quyết vấn đề với máy tính',
    color: '#dc2626',
    questionIds: offlineQuestions.filter(q => q.Grade === '9').map(q => q.Id)
  }
];

const offlineDataContent = `/* File dữ liệu offline — GIA SƯ TIN HỌC THCS TÂN BÌNH
   Ngân hàng câu hỏi Tin học chuẩn SGK Kết nối tri thức (Lớp 3 - Lớp 9)
   Tổng số lượng: ${rows.length} câu hỏi
   Tác giả: Ms Trúc
   Xuất lúc: ${new Date().toISOString()} */
window.OFFLINE_DATA = ${JSON.stringify({
  exportedAt: new Date().toISOString(),
  questions: offlineQuestions,
  sets: sets,
  gameConfigs: {},
  settings: {
    siteName: "GAME AND LEARN",
    schoolName: "Trường THCS Tân Bình",
    schoolShort: "TRƯỜNG THCS TÂN BÌNH",
    schoolAddress: "873 Cách Mạng Tháng 8, Phường Tân Sơn Nhất, TP.HCM",
    schoolWebsite: "https://thcstanbinh.hcm.edu.vn",
    adminName: "Ms Trúc",
    adminPhone: "0908.959.627",
    adminPhoneTel: "0908959627",
    adminZalo: "https://zalo.me/0908959627",
    adminEmail: "tranthithanhtruc1980@gmail.com",
    googleSheetId: "1sw7iAQZw2cD7USR3O5tY6P6MvOqbWBvhuBORvr0dxNo",
    classes: [
      {
        id: "cls_7_1",
        code: "7/1",
        name: "Lớp 7/1",
        grade: "7",
        desc: "Tin học 7 — THCS Tân Bình (Ms Trúc)",
        members: [
          "Nguyễn Văn An", "Trần Thị Bình", "Lê Hoàng Long", "Phạm Minh Thư",
          "Đỗ Quốc Bảo", "Vũ Ngọc Ánh", "Hoàng Gia Huy", "Bùi Mai Phương",
          "Đặng Tuấn Kiệt", "Ngô Bảo Châu", "Dương Thu Trang", "Phan Hải Đăng"
        ]
      },
      {
        id: "cls_7_2",
        code: "7/2",
        name: "Lớp 7/2",
        grade: "7",
        desc: "Tin học 7 — THCS Tân Bình (Ms Trúc)",
        members: [
          "Lý Gia Hân", "Trương Trọng Nghĩa", "Võ Quỳnh Nga", "Tạ Đình Phong",
          "Lê Thảo My", "Nguyễn Đức Phúc", "Trần Tuấn Anh", "Nguyễn Kim Ngân"
        ]
      },
      {
        id: "cls_6_1",
        code: "6/1",
        name: "Lớp 6/1",
        grade: "6",
        desc: "Tin học 6 — THCS Tân Bình (Ms Trúc)",
        members: []
      },
      {
        id: "cls_8_1",
        code: "8/1",
        name: "Lớp 8/1",
        grade: "8",
        desc: "Tin học 8 — THCS Tân Bình (Ms Trúc)",
        members: []
      },
      {
        id: "cls_9_1",
        code: "9/1",
        name: "Lớp 9/1",
        grade: "9",
        desc: "Tin học 9 — THCS Tân Bình (Ms Trúc)",
        members: []
      }
    ]
  },
  presets: []
}, null, 2)};
`;

const offlinePath = path.join(outDir, 'questions-offline.js');
fs.writeFileSync(offlinePath, offlineDataContent, 'utf8');
console.log(`✓ Đã cập nhật file offline cho Game: ${offlinePath}`);
