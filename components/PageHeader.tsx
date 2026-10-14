import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
};

export default function PageHeader({ eyebrow, title, lede }: Props) {
  return (
    <section className="container-site pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <div className="lg:col-span-9">
          <Reveal as="h1" className="text-h1 max-w-4xl" delay={60}>
            {title}
          </Reveal>
          {lede ? (
            <Reveal as="p" className="mt-8 max-w-prose text-lede text-ink-soft text-pretty" delay={140}>
              {lede}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
