"use client";

import { useState, useRef, useEffect } from "react";

interface MusicPlayerProps {
  onInteractionChange: (needsInteraction: boolean) => void;
  onLoadComplete: () => void;
}

const MusicPlayer = ({ onInteractionChange, onLoadComplete }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    onInteractionChange(needsInteraction);
  }, [needsInteraction, onInteractionChange]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setNeedsInteraction(false);
      } catch (err) {
        console.warn("Autoplay prevented, will wait for user interaction.", err);
        setNeedsInteraction(true);
      } finally {
        // Beri tahu parent bahwa proses loading/pengecekan selesai
        onLoadComplete();
      }
    };

    tryPlay();
  }, [onLoadComplete]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch((err) => {
        console.warn("Play attempt prevented:", err);
        setNeedsInteraction(true);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying((s) => !s);
  };

  const handleBigPlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setIsPlaying(true);
      setNeedsInteraction(false);
    } catch (err) {
      setNeedsInteraction(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/background-music.mp3" loop playsInline />

      {!needsInteraction && (
        <button
          onClick={togglePlayPause}
          className="fixed top-4 left-4 z-50 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          )}
        </button>
      )}

      {needsInteraction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
          <div className="w-full max-w-md text-center bg-[#FEEA34] p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0_#0F172A]">
            <h1 className="text-4xl sm:text-5xl font-sans font-black text-black mb-4 [text-shadow:_3px_3px_0_rgba(255,255,255,0.6)]">
              Kejutan Dimulai!
            </h1>
            <p className="text-black/80 mb-6 font-sans">
              Tekan tombol di bawah untuk memulai musik dan kejutannya.
            </p>
            <button
              onClick={handleBigPlay}
              className="font-sans px-8 py-4 bg-black text-white font-black text-lg rounded-lg shadow-lg transform hover:scale-105 active:scale-95 transition"
            >
              MULAI
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
