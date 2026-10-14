/** The three principles shown on the home page and expanded on /difference. */
export type Principle = {
  numeral: string;
  title: string;
  summary: string;
  body: string[];
};

export const principles: Principle[] = [
  {
    numeral: "I",
    title: "Youth Representation",
    summary:
      "Young people should be more than the subjects of discussions about their future. Their experiences, concerns and ideas should inform those discussions.",
    body: [
      "Young people are frequently discussed in conversations about the future of intelligence — as learners to prepare, users to protect, or a workforce to retrain — and far less frequently heard. MOEBIUS begins from the position that their experiences, concerns and ideas should meaningfully inform the decisions that will shape their lives.",
      "We aim to make youth participation more substantive by developing ways to listen to young people systematically, understand what they report, and bring those insights into dialogue with researchers, technologists and decision-makers.",
    ],
  },
  {
    numeral: "II",
    title: "Interdisciplinary Thinking",
    summary:
      "The implications of ASI extend beyond computer science and engineering. Understanding them requires philosophy, education, economics, policy, psychology, culture and ethics.",
    body: [
      "The possible development of artificial superintelligence raises questions about education, work, creativity, agency, culture and governance that no single discipline is equipped to answer. Treating them as purely technical questions produces narrow answers; treating them as purely humanistic ones produces answers detached from how the systems actually work.",
      "MOEBIUS seeks to bring these perspectives into one conversation, so that questions about intelligence are examined in both their technical and their human dimensions.",
    ],
  },
  {
    numeral: "III",
    title: "Intergenerational Collaboration",
    summary:
      "Those developing and studying advanced AI bring expertise; young people bring firsthand experience of growing up alongside it. Neither is sufficient alone.",
    body: [
      "The people building and studying advanced AI systems hold specialised knowledge and institutional experience that cannot be shortcut. Young people hold a different kind of knowledge: firsthand experience of growing up alongside rapidly changing technologies, and a direct stake in how they develop.",
      "MOEBIUS aims to create settings in which these forms of knowledge inform one another, on the understanding that neither technical expertise nor lived experience is sufficient on its own.",
    ],
  },
];
