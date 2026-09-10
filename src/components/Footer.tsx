import React from "react";
import { clinicConfig } from "@/config/clinic";
import { Shield, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  const { brand, dentist, location, contact } = clinicConfig;

  return (
    <footer className="bg-[#12211C] text-[#E4EBE6] pt-16 pb-24 sm:pb-16 border-t border-[#182B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand & Doctor Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-white">
              {brand.clinicName}
            </h3>
            <p className="text-xs text-[#E4EBE6]/80 leading-relaxed max-w-md">
              {brand.shortDescription}
            </p>

            <div className="pt-2 flex items-start gap-2.5 text-xs text-[#B8965E]">
              <Shield className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-medium">
                  {dentist.name} · {dentist.qualifications}
                </strong>
                <span className="text-[#E4EBE6]/70">
                  {dentist.registrationNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Location & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <span className="text-xs font-semibold text-[#B8965E] uppercase tracking-wider block">
              Practice Location
            </span>
            <p className="text-white font-medium">
              {location.premiseName}
            </p>
            <p className="text-[#E4EBE6]/75">
              {location.streetAddress}, {location.sectorArea}, {location.city}, {location.state} – {location.postalCode}
            </p>
            <p className="text-[#E4EBE6]/75">
              Near {location.landmark} ({location.metroStationNearby})
            </p>

            <div className="pt-2 space-y-1.5">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 text-white hover:text-[#B8965E] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8965E]" />
                <span>Call Clinic: {contact.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Page Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="text-xs font-semibold text-[#B8965E] uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-[#E4EBE6]/80">
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Treatments & Procedures
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  The Practice & Philosophy
                </a>
              </li>
              <li>
                <a href="#patient-experience" className="hover:text-white transition-colors">
                  What to Expect as a Patient
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Verified Patient Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Map Directions
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors font-medium text-[#B8965E]">
                  Request an Appointment →
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Ethical Medical Notice & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#E4EBE6]/60">
          <p className="max-w-2xl leading-relaxed">
            <strong>Medical Notice:</strong> Information published on this site is provided for general patient education 
            and does not substitute formal chairside diagnostic examination. All clinical recommendations are made after in-person 
            evaluation by a qualified dental surgeon.
          </p>

          <p className="shrink-0">
            © {new Date().getFullYear()} {brand.clinicName}. Sector 15, Faridabad.
          </p>
        </div>

      </div>
    </footer>
  );
}
