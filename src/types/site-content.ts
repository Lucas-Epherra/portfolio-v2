import type { Locale } from "@/types/locale";

/** Enlace interno utilizado por la navegación principal. */
export interface NavigationItem {
  href: `#${string}`;
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
  titleLines: string[];
}

/** Contenido del proyecto insignia presentado en la portada. */
export interface FeaturedProjectContent {
  category: string;
  image: `/${string}`;
  imageAlt: string;
  number: string;
  role: string;
  roleLabel: string;
  stack: string[];
  summary: string[];
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

/** Enlace verificable asociado a un proyecto seleccionado. */
export interface ProjectLink {
  href: `https://${string}`;
  label: string;
}

/** Proyecto secundario con imagen y alcance resumido. */
export interface SelectedProject {
  alt: string;
  category: string;
  image: `/${string}`;
  links: ProjectLink[];
  number: string;
  role: string;
  stack: string[];
  title: string;
}

/** Grupo localizado de proyectos seleccionados. */
export interface SelectedProjectsContent {
  projects: SelectedProject[];
}

/** Paso verificable de la forma de trabajo. */
export interface ApproachStep {
  description: string;
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
  featuredProject: FeaturedProjectContent;
  footerNote: string;
  footerRights: string;
  hero: HeroContent;
  languageLabel: string;
  navigation: NavigationItem[];
  navigationLabel: string;
  selectedProjects: SelectedProjectsContent;
}

/** Contenido completo indexado por cada idioma público soportado. */
export type LocalizedSiteContent = Record<Locale, SiteContent>;
