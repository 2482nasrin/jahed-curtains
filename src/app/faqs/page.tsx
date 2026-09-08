"use client";

import { useState } from "react";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";

const FAQS = [
  {
    question: "What is the best window curtain solution for blocking sunlight & heat?",
    answer:
      "Blackout curtains with a heat-resistant lining block the most sunlight and heat - especially useful on west- and south-facing windows that get direct UAE sun. We can also fit a sheer-and-blackout combination on one track, so you get soft daylight during the day and full blackout at night.",
  },
  {
    question: "Why are sheer curtains loved in Dubai?",
    answer:
      "Sheer curtains let soft daylight filter into a room while still giving you privacy from neighbours and passers-by, without making the space feel dark or closed off - which suits the UAE's bright climate and floor-to-ceiling windows.",
  },
  {
    question: "What is the right way to measure for curtain length?",
    answer:
      "Measure from the top of your curtain track or rod down to where you want the fabric to end - just above the floor, at the sill, or with a slight break on the floor for a more luxurious look. Our team takes these measurements for you, for free, during the home visit, so you don't need to do it yourself.",
  },
  {
    question: "Can I get motorization for all curtain styles and types?",
    answer:
      "Yes - most of our curtain styles, including wave, pinch pleat and eyelet, can be fitted with a motorized track. Let us know when you book your visit and we'll bring the right samples and quote the motorized option alongside the manual one.",
  },
  {
    question: "Do I need to pay in advance?",
    answer:
      "No advance payment - we measure your windows and give you a fixed quote at your home, then you only pay once your curtains are installed and you're happy with them.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We currently serve Dubai, Sharjah and Abu Dhabi, with home visits, measuring and installation carried out by our own team, usually within a few days of your call.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Once we've measured your windows and you've chosen your fabric, installation typically happens within about a week. Motorized systems can take slightly longer as they're custom-configured to your track.",
  },
  {
    question: "Is there a warranty on the curtains and installation?",
    answer:
      "Yes - every installation comes with a 12-month warranty, and our team is available on WhatsApp for any aftercare questions or adjustments.",
  },
];

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#FAF9F6] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
            Help
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Frequently asked questions
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Everything customers usually ask before booking. Can&apos;t find
            your answer?{" "}
            <a
              href="https://wa.me/971551693931"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9c1b63] font-semibold hover:underline"
            >
              WhatsApp us
            </a>{" "}
            - we reply fast.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base leading-relaxed">
                    <span className="text-[#9c1b63]">{index + 1}.</span>{" "}
                    {faq.question}
                  </span>
                  <HiChevronDown
                    className={`flex-shrink-0 mt-0.5 text-gray-500 text-xl transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 -mt-1">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          <p className="text-center text-sm text-gray-500 pt-6">
            Still have questions?{" "}
            <Link
              href="/contact"
              className="text-[#9c1b63] font-semibold hover:underline"
            >
              Book a free home visit
            </Link>{" "}
            and ask our team directly.
          </p>
        </div>
      </section>
    </main>
  );
}
