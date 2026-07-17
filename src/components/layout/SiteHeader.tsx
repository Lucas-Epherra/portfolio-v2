import Link from "next/link";

import { CONTACT_EMAIL } from "@/content/site";
import type { Locale } from "@/types/locale";
import type { NavigationItem } from "@/types/site-content";

import { Container } from "../ui/Container";

interface SiteHeaderProps {
  contactLabel: string;
  languageLabel: string;
  locale: Locale;
  navigation: NavigationItem[];
  navigationLabel: string;
}

/** Presenta identidad, navegación de página y cambio de idioma sin JavaScript cliente. */
export function SiteHeader({
  contactLabel,
  languageLabel,
  locale,
  navigation,
  navigationLabel,
}: SiteHeaderProps) {
  const alternateLocale: Locale = locale === "en" ? "es" : "en";

  return (
    <header className="border-b border-line bg-background/95">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link
          className="group flex shrink-0 items-center gap-3"
          href={`/${locale}`}
          aria-label="Lucas Epherra — Home"
        >
          <span className="grid size-10 place-items-center rounded-full border border-foreground font-serif text-lg transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
            LE
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold tracking-[-0.02em]">
              Lucas Epherra
            </span>
            <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-muted">
              Full Stack Developer
            </span>
          </span>
        </Link>

        <nav aria-label={navigationLabel}>
          <ul className="flex items-center gap-5 lg:gap-8">
            {navigation.map((item) => (
              <li
                className={item.href === "#work" ? "block" : "hidden lg:block"}
                key={item.href}
              >
                <a
                  className="text-sm font-semibold text-muted transition-colors duration-300 hover:text-foreground"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            aria-label={languageLabel}
            className="grid min-h-11 min-w-11 place-items-center rounded-full border border-line text-xs font-bold uppercase transition-colors duration-300 hover:border-foreground"
            href={`/${alternateLocale}`}
            hrefLang={alternateLocale}
            lang={alternateLocale}
          >
            {alternateLocale}
          </Link>
          <a
            className="hidden min-h-11 items-center rounded-full bg-foreground px-5 text-sm font-bold text-background transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 sm:inline-flex"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {contactLabel}
          </a>
        </div>
      </Container>
    </header>
  );
}
