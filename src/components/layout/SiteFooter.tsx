import { GITHUB_URL, LINKEDIN_URL } from "@/content/site";

import { Container } from "../ui/Container";

interface SiteFooterProps {
  note: string;
}

/** Cierra la portada con autoría y enlaces profesionales verificables. */
export function SiteFooter({ note }: SiteFooterProps) {
  return (
    <footer className="border-t border-line bg-background py-8">
      <Container className="flex flex-col gap-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Lucas Epherra. {note}</p>
        <ul className="flex gap-5 font-semibold text-foreground">
          <li>
            <a className="hover:text-accent" href={GITHUB_URL} rel="noreferrer" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a className="hover:text-accent" href={LINKEDIN_URL} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
