import type { ApproachContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface ApproachSectionProps {
  content: ApproachContent;
}

/** Explica un proceso de trabajo concreto y los tipos de colaboración disponibles. */
export function ApproachSection({ content }: ApproachSectionProps) {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="mb-7 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent">
              {content.eyebrow}
            </p>
            <h2 className="max-w-xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              {content.title}
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="divide-y divide-line border-t border-line">
              {content.steps.map((step) => (
                <li className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr]" key={step.number}>
                  <span className="font-serif text-xl text-accent">{step.number}</span>
                  <div>
                    <h3 className="text-lg font-bold tracking-[-0.025em]">{step.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-portfolio bg-accent p-7 text-dark sm:p-9">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-dark/65">
                {content.servicesLabel}
              </p>
              <ul className="mt-6 divide-y divide-dark/20 border-y border-dark/20 font-serif text-2xl">
                {content.services.map((service) => (
                  <li className="py-4" key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
