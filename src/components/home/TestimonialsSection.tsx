import React from "react";
import { FaStar } from "react-icons/fa";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Siddhant P.",
      time: "24 weeks ago",
      comment: "Professional services, very understanding and provided the right guidance. No additional amount was charged. Measurements and installation was done very quickly without any delays. Thank you Farooq, Hameed, Imad & team.",
    },
    {
      name: "Parvin I.",
      time: "41 weeks ago",
      comment: "The sheer curtains turned out absolutely stunning - light, airy, yet beautifully draped. The fabric quality is excellent, the stitching is neat, and everything looks very elegant. I will definitely order again.",
    },
    {
      name: "Nathan N.",
      time: "49 weeks ago",
      comment: "Honestly amazing work done, my house definitely got an upgrade and looks much more luxurious now. They first come to your place to show samples and make measurements and within 7 days they install the curtains very carefully.",
    },
    {
      name: "K Lo",
      time: "49 weeks ago",
      comment: "They installed motorised curtains for me that turns 90° corner with ease. I like their honesty, transparency, punctuality and friendliness. Highly recommended!",
    },
    {
      name: "dana b.",
      time: "38 weeks ago",
      comment: "Really good curtains, easy to move, and true black out. The whole process, communication and installation went super smooth. Thank you to the whole team!",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#9c1b63] uppercase">
            REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mt-2 tracking-tight">
            Our happy customers
          </h2>
        </div>

        {/* Reviews Grid - Desktop এ ৪টি কলাম এবং Mobile এ ১টি কলাম */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                {/* 5 Star Rating */}
                <div className="flex text-amber-400 space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author & Time */}
              <div className="border-t border-gray-100 pt-4">
                <h3 className="text-sm font-bold text-gray-900">
                  {review.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  {review.time}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}