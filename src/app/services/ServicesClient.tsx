"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, ShieldCheck, Thermometer, CheckCircle } from "lucide-react";

const tabs = [
  {
    id: "electrical",
    label: "전기소방",
    icon: Zap,
    color: "text-safety-red",
    activeBg: "bg-safety-red",
    content: {
      title: "주요 사업 분야: 전기소방",
      description:
        "전기소방은 화재 발생을 감지하고, 경보를 울려 사람들을 대피시키며, 소방 시설이 작동하도록 제어하는 전기 및 신호 제어 시스템 전문입니다.",
      items: [
        {
          title: "자동화재탐지설비",
          image: "/assets/images/1280.jpg",
          description:
            "화재 초기 단계에서 발생하는 열, 연기, 불꽃을 감지기(열감지기, 연기감지기 등)를 통해 자동으로 감지하여 건물 관계인에게 알리고 경보를 발령하는 시스템입니다. 감지기, 수신기, 발신기, 음향장치(경종) 등으로 구성되며 소방 전기 분야의 가장 기초적이면서도 핵심적인 설비입니다.",
        },
        {
          title: "비상경보 및 무선통신보조설비",
          image: "/assets/images/106.jpg",
          description:
            "비상경보설비는 화재 발생 시 비상벨, 자동식 사이렌, 비상방송설비 등을 통해 건물 내 인원들에게 화재 사실을 신속하게 전파하여 피난을 유도합니다. 무선통신보조설비는 지하층이나 터널 등 음영 지역에서 소방대원이 구조 활동 시 무전기가 정상 작동하도록 누설동축케이블과 안테나를 설치하는 통신 지원 설비입니다.",
        },
        {
          title: "R형 시스템 (통합 제어 수신기)",
          image: "/assets/images/335-R-type.jpg",
          description:
            "디지털 다중 통신 방식을 사용하여 선로를 단순화하고, 화재 발생 구역의 정확한 주소(Address)를 모니터에 표시해 주는 대형/초고층 건물 필수 통합 관리 시스템입니다.",
        },
      ],
    },
  },
  {
    id: "materials",
    label: "소방자재/충약",
    icon: ShieldCheck,
    color: "text-amber-accent",
    activeBg: "bg-amber-accent",
    content: {
      title: "주요 사업 분야: 소방자재 및 충약",
      description:
        "소방 활동에 필요한 장비와 소화 약제를 유통, 보관, 관리하고, 소화기에 약제를 충전하는 유통 및 유지 관리 분야입니다.",
      items: [
        {
          title: "소방기자재 도소매",
          image: "/assets/images/dw15.jpg",
          description:
            "소화기, 감지기, 유도등, 완강기, 스프링클러 헤드, 소방 호스, 밸브 등 다양한 자재 공급.",
        },
        {
          title: "소화기(분말, CO2 외) 충약",
          image: "/assets/images/dw14.jpg",
          description:
            "변질되거나 사용한 소화 약제를 수거하여 규정에 맞게 재충전하고 압력 가스를 채워 정밀 검사를 거쳐 복구합니다.",
        },
        {
          title: "CO2, 하론, 가스계 소화설비",
          image: "/assets/images/220-halon.jpg",
          description:
            "전기실, 전산실 등 물을 사용하기 어려운 장소에 설치되는 불활성 기체 및 할로겐화합물 소화 용기의 약제 충전, 배관 연결 및 유지 보수.",
        },
        {
          title: "폐소화기 무상수거",
          image: "/assets/images/457.jpg",
          description:
            "노후 및 사용 후 폐소화기에 대한 무상 수거 서비스 지원.",
        },
      ],
    },
  },
  {
    id: "mechanical",
    label: "기계소방",
    icon: Thermometer,
    color: "text-blue-500",
    activeBg: "bg-blue-500",
    content: {
      title: "주요 사업 분야: 기계소방",
      description:
        "배관을 설치하고 물이나 가스 같은 소화 용수를 직접 공급하여 화재를 물리적으로 진압하는 배관 및 기계 설비 시공 분야입니다.",
      items: [
        {
          title: "옥내외 소화전 공사",
          image: "/assets/images/026.jpg",
          description:
            "옥내소화전: 건물 내부 초기 화재 진압용 호스 및 앵글밸브 시공. 옥외소화전: 건물 외부 소방차 용수 공급 및 대형 진압용 외부 소화수 공급 설비.",
        },
        {
          title: "스프링클러 및 연결살수설비",
          image: "/assets/images/85.jpg",
          description:
            "열 감지 자동 분사 헤드 설치, 알람밸브 세팅, 지하층 송수관 연결살수설비 시공.",
        },
        {
          title: "소방 배관 공사",
          image: "/assets/images/dw16.jpg",
          description:
            "소방 펌프실에서 건물 전체로 연결되는 강관 및 CPVC 용접, 나사 가공, 그루브 조인트 전문 기초 시공.",
        },
      ],
    },
  },
];

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState("electrical");

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
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
              사업 분야
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              설계부터 시공, 보수, 컨설팅까지 원스톱 소방 통합 솔루션
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-[72px] md:top-20 z-40 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.id}
                  href={`#${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 md:px-8 py-4 font-semibold text-sm md:text-base whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.id
                      ? `text-white ${tab.activeBg}`
                      : "text-slate-500 hover:text-navy hover:bg-slate-50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-slate-50">
        {tabs.map((tab) => (
          <section
            key={tab.id}
            id={tab.id}
            className="scroll-mt-36 py-16 md:py-24 even:bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                <span className="inline-block text-safety-red font-bold text-xs uppercase tracking-[0.2em] mb-3">
                  {tab.label}
                </span>
                <h2 className="section-title mb-4">{tab.content.title}</h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                  {tab.content.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {tab.content.items.map((item) => (
                  <article key={item.title} className="card-hover">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-safety-red/10 rounded-lg flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-safety-red" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}