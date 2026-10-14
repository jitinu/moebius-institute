import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { principles } from "@/data/principles";

export const metadata: Metadata = {
  title: "Principles",
  description:
    "The three principles that define MOEBIUS: Youth Representation, Interdisciplinary Thinking and Intergenerational Collaboration, and the range of people the institute brings together.",
};

const roles = [
  "Young people",
  "Researchers",
  "Technologists",
  "Entrepreneurs",
  "Educators",
  "Policymakers",
  "Thinkers across the humanities and social sciences",
];

export default function PrinciplesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Principles"
        title="Three commitments: representation, interdisciplinary inquiry, and collaboration across generations."
        lede="Many institutions think about artificial superintelligence (ASI). Some think about young people. MOEBIUS is defined by the combination, and by a practical commitment to connecting the two."
      />

      {principles.map((p, i) => (
        <Section key={p.title} number={`0${i + 1}`} eyebrow={`Principle ${p.numeral}`} title={p.title}>
          <Prose>
            {p.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Prose>
        </Section>
      ))}

      <Section number="04" eyebrow="The people within MOEBIUS" title="Not an organisation of students, but a setting for many kinds of knowledge.">
        <div className="grid gap-10 lg:grid-cols-9">
          <Prose className="lg:col-span-6">
            <p>
              MOEBIUS is youth-focused, not youth-only. Its ambition is to bring together people with different
              experiences and forms of expertise: young people alongside researchers, technologists, entrepreneurs,
              educators, policymakers and other relevant thinkers.
            </p>
            <p>
              This diversity is essential to the model. Youth perspectives illuminate needs and experiences that might
              otherwise be missed; technical and disciplinary expertise helps analyse those perspectives and consider
              their implications. MOEBIUS aims to create a setting in which these forms of knowledge inform one
              another.
            </p>
            <p>
              Our distinction, then, lies not only in representing young people but in creating meaningful
              collaboration among people who might otherwise approach the future of intelligence from separate
              disciplines or separate generations.
            </p>
          </Prose>
          <Reveal className="lg:col-span-3" delay={120}>
            <p className="eyebrow">Who we bring together</p>
            <ul className="mt-4 space-y-2.5 border-l border-rule pl-5 text-sm leading-relaxed text-ink-soft">
              {roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal className="mt-12 flex flex-wrap gap-4" delay={120}>
          <ButtonLink href="/people" cursorLabel="View">
            People
          </ButtonLink>
          <ButtonLink href="/approach" variant="outline">
            Our approach
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
