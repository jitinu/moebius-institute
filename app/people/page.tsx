import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import ProfileCard from "@/components/ProfileCard";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { people, peopleGroups } from "@/data/people";

export const metadata: Metadata = {
  title: "People",
  description: "The people building MOEBIUS: Institute for Intelligence & Humanity.",
};

const seeking = [
  ["Young people", "Students and early-career contributors with firsthand experience of growing up alongside AI, who want to do serious work on these questions."],
  ["Researchers", "Across computer science, philosophy, education, economics, psychology, policy and related fields."],
  ["Practitioners", "Technologists, entrepreneurs and educators who build, deploy or teach with these systems."],
  ["Advisors", "Experienced figures from research, policy, education and industry willing to work alongside younger members as peers."],
];

export default function PeoplePage() {
  const hasPeople = people.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="People"
        title={hasPeople ? "The people building MOEBIUS." : "A founding group being assembled."}
        lede="MOEBIUS brings together young people, researchers, technologists, entrepreneurs, educators and policymakers. We introduce members here only once their participation has been confirmed."
      />

      {hasPeople ? (
        peopleGroups.map((group, gi) => {
          const members = people.filter((p) => p.group === group);
          if (members.length === 0) return null;
          return (
            <section key={group} className="rule-top">
              <div className="container-site grid gap-8 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
                <Reveal className="flex items-baseline gap-4 lg:col-span-3 lg:block">
                  <span className="font-serif text-sm text-ochre">{`0${gi + 1}`}</span>
                  <h2 className="eyebrow font-sans lg:mt-2">{group}</h2>
                </Reveal>
                <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
                  {members.map((person, i) => (
                    <ProfileCard key={person.id} person={person} index={i} />
                  ))}
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <Section number="01" eyebrow="Current status" title="The founding team is still being formed.">
          <Prose>
            <p>
              MOEBIUS is at the beginning of its institutional life. Its founders bring experience from ALPHAG3N, an
              international youth AI and technology community, and are now assembling a founding group that spans
              generations and disciplines.
            </p>
            <p>
              We do not list names, roles or affiliations until they are confirmed and approved by the people
              concerned. Profiles of the founding team, researchers, advisors and contributors will appear on this page
              as they join.
            </p>
          </Prose>
        </Section>
      )}

      <Section number={hasPeople ? undefined : "02"} eyebrow="Who we are looking for" title="Join the founding group.">
        <ul className="max-w-3xl divide-y divide-rule border-y border-rule">
          {seeking.map(([who, what], i) => (
            <Reveal as="li" key={who} className="grid gap-3 py-6 sm:grid-cols-[11rem_1fr]" delay={i * 60}>
              <p className="eyebrow pt-1">{who}</p>
              <p className="text-[1.125rem] leading-[1.7] text-ink-soft text-pretty">{what}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 flex flex-wrap gap-4" delay={120}>
          <ButtonLink href="/contact?type=youth" cursorLabel="Contact">
            Get in touch
          </ButtonLink>
          <ButtonLink href="/approach" variant="outline">
            Our approach
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
