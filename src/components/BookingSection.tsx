"use client";

import React, { useState } from "react";
import { clinicConfig } from "@/config/clinic";
import { Calendar, Phone, MessageSquare, CheckCircle2, Shield, Clock } from "lucide-react";

export default function BookingSection() {
  const { contact, bookingOptions } = clinicConfig;

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    preferredSlot: bookingOptions.timeSlots[0],
    visitReason: bookingOptions.visitReasons[0],
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking submission
    setIsSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Vidya Dental Care, I would like to request an appointment for: ${formData.fullName || "a patient"} (${formData.visitReason}, ${formData.preferredSlot}).`
  )}`;

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white border-b border-[#D8E0DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Reassurance & Direct Alternatives (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#8E6F3E] tracking-wide uppercase block mb-3">
                Appointment Consultation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#182B24] tracking-tight mb-4">
                Reserve your consultation time.
              </h2>
              <p className="text-sm sm:text-base text-[#5F6F69] leading-relaxed mb-8">
                To respect every patient’s schedule and prevent crowded waiting areas, 
                Appointments are available during the morning and evening clinic hours.
              </p>

              {/* Direct WhatsApp Alternative Banner */}
              <div className="p-6 bg-[#F8F7F4] border border-[#D8E0DB] rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  <strong className="text-sm font-semibold text-[#182B24]">
                    Prefer instant WhatsApp booking?
                  </strong>
                </div>
                <p className="text-xs text-[#5F6F69] mb-4">
                  Send a quick text with your preferred day. Our front desk team will confirm your slot directly.
                </p>
                <a
                  href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                    contact.whatsappDefaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold rounded transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp: {contact.whatsappDisplay}</span>
                </a>
              </div>

              {/* Patient Guarantees */}
              <div className="space-y-3 text-xs text-[#5F6F69]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8E6F3E] shrink-0 mt-0.5" />
                  <span>No sudden procedural costs: written estimates provided before treatment.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#8E6F3E] shrink-0 mt-0.5" />
                  <span>Prompt appointments with minimal waiting room delays.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#8E6F3E] shrink-0 mt-0.5" />
                  <span>Strict patient privacy: your details are never shared or spammed.</span>
                </div>
              </div>
            </div>

            {/* Direct Calling Box */}
            <div className="mt-8 pt-6 border-t border-[#E4EBE6]">
              <span className="text-xs text-[#5F6F69] block mb-1">
                For immediate toothache or urgent inquiries:
              </span>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#182B24] hover:text-[#8E6F3E]"
              >
                <Phone className="w-4 h-4 text-[#8E6F3E]" />
                <span>Call Clinic Desk: {contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Low-Friction Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FDFCFB] border border-[#D8E0DB] rounded-lg p-8 shadow-xs">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#182B24]">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-[#5F6F69] max-w-md mx-auto">
                    Thank you, {formData.fullName}. Our clinic coordinator will review your requested slot ({formData.preferredSlot}) and contact you via phone or WhatsApp at <strong>{formData.phoneNumber}</strong> to confirm your appointment.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded hover:bg-[#20ba5a] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Confirm Faster via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2.5 border border-[#D8E0DB] text-xs font-medium text-[#182B24] rounded hover:bg-[#E4EBE6]"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#E4EBE6] pb-4 mb-6">
                    <h3 className="text-lg font-semibold text-[#182B24]">
                      Request an Appointment Callback
                    </h3>
                    <p className="text-xs text-[#5F6F69] mt-0.5">
                      Fill out this brief form, and we will confirm the nearest available time.
                    </p>
                  </div>

                  {/* Patient Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-[#182B24] mb-1.5"
                    >
                      Patient Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Rajesh Malhotra"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D8E0DB] rounded text-sm text-[#28332E] focus:border-[#8E6F3E] focus:ring-1 focus:ring-[#8E6F3E] outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xs font-semibold text-[#182B24] mb-1.5"
                    >
                      Phone Number (Mobile / WhatsApp) *
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      required
                      placeholder="e.g. 98100 12345"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D8E0DB] rounded text-sm text-[#28332E] focus:border-[#8E6F3E] focus:ring-1 focus:ring-[#8E6F3E] outline-none transition-colors"
                    />
                  </div>

                  {/* Preferred Time Window & Reason */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="preferredSlot"
                        className="block text-xs font-semibold text-[#182B24] mb-1.5"
                      >
                        Preferred Time Window
                      </label>
                      <select
                        id="preferredSlot"
                        value={formData.preferredSlot}
                        onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D8E0DB] rounded text-sm text-[#28332E] focus:border-[#8E6F3E] focus:ring-1 focus:ring-[#8E6F3E] outline-none transition-colors"
                      >
                        {bookingOptions.timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="visitReason"
                        className="block text-xs font-semibold text-[#182B24] mb-1.5"
                      >
                        Reason for Visit
                      </label>
                      <select
                        id="visitReason"
                        value={formData.visitReason}
                        onChange={(e) => setFormData({ ...formData, visitReason: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D8E0DB] rounded text-sm text-[#28332E] focus:border-[#8E6F3E] focus:ring-1 focus:ring-[#8E6F3E] outline-none transition-colors"
                      >
                        {bookingOptions.visitReasons.map((reason) => (
                          <option key={reason} value={reason}>
                            {reason}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-xs font-semibold text-[#182B24] mb-1.5"
                    >
                      Any specific symptoms, pain duration, or dental history? (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="e.g. Sensitivity to cold liquids in lower left molar for the past week..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D8E0DB] rounded text-sm text-[#28332E] focus:border-[#8E6F3E] focus:ring-1 focus:ring-[#8E6F3E] outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#182B24] hover:bg-[#223C32] text-white font-semibold text-sm rounded shadow-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-[#B8965E]" />
                      <span>Request Appointment Callback</span>
                    </button>
                    <p className="text-[11px] text-[#5F6F69] text-center mt-2.5">
                      We respond promptly during clinic working hours. No spam, guaranteed.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
