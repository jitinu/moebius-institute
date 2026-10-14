"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { DEFAULT_ROTATION, mobiusLines, type Rotation } from "@/lib/mobius";
import { useMotionAllowed } from "@/lib/useMotionAllowed";

const SIZE = 800;

/**
 * Hero Möbius line-art. Rotates gently toward the cursor (desktop, motion allowed)
 * and drifts very slowly otherwise. Falls back to the static pose on touch / reduced motion.
 */
export default function MobiusHero({ className }: { className?: string }) {
  const motion = useMotionAllowed();
  const [rotation, setRotation] = useState<Rotation>(DEFAULT_ROTATION);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef<number>();

  useEffect(() => {
    if (!motion) return;

    const onMove = (e: PointerEvent) => {
      target.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    const onLeave = () => {
      target.current = { x: 0, y: 0 };
    };

    let t = 0;
    const tick = () => {
      t += 0.0025;
      current.current.x += (target.current.x - current.current.x) * 0.045;
      current.current.y += (target.current.y - current.current.y) * 0.045;
      const drift = Math.sin(t) * 0.03;
      setRotation({
        x: DEFAULT_ROTATION.x + current.current.y * 0.22 + drift,
        y: DEFAULT_ROTATION.y + current.current.x * 0.28,
        z: DEFAULT_ROTATION.z + current.current.x * 0.06,
      });
      frame.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    frame.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [motion]);

  const lines = useMemo(
    () => mobiusLines({ size: SIZE, rotation, rulings: 48, edgeSegments: 320 }),
    [rotation],
  );

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {lines.map((l, i) => {
        if (l.kind === "edge")
          return <path key={i} d={l.d} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />;
        if (l.kind === "center")
          return (
            <path
              key={i}
              d={l.d}
              strokeWidth={0.7}
              className="text-ochre"
              opacity={0.75}
              vectorEffect="non-scaling-stroke"
            />
          );
        return (
          <path
            key={i}
            d={l.d}
            strokeWidth={0.6}
            opacity={0.18 + (l.depth + 1) * 0.3}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}
