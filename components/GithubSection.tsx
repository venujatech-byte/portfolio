"use client";

import { motion } from "framer-motion";
import {
  FolderGit2,
  ArrowUpRight,
} from "lucide-react";
import { Github } from "@/components/BrandIcons";

export default function GithubSection() {
  const verifiedRepositories = [
    {
      num: "01",
      name: "Vendly.lk",
      description: "Online Business Management System (Web Application frontend & real-time integration).",
      language: "JavaScript / React",
      langColor: "bg-yellow-400",
      url: "https://github.com/venujatech-byte/Vendly.lk.git",
      tag: "Web Platform",
    },
    {
      num: "02",
      name: "Vendly.lk-app",
      description: "Mobile companion application for Vendly merchant operations and order fulfillment.",
      language: "React Native / JS",
      langColor: "bg-blue-400",
      url: "https://github.com/venujatech-byte/Vendly.lk-app.git",
      tag: "Mobile",
    },
    {
      num: "03",
      name: "Server_Launcher",
      description: "Tkinter-based desktop utility to start, stop, monitor, and clean developer server ports.",
      language: "Python",
      langColor: "bg-emerald-400",
      url: "https://github.com/venujatech-byte/Server_Launcher.git",
      tag: "Developer Tool",
    },
    {
      num: "04",
      name: "ESP_Weather_BOT",
      description: "ESP32 weather monitoring station with real-time Telegram rain alerts and sensor polling.",
      language: "C++ / Embedded",
      langColor: "bg-sky-400",
      url: "https://github.com/venujatech-byte/ESP_Weather_BOT.git",
      tag: "IoT & Automation",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-card p-8 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="rule-accent" />
                <span className="eyebrow">06 — Open Source Repositories</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.05]">
                Verified Code on <span className="text-blue-500">GitHub</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl">
                Inspect public repositories spanning responsive web apps, embedded IoT C++ firmware,
                and desktop utilities on{" "}
                <span className="text-blue-400 font-mono font-medium">github.com/venujatech-byte</span>.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://github.com/venujatech-byte"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-[0.16em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-blue-600/25"
              >
                <Github className="w-4 h-4" />
                Explore My GitHub
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Featured Repository Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verifiedRepositories.map((repo, idx) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-900 hover:border-neutral-800 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5 font-mono text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      <FolderGit2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{repo.name}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-900 text-xs text-neutral-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                    <span>{repo.language}</span>
                  </div>
                  <span className="chip py-0 px-2 text-[10px]">
                    {repo.tag}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
