import React, { useState } from 'react';
import {
  GraduationCap,
  Home,
  BookOpen,
  FileText,
  AlertCircle,
  Gamepad2,
  PenTool,
  Trophy,
  Award,
  History,
  ShieldCheck,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  User,
  Music,
  ExternalLink
} from 'lucide-react';
import { StudentProfile } from '../types/quiz';
import { StudentAvatar } from './StudentAvatar';
import { sound } from '../utils/sound';
import schoolLogo from '../assets/logo-thcs-tan-binh.jpg';
import { SIDEBAR_GAMES, SIDEBAR_ACTIVITIES, TBSGameItem } from '../data/sidebarGames';

export interface SidebarMenuProps {
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  activeSection?: string;

  // Actions
  onGoHome: () => void;
  onScrollToCustomExams: () => void;
  onOpenScorebook: () => void;
  onOpenMistakes: () => void;
  onOpenHistory: () => void;
  onOpenAdminStudio: () => void;
  onOpenEssayModal: () => void;
  onOpenGrade5Game: () => void;
  onOpenProfileModal: () => void;
  onSelectGame?: (game: TBSGameItem) => void;

  // Data & Badges
  studentProfile?: StudentProfile;
  mistakesCount: number;
  historyCount: number;
  customExamsCount: number;
  isAdminLoggedIn: boolean;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpenMobile,
  onCloseMobile,
  isCollapsed,
  onToggleCollapse,
  activeSection = 'home',
  onGoHome,
  onScrollToCustomExams,
  onOpenScorebook,
  onOpenMistakes,
  onOpenHistory,
  onOpenAdminStudio,
  onOpenEssayModal,
  onOpenGrade5Game,
  onOpenProfileModal,
  onSelectGame,
  studentProfile,
  mistakesCount = 0,
  historyCount = 0,
  customExamsCount = 0,
  isAdminLoggedIn = false,
  soundEnabled,
  onToggleSound,
}) => {
  const handleItemClick = (action: () => void) => {
    sound.playClick();
    action();
    // Trên mobile tự động đóng sidebar sau khi chọn
    onCloseMobile();
  };

  // Nội dung chính của Sidebar (Dùng chung cho cả Desktop và Mobile Drawer)
  const renderSidebarContent = () => {
    return (
      <div className="flex flex-col h-full bg-white select-none">
        {/* 1. Header Sidebar: Logo & Nút Thu gọn */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-slate-200/90 shrink-0 bg-gradient-to-r from-sky-50/70 to-indigo-50/50">
          <button
            type="button"
            onClick={() => handleItemClick(onGoHome)}
            className="flex items-center gap-3 text-left min-w-0 group cursor-pointer"
            title="Gia Sư Tin Học THCS - Về trang chủ"
          >
            <div className="relative shrink-0">
              <img
                src={schoolLogo}
                alt="Logo THCS Tân Bình"
                className="w-10 h-10 rounded-full object-contain bg-white p-0.5 border border-sky-300 shadow-md shrink-0 group-hover:scale-105 transition-transform"
              />
            </div>

            {!isCollapsed && (
              <div className="min-w-0 animate-in fade-in duration-200">
                <div className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent truncate font-['Lexend']">
                  GIA SƯ TIN HỌC
                </div>
                <div className="text-[10px] font-bold text-sky-700 truncate">
                  SGK Kết Nối Tri Thức
                </div>
              </div>
            )}
          </button>

          {/* Nút thu gọn / mở rộng (Chỉ hiện trên desktop) */}
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-white border border-transparent hover:border-slate-200 transition-colors cursor-pointer"
            title={isCollapsed ? 'Mở rộng thanh menu (Ctrl + B)' : 'Thu gọn thanh menu (Ctrl + B)'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>

          {/* Nút đóng trên mobile */}
          <button
            type="button"
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
            title="Đóng menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Menu Navigation List (Cuộn mượt) */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-200">
          {/* Nhóm 1: Học tập & Ôn luyện */}
          <div className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
                Học tập & Ôn luyện
              </div>
            )}

            {/* Mục: Trang chủ & Bài học */}
            <button
              type="button"
              onClick={() => handleItemClick(onGoHome)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all group cursor-pointer ${
                activeSection === 'home'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25 ring-2 ring-sky-300/40'
                  : 'text-slate-700 hover:bg-sky-50/80 hover:text-sky-900'
              }`}
              title="Trang chủ & Chọn bài học SGK"
            >
              <Home className={`w-5 h-5 shrink-0 ${activeSection === 'home' ? 'text-white' : 'text-sky-600 group-hover:scale-110 transition-transform'}`} />
              {!isCollapsed && <span className="truncate">Trang Chủ & Bài Học</span>}
            </button>

            {/* Mục: Kho đề thi chuẩn SGK */}
            <button
              type="button"
              onClick={() => handleItemClick(onScrollToCustomExams)}
              className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-indigo-50/80 hover:text-indigo-900 transition-all group cursor-pointer"
              title="Kho Đề thi & Ôn tập định kỳ chuẩn SGK"
            >
              <div className="flex items-center gap-3 min-w-0">
                <BookOpen className="w-5 h-5 text-indigo-600 shrink-0 group-hover:scale-110 transition-transform" />
                {!isCollapsed && <span className="truncate">Kho Đề Thi Chuẩn</span>}
              </div>
              {!isCollapsed && customExamsCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-md bg-indigo-100 text-indigo-800 text-[10px] font-mono font-black shrink-0">
                  {customExamsCount}
                </span>
              )}
            </button>

            {/* Mục: Sổ tay câu sai */}
            <button
              type="button"
              onClick={() => handleItemClick(onOpenMistakes)}
              className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-rose-50/80 hover:text-rose-900 transition-all group cursor-pointer"
              title="Sổ tay câu sai & Lỗ hổng kiến thức cần luyện lại"
            >
              <div className="flex items-center gap-3 min-w-0">
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 group-hover:scale-110 transition-transform" />
                {!isCollapsed && <span className="truncate">Sổ Tay Câu Sai</span>}
              </div>
              {!isCollapsed && mistakesCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-mono font-black animate-pulse shrink-0">
                  {mistakesCount}
                </span>
              )}
            </button>

            {/* Mục: Tự luận & Tình huống */}
            <button
              type="button"
              onClick={() => handleItemClick(onOpenEssayModal)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-amber-50/80 hover:text-amber-900 transition-all group cursor-pointer"
              title="Ôn tập câu hỏi Tự luận & Tình huống thực tế"
            >
              <PenTool className="w-5 h-5 text-amber-600 shrink-0 group-hover:scale-110 transition-transform" />
              {!isCollapsed && <span className="truncate">Luyện Tự Luận</span>}
            </button>

            {/* Mục: Game học tập Khối 5 */}
            <button
              type="button"
              onClick={() => handleItemClick(onOpenGrade5Game)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-900 transition-all group cursor-pointer"
              title="Khảo sát năng lực & Trò chơi học tập Khối 5"
            >
              <Gamepad2 className="w-5 h-5 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
              {!isCollapsed && <span className="truncate">Game Học Tập Khối 5</span>}
            </button>
          </div>

          {/* Nhóm: TRÒ CHƠI */}
          <div className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center justify-between">
                <span>TRÒ CHƠI</span>
                <span className="text-[9px] font-bold text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded-full border border-sky-300">
                  {SIDEBAR_GAMES.length}
                </span>
              </div>
            )}

            {SIDEBAR_GAMES.map((game) => (
              <button
                key={game.id}
                type="button"
                onClick={() => {
                  sound.playClick();
                  if (onSelectGame) onSelectGame(game);
                  onCloseMobile();
                }}
                className={`w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-sky-50/80 hover:text-sky-950 transition-all group cursor-pointer ${
                  game.isComingSoon ? 'opacity-75 hover:opacity-100' : ''
                }`}
                title={`${game.name}${game.description ? ` — ${game.description}` : ''}`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${game.bgGradient} flex items-center justify-center text-base shrink-0 shadow-2xs border border-white/60 group-hover:scale-105 transition-transform`}
                  >
                    {game.icon}
                  </div>
                  {!isCollapsed && (
                    <span className="truncate text-left text-xs font-bold text-slate-800 group-hover:text-sky-800">
                      {game.shortName || game.name}
                    </span>
                  )}
                </div>

                {!isCollapsed && game.badge && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold shrink-0 ${
                      game.badgeType === 'online'
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-300/80'
                        : game.badgeType === 'soon'
                        ? 'bg-slate-100 text-slate-500 border border-slate-200'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    {game.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Nhóm: HOẠT ĐỘNG */}
          <div className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2">
                HOẠT ĐỘNG
              </div>
            )}

            {SIDEBAR_ACTIVITIES.map((act) => (
              <button
                key={act.id}
                type="button"
                onClick={() => {
                  sound.playClick();
                  if (onSelectGame) onSelectGame(act);
                  onCloseMobile();
                }}
                className="w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950 transition-all group cursor-pointer"
                title={`${act.name}${act.description ? ` — ${act.description}` : ''}`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${act.bgGradient} flex items-center justify-center text-base shrink-0 shadow-2xs border border-white/60 group-hover:scale-105 transition-transform`}
                  >
                    {act.icon}
                  </div>
                  {!isCollapsed && (
                    <span className="truncate text-left text-xs font-bold text-slate-800 group-hover:text-emerald-800">
                      {act.shortName || act.name}
                    </span>
                  )}
                </div>

                {!isCollapsed && act.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">
                    {act.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Nhóm 2: Bảng Vàng & Vinh Danh */}
          <div className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
                Thi Đua & Vinh Danh
              </div>
            )}

            {/* Mục: Bảng Vàng & Sổ Điểm */}
            <button
              type="button"
              onClick={() => handleItemClick(onOpenScorebook)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-amber-50/80 hover:text-amber-900 transition-all group cursor-pointer"
              title="Bảng Vàng Vinh Danh & Sổ Lưu Điểm Học Sinh"
            >
              <Trophy className="w-5 h-5 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
              {!isCollapsed && <span className="truncate">Bảng Vàng & Sổ Điểm</span>}
            </button>

            {/* Mục: Lịch sử làm bài */}
            <button
              type="button"
              onClick={() => handleItemClick(onOpenHistory)}
              className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all group cursor-pointer"
              title="Xem lại lịch sử các bài đã làm"
            >
              <div className="flex items-center gap-3 min-w-0">
                <History className="w-5 h-5 text-slate-500 shrink-0 group-hover:scale-110 transition-transform" />
                {!isCollapsed && <span className="truncate">Lịch Sử Làm Bài</span>}
              </div>
              {!isCollapsed && historyCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                  {historyCount}
                </span>
              )}
            </button>
          </div>

          {/* Nhóm 3: Dành Cho Giáo Viên (Admin Studio) */}
          <div className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
                Khu Vực Quản Trị
              </div>
            )}

            <button
              type="button"
              onClick={() => handleItemClick(onOpenAdminStudio)}
              className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all group cursor-pointer border ${
                isAdminLoggedIn
                  ? 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white border-indigo-500 shadow-md shadow-indigo-600/25 ring-2 ring-indigo-400/30'
                  : 'bg-indigo-50/60 hover:bg-indigo-100/70 text-indigo-900 border-indigo-200/90'
              }`}
              title={isAdminLoggedIn ? 'Studio Quản Trị Đề Thi (Đã Đăng Nhập)' : 'Mở Studio Quản Trị (Dành riêng cho Giáo viên)'}
            >
              <div className="flex items-center gap-3 min-w-0">
                <ShieldCheck className={`w-5 h-5 shrink-0 ${isAdminLoggedIn ? 'text-amber-300 stroke-[2.5]' : 'text-indigo-600 group-hover:scale-110 transition-transform'}`} />
                {!isCollapsed && <span className="truncate">Studio Quản Trị</span>}
              </div>

              {!isCollapsed && (
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider shrink-0 ${
                  isAdminLoggedIn
                    ? 'bg-emerald-400 text-emerald-950 animate-pulse'
                    : 'bg-indigo-200 text-indigo-800'
                }`}>
                  {isAdminLoggedIn ? 'Online' : 'Admin'}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* 3. Footer Sidebar: Hồ sơ học sinh & Tiện ích */}
        <div className="p-3 border-t border-slate-200/90 bg-slate-50/70 space-y-2 shrink-0">
          {/* Card học sinh */}
          {studentProfile && (
            <button
              type="button"
              onClick={() => handleItemClick(onOpenProfileModal)}
              className={`w-full p-2 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xs transition-all flex items-center gap-2.5 text-left group cursor-pointer ${
                isCollapsed ? 'justify-center p-2' : ''
              }`}
              title="Bấm để đổi họ tên hoặc chọn lớp học"
            >
              <StudentAvatar
                avatarIdOrUrl={studentProfile.avatar}
                name={studentProfile.fullName}
                size="sm"
              />

              {!isCollapsed && (
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-slate-800 truncate group-hover:text-indigo-700">
                    {studentProfile.fullName || 'Học sinh'}
                  </div>
                  <div className="text-[10px] font-bold text-indigo-600 truncate">
                    {studentProfile.className ? `Lớp: ${studentProfile.className}` : 'Chưa chọn lớp'}
                  </div>
                </div>
              )}
            </button>
          )}

          {/* Nút âm thanh SFX Toggle */}
          <div className={`flex items-center justify-between text-xs text-slate-500 px-1 ${isCollapsed ? 'justify-center' : ''}`}>
            {!isCollapsed && (
              <span className="text-[10px] font-semibold text-slate-400">
                Chuẩn GDPT 2018
              </span>
            )}

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onToggleSound();
              }}
              className="p-1.5 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-white border border-transparent hover:border-slate-200 transition-colors cursor-pointer"
              title={soundEnabled ? 'Tắt âm thanh hiệu ứng' : 'Bật âm thanh hiệu ứng'}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-emerald-600" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* A. DESKTOP PINNED SIDEBAR (Cố định bên trái màn hình lớn) */}
      <aside
        aria-label="Thanh điều hướng chính"
        className={`no-print hidden lg:flex flex-col fixed top-0 bottom-0 left-0 z-30 border-r-2 border-slate-200/90 shadow-md transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {renderSidebarContent()}
      </aside>

      {/* B. MOBILE SLIDE-OVER DRAWER (Trượt ra khi bấm Menu trên điện thoại/máy tính bảng) */}
      {isOpenMobile && (
        <div className="no-print fixed inset-0 z-50 lg:hidden flex">
          {/* Nền mờ Backdrop */}
          <div
            onClick={onCloseMobile}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          />

          {/* Khung nội dung drawer */}
          <div className="relative w-72 max-w-[85vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {renderSidebarContent()}
          </div>
        </div>
      )}
    </>
  );
};
