"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import { useMotionAllowed } from "@/lib/useMotionAllowed";

type Props = {
  children: ReactNode;
  /** Max displacement in px. */
  strength?: number;
  className?: string;
};

/**
 * Wraps a single interactive element and nudges it a few pixels toward the pointer.
 * Inert on touch devices and under prefers-reduced-motion.
 */
export default function Magnetic({ children, strength = 6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const enabled = useMotionAllowed();

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    ref.current.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
