import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Kapabilitas",
  description: "Kapabilitas EKP dalam Engineering, Procurement, Construction, dan Commissioning.",
};

const capabilities = [
  {
    title: "Engineering",
    description: "Tim insinyur berpengalaman dengan kemampuan desain 3D, P&ID, dan detailed engineering.",
    items: ["Basic & Detail Engineering", "3D Plant Design", "Process Engineering", "Structural Engineering", "E&I Engineering"],
    color: "border-blue-500",
  },
  {
    title: "Procurement",
    description: "Jaringan vendor global dan lokal yang kuat untuk pengadaan material dan peralatan berkualitas.",
    items: ["Material Procurement", "Equipment Sourcing", "Vendor Management", "Logistics & Expediting", "Import/Export Handling"],
    color: "border-green-500",
  },
  {
    title: "Construction",
    description: "Kapabilitas konstruksi lengkap dengan tenaga kerja terampil dan peralatan modern.",
    items: ["Civil & Structural", "Mechanical & Piping", "Electrical & Instrumentation", "Hook-Up & Pre-Commissioning", "Hydro Test & Flushing"],
    color: "border-ekp-red",
  },
  {
    title: "Commissioning",
    description: "Tim commissioning berpengalaman untuk memastikan fasilitas siap beroperasi dengan aman.",
    items: ["Pre-Commissioning", "Commissioning", "Start-Up Assistance", "Performance Testing", "Documentation & Hand-Over"],
    color: "border-ekp-gold",
  },
  {
    title: "Quality Assurance",
    description: "Sistem QA/QC ketat untuk memastikan setiap hasil pekerjaan memenuhi standar tertinggi.",
    items: ["Quality Planning", "Inspection & Testing", "NDT Services", "Documentation Control", "ISO 9001 Compliance"],
    color: "border-purple-500",
  },
  {
    title: "HSE Management",
    description: "Program HSE komprehensif berbasis standar internasional untuk keselamatan semua pihak.",
    items: ["Safety Planning", "Risk Assessment", "Safety Training", "Emergency Response", "Environmental Management"],
    color: "border-orange-500",
  },
];

const equipment = [
  "Crane 50T – 200T",
  "Excavator & Bulldozer",
  "Pipe Bending Machine",
  "Welding Machine (SMAW, GTAW, GMAW)",
  "Sand Blasting Equipment",
  "Hydraulic Torque Wrench",
  "Scaffolding System",
  "Pressure Testing Equipment",
  "NDT Equipment (UT, RT, PT, MT)",
  "Survey & Layout Equipment",
  "Concrete Mixer & Pump",
  "Air Compressor & Generator",
];

export default function CapabilitiesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-ekp-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-4">Kapabilitas</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight max-w-3xl">
            Kemampuan Teknis & Operasional EKP
          </h1>
          <p className="text-gray-300 mt-6 max-w-2xl leading-relaxed">
            Kapabilitas lengkap untuk menangani proyek EPC dari skala kecil hingga mega proyek di
            industri energi Indonesia.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className={`border-t-4 ${cap.color} p-8 bg-ekp-light`}>
                <h3 className="text-ekp-navy font-black text-xl mb-3">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-ekp-red shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ekp-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-3 text-center">
            Peralatan
          </p>
          <h2 className="text-3xl font-black text-white text-center mb-12">
            Equipment & Fasilitas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {equipment.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 hover:border-ekp-gold/30 transition-colors"
              >
                <span className="w-2 h-2 bg-ekp-red rounded-full shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
