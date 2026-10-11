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
  const contactPhone = "0767722934";
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

    // Note: Plug in your EmailJS, Formspree, or Resend endpoint here.
    // Example with Formspree:
    // await fetch("https://formspree.io/f/your-form-id", { method: "POST", body: JSON.stringify(formData) })

    // Simulate reliable frontend handling:
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s Build Something Together
              </h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full mt-4 mb-6" />
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I&apos;m always interested in building useful software, exploring new
                technologies, and working on challenging projects.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card with Copy button */}
              <div className="glass-panel p-4 rounded-xl flex items-center justify-between gap-3 shadow-md shadow-black/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors font-mono"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-slate-400 hover:text-white transition-colors"
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
              <div className="glass-panel p-4 rounded-xl flex items-center justify-between gap-3 shadow-md shadow-black/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">
                      Direct Contact / WhatsApp
                    </span>
                    <a
                      href={`tel:${contactPhone}`}
                      className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors font-mono"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub Link */}
              <a
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl flex items-center gap-3 shadow-md shadow-black/40 hover:bg-neutral-800/60 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-slate-300 group-hover:text-white">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">GitHub</span>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors font-mono">
                    github.com/venujatech-byte
                  </span>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl flex items-center gap-3 shadow-md shadow-black/40 hover:bg-neutral-800/60 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    LinkedIn
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors font-mono">
                    linkedin.com/in/contact-venuja-silva
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative shadow-2xl shadow-black/80">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have a question or a project proposal? Fill out the form below.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-950/30 text-center"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-white mb-1">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-4">
                    Thank you for reaching out. You can also connect directly via email at{" "}
                    <span className="text-blue-400 font-mono">{contactEmail}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-800 text-slate-200 hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
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
                      className="w-full px-4 py-3 rounded-xl border-0 bg-neutral-900/90 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
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
                      className="w-full px-4 py-3 rounded-xl border-0 bg-neutral-900/90 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, idea, or question..."
                      className="w-full px-4 py-3 rounded-xl border-0 bg-neutral-900/90 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm transition-all shadow-inner resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-2">
                    * Ready for integration with EmailJS, Formspree, or Resend.
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
