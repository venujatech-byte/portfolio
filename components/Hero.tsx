"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  Layers,
  Cpu,
  Smartphone,
  Terminal,
  Bot,
} from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

export default function Hero() {
  const domains = [
    { label: "Web Applications", icon: Layers, color: "text-blue-400" },
    { label: "Mobile Companion", icon: Smartphone, color: "text-blue-400" },
    { label: "IoT & Embedded C++", icon: Cpu, color: "text-emerald-400" },
    { label: "AI Integration", icon: Bot, color: "text-violet-400" },
    { label: "Developer Utilities", icon: Terminal, color: "text-amber-400" },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black lg:flex lg:min-h-[100svh] lg:items-center"
    >
      {/* Background / Left Side Hero Portrait — Layout matching Pahan Jayasinghe's site */}
      <div className="relative w-full pt-20 lg:absolute lg:inset-0 lg:pt-0 pointer-events-none">
        {/* Desktop View: Full-bleed image across background, left-aligned, right side pure black */}
        <div className="hidden lg:block relative w-full h-full">
          <Image
            src="/images/hero-portrait-v4.png"
            alt="Portrait of Venuja Silva"
            fill
            priority
            className="object-cover object-left"
            sizes="(min-width: 1024px) 100vw, 0px"
          />
        </div>

        {/* Mobile View: 16:9 aspect image showing Venuja clearly on top */}
        <div className="block lg:hidden relative w-full aspect-video">
          <Image
            src="/images/hero-portrait-v4.png"
            alt="Portrait of Venuja Silva"
            fill
            priority
            className="object-cover object-[20%_center]"
            sizes="(max-width: 1023px) 100vw, 0px"
          />
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-10 pb-20 md:px-10 lg:py-32">
        <div className="lg:ml-[50%] lg:pl-6 xl:ml-[48%] xl:pl-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="rule-accent" />
            <span className="eyebrow">Venuja Silva</span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-[2.6rem] leading-[0.96] font-bold sm:text-6xl xl:text-7xl tracking-tight text-white">
            Hi, I&apos;m Venuja Silva. <br />

          </h1>

          {/* Subtitle */}
          <p className="text-neutral-300 font-mono text-xs sm:text-sm tracking-wide mt-6">
            Team Leader &amp; Full-Stack Engineer @ Vendly.lk
            <span className="text-blue-500 mx-2">|</span>
            IoT &amp; Systems Developer
          </p>

          {/* Bio text */}
          <p className="text-neutral-400 mt-6 max-w-xl text-sm leading-relaxed sm:text-base">
            Building intelligent software, connected hardware systems, and practical digital solutions.
            Specialized in component-driven web platforms, low-level ESP32 firmware, and developer automation.
          </p>

          {/* Pill CTA Buttons & Socials */}
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase group inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-blue-600/25"
            >
              Explore My Work
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="border border-neutral-800 hover:border-blue-600 hover:bg-blue-600/10 text-neutral-200 hover:text-white rounded-full px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase inline-flex items-center gap-2 transition-all duration-300"
            >
              Let&apos;s Connect
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/venujatech-byte"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all hover:scale-105"
                aria-label="Venuja Silva GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/contact-venuja-silva"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all hover:scale-105"
                aria-label="Venuja Silva LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Technology Domains Chip Strip */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {domains.map((domain) => {
              const IconComponent = domain.icon;
              return (
                <span key={domain.label} className="chip gap-2">
                  <IconComponent className={`w-3.5 h-3.5 ${domain.color}`} />
                  <span>{domain.label}</span>
                </span>
              );
            })}
          </div>

          {/* Scroll to explore */}
          <a
            href="#about"
            className="text-neutral-500 hover:text-neutral-300 mt-12 inline-flex items-center gap-2 text-[0.62rem] tracking-[0.22em] uppercase transition-colors"
          >
            Scroll to explore
            <ArrowDown className="w-3.5 h-3.5 motion-safe:animate-bounce text-blue-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
