import Link from "next/link";

import type { Locale } from "@/types/locale";
import type { NavigationItem } from "@/types/site-content";

import { Container } from "../ui/Container";

interface SiteHeaderProps {
  languageLabel: string;
  locale: Locale;
  navigation: NavigationItem[];
  navigationLabel: string;
}

/** Presenta marca, navegación interna y cambio de idioma sobre el hero oscuro. */
export function SiteHeader({
  languageLabel,
  locale,
  navigation,
  navigationLabel,
}: SiteHeaderProps) {
  const alternateLocale: Locale = locale === "en" ? "es" : "en";

  return (
    <header className="border-b border-surface/15 bg-dark text-surface">
      <Container className="flex h-20 items-center justify-between gap-4 sm:h-24">
        <Link
          aria-label="Lucas Epherra — Home"
          className="shrink-0 text-base font-extrabold uppercase tracking-[0.24em] transition-colors duration-300 hover:text-accent sm:text-xl"
          href={`/${locale}`}
        >
          <span className="sm:hidden">L. E.</span>
          <span className="hidden sm:inline">Lucas Epherra</span>
        </Link>

        <nav aria-label={navigationLabel}>
          <ul className="flex items-center gap-5 md:gap-6 lg:gap-10">
            {navigation.map((item) => (
              <li
                className={item.href === "#work" ? "block" : "hidden md:block"}
                key={item.href}
              >
                <a
                  className="group relative inline-flex py-3 text-xs font-semibold text-surface/65 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-surface hover:after:scale-x-100 md:text-[0.8rem] lg:text-sm"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]">
          <span className="text-accent">{locale}</span>
          <span className="text-surface/25" aria-hidden="true">/</span>
          <Link
            aria-label={languageLabel}
            className="min-h-11 py-3 text-surface/55 transition-colors hover:text-surface"
            href={`/${alternateLocale}`}
            hrefLang={alternateLocale}
            lang={alternateLocale}
          >
            {alternateLocale}
          </Link>
        </div>
      </Container>
    </header>
  );
}
