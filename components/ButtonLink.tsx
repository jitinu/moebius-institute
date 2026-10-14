import Link from "next/link";
import type { ReactNode } from "react";
import Magnetic from "./Magnetic";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "text";
  cursorLabel?: string;
  className?: string;
};

export default function ButtonLink({ href, children, variant = "solid", cursorLabel = "Read", className }: Props) {
  const base =
    "group inline-flex items-center gap-3 rounded-full font-sans text-sm tracking-[0.01em] transition-colors duration-300";
  const styles = {
    solid: "bg-ink px-6 py-3 text-paper hover:bg-ink-soft",
    outline: "border border-ink/70 px-6 py-3 text-ink hover:border-ink hover:bg-ink hover:text-paper",
    text: "py-1 text-ink link-underline",
  }[variant];

  const content = (
    <Link href={href} data-cursor={cursorLabel} className={`${base} ${styles} ${className ?? ""}`}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );

  return variant === "text" ? content : <Magnetic>{content}</Magnetic>;
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M1 7h12M8 2l5 5-5 5" />
    </svg>
  );
}
