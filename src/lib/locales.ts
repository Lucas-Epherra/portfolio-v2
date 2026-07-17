import type { Locale } from "@/types/locale";

export const DEFAULT_LOCALE: Locale = "en";
export const SUPPORTED_LOCALES = ["en", "es"] as const satisfies readonly Locale[];

/**
 * Comprueba si un segmento dinámico corresponde a un idioma público soportado.
 *
 * @param value - Segmento recibido desde la URL.
 * @returns `true` cuando el valor es un idioma válido.
 */
export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.some((locale) => locale === value);
}
