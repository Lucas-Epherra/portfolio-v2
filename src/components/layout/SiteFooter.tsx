import { Container } from "../ui/Container";

interface SiteFooterProps {
  note: string;
  rights: string;
}

/** Cierra la página con autoría y referencia al stack del portfolio. */
export function SiteFooter({ note, rights }: SiteFooterProps) {
  return (
    <footer>
      <Container className="flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Lucas Epherra. {rights}</p>
        <p>{note}</p>
      </Container>
    </footer>
  );
}
