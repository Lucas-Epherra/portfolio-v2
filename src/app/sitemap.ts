import type { MetadataRoute } from "next";

import { CASE_STUDY_ORDER } from "@/content/case-studies";
import { SITE_URL } from "@/content/site";
import { SUPPORTED_LOCALES } from "@/lib/locales";

/** Enumera las páginas localizadas actualmente publicables. */
export default function sitemap(): MetadataRoute.Sitemap {
  const localizedHomepages = SUPPORTED_LOCALES.map((locale) => ({
    alternates: {
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
      },
    },
    changeFrequency: "monthly" as const,
    priority: 1,
    url: `${SITE_URL}/${locale}`,
  }));

  const localizedCaseStudies = SUPPORTED_LOCALES.flatMap((locale) =>
    CASE_STUDY_ORDER.map((slug) => ({
      alternates: {
        languages: {
          en: `${SITE_URL}/en/projects/${slug}`,
          es: `${SITE_URL}/es/projects/${slug}`,
        },
      },
      changeFrequency: "monthly" as const,
      priority: 0.8,
      url: `${SITE_URL}/${locale}/projects/${slug}`,
    })),
  );

  return [...localizedHomepages, ...localizedCaseStudies];
}
