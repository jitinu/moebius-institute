import Link from "next/link";
import ButtonLink from "./ButtonLink";
import MobiusMark from "./MobiusMark";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  /** What this section will eventually hold. Stated as intention, not as existing work. */
  expect?: string[];
  children?: React.ReactNode;
};

/** Shared "coming soon" state for sections that are not yet published. */
export default function EmptyState({ eyebrow, title, description, expect, children }: Props) {
  return (
    <>
      <section className="container-site pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal as="h1" className="text-h1 max-w-4xl" delay={60}>
              {title}
            </Reveal>
            <Reveal className="mt-8 flex items-center gap-3" delay={120}>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ochre" aria-hidden="true" />
              <p className="font-sans text-sm tracking-[0.02em] text-muted">In development</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="rule-top">
        <div className="container-site grid gap-12 py-16 sm:py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <MobiusMark size={72} className="text-ink/70" rulings={14} />
          </Reveal>
          <div className="lg:col-span-6">
            <Reveal as="p" className="text-lede text-ink-soft text-pretty" delay={60}>
              {description}
            </Reveal>
            {expect && expect.length > 0 ? (
              <Reveal className="mt-10" delay={140}>
                <p className="eyebrow">What we intend to publish here</p>
                <ul className="mt-4 divide-y divide-rule border-y border-rule">
                  {expect.map((item) => (
                    <li key={item} className="py-3.5 text-[1.0625rem] text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
            {children ? <Reveal className="mt-10" delay={200}>{children}</Reveal> : null}
            <Reveal className="mt-12 flex flex-wrap gap-4" delay={240}>
              <ButtonLink href="/mission" variant="outline">
                Read our mission
              </ButtonLink>
              <Link href="/" className="link-underline self-center text-sm text-ink-soft">
                Back to home
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
