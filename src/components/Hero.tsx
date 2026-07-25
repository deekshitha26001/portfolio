"use client";

import Image from "next/image";
import { ArrowDown, Sparkles, ArrowUpRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between items-center px-4 pt-28 pb-32 overflow-hidden bg-grid-pattern">
      <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center my-auto w-full">
        {/* Profile Avatar Container — Centered & Properly Aligned */}
        <div className="relative mb-8 group cursor-pointer flex justify-center items-center">
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 shadow-2xl transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
              <Image
                src="/profile.png"
                alt="Deekshitha P - AI/ML Engineer & Full-Stack Developer"
                fill
                priority
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover object-[center_25%] filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Status Badge */}
          <div className="absolute bottom-1 right-3 bg-emerald-500 text-gray-950 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border-2 border-white dark:border-gray-900 flex items-center gap-1.5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping" />
            AVAILABLE FOR HIRE
          </div>
        </div>

        {/* Name Title & Rotating Badge */}
        <div className="relative flex flex-col items-center justify-center mb-4">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-3xl md:text-5xl animate-bounce">👋</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white font-sans">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:to-sky-300 bg-clip-text text-transparent">Deekshitha P</span>
            </h1>

            {/* Rotating Circular Text Stamp Badge */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center group/badge">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] font-mono font-bold tracking-widest uppercase fill-blue-600 dark:fill-cyan-400">
                  <textPath href="#circlePath" startOffset="0%">
                    • CLICK HERE • CLICK HERE •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-cyan-500/20 border border-blue-200 dark:border-cyan-400/50 flex items-center justify-center text-blue-600 dark:text-cyan-300 group-hover/badge:scale-125 transition-transform">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle & Role Badges */}
        <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-sky-300 mb-4 tracking-wide font-mono flex items-center justify-center gap-2 flex-wrap">
          <span>AI/ML Engineer</span>
          <span className="text-gray-400">•</span>
          <span>Full-Stack Web Developer</span>
        </h2>

        {/* Brief Concise Pitch */}
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-sans font-normal">
          Final-year Artificial Intelligence & Machine Learning student at <span className="text-blue-600 dark:text-sky-400 font-semibold">Rajarajeswari College of Engineering</span> (CGPA 8.8). Building production-ready full-stack applications with React, Next.js, Spring Boot, and PostgreSQL.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-4">
          <a
            href="#projects"
            className="group px-8 py-3.5 rounded-full font-mono text-sm font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-blue-600 dark:hover:bg-sky-400 dark:hover:text-gray-950 transition-all duration-300 shadow-md flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#resume"
            className="group px-8 py-3.5 rounded-full font-mono text-sm font-semibold text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 hover:border-blue-600 dark:hover:border-sky-400 transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
          >
            <FileText className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>View Resume</span>
          </a>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div className="z-10 flex flex-col items-center gap-2 pt-2">
        <a href="#about" aria-label="Scroll to About section" className="text-gray-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors animate-bounce p-2">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
