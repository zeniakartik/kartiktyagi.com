/**
 * Single source of truth for all personal content.
 *
 * Edit the data files in this folder to change anything about the site —
 * name, bio, experience, projects, skills, links, interests, achievements.
 * UI components import from here and never hard-code personal data.
 */
import { site } from "./site";
import { profile } from "./profile";
import { socials } from "./social";
import { stats } from "./stats";
import { expertise } from "./expertise";
import { skills } from "./skills";
import { experience } from "./experience";
import { projects } from "./projects";
import { engineering } from "./engineering";
import { principles } from "./principles";
import { interests } from "./interests";
import { education } from "./education";
import { achievements } from "./achievements";
import { navigation } from "./navigation";
import type { Me } from "./types";

export const me: Me = {
  site,
  profile,
  socials,
  stats,
  expertise,
  skills,
  experience,
  projects,
  engineering,
  principles,
  interests,
  education,
  achievements,
  navigation,
};

export type { Me } from "./types";
export {
  site,
  profile,
  socials,
  stats,
  expertise,
  skills,
  experience,
  projects,
  engineering,
  principles,
  interests,
  education,
  achievements,
  navigation,
};
