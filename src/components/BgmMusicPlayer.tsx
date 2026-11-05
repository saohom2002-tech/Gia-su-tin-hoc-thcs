import React, { useState, useEffect, useRef } from 'react';
import {
  Music,
  Volume2,
  VolumeX,
  Volume1,
  Play,
  Pause,
  X,
  Sparkles,
  Headphones,
  Sliders,
  ChevronDown
} from 'lucide-react';
import { bgmManager, BGM_TRACKS, BgmState } from '../utils/bgmManager';
import { sound } from '../utils/sound';

export const BgmMusicPlayer: React.FC = () => {
  const [bgmState, setBgmState] = useState<BgmState>(bgmManager.getState());
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Đăng ký nhận thông báo trạng thái từ bgmManager
  useEffect(() => {
    const unsubscribe = bgmManager.subscribe((newState) => {
      setBgmState({ ...newState });
    });
    return unsubscribe;
  }, []);

  // Đóng popover khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const currentTrack =
    BGM_TRACKS.find((t) => t.id === bgmState.currentTrackId) || BGM_TRACKS[0];

  const handleTogglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sound.playClick();
    bgmManager.togglePlay();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    bgmManager.setVolume(val);
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    bgmManager.toggleMute();
  };

  const handleSelectTrack = (trackId: string) => {
    sound.playClick();
    bgmManager.setTrack(trackId);
    if (!bgmState.isPlaying) {
      bgmManager.play();
    }
  };

  const volumePercent = Math.round(bgmState.volume * 100);

  return (
    <aside aria-label="Bộ điều khiển nhạc nền" className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end select-none">
      {/* POPUP BẢNG ĐIỀU KHIỂN CHI TIẾT */}
      {isOpen && (
        <div
          ref={popoverRef}
          className="mb-3 w-[320px] sm:w-[350px] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-indigo-200/90 p-4 sm:p-5 text-slate-800 animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header Popup */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
                <Music className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                  Nhạc Nền Không Lời
                </h4>
                <p className="text-[10px] text-indigo-600 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Chuẩn Wayground & Lofi Focus</span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Đóng cửa sổ"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Play/Pause & Volume Banner */}
          <div className="my-3.5 p-3 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-purple-50/60 to-pink-50/80 border border-indigo-100/90 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold transition-all shadow-md cursor-pointer ${
                    bgmState.isPlaying
                      ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/30'
                      : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30'
                  }`}
                  title={bgmState.isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc nền'}
                >
                  {bgmState.isPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  )}
                </button>
                <div>
                  <div className="text-xs font-black text-slate-800">
                    {bgmState.isPlaying ? 'Đang phát nhạc' : 'Nhạc nền đang tắt'}
                  </div>
                  <div className="text-[11px] font-semibold text-indigo-700 truncate max-w-[150px]">
                    {currentTrack.icon} {currentTrack.name}
                  </div>
                </div>
              </div>

              {/* Status Equalizer Animation */}
              {bgmState.isPlaying && !bgmState.isMuted && (
                <div className="flex items-end gap-0.5 h-4 px-2 py-0.5 rounded-lg bg-indigo-100/70">
                  <span className="w-1 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
                  <span className="w-1 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.15s] h-4" />
                  <span className="w-1 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.45s] h-2" />
                  <span className="w-1 bg-pink-600 rounded-full animate-bounce [animation-delay:-0.2s] h-3.5" />
                </div>
              )}
            </div>

            {/* Thanh điều chỉnh âm lượng thông minh */}
            <div className="space-y-1 pt-1 border-t border-indigo-100/60">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
                <button
                  type="button"
                  onClick={handleToggleMute}
                  className="flex items-center gap-1 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  {bgmState.isMuted || bgmState.volume === 0 ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-rose-500" />
                      <span className="text-rose-500">Đã tắt tiếng</span>
                    </>
                  ) : bgmState.volume < 0.3 ? (
                    <>
                      <Volume1 className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Âm lượng nhẹ</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Âm lượng</span>
                    </>
                  )}
                </button>
                <span className="font-mono text-indigo-800 font-extrabold">
                  {bgmState.isMuted ? '0%' : `${volumePercent}%`}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="0.8"
                  step="0.02"
                  value={bgmState.isMuted ? 0 : bgmState.volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
            </div>
          </div>

          {/* Danh sách các chủ đề nhạc (Tracks) */}
          <div className="space-y-2">
            <div className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center justify-between">
              <span>Chọn giai điệu phù hợp:</span>
              <span className="text-[10px] text-indigo-600 lowercase font-semibold">
                {BGM_TRACKS.length} chủ đề
              </span>
            </div>

            <div className="space-y-1.5 max-h-[190px] overflow-y-auto pr-1">
              {BGM_TRACKS.map((track) => {
                const isSelected = bgmState.currentTrackId === track.id;

                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => handleSelectTrack(track.id)}
                    className={`w-full p-2.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-2.5 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-md shadow-indigo-600/25 ring-2 ring-indigo-400/40'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-xl shrink-0 p-1 rounded-xl bg-white/20">
                        {track.icon}
                      </span>
                      <div className="min-w-0">
                        <div
                          className={`text-xs font-black truncate ${
                            isSelected ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {track.name}
                        </div>
                        <div
                          className={`text-[10px] truncate ${
                            isSelected ? 'text-indigo-100' : 'text-slate-500'
                          }`}
                        >
                          {track.genre}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      {isSelected ? (
                        <span className="px-2 py-0.5 rounded-lg bg-white/20 text-[10px] font-black uppercase tracking-wider text-white">
                          {bgmState.isPlaying ? 'Đang phát' : 'Đã chọn'}
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400 group-hover:text-indigo-600">
                          Bật
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chú thích thông minh */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 text-[10px] text-slate-500 leading-relaxed flex items-start gap-1.5">
            <Headphones className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
            <span>
              <strong>Hiệu ứng thông minh:</strong> Khi học sinh trả lời đúng, nhạc nền sẽ tự động hạ nhỏ âm lượng trong khoảnh khắc để tiếng chúc mừng vang lên rõ ràng.
            </span>
          </div>
        </div>
      )}

      {/* NÚT NỔI Ở GÓC MÀN HÌNH (FLOATING ACTION BUTTON) */}
      <div className="flex items-center gap-1.5">
        {/* Nút bấm chính mở menu âm nhạc */}
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            setIsOpen(!isOpen);
          }}
          className={`flex items-center gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-xl transition-all cursor-pointer ${
            bgmState.isPlaying
              ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-indigo-600/30 ring-3 ring-indigo-400/30 scale-100 hover:scale-105'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200/90 hover:border-indigo-400 shadow-slate-900/10'
          }`}
          title="Nhấp để bật/tắt nhạc nền và chọn giai điệu Wayground"
        >
          <div className="relative flex items-center justify-center">
            <Music
              className={`w-4 h-4 ${
                bgmState.isPlaying ? 'animate-spin [animation-duration:4s]' : 'text-slate-500'
              }`}
            />
            {bgmState.isPlaying && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="font-extrabold whitespace-nowrap">
              {bgmState.isPlaying ? currentTrack.name : 'Nhạc nền'}
            </span>

            {bgmState.isPlaying && (
              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-md bg-white/20 text-[10px] font-mono">
                {volumePercent}%
              </span>
            )}
          </div>

          {/* Nút bật/tắt nhanh 1 chạm */}
          <button
            type="button"
            onClick={handleTogglePlay}
            className={`p-1 rounded-full transition-colors ${
              bgmState.isPlaying
                ? 'hover:bg-white/20 text-white'
                : 'hover:bg-slate-200 text-slate-500'
            }`}
            title={bgmState.isPlaying ? 'Tạm dừng nhạc' : 'Bật nhạc ngay'}
          >
            {bgmState.isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-indigo-600" />
            )}
          </button>
        </button>
      </div>
    </aside>
  );
};
