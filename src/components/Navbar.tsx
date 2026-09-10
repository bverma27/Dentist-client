"use client";

import React, { useState } from "react";
import Link from "next/link";
import { clinicConfig } from "@/config/clinic";
import { Phone, MessageSquare, Calendar, MapPin, Menu, X, Clock } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand, contact, location } = clinicConfig;

  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F4]/95 backdrop-blur-sm border-b border-[#D8E0DB]">
      {/* Top Utility Banner: Hours & Direct Phone */}
      <div className="hidden md:block bg-[#182B24] text-[#E4EBE6] text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#B8965E]" />
              {location.sectorArea}, {location.city}
            </span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#B8965E]" />
              Mon–Sat: 10:00 AM – 1:30 PM & 4:30 PM – 8:00 PM
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-1.5 text-white hover:text-[#B8965E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8965E]" />
              <span>Call: {contact.phoneDisplay}</span>
            </a>
            <span className="text-white/40">|</span>
            <a
              href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                contact.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#E4EBE6] hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Clinic Brand Identity */}
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-[26px] font-semibold tracking-tight text-[#182B24] group-hover:text-[#8E6F3E] transition-colors">
              {brand.clinicName}
            </span>
            <span className="text-xs text-[#5F6F69] tracking-wider uppercase">
              {clinicConfig.dentist.title} · {location.sectorArea}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#28332E]">
            <a
              href="#treatments"
              className="hover:text-[#182B24] transition-colors py-1 hover:border-b-2 hover:border-[#8E6F3E]"
            >
              Treatments
            </a>
            <a
              href="#philosophy"
              className="hover:text-[#182B24] transition-colors py-1 hover:border-b-2 hover:border-[#8E6F3E]"
            >
              The Practice
            </a>
            <a
              href="#patient-experience"
              className="hover:text-[#182B24] transition-colors py-1 hover:border-b-2 hover:border-[#8E6F3E]"
            >
              Patient Care
            </a>
            <a
              href="#reviews"
              className="hover:text-[#182B24] transition-colors py-1 hover:border-b-2 hover:border-[#8E6F3E]"
            >
              Reviews
            </a>
            <a
              href="#location"
              className="hover:text-[#182B24] transition-colors py-1 hover:border-b-2 hover:border-[#8E6F3E]"
            >
              Location & Hours
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                contact.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#182B24] bg-[#E4EBE6] hover:bg-[#d5e0d8] rounded border border-[#C5D3C8] transition-colors"
              title="Chat directly on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#182B24]" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#182B24] hover:bg-[#223C32] rounded shadow-sm transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B8965E]" />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#182B24] hover:bg-[#E4EBE6] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#D8E0DB] bg-[#F8F7F4] px-5 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#28332E]">
            <a
              href="#treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E4EBE6]"
            >
              Treatments
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E4EBE6]"
            >
              The Practice & Philosophy
            </a>
            <a
              href="#patient-experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E4EBE6]"
            >
              What to Expect
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E4EBE6]"
            >
              Patient Reviews
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#E4EBE6]"
            >
              Location & Hours
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 bg-[#182B24] text-white text-sm font-medium rounded"
            >
              <Phone className="w-4 h-4 text-[#B8965E]" />
              <span>Call: {contact.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                contact.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white text-sm font-medium rounded"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 border border-[#182B24] text-[#182B24] text-sm font-medium rounded"
            >
              <Calendar className="w-4 h-4 text-[#8E6F3E]" />
              <span>Request Appointment</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
