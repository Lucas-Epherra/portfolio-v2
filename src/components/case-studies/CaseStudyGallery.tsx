import Image from "next/image";

import type { CaseStudyImage } from "@/types/case-study";

import { Container } from "../ui/Container";

interface CaseStudyGalleryProps {
  images: CaseStudyImage[];
  title: string;
}

/** Muestra evidencia visual adicional sin alterar ni exponer datos sensibles. */
export function CaseStudyGallery({ images, title }: CaseStudyGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="bg-dark py-14 text-surface sm:py-16">
      <Container>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent">
          {title}
        </p>

        <div className="mt-8 grid gap-6">
          {images.map((image) => (
            <figure
              className="overflow-hidden border border-surface/15 bg-surface text-foreground"
              key={image.src}
            >
              <Image
                alt={image.alt}
                className="h-auto w-full"
                height={image.height}
                sizes="(max-width: 1536px) 100vw, 1440px"
                src={image.src}
                width={image.width}
              />
              <figcaption className="border-t border-line px-5 py-4 text-xs leading-5 text-muted sm:px-7">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
