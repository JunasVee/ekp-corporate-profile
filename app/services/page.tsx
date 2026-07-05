import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flame, Cog, Wrench, Zap, Building2, Leaf, Factory, Droplets } from "lucide-react";
import { services } from "../_lib/data";

export const metadata: Metadata = {
  title: "Layanan",
  description: "Layanan EPC terintegrasi EKP — Oil & Gas, Civil, Mechanical, Electrical, Shutdown, Fabrication, Renewable, Water Treatment.",
};

const iconComponents: Record<string, React.ElementType> = {
  flame: Flame,
  cog: Cog,
  wrench: Wrench,
  zap: Zap,
  building2: Building2,
  leaf: Leaf,
  factory: Factory,
  droplets: Droplets,
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-ekp-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-4">Layanan Kami</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight max-w-3xl">
            Solusi EPC Terintegrasi untuk Industri Energi
          </h1>
          <p className="text-gray-300 mt-6 max-w-2xl leading-relaxed">
            Dari perencanaan, engineering, pengadaan, konstruksi, hingga commissioning — EKP adalah mitra
            terpercaya untuk seluruh siklus proyek energi Anda.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconComponents[service.icon] || Cog;
              return (
                <div
                  key={service.id}
                  className="border border-gray-200 p-8 hover:shadow-xl hover:border-ekp-red/20 transition-all group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-ekp-red/10 flex items-center justify-center shrink-0 group-hover:bg-ekp-red group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7 text-ekp-red group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-ekp-navy font-black text-xl mb-3 group-hover:text-ekp-red transition-colors">
                        {service.title}
                      </h3>
                      <ul className="grid grid-cols-2 gap-1.5 mb-5">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-ekp-red rounded-full shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-ekp-red text-sm font-bold hover:gap-3 transition-all"
                      >
                        Detail Layanan <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ekp-red text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Butuh Konsultasi Proyek?</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Tim ahli EKP siap mendiskusikan kebutuhan proyek Anda dan memberikan solusi terbaik.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ekp-red font-black text-sm uppercase tracking-wide hover:bg-ekp-navy hover:text-white transition-colors"
          >
            Hubungi Kami Sekarang
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
