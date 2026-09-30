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
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects &amp; Hardware Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Real software and hardware projects built across full-stack web platforms,
            embedded microcontrollers, desktop productivity tools, and automated notifications.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
        </motion.div>

        {/* Filter Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center mb-12 overflow-x-auto pb-2 scrollbar-none"
        >
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl shadow-lg" style={{ background: "rgba(13,20,38,0.65)" }}>
            {filterOptions.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-md shadow-cyan-500/25"
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
                  className="mt-3 text-xs text-cyan-400 hover:underline"
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
