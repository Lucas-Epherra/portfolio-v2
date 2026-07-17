import type { FeaturedProjectContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface FeaturedProjectSectionProps {
  content: FeaturedProjectContent;
}

/** Expone alcance, responsabilidades y arquitectura del proyecto insignia. */
export function FeaturedProjectSection({
  content,
}: FeaturedProjectSectionProps) {
  return (
    <section id="work" className="scroll-mt-8 bg-dark py-24 text-surface sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="mb-8 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent">
              {content.eyebrow}
            </p>
            <h2 className="font-serif text-6xl leading-none tracking-[-0.045em] sm:text-7xl">
              {content.title}
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-surface/70 sm:text-lg sm:leading-8">
              {content.summary}
            </p>

            <dl className="mt-12 divide-y divide-surface/15 border-y border-surface/15">
              {content.facts.map((fact) => (
                <div className="grid gap-2 py-5 sm:grid-cols-[7rem_1fr]" key={fact.label}>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-surface/45">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-semibold text-surface/90">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7 lg:pt-10">
            <div className="overflow-hidden rounded-portfolio border border-surface/15 bg-[#292e2b] shadow-[0_2rem_5rem_rgb(0_0_0/0.18)]">
              <div className="flex items-center justify-between gap-5 border-b border-surface/15 px-5 py-4 sm:px-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-surface/50">
                  {content.panelLabel}
                </p>
                <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              </div>

              <div className="p-5 sm:p-8 lg:p-10">
                <h3 className="max-w-lg font-serif text-3xl leading-tight sm:text-4xl">
                  {content.panelTitle}
                </h3>

                <ol className="mt-10 grid gap-3 sm:grid-cols-3">
                  {content.workFlow.map((step, index) => (
                    <li
                      className="relative border-t border-surface/25 pt-5 sm:min-h-32"
                      key={step}
                    >
                      <span className="block font-serif text-2xl text-accent">
                        0{index + 1}
                      </span>
                      <span className="mt-5 block text-sm font-semibold">{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-10 grid gap-8 border-t border-surface/15 pt-8 md:grid-cols-[1.2fr_0.8fr]">
                  <ul className="grid gap-3">
                    {content.capabilities.map((capability) => (
                      <li className="flex gap-3 text-sm leading-6 text-surface/70" key={capability}>
                        <span className="mt-[0.65rem] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex content-start flex-wrap gap-2 md:justify-end">
                    {content.stack.map((technology) => (
                      <li
                        className="rounded-full border border-surface/20 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-surface/70"
                        key={technology}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
