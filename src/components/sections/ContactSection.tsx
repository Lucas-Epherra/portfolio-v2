import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_URL,
} from "@/content/site";
import type { ContactContent } from "@/types/site-content";

import { Container } from "../ui/Container";

interface ContactSectionProps {
  content: ContactContent;
}

/** Cierra la portada con canales de contacto y perfiles profesionales reales. */
export function ContactSection({ content }: ContactSectionProps) {
  const links = [
    { href: `mailto:${CONTACT_EMAIL}`, label: content.emailLabel, value: CONTACT_EMAIL },
    { href: GITHUB_URL, label: "GitHub", value: "github.com/Lucas-Epherra" },
    { href: LINKEDIN_URL, label: "LinkedIn", value: "linkedin.com/in/lucas-epherra" },
    { href: SITE_URL, label: content.websiteLabel, value: "lucasepherra.com.ar" },
  ];

  return (
    <section id="contact" className="scroll-mt-8 bg-surface py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="border-l-2 border-accent pl-7 lg:col-span-7 lg:pl-12">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-7 max-w-3xl font-serif text-5xl leading-[1.03] tracking-[-0.035em] sm:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-6 text-muted">{content.text}</p>
        </div>

        <ul className="border-t border-line lg:col-span-5">
          {links.map((link) => {
            const external = link.href.startsWith("http");

            return (
              <li className="border-b border-line" key={link.href}>
                <a
                  className="grid min-h-13 grid-cols-[5rem_1fr] items-center gap-4 text-sm transition-colors hover:text-accent"
                  href={link.href}
                  rel={external ? "noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                >
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-accent">
                    {link.label}
                  </span>
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
