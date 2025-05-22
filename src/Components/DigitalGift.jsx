import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGift } from "react-icons/fa";
import Confetti from "react-confetti";

export default function DigitalGift() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <div className="bg-gradient-to-b from-white to-pink-50 py-16 px-6 text-center relative overflow-hidden">
      <h2 className="text-4xl font-bold text-purple-600 mb-8">🎁 Surprise Gift</h2>

      {!opened && (
        <motion.div
          onClick={handleOpen}
          className="cursor-pointer inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaGift size={100} className="text-rose-500 hover:scale-110 transition-transform" />
          <p className="mt-4 text-gray-600 font-medium">Tap to unwrap your gift!</p>
        </motion.div>
      )}

      <AnimatePresence>
        {opened && (
          <>
            <Confetti numberOfPieces={150} recycle={false} />
            <motion.div
              key="gift-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="mt-8 bg-white p-6 rounded-lg shadow-xl max-w-xl mx-auto"
            >
              <h3 className="text-2xl font-semibold text-pink-500 mb-4">Here’s Your Digital Gift 🎉</h3>
              <p className="text-gray-700 text-lg mb-4">
                I poured my heart into this! 💌<br />
                A little poem just for you:
              </p>
              <div className="bg-pink-100 text-pink-900 p-4 rounded shadow text-left italic">
                "In every smile, a memory<br />
                In every laugh, a spark<br />
                You light the world around you<br />
                Like a candle in the dark."
              </div>
              {/* Optional: Add coupon code or image below */}
              {/* <p className="mt-6 text-xl font-bold text-purple-600">🎫 Gift Code: BDAY2025LOVE</p> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
