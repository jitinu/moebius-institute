import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <EmptyState
      eyebrow="Contact"
      title="We would like to hear from you."
      description="A contact form and institutional addresses are coming. In the meantime, the address below is a placeholder and will be replaced before launch."
    >
      <p className="eyebrow">Email (placeholder)</p>
      <a href={`mailto:${site.contact.email}`} className="link-underline mt-3 inline-block font-serif text-2xl text-ink">
        {site.contact.email}
      </a>
      <p className="mt-6 max-w-prose text-sm leading-relaxed text-muted">
        If you are a young person, educator, researcher or practitioner who wants to shape this work, say so. We are
        especially interested in people who do not usually get asked.
      </p>
    </EmptyState>
  );
}
