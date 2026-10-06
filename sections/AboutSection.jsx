"use client";

import { CheckCircle2 } from "lucide-react";
import About3DVisual from "@/components/3d/About3DVisual";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-b border-[#B8C1C3] bg-[#D5DADB]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#B8C1C3] pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B99A5B] font-bold">
              01 /
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-[#172126] tracking-tight">
              ABOUT
            </h2>
          </div>
          <span className="font-mono-tech text-xs tracking-widest text-[#526168] uppercase">
            PROFILE & FOCUS
          </span>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#172126] leading-tight">
              Building practical AI systems.
            </h3>

            <p className="font-sans-ui text-base sm:text-lg text-[#526168] leading-relaxed">
              "I'm a Computer Science and Artificial Intelligence student interested in building practical intelligent systems that connect machine learning with real-world software applications."
            </p>

            <p className="font-sans-ui text-sm sm:text-base text-[#526168] leading-relaxed">
              Currently pursuing my B.Tech degree at Madanapalle Institute of Technology and Science (expected graduation May 2028, CGPA 9.23 Present). My engineering approach emphasizes robust software principles, computer vision edge deployment, RAG vector retrieval pipelines, and core algorithmic problem solving.
            </p>

            {/* Current Focus Panel */}
            <div className="pt-4 border-t border-[#B8C1C3]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-tech text-xs font-bold text-[#123F46] uppercase tracking-wider">
                  CURRENT FOCUS
                </span>
                <span className="font-mono-tech text-[10px] text-[#B99A5B] font-bold">
                  CORE DOMAINS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans-ui text-sm">
                {[
                  "Computer Vision",
                  "Machine Learning",
                  "RAG Systems",
                  "Software Engineering",
                ].map((focusItem) => (
                  <div
                    key={focusItem}
                    className="flex items-center gap-3 p-3 border border-[#B8C1C3] bg-[#F4F3EF] font-semibold text-[#172126] shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#176B78] shrink-0" />
                    <span>{focusItem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <About3DVisual />
          </div>

        </div>

      </div>
    </section>
  );
}
