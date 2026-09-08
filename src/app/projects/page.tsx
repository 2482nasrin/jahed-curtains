"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const areaCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const project of projects) {
      counts.set(project.area, (counts.get(project.area) ?? 0) + 1);
    }
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, []);

  const filteredProjects = selectedArea
    ? projects.filter((project) => project.area === selectedArea)
    : projects;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#FAF9F6] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
            Our Projects
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Curtain &amp; Blind Projects Across the UAE
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            {projects.length} real installations by our own team across
            Dubai, Sharjah and Abu Dhabi - from waterfront towers to family
            villas. Choose your area and see our work near you.
          </p>
        </div>
      </section>

      {/* Area Filters */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              type="button"
              onClick={() => setSelectedArea(null)}
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center text-center px-2 flex-shrink-0 border transition-colors ${
                selectedArea === null
                  ? "bg-[#9c1b63] border-[#9c1b63] text-white"
                  : "bg-white border-gray-200 text-gray-700 hover:border-[#9c1b63]"
              }`}
            >
              <span className="text-sm font-bold">All</span>
              <span className="text-xs mt-0.5">{projects.length} projects</span>
            </button>

            {areaCounts.map(([area, count]) => {
              const isActive = selectedArea === area;
              return (
                <button
                  key={area}
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center text-center px-2 flex-shrink-0 border transition-colors ${
                    isActive
                      ? "bg-[#9c1b63] border-[#9c1b63] text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-[#9c1b63]"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-bold leading-tight">
                    {area}
                  </span>
                  <span className="text-xs mt-0.5">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Info Banner */}
          <div className="bg-[#FAF9F6] border-l-4 border-[#9c1b63] rounded-lg px-5 py-4 sm:px-6 sm:py-5 mb-10">
            <p className="font-bold text-gray-900 text-sm sm:text-base mb-1">
              {selectedArea ?? "All Projects"} - {filteredProjects.length}{" "}
              installation{filteredProjects.length === 1 ? "" : "s"}
            </p>
            <p className="text-gray-600 text-sm">
              {selectedArea
                ? `Real installations by our own team in ${selectedArea} - here's a look at recent work nearby.`
                : "Real installations by our own team across Dubai, Sharjah and Abu Dhabi - tap a location to see what we've done near you."}
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm group"
              >
                <Image
                  src={project.image}
                  alt={`${project.name}, ${project.area}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-bold text-sm sm:text-base leading-snug">
                    {project.name}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-white/90 mt-0.5">
                    <FiMapPin className="flex-shrink-0" />
                    {project.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
