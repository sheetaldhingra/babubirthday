import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const reasons = [
  {
    text: "😄 Your laughter is contagious — it's the kind that echoes long after the moment is gone. You light up every room just by being in it.",
  },
  {
    text: "🫶 You stood by me when no one else did — in my darkest days, you were the light I didn’t know I needed. That loyalty is priceless.",
  },
  {
    text: "🎨 Your creativity always inspires me — whether it's in your art, your ideas, or just the way you see the world, it makes life more colorful.",
  },
  {
    text: "☀️ You make even the dullest day fun — with your jokes, silly ideas, and that infectious energy, you turn ordinary into unforgettable.",
  },
  {
    text: "💪 You believe in me more than I do — your faith in me has pushed me through moments I thought I couldn’t survive. You’re my quiet strength.",
  },
  {
    text: "🎧 You're the best listener ever — not just hearing my words, but understanding the silence between them. You’ve always made me feel heard.",
  },
  {
    text: "❤️ You're simply irreplaceable — no one makes me laugh, feel, think, or grow the way you do. There’s only one YOU in the world, and I’m lucky to have you.",
  },
];

export default function SpecialReasons() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reasons.length);
  const prev = () => setIndex((prev) => (prev - 1 + reasons.length) % reasons.length);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reasons.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  const current = reasons[index];

  return (
    <div className="bg-pink-50 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-rose-500 mb-10">
        💖 7 Reasons Why You're Special
      </h2>

      <div
        {...swipeHandlers}
        className="relative max-w-xl mx-auto touch-pan-y"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg text-xl text-gray-700 font-medium flex flex-col items-center gap-4"
          >
            <span className="text-5xl">{current.emoji}</span>
            <p className="text-lg">{current.text}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="bg-pink-300 hover:bg-pink-400 text-white font-bold px-4 py-2 rounded"
          >
            ⬅ Prev
          </button>
          <button
            onClick={next}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-4 py-2 rounded"
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
}
