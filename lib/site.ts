export const site = {
  name: "MOEBIUS",
  fullName: "MOEBIUS: Institute for Intelligence & Humanity",
  shortTitle: "Institute for Intelligence & Humanity",
  description:
    "MOEBIUS is a youth-focused think tank on artificial intelligence and humanity. We exist so the future of AI is shaped not only for the next generation, but with them.",
  tagline: "Intelligence is changing. Who shapes what comes next?",
  // Placeholders: replace before launch.
  contact: {
    email: "hello@moebius.example",
    emailLabel: "hello@moebius.example (placeholder)",
  },
  social: [
    { label: "LinkedIn", href: "#", placeholder: true },
    { label: "Instagram", href: "#", placeholder: true },
    { label: "X", href: "#", placeholder: true },
  ],
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset path with the configured basePath (for GitHub Pages sub-paths). */
export function asset(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
