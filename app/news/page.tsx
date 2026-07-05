import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { newsItems } from "../_lib/data";

export const metadata: Metadata = {
  title: "Berita",
  description: "Berita terbaru, press release, dan update proyek PT Energi Konstruksi Prima Nusantara.",
};

const categories = ["Semua", "Project Update", "Achievement", "Company News", "Press Release"];

export default function NewsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-ekp-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-4">Berita</p>
          <h1 className="text-4xl sm:text-5xl font-black">Berita & Update Terbaru</h1>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors ${
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

      <section className="py-16 bg-ekp-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="group bg-white hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-full h-52 relative overflow-hidden ${
                    i === 0
                      ? "bg-gradient-to-br from-slate-700 to-slate-900"
                      : i === 1
                      ? "bg-gradient-to-br from-blue-800 to-blue-950"
                      : "bg-gradient-to-br from-green-800 to-green-950"
                  }`}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-ekp-red text-white">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  <h3 className="text-ekp-navy font-bold text-base leading-snug mb-3 group-hover:text-ekp-red transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{item.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-ekp-red text-xs font-bold uppercase group-hover:gap-2 transition-all">
                    Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
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
