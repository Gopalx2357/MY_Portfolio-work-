"use client";

import { ArrowUpRight, FolderGit2, Sparkles, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "./Icons";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projectsList: Project[] = [
  {
    title: "Nexsus eSport",
    description: "A comprehensive eSports platform tailored for gamers to participate in tournaments, track leaderboards, and manage their teams. Features secure payment integration using Razorpay for tournament entries.",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Razorpay", "MongoDB"],
    githubUrl: "https://github.com/gopalx2357",
    liveUrl: "https://nexsus-esports.vercel.app/",
  },
  {
    title: "Eye Proctor",
    description: "An automated online proctoring solution designed for secure remote exams. It utilizes AI and computer vision techniques to detect suspicious activities and ensure complete academic integrity.",
    tags: ["React", "Python", "Computer Vision", "AI"],
    githubUrl: "https://github.com/gopalx2357",
    liveUrl: "https://eye-proctor.vercel.app/",
  },
  {
    title: "InterviewPrep (In Progress)",
    description: "A platform designed to help users prepare for technical interviews with practice problems, code reviews, and simulated interview experiences.",
    tags: ["React", "Tailwind CSS", "Redux", "API Integration", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    githubUrl: "https://github.com/gopalx2357",
    liveUrl: "https://interviewprep.vercel.app/",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono text-violet-300 border border-violet-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>My Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl text-base leading-relaxed">
            Here are a few of the projects I&apos;ve built to solve real-world problems and explore new technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-7 rounded-2xl glass-card border border-white/10 glass-card-hover flex flex-col justify-between relative group"
            >
              {/* Stretched Link for the whole card */}
              {(project.liveUrl || project.githubUrl) && (
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.title}`}
                />
              )}

              <div>
                {/* Folder Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-600/20 to-cyan-600/20 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <div className="flex gap-3 text-gray-400 relative z-20">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mt-auto relative z-20">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-gray-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://github.com/gopalx2357"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white glass-card border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all group"
          >
            <span>View more on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
