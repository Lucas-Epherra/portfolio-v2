import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { CASE_STUDY_ORDER, caseStudies } from "@/content/case-studies";
import { siteContent } from "@/content/site";
import { isLocale } from "@/lib/locales";
import {
  createProfilePageStructuredData,
  serializeStructuredData,
} from "@/lib/structured-data";

interface PortfolioPageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Compone la portada localizada a partir de secciones server-rendered.
 *
 * @param props - Parámetro asíncrono con el idioma solicitado.
 * @returns Portada con el selector de proyectos como escena principal.
 */
export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = siteContent[locale];
  const structuredData = createProfilePageStructuredData(
    locale,
    content.description,
  );

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(structuredData),
        }}
        type="application/ld+json"
      />
      <a className="skip-link" href="#main-content">
        {locale === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <SiteHeader
        cvAction={content.hero.secondaryAction}
        languageLabel={content.languageLabel}
        locale={locale}
        navigation={content.navigation}
        navigationLabel={content.navigationLabel}
        themeLabel={content.themeLabel}
      />
      <main id="main-content">
        <HeroSection
          content={content.hero}
          locale={locale}
          projects={CASE_STUDY_ORDER.map((slug) => caseStudies[locale][slug])}
          work={content.work}
        />
        <ApproachSection content={content.approach} />
        <AboutSection
          content={content.about}
          portraitAlt="Lucas Epherra, Full Stack Developer"
        />
        <ContactSection content={content.contact} />
      </main>
      <SiteFooter note={content.footerNote} rights={content.footerRights} />
    </>
  );
}
