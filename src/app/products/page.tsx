"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { HiPlay } from "react-icons/hi";
import {
  products,
  productCategories,
  productSubcategories,
  ProductCategory,
} from "@/data/products";

function isProductCategory(value: string | null): value is ProductCategory {
  return productCategories.some((category) => category.key === value);
}

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">(
    isProductCategory(categoryParam) ? categoryParam : "all"
  );

  const [activeSubcategory, setActiveSubcategory] = useState<string | "all">("all");

  const subcategories =
    activeCategory === "all" ? [] : productSubcategories[activeCategory];

  const filteredProducts = products.filter((product) => {
    if (activeCategory !== "all" && product.category !== activeCategory) {
      return false;
    }
    if (activeSubcategory !== "all" && product.subcategory !== activeSubcategory) {
      return false;
    }
    return true;
  });

  const selectCategory = (category: ProductCategory | "all") => {
    setActiveCategory(category);
    setActiveSubcategory("all");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#FAF9F6] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
            Our Products
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Curtains, Blinds &amp; Motorized Curtains
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Everything below is made to measure for your windows and
            installed by our own team across Dubai, Sharjah and Abu Dhabi.
            Book a free visit and we&apos;ll bring the fabric swatches to
            you.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 w-fit max-w-full bg-[#EFECE6] py-[10px] px-[15px] rounded-full shadow-inner mb-12">
            {productCategories.map((category) => {
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => selectCategory(category.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#9c1b63] shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Subcategory Pills */}
          {subcategories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 -mt-4 mb-12">
              {[{ key: "all", label: "All" }, ...subcategories].map((sub) => {
                const isActive = activeSubcategory === sub.key;
                return (
                  <button
                    key={sub.key}
                    type="button"
                    onClick={() => setActiveSubcategory(sub.key)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap border transition-all duration-300 ${
                      isActive
                        ? "bg-[#9c1b63] border-[#9c1b63] text-white shadow-md"
                        : "bg-white border-gray-200 text-gray-700 hover:bg-[#9c1b63] hover:border-[#9c1b63] hover:text-white hover:shadow-md"
                    }`}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Grid */}
          {filteredProducts.length === 0 && (
            <div className="rounded-3xl border border-dashed border-gray-200 bg-[#FAF9F6] px-6 py-16 text-center">
              <p className="text-lg font-bold text-gray-900 mb-2">
                Products coming soon
              </p>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                We&apos;re adding items to this category. Contact us and
                we&apos;ll help you with a custom solution in the meantime.
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 sm:h-72 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider text-gray-800 shadow-sm">
                    {product.badge}
                  </div>
                  {product.type === "motorized" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <HiPlay className="text-[#9c1b63] text-2xl translate-x-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#9c1b63] transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#9c1b63] group-hover:text-[#731249] transition-colors">
                    VIEW DETAILS
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsPageContent />
    </Suspense>
  );
}
