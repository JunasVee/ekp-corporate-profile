"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Users, Shield, Calendar, Briefcase, HardHat, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides, heroStats } from "../../_lib/data";

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  shield: Shield,
  calendar: Calendar,
  briefcase: Briefcase,
  "hard-hat": HardHat,
};

// Background gradients for each slide — replace with real hero images:
// public/images/hero-1.jpg → Oil refinery / CPF facility
// public/images/hero-2.jpg → Pipeline construction drone shot
// public/images/hero-3.jpg → Solar / renewable energy plant
const slideBgs = [
  "from-slate-900 via-blue-950 to-slate-800",
  "from-gray-900 via-slate-900 to-blue-950",
  "from-blue-950 via-slate-900 to-gray-900",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 800);
    },
    [animating]
  );

  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slideBgs[current]} transition-all duration-1000`}
      >
        {/*
          TO ADD HERO BACKGROUND IMAGE:
          1. Add your image to public/images/hero-{1,2,3}.jpg
          2. Replace this div with:
             <Image src={`/images/hero-${current + 1}.jpg`} alt="" fill className="object-cover" priority />
        */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20">
        <div className="flex items-center justify-between gap-8">
          {/* Left content */}
          <div className="flex-1 max-w-2xl" key={current}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-ekp-red/60 text-ekp-red text-xs font-bold uppercase tracking-widest px-3 py-1.5 mb-6">
              {slide.badge}
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4">
              {slide.title}
              <br />
              <span className="text-ekp-gold">{slide.titleHighlight}</span>
              <br />
              {slide.titleEnd}
            </h1>

            {/* Sub judul */}
            <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-4">
              Building Energy. <span className="text-ekp-gold">Powering Future.</span>
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              {slide.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/about"
                className="flex items-center gap-2 px-6 py-3.5 bg-ekp-red text-white text-sm font-bold uppercase tracking-wide hover:bg-ekp-red-dark transition-colors"
              >
                Company Profile
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 px-6 py-3.5 bg-white/10 border border-white/30 text-white text-sm font-bold uppercase tracking-wide hover:bg-white/20 hover:border-white transition-colors"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white text-sm font-bold uppercase tracking-wide hover:bg-white/10 hover:border-white transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Slide counter */}
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-sm font-mono tabular-nums">
                {String(current + 1).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-0.5 transition-all duration-500 ${
                      i === current ? "w-12 bg-ekp-red" : "w-6 bg-white/25 hover:bg-white/50"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <span className="text-white/40 text-sm font-mono tabular-nums">
                {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right: floating stats */}
          <div className="hidden lg:flex flex-col gap-2">
            {heroStats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 bg-ekp-navy/85 backdrop-blur-sm border border-white/10 px-5 py-3.5 min-w-[260px]"
                >
                  <div className="w-9 h-9 bg-ekp-red/20 flex items-center justify-center shrink-0">
                    {Icon && <Icon className="w-4 h-4 text-ekp-gold" />}
                  </div>
                  <div>
                    <p className="text-white text-xl font-black leading-none">{stat.value}</p>
                    <p className="text-gray-400 text-[11px] uppercase tracking-wide mt-0.5">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={() => goTo((current - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-ekp-red hover:border-ekp-red transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-ekp-red hover:border-ekp-red transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
