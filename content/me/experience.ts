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
    summary:
      "Leading solution architecture and legacy modernization for large enterprise platforms, and turning modern AI tooling into a real engineering advantage.",
    highlights: [
      "Reverse-engineered 25+ COBOL Pathway systems, transforming complex legacy internals into scalable modernization and engineering strategies.",
      "Led solution architecture across COBOL, Java, microservices, AWS, APIs, and enterprise messaging, with clear migration and integration boundaries.",
      "Designed a closed-loop engineering solution combining OpenCode AI, contextual learning, and automated validation for COBOL-to-Java modernization.",
      "Delivered enterprise integration using MuleSoft, AWS, IBM MQ, Terraform, and modern DevOps practices.",
    ],
    stack: [
      "Solution Architecture",
      "COBOL → Java",
      "Microservices",
      "AWS",
      "MuleSoft",
      "IBM MQ",
      "Terraform",
      "AI-native Dev",
    ],
  },
  {
    company: "Artios Media Consulting",
    positions: [{ title: "Technology Solutions Consultant", period: "2024" }],
    period: "2024",
    location: "Hyderabad, India",
    type: "Consulting",
    summary:
      "Architected and delivered a portfolio of cybersecurity, threat-intelligence and compliance products for multiple clients.",
    highlights: [
      "Architected and delivered BreachX, PrivilegeZero, CTEM, and Malware Bucket — cybersecurity and threat-intelligence platforms.",
      "Built Credibl and EthixFirst, with scalable workflows for certificate generation, verification, workplace ethics, and compliance.",
      "Engineered full-stack and mobile solutions using React, React Native, Node.js, cloud services, and large-scale bulk operations.",
    ],
    stack: ["React", "React Native", "Node.js", "MongoDB", "AWS", "Threat Intel"],
  },
  {
    company: "Grid Dynamics",
    positions: [{ title: "Engineer", period: "Sep 2023 — Mar 2024" }],
    period: "2023 — 2024",
    location: "Bengaluru, India",
    summary:
      "Built scalable backend services and responsive front-ends for enterprise clients, with automated cloud delivery.",
    highlights: [
      "Engineered scalable REST APIs and backend services using NestJS, TypeScript, and Prisma, focused on maintainability and performance.",
      "Developed responsive React.js applications with MUI and integrated enterprise services including Twilio and Intelics.",
      "Implemented AWS-based deployment and CI/CD automation, streamlining build, release, and production delivery.",
    ],
    stack: ["NestJS", "TypeScript", "Prisma", "React.js", "MUI", "AWS", "CI/CD"],
  },
  {
    company: "Mutual Mobile",
    positions: [
      { title: "Engineer", period: "Aug 2022 — Feb 2023" },
      { title: "Associate Engineer", period: "Feb 2021 — Aug 2022" },
    ],
    period: "2021 — 2023",
    location: "Hyderabad, India",
    summary:
      "Full-stack delivery on transformative digital products for global brands and startups, across the full SDLC.",
    highlights: [
      "Implemented REST API integrations, asynchronous workflows, state management, and third-party integrations across enterprise applications.",
      "Built APIs with NestJS, TypeScript, MongoDB, Jest and Swagger; crafted interfaces in React.js and MUI.",
      "Contributed to debugging, code reviews, Agile delivery, and production support throughout the software lifecycle.",
    ],
    stack: ["NestJS", "TypeScript", "MongoDB", "React.js", "Jest", "Swagger", "AWS"],
  },
  {
    company: "Adorway",
    positions: [{ title: "Co-Founder & CTO", period: "Jan 2020 — Present" }],
    period: "2020 — Present",
    location: "India",
    type: "Founder",
    summary:
      "Co-founded a product & services studio, owning technical architecture and delivery across HR tech, cyber-safety and consumer platforms.",
    highlights: [
      "Led technical architecture and delivery for Orkaiva HRM, designing scalable foundations for workforce management.",
      "Architected CopConnect — cybercrime assistance through expert discovery, secure communication, and mobile workflows.",
      "Built SLR Astro and diverse client platforms end to end, and scaled EthicalLearner, an EdTech platform, from the ground up.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "React", "React Native", "Microservices"],
  },
];
