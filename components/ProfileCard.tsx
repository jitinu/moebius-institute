import Image from "next/image";
import type { Person } from "@/data/people";
import { asset } from "@/lib/site";
import Reveal from "./Reveal";

type Props = { person: Person; index?: number; compact?: boolean };

/**
 * Renders one entry from data/people.ts. The same card is used on /people
 * and in the home-page preview (compact).
 */
export default function ProfileCard({ person, index = 0, compact = false }: Props) {
  return (
    <Reveal as="article" className="group flex flex-col" delay={Math.min(index, 5) * 70}>
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-deep">
        <Image
          src={asset(person.headshot ?? "/people/placeholder.svg")}
          alt={person.placeholder ? "" : `Portrait of ${person.name}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        {person.placeholder ? (
          <span className="absolute left-3 top-3 rounded-full border border-ink/30 bg-paper/90 px-2.5 py-1 font-sans text-[0.625rem] uppercase tracking-[0.14em] text-ink-soft">
            Placeholder
          </span>
        ) : null}
      </div>

      <div className="mt-5">
        <h3 className="font-serif text-xl leading-tight">{person.name}</h3>
        <p className="mt-1 font-sans text-sm text-muted">{person.role}</p>
      </div>

      {!compact ? (
        <>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft text-pretty">{person.bio}</p>
          {person.expertise.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5" aria-label="Areas of focus">
              {person.expertise.map((e) => (
                <li key={e} className="font-sans text-xs tracking-[0.02em] text-muted">
                  {e}
                </li>
              ))}
            </ul>
          ) : null}
          {person.links && person.links.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-4">
              {person.links.map((l) => (
                <li key={l.href + l.label}>
                  <a
                    href={l.href}
                    className="link-underline font-sans text-sm text-ink-soft hover:text-ink"
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </>
      ) : null}
    </Reveal>
  );
}
