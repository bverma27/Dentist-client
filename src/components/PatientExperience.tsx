import React from "react";
import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import { Clock } from "lucide-react";

export default function PatientExperience() {
  const { patientExperience, images } = clinicConfig;

  return (
    <section id="patient-experience" className="py-20 lg:py-28 bg-[#F8F7F4] border-b border-[#D8E0DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-[#8E6F3E] tracking-wide uppercase block mb-3">
            The Patient Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#182B24] tracking-tight mb-4">
            What happens when you visit us in Sector 15.
          </h2>
          <p className="text-base text-[#5F6F69]">
            We know dental anxiety is real. Here is the chronological sequence of our care, 
            so there are no surprises from the moment you step through our door.
          </p>
        </div>

        {/* Sequential 4-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {patientExperience.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white border border-[#D8E0DB] rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-bold text-[#8E6F3E]">
                    {step.stepNumber}
                  </span>
                  {step.durationEstimate && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#5F6F69] bg-[#F8F7F4] px-2 py-0.5 rounded border border-[#E4EBE6]">
                      <Clock className="w-3 h-3 text-[#8E6F3E]" />
                      {step.durationEstimate}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-[#182B24] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5F6F69] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="w-8 h-0.5 bg-[#8E6F3E]/30 mt-6" />
            </div>
          ))}
        </div>

        {/* Atmosphere & Surgery Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="border border-[#D8E0DB] bg-white rounded-lg p-3">
            <div className="relative aspect-[16/10] w-full rounded overflow-hidden bg-[#E4EBE6]">
              <Image
                src={images.consultationRoom}
                alt="Unhurried consultation desk in Sector 15 Faridabad"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <strong className="text-xs font-semibold text-[#182B24] block">
                The Consultation Room
              </strong>
              <p className="text-xs text-[#5F6F69] mt-0.5">
                Every diagnosis is explained seated across a desk with your digital radiographs displayed on screen.
              </p>
            </div>
          </div>

          <div className="border border-[#D8E0DB] bg-white rounded-lg p-3">
            <div className="relative aspect-[16/10] w-full rounded overflow-hidden bg-[#E4EBE6]">
              <Image
                src={images.sterilizationStation}
                alt="Hospital grade sterilization station"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <strong className="text-xs font-semibold text-[#182B24] block">
                Class-B Autoclave Protocol
              </strong>
              <p className="text-xs text-[#5F6F69] mt-0.5">
                All handpieces and diagnostic instruments are steam-sterilized and unsealed in your presence.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
