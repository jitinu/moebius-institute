"use client";

import { useEffect, useState } from "react";

/**
 * True when it is appropriate to run pointer-driven motion:
 * a fine pointer that can hover, and no prefers-reduced-motion.
 * Defaults to false so SSR output and touch devices get the static experience.
 */
export function useMotionAllowed(): boolean {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowed(pointer.matches && !reduced.matches);
    update();
    pointer.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      pointer.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return allowed;
}
