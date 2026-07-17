import { Container } from "../ui/Container";

interface SiteFooterProps {
  note: string;
  rights: string;
}

/** Cierra la página con autoría y referencia al stack del portfolio. */
export function SiteFooter({ note, rights }: SiteFooterProps) {
  return (
    <footer className="border-t border-surface/15 bg-dark py-7 text-surface/55">
      <Container className="flex flex-col gap-3 text-xs leading-5 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Lucas Epherra. {rights}</p>
        <p>{note}</p>
      </Container>
    </footer>
  );
}
