"use client";

import { useState } from "react";
import { Home, Camera } from "lucide-react";
import ResumeViewer from "./ResumeViewer";

export default function FloatingDock() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full sathwik-dock flex items-center gap-3 transition-all duration-300">
        {/* Home */}
        <a
          href="#hero"
          title="Home"
          className="group relative p-2 rounded-full text-gray-300 hover:text-sky-400 hover:bg-gray-800/60 transition-all"
        >
          <Home className="w-5 h-5" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-sky-300 text-xs font-mono font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md border border-gray-800">
            Home
          </span>
        </a>

        <div className="w-px h-5 bg-gray-700/60" />

        {/* Gmail */}
        <a
          href="mailto:deekshi26001@gmail.com"
          title="Gmail"
          className="group relative p-1.5 rounded-full hover:scale-110 transition-transform"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-sky-300 text-xs font-mono font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md border border-gray-800">
            Gmail
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/deekshitha26001"
          target="_blank"
          rel="noreferrer"
          title="GitHub Profile"
          className="group relative p-1.5 rounded-full hover:scale-110 transition-transform"
        >
          <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-sky-300 text-xs font-mono font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md border border-gray-800">
            GitHub Profile
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/deekshithap26"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn Profile"
          className="group relative p-1.5 rounded-full hover:scale-110 transition-transform"
        >
          <svg className="w-5 h-5 fill-[#0A66C2]" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6z" />
          </svg>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-sky-300 text-xs font-mono font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md border border-gray-800">
            LinkedIn Profile
          </span>
        </a>

        {/* Google Drive / Resume */}
        <button
          onClick={() => setIsResumeOpen(true)}
          title="Open Resume PDF"
          className="group relative p-1.5 rounded-full hover:scale-110 transition-transform cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 87.3 78">
            <path fill="#0066DA" d="M6 78l22.6-39.1h58.7L64.7 78z"/>
            <path fill="#00AC47" d="M58.7 38.9L29.4 0H0l29.4 51z"/>
            <path fill="#EA4335" d="M0 78l29.4-51L58.7 78z"/>
            <path fill="#FFBA00" d="M29.4 0l29.3 51H87.3L58 0z"/>
          </svg>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-sky-300 text-xs font-mono font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md border border-gray-800">
            Resume (Drive PDF)
          </span>
        </button>

        {/* LeetCode Profile */}
        <a
          href="https://leetcode.com/u/Deekshitha_patil/"
          target="_blank"
          rel="noreferrer"
          title="LeetCode Profile (u/Deekshitha_patil)"
          className="group relative p-1.5 rounded-full hover:scale-110 transition-transform"
        >
          <svg className="w-5 h-5 fill-[#FFA116]" viewBox="0 0 24 24">
            <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.22.45-1.685 0l-4.57-4.42a1.2 1.2 0 010-1.686l4.57-4.42c.465-.45 1.219-.45 1.685 0l2.697 2.607a1.23 1.23 0 001.734 0 1.2 1.2 0 000-1.686l-2.697-2.608a3.633 3.633 0 00-5.153 0L5.416 12.75a3.6 3.6 0 000 5.056l4.57 4.42a3.633 3.633 0 005.153 0l2.697-2.607a1.23 1.23 0 000-1.687 1.23 1.23 0 00-1.734-.002zM19.467 9.878a1.23 1.23 0 000-1.735 1.2 1.2 0 00-1.685 0l-7.618 7.37c-.465.45-1.219.45-1.685 0l-3.32-3.21a1.2 1.2 0 00-1.685 0 1.23 1.23 0 000 1.735l3.32 3.21a3.633 3.633 0 005.153 0l7.618-7.37z" />
          </svg>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-sky-300 text-xs font-mono font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md border border-gray-800">
            LeetCode Profile
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/code.with.dee365"
          target="_blank"
          rel="noreferrer"
          title="Instagram (@code.with.dee365)"
          className="group relative p-2 rounded-full text-pink-400 hover:bg-pink-950/40 transition-all hover:scale-110"
        >
          <Camera className="w-5 h-5" />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-pink-300 text-xs font-mono font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md border border-gray-800">
            Instagram (@code.with.dee365)
          </span>
        </a>
      </div>

      {/* Google Drive Styled Fullscreen Resume Viewer Modal */}
      <ResumeViewer
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        isModal={true}
      />
    </>
  );
}
