import type { Locale } from "@/types/locale";

/** Enlace interno utilizado por la navegación principal. */
export interface NavigationItem {
  href: `#${string}`;
  label: string;
}

/** Acción principal o secundaria de la portada. */
export interface CallToAction {
  href: `#${string}` | `mailto:${string}`;
  label: string;
}

/** Contenido localizado del hero principal. */
export interface HeroContent {
  availability: string;
  description: string;
  eyebrow: string;
  primaryAction: CallToAction;
  secondaryAction: CallToAction;
  titleEnd: string;
  titleFocus: string;
  titleStart: string;
}

/** Etiqueta y valor verificable asociado a un proyecto. */
export interface ProjectFact {
  label: string;
  value: string;
}

/** Contenido del proyecto insignia presentado en la portada. */
export interface FeaturedProjectContent {
  capabilities: string[];
  eyebrow: string;
  facts: ProjectFact[];
  panelLabel: string;
  panelTitle: string;
  stack: string[];
  summary: string;
  title: string;
  workFlow: string[];
}

/** Capacidad profesional explicada mediante una responsabilidad concreta. */
export interface CapabilityItem {
  description: string;
  title: string;
}

/** Presentación profesional y alcance técnico del perfil. */
export interface AboutContent {
  capabilities: CapabilityItem[];
  eyebrow: string;
  paragraphs: string[];
  technologies: string[];
  technologiesLabel: string;
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
  stack: string[];
  summary: string;
  title: string;
}

/** Grupo localizado de proyectos seleccionados. */
export interface SelectedProjectsContent {
  eyebrow: string;
  introduction: string;
  projects: SelectedProject[];
  title: string;
}

/** Paso verificable de la forma de trabajo. */
export interface ApproachStep {
  description: string;
  number: string;
  title: string;
}

/** Forma de trabajo y servicios que puede ofrecer Lucas. */
export interface ApproachContent {
  eyebrow: string;
  services: string[];
  servicesLabel: string;
  steps: ApproachStep[];
  title: string;
}

/** Cierre de conversión de la portada. */
export interface ContactContent {
  eyebrow: string;
  emailLabel: string;
  text: string;
  title: string;
}

/** Contenido localizado requerido por la primera versión de la portada. */
export interface SiteContent {
  about: AboutContent;
  approach: ApproachContent;
  contact: ContactContent;
  contactLabel: string;
  description: string;
  featuredProject: FeaturedProjectContent;
  footerNote: string;
  hero: HeroContent;
  languageLabel: string;
  navigation: NavigationItem[];
  navigationLabel: string;
  selectedProjects: SelectedProjectsContent;
}

/** Contenido completo indexado por cada idioma público soportado. */
export type LocalizedSiteContent = Record<Locale, SiteContent>;
