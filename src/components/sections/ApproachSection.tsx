import { BrowserIcon } from "@phosphor-icons/react/dist/ssr/Browser";
import { DatabaseIcon } from "@phosphor-icons/react/dist/ssr/Database";
import { PlugsConnectedIcon } from "@phosphor-icons/react/dist/ssr/PlugsConnected";
import { StackIcon } from "@phosphor-icons/react/dist/ssr/Stack";

import type { ApproachContent, ApproachIconName } from "@/types/site-content";

import { Container } from "../ui/Container";

interface ApproachSectionProps {
  content: ApproachContent;
}

const approachIcons = {
  backend: PlugsConnectedIcon,
  data: DatabaseIcon,
  frontend: BrowserIcon,
  product: StackIcon,
} satisfies Record<ApproachIconName, typeof StackIcon>;

/** Resume las áreas de construcción de producto mediante capacidades concretas. */
export function ApproachSection({ content }: ApproachSectionProps) {
  return (
    <section id="capabilities" className="scroll-mt-8 bg-dark py-14 text-surface sm:py-16">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h2 className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 max-w-xs text-lg leading-7 text-surface/55">
            {content.introduction}
          </p>
          <span className="mt-8 block h-px w-28 bg-accent-on-dark" aria-hidden="true" />
        </div>

        <ol className="border-t border-surface/15 lg:col-span-8">
          {content.steps.map((step) => {
            const StepIcon = approachIcons[step.icon];

            return (
              <li
                className="grid grid-cols-[2rem_2.25rem_1fr] items-start gap-x-3 gap-y-2 border-b border-surface/15 py-5 sm:grid-cols-[3rem_2.5rem_0.8fr_1.4fr]"
                key={step.number}
              >
                <span className="pt-2 text-xs font-bold text-accent-on-dark">{step.number}</span>
                <span className="flex size-8 items-center justify-center border border-surface/15 text-accent-on-dark">
                  <StepIcon aria-hidden="true" className="size-[1.125rem]" weight="regular" />
                </span>
                <h3 className="pt-1.5 text-sm font-semibold text-surface/85">{step.title}</h3>
                <p className="col-span-2 col-start-2 text-sm leading-6 text-surface/60 sm:col-span-1 sm:col-start-auto sm:pt-1">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
