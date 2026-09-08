"use client";

import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const videoCards = [
  {
    id: 1,
    title: "BESPOKE CURTAIN SERVICE",
    videoSrc: "/videos/Sheer Curtains for Dining Room in Dubai – Elegant & Modern Window Styling.mp4",
  },
  {
    id: 2,
    title: "CURTAINS IN A FINISHED VILLA",
    videoSrc: "https://media.antonovich-design.ae/themes/default/app/video/antonovich-group-curtains-villa-walkthrough-dubai-2026-av1-8bit.mp4",
  },
  {
    id: 3,
    title: "DRAPES AND TIEBACKS",
    videoSrc: "https://media.antonovich-design.ae/themes/default/app/video/antonovich-group-curtains-tassel-tiebacks-dubai-2026.mp4",
  },
];

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      if (isPlaying[id]) {
        video.pause();
        setIsPlaying((prev) => ({ ...prev, [id]: false }));
      } else {
        video.play();
        setIsPlaying((prev) => ({ ...prev, [id]: true }));
      }
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Titles */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-800 tracking-wide mb-3">
          Curtains Dubai – Manufacturing and Fixing Curtains
        </h2>
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-12">
          CURTAINS IN DUBAI BY JAHED CURTAINS
        </p>

        {/* Video Cards Grid (Mobile Responsive: 1 col on mobile, 3 cols on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoCards.map((card) => (
            <div key={card.id} className="flex flex-col items-center">
              
              {/* Video Card Container */}
              <div 
                className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl bg-gray-900 mb-4 cursor-pointer"
                onClick={() => togglePlay(card.id)}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[card.id] = el;
                  }}
                  src={card.videoSrc}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loop
                  playsInline
                />

                {/* Dark Overlay Gradient for better contrast */}
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />

                {/* Center Play/Pause Button with #9c1b63 Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#9c1b63]/90 hover:bg-[#9c1b63] text-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110">
                    {isPlaying[card.id] ? (
                      <FaPause className="text-lg sm:text-xl" />
                    ) : (
                      <FaPlay className="text-lg sm:text-xl ml-1" />
                    )}
                  </div>
                </div>
              </div>

              {/* Card Title (Plain Text - No Link/Pointer events that trigger links) */}
              <h3 className="text-xs sm:text-sm font-bold tracking-wider text-gray-800 uppercase mt-2 select-none">
                {card.title}
              </h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}