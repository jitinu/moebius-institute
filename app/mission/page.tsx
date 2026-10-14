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
    "Why MOEBIUS exists, the questions it pursues, and its stage of development as an emerging think tank on artificial superintelligence and humanity.",
};

const contributions = [
  ["Researchers", "Specialised knowledge of how these systems work, what they can and cannot do, and where the open problems lie."],
  ["Practitioners", "Understanding of the systems they build and deploy, and of the constraints under which decisions are made."],
  ["Policymakers", "Attention to institutional, legal and societal implications, and to the trade-offs between them."],
  ["Young people", "Firsthand experience of growing up alongside these technologies, emerging needs, and perspectives that would otherwise be overlooked."],
];

const questions = [
  "How might ASI transform education, creativity, work, opportunity and human agency, and for whom?",
  "What do young people in different countries and circumstances already experience with increasingly capable systems, and what do they need from what comes next?",
  "Which human capacities should the development of ASI protect and cultivate, and how would we know whether it is doing so?",
  "How are consequential decisions about ASI made today, and where in those processes is the next generation absent?",
];

const stages = [
  {
    label: "Existing experience",
    text: "Through ALPHAG3N, an international youth technology community, MOEBIUS's founders have organised conferences, workshops and hackathons connecting students with researchers and practitioners across the United States, South Korea, Japan and Taiwan.",
  },
  {
    label: "Current activities",
    text: "Establishing the institute: defining its initial research questions, building out its founding group and designing how youth perspectives will be gathered and analysed.",
  },
  {
    label: "Aspirations",
    text: "To publish research, convene structured dialogue between young people and decision-makers, and build a growing knowledge base of youth perspectives on ASI. None of these yet exists; each will be described here only once it does.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mission"
        title="The next generation should help shape the future it will inherit."
        lede="MOEBIUS is an emerging think tank on the relationship between artificial superintelligence (ASI) and humanity. Its purpose is to ensure that the people who will live longest with the consequences of ASI have a meaningful role in shaping it."
      />

      <Section number="01" eyebrow="Why MOEBIUS exists" title="Consequential decisions, made without the people most affected by them.">
        <Prose>
          <p>
            The possible development of ASI raises questions that extend well beyond technical capability: how it might
            transform education, creativity, work, opportunity and human agency; what different communities will need;
            and how such systems should account for the people who will live alongside them.
          </p>
          <p>
            Young people are already experiencing the effects of increasingly capable systems in their education, their
            creative work and their daily lives. Yet their perspectives are not consistently incorporated into the
            research, policies and products shaping their future. This is not indifference on the part of existing
            institutions. It is that youth participation remains insufficient in many of the conversations that matter
            most, and few institutions are designed to strengthen it. MOEBIUS is designed for exactly that.
          </p>
        </Prose>
      </Section>

      <Section number="02" eyebrow="Complementary, not substitute" title="Youth perspectives should inform expertise, not replace it.">
        <Prose>
          <p>
            Good decisions about ASI require several kinds of knowledge, each incomplete on its own. MOEBIUS&apos;s
            purpose is to create meaningful connections among them.
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
      </Section>

      <Section number="03" eyebrow="Driving questions" title="The questions we return to.">
        <ol className="max-w-3xl divide-y divide-rule border-y border-rule">
          {questions.map((q, i) => (
            <Reveal as="li" key={q} className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr]" delay={i * 70}>
              <span className="font-serif text-sm text-ochre">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-serif text-xl leading-snug text-ink sm:text-2xl">{q}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section number="04" eyebrow="Across countries and cultures" title="Listening widely enough to hear the differences.">
        <Prose>
          <p>
            Through its connection with ALPHAG3N&apos;s international student community, MOEBIUS aims to bring youth
            perspectives from different countries, cultures, educational systems and socioeconomic circumstances into
            conversations about ASI. We do not assume that young people share a single view. The objective is to
            understand both the concerns they hold in common and the differences between them. ALPHAG3N&apos;s community
            is an existing foundation for this work, not a claim to global coverage, and MOEBIUS intends to develop it
            further.
          </p>
        </Prose>
        <Reveal className="mt-10" delay={100}>
          <ButtonLink href="/approach" variant="text" cursorLabel="Read">
            How we intend to listen
          </ButtonLink>
        </Reveal>
      </Section>

      <Section number="05" eyebrow="Stage of development" title="Where we are, stated plainly.">
        <ul className="max-w-3xl divide-y divide-rule border-y border-rule">
          {stages.map((s, i) => (
            <Reveal as="li" key={s.label} className="grid gap-3 py-7 sm:grid-cols-[11rem_1fr]" delay={i * 70}>
              <p className="eyebrow pt-1">{s.label}</p>
              <p className="text-[1.125rem] leading-[1.7] text-ink-soft text-pretty">{s.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section number="06" eyebrow="Our name" title="One continuous surface.">
        <div className="grid items-start gap-10 lg:grid-cols-9">
          <Prose className="lg:col-span-6">
            <p>
              A Möbius strip appears to have two sides. Trace it and you find only one: a single continuous surface
              with no inside or outside, no beginning or end.
            </p>
            <p>
              That is how we understand intelligence and humanity. They are not two sides to be balanced or two fields
              to be bridged; they are one surface. Every question about what intelligent systems can do is also a
              question about what it means to be human. The loop also describes how we work: generations and
              disciplines are not opposite sides of a divide but points on the same path, each leading back to the
              other.
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
          <ButtonLink href="/difference" variant="outline">
            Our principles
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
