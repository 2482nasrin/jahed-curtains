"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  {
    title: "Curtains & Drapes",
    subtitle: "Sheer, day & night and wave styles",
    image: "/images/curtain-1.png",
    link: "/products?category=curtains-drapes",
  },
  {
    title: "Blinds & Shades",
    subtitle: "Roller, roman, zebra & wooden",
    image: "/images/curtain-2.png",
    link: "/products?category=blinds-shades",
  },
  {
    title: "Motorized",
    subtitle: "Smart curtain systems",
    image: "/images/curtain-3.png",
    link: "/products?category=motorized",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#9C1B63] uppercase mb-2">
            WHAT WE MAKE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Every window, covered
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Three families of window treatments - all made to measure, all installed by us.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative rounded-3xl overflow-hidden shadow-lg h-[420px] sm:h-[460px] flex flex-col justify-end transition transform hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Bottom White Floating Box */}
              <div className="relative z-10 m-4 sm:m-5 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-md flex items-center justify-between transition group-hover:bg-white">
                <div>
                  <h3 className="text-lg sm:text-sm font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    {item.subtitle}
                  </p>
                </div>

                {/* Arrow Icon Button */}
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 transition group-hover:bg-[#9C1B63] group-hover:text-white flex-shrink-0 ml-3">
                  <FaArrowRight className="text-sm" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}