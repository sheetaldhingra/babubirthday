// src/components/BirthdayVideo.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function BirthdayVideo() {
  const videoRef = useRef(null);
  const [playConfetti, setPlayConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Track window size for confetti
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePlay = () => {
    setPlayConfetti(true);
    setTimeout(() => setPlayConfetti(false), 6000); // Confetti for 6s
  };

  return (
    <div className="relative bg-white py-16 px-6 text-center">
      {playConfetti && <Confetti width={dimensions.width} height={dimensions.height} />}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-purple-600 mb-8"
      >
        🎬 A Special Birthday Reel
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto shadow-xl rounded-lg overflow-hidden"
      >
        <video
          ref={videoRef}
          onPlay={handlePlay}
          className="w-full rounded"
          controls
        >
          <source src="/videos/memory7.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
}
