// components/BirthdayCardFlipbook.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    message: "Wishing you a day filled with joy, a heart full of laughter, and a life overflowing with love — not just today, but every single day. 💖 You deserve all the happiness in the world, and I hope this birthday marks the beginning of yet another amazing chapter in your life. Here's to unforgettable memories, warm hugs, and dreams that come true. Happy Birthday!",
    media: "/images/memory1.jpg",
    type: "image",
  },
  {
    message: "You're not just my best friend — you're truly my favorite person in the entire world. 💫 Through every high and low, laugh and tear, you’ve stood by me like no one else ever has. Your presence lights up even the darkest days, and your friendship is one of the greatest blessings of my life. I can be completely myself around you — no masks, no filters — just pure, honest connection. Thank you for being my constant, my safe space, and my greatest joy. I’m endlessly grateful for you.",
    media: "/images/memory2.jpg",
    type: "image",
  },
  {
    message: "We stitched the words ‘Together Since 2018’ into hoodies, hoping to wear them side by side. Life had other plans — but that one photo, with both lying next to each other, feels like our hearts still kept the promise. 🥹🥹",
    media: "/images/memory12.jpg",
    type: "image",
  },
  {
    message: "It wasn’t the car, it wasn’t a fancy place — it was just us, tiffin, and an Activa parked on the roadside. That night, our laughter turned a misunderstanding into one of our most beautiful memories. 🥹🥹",
    media: "/images/memory13.jpg",
    type: "image",
  },
  {
    message: "One bowl of Maggi — made not out of hunger, but out of love, care, and my silly zidd. I made a fuss like a child, and she made Maggi like a best friend. That night, I realized… it wasn’t the taste that mattered, it was her. I wasn’t really hungry — I just needed a little extra love. 🥹🥹",
    media: "/images/memory14.jpg",
    type: "image",
  },
  {
    message: "Remember those cold winter days when the fog on the windshield made everything blurry? You created that little emoji and wrote my name right beneath it — a simple gesture that warmed even the frostiest mornings. Every time I see it, I’m reminded of you, and how you brighten my world, no matter the weather. 🥹🥹",
    media: "/images/memory15.jpg",
    type: "image",
  },
  {
    message: "Here’s a little video memory from our time together 🎥 — a glimpse into the laughter we've shared, the adventures we've taken, and the moments that made us who we are today. Every clip holds a story, every smile holds a memory, and every second is a reminder of just how special our bond is. I hope this brings back all the feels and reminds you how deeply you’re cherished. Here’s to many more memories yet to be made!",
    media: "/videos/memory7.mp4",
    type: "video",
  },
];

export default function BirthdayCardFlipbook() {
  const [index, setIndex] = useState(0);
  const current = cards[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-pink-500 mb-6 text-center">Your Day, Our Memories 💖</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Panel */}
        <motion.div
          className="bg-pink-50 p-6 rounded-lg shadow text-center h-full flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-800"><strong>{current.message}</strong></p>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          className="p-4 rounded-lg shadow-lg bg-gray-50 text-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          {current.type === "image" ? (
            <img
              src={current.media}
              alt="birthday memory"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <video controls className="w-full h-full rounded-lg">
              <source src={current.media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 gap-6">
        <button
          onClick={handlePrev}
          className="bg-pink-500 hover:bg-pink-400 text-white font-bold px-5 py-2 rounded"
        >
          ⬅ Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-5 py-2 rounded"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
