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
    "I've spent the last five-plus years living at the intersection of engineering and architecture — writing the code, drawing the boundaries, and leading the teams that ship. My work ranges from reverse-engineering decades-old COBOL systems into modernization strategies, to standing up cloud-native platforms, to building cybersecurity and HR products from an empty repository.",
    "What I enjoy most is the shape of a problem before the code exists: where the seams should be, which constraints actually matter, and how a system will behave a year after launch when the load, the team, and the requirements have all changed. I care about decisions that age well — clear contracts, honest trade-offs, and architecture a new engineer can reason about.",
    "Lately, a large part of my craft is AI-native engineering. I treat modern models and agents as a genuine part of the toolchain — for exploring solution space, reverse-engineering the unknown, accelerating modernization, and building context-aware workflows that compound what a small team can deliver.",
  ],
  ethos:
    "Think in systems. Build for the people who inherit them. Keep exploring.",
};
