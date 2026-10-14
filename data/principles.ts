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
    title: "Youth Perspective",
    summary:
      "Young people are not a subject of our work; they do it. They set questions, lead research and speak in their own voice.",
    body: [
      "Most conversations about AI and the next generation happen without the next generation present. MOEBIUS begins from the opposite premise: the people who will live longest with intelligent systems have a distinctive and necessary perspective on them, and that perspective should be produced by young people themselves, not reconstructed by others on their behalf.",
      "In practice this means young researchers and organisers hold real responsibility for the work — choosing what to study, how to say it, and whom to say it to.",
    ],
  },
  {
    numeral: "II",
    title: "Interdisciplinary Thinking",
    summary:
      "Questions about intelligence do not stay inside one field. We draw on technology, philosophy, the arts, education, policy and the sciences together.",
    body: [
      "What AI is, what it should do and what it does to us are not only technical questions. They are also questions of ethics, education, culture, economics and law. Treating them as the property of a single discipline produces narrow answers.",
      "MOEBIUS deliberately brings these perspectives into the same room and asks them to speak to one another. We are more interested in good questions that cross boundaries than in tidy answers that stay within them.",
    ],
  },
  {
    numeral: "III",
    title: "Intergenerational Collaboration",
    summary:
      "We work across generations rather than for one of them. Experience and fresh perspective each supply what the other lacks.",
    body: [
      "A youth-focused institute is not a youth-only one. Those who have spent careers in research, policy, education and industry carry knowledge that cannot be shortcut; those who are growing up with these systems carry an understanding of their effects that cannot be taught.",
      "MOEBIUS is built to put both at the same table as peers. The future of AI should not be shaped only for the next generation. It should be shaped with them.",
    ],
  },
];
