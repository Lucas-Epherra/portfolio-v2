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
      className={`flex h-full flex-col rounded-[1.375rem] border border-line bg-panel p-2.5 shadow-panel ${layoutClasses[image.layout]}`}
    >
      <button
        aria-label={`${viewLabel}: ${image.caption}`}
        className="group relative flex flex-1 cursor-zoom-in items-center justify-center overflow-hidden rounded-[0.875rem] border border-line bg-chip text-left"
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
        <span className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-panel text-ink shadow-panel transition-colors duration-200 group-hover:bg-lime group-hover:text-on-lime">
          <ArrowsOutSimpleIcon aria-hidden="true" className="size-4" weight="regular" />
        </span>
      </button>

      <figcaption className="px-2.5 pb-1.5 pt-3 text-sm leading-relaxed text-muted">
        {image.caption}
      </figcaption>

      <dialog
        aria-label={image.caption}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[96rem] overflow-hidden rounded-[1.375rem] border border-line bg-panel p-0 text-ink shadow-panel backdrop:bg-scrim"
        onClick={closeFromBackdrop}
        ref={dialogRef}
      >
        <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
          <header className="flex items-center justify-between gap-6 border-b border-line px-4 py-3 sm:px-5">
            <p className="text-sm leading-relaxed text-muted">{image.caption}</p>
            <button
              aria-label={closeLabel}
              className="grid size-10 shrink-0 place-items-center rounded-full bg-chip text-ink transition-colors duration-200 hover:bg-lime hover:text-on-lime"
              onClick={closeImage}
              type="button"
            >
              <XIcon aria-hidden="true" className="size-4" weight="regular" />
            </button>
          </header>
          <div className="min-h-0 overflow-auto bg-ground p-2 sm:p-4">
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
