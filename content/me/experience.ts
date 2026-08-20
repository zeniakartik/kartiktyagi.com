import type { ExperienceRole } from "./types";

export const experience: ExperienceRole[] = [
  {
    company: "Creospan",
    positions: [
      { title: "Technical Lead", period: "Oct 2025 — Present" },
      { title: "Senior Engineer", period: "Dec 2024 — Sep 2025" },
    ],
    period: "2024 — Present",
    location: "Pune, India",
    summary: "Solution architecture & legacy modernization for enterprise platforms.",
    highlights: [
      "Reverse-engineered 250+ COBOL Pathway systems into modernization strategy.",
      "Designed a closed-loop AI + validation pipeline for COBOL → Java.",
    ],
    stack: ["Solution Architecture", "COBOL → Java", "Microservices", "AWS", "MuleSoft", "IBM MQ", "Terraform"],
  },
  {
    company: "Artios Media Consulting",
    positions: [{ title: "Technology Solutions Consultant", period: "2024" }],
    period: "2024",
    location: "Hyderabad, India",
    type: "Consulting",
    summary: "Cybersecurity, threat-intel & compliance products for multiple clients.",
    highlights: [
      "Architected BreachX, PrivilegeZero, CTEM & Malware Bucket.",
      "Built Credibl and EthixFirst — bulk credentialing and workplace ethics.",
    ],
    stack: ["React", "React Native", "Node.js", "MongoDB", "AWS", "Threat Intel"],
  },
  {
    company: "Grid Dynamics",
    positions: [{ title: "Engineer", period: "Sep 2023 — Mar 2024" }],
    period: "2023 — 2024",
    location: "Bengaluru, India",
    summary: "Scalable backend & responsive front-ends for enterprise clients.",
    highlights: [
      "REST services in NestJS · TypeScript · Prisma.",
      "React apps + AWS CI/CD delivery.",
    ],
    stack: ["NestJS", "TypeScript", "Prisma", "React.js", "MUI", "AWS"],
  },
  {
    company: "Mutual Mobile",
    positions: [
      { title: "Engineer", period: "Aug 2022 — Feb 2023" },
      { title: "Associate Engineer", period: "Feb 2021 — Aug 2022" },
    ],
    period: "2021 — 2023",
    location: "Hyderabad, India",
    summary: "Full-stack delivery on digital products for global brands.",
    highlights: [
      "APIs in NestJS · TypeScript · MongoDB with Jest & Swagger.",
      "React interfaces + Agile delivery across the SDLC.",
    ],
    stack: ["NestJS", "TypeScript", "MongoDB", "React.js", "Jest", "AWS"],
  },
  {
    company: "Adorway",
    positions: [{ title: "Co-Founder & CTO", period: "Jan 2020 — Present" }],
    period: "2020 — Present",
    location: "India",
    type: "Founder",
    summary: "Product & services studio — architecture and delivery across HR tech, cyber-safety, and consumer platforms.",
    highlights: [
      "Led architecture for Orkaiva HRM and CopConnect.",
      "Scaled EthicalLearner from zero; shipped SLR Astro and client platforms.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "React", "React Native", "Microservices"],
  },
];
