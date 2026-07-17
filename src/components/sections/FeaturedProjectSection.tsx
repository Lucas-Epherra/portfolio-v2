import Image from "next/image";

import type { FeaturedProjectContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface FeaturedProjectSectionProps {
  content: FeaturedProjectContent;
}

/** Presenta MiTaller360 como el proyecto principal mediante una captura real y datos verificables. */
export function FeaturedProjectSection({
  content,
}: FeaturedProjectSectionProps) {
  return (
    <section
      id="work"
      className="relative z-[1] scroll-mt-8 bg-surface pb-6 before:absolute before:inset-x-0 before:top-0 before:h-24 before:bg-dark before:content-['']"
    >
      <Container className="relative pt-10 md:pt-14">
        <article className="grid overflow-hidden border border-line bg-surface shadow-portfolio lg:grid-cols-[1.8fr_0.8fr]">
          <div className="flex items-center border-b border-line bg-[#e8edf0] lg:border-b-0 lg:border-r">
            <Image
              alt={content.imageAlt}
              className="h-auto w-full"
              height={643}
              sizes="(max-width: 1023px) 100vw, 70vw"
              src={content.image}
              width={1028}
            />
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="font-serif text-3xl tracking-[-0.025em]">
              <span className="text-accent">{content.number} — </span>
              {content.title}
            </p>
            <p className="mt-2 text-sm text-muted">{content.category}</p>
            <span className="mt-6 h-px w-12 bg-accent" aria-hidden="true" />

            <dl className="mt-7 border-b border-line pb-7">
              <dt className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted">
                {content.roleLabel}
              </dt>
              <dd className="mt-2 text-sm font-semibold text-accent">{content.role}</dd>
            </dl>

            <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-xs leading-5 text-muted">
              {content.stack.map((technology) => (
                <li className="after:ml-2 after:content-['·'] last:after:content-none" key={technology}>
                  {technology}
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-3 text-sm leading-6 text-muted">
              {content.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
