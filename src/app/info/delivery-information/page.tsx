import React from "react";
import Link from "next/link";
import { FiTruck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Delivery Information",
  description:
    "How Jahed Curtains delivers and installs your curtains and blinds across Dubai, Sharjah and Abu Dhabi, including lead times, scheduling and installation details.",
  path: "/info/delivery-information",
});

const PAGE_WHATSAPP_TEXT = encodeURIComponent(
  "Hello Jahed Curtains! I have a query regarding your Delivery Information."
);

export default function DeliveryInformationPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#fbf9f5] py-12 sm:py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#9c1b63]/20 text-[#9c1b63] mb-4">
            <FiTruck className="text-2xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-3">
            Delivery Information
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Find out more about our shipping, timelines, and delivery services across the UAE at JAHED TRADING L.L.C.
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
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">1. Delivery Availability</h2>
              <p>We have showrooms in <strong className="text-gray-900">Abu Dhabi</strong> and <strong className="text-gray-900">Dubai</strong>, and we deliver across the UAE, including Sharjah, Ajman, and other Emirates. Please confirm delivery availability for your specific area with our team before ordering.</p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">2. Delivery Timeline</h2>
              <ul className="list-disc list-inside space-y-2 pl-2 text-gray-700">
                <li><strong className="text-gray-900">Ready-stock items:</strong> Typically delivered within 24 hours of order confirmation.</li>
                <li><strong className="text-gray-900">Custom-made items</strong> (curtains, sofas, carpets, custom furniture): Delivery timeline depends on production and will be communicated at the time of order confirmation.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">3. Working Hours</h2>
              <p>Our team is available <strong className="text-gray-900">24 hours a day, 7 days a week</strong> for order support, deliveries, and customer service.</p>
            </div>

            {/* Section 4 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">4. Installation/Fitting</h2>
              <p>For curtains, blinds, and certain furniture items, installation/fitting service is scheduled after delivery and completion of the balance payment (see <Link href="/info/payment-terms" className="text-[#9c1b63] font-semibold hover:underline">Payment Terms</Link>).</p>
            </div>

            {/* Section 5 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">5. Delivery Charges</h2>
              <p>Delivery charges (if applicable) depend on the Emirate and location. Our team will confirm any applicable charges at the time of order.</p>
            </div>

            {/* Section 6 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">6. Receiving Your Order</h2>
              <p>Please inspect your order at the time of delivery. Any visible damage or discrepancy should be reported immediately to our team, ideally with photos/video of the unboxing.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}