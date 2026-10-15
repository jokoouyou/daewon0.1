import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "오시는 길 & 문의 - 대원소방",
  description: "대원소방에 문의하세요. 온라인 문의 폼으로 연락 주시면 신속히 답변드립니다.",
};

export default function ContactPage() {
  return <ContactClient />;
}