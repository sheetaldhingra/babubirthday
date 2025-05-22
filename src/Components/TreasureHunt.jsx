import React, { useState, useEffect } from "react";
import { Howl } from "howler";

const CLUES = [
  { id: 1, text: "You’re kind beyond words.", x: "20%", y: "30%" },
  { id: 2, text: "Your smile brightens my day.", x: "70%", y: "40%" },
  { id: 3, text: "You always stood by me.", x: "50%", y: "70%" },
];

const finalMessage = `To the one who made my life better since 2017 — this journey, these memories, and this website… it's all for you. 💌`;

const sound = new Howl({
  src: ["/audio/voice-message.mp3"], // Optional: add your voice message here
});

export default function TreasureHunt() {
  const [foundClues, setFoundClues] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleClueClick = (id) => {
    if (!foundClues.includes(id)) {
      setFoundClues([...foundClues, id]);
    }
  };

  useEffect(() => {
    if (foundClues.length === CLUES.length) {
      setTimeout(() => {
        setShowMessage(true);
        sound.play(); // Play voice message when all clues are found
      }, 1000);
    }
  }, [foundClues]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Clues */}
      {CLUES.map((clue) => (
        <div
          key={clue.id}
          onClick={() => handleClueClick(clue.id)}
          className={`absolute text-pink-600 cursor-pointer transition-all duration-500 ${
            foundClues.includes(clue.id) ? "opacity-0" : "hover:scale-125"
          }`}
          style={{ top: clue.y, left: clue.x }}
        >
          🌟
        </div>
      ))}

      {/* Final Message */}
      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 text-white text-center px-6">
          <div className="bg-white p-8 rounded-lg text-black shadow-lg max-w-xl">
            <h2 className="text-2xl font-bold mb-4">💖 You Found Them All!</h2>
            <p className="text-lg">{finalMessage}</p>
            <button
              onClick={() => setShowMessage(false)}
              className="mt-6 px-4 py-2 bg-pink-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
