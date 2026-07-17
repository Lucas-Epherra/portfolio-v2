import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";

import { SITE_URL, siteContent } from "@/content/site";
import { isLocale, SUPPORTED_LOCALES } from "@/lib/locales";

import "../globals.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sourceSerif = Source_Serif_4({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-source-serif",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

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
      locale: languageLocale,
      siteName: "Lucas Epherra — Portfolio",
      title: "Lucas Epherra | Full Stack Developer",
      type: "website",
      url: `/${locale}`,
    },
    twitter: {
      card: "summary",
      description: content.description,
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
    <html lang={locale} className={`${manrope.variable} ${sourceSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
