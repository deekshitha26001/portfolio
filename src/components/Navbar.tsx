"use client";

import { Sparkles } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Community", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono font-bold text-white text-lg tracking-wider flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-900/30 border border-blue-800 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>
          <span>DP.</span>
        </a>

        <ul className="hidden md:flex gap-6 font-mono text-xs">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="text-gray-400 hover:text-sky-400 transition-colors py-1"
              >
                <span className="text-sky-400/80 mr-1">0{idx + 1}.</span> {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:deekshi26001@gmail.com"
          className="px-4 py-2 text-xs font-mono border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
