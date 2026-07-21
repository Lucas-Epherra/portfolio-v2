import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyGallery } from "@/components/case-studies/CaseStudyGallery";
import { CaseStudyHero } from "@/components/case-studies/CaseStudyHero";
import { CaseStudyNavigation } from "@/components/case-studies/CaseStudyNavigation";
import { CaseStudySection } from "@/components/case-studies/CaseStudySection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import {
  CASE_STUDY_ORDER,
  caseStudies,
  caseStudyUi,
  getCaseStudy,
} from "@/content/case-studies";
import { SITE_URL, siteContent } from "@/content/site";
import { isLocale, SUPPORTED_LOCALES } from "@/lib/locales";
import type { NavigationItem } from "@/types/site-content";

interface CaseStudyPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const dynamicParams = false;

/** Genera durante el build cada combinación pública de idioma y proyecto. */
export function generateStaticParams(): Array<{ locale: string; slug: string }> {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    CASE_STUDY_ORDER.map((slug) => ({ locale, slug })),
  );
}

/** Genera metadata localizada y relaciones de idioma para cada caso. */
export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const caseStudy = getCaseStudy(locale, slug);

  if (!caseStudy) {
    notFound();
  }

  const alternateLocale = locale === "en" ? "es" : "en";
  const canonicalPath = `/${locale}/projects/${caseStudy.slug}`;
  const alternatePath = `/${alternateLocale}/projects/${caseStudy.slug}`;

  return {
    title: `${caseStudy.title} — ${caseStudyUi[locale].caseStudyLabel}`,
    description: caseStudy.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        [alternateLocale]: alternatePath,
        [locale]: canonicalPath,
        "x-default": `/en/projects/${caseStudy.slug}`,
      },
    },
    openGraph: {
      description: caseStudy.description,
      images: [{ alt: caseStudy.heroAlt, url: caseStudy.heroImage }],
      locale: locale === "es" ? "es_AR" : "en_US",
      siteName: "Lucas Epherra — Portfolio",
      title: `${caseStudy.title} — ${caseStudyUi[locale].caseStudyLabel}`,
      type: "article",
      url: canonicalPath,
    },
    twitter: {
      card: "summary_large_image",
      description: caseStudy.description,
      images: [caseStudy.heroImage],
      title: `${caseStudy.title} — ${caseStudyUi[locale].caseStudyLabel}`,
    },
    metadataBase: new URL(SITE_URL),
  };
}

/** Compone un caso localizado a partir de contenido tipado y secciones reutilizables. */
export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const caseStudy = getCaseStudy(locale, slug);

  if (!caseStudy) {
    notFound();
  }

  const currentIndex = CASE_STUDY_ORDER.indexOf(caseStudy.slug);
  const previousSlug = currentIndex > 0 ? CASE_STUDY_ORDER[currentIndex - 1] : undefined;
  const nextSlug =
    currentIndex < CASE_STUDY_ORDER.length - 1
      ? CASE_STUDY_ORDER[currentIndex + 1]
      : undefined;
  const previous = previousSlug ? caseStudies[locale][previousSlug] : undefined;
  const next = nextSlug ? caseStudies[locale][nextSlug] : undefined;
  const ui = caseStudyUi[locale];
  const alternateLocale = locale === "en" ? "es" : "en";
  const navigation: NavigationItem[] = [
    { href: `/${locale}#work`, label: ui.portfolioLabel },
    { href: "#overview", label: ui.overviewLabel },
    { href: "#technical-decisions", label: ui.decisionsLabel },
    { href: `/${locale}#contact`, label: ui.contactLabel },
  ];
  const galleryPosition = caseStudy.sections.findIndex(
    (section) => section.id === "delivery",
  );
  const sectionBoundary =
    galleryPosition === -1 ? caseStudy.sections.length : galleryPosition;
  const sectionsBeforeGallery = caseStudy.sections.slice(0, sectionBoundary);
  const sectionsAfterGallery = caseStudy.sections.slice(sectionBoundary);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {ui.skipToContent}
      </a>
      <SiteHeader
        alternateHref={`/${alternateLocale}/projects/${caseStudy.slug}`}
        languageLabel={siteContent[locale].languageLabel}
        locale={locale}
        navigation={navigation}
        navigationLabel={siteContent[locale].navigationLabel}
      />
      <main id="main-content">
        <CaseStudyHero content={caseStudy} locale={locale} ui={ui} />
        {sectionsBeforeGallery.map((section, index) => (
          <CaseStudySection content={section} key={section.id} muted={index % 2 === 1} />
        ))}
        <CaseStudyGallery
          description={caseStudy.galleryDescription}
          images={caseStudy.gallery}
          title={caseStudy.galleryTitle}
          ui={ui}
        />
        {sectionsAfterGallery.map((section, index) => (
          <CaseStudySection
            content={section}
            key={section.id}
            muted={(sectionBoundary + index) % 2 === 1}
          />
        ))}
        <CaseStudyNavigation
          locale={locale}
          next={next}
          previous={previous}
          ui={ui}
        />
      </main>
      <SiteFooter
        note={siteContent[locale].footerNote}
        rights={siteContent[locale].footerRights}
      />
    </>
  );
}
