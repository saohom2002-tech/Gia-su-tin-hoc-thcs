import React, { useState, useEffect } from 'react';
import {
  Link2,
  ExternalLink,
  Lock,
  Unlock,
  Plus,
  Trash2,
  Edit3,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Cloud,
  X,
  Sparkles,
  School,
  BookOpen,
  Folder,
  FileSpreadsheet,
  MessageCircle,
  Gamepad2,
  Bot,
  Calculator,
  GraduationCap,
  ShieldCheck,
  Check
} from 'lucide-react';
import { sound } from '../utils/sound';
import {
  DirectoryLinkItem,
  DEFAULT_DIRECTORY_LINKS,
  getStoredDirectoryLinks,
  saveDirectoryLinksToFirebase,
  subscribeToDirectoryLinks,
} from '../services/firebase';

interface LinksDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAdminLoggedIn?: boolean;
}

const ICON_OPTIONS = [
  { id: 'link', label: 'Mặc định (Link)', icon: Link2, color: 'text-sky-600 bg-sky-50' },
  { id: 'sparkles', label: 'AI / Thông minh', icon: Sparkles, color: 'text-indigo-600 bg-indigo-50' },
  { id: 'book', label: 'Sách / Giáo trình', icon: BookOpen, color: 'text-blue-600 bg-blue-50' },
  { id: 'school', label: 'Trường học', icon: School, color: 'text-emerald-600 bg-emerald-50' },
  { id: 'drive', label: 'Google Drive', icon: Folder, color: 'text-amber-600 bg-amber-50' },
  { id: 'sheet', label: 'Google Sheet', icon: FileSpreadsheet, color: 'text-green-600 bg-green-50' },
  { id: 'chat', label: 'Zalo / Tin nhắn', icon: MessageCircle, color: 'text-teal-600 bg-teal-50' },
  { id: 'game', label: 'Sân chơi Game', icon: Gamepad2, color: 'text-purple-600 bg-purple-50' },
  { id: 'bot', label: 'Trợ lý AI / Bot', icon: Bot, color: 'text-violet-600 bg-violet-50' },
  { id: 'calc', label: 'Máy tính / Tiện ích', icon: Calculator, color: 'text-cyan-600 bg-cyan-50' },
  { id: 'grad', label: 'Khảo sát / Thi đua', icon: GraduationCap, color: 'text-orange-600 bg-orange-50' },
];

export const LinksDirectoryModal: React.FC<LinksDirectoryModalProps> = ({
  isOpen,
  onClose,
  isAdminLoggedIn = false,
}) => {
  const [links, setLinks] = useState<DirectoryLinkItem[]>(getStoredDirectoryLinks);
  const [mode, setMode] = useState<'view' | 'edit'>('view');
  const [pinInput, setPinInput] = useState('');
  const [isPinUnlocked, setIsPinUnlocked] = useState(false);
  const [pinError, setPinError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  // Form thêm / sửa liên kết
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formUrl, setFormUrl] = useState('');
  const [formIcon, setFormIcon] = useState('link');
  const [formDesc, setFormDesc] = useState('');
  const [formRequiresAdmin, setFormRequiresAdmin] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Popup yêu cầu mã PIN khi học sinh hoặc người chưa xác thực bấm vào link khóa
  const [pendingAdminLink, setPendingAdminLink] = useState<DirectoryLinkItem | null>(null);
  const [linkPinInput, setLinkPinInput] = useState('');
  const [linkPinError, setLinkPinError] = useState('');

  // Popup yêu cầu mã PIN khi bấm vào nút "Quản Lý Liên Kết"
  const [showManageAuthModal, setShowManageAuthModal] = useState(false);
  const [managePinInput, setManagePinInput] = useState('');
  const [managePinError, setManagePinError] = useState('');

  // Đăng ký lắng nghe thay đổi thời gian thực từ Firebase
  useEffect(() => {
    if (!isOpen) return;
    const unsubscribe = subscribeToDirectoryLinks((remoteLinks) => {
      if (remoteLinks && remoteLinks.length > 0) {
        setLinks(remoteLinks);
      }
    });
    return () => unsubscribe();
  }, [isOpen]);

  // Tự động mở quyền sửa nếu đã đăng nhập Admin
  useEffect(() => {
    if (isAdminLoggedIn) {
      setIsPinUnlocked(true);
    }
  }, [isAdminLoggedIn]);

  if (!isOpen) return null;

  const canEdit = isAdminLoggedIn || isPinUnlocked;

  const isLinkAdminOnly = (item: DirectoryLinkItem): boolean => {
    return Boolean(
      item.requiresAdmin ||
      item.id === 'link_sheet' ||
      item.url.includes('docs.google.com/spreadsheets') ||
      item.url.includes('script.google.com') ||
      item.title.toLowerCase().includes('ngân hàng') ||
      item.title.toLowerCase().includes('bảng điểm')
    );
  };

  const handleVerifyPin = () => {
    sound.playClick();
    const cleanPin = pinInput.trim();
    if (cleanPin === 'saohom@2002' || cleanPin === '123456' || cleanPin === '2024' || cleanPin === '8888') {
      setIsPinUnlocked(true);
      setPinError('');
      sound.playCorrect();
    } else {
      setPinError('Mật mã quản trị viên không chính xác!');
    }
  };

  const handleUnlockAndOpenPendingLink = () => {
    sound.playClick();
    const clean = linkPinInput.trim();
    if (clean === '2024' || clean === '123456' || clean === 'saohom@2002' || clean === '8888') {
      setIsPinUnlocked(true);
      sound.playCorrect();
      const targetUrl = pendingAdminLink?.url;
      setPendingAdminLink(null);
      if (targetUrl) {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }
    } else {
      sound.playWrong();
      setLinkPinError('Mã PIN không đúng! Bạn không có quyền truy cập file này.');
    }
  };

  const handleVerifyManagePin = () => {
    sound.playClick();
    const clean = managePinInput.trim();
    if (clean === '2024' || clean === '123456' || clean === 'saohom@2002' || clean === '8888') {
      setIsPinUnlocked(true);
      sound.playCorrect();
      setShowManageAuthModal(false);
      setMode('edit');
    } else {
      sound.playWrong();
      setManagePinError('Mã PIN không chính xác! Chỉ Giáo viên / Admin mới có quyền quản lý liên kết.');
    }
  };

  const handleResetForm = () => {
    setEditingId(null);
    setFormTitle('');
    setFormUrl('');
    setFormIcon('link');
    setFormDesc('');
    setFormRequiresAdmin(false);
  };

  const handleSaveItem = () => {
    sound.playClick();
    if (!formTitle.trim()) {
      alert('Vui lòng nhập Tên liên kết / Tiêu đề!');
      return;
    }
    if (!formUrl.trim()) {
      alert('Vui lòng nhập Địa chỉ URL!');
      return;
    }

    let cleanUrl = formUrl.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://') && !cleanUrl.startsWith('/')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    if (editingId) {
      // Sửa liên kết
      setLinks((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, title: formTitle.trim(), url: cleanUrl, icon: formIcon, desc: formDesc.trim(), requiresAdmin: formRequiresAdmin }
            : item
        )
      );
    } else {
      // Thêm mới
      const newItem: DirectoryLinkItem = {
        id: `link_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        title: formTitle.trim(),
        url: cleanUrl,
        icon: formIcon,
        desc: formDesc.trim(),
        requiresAdmin: formRequiresAdmin,
      };
      setLinks((prev) => [...prev, newItem]);
    }

    handleResetForm();
  };

  const handleStartEdit = (item: DirectoryLinkItem) => {
    sound.playClick();
    setEditingId(item.id);
    setFormTitle(item.title);
    setFormUrl(item.url);
    setFormIcon(item.icon || 'link');
    setFormDesc(item.desc || '');
    setFormRequiresAdmin(Boolean(item.requiresAdmin || isLinkAdminOnly(item)));
  };

  const handleDeleteItem = (id: string) => {
    sound.playClick();
    if (window.confirm('Bạn có chắc chắn muốn xóa liên kết này khỏi danh bạ?')) {
      setLinks((prev) => prev.filter((item) => item.id !== id));
      if (editingId === id) handleResetForm();
    }
  };

  const handleMoveUp = (index: number) => {
    if (index <= 0) return;
    sound.playClick();
    setLinks((prev) => {
      const copy = [...prev];
      const temp = copy[index - 1];
      copy[index - 1] = copy[index];
      copy[index] = temp;
      return copy;
    });
  };

  const handleMoveDown = (index: number) => {
    if (index >= links.length - 1) return;
    sound.playClick();
    setLinks((prev) => {
      const copy = [...prev];
      const temp = copy[index + 1];
      copy[index + 1] = copy[index];
      copy[index] = temp;
      return copy;
    });
  };

  const handleRestoreDefault = () => {
    sound.playClick();
    if (window.confirm('Khôi phục danh bạ về các liên kết chuẩn của hệ thống Tin học?')) {
      setLinks(DEFAULT_DIRECTORY_LINKS);
      handleResetForm();
    }
  };

  const handleSaveAndSyncToCloud = async () => {
    sound.playClick();
    setIsSaving(true);
    try {
      await saveDirectoryLinksToFirebase(links);
      sound.playCorrect();
      setStatusMessage('✅ Đã lưu và đồng bộ Danh bạ liên kết lên hệ thống thành công!');
      setTimeout(() => {
        setStatusMessage('');
        setMode('view');
      }, 1500);
    } catch (e: any) {
      alert('Lỗi lưu danh bạ: ' + e?.message);
    } finally {
      setIsSaving(false);
    }
  };

  const renderIcon = (iconId?: string, className = 'w-5 h-5') => {
    const opt = ICON_OPTIONS.find((o) => o.id === iconId) || ICON_OPTIONS[0];
    const IconComponent = opt.icon;
    return <IconComponent className={className} />;
  };

  const getIconColorClass = (iconId?: string) => {
    const opt = ICON_OPTIONS.find((o) => o.id === iconId) || ICON_OPTIONS[0];
    return opt.color;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto no-print">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95">
        
        {/* ================================================================= */}
        {/* MODAL HEADER */}
        {/* ================================================================= */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-3 bg-gradient-to-r from-sky-50/50 via-white to-indigo-50/30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold shadow-xs shrink-0">
              <Link2 className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-800 tracking-tight font-['Lexend'] uppercase">
                {mode === 'view' ? 'Danh Bạ Liên Kết' : 'Cập Nhật Danh Bạ Liên Kết'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {mode === 'view'
                  ? 'Truy cập nhanh các công cụ và tiện ích học tập trực tuyến'
                  : 'Thêm mới, chỉnh sửa, đổi thứ tự và quản lý liên kết trên toàn hệ thống'}
              </p>
            </div>
          </div>

          {/* Nút hành động góc phải */}
          <div className="flex items-center gap-2">
            {mode === 'view' ? (
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  if (canEdit) {
                    setMode('edit');
                  } else {
                    setShowManageAuthModal(true);
                    setManagePinInput('');
                    setManagePinError('');
                  }
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                  canEdit
                    ? 'border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-900'
                    : 'border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-900'
                }`}
                title={canEdit ? 'Mở giao diện quản lý liên kết' : 'Yêu cầu quyền Giáo viên / Admin để mở'}
              >
                {canEdit ? (
                  <Unlock className="w-3.5 h-3.5 text-emerald-700" />
                ) : (
                  <Lock className="w-3.5 h-3.5 text-amber-700" />
                )}
                <span>Quản Lý Liên Kết</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setMode('view');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer shadow-2xs"
              >
                <span>Xem Danh Bạ</span>
              </button>
            )}

            {/* Dấu X đóng modal luôn ở góc trên bên phải */}
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              title="Đóng cửa sổ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* MODAL BODY */}
        {/* ================================================================= */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-50/50 space-y-4">
          
          {/* --------------------------------------------------------------- */}
          {/* VIEW MODE: LƯỚI DANH BẠ LIÊN KẾT (TƯƠNG TỰ HÌNH 1) */}
          {/* --------------------------------------------------------------- */}
          {mode === 'view' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {links.map((item) => {
                const adminOnly = isLinkAdminOnly(item);
                const isLocked = adminOnly && !canEdit;

                return (
                  <a
                    key={item.id}
                    href={isLocked ? '#' : item.url}
                    target={isLocked ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (isLocked) {
                        e.preventDefault();
                        sound.playClick();
                        setPendingAdminLink(item);
                        setLinkPinInput('');
                        setLinkPinError('');
                      } else {
                        sound.playClick();
                      }
                    }}
                    className={`flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-pointer ${
                      isLocked
                        ? 'border-amber-200/90 hover:border-amber-400 bg-amber-50/20'
                        : 'border-slate-200/90 hover:border-sky-400'
                    }`}
                    title={item.desc || item.title}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs transition-transform group-hover:scale-105 ${getIconColorClass(
                          item.icon
                        )}`}
                      >
                        {renderIcon(item.icon, 'w-5 h-5')}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-slate-800 text-sm group-hover:text-sky-700 transition-colors truncate">
                          {item.title}
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <div className="text-[11px] text-slate-400 truncate max-w-[130px] font-mono">
                            {item.url.replace(/^https?:\/\//, '')}
                          </div>
                          {adminOnly && (
                            <span
                              className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider shrink-0 inline-flex items-center gap-0.5 ${
                                canEdit
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              <Lock className="w-2.5 h-2.5" />
                              {canEdit ? 'Giáo viên' : 'Khóa GV'}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {isLocked ? (
                      <div
                        className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                        title="Yêu cầu quyền Giáo viên / Admin để mở"
                      >
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-sky-600 transition-colors shrink-0" />
                    )}
                  </a>
                );
              })}
            </div>
          )}

          {/* --------------------------------------------------------------- */}
          {/* EDIT MODE: CẬP NHẬT DANH BẠ LIÊN KẾT (TƯƠNG TỰ HÌNH 2) */}
          {/* --------------------------------------------------------------- */}
          {mode === 'edit' && (
            canEdit ? (
              <div className="space-y-5">
                {/* 1. KHU VỰC THÔNG BÁO QUYỀN GIÁO VIÊN / ADMIN */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      <Check className="w-3.5 h-3.5" />
                      <span>Đã xác thực quyền Giáo viên / Quản trị viên</span>
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium italic">
                    Toàn quyền thêm, sửa, đổi vị trí và xóa liên kết
                  </span>
                </div>

                {/* 2. FORM THÊM MỚI HOẶC CHỈNH SỬA LIÊN KẾT */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-xs sm:text-sm text-sky-900 uppercase tracking-tight flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-sky-600" />
                      <span>{editingId ? 'Chỉnh Sửa Liên Kết' : 'Thêm Liên Kết Mới'}</span>
                    </h4>
                    {editingId && (
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                      >
                        Hủy chỉnh sửa
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                    {/* Tên liên kết */}
                    <div className="sm:col-span-4 space-y-1">
                      <label className="text-[11px] font-bold text-slate-600">
                        Tên liên kết / Tiêu đề: <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                        placeholder="VD: Cổng Tra Cứu Điểm"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white font-medium"
                      />
                    </div>

                    {/* Địa chỉ URL */}
                    <div className="sm:col-span-5 space-y-1">
                      <label className="text-[11px] font-bold text-slate-600">
                        Địa chỉ URL: <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formUrl}
                        onChange={(e) => setFormUrl(e.target.value)}
                        placeholder="https://..."
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white font-medium font-mono"
                      />
                    </div>

                    {/* Biểu tượng (Icon) */}
                    <div className="sm:col-span-3 space-y-1">
                      <label className="text-[11px] font-bold text-slate-600">
                        Biểu tượng (Icon):
                      </label>
                      <select
                        value={formIcon}
                        onChange={(e) => setFormIcon(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white font-medium"
                      >
                        {ICON_OPTIONS.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Tùy chọn bảo mật Giáo viên */}
                    <div className="sm:col-span-12 pt-1">
                      <label className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={formRequiresAdmin}
                          onChange={(e) => setFormRequiresAdmin(e.target.checked)}
                          className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 cursor-pointer"
                        />
                        <span className="inline-flex items-center gap-1.5 text-amber-800">
                          <Lock className="w-3.5 h-3.5 text-amber-600" />
                          Chỉ cho phép Giáo viên / Admin mở liên kết này (Yêu cầu mã PIN hoặc Đăng nhập)
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={handleSaveItem}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span>{editingId ? 'Cập Nhật Liên Kết' : 'Thêm Vào Danh Sách'}</span>
                    </button>
                  </div>
                </div>

                {/* 3. DANH SÁCH LIÊN KẾT HIỆN CÓ */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 uppercase tracking-tight">
                      📋 Danh Sách Liên Kết Hiện Có ( {links.length} )
                    </h4>

                    <button
                      type="button"
                      onClick={handleRestoreDefault}
                      className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-sky-700 font-bold transition-colors cursor-pointer"
                      title="Khôi phục danh sách liên kết chuẩn của hệ thống Tin học"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Khôi phục mặc định</span>
                    </button>
                  </div>

                  {/* Danh sách các hàng */}
                  <div className="divide-y divide-slate-100">
                    {links.map((item, idx) => (
                      <div
                        key={item.id}
                        className="py-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 px-2 rounded-xl transition-colors"
                      >
                        {/* Vị trí & Thông tin */}
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-6 text-center text-xs font-bold text-slate-400 font-mono shrink-0">
                            {idx + 1}
                          </span>
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${getIconColorClass(
                              item.icon
                            )}`}
                          >
                            {renderIcon(item.icon, 'w-4 h-4')}
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-xs sm:text-sm text-slate-800 truncate flex items-center gap-1.5">
                              <span className="truncate">{item.title}</span>
                              {isLinkAdminOnly(item) && (
                                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800 shrink-0 inline-flex items-center gap-0.5">
                                  <Lock className="w-2.5 h-2.5" /> Khóa GV
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono truncate max-w-xs sm:max-w-md">
                              {item.url}
                            </div>
                          </div>
                        </div>

                        {/* Nút điều khiển (Lên, Xuống, Sửa, Xóa) */}
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleMoveUp(idx)}
                            disabled={idx === 0}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 disabled:opacity-30 cursor-pointer"
                            title="Di chuyển lên"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleMoveDown(idx)}
                            disabled={idx === links.length - 1}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 disabled:opacity-30 cursor-pointer"
                            title="Di chuyển xuống"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleStartEdit(item)}
                            className="p-1.5 rounded-lg text-amber-600 hover:bg-amber-100/60 cursor-pointer"
                            title="Chỉnh sửa liên kết này"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-100/60 cursor-pointer"
                            title="Xóa liên kết này"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-14 px-4 flex flex-col items-center justify-center text-center space-y-4 max-w-md mx-auto">
                <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
                  <Lock className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-800 text-lg font-['Lexend']">
                    Yêu Cầu Quyền Giáo Viên
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Mục <strong>Quản Lý Liên Kết</strong> chỉ dành riêng cho Giáo viên / Quản trị viên để thêm, sửa và xóa các địa chỉ trang web.
                  </p>
                </div>

                <div className="w-full space-y-2 pt-2">
                  <input
                    type="password"
                    autoFocus
                    value={managePinInput}
                    onChange={(e) => {
                      setManagePinInput(e.target.value);
                      setManagePinError('');
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleVerifyManagePin();
                    }}
                    placeholder="Nhập mã PIN Giáo viên (VD: 2024)"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-sky-500 text-sm font-bold text-center tracking-widest bg-white"
                  />
                  {managePinError && (
                    <p className="text-[11px] font-bold text-rose-600">⚠️ {managePinError}</p>
                  )}
                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setMode('view')}
                      className="flex-1 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 font-bold text-xs cursor-pointer transition-colors"
                    >
                      Quay lại danh bạ
                    </button>
                    <button
                      type="button"
                      onClick={handleVerifyManagePin}
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold text-xs cursor-pointer shadow-md shadow-sky-600/30 transition-all active:scale-98"
                    >
                      Mở Quản Lý
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* ================================================================= */}
        {/* MODAL FOOTER */}
        {/* ================================================================= */}
        <div className="px-5 py-3.5 border-t border-slate-100 bg-white flex items-center justify-between gap-3 shrink-0">
          <div>
            {statusMessage && (
              <span className="text-xs font-bold text-emerald-600 animate-in fade-in">
                {statusMessage}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                if (mode === 'edit') setMode('view');
                else onClose();
              }}
              className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              {mode === 'edit' ? 'Đóng / Xem Lại' : 'Đóng'}
            </button>

            {mode === 'edit' && canEdit && (
              <button
                type="button"
                onClick={handleSaveAndSyncToCloud}
                disabled={isSaving}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-extrabold text-xs shadow-md shadow-sky-600/30 transition-all cursor-pointer active:scale-98 disabled:opacity-50"
              >
                <Cloud className="w-4 h-4" />
                <span>{isSaving ? 'Đang lưu...' : 'LƯU & ĐỒNG BỘ LIÊN KẾT'}</span>
              </button>
            )}
          </div>
        </div>

        {/* ================================================================= */}
        {/* POPUP XÁC THỰC MÃ PIN CHO LIÊN KẾT BẢO MẬT GIÁO VIÊN */}
        {/* ================================================================= */}
        {pendingAdminLink && (
          <div className="fixed inset-0 z-70 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 shadow-xs">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base font-['Lexend']">
                    Xác Thực Quyền Giáo Viên
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">Khu vực bảo mật Ngân hàng dữ liệu</p>
                </div>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200/80 space-y-1">
                <div className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>🔒 Liên kết được bảo vệ:</span>
                </div>
                <div className="font-extrabold text-slate-800 text-sm">
                  {pendingAdminLink.title}
                </div>
                <p className="text-[11px] text-amber-700 pt-1">
                  Liên kết này chứa dữ liệu đề thi & bảng điểm, chỉ dành riêng cho Giáo viên. Vui lòng nhập mã PIN để mở:
                </p>
              </div>

              <div className="space-y-1.5">
                <input
                  type="password"
                  autoFocus
                  value={linkPinInput}
                  onChange={(e) => {
                    setLinkPinInput(e.target.value);
                    setLinkPinError('');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleUnlockAndOpenPendingLink();
                  }}
                  placeholder="Nhập mã PIN Giáo viên (VD: 2024)"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-sky-500 text-sm font-bold text-center tracking-widest bg-slate-50 focus:bg-white"
                />
                {linkPinError && (
                  <p className="text-[11px] font-bold text-rose-600 text-center">
                    ⚠️ {linkPinError}
                  </p>
                )}
              </div>

              <div className="flex gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setPendingAdminLink(null);
                  }}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 font-bold text-xs cursor-pointer transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  type="button"
                  onClick={handleUnlockAndOpenPendingLink}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold text-xs cursor-pointer shadow-md shadow-sky-600/30 transition-all active:scale-98"
                >
                  Xác nhận & Mở link
                </button>
              </div>
            </div>
          </div>
        )}
        {/* ================================================================= */}
        {/* POPUP XÁC THỰC MÃ PIN ĐỂ VÀO MỤC QUẢN LÝ LIÊN KẾT */}
        {/* ================================================================= */}
        {showManageAuthModal && (
          <div className="fixed inset-0 z-70 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 shadow-xs">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base font-['Lexend']">
                    Xác Thực Quyền Giáo Viên
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">Bảo mật mục Quản Lý Liên Kết</p>
                </div>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200/80 space-y-1">
                <div className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>🔒 Quyền Quản Trị Hệ Thống:</span>
                </div>
                <p className="text-[11px] text-amber-800">
                  Mục <strong>Quản Lý Liên Kết</strong> cho phép thêm mới, chỉnh sửa, đổi thứ tự hoặc xóa liên kết trên toàn trường. Chỉ dành riêng cho Giáo viên. Vui lòng nhập mã PIN:
                </p>
              </div>

              <div className="space-y-1.5">
                <input
                  type="password"
                  autoFocus
                  value={managePinInput}
                  onChange={(e) => {
                    setManagePinInput(e.target.value);
                    setManagePinError('');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleVerifyManagePin();
                  }}
                  placeholder="Nhập mã PIN Giáo viên (VD: 2024)"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-sky-500 text-sm font-bold text-center tracking-widest bg-slate-50 focus:bg-white"
                />
                {managePinError && (
                  <p className="text-[11px] font-bold text-rose-600 text-center">
                    ⚠️ {managePinError}
                  </p>
                )}
              </div>

              <div className="flex gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setShowManageAuthModal(false);
                  }}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 font-bold text-xs cursor-pointer transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  type="button"
                  onClick={handleVerifyManagePin}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-bold text-xs cursor-pointer shadow-md shadow-sky-600/30 transition-all active:scale-98"
                >
                  Vào Quản Lý
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
