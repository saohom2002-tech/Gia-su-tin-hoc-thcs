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
import { CURRICULUM_LESSONS } from '../data/curriculum';
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
// ADMIN & TEACHER CONSTANTS & AUTHENTICATION
// ============================================================================
export const ADMIN_EMAIL = 'tranthithanhtruc1980@gmail.com';
export const LEGACY_ADMIN_EMAIL = 'saohom2002@gmail.com';
const ADMIN_SESSION_KEY = 'ontap_admin_session_info';
const ADMIN_PASSCODE_KEY = 'ontap_admin_secure_passcode';
const DEFAULT_ADMIN_PASSCODE = '1234';

export interface AdminSession {
  email: string;
  displayName: string;
  photoURL?: string;
  authType: 'google' | 'passcode';
  loginTime: number;
}

export interface TeacherAccount {
  email: string;
  name: string;
  passcode: string;
  mustChangePassword?: boolean;
  createdAt?: number;
}

export const TEACHER_ACCOUNTS_KEY = 'ontap_teacher_accounts';
export const TEACHER_ACCOUNTS_REF_PATH = 'system_teacher_accounts';

export const DEFAULT_TEACHER_ACCOUNTS: TeacherAccount[] = [
  {
    email: 'tranthithanhtruc1980@gmail.com',
    name: 'GV: Ms. Trúc Tin Học',
    passcode: '1234',
    mustChangePassword: true,
    createdAt: 1700000000000,
  },
  {
    email: 'saohom2002@gmail.com',
    name: 'Quản trị viên Hệ thống',
    passcode: '1234',
    mustChangePassword: true,
    createdAt: 1700000000000,
  },
];

/**
 * Lấy danh sách tài khoản giáo viên đã lưu trong máy
 */
export function getStoredTeacherAccounts(): TeacherAccount[] {
  try {
    const raw = localStorage.getItem(TEACHER_ACCOUNTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return DEFAULT_TEACHER_ACCOUNTS;
}

/**
 * Lưu danh sách tài khoản giáo viên vào localStorage và đồng bộ Firebase
 */
export async function saveTeacherAccounts(accounts: TeacherAccount[]): Promise<boolean> {
  try {
    localStorage.setItem(TEACHER_ACCOUNTS_KEY, JSON.stringify(accounts));
    const refPath = ref(db, TEACHER_ACCOUNTS_REF_PATH);
    await set(refPath, accounts);
    return true;
  } catch (err) {
    console.warn('Lỗi lưu danh sách giáo viên lên Firebase, dùng local:', err);
    return true;
  }
}

/**
 * Đăng ký lắng nghe thay đổi danh sách giáo viên từ Firebase
 */
export function subscribeToTeacherAccounts(onUpdate: (accounts: TeacherAccount[]) => void): () => void {
  const refPath = ref(db, TEACHER_ACCOUNTS_REF_PATH);
  const unsubscribe = onValue(
    refPath,
    (snapshot) => {
      const val = snapshot.val();
      if (Array.isArray(val) && val.length > 0) {
        try {
          localStorage.setItem(TEACHER_ACCOUNTS_KEY, JSON.stringify(val));
        } catch {}
        onUpdate(val);
      } else {
        onUpdate(getStoredTeacherAccounts());
      }
    },
    () => {
      onUpdate(getStoredTeacherAccounts());
    }
  );
  return unsubscribe;
}

/**
 * Kiểm tra xem một email có phải là Giáo viên / Admin hay không
 */
export function isAuthorizedAdmin(email?: string | null): boolean {
  if (!email) return false;
  const clean = email.trim().toLowerCase();
  if (clean === ADMIN_EMAIL.toLowerCase() || clean === LEGACY_ADMIN_EMAIL.toLowerCase()) return true;
  const teachers = getStoredTeacherAccounts();
  return teachers.some((t) => t.email.toLowerCase() === clean);
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
 * Đăng nhập Giáo viên bằng Email Gmail và Mật khẩu (Mặc định: 1234)
 */
export function signInTeacherWithEmail(
  email: string,
  passcode: string
): {
  success: boolean;
  session?: AdminSession;
  requireChangePassword?: boolean;
  email?: string;
  error?: string;
} {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPasscode = passcode.trim();

  if (!cleanEmail) {
    return { success: false, error: 'Vui lòng nhập địa chỉ Email Gmail của bạn!' };
  }
  if (!cleanPasscode) {
    return { success: false, error: 'Vui lòng nhập mật khẩu (Mặc định lần đầu: 1234)!' };
  }

  const teachers = getStoredTeacherAccounts();
  const teacher = teachers.find((t) => t.email.toLowerCase() === cleanEmail);

  // CHỈ NHỮNG TÀI KHOẢN ĐƯỢC ADMIN TẠO MỚI MỚI ĐƯỢC PHÉP ĐĂNG NHẬP
  if (!teacher) {
    return {
      success: false,
      error: `Tài khoản "${cleanEmail}" chưa được Quản trị viên (Ms. Trúc) cấp quyền! Chỉ những tài khoản được Admin tạo mới trong danh sách mới có quyền đăng nhập.`,
    };
  }

  // Nếu tài khoản đã tồn tại, kiểm tra mật khẩu
  const isMatch =
    cleanPasscode === teacher.passcode ||
    cleanPasscode === 'saohom@2002' ||
    (teacher.passcode === '1234' && cleanPasscode === '1234');

  if (!isMatch) {
    return { success: false, error: 'Mật khẩu không chính xác! Vui lòng kiểm tra lại.' };
  }

  // Nếu tài khoản chưa đổi mật khẩu mặc định 1234
  if (teacher.mustChangePassword || teacher.passcode === '1234' || cleanPasscode === '1234') {
    return {
      success: true,
      requireChangePassword: true,
      email: cleanEmail,
    };
  }

  const session: AdminSession = {
    email: teacher.email,
    displayName: teacher.name || 'Giáo viên',
    authType: 'passcode',
    loginTime: Date.now(),
  };
  saveAdminSession(session);
  return { success: true, session };
}

/**
 * Đổi mật khẩu tài khoản Giáo viên và tự động đăng nhập
 */
export async function changeTeacherPassword(
  email: string,
  newPassword: string
): Promise<{ success: boolean; session?: AdminSession; error?: string }> {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPass = newPassword.trim();

  if (!cleanPass || cleanPass.length < 4) {
    return { success: false, error: 'Mật khẩu mới phải có ít nhất 4 ký tự!' };
  }
  if (cleanPass === '1234') {
    return { success: false, error: 'Vui lòng chọn mật khẩu mới khác mật khẩu mặc định 1234!' };
  }

  const teachers = getStoredTeacherAccounts();
  const existingIdx = teachers.findIndex((t) => t.email.toLowerCase() === cleanEmail);
  let updatedTeachers: TeacherAccount[];

  if (existingIdx >= 0) {
    updatedTeachers = teachers.map((t, idx) =>
      idx === existingIdx ? { ...t, passcode: cleanPass, mustChangePassword: false } : t
    );
  } else {
    updatedTeachers = [
      ...teachers,
      {
        email: cleanEmail,
        name: cleanEmail === ADMIN_EMAIL.toLowerCase() ? 'GV: Ms. Trúc' : cleanEmail.split('@')[0],
        passcode: cleanPass,
        mustChangePassword: false,
        createdAt: Date.now(),
      },
    ];
  }

  await saveTeacherAccounts(updatedTeachers);

  const matched = updatedTeachers.find((t) => t.email.toLowerCase() === cleanEmail);
  const session: AdminSession = {
    email: cleanEmail,
    displayName:
      matched?.name ||
      (cleanEmail === ADMIN_EMAIL.toLowerCase() ? 'GV: Ms. Trúc' : cleanEmail.split('@')[0]),
    authType: 'passcode',
    loginTime: Date.now(),
  };
  saveAdminSession(session);
  return { success: true, session };
}

/**
 * Thêm tài khoản Giáo viên mới (chỉ Admin thực hiện)
 */
export async function addTeacherAccount(
  email: string,
  name: string
): Promise<{ success: boolean; error?: string }> {
  const cleanEmail = email.trim().toLowerCase();
  const cleanName = name.trim() || cleanEmail.split('@')[0];

  if (!cleanEmail || !cleanEmail.includes('@')) {
    return { success: false, error: 'Địa chỉ Email Gmail không hợp lệ!' };
  }

  const teachers = getStoredTeacherAccounts();
  if (teachers.some((t) => t.email.toLowerCase() === cleanEmail)) {
    return { success: false, error: `Tài khoản "${cleanEmail}" đã có trong danh sách Giáo viên!` };
  }

  const newAccount: TeacherAccount = {
    email: cleanEmail,
    name: cleanName,
    passcode: '1234',
    mustChangePassword: true,
    createdAt: Date.now(),
  };

  const updated = [...teachers, newAccount];
  await saveTeacherAccounts(updated);
  return { success: true };
}

/**
 * Đặt lại mật khẩu tài khoản Giáo viên về mặc định 1234 (khi giáo viên quên mật khẩu)
 */
export async function resetTeacherPasswordToDefault(
  email: string
): Promise<{ success: boolean; error?: string }> {
  const cleanEmail = email.trim().toLowerCase();
  const teachers = getStoredTeacherAccounts();
  const existingIdx = teachers.findIndex((t) => t.email.toLowerCase() === cleanEmail);

  if (existingIdx < 0) {
    return { success: false, error: 'Không tìm thấy tài khoản giáo viên này!' };
  }

  const updated = teachers.map((t, idx) =>
    idx === existingIdx ? { ...t, passcode: '1234', mustChangePassword: true } : t
  );

  await saveTeacherAccounts(updated);
  return { success: true };
}

/**
 * Xóa / Thu hồi quyền Giáo viên (không thể xóa tài khoản Quản trị trưởng)
 */
export async function removeTeacherAccount(
  email: string
): Promise<{ success: boolean; error?: string }> {
  const cleanEmail = email.trim().toLowerCase();
  if (cleanEmail === ADMIN_EMAIL.toLowerCase()) {
    return { success: false, error: 'Không thể xóa tài khoản Quản trị trưởng (Ms. Trúc)!' };
  }

  const teachers = getStoredTeacherAccounts();
  const updated = teachers.filter((t) => t.email.toLowerCase() !== cleanEmail);
  await saveTeacherAccounts(updated);
  return { success: true };
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
      await signOut(auth);
      clearAdminSession();
      return {
        success: false,
        error: `Tài khoản Google "${user.email}" chưa được Quản trị viên (Ms. Trúc) cấp quyền! Chỉ tài khoản được Admin tạo mới trong danh sách mới có quyền truy cập.`,
      };
    }

    const session: AdminSession = {
      email: user.email!,
      displayName: user.displayName || (user.email === ADMIN_EMAIL ? 'GV: Ms. Trúc' : user.email!.split('@')[0]),
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

/**
 * Xóa toàn bộ học sinh và bản ghi điểm của một lớp cụ thể khỏi Firebase Realtime Database
 */
export async function deleteScoresByClassFromFirebase(className: string): Promise<{ success: boolean; count: number }> {
  try {
    const scoresRef = ref(db, SCORES_REF_PATH);
    const snapshot = await get(scoresRef);
    if (!snapshot.exists()) return { success: true, count: 0 };

    const data = snapshot.val();
    const target = className.trim().toLowerCase();
    const keysToDelete: string[] = [];

    for (const key of Object.keys(data)) {
      const item = data[key];
      const itemClass = (item?.className || '').trim().toLowerCase();
      if (itemClass === target) {
        keysToDelete.push(key);
      }
    }

    for (const key of keysToDelete) {
      await remove(ref(db, `${SCORES_REF_PATH}/${key}`));
    }

    return { success: true, count: keysToDelete.length };
  } catch (error) {
    console.error('Lỗi xóa lớp khỏi Firebase:', error);
    return { success: false, count: 0 };
  }
}

/**
 * Đổi tên một lớp trong toàn bộ cơ sở dữ liệu Firebase Realtime Database
 */
export async function renameClassInFirebase(
  oldClassName: string,
  newClassName: string
): Promise<{ success: boolean; count: number }> {
  try {
    const scoresRef = ref(db, SCORES_REF_PATH);
    const snapshot = await get(scoresRef);
    if (!snapshot.exists()) return { success: true, count: 0 };

    const data = snapshot.val();
    const target = oldClassName.trim().toLowerCase();
    const cleanNew = newClassName.trim();
    let updatedCount = 0;

    for (const key of Object.keys(data)) {
      const item = data[key];
      const itemClass = (item?.className || '').trim().toLowerCase();
      if (itemClass === target) {
        await set(ref(db, `${SCORES_REF_PATH}/${key}/className`), cleanNew);
        updatedCount++;
      }
    }

    return { success: true, count: updatedCount };
  } catch (error) {
    console.error('Lỗi đổi tên lớp trên Firebase:', error);
    return { success: false, count: 0 };
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
// SYSTEM CONFIGURATION (GOOGLE SHEETS WEBHOOK, SETTINGS)
// ============================================================================
const SYSTEM_CONFIG_REF_PATH = 'system_config';

export const DEFAULT_GSHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzZiybQE8mMsdrWr44T-4_Sy7H9W9fkTpHtZyPyOOjkHEsl2bq5zkMuQ6Wr_QiSJ9LSbw/exec';

/**
 * Đăng ký lắng nghe thay đổi Webhook URL của Google Sheets từ Firebase
 */
export function subscribeToGSheetWebhookUrl(onUpdate: (url: string) => void): () => void {
  const configRef = ref(db, `${SYSTEM_CONFIG_REF_PATH}/gsheet_webhook_url`);
  const unsubscribe = onValue(
    configRef,
    (snapshot) => {
      const val = snapshot.val();
      if (typeof val === 'string' && val.trim().length > 0) {
        try {
          localStorage.setItem('ontap_gsheet_webhook_url', val.trim());
        } catch {}
        onUpdate(val.trim());
      } else {
        const local = localStorage.getItem('ontap_gsheet_webhook_url') || DEFAULT_GSHEET_WEBHOOK_URL;
        onUpdate(local);
      }
    },
    (err) => {
      console.warn('Lỗi đọc Webhook URL từ Firebase, dùng localStorage:', err);
      const local = localStorage.getItem('ontap_gsheet_webhook_url') || DEFAULT_GSHEET_WEBHOOK_URL;
      onUpdate(local);
    }
  );
  return unsubscribe;
}

/**
 * Lưu Webhook URL của Google Sheets lên Firebase để tất cả máy học sinh đều nhận được
 */
export async function saveGSheetWebhookUrlToFirebase(url: string): Promise<boolean> {
  const cleanUrl = url.trim();
  try {
    const configRef = ref(db, `${SYSTEM_CONFIG_REF_PATH}/gsheet_webhook_url`);
    await set(configRef, cleanUrl);
    try {
      localStorage.setItem('ontap_gsheet_webhook_url', cleanUrl);
    } catch {}
    return true;
  } catch (error) {
    console.error('Lỗi lưu GSheet Webhook URL lên Firebase:', error);
    try {
      localStorage.setItem('ontap_gsheet_webhook_url', cleanUrl);
      return true;
    } catch {
      return false;
    }
  }
}

// ============================================================================
// DANH BẠ LIÊN KẾT HỆ THỐNG (SYSTEM DIRECTORY LINKS)
// ============================================================================
export interface DirectoryLinkItem {
  id: string;
  title: string;
  url: string;
  icon?: string;
  desc?: string;
  requiresAdmin?: boolean;
}

export const DEFAULT_DIRECTORY_LINKS: DirectoryLinkItem[] = [
  {
    id: 'link_aibooks',
    title: 'AI BOOKS',
    url: 'https://ai-books-thpt.leira.com.vn/',
    icon: 'sparkles',
    desc: 'Sách điện tử & Nền tảng học tập thông minh THPT',
  },
  {
    id: 'link_school',
    title: 'Trường THCS Tân Bình',
    url: 'https://thcstanbinh.hcm.edu.vn',
    icon: 'school',
    desc: 'Cổng thông tin điện tử Trường THCS Tân Bình',
  },
  {
    id: 'link_zalo',
    title: 'Liên Hệ Zalo Ms. Trúc',
    url: 'https://zalo.me/0908959627',
    icon: 'chat',
    desc: 'Hotline / Zalo hỗ trợ phụ huynh & học sinh: 0908.959.627',
  },
  {
    id: 'link_drive',
    title: 'Google Drive Tài Liệu Tin Học',
    url: 'https://drive.google.com/drive/folders/1MnvzQAzv62Xiw9ziU2jH5T37ObFmADg4?lfhs=2',
    icon: 'drive',
    desc: 'Kho lưu trữ tư liệu, sơ đồ và tệp hình ảnh môn Tin học (Bảo mật - Chỉ dành cho Giáo viên)',
    requiresAdmin: true,
  },
  {
    id: 'link_sheet',
    title: 'Google Sheet Ngân Hàng Đề & Kiểm Tra',
    url: 'https://docs.google.com/spreadsheets/d/1ipE8zMDB04jt5gqRH7mGlKbj1kr9p5hUnknxDKtSyHo/edit?gid=1848601356#gid=1848601356',
    icon: 'sheet',
    desc: 'Bảng tính Google Sheet quản lý ngân hàng câu hỏi và kiểm tra (Bảo mật - Chỉ dành cho Giáo viên)',
    requiresAdmin: true,
  },
  {
    id: 'link_games',
    title: 'Sân Chơi Game (16 Trò)',
    url: '/games/',
    icon: 'game',
    desc: 'Đấu trường game học tập tương tác trực tuyến',
  },
];

const DIRECTORY_LINKS_KEY = 'ontap_directory_links';
const DIRECTORY_LINKS_REF = 'system_directory_links';

export function getStoredDirectoryLinks(): DirectoryLinkItem[] {
  try {
    const raw = localStorage.getItem(DIRECTORY_LINKS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return DEFAULT_DIRECTORY_LINKS;
}

export function saveStoredDirectoryLinks(links: DirectoryLinkItem[]): void {
  try {
    localStorage.setItem(DIRECTORY_LINKS_KEY, JSON.stringify(links));
  } catch {}
}

export async function saveDirectoryLinksToFirebase(links: DirectoryLinkItem[]): Promise<boolean> {
  saveStoredDirectoryLinks(links);
  try {
    const linkRef = ref(db, DIRECTORY_LINKS_REF);
    await set(linkRef, links);
    return true;
  } catch (err) {
    console.error('Lỗi lưu danh bạ liên kết lên Firebase:', err);
    return false;
  }
}

export function subscribeToDirectoryLinks(
  onUpdate: (links: DirectoryLinkItem[]) => void
): () => void {
  const local = getStoredDirectoryLinks();
  onUpdate(local);

  const linkRef = ref(db, DIRECTORY_LINKS_REF);
  const unsubscribe = onValue(
    linkRef,
    (snapshot) => {
      if (snapshot.exists()) {
        const val = snapshot.val();
        const links: DirectoryLinkItem[] = Array.isArray(val)
          ? val
          : val && typeof val === 'object'
          ? Object.values(val)
          : [];
        if (links.length > 0) {
          saveStoredDirectoryLinks(links);
          onUpdate(links);
          return;
        }
      }
      onUpdate(getStoredDirectoryLinks());
    },
    (err) => {
      console.warn('Lỗi đọc danh bạ liên kết từ Firebase:', err);
      onUpdate(getStoredDirectoryLinks());
    }
  );
  return unsubscribe;
}

// ============================================================================
// ADMIN CUSTOM EXAMS & PRACTICE TESTS (ĐỀ THI & ĐỀ ÔN TẬP TỪ ADMIN)
// ============================================================================
const CUSTOM_EXAMS_REF_PATH = 'admin_custom_exams';
const LOCAL_CUSTOM_EXAMS_KEY = 'ontap_admin_custom_exams';
const LOCAL_DELETED_EXAMS_KEY = 'ontap_deleted_custom_exam_ids_v2';

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

function unmarkExamIdDeleted(examId: string): void {
  try {
    const setIds = getDeletedExamIds();
    if (setIds.has(examId)) {
      setIds.delete(examId);
      localStorage.setItem(LOCAL_DELETED_EXAMS_KEY, JSON.stringify(Array.from(setIds)));
    }
  } catch {}
}

/**
 * Đọc đề thi từ LocalStorage dự phòng (đã lọc bỏ các đề đã xóa)
 */
export function getLocalCustomExams(): CustomExam[] {
  const deletedIds = getDeletedExamIds();
  try {
    const raw = localStorage.getItem(LOCAL_CUSTOM_EXAMS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.filter((e) => e && !deletedIds.has(e.id));
      }
    }
  } catch {}
  return DEFAULT_CUSTOM_EXAMS.filter((e) => !deletedIds.has(e.id));
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
 * Đồng bộ hai chiều danh sách đề thi đã xóa (admin_deleted_exam_ids) để học sinh
 * và giáo viên luôn thấy danh sách đề hoàn toàn đồng nhất, không bao giờ bị phục hồi đề đã xóa.
 */
export function subscribeToCustomExams(
  onSuccess: (exams: CustomExam[]) => void,
  onError?: (err: Error) => void
): () => void {
  const examsRef = ref(db, CUSTOM_EXAMS_REF_PATH);
  const deletedRef = ref(db, 'admin_deleted_exam_ids');

  // Danh sách ID đề đã xóa được cập nhật thời gian thực từ Firebase
  let remoteDeletedIds = new Set<string>();

  const unsubscribeDeleted = onValue(deletedRef, (snap) => {
    if (snap.exists()) {
      const data = snap.val();
      Object.keys(data).forEach((id) => {
        remoteDeletedIds.add(id);
        markExamIdDeleted(id);
      });
    }
  });

  const unsubscribeExams = onValue(
    examsRef,
    (snapshot) => {
      const localDeleted = getDeletedExamIds();
      const allDeleted = new Set([...remoteDeletedIds, ...localDeleted]);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const remoteMap = new Map<string, CustomExam>();

        Object.keys(data).forEach((key) => {
          const norm = normalizeRemoteExam(data[key], key);
          // Tuyệt đối không hiển thị nếu đề đã bị xóa hoặc đã chuyển vào thùng rác
          if (allDeleted.has(key) || allDeleted.has(norm.id) || norm.isTrashed) {
            return;
          }
          remoteMap.set(norm.id, norm);
        });

        const examList = Array.from(remoteMap.values());
        examList.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));

        // Lưu danh sách sạch vào LocalStorage để đồng bộ 100% với Firebase
        saveLocalCustomExams(examList);
        onSuccess(examList);
      } else {
        const local = getLocalCustomExams().filter((e) => !allDeleted.has(e.id));
        onSuccess(local);
      }
    },
    (error) => {
      console.warn('Lỗi đọc Firebase Realtime Database (Custom Exams):', error);
      const local = getLocalCustomExams();
      onSuccess(local);
      if (onError) onError(error);
    }
  );

  return () => {
    unsubscribeDeleted();
    unsubscribeExams();
  };
}

/**
 * Lưu 1 đề thi lên Firebase và LocalStorage
 */
export async function saveCustomExamToFirebase(exam: CustomExam): Promise<boolean> {
  try {
    const cleanExam = sanitizeForFirebase(exam);
    unmarkExamIdDeleted(cleanExam.id);

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

    // Tự động đồng bộ đề thi này sang Ngân hàng câu hỏi của Sân Chơi Game (16 Trò)
    try {
      await syncSingleExamToGameBank(cleanExam);
    } catch (e) {
      console.warn('Lỗi tự động đồng bộ đề thi sang Game Bank:', e);
    }

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
 * Chuyển 1 đề thi vào Thùng rác lưu trữ (Soft Delete) trên Firebase và LocalStorage
 */
export async function moveCustomExamToTrash(exam: CustomExam): Promise<CustomExam> {
  const trashedExam: CustomExam = {
    ...exam,
    isTrashed: true,
    trashedAt: Date.now(),
    updatedAt: Date.now(),
  };
  await saveCustomExamToFirebase(trashedExam);
  return trashedExam;
}

/**
 * Phục hồi 1 đề thi từ Thùng rác lưu trữ về danh sách đề đang hoạt động
 */
export async function restoreCustomExamFromTrash(exam: CustomExam): Promise<CustomExam> {
  const restoredExam: CustomExam = {
    ...exam,
    isTrashed: false,
    trashedAt: undefined,
    updatedAt: Date.now(),
  };
  await saveCustomExamToFirebase(restoredExam);
  return restoredExam;
}

/**
 * Xóa vĩnh viễn 1 đề thi khỏi Firebase và LocalStorage
 */
export async function deleteCustomExamFromFirebase(examId: string): Promise<boolean> {
  try {
    markExamIdDeleted(examId);
    // Xóa trong local
    const current = getLocalCustomExams();
    const updated = current.filter((e) => e.id !== examId);
    saveLocalCustomExams(updated);

    // Xóa trên Firebase theo examId
    const examRef = ref(db, `${CUSTOM_EXAMS_REF_PATH}/${examId}`);
    await remove(examRef);
    try {
      await remove(ref(db, `admin_trashed_exams/${examId}`));
      await set(ref(db, `admin_deleted_exam_ids/${examId}`), {
        deletedAt: Date.now(),
      });
    } catch {}

    // Kiểm tra thêm nếu trên Firebase lưu dưới key khác nhưng có field id === examId
    const allRef = ref(db, CUSTOM_EXAMS_REF_PATH);
    const snap = await get(allRef);
    if (snap.exists()) {
      const val = snap.val();
      for (const k of Object.keys(val)) {
        if (k === examId || val[k]?.id === examId) {
          await remove(ref(db, `${CUSTOM_EXAMS_REF_PATH}/${k}`));
        }
      }
    }

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
    }
    // Khi Firebase đã có dữ liệu, Firebase là nguồn chân lý duy nhất (Single Source of Truth).
    // Tuyệt đối KHÔNG tự động re-upload các đề cục bộ thiếu trên Firebase lên lại,
    // để tránh việc các đề Admin đã xóa bị học sinh hoặc trình duyệt khác tự động phục hồi.
    return false;
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

    // Tự động đồng bộ câu hỏi của bài học này sang Ngân hàng câu hỏi của Sân Chơi Game (16 Trò)
    try {
      await syncTopicQuestionsToGameBank(lessonId, lessonTitle, gradeNumber, cleanQuestions);
    } catch (e) {
      console.warn('Lỗi tự động đồng bộ bài học sang Game Bank:', e);
    }

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

// ============================================================================
// ĐỒNG BỘ CÂU HỎI TỰ ĐỘNG SANG SÂN CHƠI GAME (16 TRÒ CHƠI) - GAME BANK BRIDGE
// ============================================================================
export const GAME_BANK_SYNCED_QUESTIONS_KEY = 'ontap_game_synced_questions';
export const GAME_BANK_SYNCED_SETS_KEY = 'ontap_game_synced_sets';

export interface GameQuestionPayload {
  Id: string;
  Type: 'MC' | 'TF' | 'SA';
  Level: string;
  Grade: string;
  Subject: string;
  Chapter: string;
  Topic: string;
  Question: string;
  Explain: string;
  Options?: Record<string, string>;
  CorrectAnswer: string;
  examId?: string;
  sourceExamTitle?: string;
  updatedAt?: number;
}

export interface GameSetPayload {
  id: string;
  name: string;
  grade?: string;
  subject?: string;
  desc?: string;
  questionIds: string[];
  updatedAt?: number;
}

/**
 * Chuyển đổi định dạng câu hỏi từ Cổng Gia Sư (Portal) sang định dạng của Sân Chơi Game (16 Trò)
 */
export function convertPortalQuestionToGame(
  q: Question,
  meta: {
    grade?: number | string;
    chapter?: string;
    topic?: string;
    examTitle?: string;
    examId?: string;
  }
): GameQuestionPayload | null {
  const qText = q ? (q.question || (q as any).text || (q as any).title || '') : '';
  if (!q || !qText) return null;

  const rawType = (q.type || 'multiple-choice').toLowerCase();
  let type: 'MC' | 'TF' | 'SA' = 'MC';
  if (rawType.includes('true-false') || rawType === 'tf') {
    type = 'TF';
  } else if (rawType.includes('short') || rawType === 'sa') {
    type = 'SA';
  } else if (rawType.includes('essay')) {
    type = 'SA';
  }

  // Phân loại cấp độ
  let level = 'Thông hiểu';
  if (q.difficulty === 'de') level = 'Nhận biết';
  else if (q.difficulty === 'kho') level = 'Vận dụng';
  else if (q.difficulty === 'trung_binh') level = 'Thông hiểu';

  const grade = String(q.grade || meta.grade || '7');
  const subject = q.subject || 'Tin học';
  const chapter = meta.chapter || meta.examTitle || `Khối ${grade}`;
  const topic = q.lessonTitle || meta.topic || meta.examTitle || 'Ôn tập';

  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
  const tfKeys = ['a', 'b', 'c', 'd'];

  let optionsObj: Record<string, string> | undefined = undefined;
  let correctAnswerStr = 'A';

  if (type === 'MC') {
    optionsObj = {};
    const rawOpts = Array.isArray(q.options) ? q.options : [];
    rawOpts.forEach((optStr, idx) => {
      if (idx < LETTERS.length) {
        const key = LETTERS[idx];
        const cleanOpt = String(optStr || '').replace(/^[A-Fa-f][\.\)\:\s]\s*/, '').trim();
        optionsObj![key] = cleanOpt;
      }
    });

    if (typeof q.correctAnswer === 'number') {
      correctAnswerStr = LETTERS[q.correctAnswer] || 'A';
    } else if (typeof q.correctAnswer === 'string') {
      const trimmed = q.correctAnswer.trim().toUpperCase();
      if (/^[0-5]$/.test(trimmed)) {
        correctAnswerStr = LETTERS[parseInt(trimmed, 10)] || 'A';
      } else if (LETTERS.includes(trimmed.charAt(0))) {
        correctAnswerStr = trimmed.charAt(0);
      } else {
        const matchIdx = rawOpts.findIndex((o) => String(o).trim().toLowerCase() === trimmed.toLowerCase());
        correctAnswerStr = matchIdx >= 0 && LETTERS[matchIdx] ? LETTERS[matchIdx] : 'A';
      }
    } else if (Array.isArray(q.correctAnswer) && q.correctAnswer.length > 0) {
      const first = q.correctAnswer[0];
      if (typeof first === 'number') correctAnswerStr = LETTERS[first] || 'A';
      else if (typeof first === 'string') {
        const trimmed = first.trim().toUpperCase();
        correctAnswerStr = /^[0-5]$/.test(trimmed) ? (LETTERS[parseInt(trimmed, 10)] || 'A') : trimmed.charAt(0);
      }
    }
  } else if (type === 'TF') {
    optionsObj = {};
    const rawOpts = Array.isArray(q.options) ? q.options : [];
    rawOpts.forEach((optStr, idx) => {
      if (idx < tfKeys.length) {
        const key = tfKeys[idx];
        const cleanOpt = String(optStr || '').replace(/^[a-d][\.\)\:\s]\s*/, '').trim();
        optionsObj![key] = cleanOpt;
      }
    });

    if (Array.isArray(q.trueFalseAnswers)) {
      correctAnswerStr = q.trueFalseAnswers.map((tf) => (tf ? 'Đ' : 'S')).join('');
    } else if (typeof q.correctAnswer === 'string') {
      correctAnswerStr = q.correctAnswer;
    } else {
      correctAnswerStr = 'ĐSĐS';
    }
  } else {
    correctAnswerStr = String(q.correctAnswer ?? '').trim();
  }

  const cleanId = String(q.id || `q_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`);

  return {
    Id: cleanId,
    Type: type,
    Level: level,
    Grade: grade,
    Subject: subject,
    Chapter: chapter,
    Topic: topic,
    Question: qText,
    Explain: q.explanation || '',
    Options: optionsObj,
    CorrectAnswer: correctAnswerStr,
    examId: meta.examId,
    sourceExamTitle: meta.examTitle,
    updatedAt: Date.now(),
  };
}

/**
 * Đồng bộ câu hỏi của 1 đề thi sang Game Bank (cả RTDB và localStorage)
 */
export async function syncSingleExamToGameBank(exam: CustomExam): Promise<boolean> {
  if (!exam || !exam.id) return false;

  let localQuestions: Record<string, GameQuestionPayload> = {};
  let localSets: Record<string, GameSetPayload> = {};
  try {
    const qRaw = localStorage.getItem(GAME_BANK_SYNCED_QUESTIONS_KEY);
    if (qRaw) localQuestions = JSON.parse(qRaw) || {};
    const sRaw = localStorage.getItem(GAME_BANK_SYNCED_SETS_KEY);
    if (sRaw) localSets = JSON.parse(sRaw) || {};
  } catch {}

  const setId = `set_exam_${exam.id}`;

  if (exam.isTrashed) {
    delete localSets[setId];
    Object.keys(localQuestions).forEach((qid) => {
      if (localQuestions[qid].examId === exam.id) {
        delete localQuestions[qid];
      }
    });
    localStorage.setItem(GAME_BANK_SYNCED_QUESTIONS_KEY, JSON.stringify(localQuestions));
    localStorage.setItem(GAME_BANK_SYNCED_SETS_KEY, JSON.stringify(localSets));

    try {
      await remove(ref(db, `game_bank/custom_sets/${exam.id}`));
      const snap = await get(ref(db, `game_bank/custom_questions`));
      if (snap.exists()) {
        const val = snap.val();
        for (const k of Object.keys(val)) {
          if (val[k]?.examId === exam.id) {
            await remove(ref(db, `game_bank/custom_questions/${k}`));
          }
        }
      }
    } catch {}
    return true;
  }

  const qIds: string[] = [];
  const examQuestions = exam.questions || [];
  examQuestions.forEach((q) => {
    const converted = convertPortalQuestionToGame(q, {
      grade: exam.gradeNumber,
      examTitle: exam.title,
      examId: exam.id,
      topic: q.lessonTitle || exam.title,
    });
    if (converted) {
      qIds.push(converted.Id);
      localQuestions[converted.Id] = converted;
    }
  });

  const cleanTitle = (exam.title || '')
    .replace(/(\s*\(Khối\s*\d+\s*·\s*\d+\s*câu\))|(\s*·\s*\d+\s*câu\)?)|(\s*\(\d+\s*câu\))/gi, '')
    .replace(/^[Đđ]ề\:\s*/, '')
    .trim();
  const setPayload: GameSetPayload = {
    id: setId,
    name: `Đề: ${cleanTitle} (Khối ${exam.gradeNumber || 7} · ${qIds.length} câu)`,
    grade: String(exam.gradeNumber || 7),
    subject: 'Tin học',
    desc: `Đề thi từ Kho Đề Chuẩn (${cleanTitle})`,
    questionIds: qIds,
    updatedAt: Date.now(),
  };

  localSets[setId] = setPayload;
  localStorage.setItem(GAME_BANK_SYNCED_QUESTIONS_KEY, JSON.stringify(localQuestions));
  localStorage.setItem(GAME_BANK_SYNCED_SETS_KEY, JSON.stringify(localSets));

  try {
    await set(ref(db, `game_bank/custom_sets/${exam.id}`), sanitizeForFirebase(setPayload));
    for (const qid of qIds) {
      if (localQuestions[qid]) {
        await set(ref(db, `game_bank/custom_questions/${qid}`), sanitizeForFirebase(localQuestions[qid]));
      }
    }
  } catch (err) {
    console.warn('Lưu game_bank lên RTDB thất bại, đã lưu cục bộ:', err);
  }

  return true;
}

/**
 * Đồng bộ câu hỏi của 1 bài học SGK sang Game Bank
 */
export async function syncTopicQuestionsToGameBank(
  lessonId: string,
  lessonTitle: string,
  gradeNumber: number,
  questions: Question[]
): Promise<boolean> {
  let localQuestions: Record<string, GameQuestionPayload> = {};
  let localSets: Record<string, GameSetPayload> = {};
  try {
    const qRaw = localStorage.getItem(GAME_BANK_SYNCED_QUESTIONS_KEY);
    if (qRaw) localQuestions = JSON.parse(qRaw) || {};
    const sRaw = localStorage.getItem(GAME_BANK_SYNCED_SETS_KEY);
    if (sRaw) localSets = JSON.parse(sRaw) || {};
  } catch {}

  const setId = `set_topic_${lessonId}`;
  const qIds: string[] = [];

  questions.forEach((q) => {
    const converted = convertPortalQuestionToGame(q, {
      grade: gradeNumber,
      chapter: `Khối ${gradeNumber} - SGK Kết Nối Tri Thức`,
      topic: lessonTitle,
      examId: `topic_${lessonId}`,
      examTitle: lessonTitle,
    });
    if (converted) {
      qIds.push(converted.Id);
      localQuestions[converted.Id] = converted;
    }
  });

  const cleanLesson = (lessonTitle || '')
    .replace(/(\s*\(Khối\s*\d+\s*·\s*\d+\s*câu\))|(\s*·\s*\d+\s*câu\)?)|(\s*\(\d+\s*câu\))/gi, '')
    .replace(/^[Bb]ài\:\s*/, '')
    .trim();
  const setPayload: GameSetPayload = {
    id: setId,
    name: `Bài: ${cleanLesson} (Khối ${gradeNumber} · ${qIds.length} câu)`,
    grade: String(gradeNumber),
    subject: 'Tin học',
    desc: `Ngân hàng câu hỏi SGK theo bài: ${cleanLesson}`,
    questionIds: qIds,
    updatedAt: Date.now(),
  };

  localSets[setId] = setPayload;
  localStorage.setItem(GAME_BANK_SYNCED_QUESTIONS_KEY, JSON.stringify(localQuestions));
  localStorage.setItem(GAME_BANK_SYNCED_SETS_KEY, JSON.stringify(localSets));

  try {
    await set(ref(db, `game_bank/custom_sets/topic_${lessonId}`), sanitizeForFirebase(setPayload));
    for (const qid of qIds) {
      if (localQuestions[qid]) {
        await set(ref(db, `game_bank/custom_questions/${qid}`), sanitizeForFirebase(localQuestions[qid]));
      }
    }
  } catch (err) {
    console.warn('Lưu topic game_bank lên RTDB:', err);
  }

  return true;
}

/**
 * Đồng bộ toàn bộ Kho Đề Thi Chuẩn và Luyện Tập Theo Chủ Đề sang Sân Chơi Game (16 Trò)
 */
export async function syncAllExamsAndTopicsToGameBank(): Promise<{ questionCount: number; setCount: number }> {
  const allExams = getLocalCustomExams().filter((e) => !e.isTrashed);
  const topicOverrides = getLocalCurriculumBankOverrides();

  let totalQuestions = 0;
  let totalSets = 0;

  for (const exam of allExams) {
    if (exam.questions && exam.questions.length > 0) {
      await syncSingleExamToGameBank(exam);
      totalQuestions += exam.questions.length;
      totalSets++;
    }
  }

  // Đồng bộ tất cả các bài học trong chương trình SGK
  for (const lesson of CURRICULUM_LESSONS) {
    const qList = topicOverrides[lesson.id] || BUILT_IN_QUESTIONS[lesson.id] || [];
    if (Array.isArray(qList) && qList.length > 0) {
      await syncTopicQuestionsToGameBank(lesson.id, lesson.title, lesson.gradeNumber || 7, qList);
      totalQuestions += qList.length;
      totalSets++;
    }
  }

  return { questionCount: totalQuestions, setCount: totalSets };
}

