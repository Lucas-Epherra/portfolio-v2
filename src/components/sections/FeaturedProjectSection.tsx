import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr/ArrowSquareOut";

import type { FeaturedProjectContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface FeaturedProjectSectionProps {
  content: FeaturedProjectContent;
}

/** Presenta MiTaller360 como el proyecto principal mediante una captura real y datos verificables. */
export function FeaturedProjectSection({
  content,
}: FeaturedProjectSectionProps) {
  return (
    <section
      id="work"
      className="relative z-[1] scroll-mt-8 bg-surface pb-6 before:absolute before:inset-x-0 before:top-0 before:h-24 before:bg-dark before:content-['']"
    >
      <Container className="relative pt-10 md:pt-14">
        <article className="group/project grid overflow-hidden border border-line bg-surface shadow-portfolio xl:grid-cols-[1.8fr_0.8fr]">
          <div className="order-2 flex items-center overflow-hidden border-t border-line bg-[#e8edf0] md:order-1 md:border-b md:border-t-0 xl:border-b-0 xl:border-r">
            <Image
              alt={content.imageAlt}
              className="h-auto w-full transition-transform duration-500 ease-out group-hover/project:scale-[1.012]"
              height={643}
              sizes="(max-width: 1023px) 100vw, 70vw"
              src={content.image}
              width={1028}
            />
          </div>

          <div className="order-1 flex flex-col justify-center p-7 sm:p-10 md:order-2 xl:p-12">
            <p className="font-serif text-3xl tracking-[-0.025em]">
              <span className="text-accent">{content.number} — </span>
              {content.title}
            </p>
            <p className="mt-2 text-sm text-muted">{content.category}</p>

            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-muted">
              {content.highlights.map((highlight) => (
                <li className="flex items-center gap-2" key={highlight}>
                  <span className="size-1 bg-accent" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>

            <span className="mt-6 h-px w-12 bg-accent" aria-hidden="true" />

            <dl className="mt-7 border-b border-line pb-7">
              <dt className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted">
                {content.roleLabel}
              </dt>
              <dd className="mt-2 text-sm font-semibold text-accent">{content.role}</dd>
            </dl>

            <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-xs leading-5 text-muted">
              {content.stack.map((technology) => (
                <li className="after:ml-2 after:content-['·'] last:after:content-none" key={technology}>
                  {technology}
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-3 text-sm leading-6 text-muted">
              {content.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
              <Link
                className="group/case inline-flex min-h-10 items-center gap-3 bg-dark px-4 text-xs font-bold text-surface transition-colors duration-300 hover:bg-accent hover:text-dark"
                href={content.caseStudy.href}
              >
                {content.caseStudy.label}
                <ArrowRightIcon
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover/case:translate-x-1"
                  weight="regular"
                />
              </Link>
              {content.links.map((link) => (
                <a
                  className="group/link inline-flex min-h-10 items-center gap-2 text-xs font-bold text-foreground underline decoration-line underline-offset-6 transition-colors hover:text-accent"
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
        </article>
      </Container>
    </section>
  );
}
