"use client";

import React, { useState } from "react";
import { clinicConfig } from "@/config/clinic";
import { Clock, ChevronRight, CheckCircle2 } from "lucide-react";

export default function ServicesSection() {
  const { services, contact } = clinicConfig;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Restorative", "Preventive", "Orthodontics", "Family"];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white border-b border-[#D8E0DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#8E6F3E] tracking-wide uppercase block mb-3">
              Clinical Care & Procedures
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#182B24] tracking-tight">
              Honest, conservative dental treatments designed to preserve natural teeth.
            </h2>
          </div>

          <p className="text-sm text-[#5F6F69] max-w-sm">
            We practice conservative dentistry: treatments are only recommended when clinically 
            necessary, accompanied by clear radiographs and written estimates.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#E4EBE6]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-[#182B24] text-white"
                  : "bg-[#F8F7F4] text-[#5F6F69] hover:text-[#182B24] hover:bg-[#E4EBE6]"
              }`}
            >
              {category === "All" ? "All Treatments" : category}
            </button>
          ))}
        </div>

        {/* Services Grid (Structured architectural cards with 1px border) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#FDFCFB] border border-[#D8E0DB] rounded-lg p-6 flex flex-col justify-between hover:border-[#8E6F3E] transition-colors"
            >
              <div>
                {/* Category Tag & Duration */}
                <div className="flex items-center justify-between text-xs text-[#5F6F69] mb-3">
                  <span className="px-2 py-0.5 rounded bg-[#E4EBE6] text-[#182B24] font-medium">
                    {service.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#8E6F3E]" />
                    {service.typicalDuration}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl font-semibold text-[#182B24] mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5F6F69] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Common Indications */}
                <div className="pt-4 border-t border-[#E4EBE6] mb-6">
                  <span className="text-[11px] font-semibold text-[#182B24] uppercase tracking-wider block mb-2">
                    Common Indications:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#5F6F69]">
                    {service.commonIndications.map((ind, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8E6F3E] shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Visits & Booking Link */}
              <div className="pt-4 border-t border-[#E4EBE6] flex items-center justify-between">
                <div className="text-[11px] text-[#5F6F69]">
                  <strong className="block text-[#182B24]">Visit Schedule:</strong>
                  {service.expectedVisits}
                </div>

                <a
                  href={`#booking`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#182B24] hover:text-[#8E6F3E] transition-colors"
                >
                  <span>Book Consultation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Emergency Notice Footer */}
        <div className="mt-12 p-5 bg-[#F8F7F4] border border-[#D8E0DB] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <strong className="text-sm font-semibold text-[#182B24] block">
              In severe pain or dealing with a broken tooth?
            </strong>
            <p className="text-xs text-[#5F6F69] mt-0.5">
              We reserve dedicated emergency slots daily for acute toothache and trauma in Sector 15.
            </p>
          </div>

          <a
            href={`tel:${contact.emergencyPhone}`}
            className="px-4 py-2.5 bg-[#182B24] text-white text-xs font-semibold rounded hover:bg-[#223C32] transition-colors whitespace-nowrap shrink-0"
          >
            Emergency Call: {contact.emergencyPhoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
}
