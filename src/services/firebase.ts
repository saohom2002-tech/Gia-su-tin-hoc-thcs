import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase, ref, set, get, onValue, remove } from 'firebase/database';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { StudentScoreRecord, CustomExam, Question } from '../types/quiz';
import { DEFAULT_CUSTOM_EXAMS } from '../data/defaultCustomExams';
import { BUILT_IN_QUESTIONS } from '../data/questionBank';

export const firebaseConfig = {
  apiKey: 'AIzaSyA03JGC5MofF0WZTbChvY3Z2T6Eego6MmE',
  authDomain: 'gstinhoc.firebaseapp.com',
  databaseURL: 'https://gstinhoc-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'gstinhoc',
  storageBucket: 'gstinhoc.firebasestorage.app',
  messagingSenderId: '932677144311',
  appId: '1:932677144311:web:396e0c28dc4b784ff14df2',
  measurementId: 'G-77J4Y3QJT7',
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getDatabase(app);
export const auth = getAuth(app);

// ============================================================================
// ADMIN CONSTANTS & AUTHENTICATION (CHỈ DÀNH CHO saohom2002@gmail.com)
// ============================================================================
export const ADMIN_EMAIL = 'saohom2002@gmail.com';
const ADMIN_SESSION_KEY = 'ontap_admin_session_info';
const ADMIN_PASSCODE_KEY = 'ontap_admin_secure_passcode';
const DEFAULT_ADMIN_PASSCODE = 'saohom@2002';

export interface AdminSession {
  email: string;
  displayName: string;
  photoURL?: string;
  authType: 'google' | 'passcode';
  loginTime: number;
}

/**
 * Kiểm tra xem một email có phải là admin saohom2002@gmail.com hay không
 */
export function isAuthorizedAdmin(email?: string | null): boolean {
  if (!email) return false;
  return email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

/**
 * Đọc phiên đăng nhập admin hiện tại từ localStorage
 */
export function getStoredAdminSession(): AdminSession | null {
  try {
    const raw = localStorage.getItem(ADMIN_SESSION_KEY);
    if (!raw) return null;
    const session: AdminSession = JSON.parse(raw);
    if (session && isAuthorizedAdmin(session.email)) {
      return session;
    }
  } catch (e) {
    console.error('Lỗi đọc admin session:', e);
  }
  return null;
}

/**
 * Lưu phiên đăng nhập admin
 */
export function saveAdminSession(session: AdminSession): void {
  try {
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
  } catch (e) {
    console.error('Lỗi lưu admin session:', e);
  }
}

/**
 * Xóa phiên đăng nhập admin
 */
export function clearAdminSession(): void {
  try {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  } catch (e) {
    console.error('Lỗi xóa admin session:', e);
  }
}

/**
 * Đăng nhập Admin bằng Google Popup
 */
export async function signInAdminWithGoogle(): Promise<{
  success: boolean;
  session?: AdminSession;
  error?: string;
}> {
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (!isAuthorizedAdmin(user.email)) {
      // Đăng xuất ngay lập tức nếu không phải saohom2002@gmail.com
      await signOut(auth);
      clearAdminSession();
      return {
        success: false,
        error: `Quyền truy cập bị từ chối! Email "${user.email}" không có quyền Quản trị viên. Chỉ có ${ADMIN_EMAIL} mới được phép truy cập Studio.`,
      };
    }

    const session: AdminSession = {
      email: user.email!,
      displayName: user.displayName || 'Quản trị viên (Ms. Trúc)',
      photoURL: user.photoURL || undefined,
      authType: 'google',
      loginTime: Date.now(),
    };
    saveAdminSession(session);
    return { success: true, session };
  } catch (err: any) {
    console.error('Lỗi đăng nhập Google Admin:', err);
    return {
      success: false,
      error: err.message || 'Đăng nhập Google thất bại. Vui lòng thử lại hoặc dùng mật mã quản trị.',
    };
  }
}

/**
 * Đăng nhập Admin bằng Mã bảo vệ Quản trị viên
 */
export function signInAdminWithPasscode(passcode: string): {
  success: boolean;
  session?: AdminSession;
  error?: string;
} {
  try {
    const savedCode = localStorage.getItem(ADMIN_PASSCODE_KEY) || DEFAULT_ADMIN_PASSCODE;
    if (passcode.trim() === savedCode.trim()) {
      const session: AdminSession = {
        email: ADMIN_EMAIL,
        displayName: 'Quản trị viên (saohom2002)',
        authType: 'passcode',
        loginTime: Date.now(),
      };
      saveAdminSession(session);
      return { success: true, session };
    }
    return {
      success: false,
      error: 'Mật mã quản trị viên không chính xác! Vui lòng kiểm tra lại.',
    };
  } catch (err: any) {
    return { success: false, error: 'Đã có lỗi xảy ra khi xác thực mật mã.' };
  }
}

/**
 * Đổi mật mã quản trị viên (chỉ thực hiện khi đã đăng nhập Admin)
 */
export function changeAdminPasscode(newPasscode: string): boolean {
  if (!newPasscode || newPasscode.trim().length < 4) return false;
  try {
    localStorage.setItem(ADMIN_PASSCODE_KEY, newPasscode.trim());
    return true;
  } catch {
    return false;
  }
}

/**
 * Đăng xuất Admin
 */
export async function signOutAdmin(): Promise<void> {
  try {
    await signOut(auth);
  } catch (e) {
    // Ignore sign out errors
  }
  clearAdminSession();
}

// ============================================================================
// STUDENT SCORES
// ============================================================================
const SCORES_REF_PATH = 'ontap_scores';

export function subscribeToScores(
  onSuccess: (scores: StudentScoreRecord[]) => void,
  onError?: (err: Error) => void
): () => void {
  const scoresRef = ref(db, SCORES_REF_PATH);

  const unsubscribe = onValue(
    scoresRef,
    (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const scoreList: StudentScoreRecord[] = Object.keys(data).map((key) => {
          return {
            ...data[key],
            id: data[key].id || key,
          };
        });
        scoreList.sort((a, b) => (b.date || 0) - (a.date || 0));
        onSuccess(scoreList);
      } else {
        onSuccess([]);
      }
    },
    (error) => {
      console.warn('Lỗi đọc Firebase Realtime Database (Scores):', error);
      if (onError) onError(error);
    }
  );

  return unsubscribe;
}

export async function saveScoreToFirebase(score: StudentScoreRecord): Promise<boolean> {
  try {
    const scoreRef = ref(db, `${SCORES_REF_PATH}/${score.id}`);
    await set(scoreRef, JSON.parse(JSON.stringify(score)));
    return true;
  } catch (error) {
    console.error('Lỗi lưu điểm lên Firebase:', error);
    return false;
  }
}

export async function deleteScoreFromFirebase(scoreId: string): Promise<boolean> {
  try {
    const scoreRef = ref(db, `${SCORES_REF_PATH}/${scoreId}`);
    await remove(scoreRef);
    return true;
  } catch (error) {
    console.error('Lỗi xóa điểm khỏi Firebase:', error);
    return false;
  }
}

export async function syncBatchScoresToFirebase(scores: StudentScoreRecord[]): Promise<boolean> {
  try {
    const scoresRef = ref(db, SCORES_REF_PATH);
    const snapshot = await get(scoresRef);

    if (!snapshot.exists()) {
      const payload: Record<string, StudentScoreRecord> = {};
      scores.forEach((s) => {
        payload[s.id] = JSON.parse(JSON.stringify(s));
      });
      await set(scoresRef, payload);
      return true;
    }
    return false;
  } catch (error) {
    console.warn('Lỗi kiểm tra / đồng bộ điểm ban đầu lên Firebase:', error);
    return false;
  }
}

// ============================================================================
// ADMIN CUSTOM EXAMS & PRACTICE TESTS (ĐỀ THI & ĐỀ ÔN TẬP TỪ ADMIN)
// ============================================================================
const CUSTOM_EXAMS_REF_PATH = 'admin_custom_exams';
const LOCAL_CUSTOM_EXAMS_KEY = 'ontap_admin_custom_exams';
const LOCAL_DELETED_EXAMS_KEY = 'ontap_deleted_custom_exam_ids';

/**
 * Loại bỏ toàn bộ thuộc tính có giá trị undefined trước khi lưu lên Firebase Realtime Database
 * (Firebase set() sẽ báo lỗi nếu bên trong câu hỏi có thuộc tính undefined như subType: undefined)
 */
function sanitizeForFirebase<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

function getDeletedExamIds(): Set<string> {
  try {
    const raw = localStorage.getItem(LOCAL_DELETED_EXAMS_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) return new Set(arr);
    }
  } catch {}
  return new Set();
}

function markExamIdDeleted(examId: string): void {
  try {
    const setIds = getDeletedExamIds();
    setIds.add(examId);
    localStorage.setItem(LOCAL_DELETED_EXAMS_KEY, JSON.stringify(Array.from(setIds)));
  } catch {}
}

/**
 * Đọc đề thi từ LocalStorage dự phòng
 */
export function getLocalCustomExams(): CustomExam[] {
  try {
    const raw = localStorage.getItem(LOCAL_CUSTOM_EXAMS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {}
  return DEFAULT_CUSTOM_EXAMS;
}

/**
 * Lưu đề thi vào LocalStorage
 */
export function saveLocalCustomExams(exams: CustomExam[]): void {
  try {
    localStorage.setItem(LOCAL_CUSTOM_EXAMS_KEY, JSON.stringify(exams));
  } catch (e) {
    console.error('Lỗi lưu custom exams vào LocalStorage:', e);
  }
}

/**
 * Chuẩn hóa cấu trúc đề thi đọc về từ Firebase (đảm bảo questions, options, trueFalseAnswers luôn là mảng)
 */
function normalizeRemoteExam(rawExam: any, fallbackKey: string): CustomExam {
  const rawQuestions = Array.isArray(rawExam?.questions)
    ? rawExam.questions
    : rawExam?.questions && typeof rawExam.questions === 'object'
    ? Object.values(rawExam.questions)
    : [];

  const questions = rawQuestions.map((q: any) => ({
    ...q,
    options: Array.isArray(q?.options)
      ? q.options
      : q?.options && typeof q.options === 'object'
      ? Object.values(q.options)
      : [],
    ...(q?.trueFalseAnswers
      ? {
          trueFalseAnswers: Array.isArray(q.trueFalseAnswers)
            ? q.trueFalseAnswers
            : Object.values(q.trueFalseAnswers),
        }
      : {}),
  }));

  return {
    ...rawExam,
    id: rawExam?.id || fallbackKey,
    questions,
  };
}

/**
 * Lắng nghe thay đổi đề thi thời gian thực từ Firebase Realtime Database
 * Tự động hợp nhất và đẩy các đề thi mới ở LocalStorage (chưa kịp đồng bộ trước đó) lên Firebase
 */
export function subscribeToCustomExams(
  onSuccess: (exams: CustomExam[]) => void,
  onError?: (err: Error) => void
): () => void {
  const examsRef = ref(db, CUSTOM_EXAMS_REF_PATH);

  const unsubscribe = onValue(
    examsRef,
    (snapshot) => {
      const localExams = getLocalCustomExams();
      const deletedIds = getDeletedExamIds();

      if (snapshot.exists()) {
        const data = snapshot.val();
        const remoteMap = new Map<string, CustomExam>();
        Object.keys(data).forEach((key) => {
          const norm = normalizeRemoteExam(data[key], key);
          remoteMap.set(norm.id, norm);
        });

        // Kiểm tra xem ở máy hiện tại (VD: localhost) có đề thi nào mới tạo hoặc mới cập nhật hơn trên Firebase không
        for (const localEx of localExams) {
          if (deletedIds.has(localEx.id)) continue;
          const remoteEx = remoteMap.get(localEx.id);
          if (!remoteEx || (localEx.updatedAt || 0) > (remoteEx.updatedAt || 0)) {
            remoteMap.set(localEx.id, localEx);
            // Tự động đẩy đề thi còn thiếu hoặc bản mới hơn ở Local lên Firebase để Vercel nhận được ngay
            const singleRef = ref(db, `${CUSTOM_EXAMS_REF_PATH}/${localEx.id}`);
            set(singleRef, sanitizeForFirebase(localEx)).catch((err) =>
              console.warn('Lỗi tự động đồng bộ đề local lên Firebase:', err)
            );
          }
        }

        const examList = Array.from(remoteMap.values());
        examList.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
        saveLocalCustomExams(examList);
        onSuccess(examList);
      } else {
        // Nếu Firebase chưa có, lấy từ Local hoặc Đề mẫu và đẩy lên Firebase
        onSuccess(localExams);
        syncInitialCustomExamsToFirebase();
      }
    },
    (error) => {
      console.warn('Lỗi đọc Firebase Realtime Database (Custom Exams):', error);
      const local = getLocalCustomExams();
      onSuccess(local);
      if (onError) onError(error);
    }
  );

  return unsubscribe;
}

/**
 * Lưu 1 đề thi lên Firebase và LocalStorage
 */
export async function saveCustomExamToFirebase(exam: CustomExam): Promise<boolean> {
  try {
    const cleanExam = sanitizeForFirebase(exam);

    // Lưu ngay vào local
    const current = getLocalCustomExams();
    const existingIndex = current.findIndex((e) => e.id === cleanExam.id);
    let updated: CustomExam[];
    if (existingIndex >= 0) {
      updated = [...current];
      updated[existingIndex] = cleanExam;
    } else {
      updated = [cleanExam, ...current];
    }
    saveLocalCustomExams(updated);

    // Đẩy lên Firebase (đã loại bỏ các trường undefined để không bị Firebase từ chối)
    const examRef = ref(db, `${CUSTOM_EXAMS_REF_PATH}/${cleanExam.id}`);
    await set(examRef, cleanExam);

    // Nếu đây là Ngân hàng câu hỏi của Chủ đề / Bài học SGK (id bắt đầu bằng 'topic-bank-'),
    // tự động cập nhật trực tiếp vào BUILT_IN_QUESTIONS và node curriculum_bank trên Firebase
    if (cleanExam.id.startsWith('topic-bank-')) {
      const lessonId = cleanExam.id.replace(/^topic-bank-/, '');
      if (lessonId) {
        await saveCurriculumTopicQuestionsToFirebase(
          lessonId,
          cleanExam.title,
          cleanExam.gradeNumber,
          cleanExam.questions || []
        );
      }
    }

    return true;
  } catch (error) {
    console.error('Lỗi lưu đề thi lên Firebase:', error);
    // Vẫn trả về true nếu local đã lưu thành công
    return true;
  }
}

/**
 * Xóa 1 đề thi khỏi Firebase và LocalStorage
 */
export async function deleteCustomExamFromFirebase(examId: string): Promise<boolean> {
  try {
    markExamIdDeleted(examId);
    // Xóa trong local
    const current = getLocalCustomExams();
    const updated = current.filter((e) => e.id !== examId);
    saveLocalCustomExams(updated);

    // Xóa trên Firebase
    const examRef = ref(db, `${CUSTOM_EXAMS_REF_PATH}/${examId}`);
    await remove(examRef);
    return true;
  } catch (error) {
    console.error('Lỗi xóa đề thi khỏi Firebase:', error);
    return true;
  }
}

/**
 * Đồng bộ toàn bộ đề thi từ LocalStorage lên Firebase Realtime Database
 */
export async function syncInitialCustomExamsToFirebase(): Promise<boolean> {
  try {
    const examsRef = ref(db, CUSTOM_EXAMS_REF_PATH);
    const snapshot = await get(examsRef);
    const localExams = getLocalCustomExams();
    const deletedIds = getDeletedExamIds();

    if (!snapshot.exists()) {
      const payload: Record<string, CustomExam> = {};
      localExams.forEach((e) => {
        if (!deletedIds.has(e.id)) {
          payload[e.id] = sanitizeForFirebase(e);
        }
      });
      await set(examsRef, payload);
      return true;
    } else {
      const remoteData = snapshot.val() || {};
      let syncedAny = false;
      for (const localEx of localExams) {
        if (deletedIds.has(localEx.id)) continue;
        const remoteEx = remoteData[localEx.id];
        if (!remoteEx || (localEx.updatedAt || 0) > (remoteEx.updatedAt || 0)) {
          const singleRef = ref(db, `${CUSTOM_EXAMS_REF_PATH}/${localEx.id}`);
          await set(singleRef, sanitizeForFirebase(localEx));
          syncedAny = true;
        }
      }
      return syncedAny;
    }
  } catch (error) {
    console.warn('Lỗi đồng bộ đề thi ban đầu lên Firebase:', error);
    return false;
  }
}

// ============================================================================
// NGÂN HÀNG CÂU HỎI THEO CHỦ ĐỀ / BÀI HỌC SGK (curriculum_bank)
// ============================================================================
const CURRICULUM_BANK_REF_PATH = 'curriculum_bank';
const LOCAL_CURRICULUM_BANK_KEY = 'ontap_curriculum_custom_questions';

export function getLocalCurriculumBankOverrides(): Record<string, Question[]> {
  try {
    const raw = localStorage.getItem(LOCAL_CURRICULUM_BANK_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    }
  } catch {}
  return {};
}

export async function saveCurriculumTopicQuestionsToFirebase(
  lessonId: string,
  lessonTitle: string,
  gradeNumber: number,
  questions: Question[]
): Promise<boolean> {
  try {
    const cleanQuestions = sanitizeForFirebase(questions);
    // 1. Cập nhật trực tiếp vào BUILT_IN_QUESTIONS trong bộ nhớ để áp dụng ngay lập tức
    BUILT_IN_QUESTIONS[lessonId] = cleanQuestions;

    // 2. Lưu vào LocalStorage
    const overrides = getLocalCurriculumBankOverrides();
    overrides[lessonId] = cleanQuestions;
    localStorage.setItem(LOCAL_CURRICULUM_BANK_KEY, JSON.stringify(overrides));

    // 3. Đồng bộ lên Firebase node curriculum_bank/{lessonId}
    const topicRef = ref(db, `${CURRICULUM_BANK_REF_PATH}/${lessonId}`);
    await set(topicRef, {
      lessonId,
      title: lessonTitle,
      gradeNumber,
      questionCount: cleanQuestions.length,
      questions: cleanQuestions,
      updatedAt: Date.now(),
    });
    return true;
  } catch (err) {
    console.error('Lỗi lưu ngân hàng câu hỏi chủ đề lên Firebase:', err);
    return true;
  }
}

export function subscribeToCurriculumBank(
  onUpdated?: (countsByLessonId: Record<string, number>) => void
): () => void {
  // Áp dụng ngay từ LocalStorage trước
  const localOverrides = getLocalCurriculumBankOverrides();
  Object.entries(localOverrides).forEach(([lessonId, qList]) => {
    if (Array.isArray(qList) && qList.length > 0) {
      BUILT_IN_QUESTIONS[lessonId] = qList;
    }
  });

  const emitCounts = () => {
    if (!onUpdated) return;
    const counts: Record<string, number> = {};
    Object.entries(BUILT_IN_QUESTIONS).forEach(([k, arr]) => {
      counts[k] = Array.isArray(arr) ? arr.length : 0;
    });
    onUpdated(counts);
  };
  emitCounts();

  const bankRef = ref(db, CURRICULUM_BANK_REF_PATH);
  const unsubscribe = onValue(
    bankRef,
    (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val() || {};
        Object.keys(data).forEach((lessonId) => {
          const item = data[lessonId];
          const rawQ = Array.isArray(item?.questions)
            ? item.questions
            : item?.questions && typeof item.questions === 'object'
            ? Object.values(item.questions)
            : [];
          if (rawQ.length > 0) {
            BUILT_IN_QUESTIONS[lessonId] = rawQ as Question[];
          }
        });
        emitCounts();
      }
    },
    (err) => {
      console.warn('Lỗi đọc curriculum_bank từ Firebase:', err);
    }
  );

  return unsubscribe;
}
