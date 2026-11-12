import type { CaseStudyImage, CaseStudyUiContent } from "@/types/case-study";

import { CaseStudyGalleryItem } from "./CaseStudyGalleryItem";

interface CaseStudyGalleryProps {
  description: string;
  images: CaseStudyImage[];
  title: string;
  ui: CaseStudyUiContent;
}

/** Organiza la evidencia visual del producto en una grilla responsive. */
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
      className="scroll-mt-6 border-t border-line py-14 sm:py-20"
      id="gallery"
    >
      <h2
        className="max-w-[22ch] font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]"
        id="case-study-gallery-title"
      >
        {title}
      </h2>
      <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-muted">{description}</p>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12">
        {images.map((image) => (
          <CaseStudyGalleryItem
            closeLabel={ui.closeImageLabel}
            image={image}
            key={image.src}
            viewLabel={ui.viewImageLabel}
          />
        ))}
      </div>
    </section>
  );
}
