"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const clients = [
  { src: "/assets/images/133s.jpg", label: "아파트" },
  { src: "/assets/images/554s.jpg", label: "오피스빌딩" },
  { src: "/assets/images/4443s.jpg", label: "공장" },
  { src: "/assets/images/940s.jpg", label: "병원" },
  { src: "/assets/images/211s.jpg", label: "학교" },
  { src: "/assets/images/1450s.jpg", label: "공공기관" },
  { src: "/assets/images/logistics.png", label: "물류센터" },
  { src: "/assets/images/164s.jpg", label: "전산실" },
];

export default function ClientsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-safety-red font-bold text-xs uppercase tracking-[0.2em] mb-3">
            OUR CLIENTS
          </span>
          <h2 className="section-title mb-4">주요 고객</h2>
          <p className="section-subtitle">
            대원소방의 안전 솔루션과 함께하는 주요 분야입니다.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div
              key={client.label}
              className={`group relative bg-white rounded-xl border border-slate-200 overflow-hidden aspect-[4/3] ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transitionDuration: "500ms",
                transitionProperty: "all",
                transitionTimingFunction: "ease-out",
              }}
            >
              <Image
                src={client.src}
                alt={client.label}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-navy/80 to-transparent">
                <span className="text-white font-bold text-sm md:text-base">
                  {client.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}