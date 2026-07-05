"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white p-8 shadow-sm flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-ekp-navy font-black text-xl mb-2">Pesan Terkirim!</p>
          <p className="text-gray-500 text-sm">Tim kami akan menghubungi Anda segera.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="bg-white p-8 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
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
  );
}
