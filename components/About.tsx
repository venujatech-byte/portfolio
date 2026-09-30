"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cpu,
  Bot,
  Users,
  Palette,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "6+ Projects",
      subtitle: "Full-stack web, IoT, and desktop utilities",
      icon: FolderGit2,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Web & Mobile",
      subtitle: "React, Next.js, and responsive digital apps",
      icon: Smartphone,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "IoT & Embedded",
      subtitle: "ESP32, Arduino, sensors & hardware automation",
      icon: Cpu,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Team Leadership",
      subtitle: "Led engineering & UI/UX delivery on Vendly.lk",
      icon: Users,
      color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    },
  ];

  const focusAreas = [
    "Web Applications (React, Next.js, Flask, Firebase)",
    "Mobile Applications (Cross-platform companion apps)",
    "AI-Powered & Vision Systems (ESP32-CAM, APIs, Automation)",
    "IoT & Embedded Systems (ESP32, Arduino, Wi-Fi, Telemetry)",
    "Automation & Developer Tools (Python, Tkinter, Scripting)",
    "UI/UX Design (Figma wireframes, design systems & prototyping)",
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Practical, High-Impact Technology
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Bio / Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl relative overflow-hidden"
              style={{ background: "rgba(13,20,38,0.70)", boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>Building at the Intersection of Software &amp; Hardware</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                I am a software developer passionate about crafting functional, reliable,
                and well-architected solutions. My journey spans the full engineering
                spectrum—from writing modern, component-driven web applications to designing
                real-time IoT firmware that bridges physical sensors with the cloud.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                As the <span className="text-cyan-300 font-medium">Team Leader on Vendly.lk</span>,
                I guided our development stream through end-to-end product delivery:
                conceptualizing workflows in Figma, establishing reusable React frontend
                components, coordinating Flask and Firebase integrations, and facilitating
                structured collaboration across GitHub repositories and Notion boards.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Whether writing responsive web interfaces, crafting Python developer
                utilities, or deploying ESP32 microcontrollers for environmental sensing
                and computer vision, I believe in writing clean code, designing intuitive user
                interfaces, and building tools that genuinely solve practical problems.
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="p-6 sm:p-7 rounded-2xl"
              style={{ background: "rgba(13,20,38,0.70)", boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)" }}
            >
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                Hands-On Experience Across
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Key Highlights / Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-xl flex items-start gap-4 transition-all duration-300 hover:translate-y-[-2px]"
                  style={{ background: "rgba(13,20,38,0.70)", boxShadow: "0 4px 20px -6px rgba(0,0,0,0.5)" }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Quote / Philosophy Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-5 rounded-xl border-l-4 border-l-cyan-500"
              style={{ background: "linear-gradient(90deg, rgba(6,182,212,0.07) 0%, rgba(13,20,38,0.40) 100%)" }}
            >
              <p className="text-xs sm:text-sm text-slate-300 italic">
                &ldquo;Great software isn&apos;t just code that runs—it is thoughtful design,
                dependable architecture, and practical value for the people who use it.&rdquo;
              </p>
              <span className="block mt-2 text-xs font-semibold text-cyan-400">
                — Venuja Silva
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
