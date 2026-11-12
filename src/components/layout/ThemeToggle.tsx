"use client";

import { useEffect, useSyncExternalStore } from "react";
import { MoonIcon } from "@phosphor-icons/react/dist/ssr/Moon";
import { SunIcon } from "@phosphor-icons/react/dist/ssr/Sun";

import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

interface ThemeToggleProps {
  label: string;
}

const darkQuery = "(prefers-color-scheme: dark)";

/** Avisa a React cuando cambia el atributo data-theme del documento. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });

  return () => observer.disconnect();
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function readStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

/**
 * Alterna entre modo claro y oscuro. El tema inicial lo fija el script del layout;
 * mientras la persona no elija uno, el sitio sigue la preferencia del sistema.
 */
export function ThemeToggle({ label }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as const);

  useEffect(() => {
    const media = window.matchMedia(darkQuery);

    function followSystem() {
      if (!readStoredTheme()) {
        document.documentElement.dataset.theme = media.matches ? "dark" : "light";
      }
    }

    media.addEventListener("change", followSystem);

    return () => media.removeEventListener("change", followSystem);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Sin almacenamiento el cambio vale solo para esta visita.
    }
  }

  return (
    <button
      aria-label={label}
      aria-pressed={theme === "dark"}
      className="inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-chip hover:text-ink"
      onClick={toggleTheme}
      title={label}
      type="button"
    >
      <MoonIcon aria-hidden="true" className="theme-icon-to-dark size-[1.125rem]" weight="bold" />
      <SunIcon aria-hidden="true" className="theme-icon-to-light size-[1.125rem]" weight="bold" />
    </button>
  );
}
