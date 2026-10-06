"use client";

import { Code2, Brain, Cpu, Cloud, Database } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    id: "01",
    category: "LANGUAGES",
    icon: Code2,
    skills: ["C", "Java", "Python", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "02",
    category: "AI / ML",
    icon: Brain,
    skills: [
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "RAG Pipelines",
      "Scikit-learn",
    ],
  },
  {
    id: "03",
    category: "CORE CS",
    icon: Cpu,
    skills: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    id: "04",
    category: "CLOUD / TOOLS",
    icon: Cloud,
    skills: ["AWS", "GitHub Actions", "Linux", "Git"],
  },
  {
    id: "05",
    category: "DATABASES",
    icon: Database,
    skills: ["SQLite", "PostgreSQL"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 border-b border-[#B8C1C3] bg-[#D5DADB]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#B8C1C3] pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B99A5B] font-bold">
              03 /
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-[#172126] tracking-tight">
              TECHNICAL SKILLS
            </h2>
          </div>
          <span className="font-mono-tech text-xs tracking-widest text-[#526168] uppercase">
            COMPETENCY MATRIX
          </span>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.category}
                className="border border-[#B8C1C3] bg-[#F4F3EF] p-6 hover:border-[#176B78] transition-colors shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#B8C1C3] pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-[#176B78]" />
                      <span className="font-mono-tech text-xs font-bold text-[#176B78] uppercase">
                        {cat.category}
                      </span>
                    </div>
                    <span className="font-mono-tech text-[10px] text-[#B99A5B] font-bold">
                      [{cat.id}]
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono-tech text-xs bg-[#E7E9E8] text-[#172126] border border-[#B8C1C3] px-3 py-1.5 hover:border-[#176B78] transition-colors font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B8C1C3] text-[11px] font-mono-tech text-[#526168] flex items-center justify-between">
                  <span>VERIFIED COMPETENCY</span>
                  <span className="text-[#B99A5B] font-bold">{cat.skills.length} ITEMS</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
