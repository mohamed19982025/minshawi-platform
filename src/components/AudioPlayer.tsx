"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Settings } from "lucide-react";

interface AudioPlayerProps {
  surahSlug: string;
  audioUrl: string;
}

export default function AudioPlayer({ surahSlug, audioUrl }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && audioRef.current) {
      const savedPosition = localStorage.getItem(`audio_pos_${surahSlug}`);
      if (savedPosition) {
        audioRef.current.currentTime = parseFloat(savedPosition);
        setProgress(parseFloat(savedPosition));
      }
    }
  }, [surahSlug, isClient]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      localStorage.setItem(`audio_pos_${surahSlug}`, audioRef.current.currentTime.toString());
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  const skip = (amount: number) => {
    if (audioRef.current) {
      let newTime = audioRef.current.currentTime + amount;
      if (newTime < 0) newTime = 0;
      if (newTime > duration) newTime = duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const changeSpeed = () => {
    const rates = [1, 1.25, 1.5, 2, 0.75];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
      setPlaybackRate(nextRate);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!isClient) return <div className="h-48 glass rounded-3xl animate-pulse w-full max-w-3xl mx-auto border border-primary/10"></div>;

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 shadow-xl border border-primary/20 w-full max-w-3xl mx-auto relative overflow-hidden group/player">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
      >
        <source src={audioUrl} type="audio/mp4" />
        <source src={audioUrl} type="video/mp4" />
        <source src={audioUrl} type="audio/mpeg" />
      </audio>
      
      <div className="flex flex-col gap-8 relative z-10">
        <div className="flex items-center gap-3 sm:gap-5 flex-row-reverse" dir="ltr">
          <span className="text-sm font-bold w-12 text-center text-foreground/70">{formatTime(duration)}</span>
          <div className="flex-1 relative flex items-center group/slider">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={progress}
              onChange={handleSeek}
              className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-primary relative z-10"
            />
            {/* Custom progress track overlay for better look */}
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-2.5 bg-primary rounded-full pointer-events-none"
              style={{ width: `${duration ? (progress / duration) * 100 : 0}%` }}
            ></div>
          </div>
          <span className="text-sm font-bold w-12 text-center text-primary">{formatTime(progress)}</span>
        </div>

        <div className="flex items-center justify-center gap-6 sm:gap-10" dir="ltr">
          <button onClick={() => skip(-15)} className="p-3 sm:p-4 rounded-full hover:bg-primary/10 transition-colors text-foreground/80 hover:text-primary" aria-label="تأخير 15 ثانية">
            <SkipBack size={28} />
          </button>
          
          <button 
            onClick={handlePlayPause} 
            className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-teal-700 text-white rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(15,118,110,0.4)] hover:shadow-[0_0_30px_rgba(15,118,110,0.6)] border-4 border-white/10" 
            aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
          >
            {isPlaying ? <Pause size={36} className="fill-current" /> : <Play size={36} className="ml-2 fill-current" />}
          </button>
          
          <button onClick={() => skip(15)} className="p-3 sm:p-4 rounded-full hover:bg-primary/10 transition-colors text-foreground/80 hover:text-primary" aria-label="تقديم 15 ثانية">
            <SkipForward size={28} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-2 text-sm font-bold text-foreground/60 border-t border-primary/10 pt-4">
          <button onClick={changeSpeed} className="flex items-center gap-2 hover:text-primary transition-colors bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full border border-primary/10">
            <Settings size={18} /> سرعة {playbackRate}x
          </button>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <Volume2 size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
