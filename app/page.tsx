"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate, type Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
  Cross,
  Gem,
  ShieldCheck,
  Eye,
  Users,
  HandHeart,
  Sparkles,
  GraduationCap,
  Clapperboard,
  Hammer,
  Beaker,
  Send,
  Zap,
  Gauge,
  Wrench,
  ChevronDown,
} from "lucide-react";

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
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// --- IMMERSIVE 3D FLYTHROUGH CONSTELLATION ---
function HeroConstellation() {
  const networkLayers = [
    {
      id: "layer-1",
      delay: 0,
      driftX: [0, 8, -4, 0],
      driftY: [0, -6, 4, 0],
      nodes: [
        { x: 20, y: 30, label: "Faith" },
        { x: 80, y: 25, label: "Craft" },
        { x: 50, y: 85, label: "" },
        { x: 25, y: 75, label: "Clarity" },
        { x: 85, y: 65, label: "" },
      ],
      lines: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2], [1, 4], [4, 2]],
    },
    {
      id: "layer-2",
      delay: -5,
      driftX: [0, -6, 6, 0],
      driftY: [0, 8, -4, 0],
      nodes: [
        { x: 50, y: 15, label: "Community" },
        { x: 85, y: 80, label: "Impact" },
        { x: 15, y: 55, label: "" },
        { x: 70, y: 50, label: "" },
        { x: 30, y: 85, label: "" },
      ],
      lines: [[0, 1], [1, 2], [2, 0], [0, 3], [3, 1], [2, 4], [4, 1]],
    },
    {
      id: "layer-3",
      delay: -10,
      driftX: [0, 5, -8, 0],
      driftY: [0, -4, 6, 0],
      nodes: [
        { x: 15, y: 20, label: "Innovation" },
        { x: 50, y: 80, label: "Character" },
        { x: 85, y: 35, label: "" },
        { x: 45, y: 40, label: "" },
        { x: 20, y: 70, label: "" },
      ],
      lines: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [4, 1], [3, 1]],
    },
    {
      id: "layer-4",
      delay: -15,
      driftX: [0, -8, 4, 0],
      driftY: [0, 5, -5, 0],
      nodes: [
        { x: 40, y: 10, label: "Faith" },
        { x: 80, y: 50, label: "Craft" },
        { x: 10, y: 80, label: "" },
        { x: 60, y: 90, label: "Community" },
        { x: 25, y: 35, label: "" },
      ],
      lines: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [4, 2], [1, 3]],
    },
  ];

  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: (i * 37) % 100,
    y: (i * 73) % 100,
    delay: -(i * 0.5),
    duration: 10 + (i % 5),
  }));

  return (
    <div
      className="
        absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.12] pointer-events-none z-0
        lg:relative lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0 lg:w-[700px] lg:h-[700px] lg:opacity-100 lg:pointer-events-auto lg:z-auto lg:shrink-0 
        flex items-center justify-center overflow-hidden
      "
      style={{
        maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 75%)"
      }}
    >
      <div className="absolute inset-0 blur-[120px] opacity-40 bg-[radial-gradient(circle_at_center,rgba(182,90,30,0.5)_0%,transparent_70%)] pointer-events-none" />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        <div className="absolute flex items-center justify-center" style={{ transform: "translateZ(-2500px)" }}>
          <motion.div
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[400px] h-[400px] bg-[hsl(22,72%,42%)] rounded-full blur-[100px]"
          />
          <div className="absolute w-24 h-24 bg-white rounded-full shadow-[0_0_100px_hsl(22,72%,42%)]" />
          <div className="absolute w-12 h-12 bg-[hsl(22,72%,42%)] rounded-full blur-md" />
          <div className="hidden lg:block absolute mt-48 text-2xl font-bold tracking-[0.5em] uppercase text-white/80 drop-shadow-2xl">
            The916
          </div>
        </div>

        {particles.map((p) => (
          <motion.div
            key={`star-${p.id}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ translateZ: [-3000, 1000], opacity: [0, 0, 0.8, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
          />
        ))}

        {networkLayers.map((layer, layerIndex) => (
          <motion.div
            key={layer.id}
            className="absolute inset-0 w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              translateZ: [-3000, 1000],
              opacity: [0, 0, 1, 1, 0],
              x: layer.driftX.map(v => `${v}%`),
              y: layer.driftY.map(v => `${v}%`),
            }}
            transition={{
              translateZ: { duration: 20, repeat: Infinity, ease: "linear", delay: layer.delay },
              opacity: { duration: 20, repeat: Infinity, ease: "linear", delay: layer.delay, times: [0, 0.1, 0.3, 0.8, 1] },
              x: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: layer.delay },
              y: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: layer.delay },
            }}
          >
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100">
              <defs>
                <linearGradient id={`glowGradient-${layer.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="hsl(22, 72%, 42%)" />
                  <stop offset="100%" stopColor="white" />
                </linearGradient>
              </defs>

              {layer.lines.map(([n1, n2], idx) => {
                const start = layer.nodes[n1];
                const end = layer.nodes[n2];
                return (
                  <g key={`line-${idx}`}>
                    <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="rgba(255,255,255,0.15)" strokeWidth="0.2" />
                    <motion.line
                      x1={start.x} y1={start.y} x2={end.x} y2={end.y}
                      stroke={`url(#glowGradient-${layer.id})`} strokeWidth="0.6" strokeLinecap="round"
                      initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                      animate={{ pathLength: [0, 0.3, 0], pathOffset: [0, 0.7, 1], opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: -(idx * 1.2) - layerIndex }}
                    />
                  </g>
                );
              })}
            </svg>

            {layer.nodes.map((node, i) => (
              <div
                key={`node-${i}`}
                className="absolute flex items-center justify-center"
                style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="absolute w-8 h-8 bg-white rounded-full blur-lg opacity-20" />
                <div className={`w-2.5 h-2.5 rounded-full ${node.label ? 'bg-[hsl(22,72%,42%)] shadow-[0_0_15px_hsl(22,72%,42%)]' : 'bg-white shadow-[0_0_10px_white]'}`} />
                {node.label && (
                  <div className="hidden lg:block absolute top-5 text-sm font-semibold tracking-widest uppercase text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] whitespace-nowrap bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">
                    {node.label}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// --- NEW INTERACTIVE MOUSE-TRACKING CARD COMPONENT ---
function InteractiveCollectiveCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={fadeUpVariant}
      className="group relative w-full max-w-3xl rounded-3xl border border-primary/10 bg-primary/5 p-8 md:p-12 text-left shadow-2xl overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Glow following mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(182, 90, 30, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Real Card Content (z-10 to stay above the glow) */}
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-medium mb-2 md:mb-4">The916 Collective</h3>
        <p className="text-primary/50 text-lg md:text-xl mb-6">Education, systems, and standards.</p>
        <p className="text-primary/70 mb-8 font-light leading-relaxed text-sm md:text-base">
          We help creators stop drifting and start building: a clear message, ethical growth, and a body of work that
          earns trust. Not hype—craft, clarity, and consistency.
        </p>

        <ul className="space-y-4 md:space-y-6 mb-8">
          {[
            "Creator education: brand, storytelling, and scalable content systems",
            "Ethical influence: integrity as a competitive advantage in a low-trust world",
            "Practical impact: build projects that change real lives—online and offline",
          ].map((bullet, i) => (
            <li key={i} className="flex items-start gap-4">
              <Zap
                className="shrink-0 mt-1 text-[hsl(22,72%,42%)] drop-shadow-[0_0_8px_hsl(22,72%,42%)]"
                size={20}
              />
              <span className="text-primary/90 font-medium text-sm md:text-base">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t border-primary/10">
          <p className="text-xs md:text-sm text-primary/50 font-medium tracking-wide">
            Not corporate. Not political. Faith-anchored. Excellence-driven.
          </p>
        </div>
      </div>
    </motion.div>
  );
}


// --- MAIN PAGE ---
export default function The916LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Collective", "Media", "Projects", "Labs", "Contact"];

  const systemIcons = [
    { Icon: Cross, label: "Faith", href: "#about", desc: "Root and conviction." },
    { Icon: Gem, label: "Craft", href: "#collective", desc: "Excellence as worship." },
    { Icon: ShieldCheck, label: "Character", href: "#about", desc: "Integrity that holds weight." },
    { Icon: Eye, label: "Clarity", href: "#collective", desc: "A message people trust." },
    { Icon: Users, label: "Community", href: "#collective", desc: "Builders, not spectators." },
    { Icon: HandHeart, label: "Impact", href: "#projects", desc: "Real lives improved." },
    { Icon: Sparkles, label: "Creativity", href: "#media", desc: "Beauty that points upward." },
    { Icon: GraduationCap, label: "Education", href: "#collective", desc: "Systems and skill." },
    { Icon: Clapperboard, label: "Media", href: "#media", desc: "Stories that restore value." },
    { Icon: Hammer, label: "Projects", href: "#projects", desc: "Build in public + local." },
    { Icon: Beaker, label: "Labs", href: "#labs", desc: "Trust in the AI era." },
    { Icon: Send, label: "Mission", href: "#contact", desc: "Answer the call." },
  ];

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-[hsl(22,72%,42%)] selection:text-white overflow-hidden">
      {/* SECTION 1: Navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-full transition-all duration-500 ${scrolled
          ? "bg-black/80 backdrop-blur-xl border border-primary/10 py-3 px-6"
          : "bg-transparent border-transparent py-4 px-6"
          }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 font-bold text-xl tracking-tighter">
            <span className="text-primary transition-colors">The916</span>
            <span className="text-[hsl(22,72%,42%)]">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary/80">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all hover:scale-105"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/join"
              className={`group flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm font-semibold transition-all duration-300 ${scrolled ? "bg-primary text-foreground" : "bg-black text-primary hover:bg-primary hover:text-foreground"
                }`}
            >
              Join the Movement
              <div
                className={`p-2 rounded-full transition-colors ${scrolled
                  ? "bg-foreground text-primary"
                  : "bg-primary text-foreground group-hover:bg-foreground group-hover:text-primary"
                  }`}
              >
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-primary p-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-28 px-7 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-light">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-primary/10 pb-4 text-primary/80 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
              <Link
                href="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 flex items-center justify-between bg-primary text-foreground rounded-full px-6 py-4 text-lg font-semibold"
              >
                Join the Movement
                <div className="p-2 bg-foreground text-primary rounded-full">
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 2: Hero */}
      <section className="relative h-screen w-full flex items-center pt-24 px-7 md:px-12 lg:px-20 overflow-hidden">
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2020/05/25/40131-424813088_large.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-0" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl w-full flex items-start lg:items-center justify-between gap-10 lg:gap-16 mt-12 mx-auto"
        >
          {/* Left: existing hero copy */}
          <div className="relative z-10 max-w-3xl flex flex-col items-start gap-6 md:gap-8">
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl md:text-7xl lg:text-[78px] font-medium leading-[1.05] tracking-tight text-primary drop-shadow-xl"
            >
              Make Virtue Visible Again.
              <br />
              <span className="text-primary/70">
                Build work that matters. Build with conviction.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-primary/70 max-w-xl font-light leading-relaxed drop-shadow-md"
            >
              The916 is a creator-powered ecosystem building ethical influence, real-world impact, and intelligent faith
              for a world drowning in noise.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-col gap-4 mt-4">
              <a
                href="#about"
                className="group flex items-center gap-3 border border-primary/30 rounded-full px-8 py-4 hover:bg-primary/10 transition-colors w-fit bg-black"
              >
                <span className="font-semibold text-primary z-10">Explore the mission</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform z-10" />
              </a>

              <span className="text-[10px] md:text-xs text-primary/50 text-center tracking-widest uppercase ml-2 drop-shadow-sm">
                Phase one. Early builders shape the culture.
              </span>
            </motion.div>
          </div>

          {/* Right: Constellation */}
          <HeroConstellation />
        </motion.div>
      </section>

      {/* SECTION 3: Connected Systems (BigLinks) */}
      <section id="collective" className="relative w-full z-10">
        {/* Top Half */}
        <div className="relative py-20 md:py-32 px-7 md:px-12 lg:px-20 min-h-[70vh] flex flex-col justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            src="https://cdn.pixabay.com/video/2021/08/18/85469-589366115_large.mp4"
          />
          <div className="absolute inset-0 bg-black/60" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 max-w-7xl mx-auto w-full"
          >
            <motion.div variants={fadeUpVariant} className="max-w-2xl">
              <div className="inline-block border border-primary/30 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
                The916 Framework
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                Faith + Creativity + Impact <br />
                <span className="text-primary/60">One System. Many Expressions.</span>
              </h2>
              <p className="text-base md:text-lg text-primary/70 font-light leading-relaxed mb-12">
                The916 is not a church, agency, or personal brand site — it’s a conviction-based creative infrastructure.
                We train creators, tell stories that restore value, launch real projects, and build future-facing systems for trust in the age of AI.
              </p>
            </motion.div>

            {/* Icon Grid */}
            <motion.div variants={staggerContainer} className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4 mb-16">
              {systemIcons.map(({ Icon, label, href, desc }, idx) => (
                <motion.a
                  key={idx}
                  variants={fadeUpVariant}
                  href={href}
                  className="group w-full aspect-square flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-transform hover:scale-105 hover:bg-white/10"
                  aria-label={label}
                  title={`${label} — ${desc}`}
                >
                  <Icon
                    size={26}
                    className="text-[hsl(22,72%,42%)] drop-shadow-[0_0_10px_hsl(22,72%,42%)]"
                  />
                  <span className="hidden md:block text-[10px] tracking-widest uppercase text-primary/60 group-hover:text-primary/80">
                    {label}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUpVariant}
              href="#about"
              className="inline-block border border-primary/30 rounded-full px-8 py-3 text-sm font-semibold hover:bg-primary hover:text-foreground transition-colors"
            >
              Explore All
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Half: Big Links */}
        <div className="bg-black w-full flex flex-col border-t border-primary/10">
          {[
            { text: "Start Here", anchor: "#collective" },
            { text: "Watch the Message", anchor: "#media" },
            { text: "Build With Us", anchor: "#contact" },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.anchor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex items-center justify-between px-7 md:px-12 lg:px-20 py-10 md:py-16 border-b border-primary/10 hover:opacity-70 transition-opacity"
            >
              <h3 className="text-4xl md:text-6xl lg:text-[110px] font-medium tracking-tighter leading-none">
                {link.text}
              </h3>
              <ChevronRight className="w-8 h-8 md:w-16 md:h-16 lg:w-24 lg:h-24 text-primary/30 group-hover:text-primary transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>
      </section>

      {/* SECTION 4: THE ENGINE & ECOSYSTEM (MERGED MEGA-SECTION) */}
      <section className="relative w-full py-24 md:py-32 px-7 md:px-12 lg:px-20 min-h-screen overflow-hidden">

        {/* Shared Video Background fading to pure black at bottom */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 w-full h-[120vh] object-cover opacity-40"
            src="https://cdn.pixabay.com/video/2023/10/22/186000-876822557_large.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/90 to-black" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center"
        >
          {/* Header */}
          <motion.div
            variants={fadeUpVariant}
            className="border border-[hsl(22,72%,42%)]/50 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8 text-[hsl(22,72%,42%)] bg-[hsl(22,72%,42%)]/10"
          >
            The Core Engine
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl font-medium tracking-tight mb-12 md:mb-16 leading-tight text-center max-w-4xl">
            Build influence with conviction. <br />
            <span className="text-primary/60">Create work that heals culture.</span>
          </motion.h2>

          {/* Interactive Mouse Tracking Card */}
          <InteractiveCollectiveCard />

          {/* The Pipeline Connector */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center justify-center mt-12 mb-8">
            <div className="w-px h-16 md:h-24 bg-gradient-to-b from-[hsl(22,72%,42%)] to-transparent" />
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">Funds the Ecosystem</span>
              <ChevronDown size={16} className="text-[hsl(22,72%,42%)] animate-bounce" />
            </div>
          </motion.div>

          {/* Ecosystem Arms Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 pt-4">

            {/* 1. Media Card */}
            <motion.div
              variants={fadeUpVariant}
              id="media"
              className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-12 hover:border-[hsl(22,72%,42%)]/30 transition-colors duration-500"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[hsl(22,72%,42%)] rounded-full blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 group-hover:border-[hsl(22,72%,42%)]/50 transition-colors duration-500">
                    <Clapperboard size={28} className="text-primary/50 group-hover:text-[hsl(22,72%,42%)] transition-colors duration-500" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary/50 group-hover:text-primary transition-colors duration-500">
                    The916 Media
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-4">Stories that make virtue compelling.</h3>
                <p className="text-primary/60 font-light leading-relaxed mt-auto group-hover:text-primary/80 transition-colors duration-500">
                  We create culture-shaping media that makes integrity feel strong, excellence feel desirable, and faith feel intelligent.
                </p>
              </div>
            </motion.div>

            {/* 2. Projects Card */}
            <motion.div
              variants={fadeUpVariant}
              id="projects"
              className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-12 hover:border-[hsl(22,72%,42%)]/30 transition-colors duration-500"
            >
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[hsl(22,72%,42%)] rounded-full blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 group-hover:border-[hsl(22,72%,42%)]/50 transition-colors duration-500">
                    <Hammer size={28} className="text-primary/50 group-hover:text-[hsl(22,72%,42%)] transition-colors duration-500" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary/50 group-hover:text-primary transition-colors duration-500">
                    The916 Projects
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-4">Impact that touches real lives.</h3>
                <p className="text-primary/60 font-light leading-relaxed mt-auto group-hover:text-primary/80 transition-colors duration-500">
                  We launch initiatives that relieve pressure in broken places — practical, local, measurable, and rooted in love.
                </p>
              </div>
            </motion.div>

            {/* 3. Labs Card (Spans full width) */}
            <motion.div
              variants={fadeUpVariant}
              id="labs"
              className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-12 lg:col-span-2 hover:border-[hsl(22,72%,42%)]/30 transition-colors duration-500"
            >
              <div className="absolute left-1/2 -top-32 w-96 h-96 -translate-x-1/2 bg-[hsl(22,72%,42%)] rounded-full blur-[120px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8 lg:gap-16">
                <div className="shrink-0 flex flex-col gap-8 md:w-1/3">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-black/50 border border-white/5 group-hover:border-[hsl(22,72%,42%)]/50 transition-colors duration-500">
                      <Beaker size={28} className="text-primary/50 group-hover:text-[hsl(22,72%,42%)] transition-colors duration-500" />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary/50 group-hover:text-primary transition-colors duration-500">
                      The916 Labs
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium pr-4">Trust systems for the AI era.</h3>
                </div>
                <div className="flex items-end h-full md:w-2/3 md:pt-4">
                  <p className="text-base md:text-lg text-primary/60 font-light leading-relaxed group-hover:text-primary/90 transition-colors duration-500">
                    As AI reshapes influence and information, trust becomes the rarest currency. Labs explores ethical tools, standards,
                    and future-facing infrastructure that protects truth and rewards integrity.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* SECTION 5: About */}
      <section id="about" className="bg-black py-20 md:py-32 px-7 md:px-12 lg:px-20 w-full overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="h-px w-6 bg-primary/40" />
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-primary/80">About The916</span>
          </motion.div>

          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl font-medium tracking-tight mb-12 md:mb-16 leading-tight">
            Why The916 exists <br />
            <span className="text-primary/50">and what it’s restoring</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Abstract Shapes */}
            <motion.div variants={fadeUpVariant} className="flex items-center gap-2 md:gap-4 w-full min-w-0 overflow-hidden">
              {[
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=256&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=256&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=256&auto=format&fit=crop",
              ].map((src, i) => (
                <div key={i} className="flex-1 min-w-0">
                  <img
                    src={src}
                    alt={`Abstract Shape ${i + 1}`}
                    className="h-40 md:h-64 w-full object-cover rounded-xl md:rounded-2xl grayscale contrast-125 opacity-80 mix-blend-screen"
                  />
                </div>
              ))}
            </motion.div>

            {/* Content */}
            <motion.div variants={staggerContainer} className="space-y-6 md:space-y-8 text-base md:text-lg font-light text-primary/70 leading-relaxed">
              <motion.p variants={fadeUpVariant}>
                The world doesn’t lack information. It lacks integrity.
                Influence is cheap. Truth feels negotiable. Excellence is often performative.
              </motion.p>

              <motion.p variants={fadeUpVariant}>
                The916 exists to make virtue visible again — to build creators and builders who live upright, multiply what they’ve been given,
                and lead by example in public.
              </motion.p>

              <motion.p variants={fadeUpVariant}>
                Integrity must look strong. Faith must look intelligent. Excellence must look attractive.
              </motion.p>

              <motion.p variants={fadeUpVariant} className="text-primary/60">
                Born from Luke 9:16 and Isaiah 6:8 — rooted in faith, built for builders.
              </motion.p>            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6: Audience */}
      <section className="bg-black py-20 md:py-32 px-7 md:px-12 lg:px-20 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="h-px w-6 bg-primary/40" />
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-primary/80">For Whom?</span>
          </motion.div>

          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl font-medium tracking-tight mb-12 md:mb-16 leading-tight">
            Who The916 is for <br />
            <span className="text-primary/50">and what they’re building</span>
          </motion.h2>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
            {/* Card 1 */}
            <motion.div variants={fadeUpVariant} className="flex flex-col gap-4">
              <div className="aspect-square rounded-full border border-primary/10 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&auto=format&fit=crop"
                  alt="Audience"
                  className="w-full h-full object-cover grayscale opacity-70 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-center font-medium mt-2">Creators with conviction</p>
            </motion.div>

            {/* Cards 2-4 */}
            {[
              { icon: Users, label: "Communities & leaders" },
              { icon: Gauge, label: "Builders of momentum" },
              { icon: Wrench, label: "Craft-first makers" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="flex flex-col gap-4">
                <div className="aspect-square rounded-[2rem] border border-primary/10 bg-primary/5 flex items-center justify-center hover:bg-primary/10 transition-colors">
                  <item.icon size={56} className="text-primary/50 stroke-1 md:w-16 md:h-16" />
                </div>
                <p className="text-center font-medium mt-2">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUpVariant} className="w-full bg-primary/5 border border-primary/10 rounded-3xl md:rounded-full py-8 px-6 md:px-12 text-center">
            <p className="text-primary/70 font-light max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              If you’re tired of shallow content, algorithm-chasing, and performative identity—The916 is for you. We
              build clarity, character, and a body of work that people can trust.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 7: CTA */}
      <section id="contact" className="bg-black py-16 md:py-24 px-4 md:px-12 lg:px-20 w-full flex justify-center pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInVariant}
          className="relative w-full max-w-7xl rounded-3xl overflow-hidden min-h-[50vh] flex items-center p-8 md:p-16 lg:p-24"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://cdn.pixabay.com/video/2023/10/22/186000-876822557_large.mp4"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

          <motion.div variants={staggerContainer} className="relative z-10 max-w-2xl w-full">
            <motion.h2 variants={fadeUpVariant} className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
              Answer the call. <br />
              <span className="text-primary/80">Build with The916.</span>
            </motion.h2>

            <motion.p variants={fadeUpVariant} className="text-base md:text-lg text-primary/70 mb-10 font-light leading-relaxed max-w-xl">
              Join the movement—get early updates, founding access, and first invitations to projects shaping culture. No noise.
              Just mission.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col items-start gap-6">
              <Link
                href="/join"
                className="group relative inline-flex items-center justify-between md:justify-start gap-6 bg-primary text-primary-foreground rounded-full pl-8 pr-2 py-2 text-base md:text-lg font-bold hover:scale-[1.02] transition-all duration-300 w-full md:w-auto shadow-[0_0_30px_rgba(255,255,255,0.05)]
                  before:absolute before:inset-0 before:-z-10 before:rounded-full
                  before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_35%,transparent_70%)]
                  before:blur-xl before:opacity-70 group-hover:before:opacity-100"
              >
                <span>Join the Movement</span>
                <span className="p-3 bg-foreground text-primary rounded-full group-hover:bg-[hsl(22,72%,42%)] group-hover:text-white transition-colors">
                  <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                </span>
              </Link>

              <a
                href="#manifesto"
                className="text-primary/60 hover:text-primary text-xs md:text-sm font-medium transition-colors underline-offset-4 hover:underline md:ml-4"
              >
                Or: Download the Manifesto
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}