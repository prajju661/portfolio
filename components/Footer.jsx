"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 md:px-12 bg-[#123F46] text-[#D5DADB] border-t border-[#2C8292]/40 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="space-y-1">
          <span className="font-heading text-lg font-bold text-[#F4F3EF] tracking-tight block uppercase">
            SRISAILAM PRAJVALITHA
          </span>
          <p className="font-mono-tech text-xs text-[#D5DADB]">
            Computer Science × Artificial Intelligence
          </p>
        </div>

        {/* Center Quick Navigation */}
        <div className="flex flex-wrap items-center gap-6 font-mono-tech text-xs text-[#D5DADB]">
          <a href="#about" className="hover:text-[#2C8292] transition-colors">
            ABOUT
          </a>
          <a href="#projects" className="hover:text-[#2C8292] transition-colors">
            WORK
          </a>
          <a href="#skills" className="hover:text-[#2C8292] transition-colors">
            SKILLS
          </a>
          <a href="#education" className="hover:text-[#2C8292] transition-colors">
            EDUCATION
          </a>
          <a href="#achievements" className="hover:text-[#2C8292] transition-colors">
            ACHIEVEMENTS
          </a>
          <a href="#contact" className="hover:text-[#2C8292] transition-colors">
            CONTACT
          </a>
        </div>

        {/* Right Copyright & Top Scroll */}
        <div className="flex items-center gap-4">
          <span className="font-mono-tech text-xs text-[#D5DADB]">
            © 2026
          </span>

          <span className="w-1.5 h-1.5 bg-[#B99A5B] rounded-full" />

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 border border-[#2C8292] bg-[#172126] hover:border-[#B99A5B] text-[#F4F3EF] hover:text-[#B99A5B] transition-colors"
            title="Scroll to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
