"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  "/assets/images/dw-title12.jpg",
  "/assets/images/Daewon-title.jpg",
  "/assets/images/dw53.jpg",
  "/assets/images/dw77.jpg",
  "/assets/images/dw55.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden bg-navy-dark">
      {/* Background Images Carousel */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />

      {/* Carousel Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all backdrop-blur-sm"
        aria-label="이전 이미지"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all backdrop-blur-sm"
        aria-label="다음 이미지"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current
                ? "bg-safety-red w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`이미지 ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`max-w-3xl transition-all duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="inline-block text-safety-red font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-4 md:mb-6 bg-safety-red/10 backdrop-blur-sm px-4 py-2 rounded-full border border-safety-red/20">
              안전을 선도하는 기업
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-4 md:mb-6">
              <span className="text-safety-red">대원</span>소방
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-8 md:mb-10">
              소방설비공사 면허업체 | 최첨단 기술력과 축적된 노하우의 완벽한 소방 대책
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link href="/contact" className="btn-primary text-center">
                무료 견적 문의하기
              </Link>
              <Link href="/services" className="btn-secondary text-center">
                사업 분야 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}