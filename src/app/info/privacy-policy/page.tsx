import React from "react";
import Link from "next/link";
import { FiShield } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Jahed Curtains collects, uses and protects your personal information when you request a quote, book a home visit or contact us through our website.",
  path: "/info/privacy-policy",
});

const PAGE_WHATSAPP_TEXT = encodeURIComponent(
  "Hello Jahed Curtains! I have a query regarding your Privacy Policy."
);

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#fbf9f5] py-12 sm:py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#9c1b63]/20 text-[#9c1b63] mb-4">
            <FiShield className="text-2xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            JAHED TRADING L.L.C. (Branch of Abu Dhabi) respects your privacy and is committed to protecting your personal information.
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Card Top Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-[#3b1443] to-[#9c1b63]" />

          <div className="p-6 sm:p-10 space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
            
            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">1. Information We Collect</h2>
              <p className="text-gray-600">We may collect the following information when you use our website or place an order:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
                <li>Name, phone number, email address</li>
                <li>Delivery address (Emirate and area)</li>
                <li>Order and payment details</li>
                <li>Measurements and design preferences for custom orders</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">2. How We Use Your Information</h2>
              <p className="text-gray-600">Your information is used to:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
                <li>Process and deliver your orders</li>
                <li>Communicate order updates via phone, WhatsApp, or email</li>
                <li>Improve our products and services</li>
                <li>Send offers or promotions (only if you opt in)</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">3. Information Sharing</h2>
              <p>We do not sell or rent your personal information to third parties. Information may only be shared with delivery/installation partners where necessary to fulfill your order.</p>
            </div>

            {/* Section 4 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">4. Data Security</h2>
              <p>We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure.</p>
            </div>

            {/* Section 5 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">5. Cookies</h2>
              <p>Our website may use cookies to improve browsing experience. You may disable cookies through your browser settings, though some website features may not function properly as a result.</p>
            </div>

            {/* Section 6 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">6. Your Rights</h2>
              <p>You may request to view, update, or delete your personal information held by us at any time by contacting us directly through our <Link href="/contact" className="text-[#9c1b63] font-semibold hover:underline">Contact page</Link>.</p>
            </div>

            {/* Section 7 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">7. Changes to This Policy</h2>
              <p>This Privacy Policy may be updated periodically. Continued use of our website indicates acceptance of the current version.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}