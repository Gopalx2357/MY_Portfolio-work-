"use client";

import Image from "next/image";

interface ProfileAvatarProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ProfileAvatar({
  size = "md",
  className = "",
}: ProfileAvatarProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-28 h-28 sm:w-32 sm:h-32",
    lg: "w-40 h-40 sm:w-48 sm:h-48",
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Dynamic Ambient Gradient Aura */}
      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 blur-lg opacity-75 animate-pulse-glow" />

      {/* Realistic Profile Image Container */}
      <div
        className={`relative ${sizeClasses[size]} rounded-full p-1 bg-[#07070c] border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden group`}
      >
        <Image
          src="/gopal.jpg"
          alt="Gopal Yadav"
          width={250}
          height={250}
          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>

      {/* Live Active Status Badge */}
      <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#07070c] shadow-lg flex items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      </div>
    </div>
  );
}
