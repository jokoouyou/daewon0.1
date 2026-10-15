import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function EmergencyCallout() {
  return (
    <section className="py-12 md:py-16 bg-safety-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/15 rounded-2xl flex items-center justify-center animate-pulse flex-shrink-0">
              <Phone className="h-7 w-7 md:h-8 md:w-8 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl md:text-2xl">
                24시간 긴급 출동 서비스
              </h3>
              <p className="text-white/80 text-sm md:text-base mt-1">
                화재 · 소방 설비 고장 등 긴급 상황 발생 시 즉시 대응합니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 flex-shrink-0">
            <a
              href="tel:0512665106"
              className="inline-flex items-center gap-2 bg-white text-safety-red font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-white/90 transition-all text-sm md:text-base shadow-lg"
            >
              <Phone className="h-5 w-5" />
              (051) 266-5106
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-white hover:text-safety-red transition-all text-sm md:text-base"
            >
              온라인 문의 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}