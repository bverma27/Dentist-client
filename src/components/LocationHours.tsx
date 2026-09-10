import React from "react";
import { clinicConfig } from "@/config/clinic";
import { Clock, Phone, MessageSquare } from "lucide-react";

export default function LocationHours() {
  const { schedule, contact, dentist } = clinicConfig;

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F8F7F4] border-b border-[#D8E0DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold text-[#8E6F3E] tracking-wide uppercase block mb-3">
            Clinic Hours & Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#182B24] tracking-tight mb-4">
            Schedule a consultation with {dentist.name}.
          </h2>
          <p className="text-base text-[#5F6F69]">
            Call or message Vidya Dental Care to discuss your dental concerns and appointment availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white border border-[#D8E0DB] rounded-lg p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <Clock className="w-5 h-5 text-[#8E6F3E]" />
              <h3 className="text-base font-semibold text-[#182B24]">Consultation Timings</h3>
            </div>

            <div className="space-y-3 divide-y divide-[#E4EBE6] text-sm">
              <div className="pb-3 flex justify-between items-baseline gap-4 font-medium text-[#182B24]">
                <span>{schedule.weekdays.days}</span>
                <span>{schedule.weekdays.hours}</span>
              </div>
              <div className="pt-3 flex justify-between items-baseline gap-4 font-medium text-[#182B24]">
                <span>{schedule.weekend.days}</span>
                <span>{schedule.weekend.hours}</span>
              </div>
            </div>

            <div className="mt-5 p-3 bg-[#E4EBE6] rounded text-xs text-[#182B24]">
              {schedule.emergencyNotice}
            </div>
          </div>

          <div className="bg-white border border-[#D8E0DB] rounded-lg p-6">
            <h3 className="text-base font-semibold text-[#182B24] mb-4">Contact Vidya Dental Care</h3>
            <div className="space-y-3">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 text-[#182B24] font-medium hover:text-[#8E6F3E]"
              >
                <Phone className="w-4 h-4 text-[#8E6F3E]" />
                <span>{contact.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                  contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#182B24] font-medium hover:text-[#8E6F3E]"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
