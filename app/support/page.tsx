import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Partnerships & Funding",
  description:
    "Why supporting MOEBIUS matters, what the institute hopes to build, and how funders and partners can contribute.",
};

const uses = [
  ["Research agenda", "Developing an initial research agenda and the capabilities to pursue it."],
  ["Listening", "Gathering and analysing young people's perspectives in a systematic way."],
  ["Convening", "Bringing young people, researchers and decision-makers into structured discussion."],
  ["Publication", "Producing research publications, reports and other intellectual contributions."],
  ["Reach", "Expanding participation across countries, communities and educational systems."],
  ["Partnerships", "Developing relationships across research, education, technology and policy."],
];

const supporters = [
  "Individuals who care about how the next generation is represented in decisions about ASI",
  "Foundations working on technology, education, youth or the long-term future",
  "Companies developing or deploying advanced AI systems",
  "Research institutions and universities",
  "Organisations working on policy, governance or public understanding of AI",
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partnerships & Funding"
        title="Building the capacity to bring the next generation into decisions about intelligence."
        lede="MOEBIUS is an emerging institute. Its ambition — a rigorous, practical way of listening to young people and bringing what they say into discussions about artificial superintelligence (ASI) — requires infrastructure that does not yet exist. Partners and funders can help build it."
      />

      <Section number="01" eyebrow="Why it matters" title="A perspective at risk of being overlooked.">
        <Prose>
          <p>
            Substantial resources are devoted to advancing AI capabilities, studying technical risks and developing
            policy. Far less is devoted to understanding how the people who will live longest with these systems
            experience them, what they need, and what they believe should happen next. The result is a persistent gap
            between the conversations shaping the future of intelligence and the generation that will inherit it.
          </p>
          <p>
            Supporting MOEBIUS is a way of addressing that gap directly: not by speaking on behalf of young people,
            but by building the means to hear them and to connect what they say with the researchers, technologists
            and policymakers whose decisions matter.
          </p>
        </Prose>
      </Section>

      <Section number="02" eyebrow="What support enables" title="Potential uses of future support.">
        <Prose>
          <p>
            The following describe what we intend to build, not activities already underway. Each is a capacity
            MOEBIUS currently lacks and would develop with adequate support.
          </p>
        </Prose>
        <ul className="mt-10 max-w-3xl divide-y divide-rule border-y border-rule">
          {uses.map(([label, text], i) => (
            <Reveal as="li" key={label} className="grid gap-3 py-6 sm:grid-cols-[11rem_1fr]" delay={i * 60}>
              <p className="eyebrow pt-1">{label}</p>
              <p className="text-[1.125rem] leading-[1.7] text-ink-soft text-pretty">{text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section number="03" eyebrow="Who we hope to work with" title="Partners across sectors.">
        <div className="grid gap-10 lg:grid-cols-9">
          <Prose className="lg:col-span-6">
            <p>
              We are seeking partners and funders who share an interest in the relationship between ASI and humanity
              and who recognise the value of the next generation&apos;s perspective within it. Partnership can take
              many forms — funding, research collaboration, access to expertise, or help reaching young people in
              places we do not yet reach.
            </p>
            <p>
              MOEBIUS&apos;s organisational and funding status is distinct from ALPHAG3N&apos;s. Details of MOEBIUS&apos;s
              legal structure will be published here once established. We make no claims about tax treatment of
              contributions, and we do not publish funder relationships that have not been agreed.
            </p>
          </Prose>
          <Reveal className="lg:col-span-3" delay={120}>
            <p className="eyebrow">Potential supporters</p>
            <ul className="mt-4 space-y-3 border-l border-rule pl-5 text-sm leading-relaxed text-ink-soft">
              {supporters.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section number="04" eyebrow="Begin a conversation" title="Talk to us about partnership or funding.">
        <Prose>
          <p>
            At this stage, an exchange is more useful than a transaction. If you are considering supporting MOEBIUS or
            exploring a partnership, tell us about your interests and we will respond with specifics about our plans,
            timeline and needs.
          </p>
        </Prose>
        <Reveal className="mt-12 flex flex-wrap gap-4" delay={120}>
          <ButtonLink href="/contact?type=funding" cursorLabel="Contact">
            Contact us about funding
          </ButtonLink>
          <ButtonLink href="/contact?type=partnership" variant="outline" cursorLabel="Contact">
            Propose a partnership
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
