import sys, os, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from grade9_part1 import GRADE9_P1
from grade9_part2 import GRADE9_P2
from grade9_part3 import GRADE9_P3

with open('scripts/grade9_existing.json', 'r', encoding='utf-8') as f:
    existing = json.load(f)

all_new = {}
for p in [GRADE9_P1, GRADE9_P2, GRADE9_P3]:
    for k, v in p.items():
        if k not in all_new:
            all_new[k] = []
        all_new[k].extend(v)

lesson_keys = [
    'tin9-bai-1', 'tin9-bai-2', 'tin9-bai-3', 'tin9-bai-4', 'tin9-bai-5',
    'tin9-bai-6', 'tin9-bai-7', 'tin9-bai-8', 'tin9-bai-9a', 'tin9-bai-10a',
    'tin9-bai-11a', 'tin9-bai-12a', 'tin9-bai-13', 'tin9-bai-14', 'tin9-bai-15',
    'tin9-bai-16'
]

lesson_titles = {
    'tin9-bai-1': 'BÀI 1: THẾ GIỚI KĨ THUẬT SỐ',
    'tin9-bai-2': 'BÀI 2: THÔNG TIN TRONG GIẢI QUYẾT VẤN ĐỀ',
    'tin9-bai-3': 'BÀI 3: THỰC HÀNH: ĐÁNH GIÁ CHẤT LƯỢNG THÔNG TIN',
    'tin9-bai-4': 'BÀI 4: MỘT SỐ VẤN ĐỀ PHÁP LÍ, ĐẠO ĐỨC, XÃ HỘI CỦA TIN HỌC',
    'tin9-bai-5': 'BÀI 5: TÌM HIỂU PHẦN MỀM MÔ PHỎNG',
    'tin9-bai-6': 'BÀI 6: THỰC HÀNH: KHAI THÁC PHẦN MỀM MÔ PHỎNG',
    'tin9-bai-7': 'BÀI 7: TRÌNH BÀY THÔNG TIN TRONG TRAO ĐỔI VÀ HỢP TÁC',
    'tin9-bai-8': 'BÀI 8: THỰC HÀNH: CÔNG CỤ TRỰC TUYẾN XỬ LÍ VÀ CHIA SẺ THÔNG TIN',
    'tin9-bai-9a': 'BÀI 9A: SỬ DỤNG CÔNG CỤ XÁC THỰC DỮ LIỆU (DATA VALIDATION)',
    'tin9-bai-10a': 'BÀI 10A: SỬ DỤNG HÀM COUNTIF',
    'tin9-bai-11a': 'BÀI 11A: SỬ DỤNG HÀM SUMIF',
    'tin9-bai-12a': 'BÀI 12A: SỬ DỤNG HÀM IF & QUẢN LÍ TÀI CHÍNH CÁ NHÂN',
    'tin9-bai-13': 'BÀI 13: DỊCH VỤ MẠNG VÀ CÁC VẤN ĐỀ AN NINH THÔNG TIN',
    'tin9-bai-14': 'BÀI 14: THỰC HÀNH: BẢO MẬT AN TOÀN THÔNG TIN',
    'tin9-bai-15': 'BÀI 15: ĐỊNH HƯỚNG NGHỀ NGHIỆP TRONG KỶ NGUYÊN SỐ',
    'tin9-bai-16': 'BÀI 16: DỰ ÁN: KHỞI NGHIỆP CÙNG CÔNG NGHỆ SỐ',
}

merged = {}
for k in lesson_keys:
    cur_qs = existing.get(k, [])
    new_qs = all_new.get(k, [])
    
    seen_texts = set(q.get('question', '').strip().lower() for q in cur_qs)
    for nq in new_qs:
        txt = nq.get('question', '').strip().lower()
        if txt not in seen_texts:
            seen_texts.add(txt)
            cur_qs.append(nq)
    merged[k] = cur_qs

lines = []
lines.append("import { Question } from '../types/quiz';\n")
lines.append("export const QUESTIONS_GRADE_9: Record<string, Question[]> = {")

for k in lesson_keys:
    qs = merged[k]
    title = lesson_titles.get(k, k)
    lines.append(f"  // ================= {title} ({len(qs)} CÂU) =================")
    lines.append(f"  '{k}': [")
    for q in qs:
        lines.append("    {")
        for prop, val in q.items():
            val_str = json.dumps(val, ensure_ascii=False)
            lines.append(f"      {prop}: {val_str},")
        lines.append("    },")
    lines.append("  ],\n")

lines.append("};\n")

with open('src/data/questionsGrade9.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print("Successfully written src/data/questionsGrade9.ts!")
for k in lesson_keys:
    print(f"  {k}: {len(merged[k])} câu")
