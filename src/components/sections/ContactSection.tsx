import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/content/site";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr/MapPin";
import type { ContactContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface ContactSectionProps {
  content: ContactContent;
}

const LOCATION_LABEL = "Tres Arroyos, Buenos Aires, Argentina";

/** Cierra la portada con el email como acción principal y canales profesionales. */
export function ContactSection({ content }: ContactSectionProps) {
  const channels = [
    {
      href: GITHUB_URL,
      icon: GithubLogoIcon,
      label: "GitHub",
      value: "github.com/Lucas-Epherra",
    },
    {
      href: LINKEDIN_URL,
      icon: LinkedinLogoIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/lucas-epherra",
    },
    {
      href: "https://www.google.com/maps/search/?api=1&query=Tres+Arroyos%2C+Buenos+Aires%2C+Argentina",
      icon: MapPinIcon,
      label: content.locationLabel,
      value: LOCATION_LABEL,
    },
  ];

  return (
    <section aria-labelledby="contact-title" className="scroll-mt-4" id="contact">
      <Container className="pb-6">
        <div className="rounded-[1.75rem] bg-slab p-6 text-on-slab sm:p-10 lg:p-14">
          <h2
            className="max-w-[18ch] font-display text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl"
            id="contact-title"
          >
            {content.title}
          </h2>

          <a
            aria-label={`${content.emailLabel}: ${CONTACT_EMAIL}`}
            className="group mt-10 inline-flex min-h-14 max-w-full items-center gap-3 rounded-full bg-on-slab px-5 text-base font-semibold text-slab transition-colors duration-200 hover:bg-white sm:px-6 sm:text-lg"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            <EnvelopeSimpleIcon aria-hidden="true" className="size-5 shrink-0" weight="bold" />
            <span className="truncate">{CONTACT_EMAIL}</span>
            <ArrowUpRightIcon
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              weight="bold"
            />
          </a>

          <ul className="mt-12 grid border-t border-on-slab/15 sm:grid-cols-3">
            {channels.map((channel) => {
              const ChannelIcon = channel.icon;

              return (
                <li className="border-b border-on-slab/15 sm:border-b-0" key={channel.href}>
                  <a
                    aria-label={`${channel.label}: ${channel.value}`}
                    className="group flex min-h-16 items-center gap-3 py-4 pr-4 transition-colors"
                    href={channel.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ChannelIcon aria-hidden="true" className="size-5 shrink-0 text-on-slab/70" weight="regular" />
                    <span className="min-w-0">
                      <span className="block text-sm text-on-slab/70">{channel.label}</span>
                      <span className="block truncate text-[0.9375rem] font-medium underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-on-slab">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
