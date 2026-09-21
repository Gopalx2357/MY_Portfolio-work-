"use client";

import { Sparkles, Calendar, GraduationCap, CheckCircle2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const openToOpportunities = [
  "Software Development Internships",
  "Full Stack Development Internships",
  "Open Source Contributions",
  "Collaborative Projects",
  "Hackathons & Coding Competitions",
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono text-cyan-300 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Academic &amp; Developer Timeline</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My <span className="gradient-text">Journey &amp; Status</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-2xl glass-card border border-white/10 relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white shrink-0 shadow-lg shadow-violet-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                      Present (2nd Year)
                    </span>
                    <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      ABES Engineering College
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Student &amp; Aspiring Software Developer
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base pt-2">
                    Pursuing B.Tech while actively building skills in software development, full stack web development, and Data Structures &amp; Algorithms. Working on personal and academic projects, practicing programming problems daily in C++, and exploring emerging software technologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Currently Open To Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 h-full"
          >
            <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Currently Open To
                  </h3>
                  <p className="text-xs font-mono text-violet-300">
                    Seeking growth &amp; collaboration
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                {openToOpportunities.map((opportunity) => (
                  <div
                    key={opportunity}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-sm text-gray-200 font-medium">
                      {opportunity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
