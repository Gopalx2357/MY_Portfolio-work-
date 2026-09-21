"use client";

import { Sparkles, Code2, Cpu, Brain, Target, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface PassionItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const passions: PassionItem[] = [
  {
    title: "Full Stack Development",
    subtitle: "Building Real-World Web Applications",
    description: "I enjoy turning ideas into responsive, practical web applications using modern technologies like React, JavaScript, and backend frameworks.",
    icon: Code2,
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    title: "Software Engineering",
    subtitle: "Writing Code That Makes Sense",
    description: "Focusing on clean, maintainable, and efficient code, I strive to create software that is robust, scalable, and user-friendly.",
    icon: ShieldCheck,
    gradient: "from-indigo-500 to-cyan-400",
  },
  {
    title: "Data Structures & Algorithms",
    subtitle: "Problem Solving Through DSA",
    description: "Building strong problem-solving skills with DSA and C++, focusing on logical thinking, efficient algorithms, and writing optimized solutions for real-world problems.",
    icon: Cpu,
    gradient: "from-cyan-400 to-emerald-400",
  },
  {
    title: "Projects & Innovation",
    subtitle: "Building, Testing & Improving",
    description: "I enjoy turning ideas into practical, working projects through hands-on development, experimentation, and hackathons, while continuously improving them based on real-world needs.",
    icon: Brain,
    gradient: "from-purple-500 to-cyan-500",
  },
];

export default function Passions() {
  return (
    <section id="passions" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono text-violet-300 border border-violet-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Values &amp; Ambitions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Passions &amp; <span className="gradient-text">Career Objective</span>
          </h2>
        </div>

        {/* 4 Passions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {passions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-card border border-white/10 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-4 shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 block mb-3">
                    {item.subtitle}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlighted Career Objective Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-violet-950/60 via-indigo-950/40 to-cyan-950/40 border border-violet-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-400/30 text-xs font-mono">
              <Target className="w-3.5 h-3.5 text-cyan-400" />
              <span>Career Objective</span>
            </div>

            <blockquote className="font-display text-xl sm:text-2xl font-bold text-white leading-relaxed tracking-tight">
              &ldquo;Passionate about software development, DSA, AI, and full-stack technologies, I aim to build practical solutions for real-world problems while continuously learning, improving, and growing as a Software Engineer.&rdquo;
            </blockquote>

            <p className="text-sm font-mono text-cyan-300 pt-2">
              — Gopal Yadav | ABES Engineering College
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
