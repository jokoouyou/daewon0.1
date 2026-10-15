"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";

export default function EmergencyBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-safety-red text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 md:h-11">
          <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
            <Phone className="h-4 w-4 animate-pulse flex-shrink-0" />
            <span className="font-bold hidden sm:inline">24시간 긴급 출동:</span>
            <a
              href="tel:0512665106"
              className="font-bold hover:text-white/80 transition-colors"
            >
              (051) 266-5106
            </a>
            <span className="hidden md:inline text-white/70">|</span>
            <span className="hidden md:inline text-white/70">
              긴급 화재 · 소방 설비 고장 즉시 대응
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider hover:text-white/80 transition-colors"
            >
              무료 견적 문의
            </a>
            <button
              onClick={() => setVisible(false)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="닫기"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}