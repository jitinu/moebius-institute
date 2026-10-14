export type NavItem = { label: string; href: string };

/** Streamlined primary navigation: only pages with substantive content. */
export const primaryNav: NavItem[] = [
  { label: "Mission", href: "/mission" },
  { label: "Why MOEBIUS", href: "/why" },
  { label: "Our Approach", href: "/approach" },
  { label: "People", href: "/people" },
  { label: "Partnerships & Funding", href: "/support" },
];

export const contactNav: NavItem = { label: "Contact", href: "/contact" };

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Institute",
    items: [
      { label: "Mission", href: "/mission" },
      { label: "Why MOEBIUS", href: "/why" },
      { label: "Our Approach", href: "/approach" },
      { label: "Principles", href: "/difference" },
      { label: "People", href: "/people" },
    ],
  },
  {
    heading: "Engage",
    items: [
      { label: "Partnerships & Funding", href: "/support" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/** Sections that exist as routes but are not yet active. Linked quietly from the footer only. */
export const inDevelopmentNav: NavItem[] = [
  { label: "Research", href: "/research" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Events", href: "/events" },
];
