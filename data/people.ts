/**
 * People directory for MOEBIUS.
 *
 * The /people page and the home-page preview are rendered entirely from this array
 * via <ProfileCard />. To add a real member:
 *
 *   1. Add a headshot to /public/people/<id>.jpg (portrait, 4:5 ratio, ~800×1000px).
 *   2. Add an entry below with `placeholder: false` (or omit it).
 *   3. Keep bios factual and short (2–3 sentences). Do not list credentials or
 *      affiliations the person has not approved.
 *
 * Entries with `placeholder: true` are labelled as such in the UI. They exist only to
 * demonstrate the layout and MUST be replaced before launch.
 */

export type PersonLink = {
  label: string;
  href: string;
};

export type Person = {
  /** Stable id; also used as the React key and (by convention) the headshot filename. */
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Path under /public, e.g. "/people/jane-doe.jpg". Falls back to the placeholder graphic. */
  headshot?: string;
  /** Short phrases, 2–4 items. Rendered as a quiet list under the bio. */
  expertise: string[];
  links?: PersonLink[];
  /** Group used for section headings on /people. */
  group: "Founding team" | "Fellows" | "Advisors";
  /** Marks demonstration entries. Remove or set to false for real people. */
  placeholder?: boolean;
};

export const people: Person[] = [
  {
    id: "placeholder-founding-1",
    name: "Founding Member",
    role: "Co-founder — placeholder",
    bio: "This entry is a layout placeholder. Replace it with a real founding member's name, role and a short, factual biography approved by that person.",
    expertise: ["Area of focus", "Area of focus"],
    links: [{ label: "Link (placeholder)", href: "#" }],
    group: "Founding team",
    placeholder: true,
  },
  {
    id: "placeholder-founding-2",
    name: "Founding Member",
    role: "Co-founder — placeholder",
    bio: "This entry is a layout placeholder. Replace it with a real founding member's name, role and a short, factual biography approved by that person.",
    expertise: ["Area of focus", "Area of focus"],
    group: "Founding team",
    placeholder: true,
  },
  {
    id: "placeholder-founding-3",
    name: "Founding Member",
    role: "Programs — placeholder",
    bio: "This entry is a layout placeholder. Replace it with a real founding member's name, role and a short, factual biography approved by that person.",
    expertise: ["Area of focus", "Area of focus", "Area of focus"],
    group: "Founding team",
    placeholder: true,
  },
  {
    id: "placeholder-fellow-1",
    name: "Youth Fellow",
    role: "Fellow — placeholder",
    bio: "Fellows are the young researchers, builders and organisers who carry out MOEBIUS's work. This placeholder shows how a fellow's profile will appear.",
    expertise: ["Area of focus"],
    group: "Fellows",
    placeholder: true,
  },
  {
    id: "placeholder-fellow-2",
    name: "Youth Fellow",
    role: "Fellow — placeholder",
    bio: "Fellows are the young researchers, builders and organisers who carry out MOEBIUS's work. This placeholder shows how a fellow's profile will appear.",
    expertise: ["Area of focus", "Area of focus"],
    group: "Fellows",
    placeholder: true,
  },
  {
    id: "placeholder-advisor-1",
    name: "Advisor",
    role: "Advisor — placeholder",
    bio: "Advisors bring experience from research, policy, education and practice, working alongside younger members rather than above them. Replace with a real advisor once confirmed.",
    expertise: ["Area of focus", "Area of focus"],
    group: "Advisors",
    placeholder: true,
  },
];

export const peopleGroups: Person["group"][] = ["Founding team", "Fellows", "Advisors"];

/** First few entries for the home-page preview. */
export const featuredPeople = people.slice(0, 3);
