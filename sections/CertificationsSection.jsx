"use client";

import { Award, CheckCircle2 } from "lucide-react";

const CERTIFICATIONS_LIST = [
  {
    title: "Oracle Certified Foundations Associate",
    issuer: "Certification of Recognition – Oracle",
    domain: "DATABASE & CLOUD",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    domain: "CLOUD COMPUTING",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-[#B8C1C3] bg-[#D5DADB]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#B8C1C3] pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B99A5B] font-bold">
              05 /
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-[#172126] tracking-tight">
              CERTIFICATIONS
            </h2>
          </div>
          <span className="font-mono-tech text-xs tracking-widest text-[#526168] uppercase">
            VERIFIED CREDENTIALS
          </span>
        </div>

        {/* Clean Rows */}
        <div className="divide-y divide-[#B8C1C3] border-y border-[#B8C1C3]">
          {CERTIFICATIONS_LIST.map((cert, idx) => (
            <div
              key={idx}
              className="py-6 px-4 md:px-8 bg-[#F4F3EF] hover:bg-[#E7E9E8] transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#176B78]" />
                  <span className="font-mono-tech text-[11px] text-[#526168] uppercase font-semibold">
                    {cert.domain}
                  </span>
                  <span className="font-mono-tech text-[10px] text-[#B99A5B] font-bold ml-2">
                    [0{idx + 1}]
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#172126]">
                  {cert.title}
                </h3>
                <p className="font-sans-ui text-xs text-[#526168]">
                  {cert.issuer}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold text-[#176B78] bg-[#E7E9E8] border border-[#B8C1C3] px-3.5 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#176B78]" />
                <span>OFFICIAL VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
