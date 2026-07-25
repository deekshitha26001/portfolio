"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 text-center border-t border-white/5 relative z-10 bg-gray-950/40 backdrop-blur-sm pb-28">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-2">
        <p className="text-gray-400 font-mono text-sm flex items-center justify-center gap-1.5">
          <span>Designed & Built with</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          <span>by</span>
          <a
            href="https://github.com/deekshitha26001"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 font-semibold hover:underline"
          >
            Deekshitha P
          </a>
        </p>
        <p className="text-gray-600 font-mono text-xs">
          © {new Date().getFullYear()} Deekshitha P • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
