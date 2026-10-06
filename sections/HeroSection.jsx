"use client";

import { ArrowDown } from "lucide-react";
import Hero3DVisual from "@/components/3d/Hero3DVisual";

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 px-6 md:px-12 border-b border-[#B8C1C3] bg-[#E7E9E8] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Information */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Top Category Label */}
          <div className="inline-flex items-center gap-2 border border-[#B8C1C3] bg-[#F4F3EF] px-3.5 py-1.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#B99A5B]" />
            <span className="font-mono-tech text-xs tracking-widest text-[#172126] uppercase font-semibold">
              COMPUTER SCIENCE × ARTIFICIAL INTELLIGENCE
            </span>
          </div>

          {/* Headings */}
          <div className="space-y-3">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#172126] leading-[1.05]">
              Srisailam Prajvalitha
            </h1>
            <p className="font-sans-ui text-lg sm:text-xl text-[#123F46] font-semibold">
              B.Tech Computer Science and Engineering – Artificial Intelligence
            </p>
          </div>

          {/* Description */}
          <p className="font-sans-ui text-base sm:text-lg text-[#526168] leading-relaxed max-w-2xl">
            "I build practical intelligent systems across computer vision, machine learning, RAG, and software engineering."
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-[#123F46] hover:bg-[#176B78] text-[#F4F3EF] font-mono-tech text-xs tracking-widest uppercase px-6 py-3.5 transition-colors shadow-md font-bold"
            >
              <span>VIEW MY WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-[#B99A5B]" />
            </a>

            <a
              href="https://github.com/prajju661"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#B8C1C3] hover:border-[#176B78] bg-[#F4F3EF] text-[#172126] hover:text-[#176B78] font-mono-tech text-xs tracking-widest uppercase px-5 py-3.5 transition-colors font-semibold"
            >
              <span>GITHUB ↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/srisailam-prajvalitha-49872032b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#B8C1C3] hover:border-[#176B78] bg-[#F4F3EF] text-[#172126] hover:text-[#176B78] font-mono-tech text-xs tracking-widest uppercase px-5 py-3.5 transition-colors font-semibold"
            >
              <span>LINKEDIN ↗</span>
            </a>
          </div>

          {/* Academic Metadata */}
          <div className="pt-4 border-t border-[#B8C1C3]/80 flex flex-wrap items-center gap-6 font-mono-tech text-xs text-[#526168]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#B99A5B] rounded-full" />
              INSTITUTION: MITS
            </span>
            <span>EXPECTED GRADUATION: MAY 2028</span>
            <span className="text-[#123F46] font-bold">CGPA: 9.23 PRESENT</span>
          </div>

        </div>

        {/* Right Column: Hero 3D Composition */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <Hero3DVisual />
        </div>

      </div>
    </section>
  );
}
