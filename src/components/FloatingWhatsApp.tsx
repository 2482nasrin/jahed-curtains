"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const whatsappNumber = "971547839880"; // আপনার হোয়াটসঅ্যাপ নম্বর
  const message = encodeURIComponent("Hello Jahed Curtains! I would like to know more about your services.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-20 h-20">
      
      {/* চারপাশের ঘূর্ণায়মান কার্ভড লাইনগুলো (ঠিক ছবির মতো) */}
      <div className="absolute inset-0 flex items-center justify-center animate-spin pointer-events-none" style={{ animationDuration: '8s' }}>
        <svg className="w-20 h-20" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#25D366"
            strokeWidth="3.5"
            strokeDasharray="30 40 20 50" // এই কোডটি লাইনগুলোকে ভেঙে আলাদা সেগমেন্ট বানাবে
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* মূল হোয়াটসঅ্যাপ বাটন */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-3xl text-white" />
      </a>
    </div>
  );
}