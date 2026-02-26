"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const easeOutQuint = [0.16, 1, 0.3, 1] as [number, number, number, number];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutQuint },
  },
};

// Edit these anytime:
const CTAS = [
  { label: "Watch the latest YouTube", href: "https://youtube.com/@YOUR_HANDLE" },
  { label: "Follow on Instagram", href: "https://instagram.com/ged.jpeg" },
  { label: "Back to The916", href: "/" },
];

export default function ConfirmedPage() {
  return (
    <main className="relative min-h-screen bg-background text-primary overflow-hidden flex items-center justify-center py-24 px-6 md:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-3xl flex flex-col items-start"
      >
        <motion.div
          variants={fadeUpVariant}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary/80"
        >
          <CheckCircle2 size={14} className="opacity-80" />
          Confirmed
        </motion.div>

        <motion.h1
          variants={fadeUpVariant}
          className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]"
        >
          You’re in.
          <br />
          <span className="text-primary/70">Welcome to The916.</span>
        </motion.h1>

        <motion.p
          variants={fadeUpVariant}
          className="mt-6 text-lg md:text-xl text-primary/70 max-w-xl font-light leading-relaxed"
        >
          Your email is confirmed. We’ll send the first drop soon.
        </motion.p>

        <motion.div
          variants={fadeUpVariant}
          className="mt-12 w-full max-w-2xl bg-primary/5 backdrop-blur-2xl border border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-2xl font-medium mb-2">What next?</h2>
          <p className="text-base text-primary/60 font-light leading-relaxed">
            Pick something to do while you wait.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {CTAS.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between rounded-2xl border border-primary/20 bg-transparent px-6 py-4 text-base font-medium hover:border-primary/40 transition-colors"
              >
                <span className="text-primary/80 group-hover:text-primary transition-colors">
                  {cta.label}
                </span>
                <span className="p-3 bg-foreground text-primary rounded-full group-hover:bg-[hsl(25,100%,50%)] group-hover:text-white transition-colors">
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-primary/10">
            <p className="text-xs text-primary/40 font-medium tracking-wide uppercase">
              Phase 1 • This will evolve into a proper waitlist + onboarding.
            </p>
          </div>
        </motion.div>

        <motion.a
          variants={fadeUpVariant}
          href="/join"
          className="group mt-12 inline-flex items-center gap-2 text-sm text-primary/50 hover:text-primary transition-colors font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to join page
        </motion.a>
      </motion.div>
    </main>
  );
}