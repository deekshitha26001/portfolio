"use client";

import { Code2, Terminal, Database, Cpu, Layers } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Terminal,
      skills: ["Java", "JavaScript", "Python", "SQL", "C"],
    },
    {
      title: "Frontend Frameworks",
      icon: Code2,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend & Cloud",
      icon: Layers,
      skills: ["Spring Boot", "Spring Framework", "FastAPI", "REST APIs", "WebSockets"],
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Git",
        "GitHub",
        "Bitbucket",
        "Docker",
        "Postman",
      ],
    },
    {
      title: "Core Computer Science",
      icon: Cpu,
      skills: [
        "Data Structures & Algorithms",
        "Object Oriented Programming (OOP)",
        "Operating Systems",
        "DBMS Architecture",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">
        <Code2 className="w-4 h-4" />
        <span>04. Technical Capabilities</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const IconComp = category.icon;
          return (
            <div
              key={index}
              className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-800">
                <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-gray-900/80 text-gray-200 rounded-full text-xs font-mono border border-gray-700/60 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
