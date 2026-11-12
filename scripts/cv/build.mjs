// Genera los CV en HTML (ES/EN) y los exporta a PDF con Chrome headless.
// Uso: node scripts/cv/build.mjs public/cv
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const outDir = resolve(process.argv[2] ?? ".");
const here = resolve(new URL(".", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"));
const chrome = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const contact = {
  phone: "+54 2983 659649",
  email: "lucasepherra@gmail.com",
  linkedin: "linkedin.com/in/lucas-epherra",
  github: "github.com/Lucas-Epherra",
  site: "www.lucasepherra.com.ar",
};

const cv = {
  es: {
    lang: "es",
    file: "lucas-epherra-cv-es.pdf",
    title: "Full Stack Developer | React | Next.js | TypeScript",
    location: "Tres Arroyos, Buenos Aires, Argentina",
    remote: "Disponibilidad remota",
    sections: {
      summary: "Perfil profesional",
      skills: "Competencias técnicas",
      experience: "Experiencia en desarrollo",
      other: "Otros proyectos",
      practices: "Prácticas de desarrollo",
      additional: "Experiencia profesional complementaria",
      education: "Formación e idiomas",
    },
    caseStudy: "caso de estudio",
    summary:
      "Desarrollador Full Stack con especialización en frontend mediante React, Next.js y TypeScript. Cofundador y responsable del desarrollo técnico de MiTaller360, un SaaS desplegado en entorno productivo y actualmente en desarrollo y validación inicial. Trabajo de extremo a extremo sobre interfaces, modelado de datos, integración de APIs, autenticación, despliegues y QA. Mi mayor solidez está en frontend; cuento con experiencia práctica inicial en NestJS, Prisma y PostgreSQL aplicada al producto.",
    skills: [
      ["Frontend (principal)", "HTML5, CSS3, JavaScript ES6+, TypeScript, React, Next.js App Router, Tailwind CSS v4, responsive design, accesibilidad y HTML semántico."],
      ["Backend y APIs", "Experiencia práctica inicial con Node.js, NestJS, APIs REST, validación, autenticación, autorización por roles y manejo de errores."],
      ["Datos", "Experiencia práctica inicial con PostgreSQL, Prisma ORM y SQL; uso de Supabase, Firebase/Firestore, relaciones, consultas y migraciones."],
      ["SEO técnico", "Metadata por página, Open Graph, datos estructurados Schema.org, sitemap y redirecciones."],
      ["Herramientas", "Git, GitHub, ramas y Pull Requests, Docker, Vercel, Render, Netlify, Postman, pnpm, VS Code y Chrome DevTools."],
    ],
    experience: [
      {
        title: "MiTaller360 - Cofundador / Full Stack Developer",
        meta: "Next.js, TypeScript, Tailwind CSS, NestJS, Prisma, PostgreSQL, Docker, Vercel y Render | 2026 - actualidad",
        bullets: [
          "Construyo y mantengo un SaaS desplegado en entorno productivo y en validación inicial que centraliza 6 áreas operativas: clientes, vehículos, órdenes de trabajo, agenda, recibos y administración de talleres.",
          "Asumo el desarrollo técnico end-to-end del producto: frontend, API, modelo de datos, autenticación, permisos, despliegues y QA funcional.",
          "Diseñé una arquitectura monorepo con 2 aplicaciones independientes -frontend Next.js y API NestJS- conectadas a PostgreSQL mediante Prisma.",
          "Implementé permisos por rol, auditoría operativa y un flujo digital para generar, visualizar y enviar recibos no fiscales vinculados a cada orden.",
          "Desplegué frontend, API y base de datos en Vercel y Render, configurando dominio propio y comunicación segura entre servicios.",
        ],
        links: [["www.mitaller360.com", "https://www.mitaller360.com"], ["case:mitaller360"]],
      },
      {
        title: "Estudio Jurídico Lachat - Full Stack Developer / Proyecto freelance en producción",
        meta: "Next.js, TypeScript, Tailwind CSS, Schema.org y Vercel | 2026",
        bullets: [
          "Convertí la landing de un estudio jurídico real en un sitio multipágina publicado con dominio propio y desplegado en Vercel.",
          "Estructuré el contenido en 9 áreas de práctica con página propia, guías jurídicas y preguntas frecuentes agrupadas por tema.",
          "Centralicé las consultas en WhatsApp con mensajes precargados según el área o la guía desde la que escribe cada persona.",
          "Implementé datos estructurados, metadata por página, sitemap y redirecciones permanentes orientados al posicionamiento local.",
          "En la primera versión desarrollé un flujo de captación con validación, carga de adjuntos, persistencia en Supabase y notificaciones por correo con Resend.",
        ],
        links: [["www.estudiolachat.com.ar", "https://www.estudiolachat.com.ar"], ["case:estudio-lachat"]],
      },
      {
        title: "OpsCore - Frontend Developer | Simulación laboral colaborativa No Country",
        meta: "Next.js, React, JavaScript, Tailwind CSS, Django REST, Vercel y Render | 2026",
        bullets: [
          "Implementé interfaces y permisos diferenciados para 4 roles: operador, supervisor, técnico y manager.",
          "Construí un flujo de 4 etapas para reportar, asignar, resolver y analizar incidentes operativos desde una misma aplicación.",
          "Integré el frontend con una API Django REST real, incorporando autenticación, rutas protegidas, filtros, alertas, formularios y dashboards.",
          "Corregí incidencias de autenticación y navegación móvil durante el despliegue, trabajando con ramas, Pull Requests y QA funcional.",
        ],
        links: [
          ["github.com/No-Country-simulation/S04-26-Equipo-19-Web-App-Development", "https://github.com/No-Country-simulation/S04-26-Equipo-19-Web-App-Development"],
          ["case:opscore"],
        ],
      },
    ],
    other: [
      {
        title: "Rescue Store - Frontend Developer / E-commerce",
        meta: "React, JavaScript, Firebase, React Router y Netlify | 2023",
        bullets: [
          "Desarrollé un e-commerce funcional con catálogo, autenticación, rutas protegidas, carrito, detalle de productos y estado global.",
          "Integré Firebase Authentication y Firestore para gestionar usuarios y persistencia, y publiqué una demo funcional en Netlify.",
        ],
        links: [["rescue-store.netlify.app", "https://rescue-store.netlify.app"], ["github.com/Lucas-Epherra/rescue-store", "https://github.com/Lucas-Epherra/rescue-store"]],
      },
    ],
    practices: [
      "Valido cambios con type checking, compilación de producción, QA funcional manual y revisión responsive antes de integrar a producción.",
      "Organizo entregas pequeñas y verificables mediante ramas y Pull Requests, manteniendo el backend como fuente de verdad para reglas de negocio y permisos.",
      "Diseño componentes modulares y reutilizables, priorizando Server Components y limitando la interactividad del cliente a componentes hoja.",
    ],
    additional: {
      title: "Guardavidas / Socorrista - Argentina y España",
      meta: "2019 - actualidad",
      bullets: [
        "Acumulé más de 7 años de experiencia en prevención y respuesta, trabajando con equipos y público internacional en 2 países.",
        "Respondí en entornos de alta responsabilidad mediante evaluación de riesgos, comunicación clara, coordinación operativa y toma de decisiones bajo presión.",
      ],
    },
    education: ["Coderhouse - Desarrollo Web, JavaScript y React JS", "Formación completada, 2022"],
    languagesLabel: "Idiomas:",
    languages: "Español nativo | Inglés profesional para lectura técnica, conversación, videollamadas y reuniones de trabajo.",
  },
  en: {
    lang: "en",
    file: "lucas-epherra-cv-en.pdf",
    title: "Full Stack Developer | React | Next.js | TypeScript",
    location: "Tres Arroyos, Buenos Aires, Argentina",
    remote: "Open to remote opportunities",
    sections: {
      summary: "Professional summary",
      skills: "Technical skills",
      experience: "Development experience",
      other: "Other projects",
      practices: "Development practices",
      additional: "Additional professional experience",
      education: "Education & languages",
    },
    caseStudy: "case study",
    summary:
      "Full Stack Developer with a strong frontend focus using React, Next.js, and TypeScript. Co-founder and developer responsible for the technical development of MiTaller360, a SaaS product deployed to production and currently undergoing early-stage development and validation. I work end-to-end across user interfaces, data modeling, API integration, authentication, deployments, and QA. My strongest area is frontend development, supported by hands-on experience with NestJS, Prisma, and PostgreSQL gained through building the product.",
    skills: [
      ["Frontend (primary)", "HTML5, CSS3, JavaScript ES6+, TypeScript, React, Next.js App Router, Tailwind CSS v4, responsive design, accessibility, and semantic HTML."],
      ["Backend & APIs", "Hands-on experience with Node.js, NestJS, REST APIs, validation, authentication, role-based authorization, and error handling."],
      ["Data", "Hands-on experience with PostgreSQL, Prisma ORM, and SQL; use of Supabase, Firebase/Firestore, data relationships, queries, and migrations."],
      ["Technical SEO", "Per-page metadata, Open Graph, Schema.org structured data, sitemaps, and redirects."],
      ["Tools", "Git, GitHub, branches and Pull Requests, Docker, Vercel, Render, Netlify, Postman, pnpm, VS Code, and Chrome DevTools."],
    ],
    experience: [
      {
        title: "MiTaller360 - Co-founder / Full Stack Developer",
        meta: "Next.js, TypeScript, Tailwind CSS, NestJS, Prisma, PostgreSQL, Docker, Vercel, and Render | 2026 - Present",
        bullets: [
          "Build and maintain a production-deployed SaaS currently in early validation, centralizing six operational areas: customers, vehicles, work orders, scheduling, receipts, and workshop administration.",
          "Own the product's end-to-end technical development, including the frontend, API, data model, authentication, permissions, deployments, and functional QA.",
          "Designed a monorepo architecture with two independent applications - a Next.js frontend and a NestJS API - connected to PostgreSQL through Prisma.",
          "Implemented role-based permissions, operational audit trails, and a digital workflow for generating, viewing, and emailing non-fiscal receipts linked to each work order.",
          "Deployed the frontend, API, and database to Vercel and Render, configuring a custom domain and secure communication between services.",
        ],
        links: [["www.mitaller360.com", "https://www.mitaller360.com"], ["case:mitaller360"]],
      },
      {
        title: "Estudio Jurídico Lachat - Full Stack Developer / Freelance Production Project",
        meta: "Next.js, TypeScript, Tailwind CSS, Schema.org, and Vercel | 2026",
        bullets: [
          "Turned a real law firm's landing page into a multi-page website published on a custom domain and deployed on Vercel.",
          "Structured the content into nine practice areas with their own pages, legal guides, and FAQs grouped by topic.",
          "Routed all inquiries to WhatsApp with prefilled messages based on the area or guide each visitor writes from.",
          "Implemented structured data, per-page metadata, a sitemap, and permanent redirects focused on local search visibility.",
          "In the first version, built a lead capture workflow with validation, file uploads, persistence in Supabase, and email notifications through Resend.",
        ],
        links: [["www.estudiolachat.com.ar", "https://www.estudiolachat.com.ar"], ["case:estudio-lachat"]],
      },
      {
        title: "OpsCore - Frontend Developer | Collaborative Product Simulation, No Country",
        meta: "Next.js, React, JavaScript, Tailwind CSS, Django REST, Vercel, and Render | 2026",
        bullets: [
          "Implemented interfaces and differentiated permissions for four roles: operator, supervisor, technician, and manager.",
          "Built a four-stage workflow to report, assign, resolve, and analyze operational incidents within a single application.",
          "Integrated the frontend with a real Django REST API, including authentication, protected routes, filters, alerts, forms, and dashboards.",
          "Resolved authentication and mobile navigation issues during deployment while working with branches, Pull Requests, and functional QA.",
        ],
        links: [
          ["github.com/No-Country-simulation/S04-26-Equipo-19-Web-App-Development", "https://github.com/No-Country-simulation/S04-26-Equipo-19-Web-App-Development"],
          ["case:opscore"],
        ],
      },
    ],
    other: [
      {
        title: "Rescue Store - Frontend Developer / E-commerce",
        meta: "React, JavaScript, Firebase, React Router, and Netlify | 2023",
        bullets: [
          "Developed a functional e-commerce application with a product catalog, authentication, protected routes, shopping cart, product detail pages, and global state management.",
          "Integrated Firebase Authentication and Firestore for user management and data persistence, and published a working demo on Netlify.",
        ],
        links: [["rescue-store.netlify.app", "https://rescue-store.netlify.app"], ["github.com/Lucas-Epherra/rescue-store", "https://github.com/Lucas-Epherra/rescue-store"]],
      },
    ],
    practices: [
      "Validate changes through type checking, production builds, manual functional QA, and responsive testing before release.",
      "Deliver small, verifiable changes through branches and Pull Requests, keeping the backend as the source of truth for business rules and permissions.",
      "Build modular and reusable components, favoring Server Components and limiting client-side interactivity to leaf components.",
    ],
    additional: {
      title: "Lifeguard - Argentina and Spain",
      meta: "2019 - Present",
      bullets: [
        "Built more than seven years of experience in prevention and emergency response while working with international teams and the public in two countries.",
        "Performed in high-responsibility environments through risk assessment, clear communication, operational coordination, and decision-making under pressure.",
      ],
    },
    education: ["Coderhouse - Web Development, JavaScript, and React JS", "Completed coursework, 2022"],
    languagesLabel: "Languages:",
    languages: "Native Spanish | Professional English for technical reading, conversation, video calls, and work meetings.",
  },
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function renderLinks(links, data) {
  return links
    .map(([label, href]) => {
      if (label.startsWith("case:")) {
        const slug = label.slice(5);
        const url = `https://www.lucasepherra.com.ar/${data.lang}/projects/${slug}`;
        return `<a href="${url}">${esc(data.caseStudy)}: lucasepherra.com.ar/${data.lang}/projects/${slug}</a>`;
      }
      return `<a href="${href}">${esc(label)}</a>`;
    })
    .join(" &nbsp;|&nbsp; ");
}

function renderEntry(entry, data) {
  return `<article class="entry">
    <h3>${esc(entry.title)}</h3>
    <p class="meta">${esc(entry.meta)}</p>
    <ul>${entry.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
    ${entry.links ? `<p class="links">${renderLinks(entry.links, data)}</p>` : ""}
  </article>`;
}

function render(data) {
  const s = data.sections;
  return `<!doctype html>
<html lang="${data.lang}">
<head>
<meta charset="utf-8">
<title>Lucas Epherra - CV</title>
<link rel="stylesheet" href="${pathToFileURL(join(here, "cv.css")).href}">
</head>
<body>
<header class="masthead">
  <h1>LUCAS EPHERRA</h1>
  <p class="role">${esc(data.title)}</p>
  <p class="contact">${esc(data.location)} | ${esc(data.remote)} | ${esc(contact.phone)} | <a href="mailto:${contact.email}">${contact.email}</a></p>
  <p class="contact"><a href="https://www.${contact.linkedin}">${contact.linkedin}</a> &nbsp;|&nbsp; <a href="https://${contact.github}">${contact.github}</a> &nbsp;|&nbsp; <a href="https://${contact.site}">${contact.site}</a></p>
</header>
<main>
  <section><h2>${esc(s.summary)}</h2><p>${esc(data.summary)}</p></section>
  <section><h2>${esc(s.skills)}</h2>
    <dl class="skills">${data.skills.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
  </section>
  <section><h2>${esc(s.experience)}</h2>${data.experience.map((e) => renderEntry(e, data)).join("")}</section>
  <section><h2>${esc(s.other)}</h2>${data.other.map((e) => renderEntry(e, data)).join("")}</section>
  <section><h2>${esc(s.practices)}</h2><ul class="plain">${data.practices.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></section>
  <section><h2>${esc(s.additional)}</h2>${renderEntry(data.additional, data)}</section>
  <section><h2>${esc(s.education)}</h2>
    <p><strong>${esc(data.education[0])}</strong> <span class="muted">| ${esc(data.education[1])}</span></p>
    <p><strong class="accent">${esc(data.languagesLabel)}</strong> ${esc(data.languages)}</p>
  </section>
</main>
</body>
</html>`;
}

mkdirSync(outDir, { recursive: true });

for (const data of Object.values(cv)) {
  const htmlPath = join(here, `cv-${data.lang}.html`);
  writeFileSync(htmlPath, render(data));
  execFileSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${join(outDir, data.file)}`,
    pathToFileURL(htmlPath).href,
  ]);
  console.log("ok", data.file);
}
