import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import MobiusHero from "@/components/MobiusHero";
import MobiusMark from "@/components/MobiusMark";
import ProfileCard from "@/components/ProfileCard";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { featuredPeople } from "@/data/people";
import { principles } from "@/data/principles";
import { DEFAULT_ROTATION } from "@/lib/mobius";

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
              MOEBIUS is a youth-focused think tank on artificial intelligence and humanity. We bring young people into
              the rooms where the future of AI is being decided — as participants, not an audience — and work alongside
              the generations who are already there.
            </Reveal>
            <Reveal className="mt-12 flex flex-wrap items-center gap-4" delay={240}>
              <ButtonLink href="/mission">Our mission</ButtonLink>
              <ButtonLink href="/why" variant="outline">
                Why we exist
              </ButtonLink>
            </Reveal>
          </div>
          <div className="relative lg:col-span-5">
            <MobiusHero className="mx-auto w-full max-w-[26rem] text-ink lg:absolute lg:-right-16 lg:top-1/2 lg:w-[42rem] lg:max-w-none lg:-translate-y-1/2" />
            <div className="hidden lg:block lg:h-[32rem]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* 01 Mission */}
      <Section
        number="01"
        eyebrow="Mission"
        title="A think tank where young people help decide what intelligence should be for."
      >
        <div className="grid gap-10 lg:grid-cols-9">
          <Prose className="lg:col-span-6">
            <p>
              Artificial intelligence is reshaping how people learn, work, create and relate to one another. The
              generation that will live longest with these systems currently has the least say in how they are built,
              deployed and governed.
            </p>
            <p>
              MOEBIUS exists to change that. We produce serious, accessible thinking about AI and humanity with young
              people at its centre — and in sustained collaboration with the researchers, educators, practitioners and
              policymakers of the generations before them.
            </p>
          </Prose>
          <Reveal className="lg:col-span-3" delay={120}>
            <ButtonLink href="/mission" variant="text" cursorLabel="Read">
              Read the full mission
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      {/* 02 Why we exist */}
      <Section number="02" eyebrow="Why we exist" title="Young people are treated as recipients of AI. They should be participants.">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          <Reveal className="rule-top pt-6" delay={60}>
            <p className="eyebrow text-muted">Today</p>
            <h3 className="mt-3 font-serif text-h3">Passive recipients</h3>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-ink-soft text-pretty">
              Young people are the most exposed to AI — in classrooms, in the tools they use daily, in the jobs they are
              preparing for — yet decisions about it are made for them, and explained to them afterwards, if at all.
            </p>
          </Reveal>
          <Reveal className="rule-top pt-6" delay={140}>
            <p className="eyebrow text-ochre">What we work toward</p>
            <h3 className="mt-3 font-serif text-h3">Active participants</h3>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-ink-soft text-pretty">
              Young people doing the research, asking the questions, and sitting at the same table as those who have
              spent careers on these problems — with each generation bringing what the other lacks.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-16 max-w-3xl" delay={100}>
          <blockquote className="border-l border-ochre pl-6 sm:pl-8">
            <p className="font-serif text-h3 leading-snug text-ink">
              “The future of AI should not be shaped only <em>for</em> the next generation. It should be shaped{" "}
              <em>with</em> them.”
            </p>
          </blockquote>
          <div className="mt-8">
            <ButtonLink href="/why" variant="text" cursorLabel="Read">
              More on the gap we address
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* 03 Distinctive focus */}
      <Section number="03" eyebrow="What makes MOEBIUS different" title="Three commitments run through everything we do.">
        <ol className="grid gap-px bg-rule md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} className="flex flex-col bg-paper p-6 sm:p-8" delay={i * 90}>
              <span className="font-serif text-sm text-ochre">{p.numeral}</span>
              <h3 className="mt-6 font-serif text-h3">{p.title}</h3>
              <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft text-pretty">{p.summary}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10" delay={100}>
          <ButtonLink href="/difference" variant="text" cursorLabel="Read">
            The three principles, and where they come from
          </ButtonLink>
        </Reveal>
      </Section>

      {/* 04 Our name */}
      <Section number="04" eyebrow="Our name" title="One continuous surface.">
        <div className="grid items-start gap-10 lg:grid-cols-9">
          <Prose className="lg:col-span-6">
            <p>
              A Möbius strip looks as though it has two sides. Trace it with a finger and you find only one: a single
              continuous surface, with no inside or outside, no beginning or end.
            </p>
            <p>
              That is how we understand intelligence and humanity. They are not two sides to be balanced, or two
              fields to be bridged. They are one surface. Every question about what intelligent systems can do is also a
              question about what it means to be human, and every answer about who we are shapes what we choose to build.
            </p>
            <p>
              The loop also describes how we work: young people and older generations are not opposite sides of a
              divide but points on the same path, each leading back to the other.
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
      </Section>

      {/* 05 People */}
      <Section number="05" eyebrow="People" title="An institute being built by the people it is for.">
        <Prose>
          <p>
            MOEBIUS brings together young researchers, builders and organisers with advisors from research, policy,
            education and practice. The profiles below are placeholders; our founding group will be introduced here.
          </p>
        </Prose>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {featuredPeople.map((person, i) => (
            <ProfileCard key={person.id} person={person} index={i} compact />
          ))}
        </div>
        <Reveal className="mt-10" delay={100}>
          <ButtonLink href="/people" variant="text" cursorLabel="View">
            All people
          </ButtonLink>
        </Reveal>
      </Section>

      {/* 06 Where we are */}
      <Section number="06" eyebrow="Where we are" title="An emerging institution, described honestly.">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          <Reveal className="rule-top pt-6" delay={60}>
            <p className="eyebrow">Now</p>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-ink-soft text-pretty">
              MOEBIUS is newly formed. Our current work is foundational: articulating the questions we will pursue,
              bringing together a founding group, and designing our first programs.
            </p>
          </Reveal>
          <Reveal className="rule-top pt-6" delay={140}>
            <p className="eyebrow">Next</p>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-ink-soft text-pretty">
              Over time we intend to publish research, run fellowships and convene conversations across generations. We
              will describe each of these on this site only once it exists.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-12 flex flex-wrap items-center gap-6" delay={160}>
          <ButtonLink href="/contact" cursorLabel="Contact">
            Get in touch
          </ButtonLink>
          <Link href="/research" className="link-underline text-sm text-ink-soft">
            See what is coming
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
