import type { Profile } from "./types";

export const profile: Profile = {
  name: "Kartik Tyagi",
  firstName: "Kartik",
  roles: [
    "Co-Founder & CTO",
    "Solution Architect",
    "Technical Lead",
    "Full-Stack Engineer",
    "AI-native Builder",
  ],
  headline: "I design systems, and lead the teams that build them.",
  location: "India",
  availability: "Open to architecture & technical leadership conversations",
  railTagline: "Systems thinking, from whiteboard to production.",
  photo: {
    src: "/me/kartik.png",
    alt: "Portrait of Kartik Tyagi",
  },
  resume: {
    href: "/kartik-tyagi-resume.pdf",
    label: "Resume",
  },
  intro:
    "I'm an engineer and architect who turns ambiguous problems into systems people can rely on — from legacy modernization to cloud-native platforms, security tooling, and AI-driven engineering workflows.",
  about: [
    "Six-plus years across engineering and architecture — legacy modernization, cloud-native platforms, security tooling, and AI-driven engineering workflows.",
    "I care about decisions that age well: clear contracts, honest trade-offs, and architecture a new engineer can reason about a year in.",
  ],
  ethos:
    "Think in systems. Build for the people who inherit them.",
};
