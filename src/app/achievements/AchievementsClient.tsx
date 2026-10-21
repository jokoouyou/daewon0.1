"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Building2, Tag } from "lucide-react";

const projects = [
  {
    title: "한국전기연구원",
    description: "나노소재 화학습식공정 플랫폼 구축 소방공사",
    image: "/assets/images/KERI01.jpg",
    tag: "연구시설 / 신축공사",
  },
  {
    title: "GMB AGtech",
    description: "소방작동점검 지적사항 보수공사",
    image: "/assets/images/GMBAGtech.jpg",
    tag: "공장 / 보수공사",
  },
  {
    title: "경상남도 진주교육지원청",
    description: "진주기계공업고등학교 실습장 및 청소년 직업체험관 증축 소방공사",
    image: "/assets/images/813.jpg",
    tag: "교육시설 / 증축공사",
  },
  {
    title: "남해해성고등학교",
    description: "기숙사 간이스프링클러 설치 소방 공사",
    image: "/assets/images/haesunghighschool01.jpg",
    tag: "교육시설 / 소방설비",
  },
];

export default function AchievementsClient() {
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
    <>
      {/* Hero Banner */}
      <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-safety-red font-bold text-sm uppercase tracking-[0.2em] mb-3">
              ACHIEVEMENTS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4">
              주요 사업 실적
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              대원소방이 완벽하게 수행한 주요 시공 및 보수 실적 프로젝트
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-safety-red text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      <Tag className="h-3 w-3" />
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider mb-2">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>PROJECT</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-safety-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}