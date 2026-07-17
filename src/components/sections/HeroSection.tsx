import Image from "next/image";

import type { HeroContent } from "@/types/site-content";

import { ArrowIcon } from "../ui/ArrowIcon";
import { Container } from "../ui/Container";

interface HeroSectionProps {
  content: HeroContent;
}

/** Comunica el posicionamiento profesional y dirige hacia trabajo o contacto. */
export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="top" className="relative overflow-hidden">
      <Container className="relative grid min-h-[calc(100dvh-5rem)] items-center gap-14 py-16 md:grid-cols-12 md:py-20 lg:gap-8">
        <div className="relative z-[1] md:col-span-7 lg:col-span-7">
          <p className="reveal mb-8 flex max-w-max items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {content.eyebrow}
          </p>

          <h1 className="reveal reveal-delay-1 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[5.15rem]">
            {content.titleStart}{" "}
            <span className="font-serif font-normal italic text-accent">
              {content.titleFocus}
            </span>{" "}
            {content.titleEnd}
          </h1>

          <div className="reveal reveal-delay-2 mt-10 grid gap-8 border-t border-line pt-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {content.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-foreground px-6 text-sm font-bold text-background transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
                href={content.primaryAction.href}
              >
                {content.primaryAction.label}
                <ArrowIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                className="inline-flex min-h-12 items-center rounded-full border border-line px-6 text-sm font-bold transition-colors duration-300 hover:border-foreground"
                href={content.secondaryAction.href}
              >
                {content.secondaryAction.label}
              </a>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative md:col-span-5 md:pl-8 lg:col-start-9 lg:col-span-4">
          <div className="absolute -left-1 top-10 hidden h-[78%] w-px bg-line md:block" aria-hidden="true" />
          <figure className="relative ml-auto max-w-md">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-portfolio border border-accent" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-portfolio bg-dark shadow-portfolio">
              <Image
                alt="Lucas Epherra, Full Stack Developer"
                className="object-cover object-[50%_32%] saturate-[0.82]"
                fill
                priority
                sizes="(max-width: 767px) 90vw, (max-width: 1279px) 38vw, 29rem"
                src="/images/lucas-epherra.webp"
              />
              <div className="absolute inset-x-0 bottom-0 bg-dark/90 px-5 py-4 text-surface">
                <figcaption className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.17em]">
                  <span>Lucas Epherra</span>
                  <span className="text-surface/60">Full Stack</span>
                </figcaption>
              </div>
            </div>
          </figure>
          <p className="mt-8 flex items-center gap-3 text-xs font-semibold text-muted">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {content.availability}
          </p>
        </div>
      </Container>
    </section>
  );
}
