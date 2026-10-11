"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Code2,
  Database,
  GitBranch,
  Rocket,
  Cpu,
  Radio,
  CloudLightning,
  Bell,
} from "lucide-react";
import { Figma } from "@/components/BrandIcons";

export default function Workflow() {
  const webSteps = [
    {
      num: "01",
      title: "Concept & UX",
      tech: "Figma",
      desc: "User journey mapping, wireframing, and atomic design tokens.",
      icon: Figma,
      color: "text-purple-400",
    },
    {
      num: "02",
      title: "Frontend UI",
      tech: "React / Next.js",
      desc: "Component-driven development with responsive CSS & stateful data flows.",
      icon: Code2,
      color: "text-blue-400",
    },
    {
      num: "03",
      title: "API & Logic",
      tech: "Flask / REST",
      desc: "Clean backend route architecture, data validation, and business logic.",
      icon: Database,
      color: "text-blue-400",
    },
    {
      num: "04",
      title: "Data Cloud",
      tech: "Firebase / Firestore",
      desc: "Real-time document persistence, auth states, and cloud storage.",
      icon: CloudLightning,
      color: "text-amber-400",
    },
    {
      num: "05",
      title: "Code Review",
      tech: "GitHub",
      desc: "Branching strategies, pull request reviews, and continuous integration.",
      icon: GitBranch,
      color: "text-neutral-300",
    },
    {
      num: "06",
      title: "Deployment",
      tech: "Vercel",
      desc: "Edge-distributed static and serverless hosting with preview environments.",
      icon: Rocket,
      color: "text-emerald-400",
    },
  ];

  const iotSteps = [
    {
      num: "01",
      title: "Hardware Specs",
      tech: "Pin Mapping",
      desc: "Pin allocation, power regulation (3.3V / 5V), and circuit schematics.",
      icon: Lightbulb,
    },
    {
      num: "02",
      title: "Sensors & Peripherals",
      tech: "I2C / SPI",
      desc: "Interfacing analog sensors, serial buses, and relay driver modules.",
      icon: Cpu,
    },
    {
      num: "03",
      title: "Firmware Core",
      tech: "Embedded C++",
      desc: "Register manipulation, task loops, interrupt handling, and debouncing.",
      icon: Code2,
    },
    {
      num: "04",
      title: "Connectivity",
      tech: "Wi-Fi & Protocols",
      desc: "Auto-reconnect logic, secure TLS handshake, and local web servers.",
      icon: Radio,
    },
    {
      num: "05",
      title: "Cloud Telemetry",
      tech: "HTTP / Webhooks",
      desc: "RESTful telemetry dispatch and correlation with weather & IoT endpoints.",
      icon: CloudLightning,
    },
    {
      num: "06",
      title: "Notifications",
      tech: "Telegram API",
      desc: "Instant automated trigger dispatch and bidirectional remote commanding.",
      icon: Bell,
    },
  ];

  return (
    <section id="workflow" className="py-24 md:py-32 relative bg-black">
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
            <span className="eyebrow">06 — Engineering Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            How I Build &amp; <span className="text-blue-500">Ship Systems</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            A structured, repeatable lifecycle from problem definition to deployed,
            resilient production software and hardware.
          </p>
        </motion.div>

        {/* Track 1: Web & Digital Product Pipeline */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Web &amp; Digital Applications Pipeline
              </h3>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">
                Figma → React/Next.js → Flask/APIs → Firebase → GitHub → Vercel
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {webSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="surface-card p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                        <IconComponent className={`w-4 h-4 ${step.color}`} />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-600">
                        {step.num}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">
                      {step.title}
                    </h4>
                    <span className="chip py-0 px-2 text-[10px] mb-3 inline-block">
                      {step.tech}
                    </span>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Track 2: Embedded IoT & Hardware Systems Pipeline */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                IoT &amp; Embedded Systems Pipeline
              </h3>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">
                Hardware Specs → Sensors → ESP32 Firmware → Connectivity → Cloud Telemetry → Notifications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {iotSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="surface-card p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                        <IconComponent className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-600">
                        {step.num}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">
                      {step.title}
                    </h4>
                    <span className="chip py-0 px-2 text-[10px] mb-3 inline-block">
                      {step.tech}
                    </span>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
