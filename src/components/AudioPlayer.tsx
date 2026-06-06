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

  if (!isClient) return <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div>;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 w-full max-w-3xl mx-auto">
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
      
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 sm:gap-4 flex-row-reverse" dir="ltr">
          <span className="text-sm font-medium w-12 text-center text-gray-600 dark:text-gray-300">{formatTime(duration)}</span>
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={progress}
            onChange={handleSeek}
            className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <span className="text-sm font-medium w-12 text-center text-primary">{formatTime(progress)}</span>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6" dir="ltr">
          <button onClick={() => skip(-15)} className="p-2 sm:p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-600 dark:text-gray-300" aria-label="تأخير 15 ثانية">
            <SkipBack size={24} />
          </button>
          <button onClick={handlePlayPause} className="w-16 h-16 sm:w-20 sm:h-20 bg-primary text-white rounded-full flex items-center justify-center hover:scale-105 hover:bg-teal-700 transition shadow-lg" aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}>
            {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
          </button>
          <button onClick={() => skip(15)} className="p-2 sm:p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-600 dark:text-gray-300" aria-label="تقديم 15 ثانية">
            <SkipForward size={24} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
          <button onClick={changeSpeed} className="flex items-center gap-2 hover:text-primary transition font-medium bg-gray-50 dark:bg-gray-900 px-3 py-1 rounded-full">
            <Settings size={16} /> سرعة {playbackRate}x
          </button>
          <div className="flex items-center gap-2">
            <Volume2 size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
