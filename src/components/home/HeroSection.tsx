"use client";

import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaWhatsapp, FaShieldAlt, FaRulerCombined, FaSwatchbook, FaTools } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const BOOKING_WHATSAPP_TEXT = encodeURIComponent(
  "Hello Jahed Curtains! I'd like to book a free home visit for curtains or blinds."
);
const GENERAL_WHATSAPP_TEXT = encodeURIComponent("Hello Jahed Curtains! I have a question.");

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-between overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="videos/jahed-curtains-top-video.mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/45 z-10"></div>

      {/* Main Content Container (Centered layout block, but text aligned left) */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 pb-12 my-auto flex flex-col items-center">
        <div className="w-full max-w-2xl text-left flex flex-col items-start">
          
          {/* Top Subtitle */}
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-white uppercase mb-3">
            MADE TO MEASURE • DUBAI • SHARJAH • ABU DHABI
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-white">
            Curtains & Blinds in Dubai, Tailored for Your Home
          </h1>

          {/* Description Paragraph */}
          <p className="text-gray-200 text-sm sm:text-base lg:text-lg mb-7 leading-relaxed">
            From soft sheers to full blackout and smart motorized systems - we measure, tailor and install premium curtains and blinds across the UAE, at prices that make sense.
          </p>

          {/* Feature Checkmarks List (Left Aligned) */}
          <div className="space-y-2.5 mb-8 w-full">
            <div className="flex items-center space-x-3 text-sm sm:text-base text-gray-100">
              <FaCheckCircle className="text-[#9C1B63] text-lg flex-shrink-0" />
              <span>Free home visit with fabric swatches - choose colours in your own light</span>
            </div>
            <div className="flex items-center space-x-3 text-sm sm:text-base text-gray-100">
              <FaCheckCircle className="text-[#9C1B63] text-lg flex-shrink-0" />
              <span>No advance payment - pay only after installation</span>
            </div>
            <div className="flex items-center space-x-3 text-sm sm:text-base text-gray-100">
              <FaCheckCircle className="text-[#9C1B63] text-lg flex-shrink-0" />
              <span>Tailored and fitted fast by our own installation team</span>
            </div>
          </div>

          {/* Action Buttons (Left/Responsive Aligned) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-6">
            <button className="bg-[#9C1B63] hover:bg-[#801451] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition text-center uppercase tracking-wider text-sm">
              BOOK A FREE VISIT
            </button>
            <a
              href={`https://wa.me/971547839880?text=${BOOKING_WHATSAPP_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22c55e] hover:bg-[#1ea34d] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition flex items-center justify-center space-x-2 text-sm uppercase tracking-wider"
            >
              <FaWhatsapp className="text-xl" />
              <span>WHATSAPP US</span>
            </a>
          </div>

          {/* Warranty Badge */}
          <div className="inline-flex items-center space-x-2 bg-black/40 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-xs sm:text-sm text-gray-200">
            <FaShieldAlt className="text-[#9C1B63]" />
            <span>12-Month Warranty on every installation</span>
          </div>

        </div>
      </div>

      {/* Bottom Feature Bar */}
      <div className="relative z-20 bg-black/80 backdrop-blur-md border-t border-white/10 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center items-center">
          
          <div className="flex items-center justify-center space-x-2 text-gray-200 text-xs sm:text-sm font-medium">
            <MdPayment className="text-[#9C1B63] text-lg flex-shrink-0" />
            <span>NO ADVANCE PAYMENT</span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-200 text-xs sm:text-sm font-medium">
            <FaRulerCombined className="text-[#9C1B63] text-base flex-shrink-0" />
            <span>FREE MEASUREMENT</span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-200 text-xs sm:text-sm font-medium">
            <FaSwatchbook className="text-[#9C1B63] text-base flex-shrink-0" />
            <span>FREE FABRIC SWATCHES</span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-200 text-xs sm:text-sm font-medium">
            <FaTools className="text-[#9C1B63] text-base flex-shrink-0" />
            <span>FREE INSTALLATION</span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-200 text-xs sm:text-sm font-medium col-span-2 sm:col-span-1">
            <FaShieldAlt className="text-[#9C1B63] text-base flex-shrink-0" />
            <span>12-MONTH WARRANTY</span>
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Button on Bottom Right */}
      
    </section>
  );
}