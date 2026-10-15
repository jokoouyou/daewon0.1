"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Zap, ShieldCheck, Thermometer, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "전기소방",
    tag: "ELECTRICAL",
    description:
      "자동화재탐지설비, 비상경보 및 R형 시스템 시공. 화재 초기 감지부터 경보, 제어까지 통합 전기 소방 시스템을 구축합니다.",
    href: "/services#electrical",
    color: "text-safety-red",
    bgColor: "bg-safety-red/5",
  },
  {
    icon: ShieldCheck,
    title: "소방자재 및 충약",
    tag: "MATERIALS",
    description:
      "기자재 도소매, 소화기 약제 재충전, CO2 및 가스계 소화설비 충전 및 유지 보수, 폐소화기 무상수거 서비스.",
    href: "/services#materials",
    color: "text-amber-accent",
    bgColor: "bg-amber-accent/5",
  },
  {
    icon: Thermometer,
    title: "기계소방",
    tag: "MECHANICAL",
    description:
      "옥내외 소화전, 스프링클러, 연결살수설비, 소방 배관 공사 전문. 물리적 화재 진압을 위한 배관 및 기계 설비 시공.",
    href: "/services#mechanical",
    color: "text-blue-500",
    bgColor: "bg-blue-500/5",
  },
];

export default function BusinessSummary() {
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
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-safety-red font-bold text-xs uppercase tracking-[0.2em] mb-3">
            OUR SERVICES
          </span>
          <h2 className="section-title mb-4">핵심 사업 분야</h2>
          <p className="section-subtitle">
            설계부터 시공, 보수, 컨설팅까지 원스톱 소방 통합 솔루션을 제공합니다.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group card-hover ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  transitionDuration: "600ms",
                  transitionProperty: "all",
                  transitionTimingFunction: "ease-out",
                }}
              >
                {/* Top accent bar */}
                <div className="h-1.5 bg-safety-red w-0 group-hover:w-full transition-all duration-500" />

                <div className="p-6 md:p-8">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`h-7 w-7 ${service.color}`} />
                  </div>

                  {/* Tag */}
                  <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-widest text-safety-red mb-2">
                    {service.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-safety-red transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-safety-red font-semibold text-sm group-hover:gap-3 transition-all">
                    자세히 보기 <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}