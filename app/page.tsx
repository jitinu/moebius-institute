import Link from "next/link";
import ApproachModel from "@/components/ApproachModel";
import ButtonLink from "@/components/ButtonLink";
import MobiusHero from "@/components/MobiusHero";
import ProfileCard from "@/components/ProfileCard";
import Prose from "@/components/Prose";
import Quote from "@/components/Quote";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { featuredPeople } from "@/data/people";
import { principles } from "@/data/principles";

const pathways = [
  {
    title: "Collaborate",
    audience: "Researchers, educators, technologists and institutions",
    text: "Work with us on questions at the intersection of intelligence and humanity, or help shape how young people's perspectives enter your field.",
    href: "/contact?type=collaboration",
    label: "Start a conversation",
  },
  {
    title: "Support",
    audience: "Funders, foundations and partners",
    text: "Help build the research capacity and convening infrastructure MOEBIUS needs to bring youth perspectives into consequential discussions.",
    href: "/support",
    label: "Partnerships & Funding",
  },
  {
    title: "Contribute",
    audience: "Young people",
    text: "Bring your experience of growing up alongside these technologies into a setting where it is treated as evidence, not anecdote.",
    href: "/contact?type=youth",
    label: "Get in touch",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="container-site relative overflow-hidden pb-20 pt-6 sm:pb-28 sm:pt-12 lg:pb-36">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-7">
            <Reveal>
              <p className="eyebrow">MOEBIUS — Institute for Intelligence &amp; Humanity</p>
            </Reveal>
            <Reveal as="h1" className="text-display mt-8" delay={80}>
              Intelligence is changing. <span className="text-ink-soft">Who shapes what comes next?</span>
            </Reveal>
            <Reveal as="p" className="mt-10 max-w-prose text-lede text-ink-soft text-pretty" delay={160}>
              MOEBIUS is an emerging institute examining the relationship between artificial superintelligence (ASI)
              and humanity. We bring the next generation into the conversations shaping the future of intelligence,
              connecting young people&apos;s perspectives with the researchers, technologists and policymakers working
              at its frontier.
            </Reveal>
            <Reveal className="mt-12 flex flex-wrap items-center gap-4" delay={240}>
              <ButtonLink href="/approach">Our approach</ButtonLink>
              <ButtonLink href="/mission" variant="outline">
                Read the mission
              </ButtonLink>
            </Reveal>
          </div>
          <div className="relative lg:col-span-5">
            <MobiusHero className="mx-auto w-full max-w-[26rem] text-ink lg:absolute lg:-right-16 lg:top-1/2 lg:w-[42rem] lg:max-w-none lg:-translate-y-1/2" />
            <div className="hidden lg:block lg:h-[32rem]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* 01 The gap */}
      <Section number="01" eyebrow="The gap" title="Questions about intelligence are also questions about people.">
        <div className="grid gap-10 lg:grid-cols-9">
          <Prose className="lg:col-span-6">
            <p>
              The development of increasingly powerful intelligence raises questions that extend well beyond technical
              capability: how such systems might transform education, creativity, work, opportunity and human agency;
              what different communities will need; and how these systems should account for the people who will live
              alongside them.
            </p>
            <p>
              Young people are already encountering the effects of AI in their education, their creative work and their
              daily lives, and they will live with the consequences of decisions about ASI for decades. Yet their
              perspectives are not consistently part of the research, policy and product decisions shaping that future.
              MOEBIUS exists to help close this gap.
            </p>
          </Prose>
          <Reveal className="lg:col-span-3" delay={120}>
            <ButtonLink href="/why" variant="text" cursorLabel="Read">
              Why MOEBIUS
            </ButtonLink>
          </Reveal>
        </div>
        <Quote
          className="mt-16"
          text="Children are the world's most valuable resource and its best hope for the future."
          attribution="John F. Kennedy"
          source="message to the United States Committee for UNICEF, 25 July 1963"
        />
      </Section>

      {/* 02 Our approach */}
      <Section number="02" eyebrow="Our approach" title="A practical way to listen to young people, and a path from listening to dialogue.">
        <Prose>
          <p>
            MOEBIUS&apos;s distinctive resource is its connection to ALPHAG3N, a youth-led AI and technology community
            whose members and activities span the United States, South Korea, Japan and Taiwan. Through this
            relationship, MOEBIUS aims to hear directly from young people, work toward a more systematic understanding of
            their experiences and concerns, and bring those insights into conversation with the people shaping the
            future of intelligence.
          </p>
        </Prose>
        <div className="mt-12">
          <ApproachModel compact />
        </div>
        <Reveal className="mt-10" delay={100}>
          <ButtonLink href="/approach" variant="text" cursorLabel="Read">
            How the approach works
          </ButtonLink>
        </Reveal>
      </Section>

      {/* 03 Principles */}
      <Section number="03" eyebrow="Principles" title="Three commitments.">
        <ol className="grid gap-px bg-rule md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} className="flex flex-col bg-paper p-6 sm:p-8" delay={i * 90}>
              <span className="font-serif text-sm text-ochre">{p.numeral}</span>
              <h3 className="mt-6 font-serif text-h3">{p.title}</h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink-soft text-pretty">{p.summary}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10" delay={100}>
          <ButtonLink href="/difference" variant="text" cursorLabel="Read">
            The principles in full
          </ButtonLink>
        </Reveal>
      </Section>

      {/* 04 People */}
      <Section number="04" eyebrow="People" title="A founding group being assembled.">
        <Prose>
          <p>
            MOEBIUS is at the beginning of its institutional life. Its founding group is being assembled from young
            people, researchers, technologists, educators and policymakers. Members are introduced here only once
            their participation is confirmed.
          </p>
        </Prose>
        {featuredPeople.length > 0 ? (
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {featuredPeople.map((person, i) => (
              <ProfileCard key={person.id} person={person} index={i} compact />
            ))}
          </div>
        ) : null}
        <Reveal className="mt-10" delay={100}>
          <ButtonLink href="/people" variant="text" cursorLabel="View">
            About the people behind MOEBIUS
          </ButtonLink>
        </Reveal>
      </Section>

      {/* 05 Get involved */}
      <Section number="05" eyebrow="Get involved" title="Three ways to take part.">
        <ul className="grid gap-px bg-rule md:grid-cols-3">
          {pathways.map((p, i) => (
            <Reveal as="li" key={p.title} className="flex flex-col bg-paper p-6 sm:p-8" delay={i * 90}>
              <p className="eyebrow">{p.audience}</p>
              <h3 className="mt-4 font-serif text-h3">{p.title}</h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink-soft text-pretty">{p.text}</p>
              <Link href={p.href} className="link-underline mt-6 inline-block text-sm text-ink" data-cursor="Open">
                {p.label}
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
