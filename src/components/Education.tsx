"use client";

import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      institution: "Rajarajeswari College of Engineering",
      location: "Bengaluru, Karnataka",
      degree: "BE in Artificial Intelligence & Machine Learning",
      date: "2023 - 2027",
      score: "CGPA: 8.8",
      highlight: "Final Year Student",
    },
    {
      institution: "Sri Chaitanya College",
      location: "Ballari, Karnataka",
      degree: "Pre-University Course (PCMB)",
      date: "2021 - 2023",
      score: "89%",
      highlight: "Higher Secondary",
    },
    {
      institution: "Sri Nanda Residential School",
      location: "Ballari, Karnataka",
      degree: "Secondary School Leaving Certificate (SSLC)",
      date: "2020 - 2021",
      score: "96%",
      highlight: "Distinction",
    },
  ];

  return (
    <section id="education" className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">
        <GraduationCap className="w-4 h-4" />
        <span>03. Academic Background</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl border border-cyan-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                  {edu.highlight}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
              <p className="text-gray-500 text-xs flex items-center gap-1 mb-6">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {edu.location}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between font-mono text-sm">
              <span className="text-cyan-400 font-bold flex items-center gap-1">
                <Award className="w-4 h-4" />
                {edu.score}
              </span>
              <span className="text-gray-500 text-xs flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {edu.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
