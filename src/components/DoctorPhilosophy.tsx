import React from "react";
import { clinicConfig } from "@/config/clinic";
import { MessageSquare, Check } from "lucide-react";

export default function DoctorPhilosophy() {
  const { dentist, contact } = clinicConfig;

  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#F8F7F4] border-b border-[#D8E0DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold text-[#8E6F3E] tracking-wide uppercase block mb-3">
            The Practitioner & Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#182B24] tracking-tight leading-tight">
            “Dentistry should be an honest conversation, not a rushed transaction.”
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Editorial Narrative & Specialty Areas */}
          <div className="lg:col-span-12 flex flex-col space-y-6">
            
            {/* Identity Bar */}
            <div className="pb-6 border-b border-[#D8E0DB]">
              <h3 className="font-serif text-3xl font-medium text-[#182B24]">
                {dentist.name}
              </h3>
              <p className="text-sm font-medium text-[#8E6F3E] mt-1">
                {dentist.title}
              </p>
              <p className="text-xs text-[#5F6F69] mt-0.5">
                {dentist.qualifications}
              </p>
            </div>

            {/* Doctor's Stated Philosophy Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#28332E] leading-relaxed">
              {dentist.bio.map((paragraph, idx) => (
                <p key={idx} className="text-[#5F6F69]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Clinical Focus Areas */}
            <div className="pt-6">
              <span className="text-xs font-semibold text-[#182B24] uppercase tracking-wider block mb-4">
                Primary Clinical Focus
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {dentist.specialtyFocus.map((specialty) => (
                  <div
                    key={specialty}
                    className="flex items-center gap-2 px-3.5 py-2.5 bg-white border border-[#D8E0DB] rounded text-xs text-[#28332E] font-medium"
                  >
                    <Check className="w-3.5 h-3.5 text-[#8E6F3E] shrink-0" />
                    <span>{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Doctor directly */}
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Vidya Dental Care, I have a question regarding a dental concern.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#E4EBE6] hover:bg-[#D5E0D8] text-[#182B24] text-xs font-semibold rounded border border-[#C5D3C8] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#182B24]" />
                <span>Discuss Your Case on WhatsApp</span>
              </a>

              <span className="text-xs text-[#5F6F69]">
                Direct queries reviewed by the clinical team
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
