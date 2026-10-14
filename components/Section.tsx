import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  number?: string;
  eyebrow: string;
  title?: ReactNode;
  children: ReactNode;
  id?: string;
  className?: string;
};

/** Editorial section: numbered eyebrow in the left column, content in the right. */
export default function Section({ number, eyebrow, title, children, id, className }: Props) {
  return (
    <section id={id} className={`rule-top ${className ?? ""}`}>
      <div className="container-site grid gap-8 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
        <Reveal className="flex items-baseline gap-4 lg:col-span-3 lg:block">
          {number ? <span className="font-serif text-sm text-ochre">{number}</span> : null}
          <p className="eyebrow lg:mt-2">{eyebrow}</p>
        </Reveal>
        <div className="lg:col-span-9">
          {title ? (
            <Reveal as="h2" className="text-h2 max-w-3xl" delay={60}>
              {title}
            </Reveal>
          ) : null}
          <div className={title ? "mt-8" : ""}>{children}</div>
        </div>
      </div>
    </section>
  );
}
