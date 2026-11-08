import React, { useState, useEffect } from 'react';
import {
  X,
  Maximize2,
  Minimize2,
  ExternalLink,
  RotateCw,
  Sparkles,
  Gamepad2,
  Loader2,
  Info
} from 'lucide-react';
import { TBSGameItem } from '../data/sidebarGames';
import { sound } from '../utils/sound';
import schoolLogo from '../assets/logo-thcs-tan-binh.jpg';

interface InteractiveGameModalProps {
  game: TBSGameItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveGameModal: React.FC<InteractiveGameModalProps> = ({
  game,
  isOpen,
  onClose,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setIsFullscreen(false);
    }
  }, [isOpen, game?.id]);

  if (!isOpen || !game) return null;

  const handleReload = () => {
    sound.playClick();
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const toggleFullscreen = () => {
    sound.playClick();
    setIsFullscreen((prev) => !prev);
  };

  const handleOpenExternal = () => {
    sound.playClick();
    if (game.url) {
      const targetUrl = game.url.startsWith('/')
        ? `${window.location.origin}${game.url}`
        : game.url;
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`bg-white w-full rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 border-2 border-sky-300 ${
          isFullscreen
            ? 'fixed inset-0 rounded-none border-none h-full max-h-none'
            : 'max-w-6xl h-[92vh] max-h-[850px]'
        }`}
      >
        {/* Header Bar */}
        <div className="px-4 py-3 sm:px-6 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${game.bgGradient} flex items-center justify-center text-xl shadow-md shrink-0 border border-white/40`}
            >
              {game.icon}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight font-['Lexend'] truncate">
                  {game.name}
                </h2>
                {game.badge && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase shadow-2xs shrink-0 ${
                      game.badgeType === 'online'
                        ? 'bg-emerald-400 text-emerald-950'
                        : game.badgeType === 'fun'
                        ? 'bg-amber-300 text-amber-950'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {game.badge}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-sky-100 font-medium truncate hidden sm:block">
                {game.description || 'Trò chơi tương tác học tập sôi động — THCS Tân Bình'}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Huy hiệu Trường THCS Tân Bình */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 backdrop-blur-xs text-xs font-bold text-white mr-1 shadow-2xs">
              <img
                src={schoolLogo}
                alt="Logo THCS Tân Bình"
                className="w-4 h-4 rounded-full object-contain bg-white shrink-0"
              />
              <span>TRƯỜNG THCS TÂN BÌNH</span>
            </div>

            {/* Tải lại */}
            <button
              type="button"
              onClick={handleReload}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              title="Tải lại trò chơi"
            >
              <RotateCw className={`w-4 h-4 sm:w-5 sm:h-5 ${isLoading ? 'animate-spin' : ''}`} />
            </button>

            {/* Mở toàn màn hình */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              title={isFullscreen ? 'Thu nhỏ cửa sổ' : 'Phóng to toàn màn hình'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>

            {/* Mở tab mới */}
            {game.url && (
              <button
                type="button"
                onClick={handleOpenExternal}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white text-xs font-bold transition-all cursor-pointer"
                title="Mở trò chơi trong thẻ trình duyệt mới"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Mở tab mới</span>
              </button>
            )}

            {/* Đóng */}
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-xl text-white/90 hover:text-white hover:bg-rose-500/80 transition-colors cursor-pointer ml-1"
              title="Đóng trò chơi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="relative flex-1 bg-slate-900 overflow-hidden flex flex-col">
          {game.isComingSoon ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
              <div
                className={`w-20 h-20 rounded-3xl bg-gradient-to-tr ${game.bgGradient} flex items-center justify-center text-4xl shadow-2xl mb-4 border-2 border-white/30`}
              >
                {game.icon}
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-amber-950 uppercase tracking-wider mb-2">
                Đang phát triển • Sắp ra mắt
              </span>
              <h3 className="text-2xl font-black text-white font-['Lexend'] mb-2">
                {game.name}
              </h3>
              <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                {game.description}
              </p>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="px-6 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
              >
                Quay lại ôn tập
              </button>
            </div>
          ) : (
            <>
              {/* Spinner loader */}
              {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-xs text-white">
                  <Loader2 className="w-10 h-10 text-sky-400 animate-spin mb-3" />
                  <p className="text-sm font-bold text-sky-200">
                    Đang nạp dữ liệu trò chơi {game.name}...
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Đang kết nối hệ thống học tập tương tác TBS
                  </p>
                </div>
              )}

              {/* Game iframe */}
              <iframe
                key={iframeKey}
                src={game.url}
                title={game.name}
                className="w-full h-full border-0"
                allow="fullscreen; autoplay; microphone; camera; clipboard-write"
                onLoad={() => setIsLoading(false)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
