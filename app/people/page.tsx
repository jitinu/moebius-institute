import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import ProfileCard from "@/components/ProfileCard";
import Reveal from "@/components/Reveal";
import { people, peopleGroups } from "@/data/people";

export const metadata: Metadata = {
  title: "People",
  description: "The people building MOEBIUS: Institute for Intelligence & Humanity.",
};

export default function PeoplePage() {
  const hasPlaceholders = people.some((p) => p.placeholder);

  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Built by the people it is for."
        lede="MOEBIUS brings together young researchers, builders and organisers with advisors from research, policy, education and practice — working as peers."
      />

      {hasPlaceholders ? (
        <div className="container-site -mt-8 mb-4 sm:-mt-14">
          <Reveal className="max-w-prose border-l border-ochre pl-5 text-sm leading-relaxed text-muted">
            The profiles on this page are labelled placeholders. They show how the directory will look; they do not
            describe real people. Our founding group will be introduced here.
          </Reveal>
        </div>
      ) : null}

      {peopleGroups.map((group, gi) => {
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
      })}

      <section className="rule-top">
        <div className="container-site grid gap-8 py-16 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-3" />
          <Reveal className="lg:col-span-6">
            <h2 className="text-h2">Join us in shaping this.</h2>
            <p className="mt-6 max-w-prose text-lede text-ink-soft text-pretty">
              We are especially interested in young people who want to do serious work on these questions, and in
              experienced practitioners who want to do that work alongside them.
            </p>
            <div className="mt-10">
              <ButtonLink href="/contact" cursorLabel="Contact">
                Get in touch
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
