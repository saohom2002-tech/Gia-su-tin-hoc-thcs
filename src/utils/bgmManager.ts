/**
 * BGM Manager - Trình quản lý nhạc nền không lời chuẩn Wayground / Quizizz
 * Tự động tổng hợp nhạc nền chất lượng cao qua Web Audio API (Kalimba, Lofi, 8-Bit, Piano)
 * Hỗ trợ: Vòng lặp vô tận (seamless loop), tự động giảm âm lượng khi trả lời đúng (Audio Ducking),
 * điều chỉnh âm lượng thông minh và lưu trạng thái vào LocalStorage.
 */

export interface BgmTrackInfo {
  id: string;
  name: string;
  genre: string;
  description: string;
  icon: string;
  bpm: number;
}

export const BGM_TRACKS: BgmTrackInfo[] = [
  {
    id: 'kalimba',
    name: 'Wayground Kalimba',
    genre: 'Vui nhộn & Tràn đầy năng lượng',
    description: 'Tiếng đàn Kalimba tươi sáng, vui vẻ kích thích phản xạ tư duy nhanh',
    icon: '🎵',
    bpm: 100,
  },
  {
    id: 'lofi',
    name: 'Lofi Study & Focus',
    genre: 'Êm dịu & Tập trung sâu',
    description: 'Hợp âm Rhodes ấm áp, giúp bình tĩnh và tập trung làm bài thi',
    icon: '🎧',
    bpm: 78,
  },
  {
    id: 'arcade',
    name: 'Arcade 8-Bit Game',
    genre: 'Trò chơi đấu trí hào hứng',
    description: 'Phong cách âm thanh game cổ điển vui tươi, hào hứng như đấu trí',
    icon: '👾',
    bpm: 118,
  },
  {
    id: 'piano',
    name: 'Peaceful Ambient Piano',
    genre: 'Nhẹ nhàng & Thư giãn',
    description: 'Giai điệu piano ngân vang êm đềm, giải tỏa căng thẳng khi làm bài',
    icon: '🌿',
    bpm: 72,
  },
];

type BgmListener = (state: BgmState) => void;

export interface BgmState {
  isPlaying: boolean;
  currentTrackId: string;
  volume: number;
  isMuted: boolean;
}

// Bảng tần số nốt nhạc
const NOTES: Record<string, number> = {
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.0, A3: 220.0, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0, A4: 440.0, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.0, B5: 987.77,
  C6: 1046.5,
};

class BgmManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private duckGain: GainNode | null = null;
  private timerId: number | null = null;

  public isPlaying: boolean = false;
  public currentTrackId: string = 'kalimba';
  public volume: number = 0.25; // Mặc định 25% (mức nhạc nền tối ưu)
  public isMuted: boolean = false;

  private currentStep: number = 0;
  private nextStepTime: number = 0;
  private listeners: Set<BgmListener> = new Set();

  constructor() {
    this.loadSettings();
  }

  // Đăng ký nhận thông báo trạng thái cập nhật (để UI re-render)
  public subscribe(listener: BgmListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    const st = this.getState();
    this.listeners.forEach((fn) => fn(st));
  }

  public getState(): BgmState {
    return {
      isPlaying: this.isPlaying,
      currentTrackId: this.currentTrackId,
      volume: this.volume,
      isMuted: this.isMuted,
    };
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        // Master Gain
        this.masterGain = this.ctx.createGain();
        this.duckGain = this.ctx.createGain();

        this.duckGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);

        this.duckGain.connect(this.masterGain);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Bật/tắt phát nhạc
  public togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public play() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    if (this.isPlaying) return;
    this.isPlaying = true;
    this.nextStepTime = ctx.currentTime + 0.05;
    this.currentStep = 0;

    this.startScheduler();
    this.saveSettings();
    this.notify();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
    this.saveSettings();
    this.notify();
  }

  // Tự động giảm âm lượng tạm thời khi học sinh trả lời đúng (Audio Ducking)
  public duck(durationMs: number = 700) {
    if (!this.isPlaying || !this.duckGain || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      this.duckGain.gain.cancelScheduledValues(now);
      this.duckGain.gain.setValueAtTime(0.25, now);
      this.duckGain.gain.linearRampToValueAtTime(1.0, now + durationMs / 1000);
    } catch {}
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.volume > 0 && this.isMuted) {
      this.isMuted = false;
    }
    this.applyVolume();
    this.saveSettings();
    this.notify();
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    this.applyVolume();
    this.saveSettings();
    this.notify();
  }

  private applyVolume() {
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      const targetVol = this.isMuted ? 0 : this.volume;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.linearRampToValueAtTime(targetVol, now + 0.05);
    }
  }

  public setTrack(trackId: string) {
    if (this.currentTrackId === trackId) return;
    this.currentTrackId = trackId;
    this.currentStep = 0;
    this.saveSettings();
    this.notify();
  }

  // =========================================================================
  // BỘ TỔNG HỢP ÂM THANH (SYNTHESIZER) DỰA TRÊN WEB AUDIO API
  // =========================================================================

  private startScheduler() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
    // Lập lịch mỗi 60ms cho 150ms tiếp theo
    this.timerId = window.setInterval(() => {
      this.scheduleLoop();
    }, 60);
  }

  private scheduleLoop() {
    const ctx = this.getAudioContext();
    if (!ctx || !this.isPlaying) return;

    const track = BGM_TRACKS.find((t) => t.id === this.currentTrackId) || BGM_TRACKS[0];
    const stepDuration = 60 / track.bpm / 4; // Mỗi step = 1/16 nốt

    while (this.nextStepTime < ctx.currentTime + 0.25) {
      this.playStep(this.currentTrackId, this.currentStep, this.nextStepTime);
      this.nextStepTime += stepDuration;
      this.currentStep = (this.currentStep + 1) % 64; // Vòng lặp 4 ô nhịp (4 bars * 16 steps = 64)
    }
  }

  private playStep(trackId: string, step: number, time: number) {
    switch (trackId) {
      case 'kalimba':
        this.playKalimbaStep(step, time);
        break;
      case 'lofi':
        this.playLofiStep(step, time);
        break;
      case 'arcade':
        this.playArcadeStep(step, time);
        break;
      case 'piano':
        this.playPianoStep(step, time);
        break;
      default:
        this.playKalimbaStep(step, time);
        break;
    }
  }

  // 1. WAYGROUND KALIMBA SYNTH (Tiếng gõ phím ngón tay ấm, trong trẻo)
  private playKalimbaStep(step: number, time: number) {
    // 4 hợp âm vui tươi chuẩn Wayground: C (0-15) -> G (16-31) -> Am (32-47) -> F (48-63)
    const melodyPattern: Record<number, string> = {
      0: 'C4', 2: 'E4', 4: 'G4', 6: 'C5', 8: 'E5', 10: 'G4', 12: 'E4', 14: 'G4',
      16: 'B3', 18: 'D4', 20: 'G4', 22: 'B4', 24: 'D5', 26: 'G4', 28: 'D4', 30: 'G4',
      32: 'A3', 34: 'C4', 36: 'E4', 38: 'A4', 40: 'C5', 42: 'E5', 44: 'A4', 46: 'E4',
      48: 'F3', 50: 'A3', 52: 'C4', 54: 'F4', 56: 'A4', 58: 'C5', 60: 'A4', 62: 'F4',
    };

    // Nốt phụ bay bổng (Accent Kalimba Tines)
    const sparklePattern: Record<number, string> = {
      3: 'G5', 7: 'A5', 11: 'E5', 15: 'C5',
      19: 'D5', 23: 'G5', 27: 'B5', 31: 'G5',
      35: 'E5', 39: 'A5', 43: 'C6', 47: 'A5',
      51: 'F5', 55: 'C5', 59: 'A5', 63: 'G5',
    };

    // Bass đệm mộc
    const bassPattern: Record<number, string> = {
      0: 'C3', 8: 'G3',
      16: 'G2', 24: 'D3',
      32: 'A2', 40: 'E3',
      48: 'F2', 56: 'C3',
    };

    if (melodyPattern[step]) {
      this.triggerKalimbaTine(NOTES[melodyPattern[step]], time, 0.22, (step % 4 === 0 ? -0.2 : 0.2));
    }
    if (sparklePattern[step]) {
      this.triggerKalimbaTine(NOTES[sparklePattern[step]], time, 0.15, (step % 2 === 0 ? 0.35 : -0.35));
    }
    if (bassPattern[step]) {
      this.triggerSoftBass(NOTES[bassPattern[step]], time, 0.26);
    }
  }

  // 2. LOFI STUDY & FOCUS SYNTH (Rhodes ấm + Lofi Beat nhẹ)
  private playLofiStep(step: number, time: number) {
    // Cmaj7 -> Am7 -> Dm7 -> G7 (thư thái, ấm cúng)
    const chordTriggers = [0, 16, 32, 48];
    if (chordTriggers.includes(step)) {
      const chords: Record<number, string[]> = {
        0: ['C4', 'E4', 'G4', 'B4'],
        16: ['A3', 'C4', 'E4', 'G4'],
        32: ['D4', 'F4', 'A4', 'C5'],
        48: ['G3', 'B3', 'D4', 'F4'],
      };
      chords[step]?.forEach((note) => {
        this.triggerLofiKey(NOTES[note], time, 0.14);
      });
    }

    // Nốt đệm lofi ngẫu hứng nhẹ
    const lofiMelody: Record<number, string> = {
      4: 'E5', 10: 'G5', 14: 'D5',
      20: 'C5', 26: 'E5', 30: 'B4',
      36: 'F5', 42: 'A5', 46: 'E5',
      52: 'D5', 58: 'F5', 62: 'B4',
    };
    if (lofiMelody[step]) {
      this.triggerLofiKey(NOTES[lofiMelody[step]], time, 0.12);
    }

    // Nhịp beat lofi gõ nhẹ (Rimshot / Shaker)
    if (step % 8 === 4) {
      this.triggerLofiSnare(time);
    }
    if (step % 4 === 0) {
      this.triggerLofiHiHat(time);
    }
  }

  // 3. ARCADE 8-BIT GAME SYNTH (Square wave vui nhộn)
  private playArcadeStep(step: number, time: number) {
    const leadPattern: Record<number, string> = {
      0: 'C5', 2: 'E5', 4: 'G5', 6: 'C6',
      8: 'G5', 10: 'E5', 12: 'G5', 14: 'E5',
      16: 'B4', 18: 'D5', 20: 'G5', 22: 'B5',
      24: 'G5', 26: 'D5', 28: 'G5', 30: 'D5',
      32: 'A4', 34: 'C5', 36: 'E5', 38: 'A5',
      40: 'E5', 42: 'C5', 44: 'E5', 46: 'C5',
      48: 'F4', 50: 'A4', 52: 'C5', 54: 'F5',
      56: 'C5', 58: 'A4', 60: 'C5', 62: 'D5',
    };

    const bass8Bit: Record<number, string> = {
      0: 'C3', 4: 'C3', 8: 'G3', 12: 'C3',
      16: 'G2', 20: 'G2', 24: 'D3', 28: 'G2',
      32: 'A2', 36: 'A2', 40: 'E3', 44: 'A2',
      48: 'F2', 52: 'F2', 56: 'C3', 60: 'F2',
    };

    if (leadPattern[step]) {
      this.trigger8BitLead(NOTES[leadPattern[step]], time);
    }
    if (bass8Bit[step]) {
      this.trigger8BitBass(NOTES[bass8Bit[step]], time);
    }
  }

  // 4. PEACEFUL PIANO SYNTH (Du dương, êm dịu)
  private playPianoStep(step: number, time: number) {
    const pianoNotes: Record<number, string> = {
      0: 'C4', 4: 'G4', 8: 'E5', 12: 'G4',
      16: 'E4', 20: 'B4', 24: 'G5', 28: 'B4',
      32: 'A3', 36: 'E4', 40: 'C5', 44: 'E4',
      48: 'F3', 52: 'C4', 56: 'A4', 60: 'C4',
    };
    if (pianoNotes[step]) {
      this.triggerPianoNote(NOTES[pianoNotes[step]], time);
    }
    if (step === 0 || step === 16 || step === 32 || step === 48) {
      const rootNotes = { 0: 'C3', 16: 'G2', 32: 'A2', 48: 'F2' };
      this.triggerSoftBass(NOTES[(rootNotes as any)[step]], time, 0.2);
    }
  }

  // =========================================================================
  // INSTRUMENT VOICING / TỔNG HỢP ÂM SẮC
  // =========================================================================

  // Tiếng Kalimba: Metallic sine + 3.5x harmonic overtone + natural decay
  private triggerKalimbaTine(freq: number, time: number, gainVol: number = 0.2, pan: number = 0) {
    if (!this.ctx || !this.duckGain) return;
    try {
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Panner Stereo cho cảm giác 2 ngón tay gảy 2 bên tines
      let dest: AudioNode = this.duckGain;
      if (typeof this.ctx.createStereoPanner === 'function') {
        const panner = this.ctx.createStereoPanner();
        panner.pan.setValueAtTime(pan, time);
        panner.connect(dest);
        dest = panner;
      }

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(3200, time);

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, time);

      // Overtone kim loại nhẹ
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 3.48, time);

      const duration = 0.55;
      gainNode.gain.setValueAtTime(0.001, time);
      gainNode.gain.linearRampToValueAtTime(gainVol, time + 0.012);
      gainNode.gain.exponentialRampToValueAtTime(0.001, time + duration);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(filter);
      filter.connect(dest);

      osc1.start(time);
      osc2.start(time);
      osc1.stop(time + duration);
      osc2.stop(time + duration);
    } catch {}
  }

  private triggerSoftBass(freq: number, time: number, gainVol: number = 0.25) {
    if (!this.ctx || !this.duckGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, time);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      const duration = 0.6;
      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(gainVol, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.duckGain);

      osc.start(time);
      osc.stop(time + duration);
    } catch {}
  }

  private triggerLofiKey(freq: number, time: number, gainVol: number = 0.12) {
    if (!this.ctx || !this.duckGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(950, time);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);

      const duration = 0.8;
      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(gainVol, time + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.duckGain);

      osc.start(time);
      osc.stop(time + duration);
    } catch {}
  }

  private triggerLofiSnare(time: number) {
    if (!this.ctx || !this.duckGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, time);
      osc.frequency.exponentialRampToValueAtTime(40, time + 0.08);

      gain.gain.setValueAtTime(0.06, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);

      osc.connect(gain);
      gain.connect(this.duckGain);
      osc.start(time);
      osc.stop(time + 0.08);
    } catch {}
  }

  private triggerLofiHiHat(time: number) {
    if (!this.ctx || !this.duckGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(8000, time);

      gain.gain.setValueAtTime(0.02, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);

      osc.connect(gain);
      gain.connect(this.duckGain);
      osc.start(time);
      osc.stop(time + 0.03);
    } catch {}
  }

  private trigger8BitLead(freq: number, time: number) {
    if (!this.ctx || !this.duckGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, time);

      const duration = 0.12;
      gain.gain.setValueAtTime(0.06, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

      osc.connect(gain);
      gain.connect(this.duckGain);

      osc.start(time);
      osc.stop(time + duration);
    } catch {}
  }

  private trigger8BitBass(freq: number, time: number) {
    if (!this.ctx || !this.duckGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);

      const duration = 0.2;
      gain.gain.setValueAtTime(0.12, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

      osc.connect(gain);
      gain.connect(this.duckGain);

      osc.start(time);
      osc.stop(time + duration);
    } catch {}
  }

  private triggerPianoNote(freq: number, time: number) {
    if (!this.ctx || !this.duckGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, time);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      const duration = 0.7;
      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(0.15, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.duckGain);

      osc.start(time);
      osc.stop(time + duration);
    } catch {}
  }

  // =========================================================================
  // LOCAL STORAGE SETTINGS
  // =========================================================================
  private loadSettings() {
    try {
      const savedEnabled = localStorage.getItem('ontap_bgm_enabled');
      if (savedEnabled !== null) {
        this.isPlaying = savedEnabled === 'true';
      }
      const savedVol = localStorage.getItem('ontap_bgm_volume');
      if (savedVol !== null) {
        this.volume = parseFloat(savedVol);
      }
      const savedTrack = localStorage.getItem('ontap_bgm_track');
      if (savedTrack && BGM_TRACKS.some((t) => t.id === savedTrack)) {
        this.currentTrackId = savedTrack;
      }
    } catch {}
  }

  private saveSettings() {
    try {
      localStorage.setItem('ontap_bgm_enabled', String(this.isPlaying));
      localStorage.setItem('ontap_bgm_volume', String(this.volume));
      localStorage.setItem('ontap_bgm_track', this.currentTrackId);
    } catch {}
  }
}

export const bgmManager = new BgmManager();
