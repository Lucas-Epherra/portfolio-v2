import Image from "next/image";

import type { SelectedProjectsContent } from "@/types/site-content";

import { ArrowIcon } from "../ui/ArrowIcon";
import { Container } from "../ui/Container";

interface SelectedProjectsSectionProps {
  content: SelectedProjectsContent;
}

/** Presenta proyectos secundarios como casos editoriales, sin recurrir a una cuadrícula de tarjetas. */
export function SelectedProjectsSection({
  content,
}: SelectedProjectsSectionProps) {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <div className="grid gap-7 border-b border-line pb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-7 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent">
              {content.eyebrow}
            </p>
            <h2 className="max-w-3xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-lg self-end text-base leading-7 text-muted lg:col-span-4 lg:col-start-9">
            {content.introduction}
          </p>
        </div>

        <div className="divide-y divide-line">
          {content.projects.map((project, index) => (
            <article className="grid gap-8 py-14 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-10" key={project.title}>
              <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="group relative aspect-[16/10] overflow-hidden rounded-portfolio border border-line bg-background">
                  <Image
                    alt={project.alt}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                    fill
                    sizes="(max-width: 1023px) 100vw, 58vw"
                    src={project.image}
                  />
                </div>
              </div>

              <div className={`lg:col-span-4 ${index % 2 === 1 ? "lg:order-1" : "lg:col-start-9"}`}>
                <div className="flex items-center justify-between gap-5 border-b border-line pb-4">
                  <span className="font-serif text-2xl text-accent">{project.number}</span>
                  <span className="text-right text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-7 font-serif text-4xl tracking-[-0.035em] sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-6 text-sm leading-7 text-muted">{project.summary}</p>
                <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-foreground/75">
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-5">
                  {project.links.map((link) => (
                    <a
                      className="group inline-flex items-center gap-2 text-sm font-bold underline decoration-line underline-offset-8 transition-colors hover:text-accent"
                      href={link.href}
                      key={link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                      <ArrowIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
