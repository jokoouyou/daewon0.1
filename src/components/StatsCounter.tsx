"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Building2, Wrench, Award } from "lucide-react";

const stats = [
  { icon: Award, value: 20, suffix: "+", label: "Years of Service" },
  { icon: Shield, value: 100, suffix: "%", label: "Safety Record" },
  { icon: Building2, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: Wrench, value: 15, suffix: "+", label: "Expert Engineers" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 md:py-20 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-safety-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-5 group-hover:bg-safety-red/20 transition-colors">
                  <Icon className="h-7 w-7 md:h-8 md:w-8 text-safety-red" />
                </div>
                <div className="stat-number">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="stat-label">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}