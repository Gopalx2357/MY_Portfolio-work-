"use client";

import { GraduationCap, BookOpen, Sparkles, Layers } from "lucide-react";
import ProfileAvatar from "./ProfileAvatar";
import { motion } from "framer-motion";

const currentlyLearning = [
  "Backend Development",
  "REST APIs",
  "Databases",
  "Full Stack Development",
  "AI-powered Applications",
];

const focusAreas = [
  "Full Stack Web Development",
  "Data Structures & Algorithms",
  "C++ Programming",
  "Software Development",
  "Logical Problem Solving",
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono text-violet-300 border border-violet-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Background &amp; Learning</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="gradient-text">Gopal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-5 flex flex-col sm:flex-row items-start gap-6">
              <ProfileAvatar size="md" className="shrink-0" />
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  I&apos;m a second-year B.Tech CSE student at <span className="text-white font-semibold">ABES Engineering College</span>, interested in Full Stack Development, Software Development, and problem-solving.
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  I enjoy building modern, responsive, and user-friendly web applications using <span className="text-cyan-300 font-medium">React.js</span>, <span className="text-cyan-300 font-medium">JavaScript</span>, <span className="text-cyan-300 font-medium">Tailwind CSS</span>, HTML, and CSS. I also work with <span className="text-emerald-300 font-medium">MongoDB</span> and <span className="text-orange-300 font-medium">Firebase</span> for databases, authentication, and backend functionality.
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  Alongside development, I regularly practice Data Structures and Algorithms in <span className="text-violet-300 font-medium">C++</span> to improve my logical thinking and problem-solving skills.
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  I&apos;m always looking to learn new technologies, build real-world projects, contribute to open source, and collaborate with other developers. My goal is to keep growing my skills and become a strong Software Engineer.
                </p>
              </div>
            </div>

            {/* Currently Learning Pill List */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-sm font-display font-semibold text-white">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Currently Expanding Knowledge In</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {currentlyLearning.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-violet-950/40 text-violet-200 border border-violet-500/30 hover:border-cyan-400/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 h-full"
          >
            <div className="p-8 rounded-2xl glass-card border border-white/10 space-y-6 h-full flex flex-col justify-between relative group hover:border-violet-500/30 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-violet-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Education</span>
                  <h3 className="font-display text-xl font-bold text-white">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-violet-300 font-medium text-sm">
                    ABES Engineering College
                  </p>
                  <p className="text-gray-400 text-xs font-mono pt-1">
                    Currently in 2nd Year (2025 - 2029)
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                    <BookOpen className="w-4 h-4 text-violet-400" />
                    <span>Academic &amp; Practical Focus Areas</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 rounded-lg text-xs bg-white/[0.04] text-gray-300 border border-white/10"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
