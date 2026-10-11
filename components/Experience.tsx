"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Github } from "@/components/BrandIcons";

export default function Experience() {
  const experiences = [
    {
      title: "Team Leader & Frontend Engineer",
      organization: "Vendly.lk",
      period: "Core Project Leadership",
      type: "Team Leadership & Engineering",
      description:
        "Led the technical delivery, UX planning, and component architecture for Vendly.lk, a unified business management platform empowering small e-commerce merchants across web and mobile.",
      responsibilities: [
        "Team Coordination: Directed engineering milestones, assigned tasks, and facilitated daily cross-functional progress between frontend and mobile teams.",
        "UI/UX Design: Architected comprehensive wireframes, interactive user flows, and high-fidelity component libraries using Figma.",
        "Frontend Development: Built modular, responsive web interfaces with React, state management, and real-time Firebase data synchronization.",
        "Project Planning & Collaboration: Managed project roadmap in Notion, coordinated code reviews via GitHub pull requests, and maintained clean release branches.",
      ],
      technologies: ["React", "JavaScript", "Flask", "Firebase", "Figma", "GitHub", "Notion"],
      links: [
        { label: "Live Web App", url: "https://vendly-lk.vercel.app" },
        { label: "Web Repository", url: "https://github.com/venujatech-byte/Vendly.lk.git" },
        { label: "Mobile Repository", url: "https://github.com/venujatech-byte/Vendly.lk-app.git" },
      ],
      featured: true,
    },
    {
      title: "Embedded Systems & IoT Developer",
      organization: "Hardware Systems Engineering",
      period: "Ongoing Initiatives",
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
      featured: false,
    },
    {
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
      featured: false,
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Roles &amp; Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Leadership &amp; Engineering Roles
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            A transparent record of practical technical responsibilities, team leadership,
            and systems development.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-32 space-y-12 before:absolute before:left-[-1px] before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-800">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[8px] top-2 w-3.5 h-3.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />

              {/* Card */}
              <div
                className="p-6 sm:p-8 rounded-2xl"
                style={{
                  background: "#050505",
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-blue-400" style={{ background: "rgba(37,99,235,0.10)" }}>
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {exp.title}{" "}
                  <span className="text-blue-400 font-semibold">— {exp.organization}</span>
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2.5 mb-5">
                  {exp.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300"
                      style={{ background: "#111111" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {exp.links && exp.links.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    {exp.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors"
                      >
                        {link.label.includes("Live") ? (
                          <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                        ) : (
                          <Github className="w-3.5 h-3.5 text-slate-400" />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
