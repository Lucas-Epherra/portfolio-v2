"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { ArrowsOutSimpleIcon } from "@phosphor-icons/react/dist/csr/ArrowsOutSimple";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";

import type { CaseStudyImage } from "@/types/case-study";

interface CaseStudyGalleryItemProps {
  closeLabel: string;
  image: CaseStudyImage;
  viewLabel: string;
}

const layoutClasses = {
  compact: "lg:col-span-4",
  featured: "lg:col-span-12",
  portrait: "lg:col-span-4 lg:row-span-2",
  wide: "lg:col-span-8",
} satisfies Record<CaseStudyImage["layout"], string>;

const layoutSizes = {
  compact: "(max-width: 1023px) 100vw, 34vw",
  featured:
    "(max-width: 1023px) 100vw, (max-width: 1535px) calc(100vw - 6rem), 1344px",
  portrait: "(max-width: 1023px) 100vw, 33vw",
  wide: "(max-width: 1023px) 100vw, 66vw",
} satisfies Record<CaseStudyImage["layout"], string>;

/** Presenta una captura y la amplía en un diálogo nativo accesible. */
export function CaseStudyGalleryItem({
  closeLabel,
  image,
  viewLabel,
}: CaseStudyGalleryItemProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isPortrait = image.layout === "portrait";

  function openImage() {
    dialogRef.current?.showModal();
  }

  function closeImage() {
    dialogRef.current?.close();
  }

  function closeFromBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeImage();
    }
  }

  return (
    <figure
      className={`flex h-full flex-col overflow-hidden border border-surface/15 bg-surface text-foreground ${layoutClasses[image.layout]}`}
    >
      <button
        aria-label={`${viewLabel}: ${image.caption}`}
        className="group relative flex flex-1 cursor-zoom-in items-center justify-center overflow-hidden bg-background text-left"
        onClick={openImage}
        type="button"
      >
        <Image
          alt={image.alt}
          className={
            isPortrait
              ? "h-[36rem] w-full object-contain p-5 sm:h-[44rem] sm:p-8 lg:h-full lg:min-h-[42rem]"
              : "h-auto w-full"
          }
          height={image.height}
          sizes={layoutSizes[image.layout]}
          src={image.src}
          width={image.width}
        />
        <span className="absolute right-4 top-4 grid size-10 place-items-center border border-surface/20 bg-dark/90 text-surface transition-colors duration-300 group-hover:bg-accent group-hover:text-dark sm:right-5 sm:top-5">
          <ArrowsOutSimpleIcon aria-hidden="true" className="size-4" weight="regular" />
        </span>
      </button>

      <figcaption className="border-t border-line px-5 py-4 text-xs leading-5 text-muted sm:px-6">
        {image.caption}
      </figcaption>

      <dialog
        aria-label={image.caption}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[96rem] overflow-hidden border border-surface/20 bg-dark p-0 text-surface backdrop:bg-dark/90"
        onClick={closeFromBackdrop}
        ref={dialogRef}
      >
        <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
          <header className="flex items-center justify-between gap-6 border-b border-surface/15 px-4 py-3 sm:px-6">
            <p className="text-xs leading-5 text-surface/65">{image.caption}</p>
            <button
              aria-label={closeLabel}
              className="grid size-10 shrink-0 place-items-center border border-surface/20 text-surface transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-dark"
              onClick={closeImage}
              type="button"
            >
              <XIcon aria-hidden="true" className="size-4" weight="regular" />
            </button>
          </header>
          <div className="min-h-0 overflow-auto bg-background p-2 sm:p-4">
            <Image
              alt={image.alt}
              className="mx-auto h-auto max-h-[calc(100dvh-7rem)] w-auto max-w-full object-contain"
              height={image.height}
              sizes="95vw"
              src={image.src}
              width={image.width}
            />
          </div>
        </div>
      </dialog>
    </figure>
  );
}
