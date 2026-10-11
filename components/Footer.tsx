"use client";

import { ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-900 py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-[0.16em] uppercase text-white">
                Venuja<span className="text-blue-600">.</span>
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs text-neutral-400 font-mono">
                Software &amp; Systems Developer
              </span>
            </div>
            <p className="text-xs text-neutral-500 mt-1 max-w-sm">
              Engineering practical web software, embedded IoT firmware, and developer utilities.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[0.72rem] font-medium tracking-[0.16em] uppercase text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/venujatech-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-neutral-400 hover:text-white rounded-full bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/contact-venuja-silva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-neutral-400 hover:text-white rounded-full bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 text-neutral-400 hover:text-white rounded-full bg-neutral-950 border border-neutral-900 hover:border-blue-600/50 transition-colors flex items-center gap-1.5 text-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-blue-500" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-10 pt-6 border-t border-neutral-950 text-center text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
          <span>© {currentYear} Venuja Silva. All rights reserved.</span>
          <span>Designed with Next.js, TypeScript &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
