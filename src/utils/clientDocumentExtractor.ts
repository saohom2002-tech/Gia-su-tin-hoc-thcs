import { Question } from '../types/quiz';
import { parseQuestionsFromRawText } from './documentQuestionParser';

export interface ClientDocumentParseRequest {
  fileBase64: string;
  filename: string;
  mimeType?: string;
  gradeNumber?: number;
  examCategory?: 'exam' | 'practice';
  questionType?: 'multiple_choice' | 'true_false' | 'fill_blank' | 'all';
  questionCount?: 'all' | number;
  difficultyMode?: 'original' | 'tong_hop' | 'de' | 'trung_binh' | 'kho';
  strictOriginal?: boolean;
  autoGenerateAnswerIfMissing?: boolean;
  apiKey?: string;
}

export interface ClientDocumentParseResponse {
  success: boolean;
  source: 'gemini_ai' | 'offline_parser';
  suggestedTitle: string;
  summary: string;
  questions: Question[];
  totalQuestions: number;
  warnings?: string[];
  rawTextLength?: number;
  message?: string;
}

/**
 * Chuyển chuỗi Base64 (Data URL hoặc raw base64) thành Uint8Array an toàn trên trình duyệt
 */
function base64ToUint8Array(fileBase64: string): Uint8Array {
  const cleanBase64 = fileBase64.includes(',')
    ? fileBase64.split(',')[1]
    : fileBase64.replace(/^data:[^;]+;base64,/, '');
  const binaryString = atob(cleanBase64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * Trích xuất văn bản từ tệp PDF trực tiếp trên trình duyệt bằng pdfjs-dist
 */
async function extractTextFromPdfInBrowser(bytes: Uint8Array): Promise<string> {
  const pdfjs: any = await import('pdfjs-dist/legacy/build/pdf.mjs');

  if (pdfjs?.GlobalWorkerOptions && !pdfjs.GlobalWorkerOptions.workerSrc) {
    try {
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/legacy/build/pdf.worker.mjs',
        import.meta.url
      ).href;
    } catch {
      pdfjs.GlobalWorkerOptions.workerSrc =
        'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/legacy/build/pdf.worker.min.mjs';
    }
  }

  let doc: any;
  try {
    const loadingTask = pdfjs.getDocument({
      data: bytes.slice(0),
      useSystemFonts: true,
    });
    doc = await loadingTask.promise;
  } catch (workerErr) {
    // Fallback sang CDN worker nếu bundler worker gặp lỗi môi trường
    if (pdfjs?.GlobalWorkerOptions) {
      pdfjs.GlobalWorkerOptions.workerSrc =
        'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/legacy/build/pdf.worker.min.mjs';
    }
    const retryTask = pdfjs.getDocument({
      data: bytes.slice(0),
      useSystemFonts: true,
    });
    doc = await retryTask.promise;
  }

  const pageTexts: string[] = [];

  for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1 });
    const textContent = await page.getTextContent();

    let pageLines = '';
    let lastX: number | undefined;
    let lastY: number | undefined;
    let lineHeight = 0;

    for (const item of textContent.items as any[]) {
      if (!('str' in item)) continue;
      const str = String(item.str || '');
      const tm = item.transform || [1, 0, 0, 1, 0, 0];
      const [x, y] = viewport.convertToViewportPoint(tm[4], tm[5]);
      const itemHeight = Math.abs(item.height || tm[3] || 10);
      const itemWidth = Math.abs(item.width || 0);

      if (lastY !== undefined) {
        const yDiff = Math.abs(lastY - y);
        const threshold = Math.max(4.2, lineHeight * 0.45);
        if (yDiff > threshold) {
          if (!pageLines.endsWith('\n')) {
            pageLines += '\n';
          }
          lastX = undefined;
          lineHeight = 0;
        } else if (lastX !== undefined) {
          const xGap = x - lastX;
          if (xGap > 14) {
            // Khoảng cách cột rộng (thường là các phương án A.   B.   C.   D. nằm ngang)
            pageLines += '   ';
          } else if (
            xGap > 1.8 &&
            !pageLines.endsWith(' ') &&
            !pageLines.endsWith('\n') &&
            !str.startsWith(' ')
          ) {
            pageLines += ' ';
          }
        }
      }

      pageLines += str;
      lastX = x + itemWidth;
      lastY = y;
      lineHeight = Math.max(lineHeight, itemHeight);

      if (item.hasEOL && !pageLines.endsWith('\n')) {
        pageLines += '\n';
        lastX = undefined;
        lineHeight = 0;
      }
    }

    pageTexts.push(pageLines.trim());
    page.cleanup();
  }

  await doc.destroy();
  return pageTexts.join('\n\n').normalize('NFC');
}

/**
 * Trích xuất văn bản từ tệp Word (.docx) trực tiếp trên trình duyệt bằng mammoth
 */
async function extractTextFromDocxInBrowser(bytes: Uint8Array): Promise<string> {
  const mammothModule: any = await import('mammoth');
  const mammoth = mammothModule.default || mammothModule;
  const arrayBuffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const result = await mammoth.extractRawText({ arrayBuffer });
  return (result?.value || '').normalize('NFC');
}

/**
 * Bóc tách câu hỏi từ tệp PDF / Word (.docx) / Text (.txt) trực tiếp trên trình duyệt
 * (Hoạt động độc lập trên cả Vercel static hosting lẫn localhost)
 */
export async function parseExamDocumentClientSide(
  req: ClientDocumentParseRequest
): Promise<ClientDocumentParseResponse> {
  const {
    fileBase64,
    filename = 'exam_document',
    mimeType = '',
    gradeNumber = 8,
    examCategory = 'exam',
    questionType = 'all',
    questionCount = 'all',
    difficultyMode = 'original',
    strictOriginal = true,
    autoGenerateAnswerIfMissing = true,
    apiKey = '',
  } = req;

  const bytes = base64ToUint8Array(fileBase64);
  const lowerFilename = filename.toLowerCase();
  const isDocx =
    lowerFilename.endsWith('.docx') ||
    mimeType.includes('wordprocessingml') ||
    mimeType.includes('docx');
  const isPdf = lowerFilename.endsWith('.pdf') || mimeType.includes('pdf');
  const isTxt = lowerFilename.endsWith('.txt') || mimeType.includes('text/plain');

  let rawText = '';

  if (isDocx) {
    rawText = await extractTextFromDocxInBrowser(bytes);
  } else if (isPdf) {
    rawText = await extractTextFromPdfInBrowser(bytes);
  } else if (isTxt) {
    rawText = new TextDecoder('utf-8').decode(bytes).normalize('NFC');
  } else {
    throw new Error(
      'Định dạng tệp chưa được hỗ trợ. Vui lòng chọn tệp .pdf, .docx hoặc .txt!'
    );
  }

  // Kiểm tra nếu người dùng có cấu hình Gemini API Key và muốn dùng AI hoặc file PDF là bản scan ảnh
  const savedApiKey =
    apiKey?.trim() ||
    (typeof window !== 'undefined' ? localStorage.getItem('ontap_gemini_api_key')?.trim() : '') ||
    '';

  if (savedApiKey && (!strictOriginal || (isPdf && rawText.trim().length < 40))) {
    try {
      const { GoogleGenAI, Type } = await import('@google/genai');
      const client = new GoogleGenAI({ apiKey: savedApiKey });
      const cleanBase64 = fileBase64.includes(',')
        ? fileBase64.split(',')[1]
        : fileBase64.replace(/^data:[^;]+;base64,/, '');

      const prompt = `Bạn là chuyên gia thẩm định và bóc tách đề thi Tin học Tiểu học & THCS theo chuẩn Chương trình GDPT 2018 (SGK Kết Nối Tri Thức).
Hãy bóc tách toàn bộ câu hỏi từ tài liệu đề thi "${filename}" (Khối ${gradeNumber}, ${examCategory === 'exam' ? 'Đề kiểm tra' : 'Đề ôn tập'}).
Giữ nguyên 100% nội dung câu hỏi và các phương án từ tài liệu gốc.
Với câu hỏi Trắc nghiệm 4 lựa chọn (A, B, C, D): đặt "type": "multiple_choice", "options" gồm 4 phương án (đã bỏ nhãn A., B., C., D.), "correctAnswer" là 0, 1, 2 hoặc 3.
Với câu hỏi Đúng/Sai nhiều ý (a, b, c, d): đặt "type": "true_false", "options" gồm các phát biểu (đã bỏ nhãn a), b), c), d)), "trueFalseAnswers" là mảng boolean [true, false, ...] tương ứng từng ý.`;

      const contents: any[] =
        isPdf && rawText.trim().length < 40
          ? [{ inlineData: { mimeType: 'application/pdf', data: cleanBase64 } }, prompt]
          : [`${prompt}\n\nNội dung văn bản trích xuất:\n"""\n${rawText.slice(0, 45000)}\n"""`];

      const aiResp = await client.models.generateContent({
        model: 'gemini-2.5-flash',
        contents,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              suggestedTitle: { type: Type.STRING },
              summary: { type: Type.STRING },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    type: { type: Type.STRING },
                    question: { type: Type.STRING },
                    options: { type: Type.ARRAY, items: { type: Type.STRING } },
                    correctAnswer: { type: Type.INTEGER },
                    trueFalseAnswers: { type: Type.ARRAY, items: { type: Type.BOOLEAN } },
                    explanation: { type: Type.STRING },
                    difficulty: { type: Type.STRING },
                    hint: { type: Type.STRING },
                    topic: { type: Type.STRING },
                  },
                  required: ['question', 'options', 'explanation', 'difficulty'],
                },
              },
            },
            required: ['questions'],
          },
        },
      });

      const parsed = JSON.parse(aiResp.text || '{}');
      if (Array.isArray(parsed.questions) && parsed.questions.length > 0) {
        const mappedQuestions: Question[] = parsed.questions.map((q: any, idx: number) => {
          const isTF =
            q.type === 'true_false' ||
            (Array.isArray(q.trueFalseAnswers) && q.trueFalseAnswers.length > 0);
          const opts =
            Array.isArray(q.options) && q.options.length > 0 ? q.options : ['A', 'B', 'C', 'D'];
          const tfAns = isTF
            ? opts.map((_: string, oIdx: number) =>
                Array.isArray(q.trueFalseAnswers) && typeof q.trueFalseAnswers[oIdx] === 'boolean'
                  ? q.trueFalseAnswers[oIdx]
                  : oIdx === (q.correctAnswer ?? 0)
              )
            : undefined;

          return {
            id: `q-doc-ai-${Date.now()}-${idx + 1}-${Math.random().toString(36).slice(2, 6)}`,
            type: isTF ? 'true_false' : 'multiple_choice',
            subType: isTF ? 'true_false' : undefined,
            question: q.question,
            options: isTF
              ? opts
              : opts.length === 4
              ? opts
              : [...opts, ...Array(Math.max(0, 4 - opts.length)).fill('')].slice(0, 4),
            correctAnswer:
              typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer <= 3
                ? q.correctAnswer
                : 0,
            trueFalseAnswers: tfAns,
            explanation:
              q.explanation || 'Giải thích chuẩn kiến thức Tin học SGK Kết Nối Tri Thức.',
            difficulty: ['de', 'trung_binh', 'kho'].includes(q.difficulty)
              ? q.difficulty
              : 'trung_binh',
            hint: q.hint || 'Hãy đọc kỹ câu hỏi và các phương án.',
            topic: q.topic || `Tin học ${gradeNumber}`,
          };
        });

        return {
          success: true,
          source: 'gemini_ai',
          suggestedTitle: parsed.suggestedTitle || filename.replace(/\.[^/.]+$/, ''),
          summary:
            parsed.summary ||
            `Đã bóc tách thành công ${mappedQuestions.length} câu hỏi từ tệp ${filename}.`,
          questions: mappedQuestions,
          totalQuestions: mappedQuestions.length,
          rawTextLength: rawText.length,
        };
      }
    } catch (aiErr) {
      console.warn('Browser Gemini AI fallback sang bộ phân tích nội bộ:', aiErr);
    }
  }

  // Bóc tách bằng bộ phân tích cấu trúc đề thi chuẩn (hỗ trợ Trắc nghiệm A,B,C,D & Đúng/Sai a,b,c,d)
  const parsedResult = parseQuestionsFromRawText(rawText, {
    defaultTopic: `Tin học ${gradeNumber}`,
    gradeNumber,
    questionType,
    questionCount: typeof questionCount === 'number' ? questionCount : 'all',
    strictOriginal: !!strictOriginal,
    autoGenerateAnswerIfMissing: !!autoGenerateAnswerIfMissing,
    fallbackDifficulty: ['de', 'trung_binh', 'kho'].includes(difficultyMode)
      ? (difficultyMode as 'de' | 'trung_binh' | 'kho')
      : 'trung_binh',
  });

  if (parsedResult.questions.length === 0) {
    const emptyReason =
      isPdf && rawText.trim().length < 20
        ? 'Tệp PDF này là bản quét hình ảnh (scan) không chứa lớp văn bản trực tiếp. Bạn hãy nhập Gemini API Key ở mục Cài đặt AI để đọc PDF dạng ảnh scan, hoặc tải lên bản Word (.docx) / PDF xuất từ Word nhé!'
        : 'Không tìm thấy câu hỏi hợp lệ trong tệp! Vui lòng đảm bảo các câu hỏi bắt đầu bằng "Câu 1:", "Câu 2:" kèm các phương án A., B., C., D. hoặc a), b), c), d).';
    return {
      success: false,
      source: 'offline_parser',
      suggestedTitle: filename.replace(/\.[^/.]+$/, ''),
      summary: '',
      questions: [],
      totalQuestions: 0,
      warnings: parsedResult.warnings,
      rawTextLength: rawText.length,
      message: emptyReason,
    };
  }

  return {
    success: true,
    source: 'offline_parser',
    suggestedTitle: parsedResult.suggestedTitle || filename.replace(/\.[^/.]+$/, ''),
    summary: parsedResult.summary,
    questions: parsedResult.questions,
    totalQuestions: parsedResult.questions.length,
    warnings: parsedResult.warnings,
    rawTextLength: rawText.length,
  };
}
