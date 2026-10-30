import React, { useState } from 'react';
import { CertificateData, StudentProfile } from '../types/quiz';
import {
  Award,
  Printer,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Medal,
  UserCheck,
  Type
} from 'lucide-react';
import { sound } from '../utils/sound';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificates: CertificateData[];
  studentProfile?: StudentProfile;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificates,
  studentProfile,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [theme, setTheme] = useState<'gold' | 'red' | 'blue'>('gold');
  const [calligraphyStyle, setCalligraphyStyle] = useState<'great-vibes' | 'dancing' | 'charm'>('great-vibes');
  // Cho phép áp dụng trực tiếp thông tin khai báo đăng nhập của học sinh lên Giấy chứng nhận
  const [useLoginProfile, setUseLoginProfile] = useState<boolean>(false);

  if (!isOpen || certificates.length === 0) return null;

  const currentCert = certificates[currentIndex] || certificates[0];

  // Xác định thông tin hiển thị (ưu tiên khai báo đăng nhập của học sinh nếu bật chế độ Theo hồ sơ đăng nhập, hoặc lấy từ chứng nhận)
  const displayStudentName = useLoginProfile && studentProfile?.fullName
    ? studentProfile.fullName
    : currentCert.studentName || studentProfile?.fullName || 'Học Sinh Xuất Sắc';

  const displayClassName = useLoginProfile && studentProfile?.className
    ? studentProfile.className
    : currentCert.className || studentProfile?.className || '8A1';

  // Suy luận Khối lớp từ className hoặc grade đã khai báo
  const inferredGradeNum = (() => {
    if (useLoginProfile && studentProfile?.grade) {
      const m = studentProfile.grade.match(/\d+/);
      if (m) return parseInt(m[0], 10);
    }
    if (currentCert.gradeNumber) return currentCert.gradeNumber;
    const classMatch = displayClassName.match(/^(\d+)/);
    if (classMatch) return parseInt(classMatch[1], 10);
    if (studentProfile?.grade) {
      const m = studentProfile.grade.match(/\d+/);
      if (m) return parseInt(m[0], 10);
    }
    return 8;
  })();

  const isPrimarySchool = inferredGradeNum >= 1 && inferredGradeNum <= 5;
  const educationLevelLabel = isPrimarySchool ? 'TIỂU HỌC' : 'THCS';
  const displayGradeLabel = `KHỐI ${inferredGradeNum}`;

  const rawSchool = useLoginProfile && studentProfile?.schoolName
    ? studentProfile.schoolName
    : currentCert.schoolName || studentProfile?.schoolName || '';

  const displaySchoolName = (() => {
    const trimmed = rawSchool.trim();
    const lower = trimmed.toLowerCase();
    if (!trimmed || lower === 'thcs' || lower === 'trường thcs' || lower === 'tiểu học' || lower === 'trường tiểu học') {
      return isPrimarySchool ? 'Trường Tiểu học' : 'Trường THCS';
    }
    return trimmed;
  })();

  const calligraphyFontClass =
    calligraphyStyle === 'great-vibes'
      ? 'font-calligraphy'
      : calligraphyStyle === 'dancing'
      ? 'font-calligraphy-dancing'
      : 'font-calligraphy-charm';

  const getRankByScore = (score: number): string => {
    if (score >= 9.0) return 'Xuất sắc';
    if (score >= 8.0) return 'Giỏi';
    if (score >= 6.5) return 'Khá';
    if (score >= 5.0) return 'Đạt yêu cầu';
    return 'Chưa đạt yêu cầu';
  };

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  const handlePrev = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : certificates.length - 1));
  };

  const handleNext = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev < certificates.length - 1 ? prev + 1 : 0));
  };

  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `Ngày ${day} tháng ${month} năm ${year}`;
  };

  const themeStyles = {
    gold: {
      outerBorder: 'border-amber-500',
      innerBorder: 'border-amber-400/80',
      bgLinear: 'from-amber-50/60 via-yellow-50/40 to-amber-50/70',
      titleColor: 'text-amber-800',
      accentColor: 'text-amber-900',
      sealColor: 'border-amber-600 bg-amber-500 text-amber-950',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    red: {
      outerBorder: 'border-rose-600',
      innerBorder: 'border-amber-400',
      bgLinear: 'from-rose-50/50 via-amber-50/40 to-rose-50/50',
      titleColor: 'text-rose-800',
      accentColor: 'text-rose-950',
      sealColor: 'border-rose-600 bg-rose-600 text-white',
      badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
    },
    blue: {
      outerBorder: 'border-blue-600',
      innerBorder: 'border-cyan-400',
      bgLinear: 'from-blue-50/50 via-indigo-50/40 to-cyan-50/50',
      titleColor: 'text-blue-900',
      accentColor: 'text-slate-900',
      sealColor: 'border-blue-600 bg-blue-600 text-white',
      badgeBg: 'bg-blue-100 text-blue-900 border-blue-300',
    },
  };

  const activeTheme = themeStyles[theme];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in overflow-y-auto">
      {/* Container */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-4xl w-full my-auto flex flex-col overflow-hidden animate-in zoom-in-95 print:border-none print:shadow-none print:m-0 print:p-0 print:max-w-none">
        {/* Top Controls Bar (Hidden during print) */}
        <div className="no-print p-4 sm:px-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-xs">
              <Medal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold">
                Giấy Chứng Nhận Vinh Danh Học Sinh
              </h2>
              <p className="text-xs text-slate-400">
                {certificates.length > 1
                  ? `Đang xem ${currentIndex + 1}/${certificates.length} chứng nhận`
                  : 'Sẵn sàng in chuẩn trang A4 khổ ngang'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Nút đồng bộ theo Khai báo đăng nhập của học sinh */}
            {studentProfile && (
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setUseLoginProfile((prev) => !prev);
                }}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  useLoginProfile
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-xs'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white hover:border-slate-500'
                }`}
                title="Cập nhật thông tin Giấy chứng nhận theo Hồ sơ học sinh đang đăng nhập"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>{useLoginProfile ? 'Đang dùng Hồ sơ ĐN' : 'Theo Hồ sơ ĐN'}</span>
              </button>
            )}

            {/* Chọn kiểu chữ Thư pháp cho Tên học sinh */}
            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
              <Type className="w-3.5 h-3.5 text-amber-400 ml-1 hidden sm:inline" />
              <button
                type="button"
                onClick={() => setCalligraphyStyle('great-vibes')}
                className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  calligraphyStyle === 'great-vibes'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Phông thư pháp nghệ thuật 1 (Great Vibes)"
              >
                Thư pháp 1
              </button>
              <button
                type="button"
                onClick={() => setCalligraphyStyle('dancing')}
                className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  calligraphyStyle === 'dancing'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Phông thư pháp thanh thoát 2 (Dancing Script)"
              >
                Thư pháp 2
              </button>
              <button
                type="button"
                onClick={() => setCalligraphyStyle('charm')}
                className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  calligraphyStyle === 'charm'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Phông thư pháp truyền thống 3 (Charm)"
              >
                Thư pháp 3
              </button>
            </div>

            {/* Theme switcher */}
            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
              <button
                type="button"
                onClick={() => setTheme('gold')}
                className={`px-2 py-1 rounded-lg font-bold transition-all ${
                  theme === 'gold' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                Vàng Kim
              </button>
              <button
                type="button"
                onClick={() => setTheme('red')}
                className={`px-2 py-1 rounded-lg font-bold transition-all ${
                  theme === 'red' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                Đỏ Thắm
              </button>
              <button
                type="button"
                onClick={() => setTheme('blue')}
                className={`px-2 py-1 rounded-lg font-bold transition-all ${
                  theme === 'blue' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                Xanh Hoàng Gia
              </button>
            </div>

            {/* Carousel navigation if multiple certs */}
            {certificates.length > 1 && (
              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-1 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Chứng nhận trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold px-1 text-amber-300">
                  {currentIndex + 1}/{certificates.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-1 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Chứng nhận tiếp theo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Print action */}
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>In / Lưu PDF</span>
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="w-8 h-8 rounded-full hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Canvas */}
        <div className="p-4 sm:p-8 bg-slate-100 flex items-center justify-center overflow-x-auto print:p-0 print:bg-white">
          <div
            id="printable-certificate-sheet"
            className={`w-full max-w-[800px] min-h-[540px] p-6 sm:p-9 rounded-2xl border-8 ${activeTheme.outerBorder} bg-gradient-to-br ${activeTheme.bgLinear} shadow-xl relative text-slate-900 font-serif-vn flex flex-col justify-between print:border-8 print:shadow-none print:w-full print:max-w-none print:rounded-none`}
            style={{ boxSizing: 'border-box' }}
          >
            {/* Inner Double Golden Border */}
            <div className={`absolute inset-3 sm:inset-4 border-2 border-dashed ${activeTheme.innerBorder} pointer-events-none rounded-xl`} />

            {/* Corner Decorative Ornaments */}
            <div className="absolute top-5 left-5 text-amber-600 font-serif-vn text-2xl select-none leading-none opacity-80">❖</div>
            <div className="absolute top-5 right-5 text-amber-600 font-serif-vn text-2xl select-none leading-none opacity-80">❖</div>
            <div className="absolute bottom-5 left-5 text-amber-600 font-serif-vn text-2xl select-none leading-none opacity-80">❖</div>
            <div className="absolute bottom-5 right-5 text-amber-600 font-serif-vn text-2xl select-none leading-none opacity-80">❖</div>

            {/* Certificate Header (Cập nhật động theo khai báo đăng nhập của học sinh) */}
            <div className="text-center space-y-1 relative z-10 pt-1">
              <p className="text-[10px] sm:text-xs font-extrabold tracking-widest text-slate-700 uppercase font-sans">
                HỆ THỐNG GIA SƯ TIN HỌC {educationLevelLabel} • {displaySchoolName.toUpperCase()} • {displayGradeLabel} (LỚP {displayClassName.toUpperCase()})
              </p>
              <p className="text-[10px] sm:text-[11px] font-medium tracking-wider text-slate-500 italic font-serif-vn">
                CHƯƠNG TRÌNH GDPT 2018 • BỘ SÁCH GIÁO KHOA: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
              </p>

              <div className="pt-3 pb-1">
                <h1 className={`text-2xl sm:text-4xl font-extrabold uppercase tracking-wide ${activeTheme.titleColor} font-title-serif-vn drop-shadow-2xs`}>
                  GIẤY CHỨNG NHẬN VINH DANH
                </h1>
                <div className="w-32 sm:w-44 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-1.5" />
                <p className="text-xs sm:text-sm font-bold tracking-wider text-slate-600 mt-1.5 uppercase font-sans">
                  BẢNG VÀNG THÀNH TÍCH MÔN TIN HỌC {educationLevelLabel} ({displayGradeLabel})
                </p>
              </div>
            </div>

            {/* Certificate Body */}
            <div className="text-center space-y-2.5 relative z-10 my-auto py-2">
              <p className="text-xs sm:text-sm italic text-slate-700 font-serif-vn">
                Chứng nhận và biểu dương thành tích xuất sắc của em:
              </p>

              {/* Recipient Student Name in Vietnamese Calligraphy Font (Phông Thư Pháp) */}
              <div className="py-1">
                <h2
                  className={`text-4xl sm:text-6xl font-normal text-indigo-950 ${calligraphyFontClass} tracking-normal leading-tight py-1 drop-shadow-2xs`}
                >
                  {displayStudentName}
                </h2>
                <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1 font-sans">
                  {displayGradeLabel} • Lớp:{' '}
                  <span className="underline underline-offset-4 decoration-amber-500 text-indigo-800 font-extrabold">
                    {displayClassName}
                  </span>
                  {displaySchoolName ? ` • ${displaySchoolName}` : ''}
                </p>
              </div>

              {/* Achievement Citation */}
              <div className="max-w-lg mx-auto space-y-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed font-serif-vn">
                <p>
                  Đã hoàn thành xuất sắc đợt thi:{' '}
                  <strong className="text-slate-900 font-bold">{currentCert.examBatch}</strong>
                </p>
                <p className="text-xs text-slate-600 font-sans">
                  Nội dung: <span className="font-semibold text-slate-800">{currentCert.lessonTitle}</span>
                </p>

                {/* Score badge highlight */}
                <div className="pt-2 flex items-center justify-center gap-3">
                  <div className={`px-4 py-1.5 rounded-xl border ${activeTheme.badgeBg} font-sans shadow-xs flex items-center gap-2`}>
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span className="text-xs sm:text-sm font-bold">
                      Điểm số: <strong className="text-base sm:text-lg font-black text-indigo-950">{currentCert.score.toFixed(1)}/10.0</strong> ({currentCert.percentage}%)
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="text-xs sm:text-sm font-extrabold uppercase text-amber-900">
                      Xếp loại: {getRankByScore(currentCert.score)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Footer: Date, Official Seal & Teacher Signature */}
            <div className="grid grid-cols-3 items-end pt-4 relative z-10 text-center font-sans text-xs">
              {/* Left Column: Certificate Code & QR info */}
              <div className="text-left text-[10px] text-slate-500 space-y-0.5">
                <p className="font-mono">
                  Số hiệu:{' '}
                  <strong>
                    {useLoginProfile
                      ? `VINH-DANH-${displayClassName.toUpperCase()}-${Date.now().toString().slice(-6)}`
                      : currentCert.certificateCode || `GIA-SU-${educationLevelLabel}-${Date.now().toString().slice(-6)}`}
                  </strong>
                </p>
                <p className="text-[9px] text-slate-400">Hệ thống khảo thí tự động</p>
                <div className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Xác thực chuẩn SGK</span>
                </div>
              </div>

              {/* Middle Column: Golden Seal */}
              <div className="flex flex-col items-center justify-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 ${activeTheme.sealColor} flex flex-col items-center justify-center shadow-lg relative transform rotate-6 select-none`}>
                  <Award className="w-6 h-6 sm:w-7 sm:h-7" />
                  <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider text-center leading-tight">
                    VINH DANH<br />XUẤT SẮC
                  </span>
                </div>
              </div>

              {/* Right Column: Date & Teacher Signature */}
              <div className="text-right space-y-1">
                <p className="text-[11px] text-slate-600 italic font-serif-vn">
                  {formatDate(currentCert.date)}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  GIÁO VIÊN CHUYÊN MÔN
                </p>
                <div className="h-10 flex items-center justify-end">
                  <span className="font-calligraphy text-2xl sm:text-3xl font-normal text-indigo-900 pr-1">
                    Ms. Trúc
                  </span>
                </div>
                <p className="text-xs font-black text-indigo-900 font-sans">
                  GV: Ms. Trúc Tin Học
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
