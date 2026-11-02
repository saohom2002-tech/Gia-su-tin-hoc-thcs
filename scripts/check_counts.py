import re

def check_file(path, prefix):
    try:
        content = open(path, 'r', encoding='utf-8').read()
        pattern = rf"['\"]({prefix}-[^'\"]+)['\"]\s*:\s*\["
        matches = list(re.finditer(pattern, content))
        print(f"=== {path} ===")
        for i, m in enumerate(matches):
            key = m.group(1)
            start_pos = m.end()
            end_pos = matches[i+1].start() if i+1 < len(matches) else len(content)
            block = content[start_pos:end_pos]
            q_count = len(re.findall(r"id\s*:\s*['\"]", block))
            print(f"  {key}: {q_count} câu")
    except Exception as e:
        print(f"Error {path}: {e}")

check_file('src/data/questionsGrade6.ts', 'tin6')
check_file('src/data/questionsGrade7.ts', 'tin7')
check_file('src/data/questionsGrade8.ts', 'tin8')
check_file('src/data/questionsGrade9.ts', 'tin9')
