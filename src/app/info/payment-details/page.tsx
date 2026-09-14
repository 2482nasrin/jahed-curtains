import React from "react";
import Link from "next/link";
import { FiDollarSign } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Payment Details",
  description:
    "Accepted payment methods at Jahed Curtains: cash, bank transfer and card. No advance payment is required; you pay after your curtains or blinds are installed.",
  path: "/info/payment-details",
});

const PAGE_WHATSAPP_TEXT = encodeURIComponent(
  "Hello Jahed Curtains! I have a query regarding your Payment Details."
);

export default function PaymentDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#fbf9f5] py-12 sm:py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#9c1b63]/20 text-[#9c1b63] mb-4">
            <FiDollarSign className="text-2xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-3">
            Payment Details
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We offer the following payment methods for your convenience at JAHED TRADING L.L.C.
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
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">1. Cash on Delivery</h2>
              <p>Available for select areas within Dubai and other Emirates. Please confirm availability with our sales team before ordering.</p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">2. Bank Transfer</h2>
              <p>Bank transfer is available for eligible orders. Account details will be shared directly by our team via WhatsApp or email upon order confirmation.</p>
              <div className="bg-pink-50/50 border-l-4 border-[#9c1b63] p-4 rounded-r-xl text-gray-700 text-sm italic">
                (Please share the payment receipt/screenshot with our team via WhatsApp or email after transferring, along with your order reference number.)
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">3. Card Payment</h2>
              <p>Debit/Credit card payments accepted [in-store / via payment link — please specify which applies].</p>
            </div>

            {/* Section 4 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">4. Online Payment Link</h2>
              <p>For online orders, a secure payment link may be shared with you via WhatsApp or email upon order confirmation.</p>
            </div>

            {/* Section 5 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">5. Payment Confirmation</h2>
              <p>Please retain your payment receipt/confirmation for reference. Your order will only be processed once payment is confirmed by our team.</p>
            </div>

            {/* Closing note */}
            <p className="text-gray-600 pt-2">
              For any payment-related queries, please contact our support team through our <Link href="/contact" className="text-[#9c1b63] font-semibold hover:underline">Contact page</Link>.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}