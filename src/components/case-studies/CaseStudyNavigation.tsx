import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";

import type { CaseStudyContent, CaseStudyUiContent } from "@/types/case-study";
import type { Locale } from "@/types/locale";

import { Container } from "../ui/Container";

interface CaseStudyNavigationProps {
  locale: Locale;
  next?: CaseStudyContent;
  previous?: CaseStudyContent;
  ui: CaseStudyUiContent;
}

/** Conecta los casos entre sí sin ocultar la salida hacia el portfolio principal. */
export function CaseStudyNavigation({
  locale,
  next,
  previous,
  ui,
}: CaseStudyNavigationProps) {
  return (
    <nav aria-label={ui.caseStudyLabel} className="border-t border-line bg-background py-12 sm:py-14">
      <Container className="grid gap-4 sm:grid-cols-2">
        {previous ? (
          <Link
            className="group border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/50 sm:p-8"
            href={`/${locale}/projects/${previous.slug}`}
          >
            <span className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">
              <ArrowLeftIcon
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                weight="regular"
              />
              {ui.previousCase}
            </span>
            <span className="mt-4 block font-serif text-2xl tracking-[-0.025em]">
              {previous.number} — {previous.title}
            </span>
          </Link>
        ) : (
          <Link
            className="group border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/50 sm:p-8"
            href={`/${locale}#work`}
          >
            <span className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">
              <ArrowLeftIcon
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                weight="regular"
              />
              {ui.backToPortfolio}
            </span>
            <span className="mt-4 block font-serif text-2xl tracking-[-0.025em]">
              Lucas Epherra
            </span>
          </Link>
        )}

        {next ? (
          <Link
            className="group border border-line bg-surface p-6 text-right transition-colors duration-300 hover:border-accent/50 sm:p-8"
            href={`/${locale}/projects/${next.slug}`}
          >
            <span className="flex items-center justify-end gap-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">
              {ui.nextCase}
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                weight="regular"
              />
            </span>
            <span className="mt-4 block font-serif text-2xl tracking-[-0.025em]">
              {next.number} — {next.title}
            </span>
          </Link>
        ) : (
          <Link
            className="group border border-line bg-dark p-6 text-right text-surface transition-colors duration-300 hover:border-accent-on-dark/70 sm:p-8"
            href={`/${locale}#contact`}
          >
            <span className="flex items-center justify-end gap-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-surface/50">
              {ui.contactLabel}
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                weight="regular"
              />
            </span>
            <span className="mt-4 block font-serif text-2xl tracking-[-0.025em]">
              Lucas Epherra
            </span>
          </Link>
        )}
      </Container>
    </nav>
  );
}
