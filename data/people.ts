/**
 * People directory for MOEBIUS.
 *
 * The /people page and the home-page preview are rendered from this array via <ProfileCard />.
 * Only add a person once their participation has been confirmed and they have approved
 * their name, role and biography. To add someone:
 *
 *   1. Add a headshot to /public/people/<id>.jpg (portrait, square, ~800×800px).
 *   2. Add an entry to `people` below (see the existing entries for the shape).
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
  group: "Founding team" | "Education & Research" | "Advisors" | "Researchers" | "Contributors";
};

export const peopleGroups: Person["group"][] = [
  "Founding team",
  "Education & Research",
  "Advisors",
  "Researchers",
  "Contributors",
];

export const people: Person[] = [
  {
    id: "daniel",
    name: "Daniel",
    role: "Co-founder",
    bio: "Daniel grew up in the Bay Area in a family surrounded by technology, and an early interest in technology and artificial intelligence became a commitment to help shape the future rather than watch it unfold. He is particularly interested in interdisciplinary work and in how technology interacts with people, culture and society. His academic and professional interests span mathematics, computer science, research and business.",
    headshot: "/people/daniel.jpg",
    expertise: ["Mathematics", "Computer science", "Interdisciplinary research", "Business"],
    group: "Founding team",
  },
  {
    id: "michael-lepech",
    name: "Michael D. Lepech",
    role: "Co-founder and Advisor",
    bio: "Michael D. Lepech is a professor at Stanford University specialising in sustainable infrastructure and life-cycle engineering. He earned his BSE, MSE, PhD and MBA from the University of Michigan, and his work focuses on engineering, sustainability and data-driven design. He is the principal mentor of ALPHAG3N.",
    headshot: "/people/michael-lepech.jpg",
    expertise: ["Sustainable infrastructure", "Life-cycle engineering", "Data-driven design"],
    group: "Founding team",
  },
  {
    id: "ted-theodosopoulos",
    name: "Ted Theodosopoulos",
    role: "Education & Research",
    bio: "Ted Theodosopoulos is a mathematician who moved from academia and industry to pre-college teaching seventeen years ago. For the past nine years he has taught mathematics and economics at The Nueva School. His research focuses on interacting stochastic systems, especially in biology and economics. He is the official advisor of ALPHAG3N.",
    headshot: "/people/ted-theodosopoulos.jpg",
    expertise: ["Mathematics", "Economics", "Stochastic systems"],
    group: "Education & Research",
  },
];

/** First few entries for the home-page preview. */
export const featuredPeople = people.slice(0, 3);
