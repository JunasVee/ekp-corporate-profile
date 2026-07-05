import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { projects } from "../_lib/data";

export const metadata: Metadata = {
  title: "Proyek",
  description: "Portofolio proyek EPC PT Energi Konstruksi Prima Nusantara di seluruh Indonesia.",
};

const categories = ["Semua", "Oil & Gas", "Civil", "Mechanical", "Electrical", "Fabrication"];

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-ekp-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-4">Proyek Kami</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight">
            Pengalaman Proyek di Seluruh Indonesia
          </h1>
          <p className="text-gray-300 mt-6 max-w-2xl leading-relaxed">
            Lebih dari 50 proyek sukses di berbagai sektor energi dan infrastruktur dari Sumatera hingga
            Sulawesi.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors ${
                  i === 0
                    ? "bg-ekp-red text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-ekp-navy hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 bg-ekp-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-white hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div
                  className={`relative w-full h-48 bg-gradient-to-br ${project.imagePlaceholder} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 text-white text-xs font-black"
                    style={{ backgroundColor: project.year >= 2025 ? "#CC1A27" : "#1e3a5f" }}
                  >
                    {project.year}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-ekp-navy/80 text-white text-[10px] font-bold uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-ekp-navy font-bold text-base leading-tight mb-2 group-hover:text-ekp-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-4">{project.owner}</p>

                  <div className="space-y-2 text-xs border-t border-gray-100 pt-4">
                    <div className="flex gap-2">
                      <span className="text-gray-400 w-28 shrink-0">Lingkup Pekerjaan</span>
                      <span className="text-gray-700 font-medium">{project.scope}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-400 w-28 shrink-0 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Lokasi
                      </span>
                      <span className="text-gray-700 font-medium">{project.location}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-400 w-28 shrink-0">Nilai Kontrak</span>
                      <span className="text-ekp-red font-bold">{project.value}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-ekp-red text-xs font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                    Detail Proyek <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
