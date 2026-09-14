"use client";

import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Job Application Tracker",
      description:
        "Architected a full-stack job application platform aggregating job postings from external ATS providers using custom REST APIs built with Spring Boot and Java 21. Features an asynchronous bulk onboarding pipeline supporting Excel company imports with automated validation.",
      techStack: ["React", "Next.js", "Spring Boot", "PostgreSQL", "Java 21"],
      liveDemo: "https://job-app-fawn-kappa.vercel.app/",
      github: "https://github.com/deekshitha26001",
      gradient: "from-blue-600 via-indigo-600 to-sky-500",
      accentTag: "ATS Application Pipeline",
      svgIcon: (
        <div className="flex items-center gap-3 text-white/90 font-mono text-xs">
          <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">Applied</div>
          <span className="text-white/40">→</span>
          <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">Interview</div>
          <span className="text-white/40">→</span>
          <div className="px-3 py-1.5 rounded-lg bg-emerald-400/20 text-emerald-300 font-bold border border-emerald-400/30">Offer</div>
        </div>
      ),
    },
    {
      title: "EduForge – Academic Tracker",
      description:
        "Built a full-stack learning management platform using React and Spring Boot following a three-tier Role-Based Access Control (RBAC) architecture. Integrated GitHub REST APIs to analyze commits and pull requests alongside a real-time examination system using Spring WebSockets (STOMP).",
      techStack: ["React", "Spring Boot", "PostgreSQL", "WebSockets", "GitHub API"],
      liveDemo: "https://lms-web-topaz.vercel.app/",
      github: "https://github.com/deekshitha26001",
      gradient: "from-purple-700 via-indigo-700 to-violet-500",
      accentTag: "LMS & GitHub REST Analytics",
      svgIcon: (
        <div className="flex items-center gap-1.5 text-white/80">
          <div className="w-3 h-3 rounded-xs bg-emerald-400 opacity-80" />
          <div className="w-3 h-3 rounded-xs bg-emerald-400 opacity-100" />
          <div className="w-3 h-3 rounded-xs bg-emerald-300 opacity-60" />
          <div className="w-3 h-3 rounded-xs bg-emerald-400 opacity-90" />
          <div className="w-3 h-3 rounded-xs bg-purple-300/30" />
          <span className="text-xs font-mono ml-2 text-purple-200">GitHub Contributions</span>
        </div>
      ),
    },
    {
      title: "Smart Research Assistant",
      description:
        "An AI-powered research assistant application that automates deep web research, aggregates multi-source insights, and generates comprehensive analysis reports using Gemini AI.",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Gemini API"],
      liveDemo: null,
      github: "https://github.com/deekshitha26001/smart-research-assistant",
      gradient: "from-emerald-600 via-teal-600 to-cyan-500",
      accentTag: "Gemini AI & Web Research",
      svgIcon: (
        <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs">
          <span className="px-2 py-1 bg-emerald-500/20 rounded border border-emerald-500/30">Query</span>
          <span className="text-emerald-400">→</span>
          <span className="px-2 py-1 bg-teal-500/20 rounded border border-teal-500/30">Gemini AI</span>
          <span className="text-emerald-400">→</span>
          <span className="px-2 py-1 bg-cyan-500/20 rounded border border-cyan-500/30">Insights</span>
        </div>
      ),
    },
    {
      title: "Music Player (Data Structures)",
      description:
        "Developed a console-based music player using a doubly linked list data structure for efficient playlist management and song navigation. Implemented song insertion, deletion, forward/backward traversal, playback controls, and dynamic memory management.",
      techStack: ["C Language", "Doubly Linked List", "DSA", "Memory Management"],
      liveDemo: "https://deekshitha26001.github.io/music_player/",
      github: "https://github.com/deekshitha26001",
      gradient: "from-slate-900 via-cyan-900 to-slate-800",
      accentTag: "Doubly Linked List Traversal",
      svgIcon: (
        <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs">
          <span className="px-2 py-1 bg-cyan-500/20 rounded border border-cyan-500/30">Node A</span>
          <span className="text-cyan-400">⇄</span>
          <span className="px-2 py-1 bg-cyan-500/20 rounded border border-cyan-500/30">Node B</span>
          <span className="text-cyan-400">⇄</span>
          <span className="px-2 py-1 bg-cyan-500/20 rounded border border-cyan-500/30">Node C</span>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto relative z-10 bg-grid-pattern">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold uppercase tracking-widest bg-sky-950/40 px-3 py-1 rounded-full border border-sky-800 mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>05. Portfolio Showcase</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-base md:text-lg font-sans">
          Software applications built with modern full-stack frameworks and computer science fundamentals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="sathwik-card group flex flex-col justify-between overflow-hidden border border-gray-800 cursor-pointer transition-all duration-300 relative"
          >
            {/* Primary card link opening Live Demo or GitHub */}
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View live demo of ${project.title}`}
              />
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View GitHub repository of ${project.title}`}
              />
            )}

            <div className="relative z-0">
              {/* Sleek Gradient & Vector Artwork Header */}
              <div
                className={`relative w-full h-44 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Pattern Grid Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 flex justify-start items-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/90 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 font-bold">
                    {project.accentTag}
                  </span>
                </div>

                <div className="relative z-10">{project.svgIcon}</div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-xs leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4 font-mono text-[11px]">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 bg-gray-800/80 text-gray-300 rounded-md font-medium border border-gray-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="px-6 pb-6 pt-0 flex items-center justify-between gap-3 relative z-20">
              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-xl font-mono text-xs font-bold group-hover:bg-sky-400 group-hover:text-gray-950 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 bg-gray-800/60 text-gray-400 px-3 py-2 rounded-xl font-mono text-xs font-medium border border-gray-700/50">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Runs Locally
                </span>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800/90 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-xl font-mono text-xs font-bold transition-colors border border-gray-700/80"
                title="View Source Code on GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

