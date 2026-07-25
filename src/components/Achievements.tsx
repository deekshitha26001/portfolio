"use client";

import { Trophy, CheckCircle2, Star } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "3rd Place in AGENTC AI Hackathon",
      detail: "Secured 3rd Place in the nationwide hackathon conducted by Pongu Ventures Pvt. Ltd. for AI innovation.",
    },
    {
      title: "200+ DSA Problems Solved",
      detail: "Solved over 200 Data Structures and Algorithms problems across major competitive coding platforms.",
    },
    {
      title: "NPTEL Certification – Programming in Java",
      detail: "Successfully certified by IIT Madras in Java Programming with high distinction.",
    },
    {
      title: "NPTEL Certification – Data Structures & Algorithms",
      detail: "Successfully certified by IIT Madras in Data Structures & Algorithm Design.",
    },
    {
      title: "Managed 7K+ Developer Community",
      detail: "Created educational tech content on Instagram @code.with.dee365 educating over 7,000 active developers.",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 max-w-5xl mx-auto relative z-10">
      <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">
        <Trophy className="w-4 h-4" />
        <span>06. Recognized Milestones</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12">
        Achievements & Certifications
      </h2>

      <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-800">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/30">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Honors & Certifications</h3>
            <p className="text-gray-400 text-sm font-mono">Recognitions earned throughout academic & developer journey</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/40 transition-colors flex items-start gap-4"
            >
              <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-xl mt-0.5 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
