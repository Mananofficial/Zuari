import React from 'react'
import { ArrowRight, Heart, Shield, Users, Sparkles, Building2, Stethoscope, Umbrella, Check, Star, Zap } from "lucide-react";
import { Rotator } from '../components/dynamic-bits';
import { Navbar } from '../components/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section className="relative overflow-hidden">
        {/* Floating blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 bg-grad-warm opacity-30 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute top-40 -right-24 h-112 w-md bg-grad-cool opacity-25 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sun opacity-30 blur-3xl animate-float-slow" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 md:grid-cols-2 md:items-center md:pt-24">
          <div className="animate-reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-coral" />
              IRDAI licensed insurance brokerage
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Insurance your{" "}
              <Rotator words={["team", "family", "business", "future"]} />
              <br />
              <span className="italic font-normal">actually</span> deserves.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Zuari Insurance Brokers Limited designs group health, life and business insurance for growing companies — with human advisors, faster claims, and a delightful dashboard for every employee.
            </p>

            <form className="mt-8 flex max-w-md flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your work email"
                className="w-full rounded-full border border-border bg-white px-5 py-3.5 text-sm outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/30"
              />
              <button className="group relative overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5">
                <span className="relative z-10 inline-flex items-center gap-1.5">
                  Get a quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </button>
            </form>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {["#f2a99a", "#7cc4bd", "#f0d78a", "#c4b1ea"].map((c) => (
                  <span key={c} className="h-7 w-7 rounded-full border-2 border-background" style={{ backgroundColor: c }} />
                ))}
              </div>
              Trusted by 3,000+ HR teams across India
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2.5rem] shadow-soft">
              <img src='https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Zuari Insurance Brokers Limited team advising a client" width={1600} height={1200} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft animate-float">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral/15 text-coral">
                <Heart className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Claim settled</p>
                <p className="text-sm font-semibold">₹2.4 L · 6h</p>
              </div>
            </div>

            <div className="absolute -right-6 bottom-16 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft animate-float-slow">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/15 text-teal">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Policy active</p>
                <p className="text-sm font-semibold">128 lives covered</p>
              </div>
            </div>

            <div className="absolute bottom-2 left-6 rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-soft animate-float" style={{ animationDelay: "-2s" }}>
              <p className="text-xs opacity-70">NPS</p>
              <p className="font-display text-2xl font-semibold">72</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage