"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function InstantQuotation() {
  return (
    <section className="w-full bg-[#FAF9F6] m-0 p-0">
      {/* Full Width Container without any gap */}
      <div className="w-full relative bg-[#9c1b63] overflow-hidden shadow-lg m-0">
        
        {/* Desktop Curved Background Layout with Side Images (Full Width Coverage) */}
        <div className="absolute inset-0 hidden lg:flex justify-between items-center pointer-events-none w-full">
          {/* Left Image with Curved Edge Effect */}
          <div className="relative w-[28%] h-full">
            <Image
              src="/products/Linen-Organza-Queer.png"
              alt="Curtain Left"
              fill
              className="object-cover"
            />
            {/* Smooth gradient shadow overlay for the curve effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9c1b63]/40 to-[#9c1b63]" />
          </div>

          {/* Right Image with Curved Edge Effect */}
          <div className="relative w-[28%] h-full">
            <Image
              src="/products/Linen-Organza-Queer.png"
              alt="Curtain Right"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#9c1b63]/40 to-[#9c1b63]" />
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-10 sm:py-14 text-center flex flex-col items-center">
          
          {/* Heading */}
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-3 sm:mb-4">
            Get An Instant Quotation For Supply &amp; Installation Of Curtains In Dubai
          </h2>

          {/* Description */}
          <p className="text-white/95 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mb-6 sm:mb-8">
            Need to know how much it will cost to get and install your new window coverings in Dubai? Just reach out to us, and we will give you a bespoke design consultation for the right curtain solution &amp; the exact supply &amp; fitting estimate.
          </p>

          {/* Action Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 font-bold px-7 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm tracking-wide"
          >
            Book An Appointment
          </Link>

        </div>

      </div>
    </section>
  );
}