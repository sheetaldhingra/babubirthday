// components/MemoryGallery.jsx
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Video } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";


const memories = [
  {
    src: "/images/memory2.jpg",
    caption: "Our very first selfie 😄 (2017)",
    type: "image"
  },
  {
    src: "/images/memory16.jpg",
    caption: "Late-night walk memories 🌙",
    type: "image"
  },
  {
    src: "/images/memory17.jpg",
    caption: "That crazy birthday party 🎉",
    type: "image"
  },
  {
    src: "/videos/memory5.mp4",
    caption: "My Jaduu and even my whole world.  🌍❤️",
    type: "video",
    poster: "/images/memory17.jpg",
  },
  {
    src: "/videos/memory4.mp4",
    caption: "Cafe chill session ☕",
    type: "video",
    poster: "/images/memory17.jpg",
  },
  {
    src: "/videos/memory6.mp4",
    caption: "This one’s still hilarious 😂",
    type: "video",
    poster: "/images/memory17.jpg",
  },
];

export default function MemoryGallery() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-10">
        📸 Gallery Wall of Memories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md bg-white hover:scale-105 transition"
            onClick={() => setOpenIndex(index)}
          >
            {memory.type === "image" ? (
            <img
              src={memory.src}
              alt={`memory-${index}`}
              className="w-full h-50 object-cover"
            />)
            :
            (
            <video controls className="rounded-lg w-full h-full object-cover">
            <source src={memory.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            )
}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {memory.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      {/* <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex}
        slides={memories.map((m) => ({ src: m.src }))}
      /> */}
      {/* <Lightbox
  open={openIndex >= 0}
  close={() => setOpenIndex(-1)}
  index={openIndex}
  slides={memories.map((m) => ({
    src: m.src,
    type: m.type || 'image', // 'image' by default, can be 'video'
    poster: m.poster,
  }))}
  plugins={[Video]}
/> */}

    </div>
  );
}
