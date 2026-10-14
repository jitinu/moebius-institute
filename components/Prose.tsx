import type { ReactNode } from "react";

/** Body copy column with consistent measure and spacing. */
export default function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-prose space-y-5 text-[1.125rem] leading-[1.7] text-ink-soft text-pretty [&_strong]:font-medium [&_strong]:text-ink ${className ?? ""}`}>
      {children}
    </div>
  );
}
