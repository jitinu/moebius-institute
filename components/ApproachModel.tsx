import Reveal from "./Reveal";

const steps = [
  { label: "ALPHAG3N Network", note: "An international student community" },
  { label: "Youth perspectives", note: "Experiences, concerns, needs, aspirations" },
  { label: "ALPHAG3N Intelligence", note: "Planned research and insight branch" },
  { label: "Insights and research", note: "Patterns, differences, open questions" },
  { label: "Dialogue with decision-makers", note: "Researchers, technologists, policymakers, educators" },
];

/** The conceptual model: how youth perspectives are intended to reach decision-makers. */
export default function ApproachModel({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`grid gap-px bg-rule ${compact ? "sm:grid-cols-5" : "md:grid-cols-5"}`} aria-label="Conceptual model">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.label} className="relative flex flex-col bg-paper p-5" delay={i * 70}>
          <span className="font-serif text-sm text-ochre">{String(i + 1).padStart(2, "0")}</span>
          <span className="mt-4 font-serif text-lg leading-tight text-ink">{s.label}</span>
          {!compact ? <span className="mt-2 text-sm leading-relaxed text-muted">{s.note}</span> : null}
          {i < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className={`absolute right-3 top-5 hidden font-sans text-muted ${compact ? "sm:block" : "md:block"}`}
            >
              →
            </span>
          ) : null}
        </Reveal>
      ))}
    </ol>
  );
}
