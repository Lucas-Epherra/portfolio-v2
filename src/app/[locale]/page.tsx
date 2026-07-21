import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProjectSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SelectedProjectsSection } from "@/components/sections/SelectedProjectsSection";
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
 * @returns Portada temporal de Foundation.
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
        languageLabel={content.languageLabel}
        locale={locale}
        navigation={content.navigation}
        navigationLabel={content.navigationLabel}
      />
      <main id="main-content">
        <HeroSection content={content.hero} />
        <FeaturedProjectSection content={content.featuredProject} />
        <SelectedProjectsSection content={content.selectedProjects} />
        <ApproachSection content={content.approach} />
        <AboutSection content={content.about} />
        <ContactSection content={content.contact} />
      </main>
      <SiteFooter note={content.footerNote} rights={content.footerRights} />
    </>
  );
}
