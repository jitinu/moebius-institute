"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactNav, primaryNav } from "@/data/navigation";
import Magnetic from "./Magnetic";
import MobiusMark from "./MobiusMark";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-50">
      <div className="container-site flex items-center justify-between py-6 sm:py-8">
        <Link href="/" className="group flex items-center gap-3" data-cursor="Home" aria-label="MOEBIUS home">
          <MobiusMark size={34} className="text-ink transition-transform duration-700 ease-out group-hover:rotate-180" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.35rem] tracking-[0.08em]">MOEBIUS</span>
            <span className="mt-1 hidden font-sans text-[0.6rem] uppercase tracking-[0.16em] text-muted sm:block">
              Institute for Intelligence &amp; Humanity
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <Magnetic key={item.href} strength={4}>
              <Link
                href={item.href}
                data-cursor="View"
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative py-1 font-sans text-[0.8125rem] tracking-[0.02em] transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-ochre after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 ${
                  isActive(item.href) ? "text-ink after:scale-x-100 after:bg-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            </Magnetic>
          ))}
          <Magnetic strength={5}>
            <Link
              href={contactNav.href}
              data-cursor="Contact"
              className="rounded-full border border-ink/60 px-4 py-1.5 font-sans text-[0.8125rem] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              {contactNav.label}
            </Link>
          </Magnetic>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          data-cursor="Menu"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-ink transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-[4.75rem] z-40 bg-paper transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="container-site flex flex-col pt-6">
          {[...primaryNav, contactNav].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              className="flex items-baseline justify-between border-b border-rule py-5 font-serif text-2xl"
            >
              <span>{item.label}</span>
              <span className="font-sans text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
