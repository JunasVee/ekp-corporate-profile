import { ShieldCheck, Award, Star, Lightbulb, Handshake, GraduationCap } from "lucide-react";
import { whyItems } from "../../_lib/data";

const iconComponents: Record<string, React.ElementType> = {
  "shield-check": ShieldCheck,
  award: Award,
  star: Star,
  lightbulb: Lightbulb,
  handshake: Handshake,
  "graduation-cap": GraduationCap,
};

export default function WhyEKPSection() {
  return (
    <section className="py-20 bg-ekp-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-ekp-red text-xs font-bold uppercase tracking-widest mb-3">Mengapa EKP</p>
          <h2 className="text-3xl sm:text-4xl font-black text-ekp-navy leading-tight">
            Komitmen Kami untuk Keunggulan
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Enam pilar utama yang menjadi fondasi setiap pekerjaan dan hubungan bisnis PT Energi
            Konstruksi Prima Nusantara.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {whyItems.map((item) => {
            const Icon = iconComponents[item.icon] || ShieldCheck;
            return (
              <div
                key={item.title}
                className="bg-white p-8 group hover:bg-ekp-navy transition-colors duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-ekp-red/10 group-hover:bg-ekp-red/20 mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-ekp-red" />
                </div>
                <h3 className="text-ekp-navy group-hover:text-white font-bold text-lg mb-3 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
