import type { Principle } from "./types";

/** Authored operating principles — how I approach engineering & architecture. */
export const principles: Principle[] = [
  {
    index: "01",
    title: "Architecture is decisions, not diagrams",
    body: "A diagram is the artifact; the value is the set of trade-offs behind it. I make the constraints explicit and choose deliberately, so the system still makes sense when the requirements move.",
  },
  {
    index: "02",
    title: "Optimize for the engineer who inherits it",
    body: "Code is read far more than it's written. Clear seams, honest names, and boring solutions beat cleverness every time someone new opens the repo.",
  },
  {
    index: "03",
    title: "Understand before you replace",
    body: "You can't modernize what you don't understand. I reverse-engineer the why behind a legacy system before touching the how — that's where the real risk hides.",
  },
  {
    index: "04",
    title: "Leverage over effort",
    body: "The best engineers multiply their impact — through automation, tooling, AI, and mentoring. I'd rather build the thing that builds the things.",
  },
];
