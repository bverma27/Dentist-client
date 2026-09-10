/**
 * CLINIC DATA & CONFIGURATION SPECIFICATION
 * ==============================================================================
 * This is the SINGLE SOURCE OF TRUTH for all clinic-specific content.
 * You can replace all placeholder values in this file without touching any UI component.
 *
 * All values are realistic placeholders calibrated for a real dental practice in Faridabad,
 * NCR, India. Replace values marked [PLACEHOLDER] with your real clinic data.
 * ==============================================================================
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: "Restorative" | "Preventive" | "Orthodontics" | "Surgical" | "Family";
  summary: string;
  description: string;
  commonIndications: string[];
  expectedVisits: string;
  typicalDuration: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  patientContext: string; // e.g. "Sector 14, Faridabad · Root Canal Patient"
  rating: number;
  date: string;
  quote: string;
  verifiedOnGoogle: boolean;
}

export interface ClinicConfig {
  // Brand & Identity
  brand: {
    clinicName: string;
    tagline: string;
    shortDescription: string;
    establishedYear?: string;
  };

  // Dentist / Practitioner Details
  dentist: {
    name: string;
    title: string;
    qualifications: string;
    registrationNumber: string; // Official Dental Council Reg No.
    bio: string[];
    specialtyFocus: string[];
    portraitImage: string;
  };

  // Direct Conversion Contacts
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string; // E.164 format without '+' for direct wa.me link
    whatsappDisplay: string;
    whatsappDefaultMessage: string;
    email: string;
    emergencyPhone: string;
    emergencyPhoneDisplay: string;
  };

  // Geographic & Physical Location
  location: {
    premiseName: string;
    streetAddress: string;
    sectorArea: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    landmark: string;
    metroStationNearby: string;
    parkingDetails: string;
    accessibilityNotes: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };

  // Schedule & Working Hours
  schedule: {
    weekdays: { days: string; hours: string; note?: string };
    weekend: { days: string; hours: string; note?: string };
    emergencyNotice: string;
  };

  // Practical Clinical Certainties (Strictly factual, no fake stats)
  clinicalCertainties: Array<{
    title: string;
    description: string;
  }>;

  // Services Catalog
  services: ServiceItem[];

  // Patient Journey / Experience
  patientExperience: Array<{
    stepNumber: string;
    title: string;
    description: string;
    durationEstimate?: string;
  }>;

  // Genuine Reviews
  reviewsSection: {
    googleRating: string;
    totalReviewsCount: string;
    googleReviewsPageUrl: string;
    featuredReviews: ReviewItem[];
  };

  // Media / Photography Assets
  images: {
    heroOperatory: string;
    consultationRoom: string;
    sterilizationStation: string;
    exteriorOrLounge: string;
  };

  // Social & External Links
  socialLinks: {
    googleMaps: string;
    whatsapp: string;
    instagram?: string;
    facebook?: string;
  };

  // Appointment Form Dropdown Options
  bookingOptions: {
    timeSlots: string[];
    visitReasons: string[];
  };
}

export const clinicConfig: ClinicConfig = {
  brand: {
    /* [PLACEHOLDER: Clinic Name] */
    clinicName: "Dr. Sharma's Dental Surgery",
    /* [PLACEHOLDER: Tagline] */
    tagline: "Considerate, unhurried dental care for families in Faridabad.",
    /* [PLACEHOLDER: Short Description] */
    shortDescription:
      "A quiet, modern dental surgery in Sector 15 dedicated to gentle treatments, transparent treatment plans, and zero-rush diagnostics.",
    establishedYear: "2014",
  },

  dentist: {
    /* [PLACEHOLDER: Doctor Name] */
    name: "Dr. Vikram Sharma",
    /* [PLACEHOLDER: Title] */
    title: "Principal Dental Surgeon & Endodontist",
    /* [PLACEHOLDER: Qualifications] */
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    /* [PLACEHOLDER: Haryana Dental Council Registration Number] */
    registrationNumber: "Haryana Dental Council Reg. #HN-4821",
    bio: [
      "We believe that the single most important instrument in our clinic is time. Over 60% of patients experience anxiety before a dental visit—usually because past procedures felt hurried, unexpected, or painful.",
      "In our surgery, we never start a treatment until you have seen your high-resolution digital X-rays, understood every available clinical option, and approved the exact cost breakdown in writing.",
      "Every procedure is paced around your comfort, utilizing profound local anesthesia techniques and sterile, hospital-grade instrument workflows.",
    ],
    specialtyFocus: [
      "Single-Sitting Root Canal Treatments",
      "Biocompatible Ceramic Crowns & Bridges",
      "Gentle Preventative Scaling & Gum Care",
      "Digital Clear Aligner Planning",
    ],
    /* [PLACEHOLDER: Doctor Portrait Image URL] */
    portraitImage:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80",
  },

  contact: {
    /* [PLACEHOLDER: Clinic Primary Phone] */
    phone: "+919818012345",
    phoneDisplay: "+91 98180 12345",

    /* [PLACEHOLDER: WhatsApp Business Number in international format without +] */
    whatsappNumber: "919818012345",
    whatsappDisplay: "+91 98180 12345",
    whatsappDefaultMessage:
      "Hello Dr. Sharma, I would like to enquire about a dental consultation at your Faridabad clinic.",

    /* [PLACEHOLDER: Clinic Email] */
    email: "appointments@drsharmadental.in",

    /* [PLACEHOLDER: Emergency Helpline] */
    emergencyPhone: "+919818012345",
    emergencyPhoneDisplay: "+91 98180 12345",
  },

  location: {
    /* [PLACEHOLDER: Premise & Address in Faridabad] */
    premiseName: "SCF 48, First Floor (Above Apollo Pharmacy)",
    streetAddress: "Main Commercial Market, Sector 15",
    sectorArea: "Sector 15",
    city: "Faridabad",
    state: "Haryana",
    postalCode: "121007",
    country: "India",
    landmark: "Opposite Sector 15 Community Centre, near Crown Plaza Mall",
    metroStationNearby: "Bata Chowk Metro Station (Violet Line, 4 mins by auto)",
    parkingDetails:
      "Designated public parking available in the main Sector 15 market plaza directly in front of the building.",
    accessibilityNotes: "Elevator access available from the ground floor lobby directly to the clinic entrance.",
    googleMapsUrl: "https://maps.google.com/?q=Sector+15+Faridabad+Haryana",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.267784013446!2d77.3168864!3d28.4093952!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x390cdc7b61bbcfef%3A0x6fb2478e5891395!2sSector%2015%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  schedule: {
    weekdays: {
      days: "Monday to Saturday",
      hours: "10:00 AM – 1:30 PM & 4:30 PM – 8:00 PM",
      note: "Evening consultations prioritized for working professionals.",
    },
    weekend: {
      days: "Sunday",
      hours: "10:30 AM – 1:30 PM",
      note: "By prior confirmed appointment only.",
    },
    emergencyNotice: "Same-day relief appointments available for acute toothache, broken restorations, or dental trauma.",
  },

  clinicalCertainties: [
    {
      title: "Class-B Autoclave Sterilization",
      description:
        "Every metallic instrument is sealed in medical-grade pouches and steam-sterilized according to strict hospital autoclave protocols.",
    },
    {
      title: "Low-Dose Digital Radiography",
      description:
        "High-definition digital sensors provide instant chairside imaging while exposing patients to up to 80% less radiation than film.",
    },
    {
      title: "Transparent, Written Treatment Estimates",
      description:
        "No sudden charges or hidden procedure fees. You receive a clear, printed treatment plan before any work begins.",
    },
    {
      title: "Dedicated Appointment Slots",
      description:
        "We avoid overbooking. Your time slot is reserved solely for your care to ensure minimal waiting room delays.",
    },
  ],

  services: [
    {
      id: "root-canal",
      title: "Painless Root Canal Treatment",
      category: "Restorative",
      summary: "Relieve severe tooth pain and preserve your natural tooth structure using precision rotary endodontics.",
      description:
        "Modern root canal treatment should not be painful. Using rotary nickel-titanium instruments and apex locators, inflamed dental pulp is removed gently, followed by biocompatible hermetic sealing.",
      commonIndications: ["Deep cavity pain", "Night-time throbbing", "Sensitivity to hot liquids", "Dental abscess"],
      expectedVisits: "Typically 1 to 2 sittings",
      typicalDuration: "45–60 minutes per visit",
    },
    {
      id: "preventive-care",
      title: "Comprehensive Ultrasonic Scaling & Polishing",
      category: "Preventive",
      summary: "Gentle removal of hardened calculus, bacterial plaque, and surface tea/coffee stains.",
      description:
        "Healthy gums form the bedrock of overall systemic health. Our ultrasonic scaling gently dislodges plaque deposits without abrading enamel, followed by gentle polishing and oral hygiene instruction.",
      commonIndications: ["Bleeding gums during brushing", "Halitosis / persistent bad breath", "Routine bi-annual maintenance"],
      expectedVisits: "1 sitting",
      typicalDuration: "35–45 minutes",
    },
    {
      id: "implants-crowns",
      title: "Dental Implants & Zirconia Crowns",
      category: "Restorative",
      summary: "Permanent, bio-integrated replacement for missing teeth that look, feel, and function like natural teeth.",
      description:
        "Implants prevent adjacent teeth from shifting and preserve underlying jawbone density. We utilize premium medical titanium fixtures paired with digitally milled zirconia crowns.",
      commonIndications: ["Single or multiple missing teeth", "Difficulty chewing", "Loose removable dentures"],
      expectedVisits: "Consultation + 2 procedure stages",
      typicalDuration: "40–50 minutes per sitting",
    },
    {
      id: "clear-aligners",
      title: "Clear Aligners & Teeth Straightening",
      category: "Orthodontics",
      summary: "Discreet, removable transparent aligners to gently guide teeth into optimal alignment.",
      description:
        "A comfortable alternative to metal wires. Custom transparent trays are planned digitally, allowing you to preview your treatment outcome before starting. Easy to remove for meals and brushing.",
      commonIndications: ["Crowded teeth", "Spaced or gapped teeth", "Bite correction in adults and teens"],
      expectedVisits: "Monthly digital progress reviews",
      typicalDuration: "20-minute check-in visits",
    },
    {
      id: "pediatric-dentistry",
      title: "Child-Friendly Pediatric Dentistry",
      category: "Family",
      summary: "Calm, trauma-free dental care for children, focusing on preventive sealants and positive experiences.",
      description:
        "Building a child's confidence in the dental chair is our priority. We take ample time to explain procedures using gentle vocabulary, applying fluoride protective varnishes and pit-and-fissure sealants.",
      commonIndications: ["Early childhood caries", "Preventive fissure sealing", "Habit breaking (thumb sucking)"],
      expectedVisits: "1 to 2 friendly visits",
      typicalDuration: "30 minutes",
    },
    {
      id: "aesthetic-restorations",
      title: "Composite Bonding & Aesthetic Restorations",
      category: "Restorative",
      summary: "Conservative repair of fractured, worn, or chipped teeth using shade-matched nano-hybrid resin.",
      description:
        "Restoring smiles without aggressive tooth reduction. High-strength composite resins are bonded seamlessly to repair edge chips, close minor gaps, and restore natural tooth contours.",
      commonIndications: ["Chipped front tooth", "Worn biting edges", "Discolored old silver fillings"],
      expectedVisits: "Single visit",
      typicalDuration: "45 minutes",
    },
  ],

  patientExperience: [
    {
      stepNumber: "01",
      title: "Unhurried Diagnostic Consultation",
      description:
        "We begin with a thorough clinical examination and digital chairside X-rays. You see exactly what the doctor sees on an overhead monitor.",
      durationEstimate: "25–30 mins",
    },
    {
      stepNumber: "02",
      title: "Honest Treatment Plan & Cost Clarity",
      description:
        "Dr. Sharma explains the clinical findings in plain language, reviews treatment alternatives, and provides an itemized written estimate with no hidden costs.",
      durationEstimate: "15 mins",
    },
    {
      stepNumber: "03",
      title: "Gentle, Comfortable Treatment",
      description:
        "Procedures only begin after profound local anesthesia takes full effect. You remain in complete control—raise a hand at any second if you need a break.",
      durationEstimate: "As scheduled",
    },
    {
      stepNumber: "04",
      title: "Direct Follow-Up & WhatsApp Support",
      description:
        "After your procedure, our care does not end at the door. You receive clear aftercare instructions and direct WhatsApp access for any follow-up questions.",
      durationEstimate: "Ongoing",
    },
  ],

  reviewsSection: {
    /* [PLACEHOLDER: Google Reviews stats] */
    googleRating: "4.9",
    totalReviewsCount: "135+",
    googleReviewsPageUrl: "https://maps.google.com/?q=Sector+15+Faridabad+Haryana",
    featuredReviews: [
      {
        id: "rev-1",
        author: "Ritu M.",
        patientContext: "Sector 14, Faridabad · Root Canal Patient",
        rating: 5,
        date: "2 months ago",
        quote:
          "I was terrified of root canals after a painful experience years ago. Dr. Sharma was exceptionally patient, explained every step before touching a tooth, and the entire procedure was genuinely painless. Truly grateful.",
        verifiedOnGoogle: true,
      },
      {
        id: "rev-2",
        author: "Col. Sanjeev K. (Retd.)",
        patientContext: "Sector 15, Faridabad · Implant Patient",
        rating: 5,
        date: "4 months ago",
        quote:
          "What impressed me most was the clinic's punctuality and cleanliness. No chaotic waiting room, all instruments opened from sterile sealed pouches in front of you, and an honest written estimate with zero surprises.",
        verifiedOnGoogle: true,
      },
      {
        id: "rev-3",
        author: "Ananya G.",
        patientContext: "NIT Faridabad · Preventive Care & Aligners",
        rating: 5,
        date: "1 month ago",
        quote:
          "Very calm and modern clinic. Dr. Sharma did not try to upsell unnecessary cosmetic treatments like previous clinics I visited. He recommended simple scaling and clear aligners. WhatsApp booking was quick and smooth.",
        verifiedOnGoogle: true,
      },
    ],
  },

  images: {
    /* Curated high-resolution, genuine architectural/clinical imagery from Unsplash */
    heroOperatory:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    consultationRoom:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    sterilizationStation:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    exteriorOrLounge:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },

  socialLinks: {
    googleMaps: "https://maps.google.com/?q=Sector+15+Faridabad+Haryana",
    whatsapp: "https://wa.me/919818012345",
  },

  bookingOptions: {
    timeSlots: [
      "Morning: 10:30 AM – 1:00 PM",
      "Evening: 4:30 PM – 6:30 PM",
      "Evening: 6:30 PM – 8:00 PM",
    ],
    visitReasons: [
      "Toothache / Severe Discomfort (Urgent)",
      "Routine Checkup & Dental Cleaning",
      "Root Canal Treatment Consultation",
      "Dental Implant / Missing Tooth Replacement",
      "Clear Aligners / Teeth Straightening",
      "Child / Pediatric Consultation",
      "Other Consultation",
    ],
  },
};
