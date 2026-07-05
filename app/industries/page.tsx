import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industri",
  description: "Sektor industri yang dilayani EKP: Oil & Gas, Petrochemical, Power Plant, Renewable Energy, Mining, Infrastructure.",
};

const industries = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    description: "Pengalaman luas dalam proyek Oil & Gas Onshore mulai dari CPF, GPF, gathering station, pipeline, hingga tank farm.",
    scope: ["CPF & GPF", "Gathering Station", "Pipeline System", "Tank Farm", "Production Facility"],
    bg: "from-slate-700 to-slate-900",
  },
  {
    id: "petrochemical",
    title: "Petrochemical",
    description: "Layanan EPC untuk fasilitas petrokimia, refinery, dan plant pengolahan produk turunan minyak & gas.",
    scope: ["Refinery Expansion", "Petrochemical Plant", "Storage & Handling", "Utility System"],
    bg: "from-blue-800 to-blue-950",
  },
  {
    id: "power-plant",
    title: "Power Plant",
    description: "Pembangunan dan pemeliharaan fasilitas pembangkit listrik dari berbagai sumber energi.",
    scope: ["PLTU", "PLTG / PLTMG", "Electrical System", "Balance of Plant"],
    bg: "from-amber-700 to-amber-900",
  },
  {
    id: "renewable",
    title: "Renewable Energy",
    description: "Solusi energi terbarukan untuk mendukung transisi energi dan target net zero Indonesia.",
    scope: ["Solar PV", "Hydro Power", "Biogas", "Wind Energy"],
    bg: "from-green-700 to-green-900",
  },
  {
    id: "mining",
    title: "Mining",
    description: "Infrastruktur fasilitas penunjang operasi pertambangan dari pengolahan hingga utilitas.",
    scope: ["Processing Plant", "Infrastructure", "Utility System", "Port & Jetty"],
    bg: "from-stone-700 to-stone-900",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description: "Pembangunan infrastruktur industri termasuk jalan, dermaga, gedung, dan fasilitas umum.",
    scope: ["Road & Bridge", "Industrial Building", "Water Treatment", "Waste Management"],
    bg: "from-gray-700 to-gray-900",
  },
];

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-ekp-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-4">Industri</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight max-w-3xl">
            Sektor Industri yang Kami Layani
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.id} className="group border border-gray-100 hover:shadow-xl transition-shadow">
                <div className={`h-40 bg-gradient-to-br ${ind.bg} flex items-end p-6`}>
                  <h3 className="text-white font-black text-2xl">{ind.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{ind.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {ind.scope.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-ekp-red rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/industries/${ind.id}`}
                    className="inline-flex items-center gap-1.5 text-ekp-red text-sm font-bold hover:gap-3 transition-all"
                  >
                    Selengkapnya <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
