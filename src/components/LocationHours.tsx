import React from "react";
import { clinicConfig } from "@/config/clinic";
import { MapPin, Clock, Phone, MessageSquare, Car, Accessibility, Navigation } from "lucide-react";

export default function LocationHours() {
  const { location, schedule, contact } = clinicConfig;

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F8F7F4] border-b border-[#D8E0DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold text-[#8E6F3E] tracking-wide uppercase block mb-3">
            Location & Accessibility
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#182B24] tracking-tight mb-4">
            Visiting our surgery in Sector 15, Faridabad.
          </h2>
          <p className="text-base text-[#5F6F69]">
            Centrally located in the Sector 15 commercial market with dedicated parking 
            and elevator access. Easy connectivity from Delhi-Mathura Road and Bata Chowk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Practical Visit Details & Hours (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white border border-[#D8E0DB] rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8E6F3E] shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-[#182B24]">
                    Physical Address
                  </h3>
                  <p className="text-sm text-[#28332E] mt-1 font-medium">
                    {location.premiseName}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5F6F69]">
                    {location.streetAddress}, {location.sectorArea}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5F6F69]">
                    {location.city}, {location.state} – {location.postalCode}, {location.country}
                  </p>
                  <div className="mt-2 text-xs font-medium text-[#8E6F3E]">
                    Landmark: {location.landmark}
                  </div>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="pt-4 border-t border-[#E4EBE6] space-y-2.5 text-xs text-[#5F6F69]">
                <div className="flex items-start gap-2">
                  <Navigation className="w-4 h-4 text-[#8E6F3E] shrink-0 mt-0.5" />
                  <span><strong>Metro Access:</strong> {location.metroStationNearby}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-[#8E6F3E] shrink-0 mt-0.5" />
                  <span><strong>Parking:</strong> {location.parkingDetails}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Accessibility className="w-4 h-4 text-[#8E6F3E] shrink-0 mt-0.5" />
                  <span><strong>Accessibility:</strong> {location.accessibilityNotes}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#182B24] hover:bg-[#223C32] text-white text-xs font-semibold rounded transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#B8965E]" />
                  <span>Open Directions in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Operating Schedule Card */}
            <div className="bg-white border border-[#D8E0DB] rounded-lg p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <Clock className="w-5 h-5 text-[#8E6F3E]" />
                <h3 className="text-base font-semibold text-[#182B24]">
                  Consultation Timings
                </h3>
              </div>

              <div className="space-y-3 divide-y divide-[#E4EBE6] text-xs sm:text-sm">
                <div className="pb-3">
                  <div className="flex justify-between items-baseline font-medium text-[#182B24]">
                    <span>{schedule.weekdays.days}</span>
                    <span>{schedule.weekdays.hours}</span>
                  </div>
                  {schedule.weekdays.note && (
                    <p className="text-xs text-[#5F6F69] mt-0.5">
                      {schedule.weekdays.note}
                    </p>
                  )}
                </div>

                <div className="pt-3">
                  <div className="flex justify-between items-baseline font-medium text-[#182B24]">
                    <span>{schedule.weekend.days}</span>
                    <span>{schedule.weekend.hours}</span>
                  </div>
                  {schedule.weekend.note && (
                    <p className="text-xs text-[#5F6F69] mt-0.5">
                      {schedule.weekend.note}
                    </p>
                  )}
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="mt-4 p-3 bg-[#E4EBE6] rounded text-xs text-[#182B24]">
                <strong className="block font-semibold mb-0.5">Urgent Toothache?</strong>
                {schedule.emergencyNotice}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Frame (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#D8E0DB] rounded-lg overflow-hidden shadow-xs h-full flex flex-col">
              <div className="p-4 border-b border-[#E4EBE6] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#182B24]">
                  Sector 15 Market, Faridabad
                </span>
                <span className="text-xs text-[#5F6F69]">
                  Near Bata Chowk Metro
                </span>
              </div>

              <div className="relative w-full h-[380px] lg:h-[450px] bg-[#E4EBE6]">
                <iframe
                  title="Clinic location in Sector 15 Faridabad"
                  src={location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-[#FDFCFB] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-4">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-1.5 text-[#182B24] font-medium hover:text-[#8E6F3E]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8E6F3E]" />
                    <span>{contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={`https://wa.me/${contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#182B24] font-medium hover:text-[#8E6F3E]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8E6F3E] font-semibold hover:underline"
                >
                  View full map →
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
