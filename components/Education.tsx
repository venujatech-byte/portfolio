"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  ChevronDown,
  ChevronUp,
  Bot,
  FlaskConical,
  Lightbulb,
  TreePine,
  ShieldCheck,
} from "lucide-react";

export default function Education() {
  const [showAllOL, setShowAllOL] = useState(false);

  const alResults = [
    { subject: "Chemistry", grade: "A", highlight: true },
    { subject: "Physics", grade: "B", highlight: false },
    { subject: "Biology", grade: "C", highlight: false },
    { subject: "General English", grade: "A", highlight: true },
  ];

  const olResults = [
    { subject: "English Language", grade: "A", highlight: true },
    { subject: "Mathematics", grade: "A", highlight: true },
    { subject: "Science", grade: "A", highlight: true },
    { subject: "I.C.T", grade: "A", highlight: true },
    { subject: "Business Studies", grade: "A", highlight: true },
    { subject: "History", grade: "A", highlight: true },
    { subject: "Buddhism", grade: "A", highlight: true },
    { subject: "Sinhala Language", grade: "A", highlight: true },
    { subject: "English Literature", grade: "B", highlight: false },
  ];

  const extracurriculars = [
    {
      title: "Robotics Society",
      role: "Active Member",
      school: "Nalanda College Colombo",
      icon: Bot,
      desc: "Hardware circuitry experimentation, logic controllers, and autonomous robotics projects.",
    },
    {
      title: "Science Society",
      role: "Active Member",
      school: "Nalanda College Colombo",
      icon: FlaskConical,
      desc: "Explored applied scientific inquiry, physical sciences, and academic exhibitions.",
    },
    {
      title: "New Invention Society",
      role: "Active Member",
      school: "Nalanda College Colombo",
      icon: Lightbulb,
      desc: "Ideation of practical engineering solutions and participation in innovation challenges.",
    },
    {
      title: "Environmental Society",
      role: "Active Member",
      school: "Nalanda College Colombo",
      icon: TreePine,
      desc: "Community sustainability initiatives, environmental advocacy, and conservation projects.",
    },
    {
      title: "Taekwondo",
      role: "Athlete & Competitor",
      school: "Martial Arts Athletics",
      icon: ShieldCheck,
      desc: "Trained in competitive martial arts, fostering mental discipline, stamina, and resilience.",
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 relative bg-black">
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
            <span className="eyebrow">05 — Education &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Academic Milestones &amp; <span className="text-blue-500">Qualifications</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Formal computer science degree, project-based induction program, secondary education
            at Nalanda College Colombo, and extracurricular leadership.
          </p>
        </motion.div>

        {/* Higher Education & Induction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* BSc Degree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="surface-card p-7 sm:p-9 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="chip text-[11px] border-blue-600/40 text-blue-400 font-semibold">
                  Undergraduate Degree
                </span>
                <span className="text-xs text-neutral-500 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Upcoming Jan 2027
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                BSc (Hons) in Computer Science
              </h3>
              <p className="text-neutral-300 text-sm font-semibold mb-4">
                University of Westminster, UK &amp; Informatics Institute of Technology (IIT), Sri Lanka
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                Curriculum covering data structures, algorithms, object-oriented design, distributed
                systems, cloud computing, and advanced software engineering principles.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 flex items-center gap-2 text-xs text-neutral-400">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Full Degree Program (Affiliated UK Campus)</span>
            </div>
          </motion.div>

          {/* InfoSchol Induction Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="surface-card p-7 sm:p-9 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="chip text-[11px] border-blue-600/40 text-blue-400 font-semibold">
                  9-Week Intensive
                </span>
                <span className="text-xs text-neutral-500 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  July 2026 – Sept 2026
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                InfoSchol Induction Program
              </h3>
              <p className="text-neutral-300 text-sm font-semibold mb-4">
                Informatics Institute of Technology (IIT), Sri Lanka
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                Hands-on project-based engineering program emphasizing programming fundamentals,
                collaborative agile leadership, communication, and rapid prototyping. Culminated in the
                end-to-end architecture and Demo Day presentation of Vendly.lk.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Demo Day Project Lead (Vendly.lk)</span>
              </div>
              <span className="font-mono text-neutral-500 text-[11px]">ID: 20260631</span>
            </div>
          </motion.div>
        </div>

        {/* Secondary Education (Nalanda College Colombo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* GCE Advanced Level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="surface-card p-7 sm:p-9"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="chip text-[11px] border-neutral-800 text-neutral-300 font-medium">
                GCE Advanced Level (2023 A/L)
              </span>
              <span className="text-xs text-neutral-500 font-mono">Jan 2024</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight mb-1">
              Nalanda College, Colombo
            </h3>
            <p className="text-xs text-blue-400 font-mono mb-4">
              Biological Science Stream • Index: 6057985
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
              Rigorous analytical preparation in natural sciences, developing critical deduction,
              empirical modeling, and mathematical problem-solving skills.
            </p>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {alResults.map((res) => (
                <div
                  key={res.subject}
                  className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80 flex items-center justify-between"
                >
                  <span className="text-xs text-neutral-300">{res.subject}</span>
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      res.grade === "A"
                        ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                        : "bg-neutral-800 text-neutral-300 border border-neutral-700"
                    }`}
                  >
                    Grade {res.grade}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GCE Ordinary Level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="surface-card p-7 sm:p-9"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="chip text-[11px] border-neutral-800 text-neutral-300 font-medium">
                GCE Ordinary Level (2020 O/L)
              </span>
              <span className="text-xs text-neutral-500 font-mono">March 2021</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight mb-1">
              Nalanda College, Colombo
            </h3>
            <p className="text-xs text-blue-400 font-mono mb-4">
              Sinhala Medium • Index: 60107448 • 8 As &amp; 1 B
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
              Excellence across mathematics, sciences, information communication technology,
              business studies, and languages.
            </p>

            {/* Results Grid with Collapsible Expansion */}
            <div className="grid grid-cols-2 gap-2.5">
              {(showAllOL ? olResults : olResults.slice(0, 4)).map((res) => (
                <div
                  key={res.subject}
                  className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80 flex items-center justify-between"
                >
                  <span className="text-xs text-neutral-300 truncate mr-2">{res.subject}</span>
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded shrink-0 ${
                      res.grade === "A"
                        ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                        : "bg-neutral-800 text-neutral-300 border border-neutral-700"
                    }`}
                  >
                    {res.grade}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowAllOL(!showAllOL)}
              className="mt-4 w-full py-2 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-medium text-neutral-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{showAllOL ? "Show Less" : "View All 9 Subject Results (8 As, 1 B)"}</span>
              {showAllOL ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </motion.div>
        </div>

        {/* Extracurricular Societies & Taekwondo */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="rule-accent" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              Extracurricular Activities &amp; Athletics
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {extracurriculars.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="surface-card p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{activity.title}</h4>
                    <p className="text-[11px] text-blue-400 font-mono mb-2">{activity.role}</p>
                    <p className="text-xs text-neutral-400 leading-relaxed">{activity.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-900">
                    <span className="text-[10px] text-neutral-500 font-mono block">
                      {activity.school}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

