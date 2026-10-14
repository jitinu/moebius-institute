import type { Metadata } from "next";
import ApproachModel from "@/components/ApproachModel";
import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How MOEBIUS intends to hear and represent young people's perspectives: through its connection to ALPHAG3N, its international student network, and the planned ALPHAG3N Intelligence research branch.",
};

const activities = [
  "AI and technology conferences at Stanford University and Seoul National University",
  "A human-centred AI hackathon at Stanford, in which students developed projects exploring how AI could enhance human capability",
  "An AI and healthcare conference in Japan",
  "An international Physical AI conference in Taiwan",
  "Workshops and other activities connecting students with people working in emerging technologies",
];

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Approach"
        title="How MOEBIUS listens to young people, and how what it hears reaches decision-makers."
        lede="A think tank on artificial superintelligence (ASI) and humanity that claims to represent the next generation must be able to answer a direct question: how, in practice, will it hear young people? MOEBIUS's answer is its connection to ALPHAG3N."
      />

      <Section number="01" eyebrow="ALPHAG3N" title="An existing community of young people engaged with AI and emerging technology.">
        <div className="grid gap-10 lg:grid-cols-9">
          <Prose className="lg:col-span-6">
            <p>
              ALPHAG3N is a youth-led AI and technology community startup that connects young people with one another
              and with people working at the forefront of emerging technologies. It has organised conferences,
              workshops, hackathons and educational activities across the United States, South Korea, Japan and
              Taiwan, bringing students into contact with researchers, founders, engineers, educators and industry
              leaders. Its community has grown to more than 500 members.
            </p>
            <p>
              These activities were built around AI and emerging technologies broadly, rather than ASI specifically.
              What they provide is experience of how young people in different educational, cultural and geographic
              contexts engage with these technologies — the foundation on which MOEBIUS&apos;s approach rests.
            </p>
          </Prose>
          <Reveal className="lg:col-span-3" delay={120}>
            <p className="eyebrow">Activities to date</p>
            <ul className="mt-4 space-y-3 border-l border-rule pl-5 text-sm leading-relaxed text-ink-soft">
              {activities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section number="02" eyebrow="ALPHAG3N Network" title="Reaching young people across schools, countries and backgrounds.">
        <Prose>
          <p>
            ALPHAG3N Network is the community-building branch of ALPHAG3N. Its purpose is to connect students across
            schools, countries, cultures and backgrounds through educational opportunities, events, projects and
            relationships with people working in AI and technology.
          </p>
          <p>
            For MOEBIUS, this network represents a potential channel for listening: a way to learn about young
            people&apos;s experiences, concerns, needs and aspirations directly rather than by inference. The aim is to
            understand a diversity of perspectives — including the differences between them — rather than to treat young
            people as a single, homogeneous group.
          </p>
        </Prose>
      </Section>

      <Section number="03" eyebrow="ALPHAG3N Intelligence" title="Turning perspectives into insight.">
        <Prose>
          <p>
            ALPHAG3N Intelligence is the planned research and insight-oriented branch of ALPHAG3N. Its purpose is to
            develop a more systematic understanding of how young people experience and use AI, how emerging
            technologies affect their lives, and how they believe those technologies should evolve.
          </p>
          <p>
            The intended approach is to gather perspectives through the ALPHAG3N Network, synthesise them into
            meaningful insights, and bring those insights to the people and institutions developing technologies,
            educational programmes, policies and other initiatives that affect the next generation. Over time, the
            ambition is a continuously growing knowledge base of youth perspectives on AI and its implications.
          </p>
          <p>
            This is not simply the collection of opinions. The goal is to identify recurring concerns, differences
            across communities, emerging needs, and questions that deserve further research or the attention of
            decision-makers.
          </p>
          <p>
            <strong>ALPHAG3N Intelligence is a developing initiative.</strong> No comprehensive database, formal
            research methodology or operational research pipeline yet exists. We will describe these here as they are
            established, not before.
          </p>
        </Prose>
      </Section>

      <Section number="04" eyebrow="The relationship" title="How ALPHAG3N relates to MOEBIUS.">
        <Prose>
          <p>
            MOEBIUS is the think tank focused on ASI and humanity. ALPHAG3N provides an existing youth community and
            informs MOEBIUS&apos;s approach to youth participation; ALPHAG3N Intelligence represents a planned way to
            translate that community&apos;s experiences into more systematic insight. The two are distinct
            organisations, with separate structures, and not all of MOEBIUS&apos;s work will necessarily run through
            ALPHAG3N.
          </p>
          <p>The conceptual model is straightforward:</p>
        </Prose>
        <div className="mt-10">
          <ApproachModel />
        </div>
        <Prose className="mt-10">
          <p>
            Through this model, MOEBIUS can connect the lived experience of young people with interdisciplinary research
            and with broader discussion about the future of intelligence. Many institutions study powerful AI systems.
            MOEBIUS aims to build a more direct relationship between the people affected by technological change and
            the people shaping its direction.
          </p>
        </Prose>
      </Section>

      <Section number="05" eyebrow="Next" title="Where this leads.">
        <Prose>
          <p>
            The approach described here is a design, grounded in an existing community, for work that is beginning. We
            welcome researchers, educators, technologists and institutions who want to help shape it, and young people
            who want to be heard through it.
          </p>
        </Prose>
        <Reveal className="mt-12 flex flex-wrap gap-4" delay={120}>
          <ButtonLink href="/contact" cursorLabel="Contact">
            Get in touch
          </ButtonLink>
          <ButtonLink href="/difference" variant="outline">
            Our principles
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
