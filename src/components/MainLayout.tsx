"use client";

import { useState } from "react";
import MusicPlayer from "@/components/MusicPlayer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <>
      <MusicPlayer onInteractionChange={setIsInteracting} />
      <AnimatedBackground />
      {/* Konten utama hanya akan terlihat jika tidak ada overlay interaksi */}
      <div className={isInteracting ? 'invisible' : 'visible'}>
        {children}
      </div>
    </>
  );
}
