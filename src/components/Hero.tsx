import React from "react";
import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import { Calendar, MessageSquare, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const { brand, contact, location, schedule, images, dentist } = clinicConfig;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#D8E0DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Information & Direct Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Grounded Location Pill (No tracked-out all-caps chrome) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EBE6] text-[#182B24] text-xs font-medium border border-[#CAD7CE] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8E6F3E]" />
              <span>Independent Practice · {location.sectorArea}, {location.city}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] font-medium text-[#182B24] tracking-tight mb-6">
              {brand.tagline}
            </h1>

            {/* Grounded Sub-paragraph */}
            <p className="text-base sm:text-lg text-[#5F6F69] leading-relaxed max-w-2xl mb-8">
              Led by {dentist.name} ({dentist.qualifications}). We provide deliberate, 
              pain-managed dental care using digital diagnostics, transparent treatment planning, 
              and hospital-grade sterilization. No rushed appointments.
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
                  <strong className="font-semibold block text-[#182B24]">Single-Sitting RCT</strong>
                  <span className="text-[#5F6F69]">Painless rotary endodontics</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8E6F3E] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-[#182B24]">Digital Low-Dose X-Ray</strong>
                  <span className="text-[#5F6F69]">Chairside instant display</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8E6F3E] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-[#182B24]">Written Price Clarity</strong>
                  <span className="text-[#5F6F69]">Clear estimate before starting</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Operatory Photo + Practical Visiting Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#D8E0DB] rounded-lg overflow-hidden shadow-xs">
              
              {/* Authentic Clinic Operatory Photography */}
              <div className="relative aspect-[4/3] w-full bg-[#E4EBE6]">
                <Image
                  src={images.heroOperatory}
                  alt={`${brand.clinicName} operatory chair in Sector 15 Faridabad`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 right-3 bg-[#182B24]/85 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded">
                  Surgery Operatory · Sector 15
                </div>
              </div>

              {/* Practical Clinic Quick Card */}
              <div className="p-6 bg-white space-y-4">
                
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

                {/* Exact Sector Proximity & Map Action */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8E6F3E] shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed text-[#5F6F69]">
                    <strong className="block text-sm font-semibold text-[#182B24]">
                      {location.premiseName}
                    </strong>
                    {location.streetAddress}, {location.sectorArea}, {location.city}
                    <div className="mt-1 text-[#8E6F3E] font-medium">
                      Landmark: {location.landmark}
                    </div>
                  </div>
                </div>

                {/* Fast Directions Button */}
                <div className="pt-2">
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#F8F7F4] hover:bg-[#E4EBE6] border border-[#D8E0DB] text-xs font-semibold text-[#182B24] rounded transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#8E6F3E]" />
                    <span>Get Directions via Google Maps</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
