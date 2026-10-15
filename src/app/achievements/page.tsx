import type { Metadata } from "next";
import AchievementsClient from "./AchievementsClient";

export const metadata: Metadata = {
  title: "주요 실적 - 대원소방",
  description: "대원소방이 완벽하게 수행한 주요 시공 및 보수 실적 프로젝트입니다.",
};

export default function AchievementsPage() {
  return <AchievementsClient />;
}