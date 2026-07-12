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
  tagline: "Delivering Trusted Healthcare",
  shortDescription:
    "Licensed pharmaceutical distributor serving hospitals, pharmacies, and medical clinics across Sri Lanka's Central Province, and partially across Sabaragamuwa and Uva.",

  heroTaglines: [
    "Your Trusted Pharma Partner",
    "Quality Medicines Delivered",
    "Serving Healthcare Providers",
  ] as const,

  contact: {
    /** Source: company portfolio PDF — J G P Marketing Services (Pvt) Ltd */
    phones: [{ display: "081-7388100", href: "tel:+94817388100" }],
    whatsapp: null as { display: string; href: string } | null,
    email: {
      display: "kandy@jgpmarketing.lk",
      href: "mailto:kandy@jgpmarketing.lk",
    },
    address: "No. 64, Riverdale Road, Anniwatte, Kandy, Sri Lanka",
    mapQuery:
      "JGP Marketing Services No. 64 Riverdale Road Anniwatte Kandy Sri Lanka",
    notes: "Contact details from company portfolio.",
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
      "Here at JGP Marketing, we are committed to delivering high-quality pharmaceutical products through a reliable and efficient distribution network, with a strong focus on integrity, compliance, and customer satisfaction.",
      "We are partnered with Sri Lanka's most trusted healthcare manufacturers and providers to ensure the timely supply of essential medicines and healthcare solutions to leading hospitals, pharmacies, and medical clinics within the Central Province, and partially across the Sabaragamuwa and Uva provinces.",
      "Our operations are driven by industry standards, innovation, and a dedication to supporting the evolving needs of the healthcare sector. Through strategic partnerships and operational excellence, we aim to improve healthcare accessibility for everyone.",
    ],
    timeline: [
      {
        title: "1991 — Founded",
        description:
          "J.G.P Marketing Services founded by Mr J. G. Thilakasiri as a distributor for consumer products across Sri Lanka's Central Province, driven by reliability, service excellence, and strong customer relationships.",
      },
      {
        title: "1997 — Healthcare Expansion",
        description:
          "Expanded into pharmaceutical and hospital equipment distribution after recognising the growing need for efficient healthcare supply chains.",
      },
      {
        title: "2002 — Pharma Focus",
        description:
          "Transitioned exclusively to pharmaceutical distribution after Mrs Senani De Saram Jamburegoda joined as Directress — building the foundation for today's regional leadership.",
      },
      {
        title: "Today",
        description:
          "One of the leading distributors for pharmaceuticals, medical equipment, and healthcare products within the Central Province, and partially in Sabaragamuwa and Uva provinces.",
      },
    ],
  },

  whoWeAre: {
    subtitle:
      "Mission, vision, and values that guide how we serve healthcare across the region.",
    mission: {
      label: "Our Mission",
      quote:
        "To deliver pharmaceutical products efficiently and responsibly through strong partnerships, experienced people, and a region-wide distribution network.",
    },
    vision: {
      label: "Our Vision",
      quote:
        "To be the most trusted and progressive pharmaceutical distribution partner in the Region, improving healthcare accessibility through operational excellence, long-term partnerships, and sustainable growth.",
    },
    values: [
      {
        title: "Commitment to Healthcare",
        description:
          "We contribute to the healthcare sector by ensuring safe, efficient, and reliable access to pharmaceutical products across the country.",
      },
      {
        title: "Partnership & Collaboration",
        description:
          "We build enduring partnerships with global brands, suppliers, healthcare professionals, and business partners based on mutual growth and trust.",
      },
      {
        title: "Customer Commitment",
        description:
          "We prioritize dependable service, timely delivery, and strong relationships to support the success of our customers and healthcare partners.",
      },
    ],
    subsidiaries: [
      { name: "Luthmini Healthcare" },
      { name: "JGP Marketing (Pvt) Ltd" },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Us",
    subtitle:
      "Reliable pharmaceutical distribution built around speed, technology, and trust.",
    imageAlt: "JGP delivery vehicle serving healthcare providers",
    benefits: [
      {
        title: "On-Time Delivery",
        description:
          "Scheduled, dependable deliveries to pharmacies and healthcare institutions — so your stock arrives when you need it.",
      },
      {
        title: "Modern Ordering App",
        description:
          "Place and track orders anytime through our mobile app — fast reordering, real-time updates, and less paperwork.",
      },
      {
        title: "Licensed & Compliant",
        description:
          "GDP-aligned storage, handling, and distribution of pharmaceutical products to meet regulatory standards.",
      },
      {
        title: "Wide Product Range",
        description:
          "Prescription medicines, OTC products, generics, and healthcare essentials from licensed manufacturers.",
      },
      {
        title: "Central Province Coverage",
        description:
          "Dedicated supply across Kandy and the Central Province with a team that knows your market.",
      },
      {
        title: "Trusted Partner",
        description:
          "Years of experience connecting manufacturers with pharmacies and hospitals you can rely on.",
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
