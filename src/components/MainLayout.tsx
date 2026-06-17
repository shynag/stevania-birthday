"use client";

import { useState, useEffect } from "react";
import MusicPlayer from "@/components/MusicPlayer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThemedLoader from "./ThemedLoader";
import Preloader from "./Preloader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const [isMusicPlayerReady, setIsMusicPlayerReady] = useState(false);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  // Loading screen is active until both music player and images are ready
  const isLoading = !isMusicPlayerReady || !areImagesLoaded;

  const handleMusicPlayerLoadComplete = () => {
    setIsMusicPlayerReady(true);
  };

  const handleImagesLoaded = () => {
    setAreImagesLoaded(true);
  };

  return (
    <>
      {isLoading && <ThemedLoader />}
      <MusicPlayer 
        onInteractionChange={setNeedsInteraction}
        onLoadComplete={handleMusicPlayerLoadComplete}
      />
      <AnimatedBackground />
      <Preloader onImagesLoaded={handleImagesLoaded} /> {/* Preloader selalu aktif di background */}
      
      <div className={(needsInteraction || isLoading) ? 'invisible' : 'visible'}>
        {children}
      </div>
    </>
  );
}
