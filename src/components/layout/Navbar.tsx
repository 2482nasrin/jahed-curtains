"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiPhone } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to check active state
  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/logo1.png"
                  alt="Jahed Curtains Logo"
                  width={48}
                  height={48}
                  className="object-contain h-11 w-auto"
                  priority
                />
              </div>
              <div className="text-lg sm:text-xl font-black tracking-wider uppercase flex items-center space-x-1 whitespace-nowrap">
                <span className="text-[#3b1443]">JAHED</span>
                <span className="text-[#9c1b63]">CURTAINS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links (Optimized spacing to prevent breaking) */}
          <nav className="hidden xl:flex items-center space-x-6 text-[14px] font-medium text-gray-700 ml-4">
            <Link 
              href="/" 
              className={`transition ${isActive('/') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`transition whitespace-nowrap ${isActive('/products') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              Products
            </Link>
            <Link 
              href="/projects" 
              className={`transition whitespace-nowrap ${isActive('/projects') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              Our Projects
            </Link>
            <Link 
              href="/about" 
              className={`transition whitespace-nowrap ${isActive('/about') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              About Us
            </Link>
            <Link 
              href="/faqs" 
              className={`transition ${isActive('/faqs') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              FAQs
            </Link>
            <Link 
              href="/blog" 
              className={`transition ${isActive('/blog') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`transition ${isActive('/contact') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Tablet/Smaller Laptop Menu (Compact version to avoid overlapping) */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-4 text-[13px] font-medium text-gray-700 ml-2">
            <Link 
              href="/" 
              className={`transition ${isActive('/') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`transition ${isActive('/products') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              Products
            </Link>
            <Link 
              href="/projects" 
              className={`transition ${isActive('/projects') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className={`transition ${isActive('/about') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              About
            </Link>
            <Link 
              href="/faqs" 
              className={`transition ${isActive('/faqs') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              FAQs
            </Link>
            <Link 
              href="/blog" 
              className={`transition ${isActive('/blog') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`transition ${isActive('/contact') ? 'text-[#8b1e56] font-semibold' : 'hover:text-[#8b1e56]'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Phone & CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-5 flex-shrink-0">
            <a href="tel:+971551693931" className="flex items-center space-x-1.5 text-gray-800 font-semibold hover:text-[#8b1e56] transition text-[13px] xl:text-[15px] whitespace-nowrap">
              <HiPhone className="text-[#8b1e56] text-lg xl:text-xl flex-shrink-0" />
              <span>+971 54 783 9880</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#8b1e56] hover:bg-[#721745] text-white font-semibold px-4 xl:px-5 py-2.5 xl:py-3 rounded-full shadow-md transition text-[13px] xl:text-[14px] whitespace-nowrap"
            >
              BOOK A FREE VISIT
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <div onClick={() => setIsOpen(false)}>
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-[#8b1e56] bg-pink-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#8b1e56]'}`}
            >
              Home
            </Link>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Link 
              href="/products" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/products') ? 'text-[#8b1e56] bg-pink-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#8b1e56]'}`}
            >
              Products
            </Link>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Link 
              href="/projects" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projects') ? 'text-[#8b1e56] bg-pink-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#8b1e56]'}`}
            >
              Our Projects
            </Link>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Link 
              href="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-[#8b1e56] bg-pink-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#8b1e56]'}`}
            >
              About Us
            </Link>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Link 
              href="/faqs" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/faqs') ? 'text-[#8b1e56] bg-pink-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#8b1e56]'}`}
            >
              FAQs
            </Link>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Link 
              href="/blog" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/blog') ? 'text-[#8b1e56] bg-pink-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#8b1e56]'}`}
            >
              Blog
            </Link>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Link 
              href="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-[#8b1e56] bg-pink-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#8b1e56]'}`}
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-3">
            <a href="tel:+971547839880" className="flex items-center justify-center space-x-2 text-gray-800 font-semibold py-2">
              <HiPhone className="text-[#8b1e56] text-xl" />
              <span>+971 54 783 9880</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full bg-[#9c1b63] hover:bg-[#721745] text-white font-semibold py-3 rounded-full shadow-md transition"
            >
              BOOK A FREE VISIT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}