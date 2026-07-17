import Image from "next/image";

import type { SelectedProjectsContent } from "@/types/site-content";

import { ArrowIcon } from "../ui/ArrowIcon";
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
      <Container className="grid gap-8">
        {content.projects.map((project) => (
          <article
            className="grid overflow-hidden border border-line bg-surface lg:grid-cols-[0.78fr_1.75fr]"
            key={project.title}
          >
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-9">
              <p className="font-serif text-3xl tracking-[-0.025em]">
                <span className="text-accent">{project.number} — </span>
                {project.title}
              </p>
              <p className="mt-2 text-sm text-muted">{project.category}</p>
              <span className="mt-6 h-px w-12 bg-accent" aria-hidden="true" />
              <p className="mt-6 text-sm leading-6 text-muted">{project.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-xs leading-5 text-muted">
                {project.stack.map((technology) => (
                  <li className="after:ml-2 after:content-['·'] last:after:content-none" key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {project.links.map((link) => (
                  <a
                    className="group inline-flex items-center gap-2 text-xs font-bold text-foreground underline decoration-line underline-offset-6 hover:text-accent"
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                    <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative min-h-72 border-t border-line bg-background sm:min-h-96 lg:min-h-[28rem] lg:border-l lg:border-t-0">
              <Image
                alt={project.alt}
                className="object-cover object-top"
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
