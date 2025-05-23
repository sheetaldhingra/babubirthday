import React from "react";
import { motion } from "framer-motion";

export default function CarDanceMemory() {
  return (
    <>
    <section className="bg-pink-50 py-16 px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          🎶 Dancing in the Car
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          That moment in the car, with your favorite song playing, and us dancing like no one’s watching. No stage, no lights — just music, movement, and magic. 💃🕺
        </p>

        <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <video
            controls
            className="w-full h-auto object-cover rounded-lg"
            poster="/images/memory10.jpg" // optional thumbnail
          >
            <source src="/videos/memory8.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
    <section className="py-16 px-6 text-center bg-gradient-to-b from-gray-100 to-pink-50">
  <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
    🌃 Our First Night Out Together
  </h2>
  <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
    A night under the stars, filled with laughter, late-night talks, and memories we’ll never forget. This video takes us back to that unforgettable first night out together.
  </p>

  <div className="flex justify-center items-center">
    <video
      controls
      className="w-full max-w-3xl rounded-xl shadow-lg"
      poster="/images/memory16.jpg" // optional thumbnail image
    >
      <source src="/videos/memory9.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>
</>
  );
}
