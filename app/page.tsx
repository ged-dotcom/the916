"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, ChevronRight, Gauge, Zap, Shield, 
  Cog, Fuel, Navigation, Bluetooth, Wifi, Radio, 
  Car, Wrench, Settings, Users, Menu, X
} from "lucide-react";

// --- Framer Motion Cinematic Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 1, ease: "easeOut" } 
  }
};

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
    Gauge, Zap, Shield, Cog, Fuel, Navigation, 
    Bluetooth, Wifi, Radio, Car, Wrench, Settings
  ];

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-[hsl(25,100%,50%)] selection:text-white overflow-hidden">
      
      {/* SECTION 1: Navbar */}
      <nav 
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-full transition-all duration-500 ${
          scrolled 
            ? "bg-black/80 backdrop-blur-xl border border-primary/10 py-3 px-6" 
            : "bg-transparent border-transparent py-4 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 font-bold text-xl tracking-tighter">
            <span className={scrolled ? "text-primary transition-colors" : "text-primary transition-colors"}>
              The916
            </span>
            <span className="text-[hsl(25,100%,50%)]">.</span>
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
            <a 
              href="#join"
              className={`group flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm font-semibold transition-all duration-300 ${
                scrolled ? "bg-primary text-foreground" : "bg-black text-primary hover:bg-primary hover:text-foreground"
              }`}
            >
              Join the Movement
              <div className={`p-2 rounded-full transition-colors ${
                scrolled ? "bg-foreground text-primary" : "bg-primary text-foreground group-hover:bg-foreground group-hover:text-primary"
              }`}>
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
              </div>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary p-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
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
            <a 
              href="#join"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 flex items-center justify-between bg-primary text-foreground rounded-full px-6 py-4 text-lg font-semibold"
            >
              Join the Movement
              <div className="p-2 bg-foreground text-primary rounded-full">
                <ArrowUpRight size={20} />
              </div>
            </a>
          </div>
        </motion.div>
      )}

      {/* SECTION 2: Hero */}
      <section className="relative h-screen w-full flex items-center pt-24 px-7 md:px-12 lg:px-20">
        <motion.video 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2020/05/25/40131-424813088_large.mp4" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl flex flex-col items-start gap-6 md:gap-8 mt-12"
        >
          <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-[78px] font-medium leading-[1.05] tracking-tight text-primary">
            Multiply What You Have.<br />
            <span className="text-primary/70">Restore Virtue. Build Culture. Point Hearts to Jesus.</span>
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-primary/70 max-w-2xl font-light leading-relaxed">
            The916 is a creator-powered movement building ethical influence, real-world impact, and faith-anchored innovation.
          </motion.p>
          <motion.div variants={fadeUpVariant} className="flex flex-col gap-4 mt-4">
            <a href="#about" className="group flex items-center gap-3 border border-primary/30 rounded-full px-8 py-4 hover:bg-primary/5 transition-colors w-fit">
              <span className="font-semibold text-primary">Learn more</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <span className="text-[10px] md:text-xs text-primary/50 text-center tracking-widest uppercase ml-2">
              Luke 9:16 • Isaiah 6:8
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 3: Connected Systems (BigLinks) */}
      <section id="collective" className="relative w-full">
        {/* Top Half */}
        <div className="relative py-20 md:py-32 px-7 md:px-12 lg:px-20 min-h-[70vh] flex flex-col justify-center overflow-hidden">
          <video 
            autoPlay loop muted playsInline
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
                We’re building a trusted ecosystem for creators and builders who refuse to contribute to the noise. Education, media, community, projects, and AI—aligned to truth, excellence, and real transformation.
              </p>
            </motion.div>

            {/* Icon Grid */}
            <motion.div variants={staggerContainer} className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4 mb-16">
              {systemIcons.map((Icon, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeUpVariant}
                  className="w-full aspect-square flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-transform hover:scale-105"
                >
                  <Icon 
                    size={28} 
                    className="text-[hsl(25,100%,50%)] drop-shadow-[0_0_8px_hsl(25,100%,50%)]" 
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.a variants={fadeUpVariant} href="#about" className="inline-block border border-primary/30 rounded-full px-8 py-3 text-sm font-semibold hover:bg-primary hover:text-foreground transition-colors">
              Explore All
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Half: Big Links */}
        <div className="bg-black w-full flex flex-col border-t border-primary/10">
          {[
            { text: "Start Here", anchor: "#collective" },
            { text: "Watch the Message", anchor: "#media" },
            { text: "Build With Us", anchor: "#contact" }
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

      {/* SECTION 4: Services */}
      <section className="relative w-full py-24 md:py-32 px-7 md:px-12 lg:px-20 flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <video 
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="https://cdn.pixabay.com/video/2023/10/22/186000-876822557_large.mp4" 
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUpVariant} className="border border-primary/30 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8">
            Creator-First Movement
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl font-medium tracking-tight mb-12 md:mb-16 leading-tight">
            Build influence with conviction. <br />
            <span className="text-primary/60">Create work that heals culture.</span>
          </motion.h2>

          <motion.div variants={fadeUpVariant} className="w-full max-w-2xl bg-primary/5 backdrop-blur-2xl border border-primary/10 rounded-3xl p-6 md:p-12 text-left shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-medium mb-2 md:mb-4">
              The916 Collective
            </h3>
            <p className="text-primary/50 text-lg md:text-xl mb-6">
              Education, systems, and standards.
            </p>
            <p className="text-primary/70 mb-8 font-light leading-relaxed text-sm md:text-base">
              We help creators stop drifting and start building: a clear message, ethical growth, and a body of work that earns trust. Not hype—craft, clarity, and consistency.
            </p>
            
            <ul className="space-y-4 md:space-y-6 mb-8">
              {[
                "Creator education: brand, storytelling, and scalable content systems",
                "Ethical influence: integrity as a competitive advantage in a low-trust world",
                "Practical impact: build projects that change real lives—online and offline"
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Zap className="shrink-0 mt-1 text-[hsl(25,100%,50%)] drop-shadow-[0_0_8px_hsl(25,100%,50%)]" size={20} />
                  <span className="text-primary/90 font-medium text-sm md:text-base">{bullet}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6 border-t border-primary/10">
              <p className="text-xs md:text-sm text-primary/50 font-medium tracking-wide">
                Not corporate. Not political. Faith-anchored. Excellence-driven.
              </p>
            </div>
          </motion.div>
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
            {/* Abstract Shapes (Left) */}
            <motion.div variants={fadeUpVariant} className="flex items-center gap-2 md:gap-4 w-full">
              {[
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=256&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=256&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=256&auto=format&fit=crop"
              ].map((src, i) => (
                <img 
                  key={i} 
                  src={src} 
                  alt={`Abstract Shape ${i + 1}`} 
                  className="h-40 md:h-64 flex-1 object-cover rounded-xl md:rounded-2xl grayscale contrast-125 opacity-80 mix-blend-screen"
                />
              ))}
            </motion.div>

            {/* Content (Right) */}
            <motion.div variants={staggerContainer} className="space-y-6 md:space-y-8 text-base md:text-lg font-light text-primary/70 leading-relaxed">
              <motion.p variants={fadeUpVariant}>
                The world is louder than ever—and more anxious than ever. The916 exists to rebuild what’s been eroded: virtue, truth, and the courage to live with conviction. We’re creating a home for builders who want their work to mean something.
              </motion.p>
              <motion.p variants={fadeUpVariant}>
                Inspired by Luke 9:16 (‘multiply what little you have’) and Isaiah 6:8 (‘Here I am—send me’), The916 is a movement expressed through education, media, community, projects, and innovation—pointing hearts toward Jesus through real excellence and real impact.
              </motion.p>
            </motion.div>
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
              { icon: Wrench, label: "Craft-first makers" }
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
              If you’re tired of shallow content, algorithm-chasing, and performative identity—The916 is for you. We build clarity, character, and a body of work that people can trust.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 7: CTA */}
      <section id="join" className="bg-black py-16 md:py-24 px-4 md:px-12 lg:px-20 w-full flex justify-center pb-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInVariant}
          className="relative w-full max-w-7xl rounded-3xl overflow-hidden min-h-[50vh] flex items-center p-8 md:p-16 lg:p-24"
        >
          <video 
            autoPlay loop muted playsInline
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
              Join the movement—get updates, resources, and first access to Collective drops and local projects. No noise. Just mission.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-col items-start gap-6">
              <button className="group flex items-center justify-between md:justify-start gap-6 bg-primary text-primary-foreground rounded-full pl-8 pr-2 py-2 text-base md:text-lg font-bold hover:scale-[1.02] transition-all duration-300 w-full md:w-auto shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                Join the Movement
                <div className="p-3 bg-foreground text-primary rounded-full group-hover:bg-[hsl(25,100%,50%)] group-hover:text-white transition-colors">
                  <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                </div>
              </button>
              <a href="#manifesto" className="text-primary/60 hover:text-primary text-xs md:text-sm font-medium transition-colors underline-offset-4 hover:underline md:ml-4">
                Or: Download the Manifesto
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}