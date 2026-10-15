"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Check } from "lucide-react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    content: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4">
              문의하기
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              대원소방에 문의하세요. 전문 상담사가 신속히 답변드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="inline-block text-safety-red font-bold text-xs uppercase tracking-[0.2em] mb-3">
                  COMPANY INFO
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                  연락처 정보
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-safety-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-safety-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">주소</h3>
                    <p className="text-slate-500 text-sm">
                      창원시 의창구 팔용로 403번길 17
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-safety-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-safety-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">전화</h3>
                    <a
                      href="tel:0512665106"
                      className="text-safety-red font-semibold hover:underline"
                    >
                      (051) 266-5106
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-safety-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-safety-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">이메일</h3>
                    <a
                      href="mailto:dwfe119@hanmail.net"
                      className="text-safety-red font-semibold hover:underline"
                    >
                      dwfe119@hanmail.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-amber-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">카카오톡</h3>
                    <p className="text-slate-500 text-sm">
                      카카오톡 상담 채널로 빠른 상담
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://pf.kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-accent text-navy font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-amber-accent/90 transition-all text-sm md:text-base"
              >
                <MessageCircle className="h-5 w-5" />
                카카오톡 상담하기
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-12 text-center">
                  <div className="w-16 h-16 bg-safety-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-safety-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    문의가 접수되었습니다
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed">
                    빠른 시일 내에 담당자가 확인 후 연락드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                        성함/회사명 <span className="text-safety-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 ring-safety-red/20 focus:outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                        연락처 <span className="text-safety-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 ring-safety-red/20 focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 ring-safety-red/20 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-navy mb-2">
                      문의 유형
                    </label>
                    <select
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 ring-safety-red/20 focus:outline-none transition-all"
                    >
                      <option value="">문의 유형을 선택하세요</option>
                      <option value="소방공사">소방공사</option>
                      <option value="보수">보수</option>
                      <option value="충약">충약</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-navy mb-2">
                      문의 내용
                    </label>
                    <textarea
                      id="content"
                      rows={5}
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 ring-safety-red/20 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agree"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="mt-1 rounded border-slate-300 text-safety-red focus:ring-safety-red/20"
                    />
                    <label htmlFor="agree" className="text-sm text-navy font-medium">
                      개인정보처리방침 동의 <span className="text-safety-red">*</span>
                    </label>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    <Send className="h-5 w-5" />
                    문의 보내기
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}