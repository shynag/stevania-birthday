"use client";

import { useState, useEffect } from "react";
import Countdown from "@/components/Countdown";
import Surprise from "@/components/Surprise";
import Image from "next/image";

export default function Home() {
  const birthday = "2026-06-19T07:30:00";

  const isBirthdayPassed = () => new Date() > new Date(birthday);

  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (isBirthdayPassed()) {
      setIsTimeUp(true);
    }
  }, []);

  const handleCountdownComplete = () => {
    setIsTimeUp(true);
  };

  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center p-4 md:p-8">
      <div className="z-10">
        {isTimeUp ? (
          <Surprise />
        ) : (
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-200 drop-shadow-lg [text-shadow:_3px_3px_0_black]">
              Kejutan Spesial Akan Segera Tiba!
            </h1>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md font-sans [text-shadow:_2px_2px_0_black]">
              Menghitung mundur menuju hari spesialmu.
            </p>
            <div className="mt-10 flex justify-center">
              <Countdown
                targetDate={birthday}
                onComplete={handleCountdownComplete}
              />
            </div>
            {/* Tombol Demo */}
            {(process.env.NODE_ENV === "development" ||
              process.env.NEXT_PUBLIC_SHOW_DEMO_BUTTON === "true") && (
              <div className="mt-8">
                <button
                  onClick={handleCountdownComplete}
                  className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:bg-yellow-500"
                >
                  Lihat Demo
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
