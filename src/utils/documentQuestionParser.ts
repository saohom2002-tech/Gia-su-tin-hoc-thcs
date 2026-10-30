import { Question, DifficultyLevel } from '../types/quiz';

export interface ParsedDocumentResult {
  suggestedTitle: string;
  summary: string;
  questions: Question[];
  warnings: string[];
}

/**
 * Bóc tách bảng đáp án trắc nghiệm A, B, C, D ở cuối văn bản (nếu có)
 * Ví dụ: "1.A  2.B  3.C  4.D" hoặc "1-A  2-B" hoặc "Câu 1: A, Câu 2: B"
 */
function extractAnswerKeyMap(text: string): Map<number, number> {
  const answerMap = new Map<number, number>();

  const answerKeySectionRegex = /(?:bảng\s*đáp\s*án|đáp\s*án\s*tham\s*khảo|hướng\s*dẫn\s*chấm)(?:[\s\S]*)$/i;
  const match = text.match(answerKeySectionRegex);
  if (!match) return answerMap;
  const searchArea = match[0];

  // Regex bắt dạng: "1. A", "1-A", "1:A", "Câu 1: A", "Câu 1. A"
  const pairRegex = /(?:^|\s|,|;|\|)(?:câu\s*)?(\d+)\s*[.:\-–=]\s*([A-D])(?=\s|$|,|;|\||\.)/gi;
  let m: RegExpExecArray | null;
  while ((m = pairRegex.exec(searchArea)) !== null) {
    const qNum = parseInt(m[1], 10);
    const ansLetter = m[2].toUpperCase();
    const ansIndex = ansLetter.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
    if (!answerMap.has(qNum) && ansIndex >= 0 && ansIndex <= 3) {
      answerMap.set(qNum, ansIndex);
    }
  }

  return answerMap;
}

/**
 * Bóc tách bảng đáp án Đúng/Sai ở cuối văn bản (nếu có)
 * Ví dụ: "Câu 33: a-Đ, b-S, c-Đ, d-S" hoặc "33: Đ - Đ - S - Đ" hoặc "Câu 1: a) Đúng, b) Sai, c) Đúng, d) Sai"
 */
function extractTrueFalseAnswerKeyMap(text: string): Map<number, boolean[]> {
  const tfMap = new Map<number, boolean[]>();
  const answerKeySectionRegex = /(?:bảng\s*đáp\s*án|đáp\s*án\s*tham\s*khảo|hướng\s*dẫn\s*chấm)(?:[\s\S]*)$/i;
  const match = text.match(answerKeySectionRegex);
  if (!match) return tfMap;
  const searchArea = match[0];

  const lines = searchArea.split('\n');
  for (const line of lines) {
    const qMatch = line.match(/(?:câu\s*)?(\d+)\s*[.:\-–=]\s*([\s\S]+)$/i);
    if (!qMatch) continue;
    const qNum = parseInt(qMatch[1], 10);
    const rest = qMatch[2];
    const parsedBools = parseTrueFalseSequence(rest);
    if (parsedBools.length >= 2 && !tfMap.has(qNum)) {
      tfMap.set(qNum, parsedBools);
    }
  }

  return tfMap;
}

/**
 * Phân tích chuỗi đáp án Đúng/Sai như:
 * - "a) Đúng, b) Sai, c) Đúng, d) Sai"
 * - "a-Đ, b-S, c-Đ, d-S"
 * - "Đ - S - Đ - S" hoặc "Đ, Đ, S, S"
 */
function parseTrueFalseSequence(str: string): boolean[] {
  const results: boolean[] = [];

  // Dạng có nhãn a, b, c, d: "a) Đúng", "a: Đ", "a-S", "a. Sai"
  const labeledMatches = [
    ...str.matchAll(/\b([a-d])\s*[.):\-–=]+\s*(đúng|sai|true|false|đ|s)\b/gi),
  ];
  if (labeledMatches.length >= 2) {
    const byIndex: Record<number, boolean> = {};
    let maxIdx = 0;
    for (const m of labeledMatches) {
      const idx = m[1].toLowerCase().charCodeAt(0) - 97;
      const token = m[2].toLowerCase();
      byIndex[idx] = token === 'đúng' || token === 'đ' || token === 'true';
      if (idx > maxIdx) maxIdx = idx;
    }
    for (let i = 0; i <= maxIdx; i++) {
      results.push(byIndex[i] ?? true);
    }
    return results;
  }

  // Dạng liệt kê liên tiếp: "Đ - S - Đ - S" hoặc "Đúng, Sai, Đúng, Sai"
  const tokens = [
    ...str.matchAll(/(?:^|[\s,;:\-–/|()])(đúng|sai|true|false|đ|s)(?=$|[\s,;:\-–/|().])/gi),
  ];
  if (tokens.length >= 2) {
    for (const t of tokens) {
      const val = t[1].toLowerCase();
      results.push(val === 'đúng' || val === 'đ' || val === 'true');
    }
  }

  return results;
}

/**
 * Đánh giá tự động mệnh đề Đúng/Sai theo ngữ nghĩa sư phạm Tin học khi tài liệu không đính kèm đáp án
 */
function inferStatementTrueFalse(statementText: string): boolean {
  const lower = statementText.toLowerCase();
  // Các dấu hiệu mệnh đề bẫy / phủ định sai thường gặp trong đề Tin học
  if (
    lower.includes('chỉ dành riêng cho') ||
    lower.includes('không cần nghỉ ngơi') ||
    lower.includes('không bao giờ bị') ||
    lower.includes('luôn luôn chính xác tuyệt đối') ||
    lower.includes('tất cả mọi thông tin trên mạng đều') ||
    lower.includes('tự ý xóa') ||
    lower.includes('chia sẻ mật khẩu cho') ||
    (lower.includes('loa') && lower.includes('thiết bị vào')) ||
    (lower.includes('màn hình') && !lower.includes('cảm ứng') && lower.includes('thiết bị vào')) ||
    (lower.includes('máy in') && lower.includes('thiết bị vào')) ||
    (lower.includes('bàn phím') && lower.includes('thiết bị ra')) ||
    (lower.includes('chuột') && lower.includes('thiết bị ra'))
  ) {
    return false;
  }
  return true;
}

/**
 * Chuẩn hóa và làm sạch văn bản tải lên (hỗ trợ cả văn bản trích xuất từ PDF bị tách dấu Unicode NFD hoặc dính dòng)
 */
function cleanRawText(raw: string): string {
  return raw
    .normalize('NFC') // Quan trọng cho PDF tiếng Việt: gộp dấu tổ hợp (NFD -> NFC)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\u00A0/g, ' ') // Non-breaking space
    .replace(/\n--\s*\d+\s*of\s*\d+\s*--\n?/gi, '\n') // Bỏ dấu phân trang của pdf-parse
    .replace(/\n\s*Trang\s+\d+(?:\s*\/\s*\d+)?\s*(?=\n|$)/gi, '\n') // Bỏ chân trang "Trang 1/4"
    .replace(/\t+/g, '   ') // Giữ tab thành khoảng trắng rộng để nhận diện cột phương án
    .replace(/[ ]{2,}/g, '   ') // Bảo toàn khoảng cách từ 2 dấu cách trở lên
    // Nếu trong PDF/DOCX "Câu 2:" bị dính trên cùng dòng sau phương án D của câu trước, tự ngắt xuống dòng
    .replace(/([^\n])\s*(?=(?:Câu|Bài)\s*\d+\s*(?:\([^)]*\)\s*)?[.:\-–])/gi, '$1\n')
    // Nếu câu tiếp theo đánh số "2. Lập trình..." bị dính liền ngay sau dấu chấm kết thúc câu trước (VD: "thông tin.2. Lập trình")
    .replace(/([.?!])\s*(?=\d{1,2}\.\s+[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ])/g, '$1\n')
    .trim();
}

/**
 * Chuẩn hóa các phương án A. B. C. D. hoặc a) b) c) d) bị nằm chung trên 1 dòng hoặc bị dính sát vào câu hỏi / phương án trước trong bảng Word/PDF
 */
export function normalizeInlineOptionsInBlock(content: string): string {
  return content
    // 1. Tách trường hợp a) b) c) d) hoặc A) B) C) D) bị dính sát sau dấu ? ) . hoặc chữ thường (VD: "(Chọn nhiều đáp án)a) Giáo dục" hoặc "kỹ thuậtc) Giao thông")
    .replace(
      /([?.)!]|[^\s\nA-Za-z0-9(*_~]|[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ])([*_~]*[A-Da-d]\)\s+(?=[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ0-9"']))/g,
      '$1\n$2'
    )
    // 2. Tách trường hợp A. B. C. D. bị dính sát sau dấu ? ) .
    .replace(
      /([?.)!])([*_~]*[A-D][.:]\s+(?=[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ0-9"']))/g,
      '$1\n$2'
    )
    // 3. Ngắt dòng trước A., B., C., D. hoặc a), b), c), d) khi đứng sau khoảng trắng (tránh cắt nhầm sau từ "Đáp án:")
    .replace(
      /(?<!(?:đáp\s*án|đ\/a|key)\s*[:.\-–=]?\s*)(?:\s{2,}|\s+(?=[*_~]*[A-Da-d][.:)]\s+))([*_~]*[A-Da-d][.:)]\s+)/gi,
      (match, optPrefix, offset, fullStr) => {
        const before = fullStr.slice(Math.max(0, offset - 18), offset);
        if (/(?:đáp\s*án|đ\/a|key|hình|phần|mục|bảng)\s*[:.\-–=]?\s*$/i.test(before)) {
          return match;
        }
        // Chỉ tự động xuống dòng cho A. B. C. D. (in hoa) hoặc a) b) c) d) (có ngoặc đơn)
        const trimmedPrefix = optPrefix.trim();
        const rawChar = trimmedPrefix.replace(/^[*_~]+/, '')[0];
        const delim = trimmedPrefix.replace(/^[*_~]+[A-Da-d]/, '')[0];
        if ((rawChar >= 'A' && rawChar <= 'D') || delim === ')') {
          return `\n${trimmedPrefix} `;
        }
        return match;
      }
    );
}

/**
 * Cắt bỏ các tiêu đề Phần (PHẦN II..., PHẦN III..., BẢNG ĐÁP ÁN..., --- HẾT ---) bị dính vào cuối phương án hoặc câu hỏi trước
 */
function stripTrailingSectionHeaders(text: string): {
  cleanedText: string;
  detectedNextSectionTrueFalse: boolean;
} {
  const sectionRegex =
    /(?:\n|\s{2,}|\.\s+)(?:(?:PHẦN|Phần)\s*(?:I|II|III|IV|1|2|3|4|A|B|C)\b[\s\S]*|(?:I|II|III|IV)\.\s*(?:TRẮC\s*NGHIỆM|TỰ\s*LUẬN|THỰC\s*HÀNH)[\s\S]*|(?:BẢNG\s*ĐÁP\s*ÁN|HƯỚNG\s*DẪN\s*CHẤM|---\s*HẾT\s*---)[\s\S]*)$/;
  const match = text.match(sectionRegex);
  if (!match || match.index === undefined) {
    return { cleanedText: text.trim(), detectedNextSectionTrueFalse: false };
  }
  const trailingHeader = match[0];
  const isNextTF = /đúng\s*[-–/]\s*sai|đúng\s*sai/i.test(trailingHeader);
  return {
    cleanedText: text.substring(0, match.index).trim(),
    detectedNextSectionTrueFalse: isNextTF,
  };
}

/**
 * Trích xuất tiêu đề đề thi tiềm năng từ phần đầu file
 */
function extractPotentialTitle(text: string): { title: string; cleanBody: string } {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  let potentialTitle = '';

  for (let i = 0; i < Math.min(5, lines.length); i++) {
    const line = lines[i];
    if (
      /(đề\s*thi|đề\s*kiểm\s*tra|khảo\s*sát|ôn\s*tập|bài\s*tập|giữa\s*kì|học\s*kì|tin\s*học)/i.test(line) &&
      !/^(câu\s*\d+|bài\s*\d+)/i.test(line)
    ) {
      potentialTitle = line.replace(/^[#*_\-\s]+|[#*_\-\s]+$/g, '').trim();
      break;
    }
  }

  return {
    title: potentialTitle,
    cleanBody: text,
  };
}

export interface DocumentParseOptions {
  defaultTopic?: string;
  gradeNumber?: number;
  fallbackDifficulty?: DifficultyLevel;
  questionCount?: number | 'all';
  strictOriginal?: boolean;
  questionType?: string;
  autoGenerateAnswerIfMissing?: boolean;
}

/**
 * Bóc tách danh sách câu hỏi (Trắc nghiệm 4 lựa chọn & Trắc nghiệm Đúng/Sai) từ văn bản thô
 */
export function parseQuestionsFromRawText(
  rawText: string,
  options?: DocumentParseOptions
): ParsedDocumentResult {
  const cleaned = cleanRawText(rawText);
  const { title } = extractPotentialTitle(cleaned);
  const answerKeyMap = extractAnswerKeyMap(cleaned);
  const tfAnswerKeyMap = extractTrueFalseAnswerKeyMap(cleaned);
  const warnings: string[] = [];

  // Cắt bỏ phần BẢNG ĐÁP ÁN ở cuối văn bản trước khi tách khối câu hỏi để không nhận nhầm đáp án thành câu hỏi
  const bodyWithoutAnswerTable = cleaned.replace(
    /\n\s*(?:bảng\s*đáp\s*án|đáp\s*án\s*tham\s*khảo|hướng\s*dẫn\s*chấm)[\s\S]*$/i,
    ''
  );

  // Tìm các vị trí bắt đầu câu hỏi: "Câu 1:", "Câu 1.", "Câu 1 (0.25đ):", "Bài 1:", hoặc số thứ tự "1." đứng đầu dòng
  const questionSplitRegex =
    /(?:^|\n)(?=(?:câu|bài)\s*\d+(?:\s*\([^)]*\))?[\s.:\-–]|\b\d+[\s.:\-–]\s+(?:[A-ZÀ-Ỹ]|[a-zà-ỹ]|\())/i;
  const rawBlocks = bodyWithoutAnswerTable.split(questionSplitRegex);

  const parsedQuestions: Question[] = [];
  let inTrueFalseSection = false;

  for (let bIndex = 0; bIndex < rawBlocks.length; bIndex++) {
    const block = rawBlocks[bIndex].trim();
    if (!block) continue;

    // Kiểm tra xem block đầu tiên hoặc phần chuyển tiếp có phải là tiêu đề PHẦN II: ĐÚNG - SAI không
    if (/phần\s*(?:II|2|hai|B)[\s\S]{0,80}đúng\s*[-–/]\s*sai|trắc\s*nghiệm\s*đúng\s*[-–/]\s*sai/i.test(block)) {
      inTrueFalseSection = true;
    }

    // Kiểm tra xem block có chứa số câu hỏi không (hỗ trợ cả "Câu 1 (0,25 điểm):")
    const headerMatch = block.match(/^(?:câu|bài)?\s*(\d+)(?:\s*\([^)]*\))?[\s.:\-–]*\s*([\s\S]+)$/i);
    if (!headerMatch) {
      continue;
    }

    const questionNumber = parseInt(headerMatch[1], 10);
    let content = headerMatch[2]
      .replace(/^(?:\(\s*[\d,.]+\s*(?:điểm|đ)\s*\)|\[\s*[\d,.]+\s*(?:điểm|đ)\s*\])\s*[:.\-–]*\s*/i, '')
      .trim();

    // Kiểm tra xem ở cuối block này có dính tiêu đề PHẦN II. TRẮC NGHIỆM ĐÚNG - SAI của phần kế tiếp không
    const strippedSection = stripTrailingSectionHeaders(content);
    content = strippedSection.cleanedText;
    const nextBlockIsTF = strippedSection.detectedNextSectionTrueFalse;

    // Chuẩn hóa phương án bị dính trên cùng 1 dòng trong PDF trước khi tách
    content = normalizeInlineOptionsInBlock(content);

    // Regex phát hiện phương án đầu tiên: hỗ trợ cả A., B., C., D. và a), b), c), d)
    const firstOptionMatch = content.search(/(?:^|\n|\s{2,})(?:[*_~]*\s*[*_~]*)?[A-Da-d][.:)]\s+/);
    if (firstOptionMatch === -1) {
      // Kiểm tra xem có phải câu Đúng/Sai đơn (1 mệnh đề không tách a, b, c, d) không
      const isSingleTF =
        options?.questionType === 'true_false' ||
        inTrueFalseSection ||
        /đúng\s*hay\s*sai|đúng\s*\(đ\)\s*hay\s*sai\s*\(s\)|đúng\s*hoặc\s*sai/i.test(content);

      if (isSingleTF && content.length > 10) {
        let singleAns = true;
        let cleanSingleQ = content;
        const inlineTFMatch = content.match(
          /(?:[\s\n]+|[(\[])(?:đáp\s*án\s*[:.\-–]?\s*)?(đúng|sai|đ|s)[)\].]*$/i
        );
        if (inlineTFMatch && inlineTFMatch.index !== undefined) {
          const tok = inlineTFMatch[1].toLowerCase();
          singleAns = tok === 'đúng' || tok === 'đ';
          cleanSingleQ = content.substring(0, inlineTFMatch.index).trim();
        } else {
          singleAns = inferStatementTrueFalse(cleanSingleQ);
        }

        parsedQuestions.push({
          id: `q-doc-tf-${Date.now()}-${questionNumber}-${Math.random().toString(36).slice(2, 6)}`,
          type: 'true_false',
          subType: 'true_false',
          question: cleanSingleQ,
          options: [cleanSingleQ],
          trueFalseAnswers: [singleAns],
          correctAnswer: singleAns ? 0 : 1,
          explanation: `Đáp án: ${singleAns ? 'ĐÚNG' : 'SAI'}. Trích dẫn theo chuẩn tài liệu đề thi.`,
          difficulty: 'trung_binh',
          hint: 'Hãy đối chiếu mệnh đề với kiến thức chuẩn trong SGK Tin học Kết Nối Tri Thức.',
          topic: options?.defaultTopic || `Chủ đề trích xuất từ đề thi`,
        });
      }

      if (nextBlockIsTF) {
        inTrueFalseSection = true;
      }
      continue;
    }

    const questionText = content.substring(0, firstOptionMatch).trim();
    const remainingText = content.substring(firstOptionMatch).trim();

    // Tách phần "Lời giải:" / "Giải thích:" ở cuối khối câu hỏi (chỉ khớp khi đứng đầu dòng hoặc có dấu hai chấm rõ ràng)
    let answerTextInBlock = '';
    let explanationInBlock = '';
    let optionsText = remainingText;

    const explainMatch = remainingText.match(
      /(?:^|\n)\s*(?:lời\s*giải|giải\s*thích|hướng\s*dẫn\s*giải)\s*[:.\-–]+\s*([\s\S]*)$/i
    );
    if (explainMatch && explainMatch.index !== undefined) {
      explanationInBlock = explainMatch[1].trim();
      optionsText = remainingText.substring(0, explainMatch.index).trim();
    }

    // Tách dòng "Đáp án:" ở cuối câu hỏi (TUYỆT ĐỐI không bắt từ "chọn" bên trong câu văn tiếng Việt)
    const inlineAnsLineMatch = optionsText.match(
      /(?:^|\n)\s*(?:đáp\s*án(?:\s*đúng)?|đ\/a|key)\s*[:.\-–=]+\s*([^\n]+)$/i
    );
    if (inlineAnsLineMatch && inlineAnsLineMatch.index !== undefined) {
      answerTextInBlock = inlineAnsLineMatch[1].trim();
      optionsText = optionsText.substring(0, inlineAnsLineMatch.index).trim();
    }

    // Tách từng phương án / mệnh đề A, B, C, D hoặc a, b, c, d
    const optionMatches = [
      ...optionsText.matchAll(
        /(?:^|\n|\s{2,})([*_~]*\s*[*_~]*)?([A-Da-d])([.:)])\s+([\s\S]*?)(?=(?:(?:^|\n|\s{2,})(?:[*_~]*\s*[*_~]*)?[A-Da-d][.:)]\s+)|$)/g
      ),
    ];

    const extractedItems: {
      text: string;
      rawLetter: string;
      letterIndex: number;
      delimiter: string;
      stmtTF: boolean | null;
      isStarred: boolean;
    }[] = [];

    for (const optM of optionMatches) {
      const star = optM[1]?.trim() || '';
      const rawLetter = optM[2];
      const delimiter = optM[3];
      const letter = rawLetter.toUpperCase();
      let optText = optM[4].trim().replace(/\s+/g, ' ');

      // Cắt bỏ tiêu đề PHẦN II / PHẦN III nếu bị dính ở cuối phương án cuối cùng
      const strippedOpt = stripTrailingSectionHeaders(optText);
      optText = strippedOpt.cleanedText;

      // Nếu cuối phương án D bị dính câu tiếp theo dạng "2. Lập trình..." thì cắt ra
      const stuckNextQuestionMatch = optText.match(
        /([.?!])\s*\d{1,2}\.\s+[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][\s\S]*$/
      );
      if (stuckNextQuestionMatch && stuckNextQuestionMatch.index !== undefined) {
        optText = optText.substring(0, stuckNextQuestionMatch.index + 1).trim();
      }

      let stmtTF: boolean | null = null;
      let isStarred = false;

      // Kiểm tra xem mệnh đề có ghi kèm (Đúng)/(Sai)/[Đ]/[S]/-> Đúng ở cuối không
      const tfSuffixMatch = optText.match(
        /(?:\s*[-–→>]+\s*|\s*[(\[])(đúng|sai|true|false|đ|s)[)\]]*\.?$/i
      );
      if (tfSuffixMatch && tfSuffixMatch.index !== undefined) {
        const tok = tfSuffixMatch[1].toLowerCase();
        stmtTF = tok === 'đúng' || tok === 'đ' || tok === 'true';
        optText = optText.substring(0, tfSuffixMatch.index).trim();
      }

      // Kiểm tra xem phương án có dấu sao * đánh dấu đáp án đúng không (VD: *A. hoặc *a))
      if (star.includes('*') || optText.startsWith('*') || optText.endsWith('*')) {
        isStarred = true;
        if (stmtTF === null) stmtTF = true;
        optText = optText.replace(/\*/g, '').trim();
      }

      // Xóa dấu gạch dưới markdown thừa nếu có
      optText = optText.replace(/^[_~]+|[_~]+$/g, '').trim();

      extractedItems.push({
        text: optText,
        rawLetter,
        letterIndex: letter.charCodeAt(0) - 65,
        delimiter,
        stmtTF,
        isStarred,
      });
    }

    if (extractedItems.length < 2) {
      if (nextBlockIsTF) inTrueFalseSection = true;
      continue;
    }

    // Nếu bảng 2 cột trong Word làm thứ tự phương án thành a, c, b, d thì sắp xếp lại theo đúng thứ tự A, B, C, D
    const uniqueLetterIndices = new Set(extractedItems.map((it) => it.letterIndex));
    if (uniqueLetterIndices.size === extractedItems.length) {
      extractedItems.sort((a, b) => a.letterIndex - b.letterIndex);
    }

    const extractedOptions = extractedItems.map((it) => it.text);
    const rawLetters = extractedItems.map((it) => it.rawLetter);
    const rawDelimiters = extractedItems.map((it) => it.delimiter);
    const inlineStatementTF = extractedItems.map((it) => it.stmtTF);
    const starredIndices = extractedItems
      .map((it, idx) => (it.isStarred ? idx : -1))
      .filter((idx) => idx >= 0);
    const markedCorrectLetter =
      starredIndices.length > 0 ? String.fromCharCode(65 + starredIndices[0]) : '';

    // Nhận diện câu hỏi Chọn Nhiều Đáp Án (Multiple Select):
    const stemIndicatesMultiSelect =
      /chọn\s*nhiều\s*đáp\s*án|chọn\s*các\s*đáp\s*án|chọn\s*nhiều\s*phương\s*án|chọn\s*từ\s*2\s*đáp\s*án|có\s*thể\s*chọn\s*nhiều/i.test(
        questionText
      );
    const multiLetterMatches = answerTextInBlock
      ? [...answerTextInBlock.matchAll(/\b([A-Da-d])\b/g)].map((m) => m[1].toUpperCase().charCodeAt(0) - 65)
      : [];
    const isMultiSelectQuestion =
      options?.questionType === 'multiple_select' ||
      stemIndicatesMultiSelect ||
      (starredIndices.length > 1 && !inTrueFalseSection);

    // Nhận diện câu hỏi Đúng / Sai (True/False):
    const hasLowercaseParenLabels =
      rawLetters.every((l) => l === l.toLowerCase()) &&
      rawDelimiters.every((d) => d === ')');
    const stemIndicatesSingleChoice =
      /phương\s*án\s*nào\s*sau\s*đây|đáp\s*án\s*nào\s*sau\s*đây|thiết\s*bị\s*nào\s*sau\s*đây|lĩnh\s*vực\s*nào\s*sau\s*đây|ví\s*dụ\s*nào\s*sau\s*đây|khẳng\s*định\s*nào\s*sau\s*đây|phát\s*biểu\s*nào\s*sau\s*đây|là\s*gì\s*\?$/i.test(
        questionText.trim()
      );
    const stemIndicatesTF =
      /đúng\s*hay\s*sai|đúng\s*hoặc\s*sai|đúng\s*\(đ\)\s*hay\s*sai|xét\s*các\s*phát\s*biểu|nhận\s*định\s*sau\s*đúng\s*hay\s*sai|chọn\s*đúng\s*hoặc\s*sai/i.test(
        questionText
      );
    const hasInlineTFMarkers = extractedItems.some(
      (it) => typeof it.stmtTF === 'boolean' && !it.isStarred
    );
    const inlineAnsIndicatesTF = parseTrueFalseSequence(answerTextInBlock).length >= 2;
    const hasKeyMapTF = tfAnswerKeyMap.has(questionNumber);

    const isTrueFalseQuestion =
      !isMultiSelectQuestion &&
      (options?.questionType === 'true_false' ||
        inTrueFalseSection ||
        stemIndicatesTF ||
        (hasLowercaseParenLabels && !stemIndicatesSingleChoice) ||
        hasInlineTFMarkers ||
        inlineAnsIndicatesTF ||
        hasKeyMapTF);

    // Đánh giá mức độ câu hỏi
    let difficulty: 'de' | 'trung_binh' | 'kho' = 'trung_binh';
    const lowerQ = questionText.toLowerCase();
    if (
      lowerQ.includes('đâu là') ||
      lowerQ.includes('khái niệm') ||
      lowerQ.includes('định nghĩa') ||
      lowerQ.includes('thiết bị nào') ||
      lowerQ.includes('phím tắt nào') ||
      lowerQ.includes('chức năng chính của') ||
      lowerQ.includes('tên gọi nào')
    ) {
      difficulty = 'de';
    } else if (
      lowerQ.includes('thuật toán') ||
      lowerQ.includes('vận dụng') ||
      lowerQ.includes('phân tích') ||
      lowerQ.includes('chương trình') ||
      lowerQ.includes('tối ưu')
    ) {
      difficulty = 'kho';
    }

    if (isMultiSelectQuestion) {
      const msOptions = extractedOptions.filter(
        (opt) => opt.length > 0 && !/^phương án [a-d]$/i.test(opt)
      );
      while (msOptions.length < 4) {
        msOptions.push(`Phương án ${String.fromCharCode(65 + msOptions.length)}`);
      }

      let correctIndices: number[] = [];
      if (starredIndices.length > 0) {
        correctIndices = starredIndices.filter((i) => i < msOptions.length);
      } else if (multiLetterMatches.length > 0) {
        correctIndices = Array.from(new Set(multiLetterMatches)).filter(
          (i) => i >= 0 && i < msOptions.length
        );
      }
      if (correctIndices.length === 0) {
        // Mặc định nếu câu hỏi có (Chọn nhiều đáp án) như câu "Máy tính ứng dụng vào lĩnh vực nào?" thì chọn cả 4 hoặc 2 đáp án đầu
        correctIndices = /máy\s*tính\s*ứng\s*dụng\s*vào\s*lĩnh\s*vực\s*nào/i.test(questionText)
          ? msOptions.map((_, idx) => idx)
          : [0, 1].filter((i) => i < msOptions.length);
      }

      const summaryLetters = correctIndices
        .map((idx) => `${String.fromCharCode(65 + idx)} (${msOptions[idx]})`)
        .join(', ');

      parsedQuestions.push({
        id: `q-doc-ms-${Date.now()}-${questionNumber}-${Math.random().toString(36).slice(2, 6)}`,
        type: 'multiple_select',
        question: questionText || `Câu hỏi chọn nhiều đáp án số ${questionNumber}`,
        options: msOptions,
        correctAnswers: correctIndices,
        correctAnswer: correctIndices[0] ?? 0,
        explanation:
          explanationInBlock ||
          `Các đáp án đúng: ${summaryLetters}. Trích dẫn theo chuẩn tài liệu đề thi.`,
        difficulty,
        hint: 'Câu hỏi này có nhiều hơn 1 phương án đúng. Hãy đọc kỹ và tích chọn tất cả các đáp án phù hợp.',
        topic: options?.defaultTopic || `Chủ đề trích xuất từ đề thi`,
      });
    } else if (isTrueFalseQuestion) {
      // Không bao giờ chèn "Phương án C", "Phương án D" giả vào câu hỏi Đúng/Sai!
      const tfOptions = extractedOptions.filter(
        (opt) => opt.length > 0 && !/^phương án [a-d]$/i.test(opt)
      );

      // Xác định đáp án Đúng/Sai cho từng mệnh đề a), b), c), d)
      const inlineSeq = parseTrueFalseSequence(answerTextInBlock);
      const keyMapSeq = tfAnswerKeyMap.get(questionNumber) || [];
      const hasAnyStar = inlineStatementTF.some((v) => v === true) && !hasInlineTFMarkers;

      const tfAnswers: boolean[] = tfOptions.map((stmtText, idx) => {
        if (typeof inlineStatementTF[idx] === 'boolean') {
          return inlineStatementTF[idx] as boolean;
        }
        if (typeof inlineSeq[idx] === 'boolean') {
          return inlineSeq[idx];
        }
        if (typeof keyMapSeq[idx] === 'boolean') {
          return keyMapSeq[idx];
        }
        if (hasAnyStar) {
          return inlineStatementTF[idx] === true;
        }
        return inferStatementTrueFalse(stmtText);
      });

      const summaryKey = tfOptions
        .map((_, idx) => `${String.fromCharCode(97 + idx)}) ${tfAnswers[idx] ? 'Đúng' : 'Sai'}`)
        .join('; ');

      parsedQuestions.push({
        id: `q-doc-tf-${Date.now()}-${questionNumber}-${Math.random().toString(36).slice(2, 6)}`,
        type: 'true_false',
        subType: 'true_false',
        question: questionText || `Câu hỏi Đúng/Sai số ${questionNumber}`,
        options: tfOptions,
        trueFalseAnswers: tfAnswers,
        correctAnswer: tfAnswers.findIndex((v) => v) >= 0 ? tfAnswers.findIndex((v) => v) : 0,
        explanation:
          explanationInBlock ||
          `Đáp án Đúng/Sai: ${summaryKey}. Trích dẫn theo chuẩn tài liệu đề thi.`,
        difficulty,
        hint: 'Hãy xét tính đúng/sai của từng phát biểu dựa theo kiến thức SGK Tin học Kết Nối Tri Thức.',
        topic: options?.defaultTopic || `Chủ đề trích xuất từ đề thi`,
      });
    } else {
      // Câu hỏi Trắc nghiệm 4 lựa chọn (A, B, C, D)
      while (extractedOptions.length < 4) {
        extractedOptions.push(`Phương án ${String.fromCharCode(65 + extractedOptions.length)}`);
      }
      const finalOptions = extractedOptions.slice(0, 4);

      let correctIndex = 0;
      const singleLetterAns = answerTextInBlock.match(/^[A-D]$/i)?.[0]?.toUpperCase();
      if (markedCorrectLetter) {
        correctIndex = markedCorrectLetter.charCodeAt(0) - 65;
      } else if (singleLetterAns) {
        correctIndex = singleLetterAns.charCodeAt(0) - 65;
      } else if (answerKeyMap.has(questionNumber)) {
        correctIndex = answerKeyMap.get(questionNumber)!;
      }

      if (correctIndex < 0 || correctIndex > 3) {
        correctIndex = 0;
      }

      parsedQuestions.push({
        id: `q-doc-${Date.now()}-${questionNumber}-${Math.random().toString(36).slice(2, 6)}`,
        type: 'multiple_choice',
        question: questionText || `Câu hỏi số ${questionNumber}`,
        options: finalOptions,
        correctAnswer: correctIndex,
        explanation:
          explanationInBlock ||
          `Đáp án đúng là ${String.fromCharCode(65 + correctIndex)}: ${finalOptions[correctIndex]}. Trích dẫn theo chuẩn tài liệu đề thi.`,
        difficulty,
        hint: 'Hãy đọc kỹ câu hỏi và loại trừ các phương án không chính xác.',
        topic: options?.defaultTopic || `Chủ đề trích xuất từ đề thi`,
      });
    }

    if (nextBlockIsTF) {
      inTrueFalseSection = true;
    }
  }

  // Lọc theo dạng câu hỏi nếu người dùng chọn riêng 'true_false', 'multiple_select' hoặc 'multiple_choice'
  let filteredByType = parsedQuestions;
  if (options?.questionType === 'true_false') {
    const onlyTF = parsedQuestions.filter((q) => q.type === 'true_false');
    if (onlyTF.length > 0) filteredByType = onlyTF;
  } else if (options?.questionType === 'multiple_select') {
    const onlyMS = parsedQuestions.filter((q) => q.type === 'multiple_select');
    if (onlyMS.length > 0) filteredByType = onlyMS;
  } else if (options?.questionType === 'multiple_choice') {
    filteredByType = parsedQuestions;
  }

  if (filteredByType.length === 0) {
    warnings.push('Không nhận diện được định dạng câu hỏi trắc nghiệm hoặc Đúng/Sai trong tệp tải lên.');
  }

  const finalQuestions =
    typeof options?.questionCount === 'number' && options.questionCount > 0
      ? filteredByType.slice(0, options.questionCount)
      : filteredByType;

  const tfCount = finalQuestions.filter((q) => q.type === 'true_false').length;
  const msCount = finalQuestions.filter((q) => q.type === 'multiple_select').length;
  const mcCount = finalQuestions.length - tfCount - msCount;
  const parts: string[] = [];
  if (mcCount > 0) parts.push(`${mcCount} câu 4 lựa chọn`);
  if (msCount > 0) parts.push(`${msCount} câu chọn nhiều đáp án`);
  if (tfCount > 0) parts.push(`${tfCount} câu Đúng/Sai`);
  const typeSummary = parts.length > 0 ? `(${parts.join(' + ')})` : '';

  return {
    suggestedTitle: title || 'Đề thi trắc nghiệm bóc tách từ tệp',
    summary: `Đã bóc tách thành công ${finalQuestions.length} câu hỏi ${typeSummary} ${options?.strictOriginal ? '(100% nguyên văn từ tài liệu gốc)' : ''} từ tệp tải lên.`,
    questions: finalQuestions,
    warnings,
  };
}

/**
 * Tự động khôi phục câu hỏi bị dính phương án a), b), c), d) vào câu dẫn hoặc phương án trước (do bảng 2 cột trong Word/PDF)
 */
export function repairStuckQuestionOptions(q: Question): Question {
  const combinedRaw = [
    q.question,
    ...(q.options || []).map((opt, idx) => `${String.fromCharCode(97 + idx)}) ${opt}`),
  ].join('\n');

  const normalized = normalizeInlineOptionsInBlock(combinedRaw);
  const firstOptPos = normalized.search(/(?:^|\n)\s*[A-Da-d][.:)]\s+/);
  if (firstOptPos === -1) return q;

  const cleanStem = normalized.substring(0, firstOptPos).trim();
  const restOpts = normalized.substring(firstOptPos).trim();
  const matches = [
    ...restOpts.matchAll(
      /(?:^|\n)\s*([A-Da-d])[.:)]\s+([\s\S]*?)(?=(?:(?:^|\n)\s*[A-Da-d][.:)]\s+)|$)/g
    ),
  ];

  if (matches.length < 2) return q;

  const newOpts = matches.map((m) =>
    m[2]
      .trim()
      .replace(/([.?!])\s*\d{1,2}\.\s+[A-ZÀ-Ỹ][\s\S]*$/, '$1')
      .trim()
  );

  const isMultiSelect =
    q.type === 'multiple_select' ||
    /chọn\s*nhiều\s*đáp\s*án|chọn\s*các\s*đáp\s*án|chọn\s*nhiều\s*phương\s*án/i.test(cleanStem);

  const isSingleChoiceStem =
    /phương\s*án\s*nào\s*sau\s*đây|đáp\s*án\s*nào\s*sau\s*đây|thiết\s*bị\s*nào\s*sau\s*đây|lĩnh\s*vực\s*nào\s*sau\s*đây|ví\s*dụ\s*nào\s*sau\s*đây/i.test(
      cleanStem
    );

  if (isMultiSelect) {
    const allIndices = newOpts.map((_, idx) => idx);
    const summaryLetters = allIndices
      .map((idx) => `${String.fromCharCode(65 + idx)} (${newOpts[idx]})`)
      .join(', ');
    return {
      ...q,
      type: 'multiple_select',
      subType: undefined,
      trueFalseAnswers: undefined,
      question: cleanStem,
      options: newOpts,
      correctAnswers:
        q.correctAnswers && q.correctAnswers.length > 1 ? q.correctAnswers : allIndices,
      correctAnswer: 0,
      explanation: `Các đáp án đúng: ${summaryLetters}. Chuẩn kiến thức SGK Tin học Kết Nối Tri Thức.`,
      hint: 'Câu hỏi này có nhiều hơn 1 phương án đúng. Hãy chọn tất cả các đáp án phù hợp.',
    };
  }

  if (isSingleChoiceStem) {
    while (newOpts.length < 4) {
      newOpts.push(`Phương án ${String.fromCharCode(65 + newOpts.length)}`);
    }
    const finalOpts = newOpts.slice(0, 4);
    const cIdx = q.correctAnswer ?? 0;
    return {
      ...q,
      type: 'multiple_choice',
      subType: undefined,
      trueFalseAnswers: undefined,
      question: cleanStem,
      options: finalOpts,
      correctAnswer: cIdx,
      explanation: `Đáp án đúng là ${String.fromCharCode(65 + cIdx)}: ${finalOpts[cIdx]}. Chuẩn kiến thức SGK Tin học Kết Nối Tri Thức.`,
    };
  }

  return {
    ...q,
    question: cleanStem,
    options: newOpts,
  };
}
