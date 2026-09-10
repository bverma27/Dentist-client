import React from "react";
import { clinicConfig } from "@/config/clinic";
import { ShieldCheck, Monitor, Receipt, Clock3 } from "lucide-react";

export default function TrustStrip() {
  const { clinicalCertainties } = clinicConfig;

  // Real icons paired deliberately with each clinical guarantee
  const certaintyIcons = [
    <ShieldCheck key="sterilization" className="w-5 h-5 text-[#8E6F3E]" />,
    <Monitor key="xray" className="w-5 h-5 text-[#8E6F3E]" />,
    <Receipt key="pricing" className="w-5 h-5 text-[#8E6F3E]" />,
    <Clock3 key="timing" className="w-5 h-5 text-[#8E6F3E]" />,
  ];

  return (
    <section className="bg-white border-b border-[#D8E0DB] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Label */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 pb-4 border-b border-[#E4EBE6]">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#182B24] font-medium">
            Clinical Standards & Patient Commitments
          </h2>
          <span className="text-xs text-[#5F6F69]">
            The practical protocols we uphold for every patient
          </span>
        </div>

        {/* 4-Column Architectural Grid with 1px borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D8E0DB] border border-[#D8E0DB] rounded-lg overflow-hidden">
          {clinicalCertainties.map((item, idx) => (
            <div key={item.title} className="p-6 bg-[#FDFCFB] hover:bg-white transition-colors flex flex-col">
              <div className="w-10 h-10 rounded bg-[#E4EBE6] flex items-center justify-center mb-4 shrink-0">
                {certaintyIcons[idx % certaintyIcons.length]}
              </div>
              <h3 className="text-base font-semibold text-[#182B24] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6F69] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
