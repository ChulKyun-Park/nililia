// Central content configuration — edit copy here without touching layout code.

export const siteConfig = {
  name: "Nililia",
  description: "Professional translation and localization services.",
  tagline: "Connecting the world through language.",
};

export const navConfig = {
  links: [
    { label: "About", href: "/about" },
    {
      label: "Business",
      children: [
        { label: "Our Service", href: "/services" },
        { label: "Contentsfly", href: "/contentsfly" },
        { label: "Contentsflys", href: "/contentsflys" },
      ],
    },
    {
      label: "News",
      children: [
        { label: "Customer Stories", href: "/news/stories" },
        { label: "Announcements", href: "/news/announcements" },
      ],
    },
    { label: "Careers", href: "/careers" },
  ],
};

export const homeContent = {
  hero: {
    heading: "Language Without Limits",
    subheading:
      "We deliver precise, culturally attuned translations that help your brand communicate authentically in every market.",
    cta: { label: "Explore Our Services", href: "/services" },
  },
  features: [
    {
      title: "Global Reach",
      description:
        "Our network of translators covers over 100 languages and regional dialects.",
    },
    {
      title: "Industry Expertise",
      description:
        "Specialized teams for legal, medical, technical, and marketing content.",
    },
    {
      title: "Quality Assurance",
      description:
        "Multi-stage review processes ensure accuracy and consistency across every project.",
    },
  ],
};

export const aboutContent = {
  heading: "About Nililia",
  intro:
    "Nililia is a language services company dedicated to breaking down communication barriers for businesses operating across cultures.",
  mission: {
    heading: "Our Mission",
    body: "We exist to make communication across languages effortless, accurate, and meaningful — empowering organizations to grow without borders.",
  },
  values: [
    { title: "Accuracy", description: "Every word is chosen with precision and cultural awareness." },
    { title: "Integrity", description: "We handle client content with strict confidentiality and care." },
    { title: "Partnership", description: "We work as an extension of your team, not just a vendor." },
  ],
};

export const serviceContent = {
  hero: {
    heading: "Our Service",
    body: "End-to-end language solutions built for businesses that operate at scale. From initial translation to final localization review, we manage every step.",
    cta: { label: "Get Started", href: "/about" },
  },
  products: {
    heading: "Our Products",
    items: [
      {
        title: "Contentsfly",
        description: "Streamlined content translation for digital teams managing high-volume assets.",
        href: "/contentsfly",
      },
      {
        title: "Contentsflys",
        description: "Advanced localization automation built for enterprise-scale publishing workflows.",
        href: "/contentsflys",
      },
    ],
  },
  localization: {
    heading: "Translation & Localization",
    cards: [
      {
        title: "Document Translation",
        description: "Accurate translation of contracts, reports, and official documents.",
      },
      {
        title: "Website Localization",
        description: "Adapt your web presence for local audiences while preserving brand voice.",
      },
      {
        title: "Marketing Content",
        description: "Compelling copy across languages that resonates with target markets.",
      },
      {
        title: "Legal & Compliance",
        description: "Certified translations for regulatory filings and legal proceedings.",
      },
      {
        title: "Technical Documentation",
        description: "Precise localization of manuals, APIs, and product specifications.",
      },
      {
        title: "Multimedia & Subtitling",
        description: "Subtitles, voiceovers, and transcription for video and audio content.",
      },
    ],
  },
};

export const contentsflyContent = {
  heading: "Contentsfly",
  subheading: "High-volume content translation, simplified.",
  body: "Contentsfly is designed for digital teams that publish frequently and need reliable, fast translations without sacrificing quality.",
  features: [
    { title: "Batch Processing", description: "Submit hundreds of assets at once and receive translations in parallel." },
    { title: "Format Preservation", description: "Your original formatting is maintained across all output files." },
    { title: "Glossary Control", description: "Maintain brand terminology consistency with custom glossaries." },
  ],
};

export const contentsflysContent = {
  heading: "Contentsflys",
  subheading: "Enterprise localization at scale.",
  body: "Contentsflys integrates with your publishing infrastructure to automate the full localization lifecycle for large organizations.",
  features: [
    { title: "Workflow Automation", description: "Connect your CMS and trigger translation workflows automatically." },
    { title: "Multi-market Publishing", description: "Deploy localized content simultaneously to all target markets." },
    { title: "Analytics Dashboard", description: "Track localization progress and quality metrics across projects." },
  ],
};

export const newsContent = {
  stories: {
    heading: "Customer Stories",
    intro: "Real results from organizations that trust Nililia with their language needs.",
    items: [
      {
        title: "Global SaaS Company Reduces Time-to-Market by 40%",
        date: "January 2025",
        excerpt: "By integrating Contentsflys into their release pipeline, the team cut localization turnaround from two weeks to three days.",
      },
      {
        title: "Healthcare Provider Expands to Five New Markets",
        date: "November 2024",
        excerpt: "Accurate medical translation enabled seamless entry into markets across Southeast Asia and Latin America.",
      },
      {
        title: "E-Commerce Platform Boosts Regional Conversion Rates",
        date: "September 2024",
        excerpt: "Culturally adapted product descriptions led to measurable improvements in engagement across localized storefronts.",
      },
    ],
  },
  announcements: {
    heading: "Announcements",
    intro: "The latest news from Nililia.",
    items: [
      {
        title: "Nililia Expands Language Coverage to 120+ Languages",
        date: "February 2025",
        excerpt: "We have onboarded specialist translators for an additional 20 languages, including several low-resource languages.",
      },
      {
        title: "New Quality Dashboard Available for All Enterprise Clients",
        date: "December 2024",
        excerpt: "Enterprise clients can now access real-time quality scores and reviewer feedback directly in the portal.",
      },
      {
        title: "Partnership Announcement: Certified Legal Translation",
        date: "October 2024",
        excerpt: "Nililia has partnered with a certified legal translation network to expand court-certified document services.",
      },
    ],
  },
};

export const careersContent = {
  heading: "Careers at Nililia",
  intro:
    "We are building a team of language specialists, technologists, and operations professionals who share a passion for clear communication.",
  openRoles: [
    {
      title: "Senior Translator — Technical (Japanese)",
      department: "Translation",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Localization Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Software Engineer — Localization Platform",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Quality Assurance Reviewer — European Languages",
      department: "Quality",
      location: "Remote",
      type: "Contract",
    },
  ],
  cta: "To apply, send your resume and a short note about your background to our recruiting team.",
};
