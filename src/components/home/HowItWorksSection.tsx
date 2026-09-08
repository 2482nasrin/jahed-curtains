import React from "react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Professional Consultation",
      description: "Discuss all your requirements with our team of professionals so that they can provide you with premium curtains.",
    },
    {
      number: "02",
      title: "Book your free visit",
      description: "Call, WhatsApp, or use the booking form. We come to your home anywhere in Dubai, Sharjah or Abu Dhabi - at a time that suits you.",
    },
    {
      number: "03",
      title: "Measure & choose fabrics",
      description: "Our specialist measures every window precisely and brings the full swatch collection, so you can match colours in your own light. You get a fixed quote on the spot.",
    },
    {
      number: "04",
      title: "Relax - we install",
      description: "Your curtains are tailored to the millimetre and installed by our own team. You pay only when the work is done, backed by a 12-month warranty.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#9c1b63] uppercase">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mt-2 tracking-tight">
            From first call to fitted windows
          </h2>
        </div>

        {/* Steps Grid (4 Columns on Desktop, 1 Column on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-0 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Step Number */}
                <div className="text-4xl sm:text-5xl font-black text-[#9c1b63] mb-6 tracking-wider">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}