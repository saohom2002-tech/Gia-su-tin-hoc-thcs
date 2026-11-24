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
  AlertCircle,
  Link2,
  School
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
  activeTab?: 'overview' | 'topics' | 'exams';

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
  activeTab = 'overview',
  onStartGenerateQuiz,
  isGenerating = false,
  canStartQuiz = true,
  summaryInfo,
}) => {
  const [isLookupDropdownOpen, setIsLookupDropdownOpen] = useState(false);
  const [isLinksDropdownOpen, setIsLinksDropdownOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-sky-200/90 shadow-xs w-full">
      <div className="w-full px-2 sm:px-4 md:px-6 h-16 flex items-center justify-between gap-1.5 sm:gap-3">
        
        {/* 1. LEFT SIDE: Menu Hamburger + Logo + Tên Hệ Thống & Tác Giả */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {onToggleSidebar && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onToggleSidebar();
              }}
              className="p-1.5 sm:p-2 rounded-xl text-slate-600 hover:text-sky-700 hover:bg-sky-50 border border-slate-200 lg:border-transparent transition-all cursor-pointer shrink-0"
              title="Đóng / Mở thanh menu bên trái"
              aria-label="Thanh menu chính"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          {/* Logo and Brand Title */}
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 text-left group transition-transform active:scale-95 shrink-0 cursor-pointer"
            title="Về trang chủ"
          >
            <div className="relative shrink-0">
              <img
                src={schoolLogo}
                alt="Logo Trường THCS Tân Bình"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-contain bg-white p-0.5 border-2 border-sky-300 shadow-md group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="hidden xs:block">
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="font-black text-xs sm:text-sm md:text-base tracking-tight text-sky-800 font-['Lexend'] uppercase whitespace-nowrap">
                  HỆ THỐNG HỌC TẬP TÂN BÌNH
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-rose-600 italic leading-tight mt-0.5 whitespace-nowrap">
                GV: Ms. Trúc Tin Học
              </p>
            </div>
          </button>
        </div>

        {/* 2. CENTER: CÁC TAB ĐIỀU HƯỚNG GOM NHÓM DÀN ĐỀU, KHÔNG XUỐNG DÒNG */}
        <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0 gap-1 xl:gap-2 text-[13px] xl:text-sm font-extrabold uppercase tracking-tight px-1 overflow-x-auto no-scrollbar">
          {/* Tab 1: Tổng Quan */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onGoHome();
            }}
            className={`px-2.5 xl:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              isHome && activeTab === 'overview'
                ? 'text-sky-700 border-b-2 border-sky-600 bg-sky-50/70 font-black shadow-2xs'
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
            className={`px-2.5 xl:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              isHome && activeTab === 'topics'
                ? 'text-emerald-700 border-b-2 border-emerald-600 bg-emerald-50/70 font-black shadow-2xs'
                : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-600" />
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
            className={`px-2.5 xl:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              isHome && activeTab === 'exams'
                ? 'text-sky-700 border-b-2 border-sky-600 bg-sky-50/70 font-black shadow-2xs'
                : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Kho Đề Thi</span>
          </button>

          {/* Tab 4: Sân Chơi Game (Mở tab mới theo yêu cầu) */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              window.open('/games/', '_blank');
            }}
            className="px-2.5 xl:px-3 py-1.5 text-purple-700 hover:bg-purple-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer group whitespace-nowrap shrink-0"
            title="Mở tab Sân chơi Game tri thức (16 trò chơi trực tuyến)"
          >
            <Gamepad2 className="w-4 h-4 text-purple-600 group-hover:rotate-12 transition-transform" />
            <span>Sân Chơi Game</span>
            <span className="px-1.5 py-0.2 rounded-full bg-purple-200 text-purple-900 text-[10px] font-mono font-black">
              16 Trò
            </span>
          </button>

          {/* Tab 5: AI BOOKS */}
          <a
            href="https://ai-books-thpt.leira.com.vn/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="px-2.5 xl:px-3 py-1.5 text-blue-700 hover:bg-blue-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer group whitespace-nowrap shrink-0"
            title="Mở nền tảng AI BOOKS - Sách điện tử & Nền tảng học tập THPT"
          >
            <Sparkles className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
            <span>AI BOOKS</span>
            <span className="px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-800 text-[10px] font-mono font-black">
              THPT ↗
            </span>
          </a>

          {/* Tab 6: Liên Kết (Dropdown Menu) */}
          <div
            className="relative shrink-0"
            onMouseEnter={() => setIsLinksDropdownOpen(true)}
            onMouseLeave={() => setIsLinksDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLinksDropdownOpen((prev) => !prev)}
              className="px-2.5 xl:px-3 py-1.5 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title="Danh mục các trang liên kết & tài nguyên ngoài"
            >
              <Link2 className="w-4 h-4 text-blue-600" />
              <span>Liên Kết ▾</span>
            </button>

            {isLinksDropdownOpen && (
              <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-1">
                <a
                  href="https://ai-books-thpt.leira.com.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsLinksDropdownOpen(false)}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-blue-50 text-xs font-bold text-blue-950 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>AI BOOKS (THPT)</span>
                  </div>
                  <span className="text-[10px] font-mono font-black text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">
                    ↗
                  </span>
                </a>

                <a
                  href="https://thcstanbinh.hcm.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsLinksDropdownOpen(false)}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-sky-50 text-xs font-bold text-sky-950 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2">
                    <School className="w-4 h-4 text-sky-600" />
                    <span>Trường THCS Tân Bình</span>
                  </div>
                  <span className="text-[10px] font-mono font-black text-sky-600 bg-sky-100 px-1.5 py-0.5 rounded">
                    ↗
                  </span>
                </a>

                <a
                  href="https://zalo.me/0908959627"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsLinksDropdownOpen(false)}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-emerald-50 text-xs font-bold text-emerald-950 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-center text-xs">💬</span>
                    <span>Liên Hệ Zalo Ms. Trúc</span>
                  </div>
                  <span className="text-[10px] font-mono font-black text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                    0908...
                  </span>
                </a>

                <a
                  href="https://drive.google.com/drive/folders/1MnvzQAzv62Xiw9ziU2jH5T37ObFmADg4?lfhs=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsLinksDropdownOpen(false)}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-amber-50 text-xs font-bold text-amber-950 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-center text-xs">📁</span>
                    <span>Google Drive Tài Liệu</span>
                  </div>
                  <span className="text-[10px] font-mono font-black text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                    Drive
                  </span>
                </a>

                <a
                  href="https://docs.google.com/spreadsheets/d/1sw7iAQZw2cD7USR3O5tY6P6MvOqbWBvhuBORvr0dxNo/edit?gid=0#gid=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsLinksDropdownOpen(false)}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-green-50 text-xs font-bold text-green-950 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-center text-xs">📊</span>
                    <span>Google Sheet Đề Gốc</span>
                  </div>
                  <span className="text-[10px] font-mono font-black text-green-700 bg-green-100 px-1.5 py-0.5 rounded">
                    Sheet
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* Tab 7: Gom Nhóm Tra Cứu Kết Quả (Dropdown Menu) */}
          <div
            className="relative shrink-0"
            onMouseEnter={() => setIsLookupDropdownOpen(true)}
            onMouseLeave={() => setIsLookupDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLookupDropdownOpen((prev) => !prev)}
              className="px-2.5 xl:px-3 py-1.5 text-amber-800 hover:bg-amber-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Trophy className="w-4 h-4 text-amber-600" />
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

          {/* Tab 8: Hướng Dẫn */}
          {onOpenGuide && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenGuide();
              }}
              className="px-2.5 xl:px-3 py-1.5 text-slate-600 hover:text-sky-700 hover:bg-sky-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <HelpCircle className="w-4 h-4 text-sky-600" />
              <span>Hướng Dẫn</span>
            </button>
          )}

          {/* Tab 9: Dành Cho Giáo Viên */}
          {onOpenAdminStudio && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenAdminStudio();
              }}
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                isAdminLoggedIn
                  ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-indigo-700 hover:bg-indigo-50'
              }`}
            >
              <ShieldCheck className={`w-4 h-4 ${isAdminLoggedIn ? 'text-amber-300' : 'text-indigo-600'}`} />
              <span>{isAdminLoggedIn ? 'Studio Ms. Trúc' : 'Giáo Viên'}</span>
            </button>
          )}
        </nav>

        {/* 3. RIGHT SIDE: Thẻ Hồ Sơ Học Sinh & Điều Khiển Âm Thanh */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Quick Quiz Launch Button */}
          {isHome && onStartGenerateQuiz && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onStartGenerateQuiz();
              }}
              disabled={isGenerating || !canStartQuiz}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs shadow-md shadow-emerald-600/25 transition-all active:scale-95 disabled:opacity-50 cursor-pointer whitespace-nowrap shrink-0"
              title="Bắt đầu tạo câu hỏi và làm bài ngay"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span className="hidden sm:inline">Đang tạo...</span>
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
              className="flex items-center gap-1.5 px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-2xl border border-sky-200 bg-sky-50/70 hover:bg-sky-100/80 text-slate-800 transition-all shadow-2xs group cursor-pointer shrink-0"
              title="Nhấn để đổi tên học sinh, lớp hoặc avatar"
            >
              <StudentAvatar
                avatarIdOrUrl={studentProfile.avatar}
                name={studentProfile.fullName}
                size="xs"
              />
              <div className="text-left hidden xl:block max-w-[100px]">
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
            className="p-1.5 sm:p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors border border-transparent hover:border-slate-200 cursor-pointer shrink-0"
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
