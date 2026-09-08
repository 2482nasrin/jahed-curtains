import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMaximize2, FiSun, FiDollarSign, FiShield } from "react-icons/fi";

export default function CommitmentSection() {
  const commitments = [
    {
      icon: <FiMaximize2 className="text-[#9c1b63] text-xl" />,
      title: "Millimetre-perfect, made to measure",
      description: "Every panel is cut to your exact window - no off-the-shelf sizes, no awkward gaps.",
    },
    {
      icon: <FiSun className="text-[#9c1b63] text-xl" />,
      title: "Fabrics chosen for the UAE sun",
      description: "Fade-resistant weaves and true blackout linings that stand up to Gulf summers.",
    },
    {
      icon: <FiDollarSign className="text-[#9c1b63] text-xl" />,
      title: "No advance payment",
      description: "We quote a fixed price at your home and you pay only when installation is complete.",
    },
    {
      icon: <FiShield className="text-[#9c1b63] text-xl" />,
      title: "Aftercare you can count on",
      description: "Our own installers, a 12-month warranty, and quick support on WhatsApp.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/installation-team.png" // আপনার প্রজেক্টের ইমেজ পাথ এখানে দিবেন
              alt="Jahed Curtains Installation"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side: Content & Features */}
          <div className="flex flex-col space-y-6">
            
            {/* Subtitle */}
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#9c1b63] uppercase">
                WHY JAHED CURTAINS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mt-2 tracking-tight">
                Committed to getting it right
              </h2>
            </div>

            {/* Feature List */}
            <div className="space-y-6 pt-2">
              {commitments.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#9c1b63]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block bg-[#9c1b63] hover:bg-[#801450] text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-8 py-4 rounded-full transition-colors duration-300 shadow-lg shadow-[#9c1b63]/30"
              >
                More About Us
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}