"use client";

import { motion } from "framer-motion";
import { Cpu, Layers } from "lucide-react";

export default function About3DVisual() {
  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto flex items-center justify-center select-none">
      {/* Background Orbital Line */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-[#176B78]/30 border-dashed pointer-events-none"
      />

      {/* Layered Translucent Plane 1 */}
      <motion.div
        animate={{ rotate: [-4, 4, -4], y: [-6, 6, -6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-44 h-44 glass-panel-3d border border-[#B8C1C3] shadow-md p-4 flex flex-col justify-between"
        style={{ transform: "rotate(15deg)" }}
      >
        <div className="flex items-center justify-between font-mono-tech text-[10px] text-[#526168]">
          <span>LAYER // 01</span>
          <Layers className="w-3.5 h-3.5 text-[#176B78]" />
        </div>
        <div className="font-mono-tech text-xs text-[#172126] font-semibold">
          AI SYSTEMS & VISION
        </div>
      </motion.div>

      {/* Layered Translucent Plane 2 (Center Overlay - Deep Teal) */}
      <motion.div
        animate={{ rotate: [4, -4, 4], y: [6, -6, 6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-44 h-44 bg-[#123F46] border border-[#176B78] shadow-xl p-5 flex flex-col justify-between text-[#F4F3EF]"
      >
        <div className="flex items-center justify-between font-mono-tech text-[10px] text-[#2C8292]">
          <span>MITS // CSE-AI</span>
          <Cpu className="w-4 h-4 text-[#B99A5B]" />
        </div>
        <div>
          <div className="font-heading text-sm font-bold text-[#F4F3EF]">
            CGPA 9.23
          </div>
          <div className="font-mono-tech text-[10px] text-[#B99A5B] mt-0.5 font-semibold">
            EXPECTED MAY 2028
          </div>
        </div>
      </motion.div>
    </div>
  );
}
