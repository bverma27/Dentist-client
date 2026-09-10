/**
 * CLINIC DATA & CONFIGURATION SPECIFICATION
 * ==============================================================================
 * This is the SINGLE SOURCE OF TRUTH for all clinic-specific content.
 * You can replace all placeholder values in this file without touching any UI component.
 *
 * Keep this file limited to verified client-provided clinic information.
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
  patientContext: string;
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
    registrationNumber: string;
    bio: string[];
    specialtyFocus: string[];
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

  // Patient feedback is intentionally omitted until verified reviews are supplied.
  reviewsSection: {
    googleRating: string;
    totalReviewsCount: string;
    googleReviewsPageUrl: string;
    featuredReviews: ReviewItem[];
  };

  // Media / Photography Assets
  images: {
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
    clinicName: "Vidya Dental Care",
    /* [PLACEHOLDER: Tagline] */
    tagline: "Specialized periodontal and implant care with a patient-first approach.",
    /* [PLACEHOLDER: Short Description] */
    shortDescription:
      "Vidya Dental Care provides focused dental care from Dr. Brij Nandan, BDS, MDS, specializing in periodontics and oral implantology.",
  },

  dentist: {
    /* [PLACEHOLDER: Doctor Name] */
    name: "Dr. Brij Nandan",
    /* [PLACEHOLDER: Title] */
    title: "Periodontist & Oral Implantologist",
    /* [PLACEHOLDER: Qualifications] */
    qualifications: "BDS, MDS",
    registrationNumber: "",
    bio: [
      "Dr. Brij Nandan is a periodontist and oral implantologist with BDS and MDS qualifications.",
      "Consultations are focused on understanding your concerns and discussing suitable periodontal or implant treatment options.",
    ],
    specialtyFocus: [
      "Periodontal care",
      "Oral implantology",
      "Gum health consultations",
    ],
  },

  contact: {
    /* [PLACEHOLDER: Clinic Primary Phone] */
    phone: "+919711106761",
    phoneDisplay: "9711106761",

    /* [PLACEHOLDER: WhatsApp Business Number in international format without +] */
    whatsappNumber: "919711106761",
    whatsappDisplay: "9711106761",
    whatsappDefaultMessage:
      "Hello Vidya Dental Care, I would like to enquire about a consultation with Dr. Brij Nandan.",

    /* [PLACEHOLDER: Clinic Email] */
    email: "",

    /* [PLACEHOLDER: Emergency Helpline] */
    emergencyPhone: "+919711106761",
    emergencyPhoneDisplay: "9711106761",
  },

  location: {
    premiseName: "",
    streetAddress: "",
    sectorArea: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    landmark: "",
    metroStationNearby: "",
    parkingDetails: "",
    accessibilityNotes: "",
    googleMapsUrl: "",
    googleMapsEmbedUrl: "",
  },

  schedule: {
    weekdays: {
      days: "Morning hours",
      hours: "9:30 AM – 2:00 PM",
    },
    weekend: {
      days: "Evening hours",
      hours: "5:00 PM – 8:00 PM",
    },
    emergencyNotice: "Please call the clinic to discuss appointment availability.",
  },

  clinicalCertainties: [
    {
      title: "Periodontal care",
      description: "Consultations focused on gum health and periodontal concerns.",
    },
    {
      title: "Oral implantology",
      description: "Specialized consultations for oral implant treatment planning.",
    },
    {
      title: "Qualified care",
      description: "Care provided by Dr. Brij Nandan, BDS, MDS.",
    },
    {
      title: "Clinic hours",
      description: "Morning and evening consultation hours are listed below.",
    },
  ],

  services: [
    {
      id: "periodontal-care",
      title: "Periodontal Care",
      category: "Preventive",
      summary: "Consultation and care focused on gum health and periodontal concerns.",
      description: "Discuss your gum health concerns with a specialist periodontist and understand suitable care options.",
      commonIndications: ["Gum concerns", "Bleeding gums", "Periodontal consultation"],
      expectedVisits: "Discussed during consultation",
      typicalDuration: "As advised",
    },
    {
      id: "oral-implantology",
      title: "Oral Implantology",
      category: "Surgical",
      summary: "Specialized consultation for oral implant treatment planning.",
      description: "Dr. Brij Nandan can discuss whether oral implant treatment may be suitable for your needs.",
      commonIndications: ["Missing teeth", "Implant consultation", "Treatment planning"],
      expectedVisits: "Discussed during consultation",
      typicalDuration: "As advised",
    },
    {
      id: "dental-consultation",
      title: "Dental Consultation",
      category: "Family",
      summary: "A focused appointment to discuss your dental concerns and treatment options.",
      description: "Start with a conversation about your symptoms, goals, and next steps for care.",
      commonIndications: ["Dental concerns", "Treatment questions", "Second opinion"],
      expectedVisits: "As advised",
      typicalDuration: "As advised",
    },
  ],

  patientExperience: [
    {
      stepNumber: "01",
      title: "Unhurried Diagnostic Consultation",
      description: "We begin by discussing your dental concerns and relevant history.",
    },
    {
      stepNumber: "02",
      title: "Honest Treatment Plan & Cost Clarity",
      description: "Dr. Brij Nandan explains suitable periodontal or implant treatment options.",
    },
    {
      stepNumber: "03",
      title: "Gentle, Comfortable Treatment",
      description: "Any recommended treatment is discussed before you decide on the next step.",
    },
    {
      stepNumber: "04",
      title: "Direct Follow-Up & WhatsApp Support",
      description: "Contact the clinic by phone or WhatsApp about appointment follow-up.",
    },
  ],

  reviewsSection: {
    googleRating: "",
    totalReviewsCount: "",
    googleReviewsPageUrl: "",
    featuredReviews: [],
  },

  images: {
    consultationRoom:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    sterilizationStation:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    exteriorOrLounge:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },

  socialLinks: {
    googleMaps: "",
    whatsapp: "https://wa.me/919711106761",
  },

  bookingOptions: {
    timeSlots: [
      "Morning: 9:30 AM – 2:00 PM",
      "Evening: 5:00 PM – 8:00 PM",
    ],
    visitReasons: [
      "Toothache / Severe Discomfort (Urgent)",
      "Routine Checkup & Dental Cleaning",
      "Periodontal Consultation",
      "Oral Implantology Consultation",
      "Other Consultation",
    ],
  },
};
