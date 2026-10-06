"use client";

import { Trophy, Presentation, Mic } from "lucide-react";

const ACHIEVEMENTS_LIST = [
  {
    year: "2026",
    title: "TechHackers 2.0 Hackathon",
    role: "COMPETITOR & BUILDER",
    icon: Trophy,
    details: "Engineered software solutions under hackathon constraints, demonstrating rapid prototyping and engineering deployment.",
  },
  {
    year: "2025",
    title: "AI/ML Launchpad Workshop",
    role: "RESOURCE PERSON",
    icon: Presentation,
    details: "Served as a Resource Person in workshop titled 'AI/ML Launchpad: Discover Careers and Build Your First Project'.",
  },
  {
    year: "2026",
    title: "College Radio Speaker",
    role: "COMMUNICATION",
    icon: Mic,
    details: "Delivered talk segments on technical topics, AI career pathways, and technology literacy.",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 border-b border-[#B8C1C3] bg-[#E7E9E8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#B8C1C3] pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B99A5B] font-bold">
              06 /
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-[#172126] tracking-tight">
              ACHIEVEMENTS
            </h2>
          </div>
          <span className="font-mono-tech text-xs tracking-widest text-[#526168] uppercase">
            ENGAGEMENT & LEADERSHIP
          </span>
        </div>

        {/* Clean Timeline List */}
        <div className="divide-y divide-[#B8C1C3] border-y border-[#B8C1C3]">
          {ACHIEVEMENTS_LIST.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="py-8 px-4 md:px-8 bg-[#F4F3EF] hover:bg-[#D5DADB]/60 transition-colors grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-3 font-mono-tech">
                  <span className="text-xs font-bold text-[#176B78] block mb-1">
                    YEAR: {item.year}
                  </span>
                  <span className="text-[11px] text-[#526168] uppercase">
                    / {item.role}
                  </span>
                </div>

                <div className="md:col-span-8 space-y-1">
                  <h3 className="font-heading text-xl font-bold text-[#172126]">
                    {item.title}
                  </h3>
                  <p className="font-sans-ui text-xs text-[#526168]">
                    {item.details}
                  </p>
                </div>

                <div className="md:col-span-1 flex md:justify-end">
                  <div className="p-2.5 border border-[#B8C1C3] bg-[#E7E9E8] text-[#B99A5B]">
                    <IconComponent className="w-4 h-4 text-[#B99A5B]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
