import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Users, DollarSign, CheckCircle2 } from "lucide-react";
import { projects } from "../../_lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata(props: PageProps<"/projects/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const project = projects.find((p) => p.id === id);
  return {
    title: project?.title ?? "Project",
  };
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[id]">) {
  const { id } = await props.params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className={`relative py-28 bg-gradient-to-br ${project.imagePlaceholder}`}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Proyek
          </Link>
          <div
            className="inline-block px-2.5 py-1 text-white text-xs font-black mb-4"
            style={{ backgroundColor: "#CC1A27" }}
          >
            {project.year}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight max-w-3xl">
            {project.title}
          </h1>
          <p className="text-gray-300 mt-3">{project.owner}</p>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info card */}
            <div className="lg:col-span-1">
              <div className="bg-ekp-light p-8 sticky top-24">
                <h3 className="text-ekp-navy font-black text-lg mb-6 pb-4 border-b border-gray-200">
                  Informasi Proyek
                </h3>
                <dl className="space-y-5">
                  {[
                    { icon: Users, label: "Owner", value: project.owner },
                    { icon: MapPin, label: "Lokasi", value: project.location },
                    { icon: Calendar, label: "Tahun", value: String(project.year) },
                    { icon: DollarSign, label: "Nilai Kontrak", value: project.value },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-3">
                      <Icon className="w-5 h-5 text-ekp-red shrink-0 mt-0.5" />
                      <div>
                        <dt className="text-gray-400 text-xs uppercase tracking-wide">{label}</dt>
                        <dd className="text-ekp-navy font-bold text-sm mt-0.5">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-ekp-red text-xs font-bold uppercase tracking-widest mb-2">
                Lingkup Pekerjaan
              </p>
              <h2 className="text-2xl font-black text-ekp-navy mb-4">Scope of Work</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{project.scope}</p>

              <h2 className="text-2xl font-black text-ekp-navy mb-4">Pencapaian</h2>
              <ul className="space-y-3">
                {[
                  "Proyek selesai tepat waktu sesuai jadwal kontrak",
                  "Zero Lost Time Injury selama pelaksanaan proyek",
                  "Kualitas pekerjaan sesuai spesifikasi teknis dan standar klien",
                  "Koordinasi multidisiplin yang efektif antara tim Engineering, Procurement, dan Construction",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-ekp-red shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-ekp-navy text-white">
                <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-2">
                  Gallery
                </p>
                <p className="text-gray-400 text-sm">
                  Tambahkan foto proyek ke{" "}
                  <code className="text-ekp-gold text-xs">
                    public/images/projects/{project.id}/
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
