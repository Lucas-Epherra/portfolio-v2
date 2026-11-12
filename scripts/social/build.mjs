// Genera las imágenes Open Graph (ES/EN) y los íconos del sitio con Chrome headless.
// Uso: node scripts/social/build.mjs
// Las imágenes OG se versionan: una versión nueva usa un sufijo nuevo y no sobrescribe la anterior.
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const VERSION = "v3";
const root = resolve(new URL("../..", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"));
const chrome = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const work = mkdtempSync(join(tmpdir(), "social-"));
const asset = (path) => pathToFileURL(join(root, "public", path)).href;

const copy = {
  es: {
    title: ["Diseño y despliego", "<mark>productos web</mark>", "completos."],
    description: "Desde interfaces y flujos de producto hasta APIs, datos y producción.",
    status: "Desplegado · Validación temprana",
  },
  en: {
    title: ["I design, build", "and ship complete", "<mark>web products</mark>."],
    description: "From interfaces and product flows to APIs, data and production.",
    status: "Production deployed · Early validation",
  },
};

const fonts =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600&family=Hanken+Grotesk:wght@400;500;600&display=block";

function ogHtml(lang) {
  const c = copy[lang];
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">
<link rel="stylesheet" href="${fonts}">
<style>
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body { position: relative; background: #f4f5f2; color: #111311; font-family: "Hanken Grotesk", sans-serif; }
  .brand { position: absolute; left: 64px; top: 52px; display: flex; align-items: center; gap: 14px; }
  .brand img { width: 46px; height: 46px; border-radius: 999px; object-fit: cover; object-position: 50% 18%; border: 1px solid rgb(17 19 17 / 10%); }
  .brand span { font-family: "Bricolage Grotesque", sans-serif; font-size: 24px; font-weight: 600; letter-spacing: -0.02em; }
  h1 { position: absolute; left: 60px; top: 150px; width: 640px; font-family: "Bricolage Grotesque", sans-serif; font-size: ${lang === "es" ? 72 : 66}px; font-weight: 600; line-height: 1.02; letter-spacing: -0.035em; }
  h1 span { display: block; }
  mark { background: linear-gradient(#c8f03c, #c8f03c) 0 88% / 100% 0.62em no-repeat; color: inherit; padding-inline: 0.06em; }
  .description { position: absolute; left: 64px; top: 420px; width: 560px; color: #565b55; font-size: 22px; line-height: 1.45; }
  .meta { position: absolute; left: 64px; bottom: 54px; display: flex; gap: 10px; font-size: 18px; font-weight: 500; }
  .meta i { font-style: normal; color: rgb(17 19 17 / 30%); }
  .url { position: absolute; right: 64px; top: 62px; font-size: 17px; font-weight: 600; color: #565b55; }
  .panel { position: absolute; left: 720px; top: 150px; width: 620px; height: 560px; padding: 12px; background: #fff; border: 1px solid rgb(17 19 17 / 10%); border-radius: 22px; box-shadow: 0 1px 2px rgb(17 19 17 / 6%), 0 18px 40px -16px rgb(17 19 17 / 22%); }
  .shot { width: 100%; height: 330px; border-radius: 14px; border: 1px solid rgb(17 19 17 / 10%); overflow: hidden; background: #e8eae4; }
  .shot img { width: 100%; height: 100%; object-fit: cover; object-position: top left; }
  .chip { display: inline-flex; align-items: center; gap: 8px; margin: 22px 0 0 14px; padding: 6px 14px; border-radius: 999px; background: #c8f03c; font-size: 15px; font-weight: 600; }
  .chip::before { content: ""; width: 7px; height: 7px; border-radius: 999px; background: #111311; }
  .name { margin: 12px 0 0 14px; font-family: "Bricolage Grotesque", sans-serif; font-size: 34px; font-weight: 600; letter-spacing: -0.03em; }
</style></head><body>
  <div class="brand"><img src="${asset("images/lucas-epherra.webp")}" alt=""><span>Lucas Epherra</span></div>
  <p class="url">lucasepherra.com.ar</p>
  <h1>${c.title.map((line) => `<span>${line}</span>`).join("")}</h1>
  <p class="description">${c.description}</p>
  <p class="meta"><span>Full Stack Developer</span><i>/</i><span>ARG · UTC-3</span></p>
  <div class="panel">
    <div class="shot"><img src="${asset("images/case-studies/mitaller360/dashboard.webp")}" alt=""></div>
    <p class="chip">${c.status}</p>
    <p class="name">MiTaller360</p>
  </div>
</body></html>`;
}

/** Marca del sitio: monograma en tinta sobre lima, el único acento de la paleta. */
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#c8f03c" />
  <text x="32" y="43" fill="#111311" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="800" letter-spacing="-1.5" text-anchor="middle">LE</text>
</svg>
`;

function screenshot(html, name, width, height) {
  const htmlPath = join(work, `${name}.html`);
  const pngPath = join(work, `${name}.png`);
  writeFileSync(htmlPath, html);
  execFileSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--default-background-color=00000000",
    "--force-device-scale-factor=1",
    "--virtual-time-budget=8000",
    `--window-size=${width},${height}`,
    `--screenshot=${pngPath}`,
    pathToFileURL(htmlPath).href,
  ]);
  return pngPath;
}

/** Empaqueta PNGs dentro de un .ico (formato PNG-in-ICO, soportado por los navegadores actuales). */
function toIco(pngs) {
  const header = Buffer.alloc(6 + pngs.length * 16);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = header.length;
  pngs.forEach(({ size, data }, index) => {
    const entry = 6 + index * 16;
    header.writeUInt8(size >= 256 ? 0 : size, entry);
    header.writeUInt8(size >= 256 ? 0 : size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...pngs.map(({ data }) => data)]);
}

const sharp = (await import(pathToFileURL(join(root, "node_modules/.pnpm/node_modules/sharp/lib/index.js")).href)).default;

for (const lang of Object.keys(copy)) {
  const png = screenshot(ogHtml(lang), `og-${lang}`, 1200, 630);
  const out = join(root, `public/images/social/portfolio-og-${lang}-${VERSION}.png`);
  await sharp(png).png({ compressionLevel: 9, palette: false }).toFile(out);
  console.log("ok", out);
}

writeFileSync(join(root, "src/app/icon.svg"), iconSvg);
const iconPng = screenshot(
  `<!doctype html><style>*{margin:0}html,body{width:512px;height:512px;background:transparent}svg{width:512px;height:512px;display:block}</style>${iconSvg}`,
  "icon",
  512,
  512,
);
const iconBuffer = readFileSync(iconPng);
// iOS aplica su propia máscara redondeada: el ícono de Apple va a sangre y opaco.
const applePng = screenshot(
  `<!doctype html><style>*{margin:0}html,body{width:512px;height:512px}svg{width:512px;height:512px;display:block}</style>${iconSvg.replace('rx="14" ', "")}`,
  "apple-icon",
  512,
  512,
);
await sharp(readFileSync(applePng)).resize(180, 180).flatten({ background: "#c8f03c" }).png().toFile(join(root, "src/app/apple-icon.png"));
const icoSizes = await Promise.all(
  [16, 32, 48].map(async (size) => ({ size, data: await sharp(iconBuffer).resize(size, size).png().toBuffer() })),
);
writeFileSync(join(root, "src/app/favicon.ico"), toIco(icoSizes));
console.log("ok icons");
