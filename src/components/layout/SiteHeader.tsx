import Link from "next/link";
import { DownloadSimpleIcon } from "@phosphor-icons/react/dist/ssr/DownloadSimple";

import type { Locale } from "@/types/locale";
import type { CallToAction, NavigationItem } from "@/types/site-content";

import { Container } from "../ui/Container";
import { ThemeToggle } from "./ThemeToggle";

interface SiteHeaderProps {
  alternateHref?: `/${string}`;
  cvAction: CallToAction;
  languageLabel: string;
  locale: Locale;
  navigation: NavigationItem[];
  navigationLabel: string;
  themeLabel: string;
}

/** Presenta marca, navegación interna, tema, cambio de idioma y descarga directa del CV. */
export function SiteHeader({
  alternateHref,
  cvAction,
  languageLabel,
  locale,
  navigation,
  navigationLabel,
  themeLabel,
}: SiteHeaderProps) {
  const alternateLocale: Locale = locale === "en" ? "es" : "en";

  return (
    <header className="relative z-10">
      <Container className="flex h-18 items-center justify-between gap-2 sm:h-20 sm:gap-4">
        <Link
          aria-label="Lucas Epherra — Home"
          className="shrink-0 font-display text-lg font-semibold tracking-[-0.02em]"
          href={`/${locale}`}
        >
          Lucas Epherra
        </Link>

        <nav aria-label={navigationLabel} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="inline-flex min-h-10 items-center rounded-full px-3.5 text-[0.9375rem] text-muted transition-colors duration-200 hover:bg-chip hover:text-ink"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <ThemeToggle label={themeLabel} />
          <Link
            aria-label={languageLabel}
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full text-sm font-semibold uppercase text-muted transition-colors duration-200 hover:bg-chip hover:text-ink"
            href={alternateHref ?? `/${alternateLocale}`}
            hrefLang={alternateLocale}
            lang={alternateLocale}
          >
            {alternateLocale}
          </Link>
          <a
            className="group inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-3 text-sm font-semibold text-ground sm:px-4 transition-colors duration-200 hover:bg-ink-hover"
            download={cvAction.download}
            href={cvAction.href}
          >
            <DownloadSimpleIcon
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-y-0.5"
              weight="bold"
            />
            {cvAction.label}
          </a>
        </div>
      </Container>
    </header>
  );
}
