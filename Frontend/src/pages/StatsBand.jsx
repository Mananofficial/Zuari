import React from 'react'
import { ArrowRight, Heart, Shield, Users, Sparkles, Building2, Stethoscope, Umbrella, Check, Star, Zap } from "lucide-react";
import { Rotator,Counter } from '../components/dynamic-bits';
import { Navbar } from '../components/Navbar';
import { useReveal } from "../hooks/useReveal";

function StatsBand() {
  const { ref, visible } = useReveal();
  const stats = [
    { n: 3200, s: "+", label: "Companies insured" },
    { n: 480000, s: "+", label: "Lives covered" },
    { n: 96, s: "%", label: "Claim settlement" },
    { n: 24, s: "h", label: "Avg. claim TAT" },
  ];
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-8 rounded-[2rem] bg-primary p-10 text-primary-foreground md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className="text-center" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `all 0.7s ${i * 120}ms` }}>
            <p className="font-display text-5xl font-semibold">
              {visible ? <Counter to={s.n} suffix={s.s} /> : `0${s.s}`}
            </p>
            <p className="mt-2 text-sm opacity-70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBand;
