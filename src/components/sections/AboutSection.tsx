import type { AboutContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface AboutSectionProps {
  content: AboutContent;
}

/** Resume el perfil Full Stack mediante responsabilidades y tecnologías comprobables. */
export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-8 bg-background py-24 sm:py-32">
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
            <div className="grid gap-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ol className="mt-12 divide-y divide-line border-y border-line">
              {content.capabilities.map((capability, index) => (
                <li className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]" key={capability.title}>
                  <span className="font-serif text-xl text-accent">0{index + 1}</span>
                  <div>
                    <h3 className="text-base font-bold tracking-[-0.02em]">{capability.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{capability.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20 border-t border-line pt-7 sm:mt-24">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted">
            {content.technologiesLabel}
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3 font-serif text-xl sm:text-2xl">
            {content.technologies.map((technology) => (
              <li className="after:ml-7 after:text-accent after:content-['/'] last:after:content-none" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
