"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import {
  Layout,
  Code2,
  Server,
  Cpu,
  Terminal,
  Users,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-blue-500" />;
      case "Server":
        return <Server className="w-5 h-5 text-blue-500" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-blue-500" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-blue-500" />;
      case "Users":
        return <Users className="w-5 h-5 text-blue-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-black">
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
            <span className="eyebrow">02 — Skills &amp; Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Technical Stack &amp; <span className="text-blue-500">Core Tooling</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Proficiencies across software engineering, embedded microcontrollers,
            cloud backends, systems tooling, and collaborative team leadership.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="surface-card p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`chip ${
                        skill.highlight
                          ? "border-blue-600/40 text-blue-300 font-semibold"
                          : ""
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
