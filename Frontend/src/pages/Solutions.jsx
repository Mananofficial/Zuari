import React from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Stethoscope,
  Umbrella,
  Users,
  Building2,
} from "lucide-react";

function Solutions() {
  const items = [
    {
      icon: Stethoscope,
      title: "Group Health",
      desc: "Comprehensive group medical cover with maternity, OPD, and mental wellness built in.",
      color: "bg-coral/15 text-coral",
    },
    {
      icon: Umbrella,
      title: "Group Term Life",
      desc: "Financial safety net for every employee's family — instant onboarding, no medicals.",
      color: "bg-teal/15 text-teal",
    },
    {
      icon: Users,
      title: "Accident & Disability",
      desc: "24/7 personal accident cover with worldwide protection and lump-sum payouts.",
      color: "bg-sun/40 text-foreground",
    },
    {
      icon: Building2,
      title: "Business & Property",
      desc: "Cover offices, equipment, and liability — from cyber to D&O in a single program.",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-coral">
            What we do
          </span>

          <h2 className="mt-2 max-w-2xl font-display text-4xl md:text-5xl">
            Insurance programs, <span className="italic">designed</span> — not
            just sold.
          </h2>
        </div>

        <p className="max-w-md text-muted-foreground">
          Whether you're a 20-person startup or a 5,000-person enterprise, we
          shape a program around your people, industry, and budget.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => {
          const Icon = it.icon;

          return (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
              style={{ animation: `reveal-up 0.7s ${i * 100}ms both` }}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-grad-warm opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />

              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${it.color}`}
              >
                <Icon className="h-6 w-6" />
              </span>

              <h3 className="mt-6 font-display text-xl font-semibold">
                {it.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {it.desc}
              </p>

              <Link
                to="/solutions"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 transition group-hover:text-coral"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Solutions;