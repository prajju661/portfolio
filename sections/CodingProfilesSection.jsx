"use client";

import { Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function CodingProfilesSection() {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-[#B8C1C3] bg-[#D5DADB]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#B8C1C3] pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B99A5B] font-bold">
              07 /
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-[#172126] tracking-tight">
              CODE
            </h2>
          </div>
          <span className="font-mono-tech text-xs tracking-widest text-[#526168] uppercase">
            CODING & REPOSITORIES
          </span>
        </div>

        {/* Corporate Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* GitHub Card - Deep Peacock Teal Background */}
          <div className="lg:col-span-7 border border-[#176B78] bg-[#123F46] text-[#F4F3EF] p-8 md:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-[#2C8292]/40 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-5 h-5 text-[#B99A5B]" />
                  <span className="font-mono-tech text-xs font-bold text-[#F4F3EF] uppercase">
                    GITHUB REPOSITORIES
                  </span>
                </div>
                <span className="font-mono-tech text-xs font-bold text-[#B99A5B]">
                  PRIMARY CTA
                </span>
              </div>

              <h3 className="font-heading text-3xl font-bold text-[#F4F3EF] mb-3">
                github.com/prajju661
              </h3>

              <p className="font-sans-ui text-sm text-[#D5DADB] leading-relaxed mb-6">
                Access full source code repositories, commit histories, and codebases for AI urban intelligence platforms, RAG item trackers, and Python data structures.
              </p>
            </div>

            <div className="pt-6 border-t border-[#2C8292]/40 flex items-center justify-between">
              <span className="font-mono-tech text-xs text-[#D5DADB]">
                PROFILE / PRAJJU661
              </span>

              <a
                href="https://github.com/prajju661"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#176B78] hover:bg-[#2C8292] text-[#F4F3EF] font-mono-tech text-xs tracking-widest uppercase px-6 py-3.5 transition-colors font-bold shadow-xs"
              >
                <span>VISIT GITHUB PROFILE ↗</span>
              </a>
            </div>
          </div>

          {/* HackerRank Card - Off-White Surface */}
          <div className="lg:col-span-5 border border-[#B8C1C3] bg-[#F4F3EF] p-8 md:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-[#B8C1C3] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#176B78]" />
                  <span className="font-mono-tech text-xs font-bold text-[#172126] uppercase">
                    HACKERRANK RATINGS
                  </span>
                </div>
                <span className="font-mono-tech text-xs text-[#B99A5B] font-bold">
                  VERIFIED
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#172126] mb-3">
                HackerRank
              </h3>

              <p className="font-sans-ui text-xs text-[#526168] mb-6">
                4-Star ratings in computational problem solving tracks:
              </p>

              <div className="space-y-2.5 font-mono-tech text-xs">
                {[
                  { domain: "Problem Solving", stars: "4 Stars ★★★★" },
                  { domain: "Python", stars: "4 Stars ★★★★" },
                  { domain: "C", stars: "4 Stars ★★★★" },
                ].map((item) => (
                  <div
                    key={item.domain}
                    className="flex items-center justify-between p-3 bg-[#E7E9E8] border border-[#B8C1C3]"
                  >
                    <span className="font-bold text-[#172126]">{item.domain}</span>
                    <span className="text-[#176B78] font-bold">{item.stars}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#B8C1C3] font-mono-tech text-[11px] text-[#526168] flex items-center justify-between">
              <span>STANDARDIZED PROBLEM SOLVING</span>
              <span className="text-[#B99A5B] font-bold">4-STAR</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
