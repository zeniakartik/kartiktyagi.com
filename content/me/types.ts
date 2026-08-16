/**
 * Content model for the portfolio.
 *
 * This file defines the shape of every piece of personal content. All actual
 * data lives in the sibling data files and is aggregated in `index.ts`.
 * UI components consume these types; they never hard-code personal data.
 */

/** Keys mapped to inline SVGs in `components/ui/Icon.tsx`. Keep in sync. */
export type IconName =
  | "architecture"
  | "layers"
  | "cloud"
  | "transform"
  | "shield"
  | "sparkles"
  | "compass"
  | "cpu"
  | "server"
  | "code"
  | "package"
  | "puzzle"
  | "rocket"
  | "mountain"
  | "cricket"
  | "billiards"
  | "bulb"
  | "hammer"
  | "github"
  | "linkedin"
  | "stackoverflow"
  | "instagram"
  | "mail"
  | "phone"
  | "arrow-up-right"
  | "arrow-right"
  | "download"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "map-pin"
  | "spark"
  | "chevron";

export interface SiteConfig {
  name: string;
  url: string;
  title: string;
  description: string;
  locale: string;
  keywords: string[];
}

export interface Profile {
  name: string;
  firstName: string;
  /** Rotating role descriptors used in the hero. */
  roles: string[];
  /** Single canonical headline title. */
  headline: string;
  location: string;
  availability?: string;
  /** Short line shown in the persistent rail (distinct from the hero headline). */
  railTagline: string;
  photo: { src: string; alt: string };
  resume: { href: string; label: string };
  /** Short one/two-line intro used near the hero. */
  intro: string;
  /** Longer narrative paragraphs for the About section. */
  about: string[];
  /** A concise personal signature / ethos line. */
  ethos: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: IconName;
  /** Show in the compact rail row. */
  primary?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  detail?: string;
}

export interface Expertise {
  icon: IconName;
  title: string;
  summary: string;
  keywords: string[];
}

export interface SkillGroup {
  label: string;
  icon: IconName;
  items: string[];
}

export interface ExperienceRole {
  company: string;
  /** One entry, or multiple stacked titles at the same company. */
  positions: { title: string; period: string }[];
  period: string;
  location?: string;
  type?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  href?: string;
}

export type ProjectCategory =
  | "Product"
  | "Professional"
  | "Security"
  | "Open Source"
  | "Experiment";

export interface ProjectLink {
  label: string;
  href: string;
  icon?: IconName;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  role: string;
  timeframe?: string;
  status?: string;
  stack: string[];
  highlights?: string[];
  links?: ProjectLink[];
  /** Marks projects to surface prominently. */
  featured?: boolean;
  icon: IconName;
}

export interface EngineeringBlock {
  intro: string;
  /** How AI is actually used in the workflow. */
  practices: { title: string; body: string }[];
  /** The stack of tools / models. */
  toolkit: { label: string; items: string[] }[];
  note: string;
}

export interface Principle {
  index: string;
  title: string;
  body: string;
}

export interface Interest {
  icon: IconName;
  title: string;
  body: string;
}

export interface EducationEntry {
  school: string;
  credential: string;
  period?: string;
  detail?: string;
}

export interface Achievement {
  title: string;
  detail: string;
  href?: string;
}

export interface NavItem {
  id: string;
  label: string;
  index: string;
}

export interface Me {
  site: SiteConfig;
  profile: Profile;
  socials: SocialLink[];
  stats: Stat[];
  expertise: Expertise[];
  skills: SkillGroup[];
  experience: ExperienceRole[];
  projects: Project[];
  engineering: EngineeringBlock;
  principles: Principle[];
  interests: Interest[];
  education: EducationEntry[];
  achievements: Achievement[];
  navigation: NavItem[];
}
