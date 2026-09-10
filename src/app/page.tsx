import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import DoctorPhilosophy from "@/components/DoctorPhilosophy";
import ServicesSection from "@/components/ServicesSection";
import PatientExperience from "@/components/PatientExperience";
import ReviewsSection from "@/components/ReviewsSection";
import LocationHours from "@/components/LocationHours";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import MobileQuickBar from "@/components/MobileQuickBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#28332E]">
      {/* Top Fixed & Utility Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section: Direct Grounding, Location, and Core Contact Actions */}
        <Hero />

        {/* 2. Trust Badges: Class-B Autoclave, Low-Radiation Sensors, Price Transparency */}
        <TrustStrip />

        {/* 3. Doctor & Philosophy: Dr. Vikram Sharma, Qualifications, Unhurried Diagnosis */}
        <DoctorPhilosophy />

        {/* 4. Treatments Catalog: Indications, Duration, and Conservative Restorations */}
        <ServicesSection />

        {/* 5. Patient Experience: 4 Sequential Steps From Arrival to WhatsApp Follow-up */}
        <PatientExperience />

        {/* 6. Genuine Reviews: Verifiable Google Reviews from Faridabad Patients */}
        <ReviewsSection />

        {/* 7. Location & Accessibility: Sector 15 Faridabad, Parking, Metro, Timings & Map */}
        <LocationHours />

        {/* 8. Booking Section: Low-Friction Appointment Request & Instant WhatsApp */}
        <BookingSection />
      </main>

      {/* Structured Legal, Registration & Practice Footer */}
      <Footer />

      {/* Sticky Mobile Conversion Bar (< 768px): Call, WhatsApp, Directions, Book */}
      <MobileQuickBar />
    </div>
  );
}
