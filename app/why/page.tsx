import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Why MOEBIUS",
  description:
    "The gap MOEBIUS addresses: young people treated as passive recipients of AI rather than active participants in shaping it.",
};

export default function WhyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why MOEBIUS"
        title="The people most affected by AI have the least say in it."
        lede="Young people will live longest with the intelligent systems being built today. They encounter those systems earliest and most intensively. And they are, almost everywhere, absent from the places where decisions about them are made."
      />

      <Section number="01" eyebrow="The gap" title="Recipients, not participants.">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-9">
          <Prose className="lg:col-span-6">
            <p>
              Look at where AI is discussed seriously — research labs, policy forums, boardrooms, editorial pages — and
              a pattern appears. Young people are everywhere as a topic and almost nowhere as a voice. They are
              described as users to be protected, learners to be prepared, a workforce to be retrained, a generation to
              be worried about.
            </p>
            <p>
              Each of these framings casts young people as <strong>recipients</strong>: people to whom AI happens, and
              to whom its consequences are later explained. What is missing is the other role — young people as{" "}
              <strong>participants</strong> who study the technology, question it, shape how it is used and argue in
              public about what it should be for.
            </p>
            <p>
              This is not a small omission. It leaves the people with the longest stake in the outcome outside the
              conversation, and it deprives the conversation of a perspective no one else can supply.
            </p>
          </Prose>
          <Reveal className="lg:col-span-3" delay={120}>
            <dl className="space-y-6 border-l border-rule pl-6">
              <div>
                <dt className="eyebrow">Recipient</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Receives AI as a finished fact. Is taught about it, protected from it, prepared for it.
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-ochre">Participant</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Studies it, questions it, helps decide how it is used. Speaks in their own voice, in the rooms where
                  it matters.
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section number="02" eyebrow="Across generations" title="Not for the next generation. With them.">
        <Prose>
          <p>
            The answer to young people&apos;s absence is not a separate youth conversation running in parallel to the
            real one. It is a shared conversation in which generations work as peers.
          </p>
          <p>
            Older generations hold things that cannot be shortcut: deep technical knowledge, institutional memory, the
            experience of previous technological shifts and of how decisions actually get made. Younger generations hold
            things that cannot be taught: a native understanding of how these systems feel from the inside, what they
            change about learning, friendship and ambition, and what is at stake for a life that will mostly be lived
            after the current debates are over.
          </p>
          <p>
            MOEBIUS is built on the conviction that these are complementary, and that the most useful thinking about AI
            will come from putting them together.
          </p>
        </Prose>
        <Reveal className="mt-14 max-w-3xl" delay={100}>
          <blockquote className="border-l border-ochre pl-6 sm:pl-8">
            <p className="font-serif text-h2 leading-tight text-ink">
              The future of AI should not be shaped only <em>for</em> the next generation. It should be shaped{" "}
              <em>with</em> them.
            </p>
          </blockquote>
        </Reveal>
      </Section>

      <Section number="03" eyebrow="What follows" title="A place built to practise this.">
        <Prose>
          <p>
            Closing the gap requires more than good intentions; it requires an institution designed around it. MOEBIUS
            is that institution: a think tank in which young people lead the work, disciplines meet rather than compete,
            and generations collaborate as equals.
          </p>
        </Prose>
        <Reveal className="mt-12 flex flex-wrap gap-4" delay={120}>
          <ButtonLink href="/difference">What makes MOEBIUS different</ButtonLink>
          <ButtonLink href="/mission" variant="outline">
            Our mission
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
