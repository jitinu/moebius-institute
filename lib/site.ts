export const site = {
  name: "MOEBIUS",
  fullName: "MOEBIUS: Institute for Intelligence & Humanity",
  shortTitle: "Institute for Intelligence & Humanity",
  description:
    "MOEBIUS is an emerging think tank on the relationship between artificial superintelligence (ASI) and humanity, working to give the next generation a meaningful role in shaping the future of intelligence.",
  tagline: "Intelligence is changing. Who shapes what comes next?",
  // Placeholders: replace before launch.
  contact: {
    email: "hello@moebius.example",
    emailLabel: "hello@moebius.example (placeholder)",
  },
  social: [
    { label: "LinkedIn", href: "#", placeholder: true },
    { label: "X", href: "#", placeholder: true },
  ],
  /**
   * Contact form endpoint. Any service that accepts a JSON POST and returns 2xx on success
   * works (e.g. a Formspree form URL such as https://formspree.io/f/xxxxxxxx).
   * Set NEXT_PUBLIC_FORM_ENDPOINT at build time; when empty the form explains it is not yet connected.
   */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset path with the configured basePath (for GitHub Pages sub-paths). */
export function asset(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
