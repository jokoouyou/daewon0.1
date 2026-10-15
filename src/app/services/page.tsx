import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "사업 분야 - 대원소방",
  description: "대원소방의 전기소방, 소방자재 및 충약, 기계소방 서비스를 소개합니다.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}