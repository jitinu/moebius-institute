import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import MobiusMark from "@/components/MobiusMark";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { DEFAULT_ROTATION } from "@/lib/mobius";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "The purpose, driving questions, vision and stage of development of MOEBIUS: Institute for Intelligence & Humanity.",
};

const questions = [
  "How might increasingly powerful intelligence transform education, creativity, work, opportunity and human agency — and for whom?",
  "What do young people in different countries, cultures and circumstances already experience with AI, and what do they need from what comes next?",
  "Which human capacities should the development of ASI protect and cultivate, and how would we know whether it is doing so?",
  "How are consequential decisions about advanced AI made today, and where in those processes is the next generation absent?",
  "What forms of collaboration between generations and disciplines produce better decisions about intelligence than either could produce alone?",
];

const stages = [
  {
    label: "Existing experience",
    text: "Through ALPHAG3N, an international youth AI and technology community, MOEBIUS's founders have organised conferences, workshops and hackathons connecting students with researchers and practitioners across the United States, South Korea, Japan and Taiwan.",
  },
  {
    label: "Current activities",
    text: "Establishing the institute: defining its initial research questions, assembling a founding group of young people, researchers, technologists, educators and policymakers, and designing how youth perspectives will be gathered and analysed.",
  },
  {
    label: "Aspirations",
    text: "To publish research, convene structured dialogue between young people and decision-makers, and build a growing knowledge base of youth perspectives on ASI. None of these yet exists; each will be described on this site only once it does.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mission"
        title="To ensure the next generation has a meaningful role in shaping the future of intelligence."
        lede="MOEBIUS is an emerging think tank on the relationship between artificial superintelligence (ASI) and humanity. As ASI becomes an increasingly serious subject of research, development and public discussion, we work to ensure that the perspective of the people who will live longest with its consequences is heard — and heard well."
      />

      <Section number="01" eyebrow="Purpose" title="Why an institute, and why this one.">
        <Prose>
          <p>
            Many organisations advance AI capabilities, study technical risks, build products or develop policy. This
            work is important. But the needs, experiences, concerns and aspirations of young people — who will inherit
            whatever is decided — are rarely a systematic input to it.
          </p>
          <p>
            MOEBIUS exists to bridge that gap: to bring youth perspectives into dialogue with the researchers,
            technologists, policymakers and educators shaping the future of intelligence, and to do so with the rigour
            those fields expect. We do not propose that young people&apos;s views should replace expertise. We propose
            that expertise is incomplete without them.
          </p>
          <p>
            Our central principle is simple to state and demanding to practise: the future of ASI should not be shaped
            only for the next generation. The next generation should have a meaningful role in shaping it.
          </p>
        </Prose>
      </Section>

      <Section number="02" eyebrow="Driving questions" title="The questions we return to.">
        <ol className="max-w-3xl divide-y divide-rule border-y border-rule">
          {questions.map((q, i) => (
            <Reveal as="li" key={q} className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr]" delay={i * 70}>
              <span className="font-serif text-sm text-ochre">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-serif text-xl leading-snug text-ink sm:text-2xl">{q}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-8 max-w-prose" delay={100}>
          <p className="text-base leading-relaxed text-muted text-pretty">
            These are starting points rather than a fixed programme. As our work develops, the questions will sharpen
            and some will be replaced.
          </p>
        </Reveal>
      </Section>

      <Section number="03" eyebrow="Vision" title="Decisions about intelligence informed by the people who will live with them.">
        <Prose>
          <p>
            We envision a future in which the development of ASI is understood as inseparable from the question of
            what kind of human lives it will shape; in which the next generation is a recognised participant in that
            development rather than its audience; and in which technical expertise and lived experience inform one
            another as a matter of course.
          </p>
          <p>
            MOEBIUS will not bring that future about alone. Our aim is to be one credible, rigorous place where it is
            practised.
          </p>
        </Prose>
      </Section>

      <Section number="04" eyebrow="Stage of development" title="Where we are, stated plainly.">
        <ul className="max-w-3xl divide-y divide-rule border-y border-rule">
          {stages.map((s, i) => (
            <Reveal as="li" key={s.label} className="grid gap-3 py-7 sm:grid-cols-[11rem_1fr]" delay={i * 70}>
              <p className="eyebrow pt-1">{s.label}</p>
              <p className="text-[1.125rem] leading-[1.7] text-ink-soft text-pretty">{s.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section number="05" eyebrow="Our name" title="One continuous surface.">
        <div className="grid items-start gap-10 lg:grid-cols-9">
          <Prose className="lg:col-span-6">
            <p>
              A Möbius strip appears to have two sides. Trace it and you find only one: a single continuous surface
              with no inside or outside, no beginning or end.
            </p>
            <p>
              That is how we understand intelligence and humanity. They are not two sides to be balanced or two fields
              to be bridged; they are one surface. Every question about what intelligent systems can do is also a
              question about what it means to be human, and every answer about who we are shapes what we choose to
              build.
            </p>
            <p>
              The loop also describes how we work: generations and disciplines are not opposite sides of a divide but
              points on the same path, each leading back to the other.
            </p>
          </Prose>
          <Reveal className="flex justify-center lg:col-span-3 lg:justify-end" delay={120}>
            <MobiusMark
              size={200}
              className="text-ink"
              rulings={28}
              strokeWidth={0.9}
              rotation={DEFAULT_ROTATION}
              title="A Möbius strip drawn as a single continuous line"
            />
          </Reveal>
        </div>
        <Reveal className="mt-12 flex flex-wrap gap-4" delay={120}>
          <ButtonLink href="/approach">Our approach</ButtonLink>
          <ButtonLink href="/why" variant="outline">
            Why MOEBIUS
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
