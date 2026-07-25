"use client";

import { useState } from "react";
import { Eye, User, Sparkles } from "lucide-react";
import ResumeViewer from "./ResumeViewer";

export default function About() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-blue-600 dark:text-sky-400 font-mono text-xs font-semibold uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 mb-3">
          <User className="w-3.5 h-3.5" />
          <span>01. Background & Bio</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Engineering & Technical Focus
        </h2>

        {/* Inline logos paragraph matching Sathwik Batta reference */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-sans font-normal">
          Final-year Artificial Intelligence & Machine Learning student at{" "}
          <span className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-sky-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 rounded-md border border-blue-200 dark:border-blue-800">
            🎓 Rajarajeswari College of Engineering
          </span>{" "}
          (CGPA <strong className="text-gray-900 dark:text-white font-bold">8.8</strong>). 
          Secured 3rd place in{" "}
          <span className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800">
            🏆 AGENTC AI Hackathon
          </span>{" "}
          by Pongu Ventures. Solved <strong className="text-gray-900 dark:text-white font-bold">200+</strong> algorithmic problems on{" "}
          <a
            href="https://leetcode.com/u/Deekshitha_patil/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-0.5 rounded-md border border-amber-200 dark:border-amber-800 hover:underline"
          >
            <svg className="w-4 h-4 fill-amber-500" viewBox="0 0 24 24">
              <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.22.45-1.685 0l-4.57-4.42a1.2 1.2 0 010-1.686l4.57-4.42c.465-.45 1.219-.45 1.685 0l2.697 2.607a1.23 1.23 0 001.734 0 1.2 1.2 0 000-1.686l-2.697-2.608a3.633 3.633 0 00-5.153 0L5.416 12.75a3.6 3.6 0 000 5.056l4.57 4.42a3.633 3.633 0 005.153 0l2.697-2.607a1.23 1.23 0 000-1.687 1.23 1.23 0 00-1.734-.002z" />
            </svg>
            LeetCode Profile
          </a>{" "}
          and manage a 7K+ developer community on{" "}
          <a
            href="https://instagram.com/code.with.dee365"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/40 px-2.5 py-0.5 rounded-md border border-pink-200 dark:border-pink-800 hover:underline"
          >
            📸 @code.with.dee365
          </a>.
        </p>
      </div>

      {/* Resume Container Anchor & Interactive Card */}
      <div id="resume" className="sathwik-card p-8 md:p-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200 dark:border-gray-800 mb-8">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-sky-400 shrink-0">
            <svg className="w-8 h-8" viewBox="0 0 87.3 78">
              <path fill="#0066DA" d="M6 78l22.6-39.1h58.7L64.7 78z"/>
              <path fill="#00AC47" d="M58.7 38.9L29.4 0H0l29.4 51z"/>
              <path fill="#EA4335" d="M0 78l29.4-51L58.7 78z"/>
              <path fill="#FFBA00" d="M29.4 0l29.3 51H87.3L58 0z"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Deekshitha P — Official Resume PDF
              </h3>
              <span className="px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold rounded-full">
                VERIFIED
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 font-sans">
              Google Drive PDF Viewer Format • BE Artificial Intelligence & Machine Learning
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowResume(!showResume)}
          className="px-6 py-3 rounded-full font-mono text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-md shrink-0 cursor-pointer"
        >
          <Eye className="w-4 h-4" />
          <span>{showResume ? "Hide PDF Viewer" : "Open Google Drive Resume"}</span>
        </button>
      </div>

      {/* Embedded Google Drive PDF Viewer */}
      {showResume && (
        <div className="animate-fadeIn">
          <ResumeViewer isModal={false} />
        </div>
      )}
    </section>
  );
}
