"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Camera, Eye, Cpu, RefreshCw, Database, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 border-b border-[#B8C1C3] bg-[#E7E9E8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#B8C1C3] pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B99A5B] font-bold">
              02 /
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-[#172126] tracking-tight">
              SELECTED WORK
            </h2>
          </div>
          <span className="font-mono-tech text-xs tracking-widest text-[#526168] uppercase">
            ENGINEERING CASE STUDIES
          </span>
        </div>

        {/* Project Rows */}
        <div className="space-y-20">
          
          {/* ================= PROJECT 01 ================= */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group border border-[#B8C1C3] bg-[#F4F3EF] p-8 md:p-12 transition-all duration-300 hover:border-[#176B78] shadow-md"
          >
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#B8C1C3] pb-4 mb-8 font-mono-tech text-xs">
              <div className="flex items-center gap-3">
                <span className="text-[#B99A5B] font-bold">PROJECT 01</span>
                <span className="text-[#B8C1C3]">|</span>
                <span className="text-[#176B78] font-bold">COMPUTER VISION & EDGE INFERENCE</span>
              </div>
              <span className="text-[#526168]">YEAR: 2026</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Information */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172126] group-hover:text-[#176B78] transition-colors leading-snug">
                  AI-Powered Mobile Urban Intelligence Platform Using Public Transport Fleet
                </h3>

                <p className="font-sans-ui text-base text-[#526168] leading-relaxed">
                  "An adaptive traffic intelligence system using computer vision to estimate vehicle density from CCTV and ESP32-CAM streams and support dynamic traffic signal optimization."
                </p>

                {/* Tech Tags */}
                <div>
                  <span className="font-mono-tech text-xs text-[#526168] block mb-2 font-semibold uppercase">
                    TECHNOLOGIES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "YOLOv8",
                      "TensorFlow",
                      "OpenCV",
                      "ESP32-CAM",
                      "Raspberry Pi",
                      "Computer Vision",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="font-mono-tech text-xs bg-[#D5DADB] text-[#123F46] border border-[#B8C1C3] px-3 py-1 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <span className="font-mono-tech text-xs text-[#526168] block mb-3 font-semibold uppercase">
                    TECHNICAL HIGHLIGHTS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans-ui text-sm text-[#172126]">
                    {[
                      "Vehicle detection",
                      "Traffic density estimation",
                      "Edge inference",
                      "Signal optimization",
                      "Unity simulation",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#176B78] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GitHub CTA */}
                <div className="pt-4 border-t border-[#B8C1C3]">
                  <a
                    href="https://github.com/prajju661/urban-eye-command-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#123F46] hover:bg-[#176B78] text-[#F4F3EF] font-mono-tech text-xs tracking-widest uppercase px-6 py-3.5 transition-colors font-bold shadow-xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>VIEW REPOSITORY ON GITHUB ↗</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Deep Teal 3D Visual Architecture Flow */}
              <div className="lg:col-span-5 border border-[#176B78] bg-[#123F46] text-[#F4F3EF] p-6 shadow-xl relative overflow-hidden">
                <div className="border-b border-[#2C8292]/40 pb-3 mb-6 font-mono-tech text-xs font-bold text-[#F4F3EF] flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#B99A5B]" />
                    SYSTEM DIAGRAM
                  </span>
                  <span className="text-[#B99A5B]">01</span>
                </div>

                <div className="space-y-3 font-mono-tech text-xs">
                  {/* Step 1 */}
                  <div className="p-3 bg-[#172126] border border-[#2C8292] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-[#2C8292]" />
                      <span className="font-bold text-[#F4F3EF]">CAMERA</span>
                    </div>
                    <span className="text-[#D5DADB] text-[11px]">CCTV / ESP32</span>
                  </div>

                  <div className="text-center text-[#2C8292] text-[10px]">↓</div>

                  {/* Step 2 */}
                  <div className="p-3 bg-[#172126] border border-[#2C8292] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#2C8292]" />
                      <span className="font-bold text-[#F4F3EF]">DETECTION</span>
                    </div>
                    <span className="text-[#D5DADB] text-[11px]">YOLOv8 + OpenCV</span>
                  </div>

                  <div className="text-center text-[#2C8292] text-[10px]">↓</div>

                  {/* Step 3 */}
                  <div className="p-3 bg-[#172126] border border-[#2C8292] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#2C8292]" />
                      <span className="font-bold text-[#F4F3EF]">DENSITY</span>
                    </div>
                    <span className="text-[#D5DADB] text-[11px]">Pixel Density Mask</span>
                  </div>

                  <div className="text-center text-[#2C8292] text-[10px]">↓</div>

                  {/* Step 4 */}
                  <div className="p-3 bg-[#172126] border-2 border-[#B99A5B] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-[#B99A5B]" />
                      <span className="font-bold text-[#F4F3EF]">DECISION</span>
                    </div>
                    <span className="text-[#B99A5B] font-bold text-[11px]">Signal Optimization</span>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#2C8292]/40 text-[10px] font-mono-tech text-[#D5DADB] text-center">
                  EMBEDDED EDGE INFERENCE ARCHITECTURE
                </div>
              </div>

            </div>
          </motion.div>

          {/* ================= PROJECT 02 ================= */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group border border-[#B8C1C3] bg-[#F4F3EF] p-8 md:p-12 transition-all duration-300 hover:border-[#176B78] shadow-md"
          >
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#B8C1C3] pb-4 mb-8 font-mono-tech text-xs">
              <div className="flex items-center gap-3">
                <span className="text-[#B99A5B] font-bold">PROJECT 02</span>
                <span className="text-[#B8C1C3]">|</span>
                <span className="text-[#176B78] font-bold">RAG & CONTEXTUAL RETRIEVAL</span>
              </div>
              <span className="text-[#526168]">YEAR: 2026</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Information */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172126] group-hover:text-[#176B78] transition-colors leading-snug">
                  Life Ledger AI
                </h3>

                <p className="font-sans-ui text-base text-[#526168] leading-relaxed">
                  "An AI-powered personal item tracking system that helps users locate belongings through natural-language queries and contextual retrieval."
                </p>

                {/* Tech Tags */}
                <div>
                  <span className="font-mono-tech text-xs text-[#526168] block mb-2 font-semibold uppercase">
                    TECHNOLOGIES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "OpenCV",
                      "Computer Vision",
                      "RAG",
                      "Vector Search",
                      "AI",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="font-mono-tech text-xs bg-[#D5DADB] text-[#123F46] border border-[#B8C1C3] px-3 py-1 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <span className="font-mono-tech text-xs text-[#526168] block mb-3 font-semibold uppercase">
                    TECHNICAL HIGHLIGHTS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans-ui text-sm text-[#172126]">
                    {[
                      "Item tracking",
                      "Semantic search",
                      "Location history",
                      "Contextual retrieval",
                      "RAG-based querying",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#176B78] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GitHub CTA */}
                <div className="pt-4 border-t border-[#B8C1C3]">
                  <a
                    href="https://github.com/prajju661/ledger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#123F46] hover:bg-[#176B78] text-[#F4F3EF] font-mono-tech text-xs tracking-widest uppercase px-6 py-3.5 transition-colors font-bold shadow-xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>VIEW REPOSITORY ON GITHUB ↗</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Deep Teal 3D Visual Architecture Flow */}
              <div className="lg:col-span-5 border border-[#176B78] bg-[#123F46] text-[#F4F3EF] p-6 shadow-xl relative overflow-hidden">
                <div className="border-b border-[#2C8292]/40 pb-3 mb-6 font-mono-tech text-xs font-bold text-[#F4F3EF] flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#B99A5B]" />
                    RETRIEVAL FLOW
                  </span>
                  <span className="text-[#B99A5B]">02</span>
                </div>

                <div className="space-y-3 font-mono-tech text-xs">
                  {/* Step 1 */}
                  <div className="p-3 bg-[#172126] border border-[#2C8292] flex items-center justify-between">
                    <span className="font-bold text-[#F4F3EF]">ITEM</span>
                    <span className="text-[#D5DADB] text-[11px]">Object Bounding</span>
                  </div>

                  <div className="text-center text-[#2C8292] text-[10px]">↓</div>

                  {/* Step 2 */}
                  <div className="p-3 bg-[#172126] border border-[#2C8292] flex items-center justify-between">
                    <span className="font-bold text-[#F4F3EF]">MEMORY</span>
                    <span className="text-[#D5DADB] text-[11px]">Timestamped Log DB</span>
                  </div>

                  <div className="text-center text-[#2C8292] text-[10px]">↓</div>

                  {/* Step 3 */}
                  <div className="p-3 bg-[#172126] border border-[#2C8292] flex items-center justify-between">
                    <span className="font-bold text-[#F4F3EF]">RETRIEVAL</span>
                    <span className="text-[#D5DADB] text-[11px]">Vector Similarity Search</span>
                  </div>

                  <div className="text-center text-[#2C8292] text-[10px]">↓</div>

                  {/* Step 4 */}
                  <div className="p-3 bg-[#172126] border-2 border-[#B99A5B] flex items-center justify-between">
                    <span className="font-bold text-[#F4F3EF]">ANSWER</span>
                    <span className="text-[#B99A5B] font-bold text-[11px]">Contextual Item Query</span>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#2C8292]/40 text-[10px] font-mono-tech text-[#D5DADB] text-center">
                  NATURAL LANGUAGE VECTOR RETRIEVAL
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
