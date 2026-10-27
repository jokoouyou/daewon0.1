import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "대원소방 - 소방설비공사 전문업체",
  description:
    "대원소방은 소방설비공사 면허업체로 전기소방, 기계소방, 소방자재 및 충약 서비스를 제공합니다. 최첨단 기술력과 축적된 노하우로 완벽한 소방 대책을 제시합니다.",
  keywords: ["대원소방", "소방설비", "소방공사", "전기소방", "기계소방", "스프링클러", "소화기"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GZ6XNNXX4N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GZ6XNNXX4N');`}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}