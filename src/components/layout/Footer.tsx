import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const BOOKING_WHATSAPP_TEXT = encodeURIComponent(
  "Hello Jahed Curtains! I'd like to book a free home visit for curtains or blinds."
);

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-gray-300 border-t border-gray-800">
      
      {/* CTA Banner Section */}
      <div className="bg-gradient-to-r from-[#9c1b63] to-[#9c1b63] py-12 sm:py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Ready for a free home visit?
              </h2>
              <p className="text-sm sm:text-base text-white/90 max-w-xl">
                We bring fabric swatches to your door, measure every window, and quote on the spot - with no advance payment.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
              <Link
                href="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-6 py-3.5 rounded-full shadow-md text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-0.5"
              >
                BOOK A FREE VISIT
              </Link>

              <a
                href={`https://wa.me/971547839880?text=${BOOKING_WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1c1c1c] text-white hover:bg-black font-bold px-6 py-3.5 rounded-full shadow-md text-sm sm:text-base flex items-center space-x-2 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-[#25D366] text-lg" />
                <span>WHATSAPP US</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Grid (Mobile Responsive: 1 col on mobile, 2 on md, 4 on lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Column 1: Brand Info with Logo */}
            <div className="flex flex-col space-y-4">
              <Link href="/" className="flex items-center space-x-3 group w-fit">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/logo1.png"
                    alt="Jahed Curtains Logo"
                    width={44}
                    height={44}
                    className="object-contain h-10 w-auto"
                  />
                </div>
                <div className="text-lg sm:text-xl font-black tracking-wider uppercase flex items-center space-x-1 whitespace-nowrap transition-colors duration-300 group-hover:text-[#9c1b63]">
                  <span className="text-white transition-colors duration-300 group-hover:text-white">JAHED</span>
                  <span className="text-[#9c1b63] transition-colors duration-300 group-hover:text-[#9c1b63]">CURTAINS</span>
                </div>
              </Link>
              
              <p className="text-sm text-gray-400 leading-relaxed">
                Made-to-measure curtains and blinds for homes and offices across the UAE. Free home visit, free measurement, and installation by our own team - with no advance payment.
              </p>
              
              <div className="pt-2 flex flex-col space-y-3">
                {/* Social Icons Row */}
                <div className="flex items-center space-x-3">
                  {/* WhatsApp Icon */}
                  <a
                    href={`https://wa.me/971547839880?text=${BOOKING_WHATSAPP_TEXT}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#25D366] hover:opacity-90 text-white rounded-full flex items-center justify-center transition-opacity"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-lg" />
                  </a>
                  {/* Instagram Icon */}
                  <a
                    href="https://www.instagram.com/jahid_curtains/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#9c1b63] hover:opacity-90  text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-lg" />
                  </a>
                </div>

                {/* Our Location Button */}
                <a
                  href="http://google.com/maps/place/24%C2%B022'32.0%22N+54%C2%B031'47.8%22E/@24.3755417,54.5273705,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.3755417!4d54.5299454?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 mt-[10px] rounded-md border border-white/30 hover:border-white text-white w-fit transition-all duration-300 group"
                >
                  <FiMapPin className="text-white text-base" />
                  <span className="text-sm font-medium tracking-wide">our location</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/products" className="hover:text-[#9c1b63] transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#9c1b63] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-[#9c1b63] transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#9c1b63] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/trade-license" className="hover:text-[#9c1b63] transition-colors">
                    Trade License Info
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#9c1b63] transition-colors">
                    Book a Free Visit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Policies */}
            <div>
              <h3 className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-5">
                Policies
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/info/privacy-policy" className="hover:text-[#9c1b63] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/info/terms-conditions" className="hover:text-[#9c1b63] transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/info/payment-terms" className="hover:text-[#9c1b63] transition-colors">
                    Payment Terms
                  </Link>
                </li>
                <li>
                  <Link href="/info/payment-details" className="hover:text-[#9c1b63] transition-colors">
                    Payment Details
                  </Link>
                </li>
                <li>
                  <Link href="/info/delivery-information" className="hover:text-[#9c1b63] transition-colors">
                    Delivery Information
                  </Link>
                </li>
                <li>
                  <Link href="/info/refund-and-returns-policy" className="hover:text-[#9c1b63] transition-colors">
                    Refund & Returns Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h3 className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase mb-5">
                Contact
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="tel:+971547839880" className="flex items-center space-x-3 hover:text-[#9c1b63] transition-colors">
                    <FiPhoneCall className="text-[#9c1b63] text-lg flex-shrink-0" />
                    <span>+971 54 783 9880</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:zaheedfeni47@gmail.com" className="flex items-center space-x-3 hover:text-[#9c1b63] transition-colors">
                    <FiMail className="text-[#9c1b63] text-lg flex-shrink-0" />
                    <span>zaheedfeni47@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <FiMapPin className="text-[#9c1b63] text-lg flex-shrink-0 mt-0.5" />
                  <span>Mohammed Bin Zayed City, Mohammed Bin Zayed East, &amp; Al Majmoua Al Muttahida Al Qabidha Building, Abu Dhabi, UAE</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Divider & Bottom Copyright Section */}
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
            <p>© {new Date().getFullYear()} Jahed Curtains. All rights reserved.</p>
            <p className="text-gray-400">Curtains &amp; blinds, made to measure in the UAE.</p>
          </div>

        </div>
      </div>

    </footer>
  );
}