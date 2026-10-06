"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Hero3DVisual() {
  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center perspective-1000 select-none">
      
      {/* Outer Orbital Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-[#B8C1C3]/80 border-dashed pointer-events-none"
      />

      {/* Outer Orbital Ring 2 (Tilted) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute inset-12 rounded-full border border-[#2C8292]/50 pointer-events-none"
        style={{ transform: "rotateX(65deg) rotateY(25deg)" }}
      />

      {/* Floating Translucent Panel 1 (Top Left Layer) */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-6 w-48 h-32 glass-panel-3d p-4 shadow-lg border border-[#B8C1C3]"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="flex items-center justify-between border-b border-[#B8C1C3] pb-2 mb-2 font-mono-tech text-[10px] text-[#526168]">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#176B78] rounded-full" />
            COMPUTE NODE
          </span>
          <span className="text-[#B99A5B] font-bold">01</span>
        </div>
        <div className="space-y-1 font-mono-tech text-[11px] text-[#172126] font-semibold">
          <div>YOLOv8 Edge Inference</div>
          <div className="text-[#526168] text-[10px] font-normal">Real-time Vision Processing</div>
        </div>
      </motion.div>

      {/* Floating Translucent Panel 2 (Bottom Right Layer) */}
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [3, -3, 3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-6 w-52 h-36 glass-panel-3d p-4 shadow-lg border border-[#B8C1C3]"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="flex items-center justify-between border-b border-[#B8C1C3] pb-2 mb-2 font-mono-tech text-[10px] text-[#526168]">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#123F46] rounded-full" />
            RETRIEVAL ENGINE
          </span>
          <span className="text-[#B99A5B] font-bold">02</span>
        </div>
        <div className="space-y-1 font-mono-tech text-[11px] text-[#172126] font-semibold">
          <div>RAG Contextual Search</div>
          <div className="text-[#526168] text-[10px] font-normal">Semantic Object Location</div>
        </div>
      </motion.div>

      {/* Central Deep Peacock Teal Geometric Block */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-48 h-48 bg-[#123F46] border-2 border-[#176B78] shadow-2xl p-6 flex flex-col items-center justify-center text-center transform-style-3d"
      >
        {/* Subtle Gold Frame Accent */}
        <div className="absolute inset-2 border border-[#B99A5B]/40 pointer-events-none" />

        {/* Central Symbol */}
        <div className="w-14 h-14 bg-[#176B78] border border-[#2C8292] flex items-center justify-center text-[#F4F3EF] mb-3 shadow-md">
          <Code2 className="w-7 h-7 text-[#F4F3EF]" />
        </div>

        <span className="font-heading text-sm font-bold text-[#F4F3EF] tracking-wider uppercase">
          AI & SOFTWARE
        </span>
        <span className="font-mono-tech text-[10px] text-[#B99A5B] tracking-widest uppercase mt-1">
          SRISAILAM PRAJVALITHA
        </span>
      </motion.div>

      {/* Small Floating Sphere 1 (Top Right - Peacock Blue Highlight) */}
      <motion.div
        animate={{ y: [-12, 12, -12], x: [-6, 6, -6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-12 w-6 h-6 rounded-full bg-gradient-to-br from-[#2C8292] to-[#176B78] border border-[#B99A5B]/60 shadow-md"
      />

      {/* Small Floating Sphere 2 (Bottom Left - Deep Teal) */}
      <motion.div
        animate={{ y: [14, -14, 14], x: [8, -8, 8] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-12 w-8 h-8 rounded-full bg-gradient-to-br from-[#123F46] to-[#172126] border border-[#176B78] shadow-md"
      />

    </div>
  );
}
