import React from "react";
import Link from "next/link";
import { FiRotateCcw } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Refund & Returns Policy",
  description:
    "Our refund and returns policy for made-to-measure curtains and blinds, covering defects, installation issues and how to raise a claim with Jahed Curtains.",
  path: "/info/refund-and-returns-policy",
});

const PAGE_WHATSAPP_TEXT = encodeURIComponent(
  "Hello Jahed Curtains! I have a query regarding your Refund & Returns Policy."
);

export default function RefundReturnsPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#fbf9f5] py-12 sm:py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#9c1b63]/20 text-[#9c1b63] mb-4">
            <FiRotateCcw className="text-2xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-3">
            Refund &amp; Returns Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            At JAHED TRADING L.L.C. (Branch of Abu Dhabi), the majority of our products are made-to-order. Please review our policy below.
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Card Top Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-[#3b1443] to-[#9c1b63]" />

          <div className="p-6 sm:p-10 space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
            
            <p className="border-b border-gray-100 pb-6 text-gray-600">
              At JAHED TRADING L.L.C. (Branch of Abu Dhabi), the majority of our products — including curtains, blinds, sofas, carpets, and custom interior items — are <strong className="text-gray-900">made-to-order</strong> based on measurements, fabrics, and designs confirmed by the customer. Because of this, the following policy applies:
            </p>

            {/* Section 1 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">1. No Standard Returns or Refunds</h2>
              <p>As our products are custom-made to each customer's specifications, we are unable to accept returns, exchanges, or refunds once production has started or an order has been confirmed with advance payment.</p>
            </div>

            {/* Section 2 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">2. Before You Order</h2>
              <p>We strongly encourage customers to carefully verify measurements, fabric selection, color, and design before confirming an order, as these details cannot be changed once production begins.</p>
            </div>

            {/* Section 3 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">3. Manufacturing Defects</h2>
              <p>If a product arrives with a genuine manufacturing defect (e.g., incorrect measurement due to our error, damaged fabric, or incorrect color/design not matching the confirmed order), please contact us within [X] days of delivery. We will assess the issue and, where valid, offer a <strong className="text-gray-900">repair or replacement</strong> at no additional cost.</p>
            </div>

            {/* Section 4 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">4. Damaged in Transit</h2>
              <p>If your order arrives damaged due to delivery/transit, please report it immediately (within 24 hours) with photos or a video of the unboxing. Claims reported after this period may not be eligible for review.</p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">5. Non-Returnable Items</h2>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
                <li>Custom curtains, blinds, and furniture made to specific measurements</li>
                <li>Custom carpets/rugs made to order</li>
                <li>Any item installed/fitted at the customer's premises</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">6. How to Raise a Concern</h2>
              <p>To report an issue, please contact our customer support team through our <Link href="/contact" className="text-[#9c1b63] font-semibold hover:underline">Contact page</Link> with your order reference number, description of the issue, and supporting photos/videos.</p>
            </div>

            <p className="text-gray-600 italic pt-2 border-t border-gray-100">
              This policy exists to ensure fairness for both our customers and our production process, given the fully customized nature of our products.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}