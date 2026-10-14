"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionAllowed } from "@/lib/useMotionAllowed";

/**
 * Custom cursor: a small dot that tracks the pointer and a ring that lags behind.
 * Over interactive elements the ring expands into a label. The label comes from
 * `data-cursor="View"` on the element (or an ancestor); plain links/buttons use "View".
 * Desktop only — disabled on touch devices and under prefers-reduced-motion.
 */
export default function Cursor() {
  const enabled = useMotionAllowed();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("cursor-active");
      return;
    }
    document.documentElement.classList.add("cursor-active");

    const pos = { x: -100, y: -100 };
    const lag = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible) setVisible(true);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor], a, button, [role='button']",
      );
      if (!target || target.closest("[data-cursor='none']")) {
        setLabel(null);
      } else {
        setLabel(target.dataset.cursor || target.closest<HTMLElement>("[data-cursor]")?.dataset.cursor || "View");
      }
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const tick = () => {
      lag.x += (pos.x - lag.x) * 0.16;
      lag.y += (pos.y - lag.y) * 0.16;
      if (dot.current) dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      if (ring.current) ring.current.style.transform = `translate3d(${lag.x}px, ${lag.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-active");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  if (!enabled) return null;

  const active = label !== null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        ref={ring}
        className={`absolute left-0 top-0 flex items-center justify-center rounded-full border border-ink/80 transition-[width,height,background-color,border-color] duration-300 ease-out ${
          active ? "h-16 w-16 border-ink bg-paper/90" : "h-8 w-8 bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      >
        <span
          className={`font-sans text-[0.625rem] uppercase tracking-[0.16em] text-ink transition-opacity duration-200 ${
            active ? "opacity-100 delay-100" : "opacity-0"
          }`}
        >
          {label}
        </span>
      </div>
      <div
        ref={dot}
        className={`absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-ink transition-opacity duration-200 ${active ? "opacity-0" : "opacity-100"}`}
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
