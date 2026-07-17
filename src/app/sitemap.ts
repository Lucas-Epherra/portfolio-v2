import type { MetadataRoute } from "next";

import { SITE_URL } from "@/content/site";
import { SUPPORTED_LOCALES } from "@/lib/locales";

/** Enumera las páginas localizadas actualmente publicables. */
export default function sitemap(): MetadataRoute.Sitemap {
  return SUPPORTED_LOCALES.map((locale) => ({
    alternates: {
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
      },
    },
    changeFrequency: "monthly",
    priority: 1,
    url: `${SITE_URL}/${locale}`,
  }));
}
