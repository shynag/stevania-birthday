"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft | null = null;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Countdown = ({
  targetDate,
  onComplete,
}: {
  targetDate: string;
  onComplete: () => void;
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft(targetDate),
  );

  useEffect(() => {
    if (!timeLeft) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, targetDate, onComplete]);

  if (!timeLeft) {
    return null; // Return null because the parent will handle the view change
  }

  return (
    <div className="grid grid-flow-col gap-3 sm:gap-4 md:gap-6 text-center auto-cols-max">
      <div className="flex flex-col p-2 sm:p-4 bg-white rounded-lg border-4 border-black shadow-[6px_6px_0_#0F172A] transition-all hover:shadow-[4px_4px_0_#0F172A] rotate-[-2deg] hover:rotate-0">
        <span
          className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-black"
          suppressHydrationWarning={true}
        >
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-xs sm:text-sm font-bold text-gray-700">HARI</span>
      </div>
      <div className="flex flex-col p-2 sm:p-4 bg-white rounded-lg border-4 border-black shadow-[6px_6px_0_#0F172A] transition-all hover:shadow-[4px_4px_0_#0F172A] rotate-[1deg] hover:rotate-0">
        <span
          className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-black"
          suppressHydrationWarning={true}
        >
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-xs sm:text-sm font-bold text-gray-700">JAM</span>
      </div>
      <div className="flex flex-col p-2 sm:p-4 bg-white rounded-lg border-4 border-black shadow-[6px_6px_0_#0F172A] transition-all hover:shadow-[4px_4px_0_#0F172A] rotate-[2deg] hover:rotate-0">
        <span
          className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-black"
          suppressHydrationWarning={true}
        >
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-xs sm:text-sm font-bold text-gray-700">
          MENIT
        </span>
      </div>
      <div className="flex flex-col p-2 sm:p-4 bg-white rounded-lg border-4 border-black shadow-[6px_6px_0_#0F172A] transition-all hover:shadow-[4px_4px_0_#0F172A] rotate-[-1deg] hover:rotate-0">
        <span
          className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-black"
          suppressHydrationWarning={true}
        >
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-xs sm:text-sm font-bold text-gray-700">
          DETIK
        </span>
      </div>
    </div>
  );
};

export default Countdown;
