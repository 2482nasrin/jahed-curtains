import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiPhone, FiMail, FiInstagram } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi";

const AREA_WHATSAPP_TEXT = encodeURIComponent("Hello Jahed Curtains! Do you cover my area?");

const complimentaryServices = [
  { image: "/images/work-installation-team.png", label: "Free Home Visit" },
  { image: "/products/Organza-Queer.png", label: "Complimentary Samples Delivery" },
  { image: "/products/roman-blinds-dubai.png", label: "Free Design Advice" },
  { image: "/images/work-installaer.png", label: "Free Window Measuring" },
  { image: "/images/curtain-3.png", label: "Exact Price Estimates" },
];

const stats = [
  { value: "Free", label: "Home visit & swatches" },
  { value: "3", label: "Emirates covered" },
  { value: "12", label: "Month warranty on all work" },
  { value: "100%", label: "Made to measure" },
];

const beliefs = [
  {
    title: "Honest pricing",
    description: "One fixed quote at your home. No hidden extras, no pressure, no advance payment.",
  },
  {
    title: "Materials that last",
    description: "Fabrics and mechanisms selected for UAE heat, sunlight and daily use.",
  },
  {
    title: "Our own installers",
    description: "The person who measures your windows is part of the same team that fits them.",
  },
  {
    title: "Aftercare that answers",
    description: "A message on WhatsApp gets a reply - before and after installation.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#FAF9F6] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
            About Us
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Made-to-measure curtains, made simple
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Jahed Curtains fits homes and offices across the UAE with
            tailored curtains and blinds - measured, made and installed by
            our own team, with no advance payment.
          </p>
        </div>
      </section>

      {/* Two Image Intro Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Overlapping Images */}
            <div className="relative h-[420px] sm:h-[480px]">
              <div className="absolute top-0 left-0 w-[70%] h-[55%] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/products/Linen-Organza-Queer.png"
                  alt="Sheer curtains in a bedroom"
                  fill
                  sizes="(min-width: 1024px) 35vw, 70vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[65%] h-[70%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/curtain-1.png"
                  alt="Curtains fitted in a living room"
                  fill
                  sizes="(min-width: 1024px) 33vw, 65vw"
                  className="object-cover"
                />
              </div>
              <Link
                href="/products"
                className="absolute top-[57%] left-0 text-sm font-bold text-gray-900 hover:text-[#9c1b63] transition-colors underline underline-offset-4"
              >
                View Our Curtains
              </Link>
            </div>

            {/* Right: Text */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-5 leading-snug">
                Jahed Curtains | A Name of Trust &amp; Craft for Window
                Curtains
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Jahed Curtains is not just another curtain shop you walk into
                and buy off the shelf. We are your partner for interior
                dressing, with made-to-measure curtains, drapes and blind
                solutions. From apartments and villas to offices and retail
                spaces, we bring premium fabrics and a fitted-to-the-window
                finish to every project.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-[#9c1b63] hover:bg-[#7f1651] text-white font-bold px-7 py-3 rounded-full shadow-md transition-colors text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Curtain Store Offers Best */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-5">
                What Our Curtain Store Offers Best
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                We work closely with every client — from individual homeowners to hotels and businesses — to help them choose curtains, wallpaper, and decor solutions that fit their space and taste. Products can be tailored to exact measurements, fabrics, colors, and finishes.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Our mission is simple: to make quality curtains and home décor accessible, affordable, and hassle-free for everyone across the UAE.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#9c1b63] hover:bg-[#7f1651] text-white font-bold px-7 py-3 rounded-full shadow-md transition-colors text-sm"
              >
                Learn More
              </Link>
            </div>

            {/* Right: Image */}
            <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/installation-team.png"
                alt="Jahed Curtains installation team fitting curtains"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Complimentary Services */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-4">
              We Offer Complimentary Services For Our Window Curtains &amp;
              Drapes
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We care about the money and interior styling needs of our
              customers, so we offer complimentary services like:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {complimentaryServices.map((service) => (
              <div key={service.label} className="text-center">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-sm mb-4">
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-bold text-gray-900 text-sm leading-snug">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#FAF9F6] py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm px-4 py-8 text-center"
              >
                <p className="text-3xl sm:text-4xl font-black text-[#9c1b63] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe / Where We Work */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* What We Believe */}
          <div>
            <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
              What We Believe
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-8">
              High standards, no shortcuts
            </h2>

            <div className="space-y-6">
              {beliefs.map((belief) => (
                <div key={belief.title} className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#9c1b63] text-xl flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                      {belief.title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Where We Work */}
          <div>
            <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
              Where We Work
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-5">
              Across three emirates
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              We handle apartments, villas, offices and retail spaces in:
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Dubai", "Sharjah", "Abu Dhabi"].map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
                >
                  <FiMapPin className="text-[#9c1b63]" />
                  {city}
                </span>
              ))}
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Not sure if we cover your community?{" "}
              <a
                href={`https://wa.me/971547839880?text=${AREA_WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9c1b63] font-semibold hover:underline"
              >
                Ask us on WhatsApp
              </a>{" "}
              - if we can reach you, we will.
            </p>
          </div>
        </div>
      </section>

      {/* Visit Us / Showrooms & Contact Section (New Design) */}
      <section className="bg-[#FAF9F6] py-16 sm:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
              Visit Us
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-4">
              Our Showrooms & Contact Information
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Drop by our showrooms to explore our exclusive collection of fabrics, curtains, and blinds in person.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Abu Dhabi Showroom Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#9c1b63] font-bold text-base sm:text-lg mb-3">
                  <FiMapPin className="text-xl flex-shrink-0" />
                  <h3>Abu Dhabi Showroom</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  Mohammed Bin Zayed City, Mohammed Bin Zayed East, Al Majmoua Al Muttahida Al Qabidha Building, Abu Dhabi, UAE
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://www.google.com/maps?q=24.37554168701172,54.529945373535156&z=17&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#9c1b63] hover:underline"
                >
                  🗺️ Get Directions (Google Maps)
                </a>
              </div>
            </div>

            {/* Dubai Showroom Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#9c1b63] font-bold text-base sm:text-lg mb-3">
                  <FiMapPin className="text-xl flex-shrink-0" />
                  <h3>Dubai Showroom</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  Dubai Showroom Address (Visit our store or book an appointment via WhatsApp for consultation).
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-gray-500">
                  📍 Dubai, UAE
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm flex flex-wrap items-center justify-around gap-6 text-center lg:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#9c1b63]">
                <FiPhone className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Call Us</p>
                <a href="tel:+971547839880" className="text-sm sm:text-base font-bold text-gray-900 hover:text-[#9c1b63]">
                  +971 54 783 9880
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#9c1b63]">
                <FiMail className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email Us</p>
                <a href="mailto:zaheedfeni47@gmail.com" className="text-sm sm:text-base font-bold text-gray-900 hover:text-[#9c1b63]">
                  zaheedfeni47@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#9c1b63]">
                <FiInstagram className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Instagram</p>
                <a 
                  href="https://www.instagram.com/jahid_curtains" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm sm:text-base font-bold text-gray-900 hover:text-[#9c1b63]"
                >
                  @jahid_curtains
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}