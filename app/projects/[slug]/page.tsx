import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Users,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Venuja Silva",
    };
  }

  return {
    title: `${project.title} | Venuja Silva`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Venuja Silva`,
      description: project.shortDescription,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home / Projects */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-cyan-400 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all projects
          </Link>

          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
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
                <Users className="w-3.5 h-3.5" />
                Role: {project.role}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            {project.title}
          </h1>

          {/* Project Visual Showcase */}
          <div className="relative w-full h-64 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden mb-8 border border-white/10 bg-slate-950 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 1000px"
              priority
            />
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pb-8 mb-8 border-b border-white/10">
            {project.links
              .filter((l) => l.type !== "details")
              .map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    link.primary
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 hover:scale-105 active:scale-95"
                      : "bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:text-white border border-white/10 hover:scale-105 active:scale-95"
                  }`}
                >
                  {link.type === "live" ? (
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Github className="w-4 h-4" />
                  )}
                  {link.label}
                </a>
              ))}
          </div>

          {/* Main Deep-Dive Content */}
          <div className="space-y-10 text-slate-300">
            {/* Overview */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Project Overview</h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.problem && (
                  <div className="glass-panel p-6 rounded-2xl border border-white/10">
                    <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">
                      The Problem Statement
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="glass-panel p-6 rounded-2xl border border-white/10">
                    <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      The Architectural Solution
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Role & Leadership */}
            {project.responsibilities && project.responsibilities.length > 0 && (
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  Leadership &amp; Engineering Responsibilities ({project.role || "Developer"})
                </h3>
                <div className="space-y-2.5">
                  {project.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  Key Engineering Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3 text-sm text-slate-300"
                    >
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
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-400" />
                  Development Process &amp; Milestones
                </h3>
                <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
                  {project.process.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-400 font-mono text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-slate-300 mt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                Technology Stack &amp; Protocols
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-white/10 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
