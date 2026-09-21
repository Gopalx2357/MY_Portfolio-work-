"use client";

import { useState, useEffect } from "react";
import { Terminal, Copy, Check } from "lucide-react";

interface CommandItem {
  command: string;
  output: string | string[];
  type?: "text" | "json" | "array";
}

const commands: CommandItem[] = [
  { command: "developer", output: "gopal_yadav" },
  { command: "role", output: "Full Stack & Software Developer" },
  { command: "education", output: "B.Tech (2nd Year) @ ABES Engineering College" },
  { command: "skills", output: ["C++", "React.js", "JavaScript", "Tailwind CSS", "DSA"], type: "array" },
  { command: "status", output: "open_to_internships = true", type: "json" },
  { command: "mission", output: "Build. Learn. Solve. Repeat." },
];

export default function TerminalWidget() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= commands.length) {
      setIsTyping(false);
      return;
    }

    const currentCommand = commands[currentLineIndex].command;
    let charIdx = 0;
    setDisplayedText("");
    setIsTyping(true);

    const timer = setInterval(() => {
      if (charIdx < currentCommand.length) {
        setDisplayedText((prev) => prev + currentCommand[charIdx]);
        charIdx++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
        }, 600);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [currentLineIndex]);

  const handleCopy = () => {
    const textToCopy = commands.map((c) => `$ ${c.command}\n${Array.isArray(c.output) ? c.output.join(", ") : c.output}`).join("\n");
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl shadow-violet-950/30">
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>gopal@developer:~</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white p-1 rounded transition-colors"
          title="Copy shell output"
          aria-label="Copy terminal content"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Window Body */}
      <div className="p-5 font-mono text-sm space-y-4 min-h-[300px] text-gray-300 select-none">
        {commands.slice(0, currentLineIndex).map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-300">
              <span className="text-violet-400 font-bold">$</span>
              <span>{item.command}</span>
            </div>
            <div className="pl-4 text-gray-300 leading-relaxed">
              {item.type === "array" && Array.isArray(item.output) ? (
                <span className="text-amber-300">
                  [{item.output.map((s) => `"${s}"`).join(", ")}]
                </span>
              ) : item.type === "json" ? (
                <span className="text-emerald-400 font-semibold">{String(item.output)}</span>
              ) : (
                <span className="text-indigo-200">{String(item.output)}</span>
              )}
            </div>
          </div>
        ))}

        {/* Current Active Command Typing */}
        {currentLineIndex < commands.length && (
          <div className="flex items-center gap-2 text-cyan-300">
            <span className="text-violet-400 font-bold">$</span>
            <span>{displayedText}</span>
            <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
          </div>
        )}

        {/* Finished blinking cursor */}
        {!isTyping && currentLineIndex >= commands.length && (
          <div className="flex items-center gap-2 text-cyan-300 pt-2">
            <span className="text-violet-400 font-bold">$</span>
            <span className="text-gray-500 text-xs font-sans">Ready for opportunities</span>
            <span className="w-2 h-4 bg-violet-400 animate-pulse inline-block" />
          </div>
        )}
      </div>
    </div>
  );
}
