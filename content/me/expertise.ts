import type { Expertise } from "./types";

export const expertise: Expertise[] = [
  {
    icon: "architecture",
    title: "Solution & System Architecture",
    summary:
      "Turning business problems into system boundaries, contracts, and integration strategies that stay coherent as they scale.",
    keywords: ["System Design", "Enterprise Architecture", "API Design", "Event-driven"],
  },
  {
    icon: "layers",
    title: "Full-Stack Engineering",
    summary:
      "End-to-end delivery across Java/Spring, Node/Nest, and React/Next — from data model to interface, with an eye on maintainability.",
    keywords: ["Java · Spring", "Node · Nest", "React · Next", "TypeScript"],
  },
  {
    icon: "cloud",
    title: "Cloud & Distributed Systems",
    summary:
      "Cloud-native platforms on AWS with infrastructure as code, containers, observability, and pragmatic reliability.",
    keywords: ["AWS", "Kubernetes", "Terraform", "Observability"],
  },
  {
    icon: "transform",
    title: "Legacy Modernization",
    summary:
      "Reverse-engineering decades-old systems into modernization roadmaps — COBOL to Java, monoliths to services, without breaking the business.",
    keywords: ["COBOL → Java", "Migration", "Refactoring", "System-of-record"],
  },
  {
    icon: "shield",
    title: "Cybersecurity Engineering",
    summary:
      "Threat-intelligence, exposure management and analysis platforms — building the tooling that defenders actually operate.",
    keywords: ["Threat Intel", "CTEM", "Malware Analysis", "AppSec"],
  },
  {
    icon: "sparkles",
    title: "AI-native Engineering",
    summary:
      "Using modern models and agents as part of the toolchain to accelerate delivery, explore solutions, and build context-aware workflows.",
    keywords: ["Agents", "Automation", "Context Engineering", "Reverse-engineering"],
  },
  {
    icon: "compass",
    title: "Product & Technical Leadership",
    summary:
      "Leading teams from zero to shipped — setting standards, mentoring engineers, and translating ambiguity into a plan.",
    keywords: ["Team Leadership", "Mentoring", "0→1", "Delivery"],
  },
];
