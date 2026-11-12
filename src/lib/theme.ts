/** Temas de color disponibles en el sitio. */
export type Theme = "dark" | "light";

/** Clave de localStorage donde se guarda el tema elegido. */
export const THEME_STORAGE_KEY = "theme";

/**
 * Script que corre antes del primer pintado: aplica el tema guardado o, si no hay,
 * el del sistema, para que la página no parpadee al cargar en modo oscuro.
 */
export const THEME_INIT_SCRIPT = `(function(){var d=document.documentElement,t;try{t=localStorage.getItem("${THEME_STORAGE_KEY}")}catch(e){}if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.dataset.theme=t})();`;
