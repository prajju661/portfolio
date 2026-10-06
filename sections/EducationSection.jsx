"use client";

import { Building2, Calendar, Award } from "lucide-react";

const EDUCATION_RECORDS = [
  {
    institution: "Madanapalle Institute of Technology and Science",
    degree: "B.Tech",
    discipline: "Computer Science and Engineering – Artificial Intelligence",
    expected: "Expected May 2028",
    grade: "CGPA: 9.23 Present",
    isProminent: true,
  },
  {
    institution: "Narayana Junior College",
    degree: "Senior Secondary – Class XII",
    discipline: "Mathematics, Physics, Chemistry (MPC)",
    expected: "April 2024",
    grade: "97.4%",
    isProminent: false,
  },
  {
    institution: "Sri G Venkatappa Memorial E.M. High School",
    degree: "Secondary – Class X",
    discipline: "General Secondary Curriculum",
    expected: "April 2022",
    grade: "92%",
    isProminent: false,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 border-b border-[#B8C1C3] bg-[#E7E9E8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#B8C1C3] pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs tracking-widest text-[#B99A5B] font-bold">
              04 /
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-[#172126] tracking-tight">
              EDUCATION
            </h2>
          </div>
          <span className="font-mono-tech text-xs tracking-widest text-[#526168] uppercase">
            ACADEMIC PATHWAY
          </span>
        </div>

        {/* Clean Timeline */}
        <div className="relative border-l-2 border-[#B8C1C3] ml-4 md:ml-8 pl-6 md:pl-12 space-y-10">
          {EDUCATION_RECORDS.map((item, idx) => (
            <div key={idx} className="relative">
              
              {/* Timeline Bullet Point */}
              <div
                className={`absolute -left-[31px] md:-left-[55px] top-2 w-4 h-4 border ${
                  item.isProminent
                    ? "bg-[#176B78] border-[#176B78] ring-4 ring-[#176B78]/20"
                    : "bg-[#F4F3EF] border-[#172126]"
                }`}
              />

              {/* Box */}
              <div
                className={`p-6 md:p-8 border shadow-xs transition-colors ${
                  item.isProminent
                    ? "bg-[#F4F3EF] border-[#176B78] border-l-4"
                    : "bg-[#F4F3EF] border-[#B8C1C3]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono-tech text-xs">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#176B78]" />
                    <span className="text-[#172126] font-bold uppercase">
                      {item.isProminent ? "CURRENT DEGREE PROGRAM" : "ACADEMIC RECORD"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#526168]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.expected}</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#172126] mb-1">
                  {item.institution}
                </h3>

                <p className="font-sans-ui text-base font-semibold text-[#123F46] mb-1">
                  {item.degree} — {item.discipline}
                </p>

                <div className="inline-flex items-center gap-2 bg-[#E7E9E8] border border-[#B8C1C3] px-3.5 py-1.5 font-mono-tech text-xs font-bold text-[#B99A5B] mt-3">
                  <Award className="w-4 h-4 text-[#B99A5B]" />
                  <span>{item.grade}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
