import HeroSection from "@/components/HeroSection";
import BusinessSummary from "@/components/BusinessSummary";
import StatsCounter from "@/components/StatsCounter";
import ClientsSection from "@/components/ClientsSection";
import EmergencyCallout from "@/components/EmergencyCallout";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessSummary />
      <StatsCounter />
      <ClientsSection />
      <EmergencyCallout />
    </>
  );
}