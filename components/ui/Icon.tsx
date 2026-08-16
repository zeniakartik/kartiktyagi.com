import type { IconName } from "@/content/me/types";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
  title?: string;
};

/** Line-drawn icons rendered with currentColor; brand marks are filled paths. */
const STROKE: Partial<Record<IconName, React.ReactNode>> = {
  architecture: (
    <>
      <path d="M3 21h18" />
      <path d="M6 21V8l6-4 6 4v13" />
      <path d="M10 21v-6h4v6" />
      <path d="M9.5 11h.01M14.5 11h.01" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 2.5 8 12 13l9.5-5L12 3Z" />
      <path d="m2.5 12 9.5 5 9.5-5" />
      <path d="m2.5 16 9.5 5 9.5-5" />
    </>
  ),
  cloud: (
    <>
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.98A6 6 0 0 0 6.2 9.2 4 4 0 0 0 6.5 19h11Z" />
    </>
  ),
  transform: (
    <>
      <path d="M3 7h13l-3-3M21 17H8l3 3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.9 7 9 4.1-1.1 7-4.8 7-9V6l-7-3Z" />
      <path d="m9.2 12 1.9 1.9 3.7-3.8" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3.5 13.6 9 19 10.5 13.6 12 12 17.5 10.4 12 5 10.5 10.4 9 12 3.5Z" />
      <path d="M18.5 4v3M20 5.5h-3M5 16v2.5M6.25 17.25h-2.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9.5 3v2M14.5 3v2M9.5 19v2M14.5 19v2M3 9.5h2M3 14.5h2M19 9.5h2M19 14.5h2" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 6l-4 12" />
    </>
  ),
  package: (
    <>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="m4 7 8 4 8-4M12 21V11" />
    </>
  ),
  puzzle: (
    <>
      <path d="M10 4.5a1.5 1.5 0 0 1 3 0c0 .5-.2 1 .3 1H16a1 1 0 0 1 1 1v2.2c0 .5.5.3 1 .3a1.5 1.5 0 0 1 0 3c-.5 0-1-.2-1 .3V17a1 1 0 0 1-1 1h-2.7c-.5 0-.3.5-.3 1a1.5 1.5 0 0 1-3 0c0-.5.2-1-.3-1H7a1 1 0 0 1-1-1v-2.7c0-.5-.5-.3-1-.3a1.5 1.5 0 0 1 0-3c.5 0 1 .2 1-.3V7.5a1 1 0 0 1 1-1h2.7c.5 0 .3-.5.3-1Z" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5" />
      <path d="M14.5 4.5C11 6 8.5 9 7.5 13l3.5 3.5c4-1 7-3.5 8.5-7 .6-1.4.7-3.2.5-5-1.8-.2-3.6-.1-5.5.5Z" />
      <circle cx="14.5" cy="9.5" r="1.6" />
    </>
  ),
  mountain: (
    <>
      <path d="m3 19 6-11 4 6.5 2-3 6 7.5H3Z" />
      <path d="m9 8 1.6 2.7" />
    </>
  ),
  cricket: (
    <>
      <path d="m4 20 5.5-5.5" />
      <path d="M9 15 16.5 7.5a2.1 2.1 0 0 1 3 3L12 18" />
      <circle cx="17.5" cy="17.5" r="2" />
    </>
  ),
  billiards: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3Z" />
    </>
  ),
  hammer: (
    <>
      <path d="m14 6 4 4M3 21l7-7" />
      <path d="M12.5 3.5 20 11l-2 2-3-1-3.5-3.5-1-3 2-2Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <>
      <path d="M6.5 3.5 9 4l1 4-2 1.5a12 12 0 0 0 6.5 6.5L16 14l4 1 .5 2.5a2 2 0 0 1-2 2.3A16 16 0 0 1 4.2 5.5a2 2 0 0 1 2.3-2Z" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7M8 7h9v9" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8" />
    </>
  ),
  moon: (
    <>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" />
    </>
  ),
  chevron: (
    <>
      <path d="m9 6 6 6-6 6" />
    </>
  ),
};

const FILLED: Partial<Record<IconName, string>> = {
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  stackoverflow:
    "M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154z",
};

export function Icon({ name, size = 20, title, ...rest }: IconProps) {
  const filled = FILLED[name];
  const a11y = title
    ? { role: "img", "aria-label": title }
    : { "aria-hidden": true, focusable: false as const };

  if (filled) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        {...a11y}
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        <path d={filled} />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...a11y}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {STROKE[name] ?? null}
    </svg>
  );
}

export default Icon;
