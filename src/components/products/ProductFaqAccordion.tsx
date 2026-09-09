"use client";

import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import type { ProductFaq } from "@/data/products";

export default function ProductFaqAccordion({ faqs }: { faqs: ProductFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
            >
              <span className="font-semibold text-gray-900 text-sm sm:text-base">
                {faq.question}
              </span>
              <HiPlus
                className={`flex-shrink-0 text-gray-500 text-lg transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 -mt-1">
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
