"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export const inquiryTypes = [
  { value: "research", label: "Research or academic collaboration" },
  { value: "industry", label: "Technology company or industry" },
  { value: "education", label: "Educator or educational institution" },
  { value: "advisory", label: "Advising or collaborating" },
  { value: "youth", label: "Young person interested in contributing" },
  { value: "funding", label: "Funding or sponsorship" },
  { value: "partnership", label: "Partnership" },
  { value: "media", label: "Media" },
  { value: "other", label: "Other" },
] as const;

type InquiryType = (typeof inquiryTypes)[number]["value"];

type Fields = {
  name: string;
  email: string;
  organization: string;
  type: InquiryType | "";
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Submissions faster than this (ms after mount) are treated as automated and silently dropped. */
const MIN_FILL_TIME = 3000;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!f.type) e.type = "Please choose the nature of your inquiry.";
  if (f.message.trim().length < 20) e.message = "Please write at least a few sentences (20 characters minimum).";
  if (f.message.length > 5000) e.message = "Please keep your message under 5,000 characters.";
  return e;
}

/**
 * Contact form. Posts JSON to `site.formEndpoint` (NEXT_PUBLIC_FORM_ENDPOINT) — any
 * endpoint that accepts a JSON POST and returns 2xx, e.g. a Formspree form URL.
 * Spam protection: a hidden honeypot field (`_gotcha`) and a minimum fill time.
 */
export default function ContactForm() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", organization: "", type: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const mountedAt = useRef<number>(Date.now());
  const configured = Boolean(site.formEndpoint);

  useEffect(() => {
    mountedAt.current = Date.now();
    const preset = new URLSearchParams(window.location.search).get("type");
    if (preset && inquiryTypes.some((t) => t.value === preset)) {
      setFields((f) => ({ ...f, type: preset as InquiryType }));
    }
  }, []);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = form.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    const honeypot = (form.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value;
    if (honeypot || Date.now() - mountedAt.current < MIN_FILL_TIME) {
      setStatus("success");
      return;
    }

    if (!configured) {
      setStatus("error");
      setServerMessage("The contact form is not yet connected to a mail service.");
      return;
    }

    setStatus("submitting");
    setServerMessage(null);
    try {
      const typeLabel = inquiryTypes.find((t) => t.value === fields.type)?.label ?? fields.type;
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          organization: fields.organization.trim(),
          inquiry_type: typeLabel,
          message: fields.message.trim(),
          _subject: `MOEBIUS inquiry: ${typeLabel}`,
          _replyto: fields.email.trim(),
        }),
      });
      if (!res.ok) {
        let detail = "";
        try {
          const data = (await res.json()) as { error?: string; errors?: { message?: string }[] };
          detail = data.error ?? data.errors?.map((x) => x.message).filter(Boolean).join(" ") ?? "";
        } catch {
          /* non-JSON error body */
        }
        throw new Error(detail || `The form service responded with status ${res.status}.`);
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border-l border-ochre pl-6 sm:pl-8">
        <p className="font-serif text-h3 text-ink">Thank you. Your message has been received.</p>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
          We read every inquiry and will reply as soon as we are able. If your message is time-sensitive, please say so
          in a follow-up to {site.contact.email}.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full border-b bg-transparent py-3 font-sans text-base text-ink placeholder:text-muted/70 focus:outline-none focus:border-ink transition-colors";
  const border = (key: keyof Fields) => (errors[key] ? "border-[#9A4B3A]" : "border-ink/30");

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-2xl" aria-describedby={configured ? undefined : "form-notice"}>
      {!configured ? (
        <p id="form-notice" className="mb-10 border-l border-ochre pl-5 text-sm leading-relaxed text-ink-soft">
          The contact form is not yet connected to a mail service. Until it is, please write to{" "}
          <a href={`mailto:${site.contact.email}`} className="link-underline text-ink">
            {site.contact.email}
          </a>
          .
        </p>
      ) : null}

      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
        <Field label="Name" error={errors.name} htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={update("name")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${inputBase} ${border("name")}`}
          />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={update("email")}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${inputBase} ${border("email")}`}
          />
        </Field>
        <Field label="Organisation" hint="Optional" htmlFor="organization">
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            value={fields.organization}
            onChange={update("organization")}
            className={`${inputBase} ${border("organization")}`}
          />
        </Field>
        <Field label="Nature of inquiry" error={errors.type} htmlFor="type" required>
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={update("type")}
            aria-invalid={errors.type ? true : undefined}
            aria-describedby={errors.type ? "type-error" : undefined}
            className={`${inputBase} ${border("type")} appearance-none pr-6 ${fields.type ? "" : "text-muted/70"}`}
          >
            <option value="" disabled>
              Select one
            </option>
            {inquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message" error={errors.message} htmlFor="message" required>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={fields.message}
              onChange={update("message")}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${inputBase} ${border("message")} resize-y`}
            />
          </Field>
        </div>
      </div>

      {/* Honeypot: hidden from people, filled by naive bots. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-8 border-l border-[#9A4B3A] pl-5 text-sm leading-relaxed text-ink-soft">
          Your message could not be sent. {serverMessage} Please try again, or write directly to{" "}
          <a href={`mailto:${site.contact.email}`} className="link-underline text-ink">
            {site.contact.email}
          </a>
          .
        </p>
      ) : null}

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          data-cursor="Send"
          className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 font-sans text-sm text-paper transition-colors duration-300 hover:bg-ink-soft disabled:cursor-wait disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className="text-xs text-muted">We use your details only to reply to you.</p>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  error,
  htmlFor,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label htmlFor={htmlFor} className="eyebrow flex items-baseline justify-between">
        <span>
          {label}
          {required ? <span className="ml-1 text-ochre">*</span> : null}
        </span>
        {hint ? <span className="normal-case tracking-normal">{hint}</span> : null}
      </label>
      <div className="mt-1">{children}</div>
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-2 text-xs text-[#9A4B3A]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
