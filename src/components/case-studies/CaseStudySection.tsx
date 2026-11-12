import type { CaseStudySectionContent } from "@/types/case-study";

interface CaseStudySectionProps {
  content: CaseStudySectionContent;
}

/** Renderiza una etapa del caso con párrafos y una lista verificable. */
export function CaseStudySection({ content }: CaseStudySectionProps) {
  return (
    <section
      aria-labelledby={`${content.id}-title`}
      className="scroll-mt-6 border-t border-line py-14 first:border-t-0 first:pt-0 sm:py-20"
      id={content.id}
    >
      <h2
        className="max-w-[22ch] font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]"
        id={`${content.id}-title`}
      >
        {content.title}
      </h2>

      <div className="mt-6 grid max-w-[65ch] gap-5 text-lg leading-relaxed text-ink/80">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {content.bullets ? (
        <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {content.bullets.map((bullet) => (
            <li className="flex gap-3 bg-panel px-5 py-4 leading-relaxed md:last:odd:col-span-2" key={bullet}>
              <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-[3px] bg-lime-strong" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
