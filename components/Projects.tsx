"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Layers } from "lucide-react";

type FilterCategory = "All" | "Web" | "Mobile" | "AI" | "IoT" | "Developer Tools";

const filterOptions: FilterCategory[] = [
  "All",
  "Web",
  "Mobile",
  "AI",
  "IoT",
  "Developer Tools",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) =>
      project.filterCategories.includes(
        activeFilter as "Web" | "Mobile" | "AI" | "IoT" | "Developer Tools"
      )
    );
  }, [activeFilter]);

  const featuredProject = filteredProjects.find((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="rule-accent" />
            <span className="eyebrow">03 — Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Selected Projects &amp; <span className="text-blue-500">Systems</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Real software and hardware projects spanning full-stack web platforms,
            embedded microcontrollers, desktop productivity tools, and cloud alerting pipelines.
          </p>
        </motion.div>

        {/* Filter Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-start sm:justify-center mb-12 overflow-x-auto pb-2 scrollbar-none"
        >
          <div className="flex items-center gap-1.5 p-1 rounded-full border border-neutral-900 bg-neutral-950/80">
            {filterOptions.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Primary Featured Project (Vendly) if visible under current filter */}
            {featuredProject && (
              <ProjectCard
                project={featuredProject}
                onSelect={(p) => setSelectedProject(p)}
              />
            )}

            {/* Regular Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16 glass-panel rounded-2xl p-8">
                <Layers className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                <p className="text-slate-300 font-medium">No projects in this category</p>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="mt-3 text-xs text-blue-400 hover:underline"
                >
                  Reset filters to All
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
