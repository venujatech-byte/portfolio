"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Workflow", href: "#workflow" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Venuja Silva Homepage"
          >
            <span className="font-bold text-sm sm:text-base tracking-[0.18em] uppercase text-white">
              Venuja<span className="text-blue-600">.</span>
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse ml-1" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[0.72rem] font-medium tracking-[0.16em] uppercase text-neutral-400 hover:text-white relative transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons / CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/venujatech-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/contact-venuja-silva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-colors"
              aria-label="LinkedIn Profile"
              title="Venuja Silva LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-blue-600/20"
            >
              Let&apos;s Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-white bg-blue-600"
            >
              Connect
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg transition-colors bg-neutral-900 border border-neutral-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-nav px-4 py-5"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 flex items-center gap-4">
                <a
                  href="https://github.com/venujatech-byte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-slate-300 hover:text-white"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/contact-venuja-silva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-slate-300 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
