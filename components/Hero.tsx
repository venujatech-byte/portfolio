"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  Layers,
  Cpu,
  Smartphone,
  Terminal,
  Bot,
} from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

export default function Hero() {
  const domains = [
    { label: "Web Apps", icon: Layers, color: "text-blue-400 bg-blue-500/10" },
    { label: "Mobile Apps", icon: Smartphone, color: "text-blue-400 bg-blue-500/10" },
    { label: "IoT & Embedded", icon: Cpu, color: "text-emerald-400 bg-emerald-500/10" },
    { label: "AI Integration", icon: Bot, color: "text-violet-400 bg-violet-500/10" },
    { label: "Dev Tools", icon: Terminal, color: "text-amber-400 bg-amber-500/10" },
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex flex-col justify-center min-h-[90vh] bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Profile Photo Avatar — Large, Crisp on Complete Black */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8 group"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-black ring-2 ring-blue-600/40 shadow-2xl shadow-black">
              <Image
                src="/images/profile.png"
                alt="Venuja Silva"
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
              />
            </div>
          </motion.div>

          {/* Name & Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4"
          >
            Hi, I&apos;m Venuja Silva
          </motion.h1>

          {/* Professional Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-400 mb-6"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-950/40 transition-all hover:scale-105 active:scale-95"
            >
              View My Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-sm backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-md shadow-black"
            >
              Contact Me
              <Send className="w-4 h-4 text-blue-400" />
            </a>

            {/* Social Badges */}
            <div className="flex items-center gap-2 pl-1">
              <a
                href="https://github.com/venujatech-byte"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-all hover:scale-105 shadow-sm shadow-black/30"
                aria-label="Venuja Silva GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/contact-venuja-silva"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-all hover:scale-105 shadow-sm shadow-black/30"
                aria-label="Venuja Silva LinkedIn"
                title="LinkedIn Profile"
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
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium ${domain.color} backdrop-blur-sm transition-transform hover:-translate-y-0.5`}
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
