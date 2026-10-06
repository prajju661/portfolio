"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact3DVisual() {
  return (
    <div className="relative w-full aspect-square max-w-xs mx-auto flex items-center justify-center select-none">
      {/* Orbital Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-[#2C8292]/50 pointer-events-none"
        style={{ transform: "rotateX(70deg)" }}
      />

      {/* Orbital Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-[#B99A5B]/40 border-dashed pointer-events-none"
        style={{ transform: "rotateY(70deg)" }}
      />

      {/* Central 3D Sphere Panel */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-36 h-36 rounded-full bg-gradient-to-br from-[#176B78] via-[#123F46] to-[#172126] border-2 border-[#B99A5B]/70 shadow-2xl flex flex-col items-center justify-center text-center p-4"
      >
        <Mail className="w-6 h-6 text-[#F4F3EF] mb-1.5" />
        <span className="font-mono-tech text-[10px] text-[#F4F3EF] font-bold tracking-widest uppercase">
          LET'S CONNECT
        </span>
        <span className="font-mono-tech text-[9px] text-[#B99A5B]">
          prajvalithagowd11
        </span>
      </motion.div>
    </div>
  );
}
