import type { CaseStudySectionContent } from "@/types/case-study";

import { Container } from "../ui/Container";

interface CaseStudySectionProps {
  content: CaseStudySectionContent;
  muted?: boolean;
}

/** Renderiza una sección narrativa con jerarquía editorial y listas verificables. */
export function CaseStudySection({
  content,
  muted = false,
}: CaseStudySectionProps) {
  return (
    <section
      id={content.id}
      className={`scroll-mt-8 border-t border-line py-14 sm:py-16 lg:py-20 ${
        muted ? "bg-background" : "bg-surface"
      }`}
    >
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <header className="lg:col-span-5">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent">
            {content.number} · {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl">
            {content.title}
          </h2>
          <span className="mt-8 block h-px w-20 bg-accent" aria-hidden="true" />
        </header>

        <div className="lg:col-span-7">
          <div className="grid gap-5 text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {content.bullets ? (
            <ol className="mt-9 border-t border-line">
              {content.bullets.map((bullet, index) => (
                <li
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-4 text-sm leading-6 text-foreground/70"
                  key={bullet}
                >
                  <span className="font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ol>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
