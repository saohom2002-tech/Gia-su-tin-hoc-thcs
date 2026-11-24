import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  Mail,
  KeyRound,
  LogOut,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  X,
  Eye,
  EyeOff,
  UserCheck,
  GraduationCap,
  Users
} from 'lucide-react';
import {
  ADMIN_EMAIL,
  AdminSession,
  getStoredAdminSession,
  signInAdminWithGoogle,
  signInTeacherWithEmail,
  changeTeacherPassword,
  signOutAdmin,
} from '../../services/firebase';
import { TeacherManagementModal } from './TeacherManagementModal';
import { sound } from '../../utils/sound';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessOpenStudio: () => void;
  adminSession: AdminSession | null;
  setAdminSession: (sess: AdminSession | null) => void;
}

export const AdminAuthModal: React.FC<AdminAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccessOpenStudio,
  adminSession,
  setAdminSession,
}) => {
  const [tab, setTab] = useState<'login' | 'change_passcode' | 'first_time_change_password'>('login');
  const [loginMethod, setLoginMethod] = useState<'email' | 'google'>('email');
  
  // Đăng nhập email & mật khẩu
  const [emailInput, setEmailInput] = useState('tranthithanhtruc1980@gmail.com');
  const [passcodeInput, setPasscodeInput] = useState('1234');
  const [showPasscode, setShowPasscode] = useState(false);
  
  // Trạng thái đổi mật khẩu lần đầu
  const [pendingChangeEmail, setPendingChangeEmail] = useState('');
  const [firstTimeNewPass, setFirstTimeNewPass] = useState('');
  const [firstTimeConfirmPass, setFirstTimeConfirmPass] = useState('');
  const [showFirstTimePass, setShowFirstTimePass] = useState(false);

  // Đổi passcode thông thường khi đã đăng nhập
  const [newPasscode, setNewPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const [isTeacherManagementOpen, setIsTeacherManagementOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setErrorMessage('');
      setSuccessMessage('');
      if (!adminSession) {
        setTab('login');
      }
    }
  }, [isOpen, adminSession]);

  if (!isOpen) return null;

  // Xử lý đăng nhập Giáo viên bằng Email & Mật khẩu
  const handleTeacherEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();

    if (!emailInput.trim()) {
      setErrorMessage('Vui lòng nhập địa chỉ Email Gmail của Giáo viên!');
      return;
    }
    if (!passcodeInput.trim()) {
      setErrorMessage('Vui lòng nhập mật khẩu (Mặc định lần đầu là 1234)!');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    setTimeout(() => {
      const res = signInTeacherWithEmail(emailInput, passcodeInput);
      setIsLoading(false);

      if (res.requireChangePassword && res.email) {
        sound.playCorrect();
        setPendingChangeEmail(res.email);
        setTab('first_time_change_password');
        setFirstTimeNewPass('');
        setFirstTimeConfirmPass('');
        setSuccessMessage('Mật khẩu 1234 chính xác! Vui lòng thiết lập mật khẩu mới để bảo mật tài khoản.');
        return;
      }

      if (res.success && res.session) {
        sound.playCorrect();
        setAdminSession(res.session);
        setSuccessMessage('Đăng nhập Giáo viên thành công!');
        setTimeout(() => {
          onSuccessOpenStudio();
        }, 700);
      } else {
        sound.playWrong();
        setErrorMessage(res.error || 'Email hoặc mật khẩu không chính xác!');
      }
    }, 300);
  };

  // Xử lý đổi mật khẩu lần đầu bắt buộc
  const handleFirstTimePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();

    if (!firstTimeNewPass.trim() || firstTimeNewPass.length < 4) {
      setErrorMessage('Mật khẩu mới phải có ít nhất 4 ký tự!');
      return;
    }
    if (firstTimeNewPass.trim() === '1234') {
      setErrorMessage('Vui lòng đặt mật khẩu mới khác mật khẩu mặc định 1234!');
      return;
    }
    if (firstTimeNewPass !== firstTimeConfirmPass) {
      setErrorMessage('Xác nhận mật khẩu mới không khớp!');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const res = await changeTeacherPassword(pendingChangeEmail, firstTimeNewPass);
      setIsLoading(false);

      if (res.success && res.session) {
        sound.playCorrect();
        setAdminSession(res.session);
        setSuccessMessage('🎉 Đã thiết lập mật khẩu mới thành công! Đang chuyển vào Admin Studio...');
        setTimeout(() => {
          onSuccessOpenStudio();
        }, 900);
      } else {
        sound.playWrong();
        setErrorMessage(res.error || 'Không thể lưu mật khẩu mới. Vui lòng thử lại!');
      }
    } catch (err: any) {
      setIsLoading(false);
      sound.playWrong();
      setErrorMessage(err.message || 'Lỗi lưu mật khẩu mới.');
    }
  };

  // Xử lý đăng nhập Google
  const handleGoogleSignIn = async () => {
    sound.playClick();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const res = await signInAdminWithGoogle();
      if (res.success && res.session) {
        sound.playCorrect();
        setAdminSession(res.session);
        setSuccessMessage('Đăng nhập Quản trị viên thành công!');
        setTimeout(() => {
          onSuccessOpenStudio();
        }, 800);
      } else {
        sound.playWrong();
        setErrorMessage(res.error || 'Đăng nhập Google thất bại.');
      }
    } catch (err: any) {
      sound.playWrong();
      setErrorMessage(err.message || 'Lỗi kết nối khi đăng nhập Google.');
    } finally {
      setIsLoading(false);
    }
  };

  // Xử lý đăng xuất
  const handleSignOut = async () => {
    sound.playClick();
    setIsLoading(true);
    await signOutAdmin();
    setAdminSession(null);
    setPasscodeInput('1234');
    setSuccessMessage('Đã đăng xuất khỏi tài khoản Quản trị viên.');
    setIsLoading(false);
  };

  // Xử lý đổi mật mã thông thường khi đã đăng nhập
  const handleChangePasscode = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    if (newPasscode.length < 4) {
      setErrorMessage('Mật mã mới phải có ít nhất 4 ký tự!');
      return;
    }
    if (newPasscode !== confirmPasscode) {
      setErrorMessage('Xác nhận mật mã không khớp!');
      return;
    }

    if (!adminSession?.email) return;

    setIsLoading(true);
    const res = await changeTeacherPassword(adminSession.email, newPasscode);
    setIsLoading(false);

    if (res.success && res.session) {
      sound.playCorrect();
      setAdminSession(res.session);
      setSuccessMessage('Đã đổi mật khẩu Giáo viên thành công!');
      setNewPasscode('');
      setConfirmPasscode('');
      setTab('login');
    } else {
      sound.playWrong();
      setErrorMessage(res.error || 'Không thể lưu mật mã mới. Vui lòng thử lại.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border border-slate-200 overflow-hidden relative">
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-900 p-6 text-white relative">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Admin Studio Security
              </div>
              <h2 className="text-xl font-black mt-1 font-['Lexend']">
                {tab === 'first_time_change_password' ? 'Thiết Lập Mật Khẩu' : 'Xác Thực Giáo Viên'}
              </h2>
            </div>
          </div>
          <p className="text-xs text-indigo-100 mt-2 leading-relaxed">
            {tab === 'first_time_change_password'
              ? 'Tạo mật khẩu riêng cho tài khoản Giáo viên lần đầu đăng nhập.'
              : 'Khu vực quản trị dành cho Giáo viên để cập nhật câu hỏi & đề thi.'}
          </p>
        </div>

        {/* Body content */}
        <div className="p-6">
          {/* Notifications */}
          {errorMessage && (
            <div className="mb-4 p-3 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-rose-800 text-xs">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="font-medium leading-relaxed">{errorMessage}</div>
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-emerald-800 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="font-semibold leading-relaxed">{successMessage}</div>
            </div>
          )}

          {/* MÀN HÌNH 1: ĐỔI MẬT KHẨU BẮT BUỘC KHI ĐĂNG NHẬP BẰNG 1234 */}
          {tab === 'first_time_change_password' ? (
            <form onSubmit={handleFirstTimePasswordSubmit} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                  <Lock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Bảo mật tài khoản Giáo viên:</span>
                </div>
                <div className="font-mono text-xs font-bold text-slate-800">
                  {pendingChangeEmail}
                </div>
                <p className="text-[11px] text-amber-800 pt-1 leading-relaxed">
                  Bạn đang sử dụng <strong>mật khẩu mặc định 1234</strong>. Để bảo vệ dữ liệu đề thi và điểm số, vui lòng đặt <strong>mật khẩu mới</strong> (tối thiểu 4 ký tự):
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mật khẩu mới của bạn: <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showFirstTimePass ? 'text' : 'password'}
                    value={firstTimeNewPass}
                    onChange={(e) => setFirstTimeNewPass(e.target.value)}
                    placeholder="Nhập mật khẩu mới (VD: 8888, truc@2024)..."
                    className="w-full pl-3 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowFirstTimePass(!showFirstTimePass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  >
                    {showFirstTimePass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Xác nhận lại mật khẩu mới: <span className="text-rose-500">*</span>
                </label>
                <input
                  type={showFirstTimePass ? 'text' : 'password'}
                  value={firstTimeConfirmPass}
                  onChange={(e) => setFirstTimeConfirmPass(e.target.value)}
                  placeholder="Nhập lại chính xác mật khẩu mới..."
                  className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono"
                />
              </div>

              <div className="flex gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => setTab('login')}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer"
                >
                  Quay lại
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md shadow-emerald-600/30 transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-98 disabled:opacity-50"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isLoading ? 'Đang lưu...' : 'Lưu Mật Khẩu & Mở Studio'}</span>
                </button>
              </div>
            </form>
          ) : adminSession ? (
            /* MÀN HÌNH 2: NẾU ĐÃ ĐĂNG NHẬP */
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center gap-3.5">
                {adminSession.photoURL ? (
                  <img
                    src={adminSession.photoURL}
                    alt="Admin Avatar"
                    className="w-13 h-13 rounded-2xl border-2 border-indigo-300 shadow-sm object-cover"
                  />
                ) : (
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white font-black text-xl flex items-center justify-center shadow-md">
                    🎓
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-slate-900 truncate">
                      {adminSession.displayName || 'Giáo viên'}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-extrabold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Đã xác thực
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-indigo-700 truncate mt-0.5 font-mono">
                    {adminSession.email}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Quyền hạn: Biên soạn đề thi & Cập nhật câu hỏi
                  </p>
                </div>
              </div>

              {tab === 'change_passcode' ? (
                <form onSubmit={handleChangePasscode} className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Đổi Mật Khẩu Giáo Viên
                  </h4>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Mật khẩu mới (ít nhất 4 ký tự)
                    </label>
                    <input
                      type="password"
                      value={newPasscode}
                      onChange={(e) => setNewPasscode(e.target.value)}
                      placeholder="Nhập mật khẩu mới..."
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Xác nhận mật khẩu mới
                    </label>
                    <input
                      type="password"
                      value={confirmPasscode}
                      onChange={(e) => setConfirmPasscode(e.target.value)}
                      placeholder="Nhập lại mật khẩu mới..."
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setTab('login')}
                      className="flex-1 py-2 text-xs font-bold rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-2 text-xs font-bold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/20 cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? 'Đang lưu...' : 'Lưu mật khẩu mới'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => {
                      sound.playClick();
                      onSuccessOpenStudio();
                    }}
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-transform active:scale-98 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Mở Admin Studio ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setIsTeacherManagementOpen(true);
                      }}
                      className="flex-1 py-2.5 px-2 rounded-xl border border-indigo-200 hover:border-indigo-300 text-indigo-700 text-xs font-bold hover:bg-indigo-50/50 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                      title="Quản lý danh sách giáo viên được cấp quyền"
                    >
                      <Users className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Quản lý GV</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setTab('change_passcode');
                      }}
                      className="flex-1 py-2.5 px-2 rounded-xl border border-slate-200 hover:border-indigo-300 text-slate-700 text-xs font-bold hover:bg-indigo-50/50 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <KeyRound className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Đổi MK</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSignOut}
                      disabled={isLoading}
                      className="flex-1 py-2.5 px-2 rounded-xl border border-rose-200 hover:border-rose-300 text-rose-700 text-xs font-bold hover:bg-rose-50 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5 text-rose-600" />
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* MÀN HÌNH 3: CHƯA ĐĂNG NHẬP */
            <div className="space-y-4">
              {/* Method tabs */}
              <div className="flex p-1 bg-slate-100 rounded-2xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setLoginMethod('email');
                    setErrorMessage('');
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    loginMethod === 'email'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tài khoản Gmail & Mật khẩu
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setLoginMethod('google');
                    setErrorMessage('');
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    loginMethod === 'google'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Đăng nhập Google
                </button>
              </div>

              {loginMethod === 'email' ? (
                <form onSubmit={handleTeacherEmailLogin} className="space-y-3.5 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Địa chỉ Gmail Giáo viên: <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="VD: tranthithanhtruc1980@gmail.com"
                        className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium"
                        required
                        autoFocus
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mật khẩu: <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPasscode ? 'text' : 'password'}
                        value={passcodeInput}
                        onChange={(e) => setPasscodeInput(e.target.value)}
                        placeholder="Nhập mật khẩu (Mặc định: 1234)..."
                        className="w-full pl-9 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono font-bold"
                        required
                      />
                      <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <button
                        type="button"
                        onClick={() => setShowPasscode(!showPasscode)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                      >
                        {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Hộp gợi ý mật khẩu mặc định */}
                  <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200 text-left space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Hướng dẫn cho Giáo viên đăng nhập lần đầu:</span>
                    </div>
                    <p className="text-[11px] text-amber-800 leading-relaxed">
                      Nhập Gmail của bạn và mật khẩu mặc định là <strong className="text-amber-950 font-black">1234</strong>. Hệ thống sẽ lập tức chuyển sang màn hình yêu cầu bạn <strong>đổi mật khẩu mới</strong> để hoàn tất bảo mật.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-extrabold text-sm shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer disabled:opacity-50"
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span>{isLoading ? 'Đang xác thực...' : 'ĐĂNG NHẬP GIÁO VIÊN'}</span>
                  </button>
                </form>
              ) : (
                <div className="space-y-3 pt-2 text-center">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nhấn nút bên dưới để chọn tài khoản Google của bạn. Hệ thống sẽ tự động cấp quyền truy cập Giáo viên:
                  </p>

                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    className="w-full py-3 px-4 rounded-2xl border-2 border-slate-200 hover:border-indigo-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm flex items-center justify-center gap-3 shadow-xs transition-all active:scale-98 cursor-pointer disabled:opacity-50"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>{isLoading ? 'Đang xác thực Google...' : 'Đăng nhập với Google'}</span>
                  </button>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left">
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      💡 Khuyên dùng: Bạn có thể chuyển sang tab <strong>"Tài khoản Gmail & Mật khẩu"</strong> để đăng nhập bằng mật khẩu mặc định 1234 mà không cần bật popup trình duyệt.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal: Quản Lý Tài Khoản Giáo Viên */}
        <TeacherManagementModal
          isOpen={isTeacherManagementOpen}
          onClose={() => setIsTeacherManagementOpen(false)}
          currentAdminEmail={adminSession?.email}
        />
      </div>
    </div>
  );
};
