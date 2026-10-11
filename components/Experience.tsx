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
      period: "July 2026 – Sept 2026",
      type: "Project Leadership & Engineering",
      description:
        "Led a multidisciplinary engineering team through a 9-week intensive sprint delivering Vendly.lk, a centralized business management platform for SMEs with AI chatbot order automation, deployed to Vercel and AWS.",
      responsibilities: [
        "Directed team sprints, task distribution, and daily standups across frontend, mobile, and backend pipelines.",
        "Architected Figma UI/UX wireframes and implemented high-fidelity React interfaces with real-time Firebase databases.",
        "Engineered the customer-facing AI chatbot and automated order creation workflow, significantly reducing merchant message overhead.",
        "Delivered and presented the complete product at InfoSchol Demo Day, orchestrating code reviews via GitHub and roadmaps in Notion.",
      ],
      technologies: ["React", "JavaScript", "React Native", "Flask", "Firebase", "AWS", "Brevo", "Figma", "GitHub", "Notion"],
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
      organization: "Hardware Systems Engineering (Solo)",
      period: "Hardware Prototyping",
      type: "Embedded Hardware & Edge Computing",
      description:
        "Designed and implemented autonomous hardware solutions combining physical sensor arrays, Wi-Fi connectivity, motion computer vision on ESP32-CAM, and cloud alert systems.",
      responsibilities: [
        "Developed low-level C/C++ firmware pipelines for Arduino, ESP32, and ESP8266 microcontrollers.",
        "Built hyper-local weather alerting stations correlating on-board rain detectors with meteorology REST endpoints.",
        "Integrated camera modules with motion detection algorithms, web controls, and automated capture routines.",
        "Engineered secure outbound HTTPS long-polling integrations with Telegram Bot API for remote actuation and notifications.",
      ],
      technologies: ["ESP32", "ESP32-CAM", "ESP8266", "Arduino", "Embedded C++", "Telegram Bot API", "Sensors"],
      links: [
        { label: "Weather Bot Repo", url: "https://github.com/venujatech-byte/ESP_Weather_BOT.git" },
      ],
      badge: "Embedded & Edge",
    },
    {
      num: "03",
      title: "Desktop Tools & Utility Developer",
      organization: "Software Engineering (Solo)",
      period: "Productivity Tools",
      type: "Native Application Development",
      description:
        "Developed native desktop management tools in Python to streamline development server lifecycles, monitor port listeners, and capture asynchronous process telemetry.",
      responsibilities: [
        "Designed asynchronous multithreaded GUI architectures using Python Tkinter.",
        "Built subprocess management pipelines to stream live console output and execute graceful shutdown signals.",
        "Engineered socket-level inspection tools to detect and kill rogue processes holding developer ports with one click.",
      ],
      technologies: ["Python", "Tkinter", "Process Management", "OS & Sockets", "Subprocess"],
      links: [
        { label: "Server Launcher Repo", url: "https://github.com/venujatech-byte/Server_Launcher.git" },
      ],
      badge: "Desktop Tools",
    },
    {
      num: "04",
      title: "Founder & Operations Lead",
      organization: "Online Business (Self-Managed)",
      period: "E-Commerce & Digital Marketing",
      type: "Entrepreneurship & Operations",
      description:
        "Independently founded and managed a small-scale online commercial business, executing digital marketing campaigns, order fulfillment logistics, customer relations, and sales growth strategies.",
      responsibilities: [
        "Orchestrated organic and paid social media marketing campaigns to build brand visibility and customer acquisition.",
        "Handled end-to-end customer communications, inquiries, and dispute resolution with rapid response times.",
        "Managed inventory lifecycle, order fulfillment pipelines, and packaging/shipping coordination.",
        "Cultivated rigorous time management, basic financial accounting, and data-driven sales pricing strategies.",
      ],
      technologies: ["Social Media Marketing", "Order Management", "Customer Communication", "Time Management", "Sales Strategy"],
      links: [],
      badge: "Self-Managed Business",
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
            <span className="eyebrow">04 — Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Engineering &amp; <span className="text-blue-500">Leadership Roles</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            A transparent record of practical technical responsibilities, engineering project leadership,
            hardware development, and entrepreneurial execution.
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
