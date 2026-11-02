import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import json
from grade6_part1 import PART1
from grade6_part2 import PART2
from grade6_part3 import PART3

all_lessons = {}
all_lessons.update(PART1)
all_lessons.update(PART2)
all_lessons.update(PART3)

lesson_titles = {
    'tin6-bai-1': 'BÀI 1: THÔNG TIN VÀ DỮ LIỆU',
    'tin6-bai-2': 'BÀI 2: XỬ LÍ THÔNG TIN',
    'tin6-bai-3': 'BÀI 3: THÔNG TIN TRONG MÁY TÍNH',
    'tin6-bai-4': 'BÀI 4: MẠNG MÁY TÍNH',
    'tin6-bai-5': 'BÀI 5: INTERNET',
    'tin6-bai-6': 'BÀI 6: MẠNG THÔNG TIN TOÀN CẦU (WWW)',
    'tin6-bai-7': 'BÀI 7: TÌM KIẾM THÔNG TIN TRÊN INTERNET',
    'tin6-bai-8': 'BÀI 8: THƯ ĐIỆN TỬ (EMAIL)',
    'tin6-bai-9': 'BÀI 9: AN TOÀN THÔNG TIN TRÊN INTERNET',
    'tin6-bai-10': 'BÀI 10: SƠ ĐỒ TƯ DUY',
    'tin6-bai-11': 'BÀI 11: ĐỊNH DẠNG VĂN BẢN',
    'tin6-bai-12': 'BÀI 12: TRÌNH BÀY THÔNG TIN Ở DẠNG BẢNG',
    'tin6-bai-13': 'BÀI 13: THỰC HÀNH: HOÀN THIỆN SỔ LƯU NIỆM',
    'tin6-bai-14': 'BÀI 14: THUẬT TOÁN',
    'tin6-bai-15': 'BÀI 15: CÁC THUẬT TOÁN TÌM KIẾM',
    'tin6-bai-16': 'BÀI 16: CÁC THUẬT TOÁN SẮP XẾP',
}

lines = []
lines.append("import { Question } from '../types/quiz';\n")
lines.append("export const QUESTIONS_GRADE_6: Record<string, Question[]> = {")

for lid in sorted(all_lessons.keys(), key=lambda x: int(x.split('-')[2])):
    questions = all_lessons[lid]
    title = lesson_titles.get(lid, lid)
    lines.append(f"  // ================= {title} ({len(questions)} CÂU) =================")
    lines.append(f"  '{lid}': [")
    for q in questions:
        lines.append("    {")
        for k, v in q.items():
            val_str = json.dumps(v, ensure_ascii=False)
            lines.append(f"      {k}: {val_str},")
        lines.append("    },")
    lines.append("  ],\n")

lines.append("};\n")

with open('src/data/questionsGrade6.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f"Successfully generated src/data/questionsGrade6.ts with {len(all_lessons)} lessons!")
for lid in sorted(all_lessons.keys(), key=lambda x: int(x.split('-')[2])):
    print(f"  {lid}: {len(all_lessons[lid])} câu")
