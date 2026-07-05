import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "20+ tahun pengalaman di industri EPC Oil & Gas Indonesia",
  "Tenaga ahli bersertifikat nasional & internasional",
  "Track record proyek di Sumatera, Jawa, Kalimantan, dan Sulawesi",
  "Terakreditasi ISO 9001, ISO 14001, dan SMK3",
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            {/*
              TO ADD ABOUT IMAGE:
              Replace this div with:
              <Image
                src="/images/about-ekp.jpg"
                alt="EKP Project Site"
                width={600}
                height={480}
                className="w-full object-cover"
              />
              Recommended: Construction site overview or office building photo
            */}
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/20">
                  <p className="text-xs uppercase tracking-widest">About Image</p>
                  <p className="text-xs">Place: /public/images/about-ekp.jpg</p>
                </div>
              </div>
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-ekp-red text-white p-6 hidden sm:block">
              <p className="text-4xl font-black leading-none">20+</p>
              <p className="text-xs uppercase tracking-widest mt-1 text-white/80">Tahun</p>
              <p className="text-xs uppercase tracking-widest text-white/80">Pengalaman</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:pl-6">
            <p className="text-ekp-red text-xs font-bold uppercase tracking-widest mb-3">
              Tentang EKP
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-ekp-navy leading-tight mb-6">
              Mitra Terpercaya untuk Proyek Energi Indonesia
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT Energi Konstruksi Prima Nusantara (EKP) adalah perusahaan EPC (Engineering, Procurement,
              and Construction) yang berfokus pada sektor energi dan infrastruktur di Indonesia.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Dengan pengalaman lebih dari 20 tahun, EKP telah menyelesaikan lebih dari 50 proyek berskala
              besar untuk klien-klien terkemuka seperti MedcoEnergi, Pertamina, PHE, PLN, dan AKR
              Corporindo di berbagai wilayah Indonesia.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-ekp-red shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-ekp-navy text-white text-sm font-bold uppercase tracking-wide hover:bg-ekp-red transition-colors"
            >
              Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
