import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Flipbook from './Flipbook';
import FriendshipTimeline from './FriendshipTimeline';
import BirthdayCardFlipbook from './BirthdayCardFlipbook';
import MemoryGallery from './MemoryGallery';
import BirthdayVideo from './BirthdayVideo';
import SpecialReasons from './SpecialReasons';
import DigitalGift from './DigitalGift';
import StarryNight from './StarryNight';
import TreasureHunt from './TreasureHunt';

export default function MagicalGate() {
  const [opened, setOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const flipbookRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => setShowConfetti(true), 1000); // start confetti after door opens
    setTimeout(() => {
      flipbookRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 2500); // scroll to flipbook section
  };

  const screenSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 overflow-hidden">
      {/* Confetti */}
      {showConfetti && <Confetti width={screenSize.width} height={screenSize.height} numberOfPieces={200} />}

      {/* Animated Doors */}
      {!opened && (
        <>
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-pink-400 flex items-center justify-center text-white text-2xl font-bold cursor-pointer z-20 shadow-lg origin-left"
            animate={opened ? { rotateY: -90 } : {}}
            transition={{ duration: 1.2 }}
            onClick={handleOpen}
          >
            🎀 Tap to Open
          </motion.div>
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 bg-purple-500 flex items-center justify-center text-white text-2xl font-bold cursor-pointer z-20 shadow-lg origin-right"
            animate={opened ? { rotateY: 90 } : {}}
            transition={{ duration: 1.2 }}
            onClick={handleOpen}
          >
            🎁 Tap to Open
          </motion.div>
        </>
      )}

      {/* Birthday Message */}
      {opened && (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 overflow-hidden">
  <motion.div
    className="flex flex-col items-center justify-center text-center px-6 z-30"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 5 }}
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4">
      Happy Birthday, BHARTI❤️! 🎉
    </h1>
    <p className="text-base sm:text-lg md:text-2xl text-gray-700 max-w-sm sm:max-w-md md:max-w-xl">
      8 years of laughter, inside jokes, and beautiful memories — here's to the next chapter!
    </p>
  </motion.div>
</section>

      )}

      {/* Next Section (Flipbook / Story) */}
      <div ref={flipbookRef} className="p-8 bg-white rounded-t-3xl shadow-inner min-h-screen z-10 relative" style={{display: !opened ? "none" : "" }}>
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">Our Journey</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          <strong>Here's a little storybook of moments we've shared together. 💫</strong>
        </p>
        {/* You can add your next component here, e.g. <Flipbook /> */}
        
        <BirthdayCardFlipbook />
      <Flipbook />
      <FriendshipTimeline />
      <MemoryGallery />
      <BirthdayVideo />
      <SpecialReasons />
      <DigitalGift />
      <StarryNight />
      <section className="py-20 bg-indigo-50 relative z-10">
  <h2 className="text-center text-4xl font-bold text-purple-700 mb-8">🧚‍♀️ Secret Message Hunt</h2>
  <TreasureHunt />
</section>
      </div>
    </div>
  );
}
