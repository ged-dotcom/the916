"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

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

export default function JoinClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isSubmitted = searchParams.get("success") === "true";

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // If you're using your own API route proxy, post there instead.
      const res = await fetch("/api/kit/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.get("email_address") }),
      });

      if (!res.ok) throw new Error("Signup failed. Please try again.");

      router.replace("/join?success=true");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function resetToForm() {
    router.replace("/join");
  }

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
          Get updates, resources, and early access to Collective drops and local projects. No noise. Just mission.
        </motion.p>

        <motion.div
          variants={fadeUpVariant}
          className="mt-12 w-full max-w-2xl bg-primary/5 backdrop-blur-2xl border border-primary/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-2xl font-medium mb-2">Secure your spot</h2>

          {isSubmitted ? (
            <>
              <p className="text-base text-primary/70 font-light leading-relaxed mt-2">You’re almost in.</p>
              <p className="mt-4 text-sm text-primary/50 leading-relaxed max-w-md">
                Check your inbox and click the confirmation link to lock in your spot.
              </p>

              <button
                type="button"
                onClick={resetToForm}
                className="mt-6 inline-flex items-center gap-2 text-sm text-primary/60 hover:text-primary transition-colors font-medium"
              >
                Didn’t mean to? Submit another email
                <ArrowUpRight size={14} className="opacity-70" />
              </button>
            </>
          ) : (
            <>
              <p className="text-base text-primary/60 font-light leading-relaxed">
                Drop your email and we’ll add you to the early list (you’ll confirm via email).
              </p>

              <form className="mt-8 w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <input
                    type="email"
                    name="email_address"
                    required
                    placeholder="Email address"
                    className="w-full flex-1 rounded-full border border-primary/20 bg-transparent px-5 py-3 text-base text-primary placeholder:text-primary/40 outline-none focus:border-primary/40"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center justify-center gap-4 rounded-full bg-primary text-primary-foreground pl-8 pr-2 py-2 text-base md:text-lg font-bold hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {loading ? "Joining..." : "Join"}
                    <span className="p-3 bg-foreground text-primary rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                      <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                    </span>
                  </button>
                </div>

                {error ? (
                  <p className="mt-3 text-xs text-red-400">{error}</p>
                ) : (
                  <p className="mt-3 text-xs text-primary/40">You’ll be asked to confirm via email.</p>
                )}
              </form>
            </>
          )}

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
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to home
        </motion.a>
      </motion.div>
    </main>
  );
}