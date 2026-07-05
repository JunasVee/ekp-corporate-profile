import type { Metadata } from "next";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Karier",
  description: "Bergabunglah bersama tim EKP — lowongan kerja dan informasi karier.",
};

const openings = [
  {
    title: "Project Manager — Oil & Gas",
    department: "Project Management",
    location: "Jakarta / Site",
    type: "Full Time",
    level: "Senior",
  },
  {
    title: "Mechanical Engineer",
    department: "Engineering",
    location: "Jakarta",
    type: "Full Time",
    level: "Mid-Senior",
  },
  {
    title: "Civil Supervisor",
    department: "Construction",
    location: "Sumatera (Site)",
    type: "Full Time",
    level: "Mid",
  },
  {
    title: "Electrical & Instrumentation Engineer",
    department: "Engineering",
    location: "Jakarta / Site",
    type: "Full Time",
    level: "Mid-Senior",
  },
  {
    title: "HSE Officer",
    department: "QHSE",
    location: "Site (Riau / Sumatera)",
    type: "Full Time",
    level: "Junior – Mid",
  },
  {
    title: "Procurement Staff",
    department: "Procurement",
    location: "Jakarta",
    type: "Full Time",
    level: "Junior",
  },
];

export default function CareerPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-ekp-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-4">Karier</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight max-w-3xl">
            Bergabunglah dengan Tim EKP
          </h1>
          <p className="text-gray-300 mt-6 max-w-2xl leading-relaxed">
            Kami selalu mencari profesional energi yang berdedikasi, inovatif, dan berintegritas untuk
            bergabung dalam tim yang terus berkembang.
          </p>
        </div>
      </section>

      {/* Life at EKP */}
      <section className="py-16 bg-ekp-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              { value: "500+", label: "Tenaga Kerja" },
              { value: "20+", label: "Tahun Berdiri" },
              { value: "12+", label: "Lokasi Proyek" },
              { value: "100%", label: "Jaminan BPJS" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white p-8">
                <p className="text-ekp-red text-4xl font-black">{value}</p>
                <p className="text-gray-600 text-sm mt-2 font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-red text-xs font-bold uppercase tracking-widest mb-3">Lowongan</p>
          <h2 className="text-3xl font-black text-ekp-navy mb-10">Posisi yang Tersedia</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border border-gray-200 hover:border-ekp-red/30 hover:shadow-lg transition-all group"
              >
                <div>
                  <h3 className="text-ekp-navy font-bold text-base group-hover:text-ekp-red transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="flex items-center gap-1 text-gray-500 text-xs">
                      <Briefcase className="w-3 h-3" /> {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs">
                      <Clock className="w-3 h-3" /> {job.type}
                    </span>
                    <span className="px-2 py-0.5 bg-ekp-light text-ekp-navy text-xs font-semibold">
                      {job.level}
                    </span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-ekp-navy text-white text-sm font-bold shrink-0 hover:bg-ekp-red transition-colors">
                  Lamar Sekarang <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-ekp-light p-8 text-center">
            <p className="text-ekp-navy font-bold text-lg mb-2">Tidak ada posisi yang sesuai?</p>
            <p className="text-gray-600 text-sm mb-6">
              Kirimkan CV Anda dan kami akan menghubungi Anda jika ada peluang yang cocok.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-ekp-red text-white font-bold text-sm uppercase tracking-wide hover:bg-ekp-red-dark transition-colors">
              Kirim CV Spontan <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
