"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Users,
  Info,
} from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const isFeatured = project.featured;

  if (isFeatured) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="w-full glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-cyan-500/30 p-6 sm:p-8 relative group mb-10 shadow-xl shadow-cyan-950/20"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Details & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  ★ Featured Primary Project
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {project.category}
                </span>
                {project.role && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    Role: {project.role}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                {project.shortDescription}
              </p>

              {/* Role Responsibilities Highlight */}
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/5 mb-5 text-xs text-slate-300 space-y-1.5">
                <div className="font-semibold text-cyan-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Responsibilities as Team Leader:
                </div>
                <p className="text-slate-300">
                  Led UI/UX design in Figma, structured frontend development in React,
                  coordinated team tasks using Notion &amp; GitHub, and managed Flask &amp; Firebase integration.
                </p>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/90 text-slate-200 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Separate Buttons: Live Web App, Web GitHub, Mobile GitHub, View Details */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://vendly-lk.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                Live Web App
              </a>
              <a
                href="https://github.com/venujatech-byte/Vendly.lk.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 transition-all hover:scale-105 active:scale-95"
              >
                <Github className="w-4 h-4" />
                Web GitHub
              </a>
              <a
                href="https://github.com/venujatech-byte/Vendly.lk-app.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 transition-all hover:scale-105 active:scale-95"
              >
                <Github className="w-4 h-4" />
                Mobile GitHub
              </a>
              <button
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 transition-colors ml-auto"
              >
                View Full Details
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Preview Mockup */}
          <div
            onClick={() => onSelect(project)}
            className="lg:col-span-6 cursor-pointer relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden border border-white/10 bg-slate-950 group-hover:border-cyan-500/40 transition-colors shadow-2xl"
          >
            <Image
              src={project.image}
              alt="Vendly.lk Platform Showcase"
              fill
              className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
              sizes="(max-width: 1024px) 100vw, 600px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs text-cyan-300 flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-full border border-white/10">
                <Info className="w-3.5 h-3.5" />
                Click to inspect full architecture &amp; workflows
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard Project Card
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 p-5 sm:p-6 relative group"
    >
      <div>
        {/* Project Visual Container */}
        <div
          onClick={() => onSelect(project)}
          className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-4 border border-white/10 bg-slate-950 cursor-pointer group-hover:border-cyan-500/40 transition-colors"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute top-2.5 left-2.5">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900/90 text-cyan-300 border border-white/10 backdrop-blur-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelect(project)}
          className="text-lg font-bold text-white tracking-tight mb-2 cursor-pointer group-hover:text-cyan-300 transition-colors"
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Technology Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.links
            .filter((l) => l.type !== "details")
            .map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title={link.label}
                aria-label={link.label}
              >
                {link.type === "live" ? (
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                ) : (
                  <Github className="w-3.5 h-3.5" />
                )}
              </a>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
