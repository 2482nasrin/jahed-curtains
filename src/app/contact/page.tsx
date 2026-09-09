"use client";

import { useState } from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "971547839880";
const BOOKING_WHATSAPP_TEXT = encodeURIComponent(
  "Hello Jahed Curtains! I'd like to book a free home visit for curtains or blinds."
);
const PHONE_DISPLAY = "+971 54 783 9880";
const EMAIL = "zaheedfeni47@gmail.com";
const EMIRATES = ["Dubai", "Sharjah", "Abu Dhabi"];
const INTERESTS = [
  "Not sure yet - advise me",
  "Curtains",
  "Blinds",
  "Curtains & Blinds",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    emirate: EMIRATES[0],
    interest: INTERESTS[0],
    preferredTime: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "Hi Jahed Curtains, I'd like to book a free home visit.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Emirate / area: ${form.emirate}`,
      `Interested in: ${form.interest}`,
    ];

    if (form.preferredTime) {
      lines.push(`Preferred day / time: ${form.preferredTime}`);
    }
    if (form.message) {
      lines.push(`Notes: ${form.message}`);
    }

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#FAF9F6] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
            Contact
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Book your free home visit
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Tell us where you are and what you have in mind. We&apos;ll bring the
            swatches, measure your windows and quote on the spot - free, and
            with no obligation.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6">
              Request your visit
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9c1b63] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="05x xxx xxxx"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9c1b63] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="emirate" className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Emirate / area
                  </label>
                  <select
                    id="emirate"
                    name="emirate"
                    value={form.emirate}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#9c1b63] focus:border-transparent"
                  >
                    {EMIRATES.map((emirate) => (
                      <option key={emirate} value={emirate}>
                        {emirate}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#9c1b63] focus:border-transparent"
                  >
                    {INTERESTS.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Preferred day / time (optional)
                </label>
                <input
                  id="preferredTime"
                  name="preferredTime"
                  type="text"
                  placeholder="e.g. Saturday morning"
                  value={form.preferredTime}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9c1b63] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Anything else? (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Number of windows, community name, colours you like..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#9c1b63] focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#9c1b63] hover:bg-[#7f1651] text-white font-bold px-8 py-3.5 rounded-full shadow-md transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                <span>Send via WhatsApp</span>
              </button>

              <p className="text-xs text-gray-500 pt-1">
                Submitting opens WhatsApp with your details pre-filled - just
                press send. Prefer email? Write to{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#9c1b63] hover:underline">
                  {EMAIL}
                </a>
              </p>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6">
              Or reach us directly
            </h2>

            <div className="space-y-4">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="block bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-[#9c1b63] hover:shadow-md transition-all"
              >
                <FiPhoneCall className="text-[#9c1b63] text-2xl mx-auto mb-3" />
                <p className="font-bold text-gray-900 mb-1">Call us</p>
                <p className="text-[#9c1b63] font-semibold">{PHONE_DISPLAY}</p>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-[#9c1b63] hover:shadow-md transition-all"
              >
                <FaWhatsapp className="text-[#25D366] text-2xl mx-auto mb-3" />
                <p className="font-bold text-gray-900 mb-1">WhatsApp</p>
                <p className="text-[#9c1b63] font-semibold">Chat with us now</p>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="block bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-[#9c1b63] hover:shadow-md transition-all"
              >
                <FiMail className="text-[#9c1b63] text-2xl mx-auto mb-3" />
                <p className="font-bold text-gray-900 mb-1">Email</p>
                <p className="text-[#9c1b63] font-semibold">{EMAIL}</p>
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {EMIRATES.map((emirate) => (
                <span
                  key={emirate}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700"
                >
                  <FiMapPin className="text-[#9c1b63]" />
                  {emirate}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
