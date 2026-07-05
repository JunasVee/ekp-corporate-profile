import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Profil PT Energi Konstruksi Prima Nusantara — visi, misi, nilai perusahaan, dan komitmen HSE.",
};

const coreValues = [
  {
    letter: "E",
    word: "Energy",
    description: "Semangat dan energi penuh dalam setiap pekerjaan untuk menghasilkan yang terbaik.",
  },
  {
    letter: "K",
    word: "Knowledge",
    description: "Pengetahuan teknis mendalam dan pembelajaran berkelanjutan sebagai fondasi keahlian.",
  },
  {
    letter: "P",
    word: "Professionalism",
    description: "Standar profesionalisme tertinggi dalam etika kerja, kualitas, dan pelayanan klien.",
  },
];

const certifications = [
  "ISO 9001:2015 — Quality Management System",
  "ISO 14001:2015 — Environmental Management System",
  "ISO 45001:2018 — Occupational Health & Safety",
  "SMK3 — Sistem Manajemen Keselamatan dan Kesehatan Kerja",
  "Vendor Registration: Pertamina, PHE, Medco, PLN",
  "SKT Konstruksi Migas — Kementerian ESDM",
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-ekp-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-4">About EKP</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight max-w-3xl">
            PT Energi Konstruksi Prima Nusantara
          </h1>
          <p className="text-gray-300 mt-6 max-w-2xl leading-relaxed">
            Perusahaan EPC Indonesia yang berfokus pada industri energi dengan standar internasional.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ekp-red text-xs font-bold uppercase tracking-widest mb-3">
                Company Overview
              </p>
              <h2 className="text-3xl font-black text-ekp-navy mb-6">
                Mitra EPC Terpercaya untuk Industri Energi Indonesia
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                PT Energi Konstruksi Prima Nusantara (EKP) didirikan sebagai perusahaan kontraktor EPC
                yang berspesialisasi dalam proyek Oil & Gas Onshore, infrastruktur energi, dan fasilitas
                industri di Indonesia.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dengan tim lebih dari 150 profesional berpengalaman, EKP telah berhasil menyelesaikan
                lebih dari 50 proyek di berbagai wilayah Indonesia — dari Sumatera, Jawa, Kalimantan,
                hingga Sulawesi — untuk klien-klien bergengsi termasuk MedcoEnergi, Pertamina, PHE, AKR,
                PLN, dan PGN.
              </p>
              <p className="text-gray-600 leading-relaxed">
                EKP berkomitmen untuk memberikan solusi EPC yang terintegrasi, mulai dari tahap
                engineering & design, procurement, construction, hingga commissioning dengan mengutamakan
                standar keselamatan (HSE) dan kualitas kerja kelas dunia.
              </p>
            </div>
            <div className="bg-ekp-light p-8">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center mb-4">
                <p className="text-white/30 text-xs text-center">
                  Company photo / video
                  <br />
                  /public/images/about-ekp.jpg
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-ekp-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 border-t-4 border-ekp-red">
              <h3 className="text-xl font-black text-ekp-navy mb-4">Visi</h3>
              <p className="text-gray-700 leading-relaxed text-lg italic">
                "Menjadi perusahaan EPC terkemuka dan terpercaya di industri energi Indonesia yang
                berkontribusi pada kemandirian energi nasional dengan standar internasional."
              </p>
            </div>
            <div className="bg-ekp-navy p-10 border-t-4 border-ekp-gold">
              <h3 className="text-xl font-black text-white mb-4">Misi</h3>
              <ul className="space-y-3">
                {[
                  "Memberikan layanan EPC berkualitas tinggi dengan mengutamakan keselamatan",
                  "Membangun sumber daya manusia yang kompeten dan profesional",
                  "Menciptakan nilai tambah bagi klien, mitra, dan pemangku kepentingan",
                  "Mendukung program pembangunan infrastruktur energi Indonesia",
                  "Menerapkan praktik bisnis yang bertanggung jawab dan berkelanjutan",
                ].map((mission) => (
                  <li key={mission} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-ekp-gold shrink-0 mt-0.5" />
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-ekp-red text-xs font-bold uppercase tracking-widest mb-3">Core Values</p>
          <h2 className="text-3xl font-black text-ekp-navy mb-14">Nilai Inti Perusahaan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((v) => (
              <div key={v.letter} className="group">
                <div className="w-20 h-20 bg-ekp-red text-white text-4xl font-black flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  {v.letter}
                </div>
                <h3 className="text-ekp-navy font-black text-2xl mb-3">{v.word}</h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-ekp-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-3 text-center">
            Sertifikasi & Akreditasi
          </p>
          <h2 className="text-3xl font-black text-white text-center mb-12">
            Diakui & Tersertifikasi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-start gap-3 bg-white/5 border border-white/10 p-5 hover:border-ekp-gold/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-ekp-gold shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSE Commitment */}
      <section id="hse" className="py-20 bg-ekp-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-6">Komitmen HSE</h2>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            PT Energi Konstruksi Prima Nusantara menempatkan Keselamatan, Kesehatan, dan Lingkungan
            (HSE) sebagai prioritas utama dalam seluruh kegiatan operasional. Kami berkomitmen untuk
            mencapai ZERO ACCIDENT di setiap proyek dan lokasi kerja.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-8 max-w-md mx-auto">
            {["Zero Accident", "Zero Incident", "Zero Harm"].map((item) => (
              <div key={item} className="text-center">
                <p className="text-white text-2xl font-black">0</p>
                <p className="text-white/70 text-xs uppercase tracking-wide mt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
