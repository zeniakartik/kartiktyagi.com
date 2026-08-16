import type { EngineeringBlock } from "./types";

export const engineering: EngineeringBlock = {
  intro:
    "AI isn't a novelty in my workflow — it's part of the toolchain. I treat modern models and agents the way I treat a compiler or a debugger: leverage that changes what a small team can deliver, used with judgment and verified against reality.",
  practices: [
    {
      title: "Reverse-engineering the unknown",
      body: "When the only documentation is the source, I use AI to read decades-old systems fast — mapping COBOL internals, tracing control flow, and surfacing the hidden business rules that a modernization plan depends on.",
    },
    {
      title: "Exploring solution space",
      body: "Before committing to an architecture, I use models to pressure-test approaches, sketch alternatives, and find the trade-offs early — so the design that ships is one I actually chose, not one I stumbled into.",
    },
    {
      title: "Closed-loop modernization",
      body: "I build workflows where AI proposes changes, automated validation checks them, and context accumulates over time — keeping AI-generated migrations honest and turning one-off translations into a repeatable system.",
    },
    {
      title: "Context-aware automation",
      body: "The value isn't autocomplete — it's engineering context. I wire up agents that understand a codebase's conventions and history, then let them handle the mechanical work so the team spends its attention on decisions.",
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
  note: "Used well, AI compounds a team's knowledge. Used carelessly, it compounds its mistakes. The engineering is in the difference.",
};
