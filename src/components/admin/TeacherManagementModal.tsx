import React, { useState, useEffect } from 'react';
import {
  Users,
  UserPlus,
  Mail,
  User,
  KeyRound,
  Trash2,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  X,
  Lock,
  Sparkles
} from 'lucide-react';
import {
  ADMIN_EMAIL,
  TeacherAccount,
  getStoredTeacherAccounts,
  subscribeToTeacherAccounts,
  addTeacherAccount,
  resetTeacherPasswordToDefault,
  removeTeacherAccount
} from '../../services/firebase';
import { sound } from '../../utils/sound';

interface TeacherManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAdminEmail?: string;
}

export const TeacherManagementModal: React.FC<TeacherManagementModalProps> = ({
  isOpen,
  onClose,
  currentAdminEmail,
}) => {
  const [teachers, setTeachers] = useState<TeacherAccount[]>(getStoredTeacherAccounts);
  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const unsubscribe = subscribeToTeacherAccounts((list) => {
      if (list && list.length > 0) {
        setTeachers(list);
      }
    });
    return () => unsubscribe();
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAddTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setStatusMessage(null);

    const cleanEmail = newEmail.trim().toLowerCase();
    const cleanName = newName.trim();

    if (!cleanEmail) {
      setStatusMessage({ type: 'error', text: 'Vui lòng nhập địa chỉ Email Gmail của giáo viên!' });
      return;
    }

    if (!cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setStatusMessage({ type: 'error', text: 'Địa chỉ Email không đúng định dạng (VD: giaovien@gmail.com)!' });
      return;
    }

    setIsLoading(true);
    const res = await addTeacherAccount(cleanEmail, cleanName || cleanEmail.split('@')[0]);
    setIsLoading(false);

    if (res.success) {
      sound.playCorrect();
      setNewEmail('');
      setNewName('');
      setStatusMessage({
        type: 'success',
        text: `Đã cấp quyền cho tài khoản "${cleanEmail}" thành công! Mật khẩu khởi tạo ban đầu là 1234.`,
      });
      setTeachers(getStoredTeacherAccounts());
    } else {
      sound.playWrong();
      setStatusMessage({ type: 'error', text: res.error || 'Không thể thêm giáo viên.' });
    }
  };

  const handleResetPassword = async (email: string) => {
    sound.playClick();
    if (window.confirm(`Bạn có chắc chắn muốn đặt lại mật khẩu của giáo viên "${email}" về mặc định "1234"?`)) {
      const res = await resetTeacherPasswordToDefault(email);
      if (res.success) {
        sound.playCorrect();
        setStatusMessage({
          type: 'success',
          text: `Đã đặt lại mật khẩu của "${email}" về 1234 thành công!`,
        });
        setTeachers(getStoredTeacherAccounts());
      } else {
        sound.playWrong();
        setStatusMessage({ type: 'error', text: res.error || 'Lỗi đặt lại mật khẩu.' });
      }
    }
  };

  const handleRemoveTeacher = async (email: string) => {
    sound.playClick();
    if (window.confirm(`Bạn có chắc chắn muốn THU HỒI QUYỀN và XÓA tài khoản giáo viên "${email}" khỏi hệ thống?`)) {
      const res = await removeTeacherAccount(email);
      if (res.success) {
        sound.playCorrect();
        setStatusMessage({
          type: 'success',
          text: `Đã thu hồi quyền của tài khoản "${email}" thành công!`,
        });
        setTeachers(getStoredTeacherAccounts());
      } else {
        sound.playWrong();
        setStatusMessage({ type: 'error', text: res.error || 'Không thể xóa tài khoản này.' });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-900 p-5 text-white relative shrink-0">
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
            <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner">
              <Users className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 text-[10px] font-black uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3" />
                Admin Access Control
              </div>
              <h3 className="text-lg font-black mt-0.5 font-['Lexend'] uppercase tracking-tight">
                Quản Lý Tài Khoản Giáo Viên
              </h3>
            </div>
          </div>
          <p className="text-xs text-indigo-100 mt-1.5 leading-relaxed">
            Chỉ những tài khoản Gmail được Quản trị viên (Ms. Trúc) thêm vào danh sách dưới đây mới có quyền đăng nhập và chỉnh sửa ngân hàng câu hỏi.
          </p>
        </div>

        {/* Content body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 bg-slate-50/50">
          {/* Notifications */}
          {statusMessage && (
            <div
              className={`p-3 rounded-2xl flex items-start gap-2.5 text-xs font-medium animate-in fade-in ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="leading-relaxed">{statusMessage.text}</div>
            </div>
          )}

          {/* 1. FORM CẤP TÀI KHOẢN MỚI */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h4 className="text-xs sm:text-sm font-extrabold text-indigo-950 uppercase tracking-tight flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-indigo-600" />
              <span>Cấp Quyền Cho Giáo Viên Mới</span>
            </h4>

            <form onSubmit={handleAddTeacher} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                <div className="sm:col-span-6 space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">
                    Địa chỉ Gmail Giáo viên: <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      placeholder="VD: giaovien.tinhoc@gmail.com"
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white font-medium"
                      required
                    />
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="sm:col-span-6 space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">
                    Họ & Tên Giáo viên (Tùy chọn):
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="VD: Thầy Hoàng - GV Tin học"
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white font-medium"
                    />
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Mật khẩu ban đầu mặc định là <strong>1234</strong>. Giáo viên đăng nhập lần đầu sẽ được yêu cầu đổi mật khẩu riêng.</span>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer shrink-0 disabled:opacity-50 active:scale-98"
                >
                  {isLoading ? 'Đang cấp...' : '+ Cấp Tài Khoản'}
                </button>
              </div>
            </form>
          </div>

          {/* 2. DANH SÁCH GIÁO VIÊN ĐÃ CẤP QUYỀN */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-tight flex items-center gap-2">
                <span>Danh Sách Giáo Viên Được Cấp Quyền</span>
                <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[11px] font-black">
                  {teachers.length}
                </span>
              </h4>
            </div>

            <div className="divide-y divide-slate-100">
              {teachers.map((item, idx) => {
                const isSuperAdmin = item.email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
                const isUsingDefaultPass = item.mustChangePassword || item.passcode === '1234';

                return (
                  <div
                    key={item.email}
                    className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:bg-slate-50 px-2 rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-100 to-blue-100 text-indigo-800 font-bold flex items-center justify-center shrink-0 border border-indigo-200">
                        {isSuperAdmin ? '👑' : '🎓'}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs sm:text-sm text-slate-800 truncate">
                            {item.name || item.email.split('@')[0]}
                          </span>
                          {isSuperAdmin && (
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-black uppercase bg-amber-100 text-amber-900 border border-amber-300">
                              Quản trị trưởng
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] font-mono text-slate-500 truncate">
                          {item.email}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      {/* Trạng thái mật khẩu */}
                      {isUsingDefaultPass ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200 inline-flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" /> MK 1234 (Chờ đổi)
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Đã có MK riêng
                        </span>
                      )}

                      {/* Nút đặt lại mật khẩu về 1234 */}
                      <button
                        type="button"
                        onClick={() => handleResetPassword(item.email)}
                        className="p-1.5 rounded-lg text-amber-700 hover:bg-amber-100 transition-colors cursor-pointer"
                        title="Đặt lại mật khẩu về mặc định 1234 khi giáo viên quên mật khẩu"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>

                      {/* Nút xóa / thu hồi quyền */}
                      {!isSuperAdmin && (
                        <button
                          type="button"
                          onClick={() => handleRemoveTeacher(item.email)}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-100 transition-colors cursor-pointer"
                          title="Thu hồi quyền giáo viên này"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-100 bg-white flex justify-end shrink-0">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
