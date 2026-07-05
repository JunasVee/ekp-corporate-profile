"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, DollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../_lib/data";

export default function ProjectsSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector(".project-card") as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 16 : 300;
    container.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
    setActiveIdx((prev) => {
      if (dir === "right") return Math.min(prev + 1, projects.length - 1);
      return Math.max(prev - 1, 0);
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-ekp-red text-xs font-bold uppercase tracking-widest mb-3">Proyek Kami</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ekp-navy leading-tight">
              Pengalaman Proyek
              <br />
              Oil &amp; Gas Onshore
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-ekp-navy border border-ekp-navy px-5 py-2.5 hover:bg-ekp-navy hover:text-white transition-colors uppercase tracking-wide shrink-0"
          >
            Lihat Semua Proyek
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="project-card snap-start shrink-0 w-[280px] sm:w-[300px] bg-white border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                {/* Image placeholder */}
                <div className={`relative w-full h-44 bg-gradient-to-br ${project.imagePlaceholder} overflow-hidden`}>
                  {/*
                    TO ADD PROJECT IMAGE:
                    Add to public/images/projects/{project.id}.jpg
                    Then replace with: <Image src={`/images/projects/${project.id}.jpg`} alt={project.title} fill className="object-cover" />
                  */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 text-white text-xs font-black"
                    style={{ backgroundColor: project.year >= 2025 ? "#CC1A27" : "#1e3a5f" }}
                  >
                    {project.year}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-ekp-navy font-bold text-sm leading-tight mb-3 group-hover:text-ekp-red transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-3.5 h-3.5 text-ekp-red shrink-0" />
                    <span className="text-gray-500 text-xs">{project.industry}</span>
                  </div>

                  <div className="border-t border-gray-100 pt-3 mt-3 space-y-2">
                    <div className="flex gap-2 text-xs">
                      <span className="text-gray-400 w-24 shrink-0">Lingkup Pekerjaan</span>
                      <span className="text-gray-700 font-medium line-clamp-2">{project.scope}</span>
                    </div>
                    <div className="flex gap-2 text-xs">
                      <span className="text-gray-400 w-24 shrink-0 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Lokasi
                      </span>
                      <span className="text-gray-700 font-medium">{project.location}</span>
                    </div>
                    <div className="flex gap-2 text-xs">
                      <span className="text-gray-400 w-24 shrink-0 flex items-center gap-1">
                        <DollarSign className="w-3 h-3" /> Nilai Kontrak
                      </span>
                      <span className="text-ekp-red font-bold">{project.value}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => scrollTo("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-ekp-red hover:text-white hover:border-ekp-red transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTo("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-ekp-red hover:text-white hover:border-ekp-red transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIdx ? "w-6 bg-ekp-red" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
