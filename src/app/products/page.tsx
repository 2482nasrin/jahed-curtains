"use client";

import { Suspense, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { HiPlay } from "react-icons/hi";
import {
  products,
  productCategories,
  productSubcategories,
  ProductCategory,
} from "@/data/products";

const PRODUCTS_PER_PAGE = 18;

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push("...");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push("...");
  pages.push(total);
  return pages;
}

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
  const [currentPage, setCurrentPage] = useState(1);
  const gridTopRef = useRef<HTMLDivElement>(null);

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

  const [expandedCategory, setExpandedCategory] = useState<ProductCategory | null>(
    isProductCategory(categoryParam) ? categoryParam : null
  );

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = (safePage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = filteredProducts.slice(pageStart, pageStart + PRODUCTS_PER_PAGE);

  const goToPage = (page: number) => {
    const next = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(next);
    gridTopRef.current?.scrollIntoView({ block: "start" });
  };

  const selectSubcategory = (sub: string | "all") => {
    setActiveSubcategory(sub);
    setCurrentPage(1);
  };

  const selectCategory = (category: ProductCategory | "all") => {
    setActiveCategory(category);
    setActiveSubcategory("all");
    setCurrentPage(1);
  };

  const toggleMobileCategory = (category: ProductCategory) => {
    selectCategory(category);
    setExpandedCategory((current) => (current === category ? null : category));
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
        <div ref={gridTopRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          {/* Mobile: accordion list */}
          <div className="sm:hidden flex flex-col gap-3 mb-10">
            <button
              type="button"
              onClick={() => {
                selectCategory("all");
                setExpandedCategory(null);
              }}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-bold text-left shadow-sm border transition-colors ${
                activeCategory === "all"
                  ? "bg-[#9c1b63] border-[#9c1b63] text-white"
                  : "bg-white border-gray-100 text-gray-900"
              }`}
            >
              All Products
            </button>
            {productCategories
              .filter((category) => category.key !== "all")
              .map((category) => {
                const key = category.key as ProductCategory;
                const isActive = activeCategory === key;
                const isOpen = expandedCategory === key;
                const subs = productSubcategories[key];
                return (
                  <div
                    key={key}
                    className={`rounded-2xl bg-white shadow-sm border overflow-hidden transition-colors ${
                      isActive ? "border-[#9c1b63]" : "border-gray-100"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleMobileCategory(key)}
                      className={`w-full flex items-center justify-between px-5 py-4 text-sm font-bold text-left ${
                        isActive ? "text-[#9c1b63]" : "text-gray-900"
                      }`}
                    >
                      <span>{category.label}</span>
                      <FaChevronDown
                        className={`text-xs text-gray-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-gray-100 px-3 py-3 flex flex-col gap-1">
                        {[{ key: "all", label: "All " + category.label }, ...subs].map((sub) => {
                          const subActive = isActive && activeSubcategory === sub.key;
                          return (
                            <button
                              key={sub.key}
                              type="button"
                              onClick={() => {
                                selectCategory(key);
                                selectSubcategory(sub.key);
                              }}
                              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                subActive
                                  ? "bg-[#9c1b63] text-white"
                                  : "text-gray-700 hover:bg-[#FAF9F6] hover:text-[#9c1b63]"
                              }`}
                            >
                              {sub.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          {/* Desktop: category tabs */}
          <div className="hidden sm:flex flex-wrap gap-1 w-fit max-w-full bg-[#EFECE6] py-[10px] px-[15px] rounded-full shadow-inner mb-12">
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

          {/* Desktop: subcategory pills */}
          {subcategories.length > 0 && (
            <div className="hidden sm:flex flex-wrap justify-center gap-3 -mt-4 mb-12">
              {[{ key: "all", label: "All" }, ...subcategories].map((sub) => {
                const isActive = activeSubcategory === sub.key;
                return (
                  <button
                    key={sub.key}
                    type="button"
                    onClick={() => selectSubcategory(sub.key)}
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
            {pageProducts.map((product) => (
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

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Product pages"
              className="mt-12 flex flex-col items-center gap-4"
            >
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => goToPage(safePage - 1)}
                  disabled={safePage === 1}
                  aria-label="Previous page"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-[#9c1b63] hover:border-[#9c1b63] hover:text-white transition-colors disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-700 disabled:hover:border-gray-200"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
                {getPageNumbers(safePage, totalPages).map((page, index) =>
                  page === "..." ? (
                    <span
                      key={`ellipsis-${index}`}
                      className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm"
                    >
                      &hellip;
                    </span>
                  ) : (
                    <button
                      key={page}
                      type="button"
                      onClick={() => goToPage(page)}
                      aria-current={page === safePage ? "page" : undefined}
                      className={`w-10 h-10 rounded-full text-sm font-bold border transition-colors ${
                        page === safePage
                          ? "bg-[#9c1b63] border-[#9c1b63] text-white shadow-md"
                          : "bg-white border-gray-200 text-gray-700 hover:bg-[#9c1b63] hover:border-[#9c1b63] hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  type="button"
                  onClick={() => goToPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  aria-label="Next page"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-[#9c1b63] hover:border-[#9c1b63] hover:text-white transition-colors disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-700 disabled:hover:border-gray-200"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Showing {pageStart + 1}&ndash;
                {Math.min(pageStart + PRODUCTS_PER_PAGE, filteredProducts.length)} of{" "}
                {filteredProducts.length} products
              </p>
            </nav>
          )}
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
