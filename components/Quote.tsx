import Reveal from "./Reveal";

type Props = {
  text: string;
  attribution: string;
  source?: string;
  className?: string;
};

/** Attributed quotation. Only use for verified quotations with a documented source. */
export default function Quote({ text, attribution, source, className }: Props) {
  return (
    <Reveal as="figure" className={`max-w-3xl ${className ?? ""}`} delay={100}>
      <blockquote className="border-l border-ochre pl-6 sm:pl-8">
        <p className="font-serif text-h3 leading-snug text-ink">“{text}”</p>
      </blockquote>
      <figcaption className="mt-5 pl-6 font-sans text-sm text-muted sm:pl-8">
        <span className="text-ink-soft">{attribution}</span>
        {source ? <span>, {source}</span> : null}
      </figcaption>
    </Reveal>
  );
}
