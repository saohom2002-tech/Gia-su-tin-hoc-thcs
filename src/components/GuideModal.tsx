import React, { useState } from 'react';
import {
  X,
  BookOpen,
  GraduationCap,
  Gamepad2,
  Trophy,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Sparkles,
  HelpCircle,
  Layers,
  ChevronRight
} from 'lucide-react';
import { sound } from '../utils/sound';
import schoolLogo from '../assets/logo-thcs-tan-binh.jpg';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGamesTab?: () => void;
  onScrollToTopics?: () => void;
  onOpenProfile?: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({
  isOpen,
  onClose,
  onOpenGamesTab,
  onScrollToTopics,
  onOpenProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('student');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border-2 border-sky-300 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white p-0.5 border border-sky-300 shrink-0">
              <img
                src={schoolLogo}
                alt="Logo Trường THCS Tân Bình"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight uppercase">
                  Hướng Dẫn Sử Dụng Hệ Thống
                </h2>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
                  THCS Tân Bình
                </span>
              </div>
              <p className="text-xs text-sky-100 font-medium">
                Nền tảng Ôn tập & Kiểm tra trực tuyến Tin học (Lớp 3 - 9)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="p-3 bg-slate-50 border-b border-slate-200 flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setActiveTab('student');
            }}
            className={`flex-1 py-2 px-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'student'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Dành Cho Học Sinh</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setActiveTab('teacher');
            }}
            className={`flex-1 py-2 px-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'teacher'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Dành Cho Giáo Viên</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-slate-800 text-xs sm:text-sm leading-relaxed">
          {activeTab === 'student' ? (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3">
                <span className="text-xl">🎒</span>
                <div>
                  <div className="font-extrabold text-sm text-emerald-900">
                    Chào mừng các em học sinh đến với Gia Sư Tin Học!
                  </div>
                  <div className="text-xs text-emerald-800 mt-0.5">
                    Hệ thống giúp các em tự ôn tập, kiểm tra kiến thức và tham gia các trò chơi tri thức thú vị theo SGK Kết Nối Tri Thức.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Bước 1 */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-1.5 hover:border-emerald-300 transition-all">
                  <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px] font-black">1</span>
                    <span>CÀI ĐẶT HỒ SƠ</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    Nhấp vào <strong>thẻ tên học sinh</strong> ở góc trên hoặc trên trang chủ để chọn Avatar yêu thích, đặt họ tên, chọn Khối lớp (3 - 9), Lớp học (ví dụ 8A1) và Trường.
                  </p>
                </div>

                {/* Bước 2 */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-1.5 hover:border-emerald-300 transition-all">
                  <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px] font-black">2</span>
                    <span>CHỌN BÀI ÔN TẬP</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    Bấm vào <strong>"Chủ Đề SGK"</strong> để chọn bài học cụ thể theo khối, hoặc chọn nhanh <strong>"Đề cương Giữa kì 1"</strong> để làm bài trọng tâm.
                  </p>
                </div>

                {/* Bước 3 */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-1.5 hover:border-emerald-300 transition-all">
                  <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px] font-black">3</span>
                    <span>LÀM BÀI & XEM ĐIỂM</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    Làm các câu hỏi trắc nghiệm, ghép nối, kéo thả, điền khuyết. Khi hoàn thành bấm <strong>"Nộp bài"</strong> để nhận ngay điểm số và lời khen.
                  </p>
                </div>

                {/* Bước 4 */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-1.5 hover:border-emerald-300 transition-all">
                  <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px] font-black">4</span>
                    <span>GIẤY KHEN & SỔ CÂU SAI</span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    Đạt điểm cao sẽ được cấp <strong>Giấy khen danh dự online</strong>. Các câu làm sai sẽ tự lưu vào <strong>"Sổ Tay Câu Sai"</strong> để em ôn lại lỗ hổng kiến thức.
                  </p>
                </div>
              </div>

              {/* Game highlight */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎮</span>
                  <div>
                    <div className="font-extrabold text-xs sm:text-sm text-purple-900">
                      Sân Chơi Game Tri Thức (16 Trò Chơi Trực Tuyến)
                    </div>
                    <div className="text-xs text-purple-700">
                      Vừa học vừa chơi cùng bạn bè: Đường lên đỉnh Olympia, Đua vịt sông xanh, Đấu trường trực tuyến...
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    window.open('/games/', '_blank');
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shrink-0 cursor-pointer shadow-sm transition-all"
                >
                  Mở tab Game ↗
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 flex items-start gap-3">
                <span className="text-xl">👩‍🏫</span>
                <div>
                  <div className="font-extrabold text-sm text-indigo-900">
                    Khu vực dành cho Giáo viên (Ms. Trúc Tin Học)
                  </div>
                  <div className="text-xs text-indigo-800 mt-0.5">
                    Quản trị đề thi, ngân hàng câu hỏi chuẩn SGK, cấu hình thời gian kiểm tra và thống kê điểm số học sinh.
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-white space-y-1">
                  <div className="font-extrabold text-xs text-indigo-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>1. Đăng nhập Giáo viên</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-5">
                    Bấm nút <strong>"Dành Cho Giáo Viên"</strong> trên thanh điều hướng hoặc ở cột thứ 3 trên trang chủ. Đăng nhập bằng tài khoản Google quản trị để mở khóa toàn quyền Studio.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl border border-slate-200 bg-white space-y-1">
                  <div className="font-extrabold text-xs text-indigo-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>2. Soạn đề bằng AI & Tải file Word / PDF</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-5">
                    Trong <strong>Admin Studio</strong>, giáo viên có thể yêu cầu AI tạo đề thi mới theo đúng ma trận, hoặc tải file đề thi có sẵn dạng <code>.docx</code> hoặc <code>.pdf</code> để hệ thống tự động bóc tách thành câu hỏi online.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl border border-slate-200 bg-white space-y-1">
                  <div className="font-extrabold text-xs text-indigo-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>3. Thống kê kết quả & Xuất bảng điểm</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-5">
                    Theo dõi Dashboard thống kê năng lực 3 cấp độ (Nhận biết, Vận dụng, Vận dụng cao), xem Bảng Vàng vinh danh và xuất danh sách điểm số học sinh ra Google Sheets hoặc file CSV.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-[11px] font-semibold text-slate-500">
            Hỗ trợ kĩ thuật: GV Ms. Trúc Tin Học
          </span>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-xs transition-colors cursor-pointer"
          >
            Đã hiểu & Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
