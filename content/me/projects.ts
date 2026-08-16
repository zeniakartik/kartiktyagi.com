import type { Project } from "./types";

/**
 * Projects are grouped by `category` in the UI. External links are intentionally
 * omitted where a public/verifiable URL isn't available — add a `links: [...]`
 * entry here to surface a button on any card, no component changes required.
 */
export const projects: Project[] = [
  // ── Products ──────────────────────────────────────────────────────────────
  {
    slug: "orkaiva",
    name: "Orkaiva",
    category: "Product",
    icon: "layers",
    tagline: "A modular, multi-tenant HRM platform.",
    description:
      "A scalable HR management platform architected with modular services, workflow automation, multi-tenancy, and modern cloud-native infrastructure.",
    role: "Technical Lead & Architect",
    timeframe: "Adorway · 2020 — Present",
    status: "Product",
    featured: true,
    stack: ["Microservices", "Node.js", "React", "Multi-tenancy", "AWS"],
    highlights: [
      "Modular service boundaries designed for multi-tenant scale.",
      "Workflow automation across the employee lifecycle.",
    ],
  },
  {
    slug: "copconnect",
    name: "CopConnect",
    category: "Product",
    icon: "puzzle",
    tagline: "Cyber-safety, made reachable.",
    description:
      "A cyber-safety platform for the ISAC Foundation connecting people with cybersecurity and cybercrime assistance through a mobile-first experience — expert discovery, secure communication and case collaboration.",
    role: "Architect",
    timeframe: "Adorway",
    status: "Social impact",
    featured: true,
    stack: ["React Native", "Node.js", "Secure comms", "Mobile"],
  },
  {
    slug: "ethixfirst",
    name: "EthixFirst",
    category: "Product",
    icon: "compass",
    tagline: "Workplace ethics & professional integrity.",
    description:
      "A workplace ethics platform supporting certification, employee ratings, reporting, and career-protection workflows.",
    role: "Full-Stack Engineer",
    timeframe: "Artios · 2024",
    status: "Product",
    stack: ["React", "Node.js", "Workflow", "Compliance"],
  },
  {
    slug: "slr-astro",
    name: "SLR Astro",
    category: "Product",
    icon: "sparkles",
    tagline: "Consultations, delivered on mobile.",
    description:
      "A mobile consultation platform supporting digital consultations, user workflows, and end-to-end service delivery.",
    role: "Architect & Engineer",
    timeframe: "Adorway",
    status: "Mobile",
    stack: ["React Native", "Node.js", "Realtime"],
  },

  // ── Professional / Enterprise ────────────────────────────────────────────
  {
    slug: "cobol2java",
    name: "cobol2java",
    category: "Professional",
    icon: "transform",
    tagline: "Modernization intelligence for legacy systems.",
    description:
      "A COBOL-to-Java migration intelligence platform: a closed-loop system pairing AI with contextual learning and automated validation to reverse-engineer legacy internals and drive modernization at enterprise scale.",
    role: "Technical Lead & Architect",
    timeframe: "Creospan · 2025",
    status: "Enterprise",
    featured: true,
    stack: ["COBOL", "Java", "OpenCode AI", "Contextual Learning", "Validation"],
    highlights: [
      "Reverse-engineers legacy internals into modernization strategy.",
      "Closed-loop validation keeps AI-generated migrations honest.",
    ],
  },
  {
    slug: "credibl",
    name: "Credibl",
    category: "Professional",
    icon: "package",
    tagline: "Digital credentials at scale.",
    description:
      "A bulk certificate creation and management platform — a certificate editor plus a generation engine that automates large-scale digital credential workflows.",
    role: "Full-Stack Engineer",
    timeframe: "Artios · 2024",
    status: "Client work",
    stack: ["React", "Canvas / SVG", "Node.js", "Bulk Ops"],
  },

  // ── Security ─────────────────────────────────────────────────────────────
  {
    slug: "privilegezero",
    name: "PrivilegeZero",
    category: "Security",
    icon: "shield",
    tagline: "Cyber threat intelligence, operationalized.",
    description:
      "A cyber threat intelligence platform for threat analysis, intelligence aggregation, investigation, and day-to-day security operations.",
    role: "Architect & Engineer",
    timeframe: "Artios · 2024",
    status: "Security",
    featured: true,
    stack: ["Threat Intel", "React", "Node.js", "Data Aggregation"],
  },
  {
    slug: "breachx",
    name: "BreachX",
    category: "Security",
    icon: "shield",
    tagline: "Attack-resistance & proactive defense.",
    description:
      "A cybersecurity platform connecting threat intelligence, vulnerability research, and security researchers to enable proactive defense.",
    role: "Architect & Engineer",
    timeframe: "Artios · 2024",
    status: "Security",
    stack: ["Vulnerability Research", "React", "Node.js"],
  },
  {
    slug: "ctem",
    name: "CTEM",
    category: "Security",
    icon: "shield",
    tagline: "Continuous Threat Exposure Management.",
    description:
      "A solution for discovering, prioritizing, and managing an organization's security exposure on a continuous basis.",
    role: "Solution Designer",
    timeframe: "Artios · 2024",
    status: "Security",
    stack: ["Exposure Mgmt", "Prioritization", "Automation"],
  },
  {
    slug: "malware-bucket",
    name: "Malware Bucket",
    category: "Security",
    icon: "shield",
    tagline: "Automated malware analysis.",
    description:
      "A malware analysis and detection platform for automated file analysis and security assessment.",
    role: "Engineer",
    timeframe: "Artios · 2024",
    status: "Security",
    stack: ["Malware Analysis", "Automation", "Node.js"],
  },

  // ── Open Source ──────────────────────────────────────────────────────────
  {
    slug: "react-devdotto",
    name: "React-DevDotTo",
    category: "Open Source",
    icon: "package",
    tagline: "A published NPM package for React devs.",
    description:
      "An open-source NPM package for React developers, focused on reusable functionality and developer productivity.",
    role: "Author & Maintainer",
    timeframe: "Open source",
    status: "NPM · Open source",
    featured: true,
    stack: ["React", "TypeScript", "NPM", "DX"],
  },

  // ── Experiments ──────────────────────────────────────────────────────────
  {
    slug: "ananta",
    name: "Ananta",
    category: "Experiment",
    icon: "puzzle",
    tagline: "A calmer new-tab, your way.",
    description:
      "A browser new-tab productivity extension providing a customizable homepage and a personalized browsing experience.",
    role: "Creator",
    timeframe: "Side project",
    status: "Browser extension",
    stack: ["Browser Extension", "JavaScript", "UX"],
  },
];
