"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Calendar, Briefcase, MapPin, ShieldCheck } from "lucide-react";
import { stats } from "../../_lib/data";

const iconComponents: Record<string, React.ElementType> = {
  users: Users,
  calendar: Calendar,
  briefcase: Briefcase,
  "map-pin": MapPin,
  "shield-check": ShieldCheck,
};

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-ekp-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-14">
          <div className="flex-1">
            <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-3">
              Angka Kunci Kami
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Mendukung Proyek Energi
              <br />
              di Seluruh Indonesia
            </h2>
          </div>
          <div className="flex gap-6 lg:gap-10 flex-wrap">
            {/* Icon row */}
            <Users className="w-8 h-8 text-white/20" />
            <Calendar className="w-8 h-8 text-white/20" />
            <Briefcase className="w-8 h-8 text-white/20" />
            <MapPin className="w-8 h-8 text-white/20" />
            <ShieldCheck className="w-8 h-8 text-white/20" />
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
          {stats.map((stat, i) => {
            const Icon = iconComponents[stat.icon] || Users;
            return (
              <div
                key={stat.label}
                className={`bg-ekp-navy px-6 py-8 text-center flex flex-col items-center gap-3 ${
                  visible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Icon className="w-7 h-7 text-ekp-gold" />
                <div>
                  <p className="text-ekp-gold text-4xl font-black leading-none tabular-nums">
                    {stat.value}
                    <span className="text-3xl">{stat.suffix}</span>
                  </p>
                  <p className="text-white text-sm font-semibold mt-2">{stat.label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{stat.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
