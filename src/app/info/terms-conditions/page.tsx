import React from "react";
import Link from "next/link";
import { FiFileText } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const PAGE_WHATSAPP_TEXT = encodeURIComponent(
  "Hello Jahed Curtains! I have a query regarding your Terms & Conditions."
);

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Header Banner */}
      <div className="bg-[#fbf9f5] py-12 sm:py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#9c1b63]/20 text-[#9c1b63] mb-4">
            <FiFileText className="text-2xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Welcome to JAHED TRADING L.L.C. – Branch of Abu Dhabi (&quot;Jahed Curtains&quot;, &quot;we&quot;, &quot;us&quot;). Please read these terms carefully before using our services.
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
              By accessing or using our website and placing an order with us, you agree to the following terms and conditions.
            </p>

            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">1. General</h2>
              <p>These terms apply to all visitors, customers, and users of our website and services. We reserve the right to update or modify these terms at any time without prior notice. Continued use of the website after changes are posted constitutes acceptance of the revised terms.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">2. Products &amp; Services</h2>
              <p>We offer ready-made curtains (all kinds), wallpaper, and decor &amp; partition materials for residential, hotel, and commercial clients across the UAE. Product images on the website are for illustration purposes; actual colors, textures, and finishes may vary slightly due to screen display or fabric batch.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">3. Custom Orders</h2>
              <p>Curtains and select items may be made or fitted to order based on measurements and specifications provided or confirmed by the customer. Customers are responsible for verifying measurements, fabric choices, colors, and designs before confirming an order.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">4. Pricing</h2>
              <p>All prices are listed in AED (unless stated otherwise) and are subject to change without prior notice. Prices for custom orders are quoted individually based on design, material, and measurement.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">5. Order Confirmation</h2>
              <p>An order is considered confirmed only after the required advance payment (as per our Payment Terms) has been received.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">6. Intellectual Property</h2>
              <p>All content on this website, including images, designs, logos, and text, is the property of JAHED TRADING L.L.C. (Branch of Abu Dhabi) and may not be copied or reproduced without written permission.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">7. Limitation of Liability</h2>
              <p>We are not liable for delays or damages caused by circumstances beyond our reasonable control, including but not limited to supplier delays, weather conditions, or force majeure events.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">8. Governing Law</h2>
              <p>These terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the jurisdiction of UAE courts.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#0f172a]">9. Contact</h2>
              <p>For any questions regarding these Terms &amp; Conditions, please contact us via the details provided on our <Link href="/contact" className="text-[#9c1b63] font-semibold hover:underline">Contact page</Link>.</p>
            </div>

            

          </div>
        </div>
      </div>

    </div>
  );
}