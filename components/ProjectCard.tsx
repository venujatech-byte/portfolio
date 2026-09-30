"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
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
        className="w-full rounded-3xl overflow-hidden relative group mb-10"
        style={{
          background: "linear-gradient(135deg, rgba(14,22,42,0.92) 0%, rgba(10,15,28,0.97) 100%)",
          boxShadow: "0 32px 80px -20px rgba(0,0,0,0.7), 0 8px 32px -8px rgba(6,182,212,0.12)",
        }}
      >
        {/* Ambient glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/8 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/8 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Details & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300">
                  ★ Featured Primary Project
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300">
                  {project.category}
                </span>
                {project.role && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.role}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5">
                {project.shortDescription}
              </p>

              {/* Role Responsibilities Highlight */}
              <div
                className="p-4 rounded-2xl mb-5 text-xs text-slate-300 space-y-1.5"
                style={{ background: "rgba(255,255,255,0.035)" }}
              >
                <div className="font-semibold text-cyan-400 flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Responsibilities as Team Leader
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Led UI/UX design in Figma, structured frontend development in React,
                  coordinated team tasks using Notion & GitHub, and managed Flask & Firebase integration.
                </p>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                  boxShadow: "0 4px 20px -4px rgba(6,182,212,0.45)",
                }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Web App
              </a>
              <a
                href="https://github.com/venujatech-byte/Vendly.lk.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <Github className="w-4 h-4" />
                Web GitHub
              </a>
              <a
                href="https://github.com/venujatech-byte/Vendly.lk-app.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <Github className="w-4 h-4" />
                Mobile GitHub
              </a>
              <button
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
              >
                Full Details
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Preview — aspect-ratio prevents top/bottom gaps */}
          <div className="lg:col-span-6">
            <div
              onClick={() => onSelect(project)}
              className="cursor-pointer relative w-full rounded-2xl overflow-hidden group/img"
              style={{
                aspectRatio: "16/7",
                background: "rgba(248,250,252,0.05)",
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs text-cyan-300 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(6,12,26,0.88)", backdropFilter: "blur(8px)" }}
                >
                  <Info className="w-3.5 h-3.5" />
                  Click to inspect architecture & workflows
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
      className="rounded-2xl overflow-hidden flex flex-col justify-between relative group transition-all duration-350"
      style={{
        background: "linear-gradient(160deg, rgba(13,20,38,0.88) 0%, rgba(9,14,26,0.95) 100%)",
        boxShadow: "0 8px 32px -8px rgba(0,0,0,0.6)",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 24px 60px -12px rgba(0,0,0,0.7), 0 0 40px -16px rgba(6,182,212,0.15)",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cyan-500/8 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Project Visual Container */}
        <div
          onClick={() => onSelect(project)}
          className="relative w-full h-44 sm:h-52 overflow-hidden cursor-pointer"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-3 group-hover:scale-[1.04] transition-transform duration-400"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span
              className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-cyan-300"
              style={{ background: "rgba(6,12,26,0.82)", backdropFilter: "blur(8px)" }}
            >
              {project.category}
            </span>
          </div>
          {/* bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09101a] via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Title */}
          <h3
            onClick={() => onSelect(project)}
            className="text-base font-bold text-white tracking-tight mb-2 cursor-pointer group-hover:text-cyan-300 transition-colors"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technology Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-400"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-500">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex items-center justify-between gap-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
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
                    className="p-2 rounded-lg text-slate-400 hover:text-white transition-colors"
                    style={{ background: "rgba(255,255,255,0.06)" }}
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
        </div>
      </div>
    </motion.div>
  );
}
