import { MARK_ROTATION, mobiusLines, type Rotation } from "@/lib/mobius";

type Props = {
  size?: number;
  className?: string;
  rotation?: Rotation;
  rulings?: number;
  strokeWidth?: number;
  title?: string;
};

/** Static Möbius line-art, rendered server-side. Used for the wordmark and small accents. */
export default function MobiusMark({
  size = 40,
  className,
  rotation = MARK_ROTATION,
  rulings,
  strokeWidth = 1,
  title,
}: Props) {
  const view = 100;
  const ruleCount = rulings ?? (size < 64 ? 0 : 18);
  const lines = mobiusLines({
    size: view,
    rotation,
    rulings: ruleCount,
    edgeSegments: 160,
    includeCenter: ruleCount === 0,
  });
  return (
    <svg
      viewBox={`0 0 ${view} ${view}`}
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {lines.map((l, i) => (
        <path
          key={i}
          d={l.d}
          strokeWidth={l.kind === "edge" ? strokeWidth * 1.4 : strokeWidth * 0.8}
          opacity={l.kind === "edge" ? 1 : l.kind === "center" ? 0.9 : 0.35 + (l.depth + 1) * 0.25}
          className={l.kind === "center" ? "text-ochre" : undefined}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
