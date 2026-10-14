import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MOEBIUS: Institute for Intelligence & Humanity.",
};

const audiences = [
  "Researchers and academics",
  "Technology companies and industry leaders",
  "Educators and institutions",
  "Potential advisors and collaborators",
  "Young people interested in contributing",
  "Potential funders and sponsors",
  "Media and other organisations",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Begin a conversation with MOEBIUS."
        lede="We welcome inquiries from anyone with an interest in the relationship between artificial superintelligence (ASI) and humanity, and in the role of the next generation in shaping it."
      />

      <section className="rule-top">
        <div className="container-site grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="eyebrow">We hear from</p>
              <ul className="mt-4 space-y-2.5 border-l border-rule pl-5 text-sm leading-relaxed text-ink-soft">
                {audiences.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="mt-12" delay={80}>
              <p className="eyebrow">Email</p>
              <a href={`mailto:${site.contact.email}`} className="link-underline mt-3 inline-block font-serif text-xl text-ink">
                {site.contact.email}
              </a>
              <p className="mt-2 text-xs text-muted">Placeholder address; to be replaced before launch.</p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-9" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
