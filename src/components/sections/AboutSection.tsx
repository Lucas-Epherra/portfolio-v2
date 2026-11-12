import Image from "next/image";

import type { AboutContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface AboutSectionProps {
  content: AboutContent;
  portraitAlt: string;
}

/** Presenta retrato, síntesis profesional y datos de disponibilidad verificables. */
export function AboutSection({ content, portraitAlt }: AboutSectionProps) {
  return (
    <section aria-labelledby="about-title" className="scroll-mt-4" id="about">
      <Container className="pb-20 sm:pb-28">
        <div className="grid gap-3 rounded-[1.75rem] border border-line bg-panel p-3 shadow-panel md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.125rem] bg-chip md:aspect-auto md:min-h-[32rem]">
            <Image
              alt={portraitAlt}
              className="object-cover object-[50%_28%]"
              fill
              sizes="(max-width: 767px) calc(100vw - 3rem), 40vw"
              src="/images/lucas-epherra.webp"
            />
          </div>

          <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-12">
            <h2
              className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl"
              id="about-title"
            >
              {content.title}
            </h2>
            <div className="mt-6 grid max-w-[60ch] gap-4 text-lg leading-relaxed text-ink/80">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 border-t border-line">
              {content.facts.map((fact) => (
                <div
                  className="grid gap-1 border-b border-line py-3.5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-4"
                  key={fact.label}
                >
                  <dt className="text-muted">{fact.label}</dt>
                  <dd className="font-medium leading-snug">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
