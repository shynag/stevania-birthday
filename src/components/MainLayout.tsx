"use client";

import { useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <>
          <ThemedLoader />
          <Preloader />
        </>
      )}
      <MusicPlayer 
        onInteractionChange={setNeedsInteraction}
        onLoadComplete={handleLoadComplete}
      />
      <AnimatedBackground />
      <div className={(needsInteraction || isLoading) ? 'invisible' : 'visible'}>
        {children}
      </div>
    </>
  );
}
