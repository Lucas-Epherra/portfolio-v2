import type { CaseStudyImage, CaseStudyUiContent } from "@/types/case-study";

import { Container } from "../ui/Container";
import { CaseStudyGalleryItem } from "./CaseStudyGalleryItem";

interface CaseStudyGalleryProps {
  description: string;
  images: CaseStudyImage[];
  title: string;
  ui: CaseStudyUiContent;
}

/** Organiza evidencia visual del producto en una composición editorial responsive. */
export function CaseStudyGallery({
  description,
  images,
  title,
  ui,
}: CaseStudyGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="case-study-gallery-title"
      className="scroll-mt-8 bg-dark py-14 text-surface sm:py-16 lg:py-20"
      id="gallery"
    >
      <Container>
        <header className="grid gap-7 border-b border-surface/15 pb-9 lg:grid-cols-12 lg:gap-12">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent-on-dark lg:col-span-4">
            {ui.galleryLabel}
          </p>
          <div className="lg:col-span-8">
            <h2
              className="max-w-3xl font-serif text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl"
              id="case-study-gallery-title"
            >
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-surface/60 sm:text-base sm:leading-7">
              {description}
            </p>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {images.map((image) => (
            <CaseStudyGalleryItem
              closeLabel={ui.closeImageLabel}
              image={image}
              key={image.src}
              viewLabel={ui.viewImageLabel}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
