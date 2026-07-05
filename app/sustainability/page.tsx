import type { Metadata } from "next";
import { ShieldCheck, Leaf, Heart, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "Komitmen EKP terhadap ESG, HSE, CSR, dan lingkungan.",
};

export default function SustainabilityPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-ekp-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-4">Sustainability</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight max-w-3xl">
            Beroperasi Bertanggung Jawab untuk Masa Depan
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                icon: Globe,
                title: "ESG",
                color: "text-blue-600",
                bg: "bg-blue-50",
                content: "EKP berkomitmen menerapkan prinsip Environmental, Social, and Governance (ESG) dalam seluruh aspek operasional dan pengambilan keputusan bisnis.",
              },
              {
                icon: ShieldCheck,
                title: "HSE",
                color: "text-ekp-red",
                bg: "bg-red-50",
                content: "Health, Safety & Environment adalah prioritas utama EKP. Program HSE kami mencakup safety training, risk assessment, dan monitoring lingkungan secara berkala.",
              },
              {
                icon: Heart,
                title: "CSR",
                color: "text-green-600",
                bg: "bg-green-50",
                content: "Program Corporate Social Responsibility EKP fokus pada pemberdayaan masyarakat sekitar proyek, beasiswa pendidikan, dan pengembangan komunitas lokal.",
              },
              {
                icon: Leaf,
                title: "Environmental Commitment",
                color: "text-teal-600",
                bg: "bg-teal-50",
                content: "EKP berkomitmen meminimalkan dampak lingkungan dari setiap kegiatan operasional melalui penerapan teknologi ramah lingkungan dan pengelolaan limbah yang bertanggung jawab.",
              },
            ].map(({ icon: Icon, title, color, bg, content }) => (
              <div key={title} className={`${bg} p-10`}>
                <Icon className={`w-10 h-10 ${color} mb-5`} />
                <h3 className="text-ekp-navy font-black text-2xl mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
