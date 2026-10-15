import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "회사 소개 - 대원소방",
  description: "대원소방은 소방설비공사 면허업체로 최첨단 기술력과 축적된 노하우로 완벽한 소방 대책을 제시합니다.",
};

export default function AboutPage() {
  return <AboutClient />;
}