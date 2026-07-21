import {
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_URL,
} from "@/content/site";
import type { Locale } from "@/types/locale";

interface ProfilePageStructuredData {
  "@context": "https://schema.org";
  "@type": "ProfilePage";
  inLanguage: Locale;
  mainEntity: {
    "@type": "Person";
    description: string;
    homeLocation: {
      "@type": "Place";
      name: string;
    };
    image: string;
    jobTitle: string;
    knowsAbout: string[];
    name: string;
    sameAs: string[];
    url: string;
  };
  url: string;
}

/** Construye datos estructurados verificables para el perfil profesional localizado. */
export function createProfilePageStructuredData(
  locale: Locale,
  description: string,
): ProfilePageStructuredData {
  const localizedUrl = `${SITE_URL}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    inLanguage: locale,
    mainEntity: {
      "@type": "Person",
      description,
      homeLocation: {
        "@type": "Place",
        name: "Tres Arroyos, Buenos Aires, Argentina",
      },
      image: `${SITE_URL}/images/lucas-epherra.webp`,
      jobTitle: "Full Stack Developer",
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "NestJS",
        "PostgreSQL",
        "REST APIs",
      ],
      name: "Lucas Epherra",
      sameAs: [GITHUB_URL, LINKEDIN_URL],
      url: localizedUrl,
    },
    url: localizedUrl,
  };
}

/** Serializa JSON-LD estático evitando que un carácter `<` cierre el script. */
export function serializeStructuredData(
  data: ProfilePageStructuredData,
): string {
  return JSON.stringify(data).replaceAll("<", "\\u003c");
}
