import React from "react";
import Link from "next/link";
import { FiCreditCard } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const PAGE_WHATSAPP_TEXT = encodeURIComponent(
  "Hello Jahed Curtains! I have a query regarding your Payment Terms."
);

export default function PaymentTermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#fbf9f5] py-12 sm:py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#9c1b63]/20 text-[#9c1b63] mb-4">
            <FiCreditCard className="text-2xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-3">
            Payment Terms
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Please review our payment policies and schedule for custom orders and services provided by JAHED TRADING L.L.C.
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
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">1. Advance Payment</h2>
              <p>A <strong className="text-gray-900">50% advance payment</strong> is required at the time of order confirmation. This payment is mandatory for us to begin production/procurement of custom curtains, furniture, carpets, or interior items.</p>
            </div>

            {/* Section 2 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">2. Balance Payment</h2>
              <p>The remaining <strong className="text-gray-900">50% balance</strong> is due <strong className="text-gray-900">before final fitting/installation</strong>, once the product(s) have been delivered.</p>
            </div>

            {/* Section 3 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">3. Currency</h2>
              <p>All payments are accepted in <strong className="text-gray-900">AED (UAE Dirhams)</strong>.</p>
            </div>

            {/* Section 4 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">4. VAT</h2>
              <p>All prices are subject to <strong className="text-gray-900">5% VAT</strong> as per UAE law. Please confirm with our team whether quoted prices are VAT-inclusive or exclusive.</p>
            </div>

            {/* Section 5 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">5. Order Processing</h2>
              <p>Production, sourcing, and scheduling of installation will only begin after the advance payment is received and confirmed.</p>
            </div>

            {/* Section 6 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">6. Custom Orders</h2>
              <p>Since most products are made-to-order based on customer-approved measurements and designs, once production has started, the advance payment is non-refundable (see <Link href="/info/refund-and-returns-policy" className="text-[#9c1b63] font-semibold hover:underline">Refund &amp; Returns Policy</Link>).</p>
            </div>

            {/* Section 7 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">7. Delayed Balance Payment</h2>
              <p>If the balance payment is delayed beyond a reasonable period after delivery, we reserve the right to hold final fitting/installation until payment is completed.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}