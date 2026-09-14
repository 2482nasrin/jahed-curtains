import React from "react";
import Link from "next/link";
import { FiPhoneCall, FiMail, FiMapPin, FiShield, FiFileText } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const PAGE_WHATSAPP_TEXT = encodeURIComponent(
  "Hello Jahed Curtains! I have a query regarding your Trade License and company details."
);

export default function TradeLicensePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#fbf9f5] text-white py-12 sm:py-16 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#9c1b63]/20 text-[#9c1b63] mb-4">
            <FiShield className="text-2xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-3">
            Official Trade License Info
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Jahed Curtains operates as a fully registered, legal entity in the UAE, ensuring trusted quality and transparent business practices.
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Card Top Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-[#3b1443] to-[#9c1b63]" />

          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Company Title & Arabic Name */}
            <div className="border-b border-gray-100 pb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-[#9c1b63] mb-3">
                Verified Business Entity
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-1">
                JAHED TRADING L.L.C. – Branch of Abu Dhabi
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                Furniture and Curtains Jahed Trading L.L.C.
              </p>
              <p className="text-lg font-arabic text-gray-700 mt-2" dir="rtl">
                جاهد لتجارة الستائر والمفروشات ذ.م.م - فرع أبو ظبي
              </p>
            </div>

            {/* License Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-200/60">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Licence No</span>
                <p className="text-base font-bold text-gray-900">CN-6599636</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Unified Licence No</span>
                <p className="text-base font-bold text-gray-900">501-2026-200071839</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Unified Registration No</span>
                <p className="text-base font-bold text-gray-900">101-2026-200107398</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Legal Form</span>
                <p className="text-base font-bold text-gray-900">UAE Branch</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Issuance Date</span>
                <p className="text-base font-semibold text-gray-800">11/06/2026</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Expiry Date</span>
                <p className="text-base font-semibold text-emerald-600">10/06/2027</p>
              </div>

              <div className="space-y-1 sm:col-span-2 pt-2 border-t border-gray-200">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Owner / Manager</span>
                <p className="text-base font-bold text-gray-900">Jahed Hossan Abdul Malek</p>
              </div>
            </div>

            {/* Official Contact & Address Section */}
            <div className="space-y-4 pb-6 border-b border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                Official Registered Address & Contact
              </h3>
              
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start space-x-3">
                  <FiMapPin className="text-[#9c1b63] text-lg flex-shrink-0 mt-0.5" />
                  <span>Mohammed Bin Zayed City, Mohammed Bin Zayed East, &amp; Al Majmoua Al Muttahida Al Qabidha Building, Abu Dhabi, UAE</span>
                </li>
                <li>
                  <a href="tel:+971547839880" className="flex items-center space-x-3 hover:text-[#9c1b63] transition-colors">
                    <FiPhoneCall className="text-[#9c1b63] text-lg flex-shrink-0" />
                    <span className="font-semibold">+971 54 783 9880</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:zaheedfeni47@gmail.com" className="flex items-center space-x-3 hover:text-[#9c1b63] transition-colors">
                    <FiMail className="text-[#9c1b63] text-lg flex-shrink-0" />
                    <span className="font-semibold">zaheedfeni47@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}