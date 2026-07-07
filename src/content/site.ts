/**
 * Central site content & branding for JGP Marketing Services.
 *
 * NEEDS CLIENT VERIFICATION:
 * - Contact phone/address (conflicting public listings — see contact.notes)
 * - Email, WhatsApp, business hours
 * - Official brand colors & logo (placeholders in /public)
 * - Production domain for SEO/OG canonical URLs
 * - Company history timeline dates & milestones
 * - Product categories
 * - Hero/team photography
 */

export const site = {
  name: "JGP Marketing Services",
  legalName: "JGP Marketing Services (Pvt) Ltd",
  tagline: "Pharmaceutical Distribution",
  shortDescription:
    "Licensed pharmaceutical distributor serving pharmacies, hospitals, and healthcare institutions in Sri Lanka's Central Province.",

  heroTaglines: [
    "Your Trusted Pharma Partner",
    "Quality Medicines Delivered",
    "Serving Healthcare Providers",
  ] as const,

  contact: {
    /**
     * Source: rainbowpages.lk listing for "J G P Marketing Services (pvt) Ltd"
     * Alternate listing (near-place.com) shows 64 Riverdale Rd, Kandy and +94 817 388 100.
     * Confirm correct office location and phone before go-live.
     */
    phones: [{ display: "081 220 0859", href: "tel:+94812200859" }],
    whatsapp: null as { display: string; href: string } | null,
    email: null as { display: string; href: string } | null,
    address: "64 Riverdale Rd, Kandy 20000, Sri Lanka",
    mapQuery: "JGP Marketing Services 64 Riverdale Rd, Kandy 20000, Sri Lanka",
    notes:
      "Phone and address sourced from a public directory listing — please confirm. Email and WhatsApp not found in public listings.",
  },

  seo: {
    title: "JGP Marketing Services | Pharmaceutical Distribution",
    description:
      "JGP Marketing Services (Pvt) Ltd — licensed pharmaceutical distribution in Sri Lanka's Central Province. Compliant storage, handling, and delivery of medicines to pharmacies and healthcare institutions.",
    keywords:
      "pharmaceutical distribution, medicine distributor, Central Province, Kandy, Sri Lanka, JGP Marketing Services, pharmacy supply, healthcare logistics",
    /** Set when production domain is confirmed, e.g. "https://www.jgpmarketing.lk" */
    siteUrl: "",
    locale: "en_LK",
  },

  about: {
    subtitle: "Trusted pharmaceutical distribution in Sri Lanka",
    paragraphs: [
      "JGP Marketing Services (Pvt) Ltd is a pharmaceutical distribution company based in Kandy, dedicated to connecting licensed manufacturers with pharmacies, hospitals, and healthcare institutions across the Central Province.",
      "We focus on the compliant storage, handling, and delivery of medicines and healthcare products supporting healthcare providers with reliable supply at every step of the distribution chain.",
      "Our team combines industry experience with a commitment to quality, ensuring that the products reaching patients meet the standards healthcare professionals expect.",
    ],
    timeline: [
      {
        title: "Foundation",
        description:
          "JGP Marketing Services established to serve the pharmaceutical distribution needs of the Kandy region.",
      },
      {
        title: "Portfolio Growth",
        description:
          "Expanded partnerships with licensed manufacturers to offer a broader range of prescription, OTC, and healthcare products.",
      },
      {
        title: "Today",
        description:
          "Continuing to deliver compliant, timely distribution to licensed pharmacies and healthcare institutions throughout the Central Province.",
      },
    ],
  },

  highlights: [
    {
      title: "Compliant Distribution",
      description:
        "GDP-aligned storage and handling for pharmaceutical products.",
    },
    {
      title: "Wide Product Range",
      description:
        "Prescription, OTC, generics, and healthcare products from licensed manufacturers.",
    },
    {
      title: "Central Province Coverage",
      description:
        "Reliable supply to pharmacies and healthcare institutions",
    },
  ] as const,

  productCategories: [
    {
      name: "Prescription Medicines",
      description:
        "Ethical pharmaceuticals sourced from licensed manufacturers.",
    },
    {
      name: "Over-the-Counter (OTC)",
      description: "Consumer health products for pharmacies and retail outlets.",
    },
    {
      name: "Generics",
      description:
        "Cost-effective generic alternatives across key therapeutic areas.",
    },
    {
      name: "Nutraceuticals & Supplements",
      description:
        "Vitamins, minerals, and wellness products for distribution.",
    },
    {
      name: "Medical Devices",
      description:
        "Essential devices and consumables for healthcare providers.",
    },
    {
      name: "Cold Chain Products",
      description:
        "Temperature-sensitive medicines handled with compliant storage.",
    },
  ] as const,
} as const;
