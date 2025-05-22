import React, { useState } from "react";
import { motion } from "framer-motion";

const pages = [
  {
    message: "Remember the first time we met? It feels like yesterday! 💫",
    image: "/images/memory2.jpg",
  },
  {
    message: "No matter the highs or lows, you've stood by me with unwavering love and strength. ❤️ You've been my constant in a world that’s always changing — and for that, I’m endlessly grateful.",
    video: "/videos/memory2.mp4",
  },
  {
    message: "Your smile is brighter than any birthday candle! 🕯️✨",
    video: "/videos/memory3.mp4",
  },
  {
    message: "Under the open sky, with headlights as candles and the road as our witness — we turned your dream into reality. A birthday cake on the highway, a moment forever etched in our hearts. ❤️🕯️✨",
    video: "/videos/memory1.mp4",
  },
  {
    message: "Here’s to many more years of unforgettable moments together! 🥂",
    image: "/images/memory11.jpg",
  },
];

export default function Flipbook() {
  const [index, setIndex] = useState(0);
  const current = pages[index];

  const handlePrev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setIndex((prev) => Math.min(prev + 1, pages.length - 1));

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg text-center">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        

        {current.image && (
          <img src={current.image} alt="memory" className="rounded-lg w-full h-full object-cover" />
        )}

        {current.video && (
          <video controls className="rounded-lg w-full h-full object-cover">
            <source src={current.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <p className="text-xl font-semibold text-purple-600"><strong>{current.message}</strong></p>
      </motion.div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded disabled:opacity-40"
          disabled={index === 0}
        >
          ⬅ Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded disabled:opacity-40"
          disabled={index === pages.length - 1}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
