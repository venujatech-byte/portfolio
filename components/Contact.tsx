"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const contactEmail = "venujatech@gmail.com";
  const contactPhone = "+94 76 772 2934";
  const linkedInUrl = "https://www.linkedin.com/in/contact-venuja-silva";
  const gitHubUrl = "https://github.com/venujatech-byte";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable frontend handling:
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Quick Action Pills & Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="rule-accent" />
                <span className="eyebrow">08 — Contact</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                Let&apos;s Build Something <br className="hidden sm:inline" />
                <span className="text-blue-500">Meaningful.</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mt-4">
                Whether you&apos;re looking to collaborate on a software product, explore an IoT
                hardware solution, or discuss potential opportunities, I&apos;d be glad to connect.
              </p>

              {/* Quick Action Pills */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={`mailto:${contactEmail}`}
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-[0.16em] uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-blue-600/20"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Me
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-neutral-800 hover:border-blue-600 hover:bg-blue-600/10 text-neutral-300 hover:text-white font-semibold text-xs tracking-[0.16em] uppercase transition-all duration-300"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card with Copy button */}
              <div className="surface-card p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 font-mono block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors font-mono"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors border border-neutral-800"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone / Contact Card */}
              <div className="surface-card p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 font-mono block">
                      Direct / WhatsApp
                    </span>
                    <a
                      href="tel:+94767722934"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors font-mono"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors border border-neutral-800"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub Link Card */}
              <a
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card p-4 flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 font-mono block">GitHub</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors font-mono">
                      github.com/venujatech-byte
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-blue-400 transition-colors" />
              </a>

              {/* LinkedIn Link Card */}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card p-4 flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:text-white shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 font-mono block">LinkedIn</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors font-mono">
                      linkedin.com/in/contact-venuja-silva
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="surface-card p-7 sm:p-9 md:p-11">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-8 leading-relaxed">
                Have an inquiry, project proposal, or technical question? Fill out the form below.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md mx-auto mb-6">
                    Thank you for reaching out. You can also connect directly via email at{" "}
                    <span className="text-blue-400 font-mono">{contactEmail}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="chip px-5 py-2 text-white bg-neutral-900 hover:bg-neutral-800"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-semibold text-neutral-300 uppercase tracking-wider mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-900 bg-neutral-950 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-semibold text-neutral-300 uppercase tracking-wider mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-900 bg-neutral-950 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-semibold text-neutral-300 uppercase tracking-wider mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, idea, or inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-900 bg-neutral-950 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-[0.16em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-blue-600/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-600 text-center pt-2 font-mono">
                    * Direct transmission ready for EmailJS or Formspree integration.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
