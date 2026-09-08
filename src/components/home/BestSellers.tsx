"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

// ট্যাব ডাটা (Curtains এবং Blinds - প্রতিটিতে ৬টি করে কার্ড)
const tabsData = {
  curtains: [
    {
      id: 1,
      badge: "CURTAINS & DRAPES",
      title: "Sheer & Blackout Curtains",
      description: "The complete window: airy sheers for daytime, full blackout for night — two layers on one neat track.",
      link: "/products/sheer-blackout",
      images: [
        "/products/sheer-blackout-curtains.png",
        "/products/Office-Curtain.png",
        "/products/Sheer-Curtains.png",
      ],
    },
    {
      id: 2,
      badge: "CURTAINS & DRAPES",
      title: "Sheer Curtains",
      description: "Soft, light-filtering panels that keep your view and your privacy — the UAE living-room essential.",
      link: "/products/sheer-curtains",
      images: [
        "/products/curtains.png",
        "/products/t13.png",
        "/products/t15.png",
      ],
    },
    {
      id: 3,
      badge: "CURTAINS & DRAPES",
      title: "Wave Curtains",
      description: "The heading style from the design magazines — fabric that falls in smooth, even S-folds, in sheer, blackout or both.",
      link: "/products/wave-curtains",
      images: [
        "/products/wave-curtains.png",
        "/products/t14.png",
        "/products/Hotel-Curtains-Near-me.png",
      ],
    },
    {
      id: 4,
      badge: "CURTAINS & DRAPES",
      title: "Pinch Pleat Curtains",
      description: "Classic and elegant design featuring tailored folds at the top for a traditional luxurious look.",
      link: "/products/pinch-pleat-curtains",
      images: [
        "/products/sheer-curtains2.png",
        "/products/Sheer-Gold-Fabric.png",
        "/products/Organza-Malax-Sheer.png",
      ],
    },
    {
      id: 5,
      badge: "CURTAINS & DRAPES",
      title: "Eyelet Ring Curtains",
      description: "Modern metal rings built into the fabric header for smooth sliding and soft, uniform folds.",
      link: "/products/eyelet-curtains",
      images: [
        "/products/Linen-Organza-Queer.png",
        "/products/Organza-Queer.png",
        "/products/Organza-Queer-Linen.png",
      ],
    },
    {
      id: 6,
      badge: "CURTAINS & DRAPES",
      title: "Motorized Drapes",
      description: "Smart automated curtain tracks controllable via remote, smartphone app, or home automation systems.",
      link: "/products/motorized-drapes",
      images: [
        "/products/Pale-Gold-Silk-Window-Curtain.png",
        "/products/Pale-Gold-Silk-Window-Curtains.png",
        "/products/Pale-Gold-Silk-Window-Curtain-FAbric.png",
      ],
    },
  ],
  blinds: [
    {
      id: 7,
      badge: "BLINDS & SHADES",
      title: "Roller Blinds",
      description: "Sleek, minimal, and highly functional light control for modern apartments and offices across Dubai.",
      link: "/products/roller-blinds",
      images: [
        "/images/curtain-2.jpg",
        "/images/curtain-3.jpg",
        "/images/curtain-1.jpg",
      ],
    },
    {
      id: 8,
      badge: "BLINDS & SHADES",
      title: "Zebra Blinds",
      description: "Alternating sheer and solid fabric strips giving you versatile privacy and stylish light filtering.",
      link: "/products/zebra-blinds",
      images: [
        "/images/curtain-1.jpg",
        "/images/curtain-3.jpg",
        "/images/curtain-2.jpg",
      ],
    },
    {
      id: 9,
      badge: "BLINDS & SHADES",
      title: "Wooden Blinds",
      description: "Natural warmth and sophisticated texture crafted from premium wood for timeless interior elegance.",
      link: "/products/wooden-blinds",
      images: [
        "/products/zebra-blinds-dubai.png",
        "/products/Kitchen-Curtains.png",
        "/products/Belroses-Embroidered-Linen-Kitchen-Curtains.png",
      ],
    },
    {
      id: 10,
      badge: "BLINDS & SHADES",
      title: "Roman Blinds",
      description: "Soft fabric folds that stack neatly when raised, bringing a cozy and premium touch to windows.",
      link: "/products/roman-blinds",
      images: [
        "/images/curtain-1.jpg",
        "/images/curtain-2.jpg",
        "/images/curtain-3.jpg",
      ],
    },
    {
      id: 11,
      badge: "BLINDS & SHADES",
      title: "Vertical Blinds",
      description: "Ideal for large sliding glass doors and wide windows, offering effortless light adjustment.",
      link: "/products/vertical-blinds",
      images: [
        "/images/curtain-2.jpg",
        "/images/curtain-1.jpg",
        "/images/curtain-3.jpg",
      ],
    },
    {
      id: 12,
      badge: "BLINDS & SHADES",
      title: "Venetian Aluminium Blinds",
      description: "Durable metallic slats providing precise light tilting and contemporary corporate or home aesthetics.",
      link: "/products/venetian-blinds",
      images: [
        "/images/curtain-3.jpg",
        "/images/curtain-1.jpg",
        "/images/curtain-2.jpg",
      ],
    },
  ],
};

export default function BestSellers() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"curtains" | "blinds">("curtains");

  // প্রতি কার্ডের সিলেক্টেড ইমেজ ট্র্যাক করার স্টেট (১২টি আইডির জন্য)
  const [selectedImages, setSelectedImages] = useState<{ [key: number]: string }>({
    1: "/products/sheer-blackout-curtains.png",
    2: "/products/curtains.png",
    3: "/products/wave-curtains.png",
    4: "/products/sheer-curtains2.png",
    5: "/products/Linen-Organza-Queer.png",
    6: "/products/Pale-Gold-Silk-Window-Curtain.png",
    7: "/products/White-Door-Curtain.png",
    8: "/products/roman-blinds-dubai.png",
    9: "/products/zebra-blinds-dubai.png",
    10: "/products/blinds4.png",
    11: "/products/blinds5.png",
    12: "/products/blinds6.png",
  });

  const handleImageSelect = (e: React.MouseEvent, cardId: number, imgPath: string) => {
    e.stopPropagation(); // থাম্বনেইলে ক্লিক করলে যেন পুরো কার্ডের লিংকে রিডাইরেক্ট না হয়ে শুধু ছবি বদলায়
    setSelectedImages((prev) => ({
      ...prev,
      [cardId]: imgPath,
    }));
  };

  const currentProducts = tabsData[activeTab];

  return (
    <section className="py-16 sm:py-14 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#9C1B63] uppercase mb-2">
            BESTSELLERS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our most-loved curtains & blinds
          </h2>

          {/* Custom Tab Switcher */}
          <div className="inline-flex bg-[#EFECE6] p-1.5 rounded-full shadow-inner">
            <button
              onClick={() => setActiveTab("curtains")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "curtains"
                  ? "bg-white text-[#9C1B63] shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Curtains
            </button>
            <button
              onClick={() => setActiveTab("blinds")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "blinds"
                  ? "bg-white text-[#9C1B63] shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Blinds
            </button>
          </div>
        </div>

        {/* Product Cards Grid (6 Products -> 3 Columns Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {currentProducts.map((product) => {
            const activeImg = selectedImages[product.id] || product.images[0];

            return (
              <div
                key={product.id}
                onClick={() => router.push(product.link)}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col justify-between transition duration-300 hover:shadow-xl cursor-pointer group"
              >
                {/* Image Container with Badge & Thumbnails */}
                <div className="relative h-[360px] sm:h-[400px] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={activeImg}
                    alt={product.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider text-gray-800 shadow-sm">
                    {product.badge}
                  </div>

                  {/* Bottom Thumbnail Switcher Inside Image */}
                  {product.images.length > 1 && (
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/30 backdrop-blur-md p-1.5 rounded-full">
                      {product.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => handleImageSelect(e, product.id, img)}
                          className={`relative w-7 h-7 rounded-full overflow-hidden border-2 transition ${
                            activeImg === img ? "border-[#9C1B63] scale-110" : "border-transparent opacity-70 hover:opacity-100"
                          }`}
                        >
                          <Image src={img} alt="thumb" fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Content & Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#9C1B63] transition">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  {/* View Details Link */}
                  <Link
                    href={product.link}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-[#9C1B63] hover:text-[#731249] transition"
                  >
                    <span>VIEW DETAILS</span>
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom View All Products Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center space-x-2 border-2 border-gray-900 hover:border-[#9C1B63] text-gray-900 hover:text-white hover:bg-[#9C1B63] font-bold px-8 py-3.5 rounded-full transition duration-300 text-sm tracking-wider uppercase"
          >
            <span>VIEW ALL PRODUCTS</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
}