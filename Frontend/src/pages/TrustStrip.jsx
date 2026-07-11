import React from 'react'
import { ArrowRight, Heart, Shield, Users, Sparkles, Building2, Stethoscope, Umbrella, Check, Star, Zap } from "lucide-react";
import { Rotator,Counter } from '../components/dynamic-bits';
import { Navbar } from '../components/Navbar';
import { useReveal } from "../hooks/useReveal";

function TrustStrip() {
  const logos = [
    "ACME",
    "Northwind",
    "Vertex",
    "Lumina",
    "Kite & Co",
    "Meridian",
    "Halcyon",
    "Tessera",
  ];

  const doubled = [...logos, ...logos];

  return (
    <section className="border-y border-border/60 bg-background/60 py-8">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Trusted by forward-thinking companies
      </p>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-6">
          {doubled.map((logo, index) => (
            <span
              key={index}
              className="font-display text-2xl font-semibold text-foreground/40 whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

export default TrustStrip;