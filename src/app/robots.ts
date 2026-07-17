import type { MetadataRoute } from "next";

import { SITE_URL } from "@/content/site";

/** Publica reglas de rastreo y referencia al sitemap del portfolio. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      userAgent: "*",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
