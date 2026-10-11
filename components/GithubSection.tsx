"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  FolderGit2,
  ArrowUpRight,
} from "lucide-react";
import { Github } from "@/components/BrandIcons";

export default function GithubSection() {
  const verifiedRepositories = [
    {
      name: "Vendly.lk",
      description: "Online Business Management System (Web Application frontend & integration).",
      language: "JavaScript / React",
      langColor: "bg-yellow-400",
      url: "https://github.com/venujatech-byte/Vendly.lk.git",
      tag: "Web Platform",
    },
    {
      name: "Vendly.lk-app",
      description: "Mobile companion application for Vendly merchant operations.",
      language: "React Native / JS",
      langColor: "bg-blue-400",
      url: "https://github.com/venujatech-byte/Vendly.lk-app.git",
      tag: "Mobile",
    },
    {
      name: "Server_Launcher",
      description: "Tkinter-based desktop utility to start, stop, and monitor developer servers.",
      language: "Python",
      langColor: "bg-emerald-400",
      url: "https://github.com/venujatech-byte/Server_Launcher.git",
      tag: "Developer Tool",
    },
    {
      name: "ESP_Weather_BOT",
      description: "ESP32 weather monitoring station with real-time Telegram rain alerts.",
      language: "C++ / Python",
      langColor: "bg-sky-400",
      url: "https://github.com/venujatech-byte/ESP_Weather_BOT.git",
      tag: "IoT & Alert Bot",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Github className="w-3.5 h-3.5 text-blue-400" />
                Open Source &amp; Code Repositories
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Explore Code on GitHub
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl">
                Browse through real source code repositories spanning web apps, IoT firmware,
                and desktop utilities on{" "}
                <span className="text-blue-400 font-mono font-medium">github.com/venujatech-byte</span>.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://github.com/venujatech-byte"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              >
                <Github className="w-5 h-5" />
                Explore My GitHub
                <ArrowUpRight className="w-4 h-4" />
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
                className="p-5 rounded-2xl bg-[#080808] hover:bg-[#111111] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 font-mono text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      <FolderGit2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{repo.name}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                    <span>{repo.language}</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300">
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
