"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Users,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-white/10 shadow-2xl z-10 bg-[#0c111e]/95 p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors z-20 border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-md text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.badge}
              </span>
            )}
            {project.role && (
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <Users className="w-3 h-3" />
                Role: {project.role}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            {project.title}
          </h3>

          {/* Visual Showcase Banner */}
          <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden mb-6 border border-white/10 bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pb-6 mb-6 border-b border-white/10">
            {project.links.map((link) => {
              if (link.type === "details") return null;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    link.primary
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500"
                      : "bg-slate-800/90 text-slate-200 hover:bg-slate-700 hover:text-white border border-white/10"
                  }`}
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
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 transition-colors ml-auto"
            >
              Open dedicated page
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 text-slate-300 text-sm sm:text-base">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                Project Overview
              </h4>
              <p className="leading-relaxed text-slate-200">
                {project.detailedDescription}
              </p>
            </div>

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.problem && (
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                    <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                      The Challenge
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                    <h5 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      The Architectural Solution
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Role & Responsibilities */}
            {project.responsibilities && project.responsibilities.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  Key Responsibilities ({project.role || "Developer"})
                </h4>
                <div className="space-y-2">
                  {project.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
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
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Key Engineering Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Development Process */}
            {project.process && project.process.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  Development Process
                </h4>
                <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {project.process.map((step, i) => (
                    <li key={i} className="pl-1">
                      <span className="text-slate-200">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Technology Stack Tags */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2.5 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-white/10 text-cyan-300"
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
