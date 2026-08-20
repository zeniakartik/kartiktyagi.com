import {
  siJavascript,
  siTypescript,
  siSpringboot,
  siNodedotjs,
  siNestjs,
  siExpress,
  siReact,
  siNextdotjs,
  siPrisma,
  siSequelize,
  siMui,
  siJest,
  siSwagger,
  siGraphql,
  siDigitalocean,
  siTerraform,
  siDocker,
  siKubernetes,
  siJenkins,
  siGithubactions,
  siFirebase,
  siProxmox,
  siPostgresql,
  siMongodb,
  siMysql,
  siClickhouse,
  siScylladb,
  siOpensearch,
  siRedis,
  siGrafana,
  siPrometheus,
  siWebrtc,
  siCursor,
  siOpencode,
  siWindsurf,
  siGithubcopilot,
  siClaude,
  siComposer,
  siGooglegemini,
  siHuggingface,
} from "simple-icons";

/**
 * TechIcon
 *
 * Renders a small brand/tech glyph for a chip label (e.g. "Java", "AWS").
 *
 * Strategy:
 *   1. Normalize the chip label (lowercase, strip non-alnum) into a key.
 *   2. Look up in MAP → either a simple-icons record or a custom-path key.
 *   3. Fall back to a small filled dot when nothing matches.
 *
 * Icons render with `currentColor` so the caller controls the tone. Named
 * imports from `simple-icons` are used so unused icons tree-shake away.
 */

type SI = { path: string };
type CustomSvg = { path: string; viewBox?: string };

// ── Custom paths for brands simple-icons no longer ships (Java, AWS, …) ──
// Kept intentionally minimal, monochrome, single-path where practical.
const CUSTOM: Record<string, CustomSvg> = {
  java: {
    path: "M8.85 18.56s-.55.32.39.43c1.14.13 1.72.11 2.98-.13 0 0 .33.21.79.39-2.83 1.21-6.4-.07-4.16-.69Zm-.35-1.58s-.61.45.33.55c1.22.13 2.19.14 3.86-.18 0 0 .23.24.59.37-3.42 1-7.23.08-4.78-.74Zm3.7-2.69c.69.79-.18 1.5-.18 1.5s1.75-.9.95-2.03c-.75-1.05-1.32-1.57 1.78-3.36 0 0-4.9 1.22-2.55 3.89Zm3.72 5.53s.4.34-.44.6c-1.6.48-6.66.63-8.06.02-.5-.22.44-.52.74-.58.31-.07.49-.06.49-.06-.56-.4-3.63.78-1.56 1.11 5.65.92 10.29-.41 8.83-1.09Zm-4-3.68c-4.36 1.22-2.66 3.71.02 2.72 3.06-1.14 4.35-3.53.75-3.53 0 0 .29-.03.71 0 0 0-.98-.51-1.48.81Zm7.09 5.02s.42.42-.46.75c-1.66.63-6.91.83-8.37.03-.53-.29.46-.68.77-.75.32-.08.5-.07.5-.07-.59-.42-3.81.82-1.63 1.17 5.94.97 10.79-.44 9.19-1.13ZM17.9 12.7s2.14 2.14-2.03 3.83c-3.17 1.28-.42 2.02 0 2.02.28 0 .55-.05.55-.05-.16.11-.32.19-.5.24-3.03.79-6.71.44-6.71.44 1.7 1.11 4.35 1.01 6.71.48 3.28-.75 3.88-1.96 3.5-2.66-.42-.79-.87-.79-1.52-.79-.65 0-.87.09-.87.09 1.14-.34 1.7-.86 1.7-.86s-3.83-.36-6.51 1.4c-3.09 2.03-2.71 4.29 0 4.7 3.29.5 5.98-.29 6.68-.86 0 0-.29-.13-.98-.19 2.14-.36 3.4-1.09 3.4-1.09-1.05.62-4.44 1.31-6.65 1.13-2.09-.17-2.72-1.13-1.75-2.21 1.09-1.21 3.35-1.09 4.24-.68 0 0-1.36-.68-3.14-.72 0 0-1.62.19-2.05.79 0 0 .29-1.09 3.14-1.09 2.83 0 2.83 1.02 4.53 1.32 0 0 .19-.19.19-.68 0-.5-.83-1.02-1.13-1.36Z",
  },
  aws: {
    path: "M6.76 10.05c0 .33.04.6.1.79.08.19.18.4.32.62.05.08.07.16.07.23 0 .1-.06.2-.18.3l-.61.4a.47.47 0 0 1-.25.09c-.1 0-.19-.05-.29-.14a3 3 0 0 1-.35-.45c-.1-.16-.19-.34-.3-.56-.75.88-1.7 1.32-2.83 1.32-.81 0-1.46-.23-1.93-.7-.47-.46-.71-1.08-.71-1.85 0-.82.29-1.49.88-1.99.6-.5 1.38-.75 2.38-.75.33 0 .67.03 1.02.08.35.05.72.13 1.1.22V6.94c0-.74-.15-1.26-.46-1.56-.31-.3-.83-.45-1.57-.45-.34 0-.68.04-1.04.12-.35.08-.7.19-1.03.32a2.7 2.7 0 0 1-.34.13.6.6 0 0 1-.15.03c-.13 0-.2-.1-.2-.29v-.47c0-.15.02-.26.07-.32.05-.07.13-.13.26-.19.34-.17.74-.32 1.2-.44a5.8 5.8 0 0 1 1.5-.19c1.14 0 1.98.26 2.51.78.53.52.79 1.31.79 2.37v3.12l-.05-.02Zm-3.91 1.47c.32 0 .64-.06.98-.17.34-.12.64-.33.9-.62.15-.18.26-.38.32-.62.06-.24.1-.53.1-.86v-.42a8.3 8.3 0 0 0-.87-.16 7 7 0 0 0-.9-.06c-.64 0-1.11.13-1.42.38-.31.25-.47.62-.47 1.09 0 .45.12.78.35 1.01.24.24.58.36 1.01.36Zm14.4 4.42c-3.16 2.33-7.75 3.57-11.7 3.57-5.54 0-10.53-2.05-14.3-5.46-.3-.27-.03-.63.32-.42 4.08 2.36 9.11 3.79 14.31 3.79 3.52 0 7.38-.73 10.94-2.24.53-.24.98.35.43.76Zm1.32-1.5c-.4-.52-2.68-.24-3.7-.13-.31.04-.36-.23-.08-.43 1.82-1.28 4.8-.91 5.14-.48.35.43-.09 3.41-1.79 4.84-.26.22-.51.1-.4-.19.38-.96 1.23-3.1.83-3.61Z",
  },
  oracle: {
    path: "M16.412 4.412H7.588a7.588 7.588 0 0 0 0 15.176h8.824a7.588 7.588 0 0 0 0-15.176m-.164 12.708H7.752a5.12 5.12 0 0 1 0-10.24h8.496a5.12 5.12 0 1 1 0 10.24",
  },
  dynatrace: {
    path: "M12 2 2 12l10 10 10-10L12 2Zm0 3 7 7-7 7-7-7 7-7Z",
  },
  mulesoft: {
    path: "M12 2 2 12l10 10 10-10L12 2Z",
  },
  valkey: {
    path: "M12 2 4 8v8l8 6 8-6V8l-8-6Z",
  },
  websocket: {
    path: "M2 6h20M2 12h14M2 18h20",
  },
  gpt: {
    path: "M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 3v6l4 2",
  },
  ibmmq: {
    path: "M4 4h16v16H4zM4 12h16M12 4v16",
  },
};

type Rec = { si?: SI; custom?: string };

/** Normalized-chip-label → simple-icons record or custom SVG key. */
const MAP: Record<string, Rec> = {
  // languages
  java: { custom: "java" },
  javascript: { si: siJavascript },
  typescript: { si: siTypescript },
  // frameworks / libs
  springboot: { si: siSpringboot },
  spring: { si: siSpringboot },
  nodejs: { si: siNodedotjs },
  node: { si: siNodedotjs },
  nestjs: { si: siNestjs },
  nest: { si: siNestjs },
  expressjs: { si: siExpress },
  express: { si: siExpress },
  reactjs: { si: siReact },
  react: { si: siReact },
  reactnative: { si: siReact },
  nextjs: { si: siNextdotjs },
  next: { si: siNextdotjs },
  prisma: { si: siPrisma },
  sequelize: { si: siSequelize },
  mui: { si: siMui },
  jest: { si: siJest },
  swagger: { si: siSwagger },
  graphql: { si: siGraphql },
  // cloud / infra
  aws: { custom: "aws" },
  awsec2s3eksr2: { custom: "aws" },
  digitalocean: { si: siDigitalocean },
  terraform: { si: siTerraform },
  docker: { si: siDocker },
  kubernetes: { si: siKubernetes },
  jenkins: { si: siJenkins },
  githubactions: { si: siGithubactions },
  cicd: { si: siGithubactions },
  firebase: { si: siFirebase },
  proxmox: { si: siProxmox },
  // databases
  postgresql: { si: siPostgresql },
  postgres: { si: siPostgresql },
  mongodb: { si: siMongodb },
  mongo: { si: siMongodb },
  mysql: { si: siMysql },
  oracledatabase: { custom: "oracle" },
  oracle: { custom: "oracle" },
  dynamodb: { custom: "aws" },
  clickhouse: { si: siClickhouse },
  scylladb: { si: siScylladb },
  opensearch: { si: siOpensearch },
  valkey: { custom: "valkey" },
  redis: { si: siRedis },
  // observability
  grafana: { si: siGrafana },
  prometheus: { si: siPrometheus },
  dynatrace: { custom: "dynatrace" },
  // messaging / protocols
  ibmmq: { custom: "ibmmq" },
  websocket: { custom: "websocket" },
  websockets: { custom: "websocket" },
  webrtc: { si: siWebrtc },
  mulesoft: { custom: "mulesoft" },
  // ai / ides
  cursor: { si: siCursor },
  devin: { si: siOpencode },
  opencode: { si: siOpencode },
  windsurf: { si: siWindsurf },
  githubcopilot: { si: siGithubcopilot },
  copilot: { si: siGithubcopilot },
  claude: { si: siClaude },
  claudeopus: { si: siClaude },
  claudesonnet: { si: siClaude },
  composer: { si: siComposer },
  gpt: { custom: "gpt" },
  chatgpt: { custom: "gpt" },
  gemini: { si: siGooglegemini },
  googlegemini: { si: siGooglegemini },
  huggingface: { si: siHuggingface },
};

function normalize(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export interface TechIconProps {
  label: string;
  size?: number;
  className?: string;
}

export function TechIcon({ label, size = 14, className }: TechIconProps) {
  const key = normalize(label);
  const rec = MAP[key];

  const custom = rec?.custom ? CUSTOM[rec.custom] : null;
  const si = rec?.si;

  if (!custom && !si) {
    // Generic fallback: small filled dot in currentColor.
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden
        focusable={false}
        className={className}
      >
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={custom?.viewBox ?? "0 0 24 24"}
      fill="currentColor"
      aria-hidden
      focusable={false}
      className={className}
    >
      <path d={(custom ?? si)!.path} />
    </svg>
  );
}

export default TechIcon;
