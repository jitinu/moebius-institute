import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Mission",
  description: "The purpose, driving questions and vision of MOEBIUS: Institute for Intelligence & Humanity.",
};

const questions = [
  "What should young people understand about intelligent systems in order to shape them, rather than only use them?",
  "How is AI changing what it means to learn, to work, and to grow up?",
  "Which human capacities — judgment, care, imagination, responsibility — must be protected and cultivated as machines become more capable?",
  "How are decisions about AI actually made today, and where are young people absent from them?",
  "What would it look like for generations to design the future of intelligence together, rather than in sequence?",
];

export default function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mission"
        title="To bring young people into the shaping of artificial intelligence — as thinkers, researchers and participants, alongside the generations before them."
        lede="MOEBIUS is a think tank on intelligence and humanity. Our work is to make the questions raised by AI legible, to pursue them seriously, and to ensure that the people who will live longest with the answers help write them."
      />

      <Section number="01" eyebrow="Purpose" title="Why an institute, and why now.">
        <Prose>
          <p>
            Artificial intelligence is no longer a specialist concern. It is changing how people learn, how they work,
            what they create, and how they understand themselves. Those changes land first and hardest on the young —
            and yet the forums where AI is researched, debated and governed are almost entirely made up of adults
            speaking about young people in their absence.
          </p>
          <p>
            MOEBIUS exists to close that gap. We are building an institution where young people do the thinking — set
            the questions, conduct the research, and speak publicly in their own voice — and where they do it in
            sustained collaboration with experienced researchers, educators, practitioners and policymakers.
          </p>
          <p>
            We are not a technology company, an advocacy campaign or a student club. We are a research and convening
            institution, early in its life, committed to precision, seriousness and accessibility in equal measure.
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
          <p className="text-[0.9375rem] leading-relaxed text-muted text-pretty">
            These are starting points rather than a fixed programme. As our work develops, the questions will sharpen
            and some will be replaced.
          </p>
        </Reveal>
      </Section>

      <Section number="03" eyebrow="Vision" title="A future for intelligence that the next generation helped design.">
        <Prose>
          <p>
            We imagine a world in which young people are recognised as necessary participants in decisions about
            intelligent systems — not consulted after the fact, but present from the beginning. A world in which
            expertise and lived experience meet as equals, and in which the development of AI is understood as
            inseparable from the question of what kind of humans we want to be.
          </p>
          <p>
            MOEBIUS will not bring that world about on its own. Our aim is to be one serious, credible place where it is
            practised: in how we research, whom we convene, and what we publish.
          </p>
        </Prose>
        <Reveal className="mt-12 flex flex-wrap gap-4" delay={120}>
          <ButtonLink href="/why" variant="outline">
            Why we exist
          </ButtonLink>
          <ButtonLink href="/difference" variant="outline">
            What makes us different
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
