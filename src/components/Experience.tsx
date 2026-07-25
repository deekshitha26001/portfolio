"use client";

import { Users, Camera, ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto relative z-10">
      <div className="inline-flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold uppercase tracking-widest bg-sky-950/40 px-3 py-1 rounded-full border border-sky-800 mb-3">
        <Users className="w-3.5 h-3.5" />
        <span>02. Community & Outreach</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
        Beyond Coding
      </h2>

      {/* Lightweight & Honest Compact Card */}
      <div className="sathwik-card p-6 md:p-8 rounded-3xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-pink-950/50 border border-pink-800/60 flex items-center justify-center text-pink-400 shrink-0">
            <Camera className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-white">
                Educational Content Creation
              </h3>
              <span className="px-2.5 py-0.5 bg-pink-950 text-pink-300 text-xs font-mono font-bold rounded-full border border-pink-800/60">
                7K+ Tech Followers
              </span>
            </div>
            <p className="text-gray-300 text-sm md:text-base mt-2 font-sans leading-relaxed">
              I run <strong className="text-sky-300">@code.with.dee365</strong>, a DSA-focused Instagram page with 7K+ followers where I post programming, data structures, and algorithm problem-solving content.
            </p>
          </div>
        </div>

        <a
          href="https://instagram.com/code.with.dee365"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-full font-mono text-xs font-bold text-pink-300 border border-pink-800/80 bg-pink-950/40 hover:bg-pink-900/60 transition-all flex items-center gap-1.5 shrink-0 hover:no-underline"
        >
          <span>Visit @code.with.dee365</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
