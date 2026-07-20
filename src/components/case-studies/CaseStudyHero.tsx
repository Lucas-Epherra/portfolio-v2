import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr/ArrowSquareOut";

import type { CaseStudyContent, CaseStudyUiContent } from "@/types/case-study";
import type { Locale } from "@/types/locale";

import { Container } from "../ui/Container";

interface CaseStudyHeroProps {
  content: CaseStudyContent;
  locale: Locale;
  ui: CaseStudyUiContent;
}

/** Presenta contexto, alcance, acciones y evidencia visual principal del caso. */
export function CaseStudyHero({ content, locale, ui }: CaseStudyHeroProps) {
  return (
    <>
      <section className="bg-dark py-10 text-surface sm:py-14 lg:py-16">
        <Container>
          <Link
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-surface/60 transition-colors hover:text-surface"
            href={`/${locale}#work`}
          >
            <ArrowLeftIcon
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
              weight="regular"
            />
            {ui.backToPortfolio}
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent">
                {ui.caseStudyLabel} · {content.number}
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                {content.title}
              </h1>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-surface/50">
                {content.category}
              </p>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-surface/65 sm:text-xl">
                {content.summary}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {content.actions.map((action, index) => (
                  <a
                    className={
                      index === 0
                        ? "group inline-flex min-h-12 items-center gap-3 bg-accent px-5 text-sm font-bold text-dark transition-colors duration-300 hover:bg-surface"
                        : "group inline-flex min-h-12 items-center gap-3 border border-accent/70 px-5 text-sm font-bold text-surface transition-colors duration-300 hover:bg-surface hover:text-dark"
                    }
                    href={action.href}
                    key={action.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {action.label}
                    <ArrowSquareOutIcon
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      weight="regular"
                    />
                  </a>
                ))}
              </div>
            </div>

            <dl className="border-t border-surface/15 lg:col-span-5">
              {content.facts.map((fact) => (
                <div
                  className="grid grid-cols-[7rem_1fr] gap-5 border-b border-surface/15 py-4"
                  key={fact.label}
                >
                  <dt className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-surface/40">
                    {fact.label}
                  </dt>
                  <dd className="text-sm leading-6 text-surface/70">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-3 gap-y-2 border-t border-surface/15 pt-6 text-xs text-surface/55">
            {content.stack.map((technology) => (
              <li
                className="after:ml-3 after:text-accent after:content-['/'] last:after:content-none"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface py-8 sm:py-12">
        <Container>
          <figure className="overflow-hidden border border-line bg-background shadow-portfolio">
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-video">
              <Image
                alt={content.heroAlt}
                className="object-contain object-top"
                fill
                priority
                sizes="(max-width: 1536px) 100vw, 1440px"
                src={content.heroImage}
              />
            </div>
            <figcaption className="border-t border-line px-5 py-4 text-xs leading-5 text-muted sm:px-7">
              {content.heroAlt}
            </figcaption>
          </figure>
        </Container>
      </section>
    </>
  );
}
