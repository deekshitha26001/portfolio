"use client";

import { useState } from "react";
import {
  FileText,
  Download,
  Printer,
  ZoomIn,
  ZoomOut,
  X,
  ExternalLink,
  Share2,
  Check,
} from "lucide-react";

interface ResumeViewerProps {
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
}

export default function ResumeViewer({
  isOpen = false,
  onClose,
  isModal = false,
}: ResumeViewerProps) {
  const [zoom, setZoom] = useState(100);
  const [copied, setCopied] = useState(false);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 10, 150));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 10, 80));

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (isModal && !isOpen) return null;

  return (
    <div
      className={
        isModal
          ? "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fadeIn"
          : "w-full max-w-5xl mx-auto my-12"
      }
    >
      {/* Google Drive PDF Viewer Container (Exact Sathwik Batta Reference) */}
      <div className="w-full bg-[#202124] text-white rounded-xl shadow-2xl overflow-hidden border border-gray-700/60 flex flex-col max-h-[90vh]">
        {/* Top Header Bar (Google Drive PDF Header) */}
        <div className="bg-[#2d2e31] px-4 py-3 border-b border-gray-700 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-red-500 text-white font-bold text-[10px] px-1.5 py-0.5 rounded shadow">
              PDF
            </div>
            <span className="font-sans text-sm font-medium text-gray-200 truncate max-w-[200px] sm:max-w-xs">
              deekshitha_p_resume.pdf
            </span>
          </div>

          {/* Controls: Zoom, Print, Download, Share */}
          <div className="flex items-center gap-2 sm:gap-4 font-sans text-xs">
            <div className="hidden sm:flex items-center gap-2 bg-[#202124] px-3 py-1 rounded-md border border-gray-700">
              <button
                onClick={handleZoomOut}
                className="hover:text-cyan-400 p-1 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-gray-300 w-10 text-center">
                {zoom}%
              </span>
              <button
                onClick={handleZoomIn}
                className="hover:text-cyan-400 p-1 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="p-1.5 hover:bg-gray-700 rounded-md text-gray-300 hover:text-white transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleShare}
              className="p-1.5 hover:bg-gray-700 rounded-md text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              title="Share Link"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            <a
              href="mailto:deekshi26001@gmail.com?subject=Resume%20Request"
              className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-md font-semibold text-xs transition-colors flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            {isModal && onClose && (
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-red-600 rounded-md text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Main Document Viewer Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#323639] flex justify-center items-start">
          <div
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
            className="transition-transform duration-200 w-full max-w-[800px] bg-white text-gray-900 shadow-2xl p-8 sm:p-12 font-serif text-sm leading-relaxed border border-gray-300 rounded-sm"
          >
            {/* Resume Header */}
            <div className="text-center pb-4 border-b border-gray-400 mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-gray-900 uppercase font-sans mb-1">
                DEEKSHITHA P
              </h1>
              <p className="text-xs text-gray-600 font-sans mb-3">Bengaluru, Karnataka</p>
              <div className="flex flex-wrap justify-center gap-4 text-xs font-sans text-blue-700">
                <a href="mailto:deekshi26001@gmail.com" className="hover:underline">
                  deekshi26001@gmail.com
                </a>
                <span>•</span>
                <a href="tel:+919980091837" className="hover:underline text-gray-800">
                  +91 9980091837
                </a>
                <span>•</span>
                <a href="https://linkedin.com/in/deekshithap26" target="_blank" rel="noreferrer" className="hover:underline">
                  linkedin.com/in/deekshithap26
                </a>
                <span>•</span>
                <a href="https://github.com/deekshitha26001" target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/deekshitha26001
                </a>
              </div>
            </div>

            {/* Profile Section */}
            <div className="mb-5">
              <h2 className="text-base font-bold text-gray-900 uppercase font-sans border-b border-gray-300 pb-1 mb-2">
                Profile
              </h2>
              <p className="text-xs text-gray-800 font-sans leading-relaxed text-justify">
                Final-year Artificial Intelligence and Machine Learning student at Rajarajeswari College of Engineering, Bengaluru, with a strong academic record (CGPA: 8.8). Proficient in Java, Data Structures and Algorithms, React, Next.js, Spring Boot, and PostgreSQL. Seeking a Web Developer role to build scalable web applications and contribute to real-world software development.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-5 font-sans">
              <h2 className="text-base font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2">
                Technical Skills
              </h2>
              <ul className="text-xs text-gray-800 space-y-1">
                <li><strong>Programming Languages:</strong> Java, JavaScript, Python, SQL</li>
                <li><strong>Frontend:</strong> React.js, Next.js, HTML5, CSS3, Tailwind CSS</li>
                <li><strong>Backend:</strong> Spring Boot, Spring Framework, FastAPI, REST APIs</li>
                <li><strong>Databases & Tools:</strong> PostgreSQL, MySQL, MongoDB, Git, GitHub, Bitbucket, Docker, Postman</li>
                <li><strong>Core Concepts:</strong> Data Structures and Algorithms, Object-Oriented Programming (OOP), Operating Systems, DBMS</li>
                <li><strong>Soft Skills:</strong> Problem Solving, Teamwork, Adaptability, Communication</li>
              </ul>
            </div>

            {/* Projects */}
            <div className="mb-5 font-sans">
              <h2 className="text-base font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2">
                Projects
              </h2>

              <div className="space-y-4 text-xs">
                {/* Project 1 */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-gray-900">
                    <span>Job Application Tracker</span>
                    <span className="italic text-gray-700 font-normal">React, Next.js, Spring Boot, PostgreSQL</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-gray-800 mt-1">
                    <li>Architected a full-stack job application platform that aggregates job postings from external ATS providers using custom REST APIs built with Spring Boot and Java 21.</li>
                    <li>Designed an asynchronous bulk onboarding pipeline supporting Excel-based company imports, enabling automated validation and large-scale company registration.</li>
                    <li>Implemented Spring Security with JWT authentication and Google/GitHub OAuth2 to ensure secure user authentication and resume management.</li>
                    <li>Developed a responsive frontend using Next.js, Tailwind CSS, and Framer Motion while integrating PostgreSQL with Spring Data JPA for efficient data management.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-gray-900">
                    <span>EduForge – Learning Management & Academic Tracking Platform</span>
                    <span className="italic text-gray-700 font-normal">React, Spring Boot, PostgreSQL</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-gray-800 mt-1">
                    <li>Built a full-stack learning management platform using React and Spring Boot following a three-tier Role-Based Access Control (RBAC) architecture.</li>
                    <li>Integrated GitHub REST APIs to analyze commits, pull requests, and branch activities for real-time student contribution tracking.</li>
                    <li>Developed a real-time examination system using Spring WebSockets (STOMP), scheduled tasks, instant notifications, timed submissions, and automated result generation.</li>
                    <li>Built secure REST APIs using Spring Security, JWT Authentication, Spring Data JPA, and PostgreSQL following a layered architecture.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-gray-900">
                    <span>Music Player</span>
                    <span className="italic text-gray-700 font-normal">C, Doubly Linked List</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-gray-800 mt-1">
                    <li>Developed a console-based music player using a doubly linked list for efficient playlist management and song navigation.</li>
                    <li>Implemented song insertion, deletion, forward/backward traversal, playback controls, and dynamic memory management.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-5 font-sans">
              <h2 className="text-base font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <div>
                    <strong>Rajarajeswari College of Engineering, Bengaluru</strong>
                    <div>Bachelor of Engineering in Artificial Intelligence & Machine Learning</div>
                  </div>
                  <div className="text-right">
                    <div>2023 – 2027</div>
                    <strong className="text-blue-700">CGPA: 8.8</strong>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <strong>Sri Chaitanya College, Ballari</strong>
                    <div>Pre-University Course (PCMB)</div>
                  </div>
                  <div className="text-right">
                    <div>2021 – 2023</div>
                    <strong>89%</strong>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <strong>Sri Nanda Residential School, Ballari</strong>
                    <div>SSLC</div>
                  </div>
                  <div className="text-right">
                    <div>2020 – 2021</div>
                    <strong>96%</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div className="mb-5 font-sans">
              <h2 className="text-base font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2">
                Certifications & Achievements
              </h2>
              <ul className="list-disc pl-4 text-xs text-gray-800 space-y-1">
                <li>NPTEL – Programming in Java (IIT Madras)</li>
                <li>NPTEL – Data Structures and Algorithms Design (IIT Madras)</li>
                <li>Secured <strong>3rd Place</strong> in the AGENTC AI Hackathon conducted by Pongu Ventures Pvt. Ltd.</li>
                <li>Solved <strong>200+</strong> Data Structures and Algorithms problems across major coding platforms.</li>
                <li>Manage the DSA-focused educational Instagram page <strong>@code.with.dee365</strong> with 7K+ followers.</li>
              </ul>
            </div>

            {/* Coding Profiles */}
            <div className="font-sans pt-2 border-t border-gray-300">
              <h2 className="text-xs font-bold text-gray-900 uppercase mb-2">Coding Profiles</h2>
              <div className="flex flex-wrap gap-4 text-xs text-blue-700 font-semibold">
                <a href="https://leetcode.com/u/Deekshitha_patil/" target="_blank" rel="noreferrer" className="hover:underline">• LeetCode</a>
                <a href="https://geeksforgeeks.org" target="_blank" rel="noreferrer" className="hover:underline">• GeeksForGeeks</a>
                <a href="https://hackerrank.com" target="_blank" rel="noreferrer" className="hover:underline">• HackerRank</a>
                <a href="https://github.com/deekshitha26001" target="_blank" rel="noreferrer" className="hover:underline">• GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
