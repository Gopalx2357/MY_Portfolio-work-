"use client";

import { useState } from "react";
import { Copy, Check, ArrowUpRight, Sparkles, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "gopal.x235@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-t from-violet-600/20 via-indigo-600/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 relative overflow-hidden text-center flex flex-col items-center space-y-8">
          {/* Header */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono text-cyan-300 border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Let&apos;s Connect</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Let&apos;s Build Something <span className="gradient-text">Together</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I&apos;m currently looking for software development internships, open-source opportunities, and collaborative projects where I can learn, contribute, and build meaningful solutions.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              If you have an opportunity or want to work together, feel free to reach out via email or connect with me on social platforms.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
            <a
              href={`mailto:${email}`}
              className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Send an Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full text-sm font-medium text-gray-200 glass-card glass-card-hover border border-white/10 hover:text-white transition-all"
              title="Copy Email Address"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs">Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 w-full">
            <a
              href="https://github.com/gopalx2357"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass-card border border-white/10 glass-card-hover flex items-center justify-center text-cyan-400 group"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/sri-krishna-gopal-yadav-874196384"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass-card border border-white/10 glass-card-hover flex items-center justify-center text-indigo-400 group"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com/gopal_yada.v_?stkn=MXIybW1hM3V2Z3hjcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass-card border border-white/10 glass-card-hover flex items-center justify-center text-pink-400 group"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://wa.me/918546065479"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass-card border border-white/10 glass-card-hover flex items-center justify-center text-green-400 group"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
