"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Figma,
  Code2,
  Database,
  GitBranch,
  Rocket,
  Cpu,
  Radio,
  CloudLightning,
  Bell,
  ArrowRight,
} from "lucide-react";

export default function Workflow() {
  const webSteps = [
    {
      title: "1. Concept & UX",
      tech: "Figma",
      desc: "User journey mapping, wireframing, and creating atomic design tokens.",
      icon: Figma,
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    },
    {
      title: "2. Frontend UI",
      tech: "React / Next.js",
      desc: "Component-driven development with responsive CSS & stateful data flows.",
      icon: Code2,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      title: "3. API & Logic",
      tech: "Flask / REST",
      desc: "Clean backend route architecture, data validation, and business logic.",
      icon: Database,
      color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    },
    {
      title: "4. Data Cloud",
      tech: "Firebase / Firestore",
      desc: "Real-time document persistence, auth states, and cloud storage.",
      icon: CloudLightning,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    {
      title: "5. Code Review",
      tech: "GitHub",
      desc: "Branching strategies, pull request reviews, and continuous integration.",
      icon: GitBranch,
      color: "text-slate-300 border-slate-500/30 bg-slate-500/10",
    },
    {
      title: "6. Deployment",
      tech: "Vercel",
      desc: "Edge-distributed static and serverless hosting with preview environments.",
      icon: Rocket,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
  ];

  const iotSteps = [
    {
      title: "Hardware Specs",
      tech: "Breadboard & Prototyping",
      desc: "Pin mapping, power regulation (3.3V / 5V), and circuit schematics.",
      icon: Lightbulb,
    },
    {
      title: "Sensors & Actuators",
      tech: "Environmental & Vision",
      desc: "Interfacing analog sensors, I2C / SPI peripherals, and relay drivers.",
      icon: Cpu,
    },
    {
      title: "Firmware Core",
      tech: "ESP32 / Embedded C++",
      desc: "Register manipulation, task loops, interrupt handling, and sensor debouncing.",
      icon: Code2,
    },
    {
      title: "Connectivity",
      tech: "Wi-Fi & Protocols",
      desc: "Auto-reconnect logic, secure TLS handshake, and local web servers.",
      icon: Radio,
    },
    {
      title: "Cloud & APIs",
      tech: "HTTP / Webhooks",
      desc: "RESTful telemetry dispatch and correlation with weather & third-party endpoints.",
      icon: CloudLightning,
    },
    {
      title: "Notifications",
      tech: "Telegram / Alerts",
      desc: "Instant automated trigger dispatch and bidirectional chat remote commanding.",
      icon: Bell,
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Engineering Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I Build &amp; Ship Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            A structured, reliable lifecycle from initial problem definition to deployed,
            resilient production software and hardware.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Track 1: Web & Digital Product Pipeline */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Web &amp; Digital Applications Pipeline
              </h3>
              <p className="text-xs text-slate-400">
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
                  className="glass-panel glass-panel-hover p-4 rounded-xl flex flex-col justify-between border border-white/10 relative"
                >
                  <div>
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${step.color} mb-3`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                      {step.title}
                    </span>
                    <h4 className="text-sm font-semibold text-white mb-2">
                      {step.tech}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
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
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                IoT &amp; Embedded Systems Pipeline
              </h3>
              <p className="text-xs text-slate-400">
                Hardware → Sensors → ESP32 → Connectivity → API/Cloud → Notifications
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
                  className="glass-panel glass-panel-hover p-4 rounded-xl flex flex-col justify-between border border-white/10"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                      Step 0{idx + 1}
                    </span>
                    <h4 className="text-sm font-semibold text-white mb-2">
                      {step.title}
                    </h4>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-white/5 mb-2">
                      {step.tech}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
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
