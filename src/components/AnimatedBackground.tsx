"use client";

import { useState, useEffect } from "react";

interface Particle {
  left: number;
  floatDuration: number;
  wiggleDuration: number;
  color: string;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleArray: Particle[] = [];
    const particleCount = 25;
    // Using solid hex colors for full opacity
    const colors = [
      "#B60F61", // User's Pink
      "#00AEEF", // Finn Blue
      "#FEEA34", // Jake Yellow
      "#8A78E1", // LSP Purple
      "#F4511E", // Orange
      "#7BC043", // Green
    ];

    for (let i = 0; i < particleCount; i++) {
      const left = Math.floor(Math.random() * 101);
      const floatDuration = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
      const wiggleDuration = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particleArray.push({
        left,
        floatDuration,
        wiggleDuration,
        color,
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <ul className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      {particles.map((p, i) => (
        <li
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.floatDuration}s`,
            animationDelay: `-${Math.random() * p.floatDuration}s`,
          }}
        >
          <div
            className="balloon"
            style={{
              animationDuration: `${p.wiggleDuration}s`,
              animationDelay: `-${Math.random() * p.wiggleDuration}s`,
              // @ts-ignore
              "--particle-color": p.color,
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default AnimatedBackground;
