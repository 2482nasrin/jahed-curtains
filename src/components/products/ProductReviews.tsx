"use client";

import { useState } from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi";

const WHATSAPP_NUMBER = "971551693931";

export default function ProductReviews({ productTitle }: { productTitle: string }) {
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [reviewerEmail, setReviewerEmail] = useState("");

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hi Jahed Curtains, I'd like to leave a review for ${productTitle}.`,
      "",
      `Rating: ${rating}/5`,
      `Name: ${reviewerName}`,
      `Email: ${reviewerEmail}`,
      "",
      reviewText,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-3">
        Reviews
      </h2>
      <p className="text-gray-500 text-sm mb-8">There are no reviews yet.</p>

      <div className="bg-white rounded-2xl shadow-2xl shadow-gray-500/40 border border-gray-100 p-6 sm:p-10">
        <p className="text-gray-700 text-sm sm:text-base mb-2">
          Be the first to review &ldquo;{productTitle}&rdquo;
        </p>
        <p className="text-gray-500 text-xs sm:text-sm mb-8">
          Your email address will not be shared. Required fields are marked{" "}
          <span className="text-[#9c1b63]">*</span>
        </p>

        <form onSubmit={handleSubmitReview} className="space-y-6 max-w-2xl">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Your rating <span className="text-[#9c1b63]">*</span>
            </label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  aria-label={`${value} star${value === 1 ? "" : "s"}`}
                  className="text-3xl text-[#9c1b63]"
                >
                  {value <= rating ? <HiStar /> : <HiOutlineStar />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="reviewText" className="block text-sm font-semibold text-gray-900 mb-1.5">
              Your review <span className="text-[#9c1b63]">*</span>
            </label>
            <textarea
              id="reviewText"
              rows={5}
              required
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-[#9c1b63] focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="reviewerName" className="block text-sm font-semibold text-gray-900 mb-1.5">
                Name <span className="text-[#9c1b63]">*</span>
              </label>
              <input
                id="reviewerName"
                type="text"
                required
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9c1b63] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="reviewerEmail" className="block text-sm font-semibold text-gray-900 mb-1.5">
                Email <span className="text-[#9c1b63]">*</span>
              </label>
              <input
                id="reviewerEmail"
                type="email"
                required
                value={reviewerEmail}
                onChange={(e) => setReviewerEmail(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9c1b63] focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-[#9c1b63] hover:bg-[#7f1651] text-white font-bold px-8 py-3 rounded-full shadow-md transition-colors text-sm"
            >
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Submitting opens WhatsApp with your review pre-filled - just press send.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
