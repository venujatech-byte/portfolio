"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { Github } from "@/components/BrandIcons";

export default function Experience() {
  const experiences = [
    {
      num: "01",
      title: "Team Leader & Frontend Engineer",
      organization: "Vendly.lk",
      period: "Core Project Leadership",
      type: "Team Leadership & Engineering",
      description:
        "Led the technical delivery, UX planning, and component architecture for Vendly.lk, a unified business management platform empowering small e-commerce merchants across web and mobile.",
      responsibilities: [
        "Directed engineering milestones, assigned tasks, and facilitated daily cross-functional progress between frontend and mobile teams.",
        "Architected comprehensive wireframes, interactive user flows, and high-fidelity component libraries using Figma.",
        "Built modular, responsive web interfaces with React, state management, and real-time Firebase data synchronization.",
        "Managed project roadmap in Notion, coordinated code reviews via GitHub pull requests, and maintained clean release branches.",
      ],
      technologies: ["React", "JavaScript", "Flask", "Firebase", "Figma", "GitHub", "Notion"],
      links: [
        { label: "Live Web App", url: "https://vendly-lk.vercel.app" },
        { label: "Web Repository", url: "https://github.com/venujatech-byte/Vendly.lk.git" },
        { label: "Mobile Repository", url: "https://github.com/venujatech-byte/Vendly.lk-app.git" },
      ],
      badge: "Featured Leadership",
    },
    {
      num: "02",
      title: "Embedded Systems & IoT Developer",
      organization: "Hardware Systems Engineering",
      period: "Hardware Prototyping",
      type: "Hardware & Edge Computing",
      description:
        "Engineered autonomous microcontroller solutions integrating physical sensor arrays, Wi-Fi connectivity, computer vision on ESP32-CAM, and cloud alerting mechanisms.",
      responsibilities: [
        "Developed low-level C/C++ firmware pipelines for Arduino and ESP32 with real-time sensor polling.",
        "Implemented secure outbound HTTPS long-polling integrations with Telegram Bot API for remote actuation.",
        "Built hyper-local weather alerting stations correlating on-board rain detectors with meteorology REST endpoints.",
        "Integrated camera sensors with buffer-based motion detection algorithms.",
      ],
      technologies: ["ESP32", "Arduino", "Embedded C/C++", "Sensors", "Telegram API", "Wi-Fi"],
      links: [
        { label: "Weather Bot Repo", url: "https://github.com/venujatech-byte/ESP_Weather_BOT.git" },
      ],
      badge: "Embedded & Edge",
    },
    {
      num: "03",
      title: "Desktop Tools & Utility Developer",
      organization: "Software Engineering",
      period: "Productivity Tools",
      type: "Application Development",
      description:
        "Developed native desktop management tools in Python to streamline development server lifecycles, monitor port listeners, and capture asynchronous process telemetry.",
      responsibilities: [
        "Designed asynchronous multithreaded GUI architectures using Python Tkinter.",
        "Built subprocess management pipelines to stream live console output and execute graceful shutdown signals.",
        "Engineered socket-level inspection tools to detect and kill rogue processes holding developer ports.",
      ],
      technologies: ["Python", "Tkinter", "Process Management", "OS & Sockets"],
      links: [
        { label: "Server Launcher Repo", url: "https://github.com/venujatech-byte/Server_Launcher.git" },
      ],
      badge: "Desktop Tools",
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-black">
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
            <span className="eyebrow">02 — Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Engineering &amp; <span className="text-blue-500">Leadership Roles</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            A transparent record of practical technical responsibilities, team leadership,
            and systems development.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="surface-card p-7 sm:p-9 md:p-11"
            >
              <div className="grid gap-8 md:grid-cols-12 md:gap-12">
                {/* Left Column: Role Details */}
                <div className="md:col-span-4 flex flex-col justify-between">
                  <div>
                    <span className="text-blue-500 font-mono text-xs tracking-widest font-bold">
                      {exp.num}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-white tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-neutral-300 mt-2 text-sm font-semibold">
                      {exp.organization}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono uppercase tracking-wider mt-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-0">
                    <span className="chip text-[11px] border-blue-600/30 text-blue-400">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Right Column: Narrative, Responsibilities, Chips & Links */}
                <div className="md:col-span-8 flex flex-col justify-between">
                  <div>
                    <p className="text-neutral-300 leading-relaxed text-sm sm:text-base mb-6">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="space-y-2.5 mb-6">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.technologies.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {exp.links && exp.links.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-900">
                      {exp.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="chip gap-2 text-neutral-200 hover:text-white group"
                        >
                          {link.label.includes("Live") ? (
                            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                          ) : (
                            <Github className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                          )}
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
