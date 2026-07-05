import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { newsItems } from "../../_lib/data";

const categoryColors: Record<string, string> = {
  "Project Update": "bg-blue-100 text-blue-700",
  Achievement: "bg-green-100 text-green-700",
  "Company News": "bg-orange-100 text-orange-700",
};

export default function NewsSection() {
  return (
    <section className="py-20 bg-ekp-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-ekp-red text-xs font-bold uppercase tracking-widest mb-3">Berita</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ekp-navy">Berita Terbaru</h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-ekp-navy border border-ekp-navy px-5 py-2.5 hover:bg-ekp-navy hover:text-white transition-colors uppercase tracking-wide shrink-0"
          >
            Semua Berita
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="group bg-white hover:shadow-xl transition-shadow"
            >
              {/* Image placeholder */}
              <div
                className={`w-full h-48 relative overflow-hidden ${
                  i === 0
                    ? "bg-gradient-to-br from-slate-700 to-slate-900"
                    : i === 1
                    ? "bg-gradient-to-br from-blue-800 to-blue-950"
                    : "bg-gradient-to-br from-green-800 to-green-950"
                }`}
              >
                {/*
                  TO ADD NEWS IMAGE:
                  Add to public/images/news/{item.id}.jpg
                  Then replace with: <Image src={`/images/news/${item.id}.jpg`} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-3 left-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 ${
                      categoryColors[item.category] ?? "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-ekp-navy font-bold text-base leading-snug mb-3 group-hover:text-ekp-red transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-ekp-red text-xs font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                  Baca Selengkapnya
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
