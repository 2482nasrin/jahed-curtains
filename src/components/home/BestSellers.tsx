"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { products, ProductType } from "@/data/products";

const TABS: { key: "curtains" | "blinds"; types: ProductType[] }[] = [
  { key: "curtains", types: ["curtains", "motorized"] },
  { key: "blinds", types: ["blinds"] },
];

export default function BestSellers() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"curtains" | "blinds">("curtains");
  const [selectedImages, setSelectedImages] = useState<{ [slug: string]: string }>({});

  const handleImageSelect = (e: React.MouseEvent, slug: string, imgPath: string) => {
    e.stopPropagation(); // থাম্বনেইলে ক্লিক করলে যেন পুরো কার্ডের লিংকে রিডাইরেক্ট না হয়ে শুধু ছবি বদলায়
    setSelectedImages((prev) => ({
      ...prev,
      [slug]: imgPath,
    }));
  };

  const activeTypes = TABS.find((tab) => tab.key === activeTab)!.types;
  const currentProducts = products.filter(
    (product) => product.type !== undefined && activeTypes.includes(product.type)
  );

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
            const activeImg = selectedImages[product.slug] || product.images[0];
            const link = `/products/${product.slug}`;

            return (
              <div
                key={product.slug}
                onClick={() => router.push(link)}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col justify-between transition duration-300 hover:shadow-xl cursor-pointer group"
              >
                {/* Image Container with Badge & Thumbnails */}
                <div className="relative h-[360px] sm:h-[400px] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={activeImg}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                          onClick={(e) => handleImageSelect(e, product.slug, img)}
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
                    href={link}
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
