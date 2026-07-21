import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr/ArrowSquareOut";

import type { SelectedProjectsContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface SelectedProjectsSectionProps {
  content: SelectedProjectsContent;
}

/** Presenta proyectos secundarios en franjas compactas con jerarquía editorial. */
export function SelectedProjectsSection({
  content,
}: SelectedProjectsSectionProps) {
  return (
    <section className="bg-surface py-6 sm:py-10">
      <Container className="grid gap-6">
        {content.projects.map((project) => (
          <article
            className="group/project grid overflow-hidden border border-line bg-surface transition-colors duration-300 hover:border-accent/45 lg:grid-cols-[0.78fr_1.75fr]"
            key={project.title}
          >
            <div className="flex flex-col justify-center p-7 lg:p-8">
              <p className="font-serif text-3xl tracking-[-0.025em]">
                <span className="text-accent">{project.number} — </span>
                {project.title}
              </p>
              <p className="mt-2 text-sm text-muted">{project.category}</p>
              <span className="mt-6 h-px w-12 bg-accent" aria-hidden="true" />
              <p className="mt-6 text-sm font-semibold text-accent">{project.role}</p>
              <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-xs leading-5 text-muted">
                {project.stack.map((technology) => (
                  <li className="after:ml-2 after:content-['·'] last:after:content-none" key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link
                  aria-label={`${project.caseStudy.label}: ${project.title}`}
                  className="group/case inline-flex items-center gap-2 text-xs font-bold text-foreground underline decoration-line underline-offset-6 transition-colors hover:text-accent"
                  href={project.caseStudy.href}
                >
                  {project.caseStudy.label}
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover/case:translate-x-1"
                    weight="regular"
                  />
                </Link>
                {project.links.map((link) => (
                  <a
                    className="group/link inline-flex items-center gap-2 text-xs font-bold text-foreground underline decoration-line underline-offset-6 transition-colors hover:text-accent"
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                    <ArrowSquareOutIcon
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      weight="regular"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative min-h-72 overflow-hidden border-t border-line bg-background lg:min-h-80 lg:border-l lg:border-t-0">
              <Image
                alt={project.alt}
                className="object-cover object-top transition-transform duration-500 ease-out group-hover/project:scale-[1.012]"
                fill
                sizes="(max-width: 1023px) 100vw, 70vw"
                src={project.image}
              />
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
