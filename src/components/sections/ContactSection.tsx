import { CONTACT_EMAIL } from "@/content/site";
import type { ContactContent } from "@/types/site-content";

import { ArrowIcon } from "../ui/ArrowIcon";
import { Container } from "../ui/Container";

interface ContactSectionProps {
  content: ContactContent;
}

/** Ofrece un cierre directo para conversaciones laborales o de producto. */
export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-8 bg-dark py-24 text-surface sm:py-32">
      <Container>
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent">
          {content.eyebrow}
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-5xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:col-span-8 lg:text-7xl">
            {content.title}
          </h2>
          <p className="max-w-lg text-base leading-7 text-surface/65 lg:col-span-4">
            {content.text}
          </p>
        </div>
        <a
          className="group mt-16 flex items-center justify-between gap-6 border-y border-surface/20 py-7 font-serif text-2xl transition-colors hover:text-accent sm:text-4xl"
          href={`mailto:${CONTACT_EMAIL}`}
        >
          <span>{content.emailLabel}</span>
          <ArrowIcon className="size-8 shrink-0 transition-transform duration-300 group-hover:translate-x-2 sm:size-10" />
        </a>
      </Container>
    </section>
  );
}
