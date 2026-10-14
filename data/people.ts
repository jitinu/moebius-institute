/**
 * People directory for MOEBIUS.
 *
 * The /people page and the home-page preview are rendered from this array via <ProfileCard />.
 * While it is empty, both places state that the founding group is being assembled.
 *
 * Only add a person once their participation has been confirmed and they have approved
 * their name, role and biography. To add someone:
 *
 *   1. Add a headshot to /public/people/<id>.jpg (portrait, 4:5 ratio, ~800×1000px).
 *   2. Add an entry to `people` below, for example:
 *
 *      {
 *        id: "jane-doe",
 *        name: "Jane Doe",
 *        role: "Co-founder",
 *        bio: "Two or three factual sentences approved by the person.",
 *        headshot: "/people/jane-doe.jpg",
 *        expertise: ["AI policy", "Education"],
 *        links: [{ label: "Website", href: "https://example.org" }],
 *        group: "Founding team",
 *      }
 *
 *   3. Keep bios short and factual. Do not list credentials or affiliations the person
 *      has not approved.
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
  /** Path under /public, e.g. "/people/jane-doe.jpg". Falls back to a neutral graphic when absent. */
  headshot?: string;
  /** Research interests or areas of expertise; 2–4 short phrases. */
  expertise: string[];
  links?: PersonLink[];
  /** Group used for section headings on /people. */
  group: "Founding team" | "Researchers" | "Advisors" | "Contributors";
};

export const peopleGroups: Person["group"][] = ["Founding team", "Researchers", "Advisors", "Contributors"];

/** Confirmed members only. Empty until the founding group is announced. */
export const people: Person[] = [];

/** First few entries for the home-page preview. */
export const featuredPeople = people.slice(0, 3);
