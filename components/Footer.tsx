import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { site } from "@/lib/site";
import MobiusMark from "./MobiusMark";

export default function Footer() {
  return (
    <footer className="rule-top mt-24 sm:mt-32">
      <div className="container-site grid gap-12 py-14 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="MOEBIUS home">
            <MobiusMark size={30} className="text-ink" />
            <span className="font-serif text-lg tracking-[0.08em]">MOEBIUS</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
            Institute for Intelligence &amp; Humanity. A youth-focused think tank working so that the future of AI is
            shaped not only for the next generation, but with them.
          </p>
          <p className="mt-6 font-serif text-base italic text-ink-soft">
            One continuous surface. Intelligence and humanity, inseparable.
          </p>
        </div>

        {footerNav.map((col) => (
          <div key={col.heading} className="lg:col-span-2">
            <h2 className="eyebrow font-sans">{col.heading}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-3">
          <h2 className="eyebrow font-sans">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>
              <a href={`mailto:${site.contact.email}`} className="link-underline">
                {site.contact.emailLabel}
              </a>
            </li>
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="transition-colors hover:text-ink">
                  {s.label}
                  {s.placeholder ? <span className="ml-1.5 text-xs text-muted">(placeholder)</span> : null}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rule-top">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MOEBIUS: Institute for Intelligence &amp; Humanity</p>
          <p>An emerging institution. Contact and social links are placeholders.</p>
        </div>
      </div>
    </footer>
  );
}
