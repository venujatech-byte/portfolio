"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Users,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Github } from "@/components/BrandIcons";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85"
          style={{ backdropFilter: "blur(12px)" }}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl z-10 p-7 sm:p-9"
          style={{
            background: "#080808",
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white transition-colors z-20"
            style={{ background: "rgba(255,255,255,0.07)" }}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info */}
          <div className="flex flex-wrap items-center gap-2 mb-3 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/12 text-blue-400">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/12 text-blue-400">
                {project.badge}
              </span>
            )}
            {project.role && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/12 text-emerald-400 flex items-center gap-1.5">
                <Users className="w-3 h-3" />
                Role: {project.role}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-5 relative z-10">
            {project.title}
          </h3>

          {/* Visual Showcase — aspect-ratio prevents top/bottom letterbox gaps */}
          <div
            className="relative w-full rounded-2xl overflow-hidden mb-6 z-10"
            style={{
              aspectRatio: "16/7",
              background: "#050505",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pb-6 mb-6 relative z-10">
            {project.links.map((link) => {
              if (link.type === "details") return null;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${
                    link.primary
                      ? "text-white bg-blue-600 hover:bg-blue-500"
                      : "text-slate-300 hover:text-white"
                  }`}
                  style={link.primary ? undefined : {
                    background: "rgba(255,255,255,0.07)",
                  }}
                >
                  {link.type === "live" ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <Github className="w-4 h-4" />
                  )}
                  {link.label}
                </a>
              );
            })}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors ml-auto"
              style={{ background: "rgba(37,99,235,0.1)" }}
            >
              Open dedicated page
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 text-slate-300 text-sm sm:text-base relative z-10">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
                Project Overview
              </h4>
              <p className="leading-relaxed text-slate-300">
                {project.detailedDescription}
              </p>
            </div>

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.problem && (
                  <div className="p-4 rounded-2xl" style={{ background: "rgba(245,158,11,0.06)" }}>
                    <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                      The Challenge
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="p-4 rounded-2xl" style={{ background: "rgba(37,99,235,0.06)" }}>
                    <h5 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                      The Solution
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Role & Responsibilities */}
            {project.responsibilities && project.responsibilities.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  Key Responsibilities ({project.role || "Developer"})
                </h4>
                <div className="space-y-2">
                  {project.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 p-3 rounded-xl"
                      style={{ background: "#111111" }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Development Process */}
            {project.process && project.process.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  Development Process
                </h4>
                <div className="space-y-2.5 p-4 rounded-2xl" style={{ background: "#111111" }}>
                  {project.process.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-mono text-xs flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-slate-400 mt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono text-blue-400"
                    style={{ background: "rgba(37,99,235,0.1)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
