import sys, os, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from grade8_part1 import SUPPLEMENTS_P1
from grade8_part2 import SUPPLEMENTS_P2
from grade8_part3 import SUPPLEMENTS_P3

with open('scripts/grade8_existing.json', 'r', encoding='utf-8') as f:
    existing = json.load(f)

all_supplements = {}
for p in [SUPPLEMENTS_P1, SUPPLEMENTS_P2, SUPPLEMENTS_P3]:
    for k, v in p.items():
        if k not in all_supplements:
            all_supplements[k] = []
        all_supplements[k].extend(v)

merged = {}
for k in existing.keys():
    cur_qs = existing.get(k, [])
    supp_qs = all_supplements.get(k, [])
    
    # Check deduplication by question text
    seen_texts = set(q.get('question', '').strip().lower() for q in cur_qs)
    for sq in supp_qs:
        txt = sq.get('question', '').strip().lower()
        if txt not in seen_texts:
            seen_texts.add(txt)
            cur_qs.append(sq)
    merged[k] = cur_qs

lines = []
lines.append("import { Question } from '../types/quiz';\n")
lines.append("export const QUESTIONS_GRADE_8: Record<string, Question[]> = {")

for k in existing.keys():
    qs = merged[k]
    lines.append(f"  // ================= {k.upper()} ({len(qs)} CÂU) =================")
    lines.append(f"  '{k}': [")
    for q in qs:
        lines.append("    {")
        for prop, val in q.items():
            val_str = json.dumps(val, ensure_ascii=False)
            lines.append(f"      {prop}: {val_str},")
        lines.append("    },")
    lines.append("  ],\n")

lines.append("};\n")

with open('src/data/questionsGrade8.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print("Successfully written src/data/questionsGrade8.ts!")
for k, qs in merged.items():
    print(f"  {k}: {len(qs)} câu")
