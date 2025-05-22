import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";

const timeline = [
  {
    year: 2017,
    memory: "The year we met – innocent talks turned into unforgettable laughs. ❤️",
    image: "/images/memory1.jpg",
  },
  {
    year: 2018,
    memory: "First silly selfie and endless late-night chats. 🌙",
    image: "/images/memory2.jpg",
  },
  {
    year: 2019,
    memory: "Our crazy adventure to [place] – still laughing about it! 😂",
    image: "/images/memory3.jpg",
  },
  {
    year: 2020,
    memory: "Even lockdown couldn't stop our bond from growing. 💪",
    image: "/images/memory4.jpg",
  },
  {
    year: 2021,
    memory: "You were there in my ups and downs — thank you for that. 🫶",
    image: "/images/memory5.jpg",
  },
  {
    year: 2022,
    memory: "Birthday gifts, secret notes, and a stronger friendship. 🎁",
    image: "/images/memory6.jpg",
  },
  {
    year: 2023,
    memory: "Every moment was more magical than the last. ✨",
    image: "/images/memory7.jpg",
  },
  {
    year: 2024,
    memory: "7 years strong! Here's to many more years of madness. 🥂",
    image: "/images/memory8.jpg",
  },
  {
    year: 2025,
    memory: "This year, I built this site — just for you. Happy Birthday! 💻🎂",
    image: "/images/memory9.jpg",
  },
];

export default function FriendshipTimeline() {
  const [index, setIndex] = useState(0);
  const current = timeline[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % timeline.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + timeline.length) % timeline.length);
  };

  return (
    <>
      
    <div className="relative min-h-[600px] bg-gradient-to-br from-white to-pink-50 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-10">📖 Friendship Timeline</h2>

      <div className="relative z-10 max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-pink-500 mb-2">
              {current.year}
            </h3>
            <p className="text-gray-700 text-lg mb-4">{current.memory}</p>
            <img
              src={current.image}
              alt={`memory-${current.year}`}
              className="w-full h-64 object-cover rounded-lg mx-auto shadow"
            />
            <motion.div
              key={`icon-${index}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              className="mt-4 text-pink-400 text-2xl flex justify-center gap-4"
            >
              <FaHeart />
              <FaStar />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="bg-pink-300 hover:bg-pink-400 text-white font-bold px-4 py-2 rounded"
          >
            ⬅ Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-4 py-2 rounded"
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
