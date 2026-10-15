"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "회사 소개", href: "/about" },
  { label: "사업 분야", href: "/services" },
  { label: "주요 실적", href: "/achievements" },
  { label: "문의하기", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-navy border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-safety-red rounded-lg flex items-center justify-center font-black text-white text-lg md:text-xl group-hover:bg-safety-red-dark transition-colors">
              DW
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm md:text-base leading-tight">
                대원소방
              </span>
              <span className="text-white/50 text-[10px] md:text-xs tracking-wider leading-tight">
                DAEWON FIRE PROTECTION
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-safety-red"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-safety-red rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0512665106"
              className="hidden xl:flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(051) 266-5106</span>
            </a>
            <Link href="/contact" className="btn-primary hidden xl:inline-flex">
              무료 견적 문의
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-safety-red/10 text-safety-red"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href="tel:0512665106"
                  className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white text-sm"
                >
                  <Phone className="h-4 w-4 text-safety-red" />
                  <span>(051) 266-5106</span>
                </a>
                <Link href="/contact" className="btn-primary w-full mt-3">
                  무료 견적 문의
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}