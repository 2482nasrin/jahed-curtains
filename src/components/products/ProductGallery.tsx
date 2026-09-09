"use client";

import { useState } from "react";
import Image from "next/image";
import { HiZoomIn, HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ProductGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  const showPrev = () => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNext = () => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="h-full flex flex-col">
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className="group relative w-full flex-1 min-h-[320px] sm:min-h-[420px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-zoom-in"
      >
        <Image
          src={images[activeIndex]}
          alt={title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority
        />
        <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm text-gray-700 group-hover:bg-white transition-colors">
          <HiZoomIn className="text-lg" />
        </span>
      </button>

      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-3 mt-4">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition ${
                  isActive
                    ? "border-[#9c1b63]"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} thumbnail`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <HiX className="text-2xl" />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <HiChevronLeft className="text-2xl" />
            </button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[activeIndex]}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full sm:max-w-[85vw] object-contain rounded-lg"
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <HiChevronRight className="text-2xl" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
