"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navItems } from "../_lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState<"ID" | "EN">("ID");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/98 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start shrink-0">
            {/* Replace with: <Image src="/images/logo-ekp.png" alt="EKP" width={40} height={40} /> */}
            <div className="w-10 h-10 bg-ekp-red flex items-center justify-center rounded-sm mb-1">
              <span className="text-white font-black text-sm tracking-tight leading-none">EKP</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-ekp-navy font-black text-[10px] uppercase tracking-wider leading-tight">
                PT. Energi Konstruksi
              </p>
              <p className="text-ekp-gold font-black text-[10px] uppercase tracking-wider leading-tight">
                Prima Nusantara
              </p>
              <p className="text-[8px] font-semibold uppercase tracking-widest mt-0.5">
                <span className="text-black">Building Energy.</span>{" "}
                <span className="text-ekp-red">Powering Future.</span>
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative flex items-center gap-0.5 px-2 py-2 text-[12px] font-semibold text-ekp-navy hover:text-ekp-red transition-colors"
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.children && <ChevronDown className="w-3 h-3 mt-0.5 shrink-0" />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ekp-red transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-2xl border-t-2 border-ekp-red z-50 py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-[13px] text-gray-700 hover:bg-ekp-red hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <div className="hidden md:flex items-center text-[12px] font-bold gap-1 mr-1">
              <button
                onClick={() => setLang("ID")}
                className={`px-1.5 py-0.5 transition-colors ${lang === "ID" ? "text-ekp-red" : "text-gray-400 hover:text-ekp-navy"}`}
              >
                ID
              </button>
              <span className="text-gray-200">|</span>
              <button
                onClick={() => setLang("EN")}
                className={`px-1.5 py-0.5 transition-colors ${lang === "EN" ? "text-ekp-red" : "text-gray-400 hover:text-ekp-navy"}`}
              >
                EN
              </button>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-ekp-navy text-white text-[12px] font-bold uppercase tracking-wide hover:bg-ekp-red transition-colors"
            >
              Hubungi Kami
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Hamburger */}
            <button
              className="xl:hidden p-2 text-ekp-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-sm font-semibold text-ekp-navy hover:text-ekp-red hover:bg-gray-50 rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3 bg-ekp-navy text-white text-sm font-bold uppercase tracking-wide hover:bg-ekp-red transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Hubungi Kami <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
