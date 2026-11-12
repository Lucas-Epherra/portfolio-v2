import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";

import { SITE_URL, SOCIAL_IMAGE_PATHS, siteContent } from "@/content/site";
import { isLocale, SUPPORTED_LOCALES } from "@/lib/locales";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

import "../globals.css";

const hanken = Hanken_Grotesk({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-hanken",
});

const bricolage = Bricolage_Grotesque({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-bricolage",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { color: "#f4f5f2", media: "(prefers-color-scheme: light)" },
    { color: "#121412", media: "(prefers-color-scheme: dark)" },
  ],
};

/** Genera en build solamente las rutas correspondientes a idiomas soportados. */
export function generateStaticParams(): Array<{ locale: string }> {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

/**
 * Genera metadata localizada y relaciones `hreflang` para cada idioma.
 *
 * @param props - Parámetros asíncronos del segmento localizado.
 * @returns Metadata correspondiente al idioma solicitado.
 */
export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = siteContent[locale];
  const languageLocale = locale === "es" ? "es_AR" : "en_US";
  const socialImagePath = SOCIAL_IMAGE_PATHS[locale];
  const socialImageAlt =
    locale === "es"
      ? "Portfolio de Lucas Epherra, Full Stack Developer"
      : "Lucas Epherra's Full Stack Developer portfolio";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Lucas Epherra | Full Stack Developer",
      template: "%s | Lucas Epherra",
    },
    description: content.description,
    applicationName: "Lucas Epherra — Portfolio",
    authors: [{ name: "Lucas Epherra", url: SITE_URL }],
    creator: "Lucas Epherra",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    openGraph: {
      description: content.description,
      images: [
        {
          alt: socialImageAlt,
          height: 630,
          url: socialImagePath,
          width: 1200,
        },
      ],
      locale: languageLocale,
      siteName: "Lucas Epherra — Portfolio",
      title: "Lucas Epherra | Full Stack Developer",
      type: "website",
      url: `/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      description: content.description,
      images: [socialImagePath],
      title: "Lucas Epherra | Full Stack Developer",
    },
  };
}

/**
 * Define el documento raíz localizado, las tipografías y los estilos globales.
 *
 * @param props - Contenido y parámetro de idioma de la ruta.
 * @returns Documento HTML raíz para el idioma solicitado.
 */
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html
      className={`${hanken.variable} ${bricolage.variable}`}
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
