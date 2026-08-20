import type { Principle } from "./types";

/** Authored operating principles — how I approach engineering & architecture. */
export const principles: Principle[] = [
  {
    index: "01",
    title: "Architecture is decisions, not diagrams",
    body: "Make the trade-offs explicit. Choose deliberately.",
  },
  {
    index: "02",
    title: "Optimize for the engineer who inherits it",
    body: "Clear seams, honest names. Boring beats clever.",
  },
  {
    index: "03",
    title: "Understand before you replace",
    body: "Reverse-engineer the why before touching the how.",
  },
  {
    index: "04",
    title: "Leverage over effort",
    body: "Build the thing that builds the things.",
  },
];
