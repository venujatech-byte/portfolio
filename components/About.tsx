"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Cpu,
  Users,
  CheckCircle2,
  FolderGit2,
  Terminal,
  ChevronDown,
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const throughLine = [
    {
      num: "01",
      title: "Frontend & Web Architecture",
      summary: "Modular component engineering, responsive state management, and real-time cloud data pipelines with React, Next.js, and Firebase.",
      icon: Smartphone,
    },
    {
      num: "02",
      title: "Embedded Systems & IoT",
      summary: "Designing firmware in Embedded C++, interfacing physical sensors, Wi-Fi connectivity, and cloud alerting with ESP32 and Arduino.",
      icon: Cpu,
    },
    {
      num: "03",
      title: "Backend & Systems Logic",
      summary: "Building robust REST endpoints with Flask, asynchronous sockets, and Python subprocess pipelines to manage developer services.",
      icon: Terminal,
    },
    {
      num: "04",
      title: "Product Delivery & Leadership",
      summary: "Leading technical delivery on Vendly.lk, architecting UI/UX wireframes in Figma, coordinating team tasks, and managing GitHub reviews.",
      icon: Users,
    },
    {
      num: "05",
      title: "Developer Productivity Tools",
      summary: "Crafting multithreaded desktop applications with Python Tkinter to monitor developer servers, capture logs, and manage process ports.",
      icon: FolderGit2,
    },
  ];

  const focusChips = [
    "React & Next.js",
    "Embedded C/C++",
    "ESP32 & Arduino",
    "Flask & REST APIs",
    "Firebase Firestore",
    "Python Desktop Utilities",
    "Figma UI/UX Systems",
    "Git & GitHub Workflows",
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="rule-accent" />
            <span className="eyebrow">01 — About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Turning Technical Concepts Into <br className="hidden sm:inline" />
            <span className="text-blue-500">Dependable Solutions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Focus Chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div>
              <p className="text-xl sm:text-2xl text-neutral-200 font-semibold leading-relaxed tracking-tight mb-6">
                I am a software engineer focused on building practical, resilient systems
                across web, hardware, and desktop environments.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-5">
                My work spans the full engineering spectrum. As the{" "}
                <span className="text-white font-medium">Team Leader &amp; Full-Stack Engineer on Vendly.lk</span>,
                I spearheaded our team&apos;s product development: architecting user flows and wireframes in
                Figma, structuring modular React frontend and Flask backend services, integrating Firebase databases,
                and maintaining our GitHub development roadmap.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-5">
                Beyond the browser, I build autonomous IoT solutions using ESP32 and Arduino,
                developing low-level C++ firmware that reads real-time environmental sensors and dispatches
                encrypted cloud alerts via Telegram.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Whether deploying a distributed web app or optimizing embedded firmware loops,
                my philosophy is simple: write clean code, eliminate friction, and build things that work reliably.
              </p>
            </div>

            {/* Core Competency Chips */}
            <div>
              <p className="eyebrow mb-4">Core Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {focusChips.map((chip) => (
                  <span key={chip} className="chip">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mr-2 shrink-0" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Through-Line (Inspired by Pahan's site) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="mb-4">
              <p className="eyebrow">The Through-Line</p>
              <p className="text-xs text-neutral-500 mt-1">
                Five pillars anchoring my engineering practice
              </p>
            </div>

            <div className="divide-y divide-neutral-900 border-t border-b border-neutral-900">
              {throughLine.map((item, idx) => {
                const isOpen = activeTab === idx;
                const IconComp = item.icon;
                return (
                  <div key={item.num} className="py-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab(isOpen ? -1 : idx)}
                      className="w-full flex items-center justify-between text-left group transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-baseline gap-3.5">
                        <span className={`font-mono text-xs tracking-widest transition-colors ${isOpen ? "text-blue-500 font-bold" : "text-neutral-600 group-hover:text-neutral-400"}`}>
                          {item.num}
                        </span>
                        <span className={`text-base font-semibold tracking-tight transition-all duration-200 ${isOpen ? "text-white translate-x-1" : "text-neutral-300 group-hover:text-white"}`}>
                          {item.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-500" : "group-hover:text-white"}`}
                      />
                    </button>

                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 pl-8 pr-2"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                            {item.summary}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
