import React, { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";

export default function FireworksEffect() {
  const containerRef = useRef(null);
  const fireworksRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fireworks = new Fireworks(container, {
      rocketsPoint: 50,
      hue: { min: 0, max: 360 },
      delay: { min: 15, max: 30 },
      speed: 2,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.5,
      particles: 100,
      trace: 3,
      explosion: 5,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: { min: 0.015, max: 0.03 },
      },
      boundaries: {
        top: 0,
        bottom: window.innerHeight,
        left: 0,
        right: window.innerWidth,
      },
      sound: {
        enable: false,
      },
    });

    fireworksRef.current = fireworks;

    const handleClick = () => {
      fireworks.start();

      setTimeout(() => {
        fireworks.stop();
      }, 1500); // Fire for 1.5 seconds per click
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
      fireworks.stop();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40"
    />
  );
}
