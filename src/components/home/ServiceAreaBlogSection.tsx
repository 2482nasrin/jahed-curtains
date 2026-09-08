import React from "react";
import { FiMapPin } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { blogPosts } from "@/data/blogPosts";

export default function ServiceAreaBlogSection() {
  const serviceAreas = ["Dubai", "Sharjah", "Abu Dhabi"];

  return (
    <section className="py-16 sm:py-24 bg-[#fbf9f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Service Areas (Occupies 5 columns on desktop) */}
          <div className="lg:col-span-5 space-y-6 mt-[120px]">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#9c1b63] uppercase">
                SERVICE AREAS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mt-2 tracking-tight">
                Where we work
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Home visits, delivery and installation across the three emirates — usually within a few days of your call.
            </p>

            {/* City Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {serviceAreas.map((city, index) => (
                <div
                  key={index}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full border border-gray-200 bg-white shadow-sm text-gray-800 text-sm font-semibold hover:border-[#9c1b63] transition-colors"
                >
                  <FiMapPin className="w-4 h-4 text-[#9c1b63]" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Blog Cards (Occupies 7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#9c1b63] uppercase">
                FROM THE BLOG
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mt-2 tracking-tight">
                Guides for UAE homes
              </h3>
            </div>

            {/* Blog Cards List */}
            <div className="space-y-3.5">
              {blogPosts.slice(0, 3).map((post) => (
                <div
                  key={post.slug}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="space-y-1 flex-1">
                    <span className="text-[10px] font-bold tracking-wider text-[#9c1b63] uppercase">
                      {post.date}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-gray-900 hover:text-[#9c1b63] transition-colors cursor-pointer leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-1 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#9c1b63] hover:underline"
                    >
                      <span>READ</span>
                      <HiArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}