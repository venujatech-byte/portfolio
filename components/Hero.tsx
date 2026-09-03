"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  Github,
  Linkedin,
  Layers,
  Cpu,
  Smartphone,
  Sparkles,
  Terminal,
  Bot,
} from "lucide-react";

export default function Hero() {
  const domains = [
    { label: "Web Apps", icon: Layers, color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10" },
    { label: "Mobile Apps", icon: Smartphone, color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
    { label: "IoT & Embedded", icon: Cpu, color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
    { label: "AI Integration", icon: Bot, color: "text-violet-400 border-violet-500/20 bg-violet-500/10" },
    { label: "Dev Tools", icon: Terminal, color: "text-amber-400 border-amber-500/20 bg-amber-500/10" },
  ];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]"
    >
      {/* Subtle background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-medium mb-6 shadow-sm shadow-cyan-950"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            Available for Engineering Projects &amp; Collaborations
          </motion.div>

          {/* Name & Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Venuja Silva
            </span>
          </motion.h1>

          {/* Professional Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6"
          >
            Software Developer | AI &amp; IoT Enthusiast
          </motion.h2>

          {/* Introduction & Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 font-normal"
          >
            Building intelligent software, connected systems, and practical digital solutions.
            I design and engineer across{" "}
            <span className="text-white font-medium">web development</span>,{" "}
            <span className="text-white font-medium">mobile development</span>,{" "}
            <span className="text-white font-medium">IoT &amp; embedded systems</span>,{" "}
            <span className="text-white font-medium">AI integrations</span>, and{" "}
            <span className="text-white font-medium">automation tooling</span>.
          </motion.p>

          {/* CTA Buttons & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-105 active:scale-95"
            >
              View My Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
            >
              Contact Me
              <Send className="w-4 h-4 text-cyan-400" />
            </a>

            {/* Social Badges */}
            <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-slate-800">
              <a
                href="https://github.com/venujatech-byte"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
                aria-label="Venuja Silva GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/venuja-silva-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
                aria-label="Venuja Silva LinkedIn (Placeholder)"
                title="LinkedIn Profile (placeholder link)"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Technology Domains Pill Strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl"
          >
            {domains.map((domain) => {
              const IconComponent = domain.icon;
              return (
                <div
                  key={domain.label}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-medium ${domain.color} backdrop-blur-sm transition-transform hover:-translate-y-0.5`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{domain.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
