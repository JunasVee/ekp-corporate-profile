"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function FooterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center justify-center h-40 text-center">
        <div>
          <p className="text-ekp-gold font-bold mb-2">Pesan terkirim!</p>
          <p className="text-gray-400 text-sm">Kami akan segera menghubungi Anda.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="text"
        placeholder="Nama Anda"
        required
        className="bg-white/5 border border-white/10 text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:border-ekp-red transition-colors"
      />
      <input
        type="email"
        placeholder="Email Anda"
        required
        className="bg-white/5 border border-white/10 text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:border-ekp-red transition-colors"
      />
      <textarea
        rows={3}
        placeholder="Pesan Anda"
        className="bg-white/5 border border-white/10 text-white placeholder-gray-500 px-4 py-2.5 text-sm focus:outline-none focus:border-ekp-red transition-colors resize-none"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-ekp-red text-white text-sm font-bold uppercase tracking-wide hover:bg-ekp-red-dark transition-colors"
      >
        Kirim Pesan
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
