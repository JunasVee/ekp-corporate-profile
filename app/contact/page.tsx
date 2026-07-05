import type { Metadata } from "next";
import { MapPin, Phone, Mail, Globe, Clock, Send } from "lucide-react";
import { contactInfo } from "../_lib/data";

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
              <form className="bg-white p-8 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-600 block mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-ekp-red transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-600 block mb-2">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-ekp-red transition-colors"
                      placeholder="PT Example"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-600 block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-ekp-red transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-600 block mb-2">
                      Telepon
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-ekp-red transition-colors"
                      placeholder="+62 21 xxxx xxxx"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="text-xs font-bold uppercase tracking-wide text-gray-600 block mb-2">
                    Subjek *
                  </label>
                  <select className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-ekp-red transition-colors bg-white">
                    <option value="">Pilih Subjek</option>
                    <option>Permintaan Penawaran (RFQ)</option>
                    <option>Informasi Layanan</option>
                    <option>Vendor Registration</option>
                    <option>Karir & Rekrutmen</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="text-xs font-bold uppercase tracking-wide text-gray-600 block mb-2">
                    Pesan *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-ekp-red transition-colors resize-none"
                    placeholder="Tuliskan pesan atau kebutuhan proyek Anda..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-ekp-red text-white font-black text-sm uppercase tracking-wide hover:bg-ekp-red-dark transition-colors"
                >
                  Kirim Pesan
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
