import type { Locale } from "@/types/locale";

/** Enlace interno utilizado por la navegación principal. */
export interface NavigationItem {
  href: `#${string}` | `/${string}`;
  label: string;
}

/** Acción principal o secundaria de la portada. */
export interface CallToAction {
  download?: boolean;
  href: `#${string}` | `/${string}` | `mailto:${string}`;
  label: string;
}

/** Contenido localizado del hero principal. */
export interface HeroContent {
  description: string;
  location: string[];
  primaryAction: CallToAction;
  role: string;
  secondaryAction: CallToAction;
  title: string;
  /** Fragmento literal del título que se resalta con el marcador lima. */
  titleHighlight: string;
}

/** Etiquetas de las fichas de proyectos; los datos provienen de los casos de estudio. */
export interface WorkContent {
  caseStudyLabel: string;
  contributionLabel: string;
  /** Debe coincidir con la etiqueta del dato de rol en los casos de estudio. */
  roleLabel: string;
  stackLabel: string;
  /** Debe coincidir con la etiqueta del dato de estado en los casos de estudio. */
  statusLabel: string;
  title: string;
}

/** Dato profesional breve presentado en la sección de perfil. */
export interface AboutFact {
  label: string;
  value: string;
}

/** Presentación profesional y alcance técnico del perfil. */
export interface AboutContent {
  facts: AboutFact[];
  paragraphs: string[];
  title: string;
}

/** Identificador semántico de cada capacidad técnica. */
export type ApproachIconName = "backend" | "data" | "frontend" | "product";

/** Paso verificable de la forma de trabajo. */
export interface ApproachStep {
  description: string;
  icon: ApproachIconName;
  number: string;
  title: string;
}

/** Forma de trabajo y servicios que puede ofrecer Lucas. */
export interface ApproachContent {
  introduction: string;
  steps: ApproachStep[];
  title: string;
}

/** Cierre de conversión de la portada. */
export interface ContactContent {
  eyebrow: string;
  emailLabel: string;
  locationLabel: string;
  title: string;
}

/** Contenido localizado requerido por la primera versión de la portada. */
export interface SiteContent {
  about: AboutContent;
  approach: ApproachContent;
  contact: ContactContent;
  description: string;
  footerNote: string;
  footerRights: string;
  hero: HeroContent;
  languageLabel: string;
  navigation: NavigationItem[];
  navigationLabel: string;
  themeLabel: string;
  work: WorkContent;
}

/** Contenido completo indexado por cada idioma público soportado. */
export type LocalizedSiteContent = Record<Locale, SiteContent>;
