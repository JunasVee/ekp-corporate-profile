import Link from "next/link";
import { ArrowRight, Flame, Cog, Wrench, Zap, Building2, Leaf, Factory, Droplets } from "lucide-react";
import { services } from "../../_lib/data";

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

export default function BusinessSectors() {
  return (
    <section className="py-20 bg-ekp-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-ekp-red text-xs font-bold uppercase tracking-widest mb-3">Layanan Kami</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ekp-navy leading-tight">
              Solusi Terintegrasi untuk Industri Energi
            </h2>
          </div>
          <div className="max-w-sm lg:text-right">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Kami menyediakan layanan EPC terintegrasi mulai dari perencanaan, engineering, pengadaan,
              konstruksi, hingga commissioning.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-ekp-navy border border-ekp-navy px-5 py-2.5 hover:bg-ekp-navy hover:text-white transition-colors uppercase tracking-wide"
            >
              Lihat Semua Layanan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 border border-gray-200">
          {services.map((service, i) => {
            const Icon = iconComponents[service.icon] || Cog;
            return (
              <Link
                key={service.id}
                href={service.href}
                className={`sector-card bg-white p-6 lg:p-8 border-gray-200 group ${
                  i % 4 !== 3 ? "border-r" : ""
                } ${i < services.length - 4 ? "border-b" : ""}`}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-ekp-light group-hover:bg-ekp-red/10 transition-colors">
                  <Icon className="w-6 h-6 text-ekp-navy group-hover:text-ekp-red transition-colors" />
                </div>
                <h3 className="text-ekp-navy font-bold text-sm mb-3 group-hover:text-ekp-red transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-1">
                  {service.items.map((item) => (
                    <li key={item} className="text-gray-500 text-xs flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-ekp-red rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
