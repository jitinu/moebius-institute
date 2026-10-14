import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Why MOEBIUS",
  description:
    "The gap MOEBIUS addresses: young people's perspectives are not yet a consistent part of the decisions shaping artificial superintelligence.",
};

const contributions = [
  ["Researchers", "Specialised knowledge of how these systems work, what they can and cannot do, and where the open problems lie."],
  ["Practitioners", "Understanding of the systems they build and deploy, and of the constraints under which decisions are actually made."],
  ["Policymakers", "Attention to institutional, legal and societal implications, and to the trade-offs between them."],
  ["Young people", "Firsthand experience of growing up alongside these technologies, emerging needs, and perspectives that might otherwise be overlooked."],
];

export default function WhyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why MOEBIUS"
        title="The next generation should help shape the future it will inherit."
        lede="The possible development of artificial superintelligence (ASI) raises questions that reach far beyond technical capability. Those questions cannot be answered well without understanding the people most affected by the answers — and young people are, so far, among the least heard."
      />

      <Section number="01" eyebrow="The gap" title="Consequential conversations with a consistent absence.">
        <Prose>
          <p>
            How might increasingly powerful intelligence transform education, creativity, work, opportunity and human
            agency? What will different communities need? How should these systems account for the experiences and
            interests of the people who will live alongside them? These are not questions about capability alone; they
            are questions about people.
          </p>
          <p>
            Young people are already experiencing the effects of AI in their education, their creative work and their
            daily lives. Yet their perspectives are not consistently incorporated into the research, policies, products
            and institutions shaping their future. This is not because existing organisations are indifferent to young
            people. It is that youth participation remains insufficient in many of the conversations that matter most,
            and few institutions are designed to strengthen it.
          </p>
          <p>MOEBIUS is designed to address this gap.</p>
        </Prose>
      </Section>

      <Section number="02" eyebrow="Complementary, not substitute" title="Youth perspectives should inform expertise, not replace it.">
        <Prose>
          <p>
            We do not believe that young people&apos;s views should displace technical expertise or established
            research. Good decisions about ASI will require several kinds of knowledge, each of which is incomplete on
            its own.
          </p>
        </Prose>
        <ul className="mt-10 max-w-3xl divide-y divide-rule border-y border-rule">
          {contributions.map(([who, what], i) => (
            <Reveal as="li" key={who} className="grid gap-3 py-6 sm:grid-cols-[11rem_1fr]" delay={i * 60}>
              <p className="eyebrow pt-1">{who}</p>
              <p className="text-[1.125rem] leading-[1.7] text-ink-soft text-pretty">{what}</p>
            </Reveal>
          ))}
        </ul>
        <Prose className="mt-10">
          <p>
            MOEBIUS&apos;s distinctive purpose is to create meaningful connections among these perspectives — so that
            what young people report can be examined with the rigour of research, and so that research and policy can be
            informed by what young people actually experience.
          </p>
        </Prose>
      </Section>

      <Section number="03" eyebrow="Across countries and cultures" title="Listening widely enough to hear the differences.">
        <Prose>
          <p>
            Through its connection with ALPHAG3N&apos;s international student community, MOEBIUS aims to bring a wider
            range of youth perspectives into conversations about the future of intelligence. Listening across
            countries, cultures, educational systems and socioeconomic circumstances can reveal differences in how
            young people experience emerging technologies, what they need, and what they hope these technologies will
            make possible.
          </p>
          <p>
            We do not assume that young people share a single view. The objective is to understand both the concerns
            they hold in common and the differences between them, which are often where the most useful insight lies.
            ALPHAG3N&apos;s community — with members and activities across the United States, South Korea, Japan and
            Taiwan — is an existing foundation for this work, not a claim to global coverage. MOEBIUS hopes to develop
            it further.
          </p>
        </Prose>
        <Reveal className="mt-12 flex flex-wrap gap-4" delay={120}>
          <ButtonLink href="/approach">How we intend to listen</ButtonLink>
          <ButtonLink href="/difference" variant="outline">
            Our principles
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
