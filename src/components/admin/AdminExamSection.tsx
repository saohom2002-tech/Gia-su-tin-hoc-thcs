import React, { useState, useMemo } from 'react';
import { CustomExam } from '../../types/quiz';
import {
  ShieldCheck,
  Clock,
  FileQuestion,
  Play,
  Printer,
  Plus,
  Edit3,
  Trash2,
  Copy,
  Search,
  Settings2,
  Check,
  X,
  FolderKanban
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface AdminExamSectionProps {
  customExams: CustomExam[];
  currentGradeFilter: 3 | 4 | 5 | 6 | 7 | 8 | 9;
  onLaunchExam: (exam: CustomExam, mode: 'exam' | 'practice') => void;
  onPrintExam: (exam: CustomExam) => void;
  onOpenAdminStudio: (options?: {
    examId?: string;
    action?: 'list' | 'create' | 'edit_info' | 'edit_questions';
  }) => void;
  onUpdateExam: (updatedExam: CustomExam) => void;
  onDeleteExam: (examId: string) => void;
  onDuplicateExam: (exam: CustomExam) => void;
  isAdmin: boolean;
}

export const AdminExamSection: React.FC<AdminExamSectionProps> = ({
  customExams,
  currentGradeFilter,
  onLaunchExam,
  onPrintExam,
  onOpenAdminStudio,
  onUpdateExam,
  onDeleteExam,
  onDuplicateExam,
  isAdmin = false,
}) => {
  const [selectedGrade, setSelectedGrade] = useState<'all' | 3 | 4 | 5 | 6 | 7 | 8 | 9>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Quick inline edit modal state right from the section
  const [quickEditingExam, setQuickEditingExam] = useState<CustomExam | null>(null);
  const [editTitle, setEditTitle] = useState<string>('');
  const [editDesc, setEditDesc] = useState<string>('');
  const [editGrade, setEditGrade] = useState<3 | 4 | 5 | 6 | 7 | 8 | 9>(8);
  const [editCategory, setEditCategory] = useState<'exam' | 'practice'>('exam');
  const [editDuration, setEditDuration] = useState<number>(45);

  const handleStartQuickEdit = (exam: CustomExam) => {
    sound.playClick();
    setQuickEditingExam(exam);
    setEditTitle(exam.title);
    setEditDesc(exam.description || '');
    setEditGrade(exam.gradeNumber);
    setEditCategory(exam.category);
    setEditDuration(exam.durationMinutes || 45);
  };

  const handleSaveQuickEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEditingExam || !editTitle.trim()) return;
    sound.playSuccess();
    const updated: CustomExam = {
      ...quickEditingExam,
      title: editTitle.trim(),
      description: editDesc.trim(),
      gradeNumber: editGrade,
      grade: `Khối ${editGrade}`,
      subject: editGrade <= 5 ? 'Tin học Tiểu học' : 'Tin học THCS',
      category: editCategory,
      durationMinutes: Math.max(5, Math.min(180, Number(editDuration) || 45)),
      updatedAt: Date.now(),
    };
    onUpdateExam(updated);
    setQuickEditingExam(null);
  };

  // Danh sách các đề đang hoạt động (ẩn toàn bộ các đề nằm trong Thùng rác lưu trữ đối với học sinh trên web)
  const activeExams = useMemo(
    () => customExams.filter((e) => e.isPublished !== false && !e.isTrashed),
    [customExams]
  );

  // Filter exams based on selectedGrade combo box and search query
  const displayedExams = useMemo(() => {
    let list = activeExams;
    if (selectedGrade !== 'all') {
      list = list.filter((e) => Number(e.gradeNumber) === Number(selectedGrade));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          (e.description || '').toLowerCase().includes(q) ||
          (e.grade || '').toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeExams, selectedGrade, searchQuery]);

  return (
    <section className="rounded-3xl border-2 border-indigo-200/80 bg-gradient-to-br from-white via-indigo-50/40 to-blue-50/50 p-5 sm:p-7 shadow-lg shadow-indigo-100/50 space-y-5">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-indigo-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/25 shrink-0">
            <FolderKanban className="w-6 h-6 text-amber-300 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-2xs ${
                isAdmin ? 'bg-amber-400 text-amber-950' : 'bg-indigo-100 text-indigo-900 border border-indigo-200'
              }`}>
                {isAdmin ? 'Quản Trị Đề Đã Tạo' : 'Kho Đề Thi & Ôn Tập'}
              </span>
              <span className="text-xs text-indigo-700 font-bold">
                Tổng số: {activeExams.length} bộ đề • Đồng bộ Firebase Realtime
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
              {isAdmin ? '⭐ Quản Trị Đề Đã Tạo (Thêm • Sửa • Xóa)' : '⭐ Danh Sách Đề Thi & Ôn Tập Chuẩn SGK'}
            </h2>
          </div>
        </div>

        {/* Action controls */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-between lg:justify-end">
          {/* Search box */}
          <div className="relative flex-1 sm:flex-initial sm:w-52">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên đề đã tạo..."
              className="w-full pl-8 pr-7 py-1.5 rounded-xl border border-indigo-200 bg-white text-xs font-medium text-slate-800 focus:outline-indigo-600"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Combo box (Select dropdown): Chọn khối lớp hiển thị đề */}
          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-xl border-2 border-indigo-200 shadow-2xs">
            <span className="text-xs font-extrabold text-indigo-700 whitespace-nowrap">
              Chọn khối:
            </span>
            <select
              aria-label="Chọn khối hiển thị đề"
              value={selectedGrade}
              onChange={(e) => {
                sound.playClick();
                const val = e.target.value;
                setSelectedGrade(val === 'all' ? 'all' : (Number(val) as 3 | 4 | 5 | 6 | 7 | 8 | 9));
              }}
              className="py-1 pr-2 text-xs font-extrabold text-slate-900 bg-transparent focus:outline-hidden cursor-pointer"
            >
              <option value="all">
                Tất cả các khối ({activeExams.length} đề)
              </option>
              {([3, 4, 5, 6, 7, 8, 9] as const).map((g) => {
                const count = activeExams.filter((e) => Number(e.gradeNumber) === g).length;
                const levelLabel = g <= 5 ? 'Tiểu học' : 'THCS';
                return (
                  <option key={g} value={g}>
                    Khối {g} - {levelLabel} ({count} đề)
                  </option>
                );
              })}
            </select>
          </div>

          {/* Button: Thêm đề mới (Chỉ Admin nhìn thấy) */}
          {isAdmin && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenAdminStudio({ action: 'create' });
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-transform active:scale-95 cursor-pointer shrink-0"
              title="Thêm đề thi hoặc đề ôn tập mới (tự soạn, AI hoặc tải file Word/PDF)"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Thêm đề mới</span>
            </button>
          )}

          {/* Button: Mở toàn bộ Studio (Chỉ Admin nhìn thấy) */}
          {isAdmin && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenAdminStudio({ action: 'list' });
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/25 transition-transform active:scale-95 cursor-pointer shrink-0"
              title="Mở cửa sổ Studio Quản trị Đề & Câu hỏi toàn màn hình"
            >
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Mở Studio Quản Trị</span>
            </button>
          )}
        </div>
      </div>

      {/* Exam Cards Grid */}
      {displayedExams.length === 0 ? (
        <div className="p-8 text-center bg-white/90 rounded-2xl border border-dashed border-indigo-200 space-y-3">
          <p className="text-sm font-bold text-slate-700">
            {searchQuery
              ? `Không tìm thấy đề nào khớp với "${searchQuery}".`
              : `Chưa có đề đã tạo nào cho Khối ${selectedGrade === 'all' ? currentGradeFilter : selectedGrade}.`}
          </p>
          <div className="flex items-center justify-center gap-2">
            {selectedGrade !== 'all' && activeExams.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedGrade('all')}
                className="px-3.5 py-2 rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-bold hover:bg-indigo-100 cursor-pointer"
              >
                Xem tất cả {activeExams.length} đề đã tạo
              </button>
            )}
            {isAdmin && (
              <button
                type="button"
                onClick={() => onOpenAdminStudio({ action: 'create' })}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm đề mới ngay</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedExams.map((exam) => {
            const isConfirmingDelete = confirmDeleteId === exam.id;
            return (
              <div
                key={exam.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-400 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-2.5">
                  {/* Badges & Quick Management Icons */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-indigo-100 text-indigo-800 border border-indigo-200">
                        {exam.grade || `Khối ${exam.gradeNumber}`}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          exam.category === 'exam'
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}
                      >
                        {exam.category === 'exam' ? 'Đề thi tính giờ' : 'Đề ôn tập'}
                      </span>
                    </div>

                    {/* Quick Edit Info & Duplicate buttons (Chỉ Admin nhìn thấy) */}
                    {isAdmin && (
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => handleStartQuickEdit(exam)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-700 hover:bg-indigo-50 border border-transparent hover:border-indigo-200 transition-colors cursor-pointer"
                          title="Sửa nhanh tên đề, khối lớp, thời gian"
                        >
                          <Settings2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            sound.playClick();
                            onDuplicateExam(exam);
                          }}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-700 hover:bg-indigo-50 border border-transparent hover:border-indigo-200 transition-colors cursor-pointer"
                          title="Nhân bản đề thi này"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">
                      {exam.title}
                    </h3>
                  </div>

                  {/* Meta info */}
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600 pt-1">
                    <span className="flex items-center gap-1">
                      <FileQuestion className="w-3.5 h-3.5 text-indigo-600" />
                      {exam.questions?.length || 0} câu hỏi
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {exam.durationMinutes || 45} phút
                    </span>
                  </div>
                </div>

                {/* Bottom Action Bars: Row 1 (Vào thi / In) + Row 2 (Sửa câu hỏi / Sửa đề / Xóa đề) */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  {/* Row 1: Primary student/teacher actions */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onLaunchExam(exam, exam.category)}
                      className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-indigo-600/20 transition-transform active:scale-95 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>{exam.category === 'exam' ? 'Vào thi ngay' : 'Bắt đầu ôn'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onPrintExam(exam)}
                      className="p-2 rounded-xl text-slate-600 hover:text-indigo-700 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                      title="In đề thi / Xem đáp án chi tiết"
                    >
                      <Printer className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Row 2: Direct CRUD Management (Sửa câu hỏi • Sửa đề • Chuyển vào thùng rác) - CHỈ ADMIN NHÌN THẤY */}
                  {isAdmin && (
                    isConfirmingDelete ? (
                      <div className="flex items-center justify-between gap-1.5 p-1.5 rounded-xl bg-rose-50 border border-rose-200 animate-in fade-in">
                        <span className="text-[11px] font-bold text-rose-800 pl-1">
                          Chuyển vào thùng rác?
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => {
                              sound.playClick();
                              onDeleteExam(exam.id);
                              setConfirmDeleteId(null);
                            }}
                            className="px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold cursor-pointer"
                          >
                            Vào thùng rác
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteId(null)}
                            className="px-2 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 text-[11px] font-bold cursor-pointer"
                          >
                            Hủy
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between gap-1.5 pt-0.5">
                        <button
                          type="button"
                          onClick={() => {
                            sound.playClick();
                            onOpenAdminStudio({
                              examId: exam.id,
                              action: 'edit_questions',
                            });
                          }}
                          className="flex-1 py-1.5 px-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/80 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                          title="Thêm, sửa, xóa câu hỏi trong đề này"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Sửa câu hỏi ({exam.questions?.length || 0})</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleStartQuickEdit(exam)}
                          className="py-1.5 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                          title="Sửa tên đề, khối lớp, thời gian"
                        >
                          <Settings2 className="w-3.5 h-3.5" />
                          <span>Sửa đề</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            sound.playClick();
                            setConfirmDeleteId(exam.id);
                          }}
                          className="p-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200/70 transition-colors cursor-pointer"
                          title="Chuyển đề vào thùng rác lưu trữ"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Sửa nhanh thông tin đề ngay trên trang chủ */}
      {quickEditingExam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">
                    Sửa Thông Tin Đề Đã Tạo
                  </h3>
                  <p className="text-xs text-slate-500">
                    Cập nhật tên đề, khối lớp, phân loại hoặc thời gian làm bài
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setQuickEditingExam(null)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveQuickEdit} className="space-y-3.5 text-xs sm:text-sm">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Tên đề thi / đề ôn tập:</label>
                <input
                  type="text"
                  required
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 font-bold text-slate-900 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Mô tả / Ghi chú đề:</label>
                <textarea
                  rows={2}
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:border-indigo-600 text-slate-700 outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Khối lớp:</label>
                  <select
                    value={editGrade}
                    onChange={(e) => setEditGrade(Number(e.target.value) as 3 | 4 | 5 | 6 | 7 | 8 | 9)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-bold text-slate-800"
                  >
                    {[3, 4, 5, 6, 7, 8, 9].map((g) => (
                      <option key={g} value={g}>
                        Khối {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Phân loại:</label>
                  <select
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value as 'exam' | 'practice')}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-bold text-slate-800"
                  >
                    <option value="exam">Đề thi tính giờ</option>
                    <option value="practice">Đề ôn tập</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Thời gian (phút):</label>
                  <input
                    type="number"
                    min={5}
                    max={180}
                    value={editDuration}
                    onChange={(e) => setEditDuration(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-slate-800"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const targetId = quickEditingExam.id;
                    setQuickEditingExam(null);
                    onOpenAdminStudio({ examId: targetId, action: 'edit_questions' });
                  }}
                  className="px-3.5 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Sửa danh sách câu hỏi ({quickEditingExam.questions?.length || 0})</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuickEditingExam(null)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 font-bold text-xs cursor-pointer"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-indigo-600/20 cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    <span>Lưu thay đổi</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
