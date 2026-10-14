import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import MobiusMark from "@/components/MobiusMark";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { principles } from "@/data/principles";

export const metadata: Metadata = {
  title: "The Difference",
  description:
    "The three principles that distinguish MOEBIUS — Youth Perspective, Interdisciplinary Thinking, Intergenerational Collaboration — and its origins in ALPHAG3N.",
};

export default function DifferencePage() {
  return (
    <>
      <PageHeader
        eyebrow="The Difference"
        title="Three principles, held together."
        lede="Many institutions think about AI. Some think about young people. MOEBIUS is defined by the combination: young people's perspective, interdisciplinary thinking and intergenerational collaboration, each depending on the others."
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

      {/* Origin. Wording to be confirmed against the institutional brief. */}
      <Section number="04" eyebrow="Origins" title="From ALPHAG3N to MOEBIUS.">
        <div className="grid items-start gap-10 lg:grid-cols-9">
          <Prose className="lg:col-span-6">
            <p>
              MOEBIUS emerged from ALPHAG3N. The conviction that formed there — that young people should be participants
              in shaping technology rather than its audience — is the conviction MOEBIUS now carries into a dedicated
              institution focused on intelligence and humanity.
            </p>
            <p>
              The name marks the shift. ALPHAG3N spoke to a generation; MOEBIUS speaks to the single, continuous
              surface that joins intelligence to humanity and one generation to the next.
            </p>
          </Prose>
          <Reveal className="flex justify-center lg:col-span-3 lg:justify-end" delay={120}>
            <MobiusMark size={160} className="text-ink/80" rulings={22} strokeWidth={0.9} />
          </Reveal>
        </div>
      </Section>

      <Section number="05" eyebrow="In practice" title="How the principles show up in the work.">
        <ul className="max-w-3xl divide-y divide-rule border-y border-rule">
          {[
            ["Who leads", "Young researchers and organisers hold real responsibility for projects, from question to publication."],
            ["Who is in the room", "Every working group pairs young members with experienced practitioners, as peers rather than mentors and mentees."],
            ["What we publish", "Clear, precise writing that distinguishes what we know from what we think, and what exists from what we intend."],
            ["What we refuse", "Invented authority. We do not claim partnerships, results or expertise we do not have."],
          ].map(([label, text], i) => (
            <Reveal as="li" key={label} className="grid gap-3 py-6 sm:grid-cols-[11rem_1fr]" delay={i * 70}>
              <p className="eyebrow pt-1">{label}</p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink-soft text-pretty">{text}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 flex flex-wrap gap-4" delay={120}>
          <ButtonLink href="/people" cursorLabel="View">
            Meet the people
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" cursorLabel="Contact">
            Get in touch
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
