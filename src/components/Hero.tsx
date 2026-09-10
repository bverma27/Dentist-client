import React from "react";
import { clinicConfig } from "@/config/clinic";
import { Calendar, MessageSquare, Phone, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const { brand, contact, schedule, dentist } = clinicConfig;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#D8E0DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Information & Direct Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Grounded Location Pill (No tracked-out all-caps chrome) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EBE6] text-[#182B24] text-xs font-medium border border-[#CAD7CE] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8E6F3E]" />
              <span>Specialist dental care</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] font-medium text-[#182B24] tracking-tight mb-6">
              {brand.tagline}
            </h1>

            {/* Grounded Sub-paragraph */}
            <p className="text-base sm:text-lg text-[#5F6F69] leading-relaxed max-w-2xl mb-8">
              Led by {dentist.name} ({dentist.qualifications}), {dentist.title.toLowerCase()}.
            </p>

            {/* Primary Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#182B24] hover:bg-[#223C32] text-white font-medium text-sm rounded shadow-sm transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#B8965E]" />
                <span>Book a Consultation</span>
              </a>

              <a
                href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                  contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#E4EBE6] hover:bg-[#D5E0D8] text-[#182B24] font-medium text-sm rounded border border-[#C5D3C8] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#182B24]" />
                <span>WhatsApp: {contact.whatsappDisplay}</span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-[#5F6F69] hover:text-[#182B24] font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8E6F3E]" />
                <span>Direct Call</span>
              </a>
            </div>

            {/* Concrete Practical Realities (Not fake marketing badges) */}
            <div className="w-full pt-6 border-t border-[#D8E0DB] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#28332E]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8E6F3E] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-[#182B24]">Periodontics</strong>
                  <span className="text-[#5F6F69]">Focused gum care</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8E6F3E] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-[#182B24]">Oral Implantology</strong>
                  <span className="text-[#5F6F69]">Implant consultations</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8E6F3E] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-[#182B24]">Qualified Doctor</strong>
                  <span className="text-[#5F6F69]">BDS, MDS</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Practical Visiting Card */}
          <div className="lg:col-span-5 lg:pt-12">
            <div className="bg-white border border-[#D8E0DB] rounded-lg p-6 shadow-xs">
                
                {/* Daily Schedule & Status */}
                <div className="flex items-start justify-between pb-4 border-b border-[#E4EBE6]">
                  <div>
                    <span className="text-xs font-semibold text-[#182B24] uppercase tracking-wider block">
                      Consultation Hours
                    </span>
                    <p className="text-sm text-[#28332E] mt-0.5 font-medium">
                      {schedule.weekdays.hours}
                    </p>
                    <span className="text-xs text-[#5F6F69]">
                      {schedule.weekdays.days}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E4EBE6] text-[#182B24] text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Open Today
                  </span>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
