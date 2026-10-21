"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, Shield, Award } from "lucide-react";

const certifications = [
  { src: "/assets/docs/Doc-registrationcertificate.jpg", alt: "사업자등록증" },
  { src: "/assets/docs/Doc-fireprotection.jpg", alt: "소방시설업등록증" },
  { src: "/assets/docs/Doc-handbookfireprotection.jpg", alt: "소방시설업등록수첩" },
  { src: "/assets/docs/Doc-firesafetytechnician.jpg", alt: "소방기술자보유증명서" },
  { src: "/assets/docs/Doc-listfireprotectiontechnicians.jpg", alt: "소방기술자보유명단" },
  { src: "/assets/docs/Doc-financialcondition.jpg", alt: "경영상태등의확인서" },
];

export default function AboutClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState({ src: "", alt: "" });
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

  const openModal = (src: string, alt: string) => {
    setModalImg({ src, alt });
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

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
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4">
              회사 소개
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              안전을 선도하는 기업 대원소방
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="inline-block text-safety-red font-bold text-xs uppercase tracking-[0.2em] mb-3">
                COMPANY OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                안전을 선도하는 기업{" "}
                <span className="text-safety-red">대원소방</span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-4">
                (소방설비공사 면허업체)
              </p>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  대원소방은 &ldquo;안전을 선도하는 기업&rdquo;이라는 모토 아래, 최첨단 기술력과
                  축적된 노하우를 바탕으로 완벽한 소방 대책을 제시합니다.
                </p>
                <p>
                  화재 예방은 단순한 점검을 넘어 소중한 자산과 인명을 지키는 가장 확실한
                  투자입니다. 당사는 소방 시설 설계부터 시공, 보수, 최신 법령에 맞춘 맞춤형
                  컨설팅까지 통합 솔루션을 제공하여 건물의 가치를 높이고 위험 요소를
                  근본적으로 차단합니다.
                </p>
                <p>
                  철저한 현장 중심의 진단과 정밀한 시공을 통해 고객이 안심하고 생활할 수 있는
                  환경을 만드는 것이 대원소방이 지향하는 궁극적인 가치입니다. 끊임없는 혁신과
                  책임감 있는 자세로 언제나 가장 안전한 내일을 준비하는 든든한 파트너가 될
                  것을 약속드립니다.
                </p>
              </div>
              <p className="mt-6 text-slate-700 font-semibold">
                (주)대원소방 임직원 일동
              </p>
            </div>

            {/* Sidebar Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-safety-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-safety-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">
                      소방설비공사 면허업체
                    </h3>
                    <p className="text-sm text-slate-500">
                      검증된 기술과 기술자 보유
                    </p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  소방설비공사 면허업체로서 최고의 기술과 품질을 자랑합니다.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-amber-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">
                      통합 소방 솔루션
                    </h3>
                    <p className="text-sm text-slate-500">
                      설계부터 시공, 보수, 컨설팅
                    </p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  원스톱 통합 서비스로 고객의 시간과 비용을 절감합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-safety-red font-bold text-xs uppercase tracking-[0.2em] mb-3">
              CERTIFICATIONS
            </span>
            <h2 className="section-title mb-4">인증 현황</h2>
            <p className="section-subtitle">
              검증된 소방 기술자와 면허를 보유하여 높은 신뢰도의 공사를 약속합니다.
            </p>
          </div>

          <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {certifications.map((doc, index) => (
              <button
                key={doc.alt}
                onClick={() => openModal(doc.src, doc.alt)}
                className={`relative aspect-[3/4] bg-white rounded-xl border border-slate-200 overflow-hidden group cursor-pointer ${
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
                  src={doc.src}
                  alt={doc.alt}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-3">
                  <span className="text-white text-xs font-medium">
                    {doc.alt}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
              aria-label="닫기"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={modalImg.src}
              alt={modalImg.alt}
              width={1200}
              height={800}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}