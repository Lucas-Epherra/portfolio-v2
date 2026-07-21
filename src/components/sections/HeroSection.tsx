import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { DownloadSimpleIcon } from "@phosphor-icons/react/dist/ssr/DownloadSimple";

import type { HeroContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface HeroSectionProps {
  content: HeroContent;
}

/** Abre la portada con un manifiesto profesional, retrato y acciones directas. */
export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="top" className="hero-surface overflow-hidden bg-dark text-surface">
      <Container className="grid min-h-[calc(100dvh-5rem)] sm:min-h-[calc(100dvh-6rem)] md:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:grid-cols-[4.75rem_minmax(0,1.35fr)_minmax(20rem,1fr)]">
        <aside className="hidden border-x border-surface/15 lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-10">
          <span className="font-serif text-xl text-accent-on-dark">LE</span>
          <span className="[writing-mode:vertical-rl] rotate-180 text-[0.62rem] font-bold uppercase tracking-[0.25em] text-surface/55">
            {content.role}
          </span>
          <span className="text-center text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.16em] text-surface/50">
            {content.location.map((line) => (
              <span className="block" key={line}>{line}</span>
            ))}
          </span>
        </aside>

        <div className="reveal flex flex-col justify-center py-14 md:px-6 lg:px-10 xl:px-14">
          <p className="mb-8 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent-on-dark lg:hidden">
            {content.role}
          </p>
          <h1 className="font-serif text-5xl leading-[1.03] tracking-[-0.035em] sm:text-6xl md:text-[2.8rem] lg:text-5xl xl:text-[4.5rem]">
            {content.titleLines.map((line) => (
              <span className="block" key={line}>{line}</span>
            ))}
          </h1>
          <p className="mt-8 max-w-md text-base leading-7 text-surface/60 sm:text-lg">
            {content.description}
          </p>
          <span className="mt-9 h-px w-28 bg-accent-on-dark" aria-hidden="true" />
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="group inline-flex min-h-13 items-center gap-8 bg-accent-on-dark px-6 text-sm font-bold text-dark transition-colors duration-300 hover:bg-surface active:translate-y-px"
              href={content.primaryAction.href}
            >
              {content.primaryAction.label}
              <ArrowRightIcon
                aria-hidden="true"
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                weight="regular"
              />
            </a>
            <a
              className="inline-flex min-h-13 items-center gap-5 border border-accent-on-dark/70 px-6 text-sm font-bold text-surface transition-colors duration-300 hover:bg-surface hover:text-dark active:translate-y-px"
              download={content.secondaryAction.download}
              href={content.secondaryAction.href}
            >
              {content.secondaryAction.label}
              <DownloadSimpleIcon aria-hidden="true" className="size-4" weight="regular" />
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-1 relative min-h-[26rem] sm:min-h-[30rem] md:min-h-full">
          <Image
            alt="Lucas Epherra, Full Stack Developer"
            className="object-cover object-[50%_28%] saturate-[0.88]"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 42vw"
            src="/images/lucas-epherra.webp"
          />
          <div className="absolute inset-y-0 left-0 w-px bg-surface/15" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
