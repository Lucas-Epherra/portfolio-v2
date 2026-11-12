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

/** Resume las áreas de construcción como capas de un mismo producto. */
export function ApproachSection({ content }: ApproachSectionProps) {
  return (
    <section aria-labelledby="capabilities-title" className="scroll-mt-4 border-t border-line" id="capabilities">
      <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2
            className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl"
            id="capabilities-title"
          >
            {content.title}
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted">
            {content.introduction}
          </p>
        </div>

        <ul className="lg:col-span-7">
          {content.steps.map((step) => {
            const StepIcon = approachIcons[step.icon];

            return (
              <li
                className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-4 gap-y-1 border-t border-line py-6 last:border-b sm:grid-cols-[1.5rem_minmax(0,0.9fr)_minmax(0,1.3fr)] sm:gap-x-6"
                key={step.number}
              >
                <StepIcon
                  aria-hidden="true"
                  className="row-span-2 mt-1 size-6 sm:row-span-1 sm:mt-0 sm:self-center"
                  weight="regular"
                />
                <h3 className="self-center font-display text-xl font-semibold tracking-[-0.015em]">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted sm:self-center">{step.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
