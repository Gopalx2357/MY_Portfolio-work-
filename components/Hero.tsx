"use client";

import { ArrowDown, Mail, ArrowUpRight, Orbit } from "lucide-react";
import TerminalWidget from "./TerminalWidget";
import ProfileAvatar from "./ProfileAvatar";
import { motion, Variants } from "framer-motion";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "./Icons";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden z-10">
      {/* Dynamic Cosmic Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-violet-600/25 via-indigo-600/20 to-cyan-500/25 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          {/* Avatar & Status Pill Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <ProfileAvatar size="sm" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10 hover:border-cyan-400/40 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <Orbit className="w-3.5 h-3.5 text-violet-400 animate-spin-slow" />
              <span>2nd Year B.Tech Student @ ABES EC</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
          >
            Exploring technology, building projects &amp; solving{" "}
            <span className="gradient-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              real-world problems
            </span>
            .
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-sans"
          >
            Hi, I&apos;m <span className="text-white font-semibold">Gopal Yadav</span> — a Full Stack Developer &amp; Software Engineer passionate about React.js, Tailwind CSS, C++ Data Structures &amp; Algorithms, and AI-powered applications.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:gopal.x235@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/gopalx2357"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full glass-card glass-card-hover border border-white/10 hover:text-white transition-all"
            >
              <GithubIcon className="w-5 h-5 text-cyan-400" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.linkedin.com/in/sri-krishna-gopal-yadav-874196384"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full glass-card glass-card-hover border border-white/10 hover:text-white transition-all"
            >
              <LinkedinIcon className="w-5 h-5 text-indigo-400" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.instagram.com/gopal_yada.v_?stkn=MXIybW1hM3V2Z3hjcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full glass-card glass-card-hover border border-white/10 hover:text-white transition-all"
            >
              <InstagramIcon className="w-5 h-5 text-pink-400" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/918546065479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full glass-card glass-card-hover border border-white/10 hover:text-white transition-all"
            >
              <WhatsappIcon className="w-5 h-5 text-green-400" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column Terminal Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 w-full relative"
        >
          {/* Animated Glow Aura Behind Terminal */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 -z-10 animate-pulse" />
          <TerminalWidget />
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-16 sm:mt-24"
      >
        <a
          href="#about"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-mono text-gray-400 hover:text-white hover:border-violet-500/40 transition-all duration-300"
          aria-label="Scroll down to About section"
        >
          <span>Explore my background</span>
          <ArrowDown className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
