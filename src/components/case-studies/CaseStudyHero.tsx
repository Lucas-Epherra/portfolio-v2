import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

import type { CaseStudyContent, CaseStudyUiContent } from "@/types/case-study";
import type { Locale } from "@/types/locale";

import { Container } from "../ui/Container";

interface CaseStudyHeroProps {
  content: CaseStudyContent;
  locale: Locale;
  ui: CaseStudyUiContent;
}

/** Presenta contexto, alcance, acciones y la evidencia visual principal del caso. */
export function CaseStudyHero({ content, locale, ui }: CaseStudyHeroProps) {
  return (
    <section aria-labelledby="case-study-title">
      <Container className="pb-16 pt-6 sm:pb-20 sm:pt-10">
        <Link
          className="group inline-flex min-h-10 items-center gap-2 rounded-full pr-3 text-sm font-medium text-muted transition-colors hover:text-ink"
          href={`/${locale}#work`}
        >
          <ArrowLeftIcon
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
            weight="bold"
          />
          {ui.backToPortfolio}
        </Link>

        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h1
              className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[5.5rem]"
              id="case-study-title"
            >
              {content.title}
            </h1>
            <p className="mt-4 text-lg font-medium">
              <mark className="highlight">{content.category}</mark>
            </p>
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted sm:text-xl">
              {content.summary}
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {content.actions.map((action, index) => (
                <li key={action.href}>
                  <a
                    aria-label={`${action.label}: ${content.title}`}
                    className={`group inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-[0.9375rem] font-semibold transition-colors duration-200 ${
                      index === 0
                        ? "bg-ink text-ground hover:bg-ink-hover"
                        : "border border-line-strong bg-panel text-ink hover:border-ink"
                    }`}
                    href={action.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {action.label}
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      weight="bold"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <dl className="overflow-hidden rounded-[1.375rem] border border-line bg-panel shadow-panel">
              {content.facts.map((fact) => (
                <div
                  className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 border-b border-line px-5 py-4 last:border-b-0"
                  key={fact.label}
                >
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="font-medium leading-snug">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <ul aria-label="Stack" className="mt-3 flex flex-wrap gap-1.5 px-1">
              {content.stack.map((technology) => (
                <li
                  className="rounded-md bg-chip px-2 py-1 text-[0.8125rem] font-medium"
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="mt-12 rounded-[1.375rem] border border-line bg-panel p-3 shadow-panel sm:mt-16">
          <div className="relative aspect-[16/8.4] overflow-hidden rounded-[0.875rem] border border-line bg-chip">
            <Image
              alt={content.heroAlt}
              className="object-cover object-top"
              fill
              priority
              sizes="(max-width: 1440px) calc(100vw - 3rem), 1300px"
              src={content.heroImage}
            />
          </div>
          <figcaption className="px-2 pb-1 pt-3 text-sm text-muted">{content.heroAlt}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
