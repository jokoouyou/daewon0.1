import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-400 border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-safety-red rounded-lg flex items-center justify-center font-black text-white text-lg">
                DW
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm leading-tight">
                  대원소방
                </span>
                <span className="text-white/50 text-xs tracking-wider leading-tight">
                  DAEWON FIRE PROTECTION
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              (주)대원소방 설비공사는 소방설비공사 면허업체로 최첨단 기술력과
              축적된 노하우로 완벽한 소방 대책을 제시합니다.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:0512665106"
                className="inline-flex items-center gap-2 text-safety-red hover:text-safety-red-dark font-semibold text-sm"
              >
                <Phone className="h-4 w-4" />
                (051) 266-5106
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              사업 분야
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#electrical" className="text-sm hover:text-white transition-colors">
                  전기소방
                </Link>
              </li>
              <li>
                <Link href="/services#materials" className="text-sm hover:text-white transition-colors">
                  소방자재 및 충약
                </Link>
              </li>
              <li>
                <Link href="/services#mechanical" className="text-sm hover:text-white transition-colors">
                  기계소방
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              바로가기
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-sm hover:text-white transition-colors">
                  주요 실적
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              연락처
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-safety-red flex-shrink-0 mt-0.5" />
                <span>창원시 의창구 팔용로 403번길 17</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 text-safety-red flex-shrink-0 mt-0.5" />
                <a href="mailto:dwfe119@hanmail.net" className="hover:text-white transition-colors">
                  dwfe119@hanmail.net
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 text-safety-red flex-shrink-0 mt-0.5" />
                <a href="tel:0512665106" className="hover:text-white transition-colors">
                  (051) 266-5106
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              Copyright 2026 (주)대원소방 All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <Link href="/privacy" className="hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/no-email" className="hover:text-white transition-colors">
                이메일무단수집거부
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}