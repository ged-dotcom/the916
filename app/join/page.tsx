"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

// Framer Motion expects a typed cubic-bezier tuple (not number[])
const easeOutQuint = [0.16, 1, 0.3, 1] as [number, number, number, number];

// --- Framer Motion Cinematic Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutQuint },
  },
};

export default function JoinPage() {
  return (
    <main className="relative min-h-screen bg-background text-primary overflow-hidden flex items-center justify-center py-24 px-6 md:px-12">
      {/* Subtle cinematic glow in the background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-3xl flex flex-col items-start"
      >
        <motion.div
          variants={fadeUpVariant}
          className="mb-8 inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary/80"
        >
          Join the movement
        </motion.div>

        <motion.h1
          variants={fadeUpVariant}
          className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]"
        >
          Join early.
          <br />
          <span className="text-primary/70">Build with The916.</span>
        </motion.h1>

        <motion.p
          variants={fadeUpVariant}
          className="mt-6 text-lg md:text-xl text-primary/70 max-w-xl font-light leading-relaxed"
        >
          Get updates, resources, and early access to Collective drops and local
          projects. No noise. Just mission.
        </motion.p>

        {/* Action Card */}
        <motion.div
          variants={fadeUpVariant}
          className="mt-12 w-full max-w-2xl bg-primary/5 backdrop-blur-2xl border border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-2xl font-medium mb-2">Secure your spot</h2>
          <p className="text-base text-primary/60 font-light leading-relaxed">
            For now, we're collecting signups directly via email. Click below to
            send a quick message—we'll manually add you to the list.
          </p>

          <a
            href="mailto:hello@the916.com?subject=Join%20The916&body=Please%20add%20me%20to%20The916.%0D%0A%0D%0AName:%20"
            className="group mt-8 inline-flex items-center gap-4 rounded-full bg-primary text-primary-foreground pl-8 pr-2 py-2 text-base md:text-lg font-bold hover:scale-[1.02] transition-all duration-300 w-fit shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            Join via Email
            <div className="p-3 bg-foreground text-primary rounded-full group-hover:bg-[hsl(25,100%,50%)] group-hover:text-white transition-colors">
              <ArrowUpRight
                size={20}
                className="group-hover:rotate-45 transition-transform"
              />
            </div>
          </a>

          <div className="mt-8 pt-6 border-t border-primary/10">
            <p className="text-xs text-primary/40 font-medium tracking-wide uppercase">
              Phase 1 • Later this will become a proper waitlist application.
            </p>
          </div>
        </motion.div>

        <motion.a
          variants={fadeUpVariant}
          href="/"
          className="group mt-12 inline-flex items-center gap-2 text-sm text-primary/50 hover:text-primary transition-colors font-medium"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to home
        </motion.a>
      </motion.div>
    </main>
  );
}