---
version: 1
slug: "src-app-locale-page-tsx"
primary_target: "src/app/[locale]/page.tsx"
related_targets: ["src/app/[locale]/projects/[slug]/page.tsx"]
---

# Portfolio site (home + case studies)

Scope: whole site redesign — `/[locale]` home and `/[locale]/projects/[slug]` case studies. Mode: Experience (the work leads from the first viewport).

Audience and job: recruiters and technical teams first (verify real end-to-end work, reach CV/contact fast); founders second. Proof: three real case studies with screenshots, live products, repos, CVs. Constraints: everything functional stays (routes, ES/EN sync, SEO, JSON-LD, redirects, a11y, server-first); copy may change only with user approval. User rejected: template look, overly artistic, dark/hacker, cream+serif+copper (the incumbent). User asked for modern tech-product precision (Linear, Vercel, Stripe), elegance, personality.

## Direction contract

THESIS: The work is the stage. A project switcher puts the real product in the first viewport; acid lime marks only what matters. Refuses the dev-portfolio default of a name hero over a row of equal project cards.

OWN-WORLD: Light graphite ground (#f4f5f2), near-black ink (#111311), white panels with hairline borders, acid lime (#c8f03c) used only as a highlighter: one phrase per headline, status chips, the active state. Pill tabs and pill buttons, 12–22px panel radii, real screenshots at large scale. One grotesque with a point of view, tight display tracking. No gradients, glass or glows.

STORY: The visitor sees in seconds a Full Stack Developer whose products are live, switches between the three projects without scrolling, opens a case study or downloads the CV. Each case study follows the same stations: requirement → interface → API → data → production.

FIRST VIEWPORT: Top bar: name left, links center/right, dark pill "Descargar CV" right. Headline about 84px across about 1080px with "productos web" highlighted in lime. Under it, the subcopy left and a pill switcher (MiTaller360 / OpsCore / Estudio Lachat) right. Below, a wide white stage (about 420px tall): the active project's screenshot left; right column with a status chip, name, layers (Interfaz / API / Datos with tech), and a dark primary "Ver caso de estudio".

FORM: Grafito y lima, grounded candidate chosen by the user from the safer-register round (round 2), not the dealt lead. seed:17895d8a818ca2f6

SIGNATURE INTERACTION: the project stage switcher. An accessible tablist swaps the screenshot and meta with a short crossfade and a slide of the lime underline; without JS it shows MiTaller360. Motion grammar: short (180–260ms), ease-out, transform/opacity only, disabled under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
