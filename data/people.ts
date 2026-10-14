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
    id: "daniel-koo",
    name: "Daniel Koo",
    role: "Co-founder",
    bio: "Daniel grew up in the Bay Area in a family surrounded by technology, and an early interest in technology and artificial intelligence became a commitment to help shape the future rather than watch it unfold. He is particularly interested in interdisciplinary work and in how technology interacts with people, culture and society. His academic and professional interests span mathematics, computer science, research and business.",
    headshot: "/people/daniel-koo.jpg",
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
    id: "michael-fors",
    name: "Dr. Michael A. Fors",
    role: "Co-founder",
    bio: "Dr. Michael A. Fors is a global executive and educational leader. He serves as Chairman of the Advisory Board for the Division for Prosperity of the United Nations Institute for Training and Research (UNITAR), directing programmes on entrepreneurship, youth empowerment and economic development in post-conflict and developing regions. His career spans leadership positions at Boeing, Microsoft and Intel, and academic appointments including Dean of the School of Business and Management at City University of Seattle and teaching roles at Stanford and Columbia Universities.",
    headshot: "/people/michael-fors.jpg",
    expertise: ["Youth empowerment", "Entrepreneurship", "Economic development", "Business education"],
    group: "Founding team",
  },
  {
    id: "diane-rosenberg",
    name: "Diane Rosenberg",
    role: "Education",
    bio: "Diane Rosenberg was Head of The Nueva School from 2001 to 2020 and has worked in PreK–12 independent schools for nearly forty years, including as a teacher and administrator at The Park School in Baltimore and Princeton Day School. During her tenure Nueva grew from 317 to 950 students, opened an upper school for grades 9 to 12, deepened its social-emotional learning programmes and created a K–12 design thinking and engineering programme through its own I-Lab and in collaboration with Stanford University's Institute of Design. The school established international exchanges with schools in China, Japan and Spain and was recognised as an Ashoka Changemaker School, an Apple Distinguished Program, a National School of Character, a National Blue Ribbon School and a Green Ribbon School.",
    headshot: "/people/diane-rosenberg.jpg",
    expertise: ["School leadership", "Design thinking in education", "Social-emotional learning"],
    group: "Education & Research",
  },
  {
    id: "terry-lee",
    name: "Terry Lee",
    role: "Education",
    bio: "Terry Lee is Associate Head of School at The Nueva School, where he plays a central role in shaping the school's strategic initiatives, academic vision and community safety. He began his career in education after double-majoring in mathematics and psychology at Oberlin College, and brings a deep commitment to student-centred learning and faculty mentorship. At Nueva he has guided programme planning across the school's campuses, supported experiential learning frameworks and advocated for holistic student development.",
    headshot: "/people/terry-lee.jpg",
    expertise: ["School leadership", "Experiential learning", "Faculty mentorship"],
    group: "Education & Research",
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

/** Founding team, shown on the home page. */
export const featuredPeople = people.filter((p) => p.group === "Founding team").slice(0, 3);
