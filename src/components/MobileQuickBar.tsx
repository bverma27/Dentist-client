import React from "react";
import { clinicConfig } from "@/config/clinic";
import { Phone, MessageSquare, Calendar, MapPin } from "lucide-react";

export default function MobileQuickBar() {
  const { contact, location } = clinicConfig;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-[#D8E0DB] px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-4 gap-2 text-center">
        
        {/* Direct Call */}
        <a
          href={`tel:${contact.phone}`}
          className="flex flex-col items-center justify-center py-1 text-[#182B24] hover:text-[#8E6F3E] transition-colors"
          aria-label="Call clinic"
        >
          <Phone className="w-5 h-5 mb-1 text-[#8E6F3E]" />
          <span className="text-[10px] font-semibold">Call</span>
        </a>

        {/* Instant WhatsApp */}
        <a
          href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
            contact.whatsappDefaultMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#182B24] hover:text-[#25D366] transition-colors"
          aria-label="Message on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 mb-1 text-[#25D366]" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#182B24] hover:text-[#8E6F3E] transition-colors"
          aria-label="Directions in Google Maps"
        >
          <MapPin className="w-5 h-5 mb-1 text-[#182B24]" />
          <span className="text-[10px] font-semibold">Directions</span>
        </a>

        {/* Book */}
        <a
          href="#booking"
          className="flex flex-col items-center justify-center py-1 bg-[#182B24] text-white rounded transition-colors"
          aria-label="Book appointment"
        >
          <Calendar className="w-5 h-5 mb-1 text-[#B8965E]" />
          <span className="text-[10px] font-semibold">Book</span>
        </a>

      </div>
    </div>
  );
}
