import type { AboutContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface AboutSectionProps {
  content: AboutContent;
}

/** Presenta una síntesis profesional y datos de disponibilidad verificables. */
export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-8 border-b border-line bg-surface py-10 sm:py-12">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-2">
          <h2 className="font-serif text-3xl tracking-[-0.025em]">{content.title}</h2>
        </div>

        <div className="grid gap-4 border-line text-sm leading-6 text-muted lg:col-span-5 lg:border-l lg:px-10">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="border-t border-line lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10">
          {content.facts.map((fact) => (
            <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3 last:border-b-0" key={fact.label}>
              <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted">
                {fact.label}
              </dt>
              <dd className="text-sm text-muted">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
