import type { EngineeringBlock } from "./types";

export const engineering: EngineeringBlock = {
  intro:
    "AI as part of the toolchain, not a novelty — used with judgment and verified against reality.",
  practices: [
    {
      title: "Reverse-engineering the unknown",
      body: "Reading decades-old systems fast — mapping internals and surfacing hidden business rules.",
    },
    {
      title: "Exploring solution space",
      body: "Pressure-testing architectures early — so the design that ships is chosen, not stumbled into.",
    },
    {
      title: "Closed-loop modernization",
      body: "AI proposes, validation checks, context accumulates. Repeatable, honest migrations.",
    },
    {
      title: "Context-aware automation",
      body: "Agents that know a codebase's conventions handle the mechanics; humans handle decisions.",
    },
  ],
  toolkit: [
    {
      label: "IDEs & Agents",
      items: ["Cursor", "Devin", "OpenCode", "Windsurf", "Copilot"],
    },
    {
      label: "Models",
      items: ["Claude Opus", "Claude Sonnet", "Composer", "GPT", "Gemini"],
    },
    {
      label: "Applied to",
      items: ["Modernization", "Reverse-engineering", "Automation", "Architecture"],
    },
  ],
  note: "Used well, AI compounds a team's knowledge. Used carelessly, it compounds its mistakes.",
};
