import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Layers,
  Gamepad2,
  Trophy,
  History,
  AlertCircle,
  PenTool,
  LogIn,
  LogOut,
  ShieldCheck,
  Edit3,
  School,
  Sparkles,
  ArrowDownCircle,
  UserCheck
} from 'lucide-react';
import { StudentProfile } from '../types/quiz';
import { StudentAvatar } from './StudentAvatar';
import schoolLogo from '../assets/logo-thcs-tan-binh.jpg';
import { sound } from '../utils/sound';

export interface RolePortalHeroProps {
  studentProfile: StudentProfile;
  onOpenProfileModal: () => void;
  onScrollToTopics: () => void;
  onScrollToCustomExams: () => void;
  onOpenScorebook: () => void;
  onOpenHistory: () => void;
  onOpenMistakes: () => void;
  mistakesCount: number;
  onOpenEssay: () => void;
  onOpenAdminStudio: () => void;
  isAdminLoggedIn: boolean;
  adminEmail?: string;
  onAdminLogin?: () => void;
  onAdminLogout?: () => void;
}

export const RolePortalHero: React.FC<RolePortalHeroProps> = ({
  studentProfile,
  onOpenProfileModal,
  onScrollToTopics,
  onScrollToCustomExams,
  onOpenScorebook,
  onOpenHistory,
  onOpenMistakes,
  mistakesCount = 0,
  onOpenEssay,
  onOpenAdminStudio,
  isAdminLoggedIn,
  adminEmail,
  onAdminLogin,
  onAdminLogout,
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-sky-300/80 p-5 sm:p-8 md:p-10 shadow-xl shadow-sky-500/10 text-slate-800">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-100/50 via-indigo-50/40 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/40 via-emerald-50/30 to-transparent rounded-full -ml-20 -mb-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {/* 1. Header Trung tâm: Logo & Tên Trường THCS Tân Bình */}
        <div className="text-center space-y-3">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-sky-700 uppercase font-['Be_Vietnam_Pro','Plus_Jakarta_Sans',sans-serif]">
            TRƯỜNG THCS TÂN BÌNH
          </h2>

          {/* Logo trường tròn ở giữa */}
          <div className="flex justify-center my-2">
            <div className="relative p-1.5 rounded-full bg-white shadow-xl shadow-sky-600/15 border-2 border-sky-300 ring-4 ring-sky-100 group transition-transform hover:scale-105">
              <img
                src={schoolLogo}
                alt="Logo Trường THCS Tân Bình"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-sky-800 tracking-tight leading-snug py-1 font-['Plus_Jakarta_Sans',sans-serif]">
              GIA SƯ TIN HỌC THCS & TIỂU HỌC
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-2xl mx-auto">
              Nền tảng Ôn tập, Kiểm tra trực tuyến & Sân chơi Game tri thức chuẩn SGK Kết Nối Tri Thức
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mt-1">
              <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
              <span>Tác giả: GV: Ms. Trúc Tin Học</span>
              <span>•</span>
              <span className="text-slate-500">TP. Hồ Chí Minh</span>
            </div>
          </div>
        </div>

        {/* 2. KHUNG PHÂN VAI (3 CỘT RÕ RÀNG: HỌC SINH - TRA CỨU - GIÁO VIÊN) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-2">
          
          {/* CỘT 1: KHU VỰC HỌC SINH (Màu xanh Mint / Emerald) */}
          <div className="rounded-3xl border-2 border-emerald-200 bg-gradient-to-b from-emerald-50/80 via-white to-emerald-50/30 p-5 flex flex-col justify-between shadow-md shadow-emerald-500/5 hover:border-emerald-300 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
                <div className="flex items-center gap-2 text-emerald-800">
                  <span className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-xs">
                    🎒
                  </span>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-emerald-950 uppercase tracking-tight">
                      Khu Vực Học Sinh
                    </h3>
                    <p className="text-[11px] text-emerald-700 font-medium">Ôn tập & kiểm tra theo khối</p>
                  </div>
                </div>
              </div>

              {/* THẺ HỒ SƠ HỌC SINH (Tự đặt tên, chọn lớp, trường & cài đặt) */}
              <div
                onClick={() => {
                  sound.playClick();
                  onOpenProfileModal();
                }}
                className="p-3.5 rounded-2xl bg-white border border-emerald-200/90 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all cursor-pointer group/prof relative"
                title="Bấm vào để đổi tên, chọn khối, lớp và trường của em"
              >
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="p-0.5 rounded-xl bg-gradient-to-tr from-amber-300 to-emerald-400">
                      <StudentAvatar
                        avatarIdOrUrl={studentProfile.avatar}
                        name={studentProfile.fullName}
                        size="sm"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] shadow-xs">
                      <Edit3 className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                        Em đang là
                      </span>
                      <span className="text-[10px] font-bold text-sky-600 group-hover/prof:underline">
                        Đổi ✏️
                      </span>
                    </div>
                    <div className="font-extrabold text-xs sm:text-sm text-slate-800 truncate">
                      {studentProfile.fullName || 'Bạn Nhỏ Thông Thái'}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 mt-0.5">
                      <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-900">
                        {studentProfile.grade || 'Khối 8'}
                      </span>
                      <span>Lớp {studentProfile.className || '8A1'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Các nút hành động chính của Học sinh */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onScrollToTopics();
                  }}
                  className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all cursor-pointer group/btn active:scale-98"
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Luyện Tập Theo Chủ Đề</span>
                  </div>
                  <ArrowDownCircle className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onScrollToCustomExams();
                  }}
                  className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-800 font-bold text-xs sm:text-sm border border-emerald-200 shadow-xs transition-all cursor-pointer active:scale-98"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    <span>Kho Đề Thi Chuẩn SGK</span>
                  </div>
                  <span className="text-xs">→</span>
                </button>

                <a
                  href="/games/"
                  className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 text-purple-900 font-bold text-xs sm:text-sm border border-purple-200/80 shadow-xs transition-all cursor-pointer active:scale-98"
                >
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4 text-purple-600" />
                    <span>Sân Chơi Game (14 Trò)</span>
                  </div>
                  <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-purple-200 text-purple-800">
                    Hot
                  </span>
                </a>
              </div>
            </div>

            <div className="pt-3 text-center border-t border-emerald-100/80 mt-3">
              <span className="text-[11px] text-emerald-700 font-semibold">
                ✨ Tự động lưu điểm & giấy khen
              </span>
            </div>
          </div>

          {/* CỘT 2: TRA CỨU KẾT QUẢ & VINH DANH (Màu Cam / Vàng Ấm) */}
          <div className="rounded-3xl border-2 border-amber-200 bg-gradient-to-b from-amber-50/80 via-white to-amber-50/30 p-5 flex flex-col justify-between shadow-md shadow-amber-500/5 hover:border-amber-300 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                <div className="flex items-center gap-2 text-amber-800">
                  <span className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-xs">
                    🏆
                  </span>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-amber-950 uppercase tracking-tight">
                      Tra Cứu Kết Quả
                    </h3>
                    <p className="text-[11px] text-amber-700 font-medium">Bảng vàng & lịch sử làm bài</p>
                  </div>
                </div>
              </div>

              {/* Lời giới thiệu tra cứu */}
              <div className="p-3.5 rounded-2xl bg-white border border-amber-200/90 text-left space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-900">
                  <Trophy className="w-3.5 h-3.5 text-amber-600" />
                  <span>Vinh Danh & Thi Đua Toàn Trường</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Xem điểm số các bạn trong lớp, chứng nhận khen thưởng và ôn lại câu đã sai.
                </p>
              </div>

              {/* Các nút tra cứu */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onOpenScorebook();
                  }}
                  className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-amber-500/25 transition-all cursor-pointer active:scale-98"
                >
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 fill-white" />
                    <span>Bảng Vàng Vinh Danh</span>
                  </div>
                  <span className="text-xs">🏆</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onOpenHistory();
                  }}
                  className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-white hover:bg-amber-50 text-amber-900 font-bold text-xs sm:text-sm border border-amber-200 shadow-xs transition-all cursor-pointer active:scale-98"
                >
                  <div className="flex items-center gap-2">
                    <History className="w-4 h-4 text-amber-600" />
                    <span>Lịch Sử Bài Làm & Giấy Khen</span>
                  </div>
                  <span className="text-xs">→</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onOpenMistakes();
                  }}
                  className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-white hover:bg-rose-50 text-rose-800 font-bold text-xs sm:text-sm border border-rose-200 shadow-xs transition-all cursor-pointer active:scale-98"
                >
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-500" />
                    <span>Sổ Tay Câu Sai Cần Luyện</span>
                  </div>
                  {mistakesCount > 0 ? (
                    <span className="px-1.5 py-0.2 rounded-full bg-rose-600 text-white text-[10px] font-mono font-black">
                      {mistakesCount}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">0 câu</span>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-3 text-center border-t border-amber-100/80 mt-3">
              <span className="text-[11px] text-amber-700 font-semibold">
                🌟 Xếp hạng thời gian thực
              </span>
            </div>
          </div>

          {/* CỘT 3: DÀNH CHO GIÁO VIÊN (Màu Xanh Lam / Sky Blue) */}
          <div className="rounded-3xl border-2 border-sky-200 bg-gradient-to-b from-sky-50/80 via-white to-sky-50/30 p-5 flex flex-col justify-between shadow-md shadow-sky-500/5 hover:border-sky-300 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                <div className="flex items-center gap-2 text-sky-800">
                  <span className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-xs">
                    👩‍🏫
                  </span>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-sky-950 uppercase tracking-tight">
                      Dành Cho Giáo Viên
                    </h3>
                    <p className="text-[11px] text-sky-700 font-medium">Quản trị bài thi & câu hỏi</p>
                  </div>
                </div>
              </div>

              {/* Trạng thái đăng nhập của Giáo viên */}
              <div className="p-3.5 rounded-2xl bg-white border border-sky-200/90 text-left space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-700">
                    Quyền hạn
                  </span>
                  {isAdminLoggedIn ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Đã đăng nhập
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-slate-500">
                      Cần xác thực
                    </span>
                  )}
                </div>

                <div className="font-extrabold text-xs sm:text-sm text-slate-800">
                  {isAdminLoggedIn ? 'GV: Ms. Trúc Tin Học' : 'Giáo viên quản trị hệ thống'}
                </div>
                <p className="text-[11px] text-slate-500">
                  {isAdminLoggedIn
                    ? `Email: ${adminEmail || 'tranthithanhtruc1980@gmail.com'}`
                    : 'Đăng nhập để soạn đề, duyệt câu hỏi và quản lý danh sách lớp.'}
                </p>
              </div>

              {/* Các nút chức năng giáo viên */}
              <div className="space-y-2 pt-1">
                {isAdminLoggedIn ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        onOpenAdminStudio();
                      }}
                      className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-sky-600/25 transition-all cursor-pointer active:scale-98"
                    >
                      <div className="flex items-center gap-2">
                        <PenTool className="w-4 h-4" />
                        <span>Studio Soạn Đề & Ngân Hàng</span>
                      </div>
                      <span className="text-xs">⚙️</span>
                    </button>

                    <a
                      href="/games/#/admin/classes"
                      className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-white hover:bg-sky-50 text-sky-900 font-bold text-xs sm:text-sm border border-sky-200 shadow-xs transition-all cursor-pointer active:scale-98"
                    >
                      <div className="flex items-center gap-2">
                        <School className="w-4 h-4 text-sky-600" />
                        <span>Quản Lý Lớp & Điểm Số</span>
                      </div>
                      <span className="text-xs">👥</span>
                    </a>

                    {onAdminLogout && (
                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          onAdminLogout();
                        }}
                        className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Đăng xuất Quản trị</span>
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      if (onAdminLogin) onAdminLogin();
                      else onOpenAdminStudio();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-3.5 py-3 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-sky-600/25 transition-all cursor-pointer active:scale-98"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>ĐĂNG NHẬP (GIÁO VIÊN)</span>
                  </button>
                )}
              </div>
            </div>

            <div className="pt-3 text-center border-t border-sky-100/80 mt-3">
              <span className="text-[11px] text-sky-700 font-semibold">
                🔒 Bảo mật Google Firebase
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
