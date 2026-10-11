"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Users,
  Info,
} from "lucide-react";
import { Github } from "@/components/BrandIcons";
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
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.45 }}
        className="w-full surface-card rounded-3xl overflow-hidden relative group mb-12"
      >
        <div className="relative z-10 p-8 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Details & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="chip border-blue-600/30 text-blue-400">
                  ★ Featured Flagship Platform
                </span>
                <span className="chip">
                  {project.category}
                </span>
                {project.role && (
                  <span className="chip border-emerald-500/30 text-emerald-400 gap-1.5">
                    <Users className="w-3 h-3" />
                    {project.role}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                {project.shortDescription}
              </p>

              {/* Role Responsibilities Highlight */}
              <div className="p-4 rounded-xl mb-6 text-xs text-neutral-300 space-y-1.5 bg-neutral-950 border border-neutral-900">
                <div className="font-semibold text-blue-400 flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Responsibilities as Team Leader
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  Led UI/UX design in Figma, structured modular frontend development in React,
                  coordinated team milestones using Notion &amp; GitHub, and integrated Flask APIs with Firebase.
                </p>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://vendly-lk.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-blue-600/25"
              >
                <span>Live Web App</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://github.com/venujatech-byte/Vendly.lk.git"
                target="_blank"
                rel="noopener noreferrer"
                className="chip gap-2 text-neutral-200 hover:text-white"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Web GitHub</span>
              </a>
              <a
                href="https://github.com/venujatech-byte/Vendly.lk-app.git"
                target="_blank"
                rel="noopener noreferrer"
                className="chip gap-2 text-neutral-200 hover:text-white"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Mobile GitHub</span>
              </a>
              <button
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors ml-auto py-2"
              >
                Architecture &amp; Details
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Preview */}
          <div className="lg:col-span-6">
            <div
              onClick={() => onSelect(project)}
              className="cursor-pointer relative w-full rounded-2xl overflow-hidden group/img border border-neutral-900 bg-neutral-950"
              style={{
                aspectRatio: "16/9",
              }}
            >
              <Image
                src={project.image}
                alt="Vendly.lk Platform Showcase"
                fill
                className="object-contain group-hover/img:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 620px"
                priority
              />
              <div className="absolute bottom-3 left-3">
                <span
                  className="chip text-[11px] gap-1.5 bg-black/90 backdrop-blur-md text-blue-400 border-neutral-800"
                >
                  <Info className="w-3.5 h-3.5" />
                  Click to inspect full architecture
                </span>
              </div>
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
      className="surface-card rounded-2xl overflow-hidden flex flex-col justify-between group"
    >
      <div>
        {/* Project Visual Container */}
        <div
          onClick={() => onSelect(project)}
          className="relative w-full h-48 overflow-hidden cursor-pointer bg-neutral-950 border-b border-neutral-900"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-4 group-hover:scale-[1.04] transition-transform duration-400"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="chip py-0.5 px-2.5 text-[10px] bg-black/90 border-neutral-800 text-blue-400">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3
            onClick={() => onSelect(project)}
            className="text-lg font-bold text-white tracking-tight mb-2 cursor-pointer group-hover:text-blue-400 transition-colors"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technology Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="chip py-0 px-2 text-[10px]">
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[10px] font-mono text-neutral-500 py-0.5 px-1">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-neutral-900/60 mt-auto">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors pt-4"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2 pt-4">
          {project.links
            .filter((l) => l.type !== "details")
            .map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
                title={link.label}
                aria-label={link.label}
              >
                {link.type === "live" ? (
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
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
