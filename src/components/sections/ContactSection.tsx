import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/content/site";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr/ArrowSquareOut";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr/MapPin";
import type { ContactContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface ContactSectionProps {
  content: ContactContent;
}

const contactIcons = {
  email: EnvelopeSimpleIcon,
  github: GithubLogoIcon,
  linkedin: LinkedinLogoIcon,
  location: MapPinIcon,
};

type ContactIconName = keyof typeof contactIcons;

/** Cierra la portada con ubicación y canales profesionales verificables. */
export function ContactSection({ content }: ContactSectionProps) {
  const links: Array<{
    href: string;
    icon: ContactIconName;
    label: string;
    value: string;
  }> = [
    {
      href: `mailto:${CONTACT_EMAIL}`,
      icon: "email",
      label: content.emailLabel,
      value: CONTACT_EMAIL,
    },
    {
      href: "https://www.google.com/maps/search/?api=1&query=Tres+Arroyos%2C+Buenos+Aires%2C+Argentina",
      icon: "location",
      label: content.locationLabel,
      value: "Tres Arroyos, Buenos Aires, Argentina",
    },
    {
      href: GITHUB_URL,
      icon: "github",
      label: "GitHub",
      value: "github.com/Lucas-Epherra",
    },
    {
      href: LINKEDIN_URL,
      icon: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/lucas-epherra",
    },
  ];

  return (
    <section id="contact" className="scroll-mt-8 bg-surface py-12 sm:py-14">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="border-l-2 border-accent pl-7 lg:col-span-7 lg:pl-12">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.03] tracking-[-0.035em] sm:text-5xl">
            {content.title}
          </h2>
        </div>

        <ul className="border-t border-line lg:col-span-5">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            const ContactIcon = contactIcons[link.icon];
            const DirectionIcon = external ? ArrowSquareOutIcon : ArrowRightIcon;

            return (
              <li className="border-b border-line" key={link.href}>
                <a
                  aria-label={`${link.label}: ${link.value}`}
                  className="group grid min-h-16 grid-cols-[2rem_minmax(0,1fr)_1rem] items-center gap-4 py-3 transition-colors hover:text-accent"
                  href={link.href}
                  rel={external ? "noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                >
                  <span className="flex size-8 items-center justify-center border border-line text-accent transition-colors group-hover:border-accent/50">
                    <ContactIcon aria-hidden="true" className="size-[1.125rem]" weight="regular" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted">
                      {link.label}
                    </span>
                    <span className="mt-1 block truncate text-sm text-foreground/80 transition-colors group-hover:text-accent">
                      {link.value}
                    </span>
                  </span>
                  <DirectionIcon
                    aria-hidden="true"
                    className="size-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    weight="regular"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
