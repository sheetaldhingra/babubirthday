import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";

export default function FriendshipTimeline() {
  

  return (
    <>
    <section className="py-16 px-6 bg-yellow-50 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">🎉 Two Birthdays, One Bond</h2>
  <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
    The past two years, we didn’t just cut cakes — we created memories that still make me smile.
    From surprise plans to quiet moments, each birthday became a chapter in our story.
  </p>

  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
  {/* Birthday 2023 */}
  <div className="bg-white rounded-lg shadow p-4 w-full overflow-hidden">
    <img
      src="/images/memory17.jpg"
      alt="Birthday 2023"
      className="rounded-lg mb-4 w-full h-[50%] object-cover"
    />
    <h3 className="text-xl font-semibold text-pink-500">🎈 Birthday 2023</h3>
    <p className="text-gray-600 mt-2 italic">
      The day we laughed too much, clicked blurry selfies, and proved once again that the best gifts are moments — not things. Because in those silly, unfiltered snapshots and endless giggles, we found the kind of happiness no gift box could ever hold. It was a reminder that the real magic isn’t in the celebration itself, but in the company we keep and the memories we make together — messy, beautiful, and forever ours.
    </p>
  </div>

  {/* Birthday 2024 */}
  <div className="bg-white rounded-lg shadow p-4 w-full overflow-hidden">
    <img
      src="/images/memory1.jpg"
      alt="Birthday 2024"
      className="rounded-lg mb-4 w-full h-[50%] object-cover"
    />
    <h3 className="text-xl font-semibold text-pink-500">🎁 Birthday 2024</h3>
    <p className="text-gray-600 mt-2 italic">
      Under city lights and quiet smiles, we celebrated not just your birthday — but everything we’ve been through together. Each laugh we shared that night carried the weight of years of memories, and every glance held stories only we could understand. It wasn’t just a celebration of another year — it was a silent thank you for all the little moments, all the times we held each other up, and all the love that’s grown between us in ways words could never fully explain.
    </p>
  </div>
</div>


  {/* Optional: Add a short video montage */}
  <div className="mt-12">
    <h4 className="text-2xl font-semibold text-pink-500 mb-4">📽️ Flashback Moments</h4>
    <video
      controls
      className="rounded-lg mx-auto w-full max-w-3xl"
      poster="/images/memory1.jpg"
    >
      <source src="/videos/memory3.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>
<div className="bg-white rounded-lg shadow p-4 mt-8 max-w-3xl mx-auto text-center">
  <h3 className="text-xl font-semibold text-yellow-500 mb-2">🎁 My Gifts to Her vs Her Gifts to Me 😅</h3>
  
  <p className="text-gray-700 italic">
    Anklet? Bought it. <br />
    Bracelet? Picked the prettiest one. <br />
    Watch? Wrapped it with a note and a whole lot of love. 💝<br /><br />

    And what did I get in return? Hmm... maybe a “thank you”... or a late reply 😆<br />
    But hey, your smile was totally worth it (I guess). 🤷‍♂️💖<br /><br />

    Drumroll please... <strong>*Absolutely nothing!* 😭</strong><br />
    But that “Aww thank you yaar” was the highlight of my whole month! 😂
  </p>

  <div className="mt-5 flex justify-center gap-4 flex-wrap">
    <div className="bg-pink-100 text-pink-800 p-3 rounded shadow text-sm">👣 Anklet</div>
    <div className="bg-purple-100 text-purple-800 p-3 rounded shadow text-sm">⌚ Watch</div>
    <div className="bg-blue-100 text-blue-800 p-3 rounded shadow text-sm">💫 Bracelet</div>
  </div>

  <p className="text-gray-500 mt-4 text-sm"><strong>Still waiting for my return gift... maybe next year? 😌🎀</strong></p>
</div>


    </>
  );
}
