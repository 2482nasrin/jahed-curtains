"use client";
import React, { useState } from "react";

export default function RecentWorkSection() {
  const [activeTab, setActiveTab] = useState("Curtains");

  const categories = ["Curtains", "Sofa", "Carpet", "Furniture"];

  // প্রতি ট্যাবের জন্য ৮টি করে ছবি
  const workItems = [
    // Curtains (8 items)
    { id: 1, category: "Curtains", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" },
    { id: 2, category: "Curtains", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" },
    { id: 3, category: "Curtains", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" },
    { id: 4, category: "Curtains", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80" },
    { id: 5, category: "Curtains", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 6, category: "Curtains", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
    { id: 7, category: "Curtains", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80" },
    { id: 8, category: "Curtains", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" },

    // Sofa (8 items)
    { id: 9, category: "Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" },
    { id: 10, category: "Sofa", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80" },
    { id: 11, category: "Sofa", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" },
    { id: 12, category: "Sofa", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" },
    { id: 13, category: "Sofa", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 14, category: "Sofa", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" },
    { id: 15, category: "Sofa", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
    { id: 16, category: "Sofa", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80" },

    // Carpet (8 items)
    { id: 17, category: "Carpet", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 18, category: "Carpet", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
    { id: 19, category: "Carpet", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" },
    { id: 20, category: "Carpet", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" },
    { id: 21, category: "Carpet", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" },
    { id: 22, category: "Carpet", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80" },
    { id: 23, category: "Carpet", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80" },
    { id: 24, category: "Carpet", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" },

    // Furniture (8 items)
    { id: 25, category: "Furniture", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80" },
    { id: 26, category: "Furniture", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" },
    { id: 27, category: "Furniture", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" },
    { id: 28, category: "Furniture", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" },
    { id: 29, category: "Furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" },
    { id: 30, category: "Furniture", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80" },
    { id: 31, category: "Furniture", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 32, category: "Furniture", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
  ];

  const filteredItems = workItems.filter((item) => item.category === activeTab);

  return (
    <section className="py-16 sm:py-24 bg-[#fbf9f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#9c1b63] uppercase">
            RECENT WORK
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mt-2 tracking-tight">
            Fitted by us, across the UAE
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#f0ece1] rounded-full shadow-inner max-w-full overflow-x-auto">
            {categories.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-white text-[#9c1b63] shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Image Grid (4 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group h-72 sm:h-80 rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100 transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}