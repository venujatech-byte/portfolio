"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import {
  Layout,
  Code2,
  Server,
  Cpu,
  BrainCircuit,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-violet-400" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Categorized toolkit across full-stack web engineering, microcontroller hardware,
            applied AI, and collaboration systems.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 shadow-inner">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges / Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                        skill.highlight
                          ? "bg-cyan-950/40 text-cyan-200 border border-cyan-500/30 shadow-sm shadow-cyan-950/50 hover:border-cyan-400/60 hover:text-white"
                          : "bg-slate-900/80 text-slate-300 border border-white/5 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Note for AI category */}
              {category.id === "ai-systems" && (
                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
                    Focused on practical integrations and edge deployment
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
