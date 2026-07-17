interface ArrowIconProps {
  className?: string;
}

/** Flecha direccional decorativa que hereda el color del enlace contenedor. */
export function ArrowIcon({ className = "" }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M4 10h11m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
