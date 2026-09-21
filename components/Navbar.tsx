"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Passions", href: "#passions" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand / Logo with Mini Profile Photo */}
        <a
          href="#"
          className="group flex items-center gap-3 px-4 py-2 rounded-full glass-card hover:border-violet-500/40 transition-all duration-300"
          aria-label="Gopal Yadav Home"
        >
          <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 flex items-center justify-center overflow-hidden shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
            <Image
              src="/gopal.jpg"
              alt="Gopal Yadav"
              width={40}
              height={40}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            Gopal<span className="text-violet-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full transition-all duration-300 ${
            scrolled ? "glass-nav shadow-2xl shadow-violet-950/40" : "glass-card"
          }`}
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:gopal.x235@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Get in touch</span>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-full glass-card text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-6xl mx-auto glass-nav rounded-2xl p-6 shadow-2xl border border-white/10"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-medium text-gray-200 hover:text-white hover:bg-violet-600/20 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10">
                <a
                  href="mailto:gopal.x235@gmail.com"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
