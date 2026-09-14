"use client";
import React, { useState } from "react";

export default function RecentWorkSection() {
  const [activeTab, setActiveTab] = useState("Curtains");

  const categories = ["Curtains", "Sofa", "Carpet", "Furniture"];

  // প্রতি ট্যাবের জন্য ৮টি করে ছবি
  const workItems = [
    // Curtains (8 items)
    { id: 1, category: "Curtains", image: "curtains/t12.png" },
    { id: 2, category: "Curtains", image: "curtains/t13.png" },
    { id: 3, category: "Curtains", image: "curtains/t01.png" },
    { id: 4, category: "Curtains", image: "curtains/t16.png" },
    { id: 5, category: "Curtains", image: "curtains/t19.png" },
    { id: 6, category: "Curtains", image: "curtains/t02.png" },
    { id: 7, category: "Curtains", image: "curtains/t15.png" },
    { id: 8, category: "Curtains", image: "curtains/t3.png" },

    // Sofa (8 items)
    { id: 9, category: "Sofa", image:  "sofa/sofa-1.png" },
    { id: 10, category: "Sofa", image: "sofa/sofa-2.png" },
    { id: 11, category: "Sofa", image: "sofa/sofa-3.png" },
    { id: 12, category: "Sofa", image: "sofa/sofa-4.png" },
    { id: 13, category: "Sofa", image: "sofa/sofa-5.png" },
    { id: 14, category: "Sofa", image: "sofa/sofa-6.png" },
    { id: 15, category: "Sofa", image: "sofa/sofa-7.png" },
    { id: 16, category: "Sofa", image: "sofa/sofa-8.png" },

    // Carpet (8 items)
    { id: 17, category: "Carpet", image: "carpet/carpet-1.png" },
    { id: 18, category: "Carpet", image: "carpet/carpet-2.png" },
    { id: 19, category: "Carpet", image: "carpet/carpet-3.png" },
    { id: 20, category: "Carpet", image: "carpet/carpet-4.png" },
    { id: 21, category: "Carpet", image: "carpet/carpet-5.png" },
    { id: 22, category: "Carpet", image: "carpet/carpet-6.png" },
    { id: 23, category: "Carpet", image: "carpet/carpet-7.png" },
    { id: 24, category: "Carpet", image: "carpet/carpet-8.png" },

    // Furniture (8 items)
    { id: 25, category: "Furniture", image: "furniture/furniture-5.jpeg" },
    { id: 26, category: "Furniture", image: "furniture/furniture-2.jpeg" },
    { id: 27, category: "Furniture", image: "furniture/furniture-3.jpeg" },
    { id: 28, category: "Furniture", image: "furniture/furniture-7.jpeg" },
    { id: 29, category: "Furniture", image: "furniture/furniture-1.jpeg" },
    { id: 30, category: "Furniture", image: "furniture/furniture-8.jpeg" },
    { id: 31, category: "Furniture", image: "furniture/furniture-6.png"  },
    { id: 32, category: "Furniture", image: "furniture/furniture-4.jpeg" },
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