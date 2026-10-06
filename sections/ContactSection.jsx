"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Contact3DVisual from "@/components/3d/Contact3DVisual";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("prajvalithagowd11@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 border-b border-[#2C8292]/40 bg-[#123F46] text-[#F4F3EF]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#2C8292]/40 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B99A5B] font-bold">
              08 /
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-[#F4F3EF] tracking-tight">
              CONTACT
            </h2>
          </div>
          <span className="font-mono-tech text-xs tracking-widest text-[#D5DADB] uppercase">
            OPEN FOR OPPORTUNITIES
          </span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F3EF] leading-tight">
              LET'S BUILD SOMETHING USEFUL.
            </h3>

            <p className="font-sans-ui text-base sm:text-lg text-[#D5DADB] max-w-2xl leading-relaxed">
              "Interested in AI, software engineering, or building practical intelligent systems? Let's connect."
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="mailto:prajvalithagowd11@gmail.com"
                className="group inline-flex items-center gap-2 bg-[#F4F3EF] hover:bg-[#2C8292] text-[#123F46] hover:text-[#F4F3EF] font-mono-tech text-xs tracking-widest uppercase px-7 py-4 transition-colors font-bold shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL ME</span>
              </a>

              <a
                href="https://github.com/prajju661"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#2C8292] hover:border-[#F4F3EF] bg-[#123F46] text-[#F4F3EF] font-mono-tech text-xs tracking-widest uppercase px-6 py-4 transition-colors font-semibold"
              >
                <GithubIcon className="w-4 h-4 text-[#D5DADB]" />
                <span>GITHUB ↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/srisailam-prajvalitha-49872032b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#2C8292] hover:border-[#F4F3EF] bg-[#123F46] text-[#F4F3EF] font-mono-tech text-xs tracking-widest uppercase px-6 py-4 transition-colors font-semibold"
              >
                <LinkedinIcon className="w-4 h-4 text-[#D5DADB]" />
                <span>LINKEDIN ↗</span>
              </a>
            </div>

            {/* Contact Details Grid */}
            <div className="pt-6 border-t border-[#2C8292]/40 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-[#2C8292]/60 bg-[#172126]/60 shadow-xs">
                <span className="font-mono-tech text-[10px] text-[#B99A5B] uppercase block mb-1 font-bold">
                  EMAIL ADDRESS
                </span>
                <div className="flex items-center justify-between">
                  <a
                    href="mailto:prajvalithagowd11@gmail.com"
                    className="font-mono-tech text-xs font-bold text-[#F4F3EF] hover:text-[#2C8292] transition-colors break-all"
                  >
                    prajvalithagowd11@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-1 border border-[#2C8292] bg-[#123F46] text-[#F4F3EF] hover:bg-[#176B78] transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#B99A5B]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="p-4 border border-[#2C8292]/60 bg-[#172126]/60 shadow-xs">
                <span className="font-mono-tech text-[10px] text-[#B99A5B] uppercase block mb-1 font-bold">
                  PHONE NUMBER
                </span>
                <a
                  href="tel:+917569269673"
                  className="font-mono-tech text-xs font-bold text-[#F4F3EF] hover:text-[#2C8292] transition-colors"
                >
                  +91-7569269673
                </a>
              </div>
            </div>

            {copied && (
              <div className="p-2 bg-[#176B78] text-[#F4F3EF] text-[10px] font-mono-tech text-center font-bold">
                EMAIL COPIED TO CLIPBOARD
              </div>
            )}
          </div>

          {/* Right Column: 3D Orbital Sphere Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Contact3DVisual />
          </div>

        </div>

      </div>
    </section>
  );
}
