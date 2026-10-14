export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Mission", href: "/mission" },
  { label: "Why MOEBIUS", href: "/why" },
  { label: "The Difference", href: "/difference" },
  { label: "People", href: "/people" },
  { label: "Research", href: "/research" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Events", href: "/events" },
];

export const contactNav: NavItem = { label: "Contact", href: "/contact" };

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Institute",
    items: [
      { label: "Mission", href: "/mission" },
      { label: "Why MOEBIUS", href: "/why" },
      { label: "The Difference", href: "/difference" },
      { label: "People", href: "/people" },
    ],
  },
  {
    heading: "Work",
    items: [
      { label: "Research", href: "/research" },
      { label: "Initiatives", href: "/initiatives" },
      { label: "Events", href: "/events" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
