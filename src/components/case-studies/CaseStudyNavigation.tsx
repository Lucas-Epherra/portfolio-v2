import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";

import { CONTACT_EMAIL } from "@/content/site";
import type { CaseStudyContent, CaseStudyUiContent } from "@/types/case-study";
import type { Locale } from "@/types/locale";

import { Container } from "../ui/Container";

interface CaseStudyNavigationProps {
  locale: Locale;
  next?: CaseStudyContent;
  previous?: CaseStudyContent;
  ui: CaseStudyUiContent;
}

const linkClassName =
  "group flex min-h-32 flex-col justify-between gap-6 rounded-[1.375rem] border border-line p-6 shadow-panel transition-colors duration-200 hover:border-line-strong sm:p-8";

/** Conecta los casos entre sí sin ocultar la salida hacia el portfolio principal. */
export function CaseStudyNavigation({
  locale,
  next,
  previous,
  ui,
}: CaseStudyNavigationProps) {
  return (
    <nav aria-label={ui.caseStudyLabel} className="border-t border-line">
      <Container className="py-12 sm:py-16">
        {previous ? (
          <Link
            className="group mb-4 inline-flex min-h-10 items-center gap-2 pr-3 text-sm font-medium text-muted transition-colors hover:text-ink"
            href={`/${locale}#work`}
          >
            <ArrowLeftIcon
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
              weight="bold"
            />
            {ui.backToPortfolio}
          </Link>
        ) : null}

        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            className={`${linkClassName} bg-panel`}
            href={previous ? `/${locale}/projects/${previous.slug}` : `/${locale}#work`}
          >
            <span className="flex items-center gap-2 text-sm text-muted">
              <ArrowLeftIcon
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
                weight="bold"
              />
              {previous ? ui.previousCase : ui.backToPortfolio}
            </span>
            <span className="font-display text-3xl font-semibold tracking-[-0.03em]">
              {previous ? previous.title : ui.portfolioLabel}
            </span>
          </Link>

          {next ? (
            <Link
              className={`${linkClassName} items-end bg-panel text-right`}
              href={`/${locale}/projects/${next.slug}`}
            >
              <span className="flex items-center gap-2 text-sm text-muted">
                {ui.nextCase}
                <ArrowRightIcon
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  weight="bold"
                />
              </span>
              <span className="font-display text-3xl font-semibold tracking-[-0.03em]">
                {next.title}
              </span>
            </Link>
          ) : (
            <a
              className={`${linkClassName} items-end bg-slab text-right text-on-slab`}
              href={`mailto:${CONTACT_EMAIL}`}
            >
              <span className="flex items-center gap-2 text-sm text-on-slab/70">
                {ui.contactLabel}
                <ArrowRightIcon
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  weight="bold"
                />
              </span>
              <span className="max-w-full break-words font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                {CONTACT_EMAIL}
              </span>
            </a>
          )}
        </div>
      </Container>
    </nav>
  );
}
