"use client";

import { Code2, Layout, Cpu, Sparkles, Compass } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  gradient: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    gradient: "from-violet-500 to-indigo-500",
    skills: ["C++", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend Engineering",
    icon: Layout,
    gradient: "from-indigo-500 to-cyan-400",
    skills: ["React.js", "Tailwind CSS", "Responsive Web Design"],
  },
  {
    title: "Computer Science Core",
    icon: Cpu,
    gradient: "from-cyan-400 to-emerald-400",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Logical Problem Solving"],
  },
  {
    title: "Currently Learning & Exploring",
    icon: Compass,
    gradient: "from-purple-500 to-cyan-500",
    skills: [
      "Backend Development",
      "REST APIs",
      "Databases",
      "Full Stack Development",
      "AI-powered Applications",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono text-cyan-300 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills &amp; <span className="gradient-text">Competencies</span>
          </h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 rounded-2xl glass-card border border-white/10 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg shadow-indigo-500/20`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 rounded-full text-xs font-mono bg-white/[0.04] text-gray-200 border border-white/10 hover:border-violet-400/50 hover:bg-white/[0.08] transition-all flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
