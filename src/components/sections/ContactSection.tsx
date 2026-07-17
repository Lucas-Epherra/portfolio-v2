import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/content/site";
import type { ContactContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface ContactSectionProps {
  content: ContactContent;
}

type ContactIconName = "email" | "github" | "linkedin" | "location";

interface ContactIconProps {
  name: ContactIconName;
}

/** Representa cada canal de contacto con un icono lineal uniforme y decorativo. */
function ContactIcon({ name }: ContactIconProps) {
  const paths: Record<ContactIconName, React.ReactNode> = {
    email: <path d="M3 5.5h14v10H3v-10Zm.7.5L10 11l6.3-5" />,
    github: (
      <path d="M10 2.5a7.5 7.5 0 0 0-2.37 14.62c.38.07.51-.16.51-.36v-1.48c-2.1.46-2.54-.9-2.54-.9-.34-.87-.84-1.1-.84-1.1-.69-.47.05-.46.05-.46.76.05 1.16.78 1.16.78.68 1.16 1.78.83 2.21.63.07-.49.27-.83.48-1.02-1.67-.19-3.43-.84-3.43-3.71 0-.82.29-1.49.78-2.02-.08-.19-.34-.96.07-1.99 0 0 .64-.2 2.06.77A7.2 7.2 0 0 1 10 6.01a7.2 7.2 0 0 1 1.88.25c1.43-.97 2.06-.77 2.06-.77.41 1.03.15 1.8.07 1.99.49.53.78 1.2.78 2.02 0 2.88-1.76 3.52-3.44 3.71.27.23.51.69.51 1.4v2.15c0 .2.14.43.52.36A7.5 7.5 0 0 0 10 2.5Z" />
    ),
    linkedin: (
      <path d="M5.2 7.3v8.2M5.2 4.5v.1M8.8 15.5v-4.6c0-2.2 3.8-2.4 3.8.1v4.5M8.8 7.3v8.2M2.5 2.5h15v15h-15z" />
    ),
    location: (
      <path d="M10 17s5-4.3 5-9a5 5 0 0 0-10 0c0 4.7 5 9 5 9Zm0-6.8a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="size-5 text-accent"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.4"
    >
      {paths[name]}
    </svg>
  );
}

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

            return (
              <li className="border-b border-line" key={link.href}>
                <a
                  aria-label={`${link.label}: ${link.value}`}
                  className="grid min-h-11 grid-cols-[1.5rem_1fr] items-center gap-4 text-sm transition-colors hover:text-accent"
                  href={link.href}
                  rel={external ? "noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                >
                  <ContactIcon name={link.icon} />
                  <span className="truncate">{link.value}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
