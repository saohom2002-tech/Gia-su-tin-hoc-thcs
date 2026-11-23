import React, { useState } from 'react';
import {
  GraduationCap,
  History,
  Volume2,
  VolumeX,
  Sparkles,
  BookOpenCheck,
  UserCheck,
  BookOpen,
  Trophy,
  ShieldCheck,
  Lock,
  Play,
  Loader2,
  Menu,
  ChevronDown,
  Gamepad2,
  HelpCircle,
  Layers,
  Award,
  AlertCircle
} from 'lucide-react';
import { sound } from '../utils/sound';
import { StudentProfile } from '../types/quiz';
import { StudentAvatar } from './StudentAvatar';
import schoolLogo from '../assets/logo-thcs-tan-binh.jpg';

export interface HeaderSummaryInfo {
  lesson: string;
  count: number;
  difficulty: string;
  source: string;
}

interface HeaderProps {
  onOpenHistory: () => void;
  historyCount: number;
  onGoHome: () => void;
  isHome: boolean;
  soundEnabled: boolean;
  onToggleSound: () => void;
  studentProfile?: StudentProfile;
  onOpenProfileModal?: () => void;
  onOpenMistakes?: () => void;
  mistakesCount?: number;
  onOpenScorebook?: () => void;
  onOpenAdminStudio?: () => void;
  isAdminLoggedIn?: boolean;
  onToggleSidebar?: () => void;

  // New navigation props inspired by TBS Thanh Binh
  onScrollToTopics?: () => void;
  onScrollToCustomExams?: () => void;
  onOpenGuide?: () => void;

  onStartGenerateQuiz?: () => void;
  isGenerating?: boolean;
  canStartQuiz?: boolean;
  summaryInfo?: HeaderSummaryInfo;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenHistory,
  historyCount,
  onGoHome,
  isHome,
  soundEnabled,
  onToggleSound,
  studentProfile,
  onOpenProfileModal,
  onOpenMistakes,
  mistakesCount = 0,
  onOpenScorebook,
  onOpenAdminStudio,
  isAdminLoggedIn = false,
  onToggleSidebar,
  onScrollToTopics,
  onScrollToCustomExams,
  onOpenGuide,
  onStartGenerateQuiz,
  isGenerating = false,
  canStartQuiz = true,
  summaryInfo,
}) => {
  const [isLookupDropdownOpen, setIsLookupDropdownOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-sky-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* 1. LEFT SIDE: Menu Hamburger + Logo + Tên Hệ Thống & Tác Giả */}
        <div className="flex items-center gap-2 shrink-0">
          {onToggleSidebar && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onToggleSidebar();
              }}
              className="p-2 rounded-xl text-slate-600 hover:text-sky-700 hover:bg-sky-50 border border-slate-200 lg:border-transparent transition-all cursor-pointer shrink-0"
              title="Đóng / Mở thanh menu bên trái"
              aria-label="Thanh menu chính"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          {/* Logo and Brand Title (Phối màu & font chuẩn phong cách TBS) */}
          <button
            onClick={onGoHome}
            className="flex items-center gap-2.5 text-left group transition-transform active:scale-95 shrink-0 cursor-pointer"
            title="Về trang chủ"
          >
            <div className="relative shrink-0">
              <img
                src={schoolLogo}
                alt="Logo Trường THCS Tân Bình"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-contain bg-white p-0.5 border-2 border-sky-300 shadow-md group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="font-black text-sm sm:text-base md:text-lg tracking-tight text-sky-800 font-['Lexend'] uppercase">
                  HỆ THỐNG HỌC TẬP TÂN BÌNH
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-rose-600 italic leading-tight mt-0.5">
                GV: Ms. Trúc Tin Học
              </p>
            </div>
          </button>
        </div>

        {/* 2. CENTER: CÁC TAB ĐIỀU HƯỚNG GOM NHÓM (Chuẩn như ảnh Trường Thanh Bình) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-black uppercase tracking-tight">
          {/* Tab 1: Tổng Quan */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onGoHome();
            }}
            className={`px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer ${
              isHome
                ? 'text-sky-700 border-b-2 border-sky-600 bg-sky-50/70 font-extrabold shadow-2xs'
                : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50'
            }`}
          >
            <span>🏠</span>
            <span>Tổng Quan</span>
          </button>

          {/* Tab 2: Chủ Đề SGK */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              if (onScrollToTopics) onScrollToTopics();
              else onGoHome();
            }}
            className="px-3 py-2 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chủ Đề SGK</span>
          </button>

          {/* Tab 3: Kho Đề Thi */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              if (onScrollToCustomExams) onScrollToCustomExams();
              else onGoHome();
            }}
            className="px-3 py-2 text-slate-600 hover:text-sky-700 hover:bg-sky-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            <span>Kho Đề Thi</span>
          </button>

          {/* Tab 4: Sân Chơi Game (Mở tab mới theo yêu cầu) */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              window.open('/games/', '_blank');
            }}
            className="px-3 py-2 text-purple-700 hover:bg-purple-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer group"
            title="Mở tab Sân chơi Game tri thức (16 trò chơi trực tuyến)"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-purple-600 group-hover:rotate-12 transition-transform" />
            <span>Sân Chơi Game</span>
            <span className="px-1.5 py-0.2 rounded-full bg-purple-200 text-purple-900 text-[9px] font-mono font-black">
              16 Trò
            </span>
          </button>

          {/* Tab 5: Gom Nhóm Tra Cứu Kết Quả (Dropdown Menu) */}
          <div
            className="relative"
            onMouseEnter={() => setIsLookupDropdownOpen(true)}
            onMouseLeave={() => setIsLookupDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLookupDropdownOpen((prev) => !prev)}
              className="px-3 py-2 text-amber-800 hover:bg-amber-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>Tra Cứu ▾</span>
              {mistakesCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              )}
            </button>

            {isLookupDropdownOpen && (
              <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-1">
                {onOpenScorebook && (
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setIsLookupDropdownOpen(false);
                      onOpenScorebook();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-amber-50 text-xs font-bold text-amber-950 transition-colors cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-600" />
                      <span>Bảng Vàng Vinh Danh</span>
                    </div>
                    <span className="text-xs text-amber-500">→</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setIsLookupDropdownOpen(false);
                    onOpenHistory();
                  }}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-sky-50 text-xs font-bold text-sky-950 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2">
                    <History className="w-4 h-4 text-sky-600" />
                    <span>Lịch Sử & Giấy Khen</span>
                  </div>
                  {historyCount > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full bg-sky-100 text-sky-800 text-[10px]">
                      {historyCount}
                    </span>
                  )}
                </button>

                {onOpenMistakes && (
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setIsLookupDropdownOpen(false);
                      onOpenMistakes();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-rose-50 text-xs font-bold text-rose-900 transition-colors cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600" />
                      <span>Sổ Tay Câu Sai</span>
                    </div>
                    {mistakesCount > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full bg-rose-600 text-white text-[10px]">
                        {mistakesCount}
                      </span>
                    )}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Tab 6: Hướng Dẫn */}
          {onOpenGuide && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenGuide();
              }}
              className="px-3 py-2 text-slate-600 hover:text-sky-700 hover:bg-sky-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
              <span>Hướng Dẫn</span>
            </button>
          )}

          {/* Tab 7: Dành Cho Giáo Viên */}
          {onOpenAdminStudio && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenAdminStudio();
              }}
              className={`px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
                isAdminLoggedIn
                  ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-indigo-700 hover:bg-indigo-50'
              }`}
            >
              <ShieldCheck className={`w-3.5 h-3.5 ${isAdminLoggedIn ? 'text-amber-300' : 'text-indigo-600'}`} />
              <span>{isAdminLoggedIn ? 'Studio Ms. Trúc' : 'Giáo Viên'}</span>
            </button>
          )}
        </nav>

        {/* 3. RIGHT SIDE: Thẻ Hồ Sơ Học Sinh & Điều Khiển Âm Thanh */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Quick Quiz Launch Button (Hiện gọn gàng khi ở trang chủ) */}
          {isHome && onStartGenerateQuiz && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onStartGenerateQuiz();
              }}
              disabled={isGenerating || !canStartQuiz}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs shadow-md shadow-emerald-600/25 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
              title="Bắt đầu tạo câu hỏi và làm bài ngay"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span className="hidden sm:inline">Đang tạo đề...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>BẮT ĐẦU ÔN TẬP</span>
                </>
              )}
            </button>
          )}

          {/* Student Profile Chip */}
          {studentProfile && onOpenProfileModal && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenProfileModal();
              }}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 rounded-2xl border border-sky-200 bg-sky-50/70 hover:bg-sky-100/80 text-slate-800 transition-all shadow-2xs group cursor-pointer"
              title="Nhấn để đổi tên học sinh, lớp hoặc avatar"
            >
              <StudentAvatar
                avatarIdOrUrl={studentProfile.avatar}
                name={studentProfile.fullName}
                size="xs"
              />
              <div className="text-left hidden sm:block max-w-[110px]">
                <div className="text-[11px] font-extrabold text-slate-800 truncate leading-tight group-hover:text-sky-700">
                  {studentProfile.fullName || 'Học sinh'}
                </div>
                <div className="text-[10px] font-bold text-sky-700 leading-tight">
                  {studentProfile.className ? `Lớp ${studentProfile.className}` : 'Lớp 8A1'} • <span className="underline">Đổi ✏️</span>
                </div>
              </div>
            </button>
          )}

          {/* Sound Toggle Button */}
          <button
            onClick={onToggleSound}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors border border-transparent hover:border-slate-200 cursor-pointer"
            title={soundEnabled ? 'Tắt âm thanh hiệu ứng' : 'Bật âm thanh hiệu ứng'}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-sky-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
