import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

import type { CaseStudyContent } from "@/types/case-study";
import type { Locale } from "@/types/locale";
import type { HeroContent, WorkContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface HeroSectionProps {
  content: HeroContent;
  locale: Locale;
  projects: CaseStudyContent[];
  work: WorkContent;
}

interface ProjectCardProps {
  featured: boolean;
  locale: Locale;
  project: CaseStudyContent;
  work: WorkContent;
}

/** Divide el título para envolver el fragmento destacado con el marcador lima. */
function renderTitle(title: string, highlight: string) {
  const start = title.indexOf(highlight);

  if (start === -1) {
    return title;
  }

  return (
    <>
      {title.slice(0, start)}
      <mark className="highlight">{highlight}</mark>
      {title.slice(start + highlight.length)}
    </>
  );
}

/**
 * Ficha de un proyecto con captura, estado, aporte personal y enlaces. La versión
 * destacada suma rol y stack; la compacta se queda con lo esencial.
 */
function ProjectCard({ featured, locale, project, work }: ProjectCardProps) {
  const findFact = (label: string) =>
    project.facts.find((fact) => fact.label === label)?.value;
  const role = findFact(work.roleLabel);
  const status = findFact(work.statusLabel);

  return (
    <article
      className={`grid h-full gap-3 rounded-[1.375rem] border border-line bg-panel p-3 shadow-panel ${
        featured ? "lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start lg:gap-4" : "content-start"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-[0.875rem] border border-line bg-chip ${
          featured ? "aspect-[16/8.4]" : "aspect-[16/9]"
        }`}
      >
        <Image
          alt={project.heroAlt}
          className="object-cover object-top"
          fill
          priority={featured}
          sizes={
            featured
              ? "(max-width: 1023px) calc(100vw - 3rem), (max-width: 1440px) 60vw, 900px"
              : "(max-width: 767px) calc(100vw - 3rem), (max-width: 1440px) 45vw, 650px"
          }
          src={project.heroImage}
        />
      </div>

      <div className={`flex h-full flex-col px-3 pb-2 pt-4 ${featured ? "lg:px-4" : ""}`}>
        {status ? (
          <p className="inline-flex w-max items-center gap-2 rounded-full bg-lime px-3 py-1 text-[0.8125rem] font-semibold text-on-lime">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-on-lime" />
            {status}
          </p>
        ) : null}
        <h3
          className={`mt-3 font-display font-semibold leading-none tracking-[-0.03em] ${
            featured ? "text-[2rem]" : "text-[1.625rem]"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-[0.9375rem] text-muted">{project.category}</p>

        <div className="mt-4 rounded-xl bg-ground px-4 py-3">
          <p className="text-[0.8125rem] font-semibold text-muted">{work.contributionLabel}</p>
          <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink">{project.contribution}</p>
        </div>

        {featured ? (
          <dl className="mt-4 border-t border-line text-sm">
            {role ? (
              <div className="flex justify-between gap-4 border-b border-line py-2.5">
                <dt className="text-muted">{work.roleLabel}</dt>
                <dd className="text-right font-medium">{role}</dd>
              </div>
            ) : null}
            <div className="flex justify-between gap-4 border-b border-line py-2.5">
              <dt className="text-muted">{work.stackLabel}</dt>
              <dd className="text-right font-medium text-balance">
                {project.stack.slice(0, 4).join(" · ")}
              </dd>
            </div>
          </dl>
        ) : null}

        <div className="mt-auto flex flex-col gap-2 pt-5">
          <Link
            aria-label={`${work.caseStudyLabel}: ${project.title}`}
            className="group inline-flex min-h-12 items-center justify-between gap-3 rounded-xl bg-ink px-4 text-[0.9375rem] font-semibold text-ground transition-colors duration-200 hover:bg-ink-hover"
            href={`/${locale}/projects/${project.slug}`}
          >
            {work.caseStudyLabel}
            <ArrowRightIcon
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              weight="bold"
            />
          </Link>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {project.actions.map((action) => (
              <li key={action.href}>
                <a
                  aria-label={`${action.label}: ${project.title}`}
                  className="group inline-flex min-h-10 items-center gap-1 text-sm font-semibold underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
                  href={action.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {action.label}
                  <ArrowUpRightIcon
                    aria-hidden="true"
                    className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    weight="bold"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

/**
 * Abre la portada con el titular y pone el trabajo real en escena: el primer
 * proyecto se muestra destacado y los demás quedan visibles en fichas compactas.
 */
export function HeroSection({ content, locale, projects, work }: HeroSectionProps) {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <>
      <section aria-labelledby="hero-title" id="top">
        <Container className="pt-8 sm:pt-12 lg:pt-10">
          <h1
            className="max-w-[17ch] font-display text-[2.625rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:max-w-[68rem] lg:text-[4.5rem]"
            id="hero-title"
          >
            {renderTitle(content.title, content.titleHighlight)}
          </h1>
          <div className="mt-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted">{content.description}</p>
            <p className="mt-3 flex flex-wrap items-center gap-x-2 text-sm font-medium text-ink">
              <span>{content.role}</span>
              <span aria-hidden="true" className="text-line-strong">/</span>
              <span>{content.location.join(" · ")}</span>
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="work-title" className="scroll-mt-4" id="work">
        <Container className="pb-16 pt-8 sm:pb-24">
          <h2 className="sr-only" id="work-title">
            {work.title}
          </h2>
          {featuredProject ? (
            <ProjectCard featured locale={locale} project={featuredProject} work={work} />
          ) : null}
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {otherProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard featured={false} locale={locale} project={project} work={work} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
