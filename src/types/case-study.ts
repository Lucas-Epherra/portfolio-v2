import type { Locale } from "@/types/locale";

/** Slugs públicos y estables utilizados por los casos de estudio. */
export type CaseStudySlug = "estudio-lachat" | "mitaller360" | "opscore";

/** Enlace externo verificable presentado dentro de un caso. */
export interface CaseStudyAction {
  href: `https://${string}`;
  label: string;
}

/** Dato breve que contextualiza alcance, rol o estado del proyecto. */
export interface CaseStudyFact {
  label: string;
  value: string;
}

/** Posición editorial disponible para una captura dentro de la galería. */
export type CaseStudyImageLayout =
  | "compact"
  | "featured"
  | "portrait"
  | "wide";

/** Imagen complementaria con dimensiones, descripción y posición editorial. */
export interface CaseStudyImage {
  alt: string;
  caption: string;
  height: number;
  layout: CaseStudyImageLayout;
  src: `/${string}`;
  width: number;
}

/** Identificador compartido por las secciones narrativas de cada caso. */
export type CaseStudySectionId =
  | "delivery"
  | "overview"
  | "scope"
  | "technical-decisions";

/** Bloque editorial que explica una etapa o dimensión del proyecto. */
export interface CaseStudySectionContent {
  bullets?: string[];
  eyebrow: string;
  id: CaseStudySectionId;
  number: string;
  paragraphs: string[];
  title: string;
}

/** Contenido completo y localizado de un proyecto verificable. */
export interface CaseStudyContent {
  actions: CaseStudyAction[];
  category: string;
  description: string;
  facts: CaseStudyFact[];
  gallery: CaseStudyImage[];
  heroAlt: string;
  heroImage: `/${string}`;
  number: string;
  sections: CaseStudySectionContent[];
  slug: CaseStudySlug;
  stack: string[];
  summary: string;
  title: string;
}

/** Etiquetas de interfaz compartidas por la plantilla de casos. */
export interface CaseStudyUiContent {
  backToPortfolio: string;
  caseStudyLabel: string;
  closeImageLabel: string;
  contactLabel: string;
  decisionsLabel: string;
  galleryDescription: string;
  galleryLabel: string;
  galleryTitle: string;
  nextCase: string;
  overviewLabel: string;
  portfolioLabel: string;
  previousCase: string;
  skipToContent: string;
  viewImageLabel: string;
}

/** Colección localizada indexada por idioma y slug. */
export type LocalizedCaseStudies = Record<
  Locale,
  Record<CaseStudySlug, CaseStudyContent>
>;

/** Etiquetas localizadas de la plantilla de casos. */
export type LocalizedCaseStudyUi = Record<Locale, CaseStudyUiContent>;
