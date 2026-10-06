"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "WORK", href: "#projects" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "EDUCATION", href: "#education" },
  { name: "ACHIEVEMENTS", href: "#achievements" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#E7E9E8]/90 backdrop-blur-md py-3.5 border-b border-[#B8C1C3] shadow-xs"
          : "bg-[#E7E9E8] py-5 border-b border-[#B8C1C3]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left Branding */}
        <a
          href="#"
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <span className="font-mono-tech text-xs font-bold text-[#F4F3EF] bg-[#123F46] group-hover:bg-[#176B78] px-2.5 py-1 transition-colors">
            SP
          </span>
          <span className="font-heading text-sm font-bold tracking-tight text-[#172126] uppercase">
            SRISAILAM PRAJVALITHA
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono-tech text-xs tracking-wider uppercase transition-colors relative py-1 ${
                  isActive
                    ? "text-[#176B78] font-bold"
                    : "text-[#526168] hover:text-[#172126]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B99A5B]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA - GitHub Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/prajju661"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-tech text-xs tracking-wider uppercase text-[#F4F3EF] bg-[#123F46] hover:bg-[#176B78] border border-[#123F46] px-4 py-2 transition-all flex items-center gap-1.5 font-semibold shadow-xs"
          >
            <span>GITHUB ↗</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#172126] hover:text-[#176B78] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-[#F4F3EF] border-b border-[#B8C1C3] p-6 shadow-lg flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono-tech text-xs tracking-widest text-[#172126] hover:text-[#176B78] py-2 border-b border-[#B8C1C3]/40"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://github.com/prajju661"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center font-mono-tech text-xs tracking-wider text-[#F4F3EF] bg-[#123F46] hover:bg-[#176B78] py-2.5 transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href="https://www.linkedin.com/in/srisailam-prajvalitha-49872032b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center font-mono-tech text-xs tracking-wider text-[#172126] border border-[#B8C1C3] bg-[#E7E9E8] py-2.5 hover:bg-[#176B78] hover:text-[#F4F3EF] transition-colors"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
