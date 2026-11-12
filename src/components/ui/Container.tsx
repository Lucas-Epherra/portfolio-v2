interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/** Limita el ancho de lectura y mantiene márgenes responsive consistentes. */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[90rem] px-4 sm:px-8 lg:px-[4.5rem] ${className}`}>
      {children}
    </div>
  );
}
