import type { Metadata } from "next";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";
import { contactInfo } from "../_lib/data";
import ContactForm from "../_components/ContactForm";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi PT Energi Konstruksi Prima Nusantara untuk informasi layanan dan proyek.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-ekp-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-ekp-gold text-xs font-bold uppercase tracking-widest mb-4">Kontak</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight">
            Hubungi Kami
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl leading-relaxed">
            Tim kami siap menjawab pertanyaan Anda dan mendiskusikan kebutuhan proyek.
          </p>
        </div>
      </section>

      <section className="py-20 bg-ekp-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-black text-ekp-navy mb-8">Informasi Kontak</h2>
              <ul className="space-y-6 mb-10">
                {[
                  { icon: MapPin, label: "Alamat Kantor", value: contactInfo.address },
                  { icon: Phone, label: "Telepon", value: contactInfo.phone },
                  { icon: Mail, label: "Email", value: contactInfo.email },
                  { icon: Globe, label: "Website", value: contactInfo.website },
                  { icon: Clock, label: "Jam Operasional", value: "Senin – Jumat, 08.00 – 17.00 WIB" },
                ].map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex gap-4">
                    <div className="w-10 h-10 bg-ekp-red flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{label}</p>
                      <p className="text-ekp-navy font-semibold text-sm">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Map placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Google Maps</p>
                  <p className="text-xs text-gray-500 mt-1">Embed Google Maps di sini</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-black text-ekp-navy mb-8">Kirim Pesan</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
