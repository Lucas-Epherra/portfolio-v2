import type { ApproachContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface ApproachSectionProps {
  content: ApproachContent;
}

/** Resume las áreas de construcción de producto mediante capacidades concretas. */
export function ApproachSection({ content }: ApproachSectionProps) {
  return (
    <section id="capabilities" className="scroll-mt-8 bg-dark py-14 text-surface sm:py-16">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h2 className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 max-w-xs text-lg leading-7 text-surface/55">
            {content.introduction}
          </p>
          <span className="mt-8 block h-px w-28 bg-accent" aria-hidden="true" />
        </div>

        <ol className="border-t border-surface/15 lg:col-span-8">
          {content.steps.map((step) => (
            <li
              className="grid gap-3 border-b border-surface/15 py-4 sm:grid-cols-[3rem_0.8fr_1.4fr] sm:items-start"
              key={step.number}
            >
              <span className="text-xs font-bold text-accent">{step.number}</span>
              <h3 className="text-sm font-semibold text-surface/80">{step.title}</h3>
              <p className="text-xs leading-5 text-surface/50">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
