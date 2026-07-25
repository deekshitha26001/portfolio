"use client";

import { Mail, Phone, Camera, Send, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold uppercase tracking-widest bg-sky-950/50 px-3 py-1 rounded-full border border-sky-800/80 mb-4">
        <MessageSquare className="w-3.5 h-3.5" />
        <span>07. What's Next?</span>
      </div>

      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        Let's Work Together
      </h2>

      <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-12 font-sans leading-relaxed">
        I am currently seeking full-time AI/ML Engineering & Web Development opportunities. Whether you have an open role, a project idea, or just want to connect—my inbox is always open!
      </p>

      {/* Main CTA Email Button */}
      <div className="mb-16">
        <a
          href="mailto:deekshi26001@gmail.com"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-gray-950 px-9 py-4 rounded-full font-mono font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-sky-500/20 hover:scale-105"
        >
          <Send className="w-5 h-5" />
          <span>Say Hello in Email</span>
        </a>
      </div>

      {/* Links & Social Cards Container (Sathwik Batta Style) */}
      <div className="sathwik-card p-8 rounded-3xl border border-gray-800/80 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {/* Email */}
        <a
          href="mailto:deekshi26001@gmail.com"
          className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 text-gray-300 hover:text-sky-400 hover:border-sky-500/40 transition-all flex flex-col items-center gap-2.5 group"
        >
          <Mail className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-mono font-medium">Email</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+919980091837"
          className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 text-gray-300 hover:text-sky-400 hover:border-sky-500/40 transition-all flex flex-col items-center gap-2.5 group"
        >
          <Phone className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-mono font-medium">Phone</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/deekshithap26"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 text-gray-300 hover:text-sky-400 hover:border-sky-500/40 transition-all flex flex-col items-center gap-2.5 group"
        >
          <svg className="w-6 h-6 fill-[#0A66C2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6z" />
          </svg>
          <span className="text-xs font-mono font-medium">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/deekshitha26001"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 text-gray-300 hover:text-sky-400 hover:border-sky-500/40 transition-all flex flex-col items-center gap-2.5 group"
        >
          <svg className="w-6 h-6 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="text-xs font-mono font-medium">GitHub</span>
        </a>

        {/* LeetCode Direct Profile Link */}
        <a
          href="https://leetcode.com/u/Deekshitha_patil/"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 text-gray-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex flex-col items-center gap-2.5 group"
        >
          <svg className="w-6 h-6 fill-[#FFA116] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.22.45-1.685 0l-4.57-4.42a1.2 1.2 0 010-1.686l4.57-4.42c.465-.45 1.219-.45 1.685 0l2.697 2.607a1.23 1.23 0 001.734 0 1.2 1.2 0 000-1.686l-2.697-2.608a3.633 3.633 0 00-5.153 0L5.416 12.75a3.6 3.6 0 000 5.056l4.57 4.42a3.633 3.633 0 005.153 0l2.697-2.607a1.23 1.23 0 000-1.687 1.23 1.23 0 00-1.734-.002zM19.467 9.878a1.23 1.23 0 000-1.735 1.2 1.2 0 00-1.685 0l-7.618 7.37c-.465.45-1.219.45-1.685 0l-3.32-3.21a1.2 1.2 0 00-1.685 0 1.23 1.23 0 000 1.735l3.32 3.21a3.633 3.633 0 005.153 0l7.618-7.37z" />
          </svg>
          <span className="text-xs font-mono font-medium">LeetCode</span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/code.with.dee365"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 text-gray-300 hover:text-pink-400 hover:border-pink-500/40 transition-all flex flex-col items-center gap-2.5 group"
        >
          <Camera className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-mono font-medium">Instagram</span>
        </a>
      </div>
    </section>
  );
}
