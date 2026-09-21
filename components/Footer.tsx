"use client";

import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "./Icons";
import { ArrowUp } from "lucide-react";
import ProfileAvatar from "./ProfileAvatar";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#07070c] border-t border-white/10 pt-10 pb-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright with Profile Avatar */}
        <div className="flex items-center gap-3">
          <ProfileAvatar size="sm" />
          <div className="flex flex-col items-start space-y-1">
            <h3 className="font-display text-lg font-bold text-white tracking-tight">
              Gopal Yadav
            </h3>
            <p className="text-gray-400 text-xs">
              © 2026 Gopal Yadav. ABES Engineering College student.
            </p>
          </div>
        </div>

        {/* Tech Stack note */}
        <div className="text-gray-400 text-xs text-center md:text-left">
          Built with <span className="text-cyan-400 font-medium">Next.js 14</span>, <span className="text-violet-400 font-medium">Tailwind CSS</span> & <span className="text-fuchsia-400 font-medium">Framer Motion</span>.
        </div>

        {/* Social Icons & Back To Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/gopalx2357"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-card text-gray-400 hover:text-white hover:border-white/40 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sri-krishna-gopal-yadav-874196384/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/gopal_yada.v_?stkn=MXIybW1hM3V2Z3hjcw=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-card text-gray-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/918546065479"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-card text-gray-400 hover:text-green-400 hover:border-green-500/40 transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsappIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full glass-card text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
