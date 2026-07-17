import type { LocalizedSiteContent } from "@/types/site-content";

export const SITE_URL = "https://www.lucasepherra.com.ar";
export const CONTACT_EMAIL = "lucasepherra@gmail.com";
export const GITHUB_URL = "https://github.com/Lucas-Epherra";
export const LINKEDIN_URL = "https://www.linkedin.com/in/lucas-epherra/";

export const siteContent = {
  en: {
    description:
      "Full Stack Developer building complete web products with a strong frontend foundation, backend integrations and production delivery.",
    navigationLabel: "Primary navigation",
    languageLabel: "Cambiar el sitio a español",
    navigation: [
      { href: "#work", label: "Work" },
      { href: "#capabilities", label: "Capabilities" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      role: "Full Stack Developer",
      location: ["ARG", "UTC-3"],
      titleLines: ["I design, build and", "ship complete", "web products."],
      description:
        "From interfaces and product flows to APIs, data and production.",
      primaryAction: { href: "#work", label: "Explore selected work" },
      secondaryAction: {
        download: true,
        href: "/cv/lucas-epherra-cv-en.pdf",
        label: "Download CV",
      },
    },
    featuredProject: {
      number: "01",
      title: "MiTaller360",
      category: "Workshop management SaaS",
      roleLabel: "Role",
      role: "Co-founder · Full Stack Developer",
      summary: [
        "A complete platform for workshops to manage clients, vehicles, work orders, scheduling and receipts.",
        "Built across frontend, backend, data and production delivery.",
      ],
      stack: ["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
      image: "/images/projects/mitaller360.webp",
      imageAlt: "MiTaller360 workshop management dashboard",
    },
    selectedProjects: {
      projects: [
        {
          number: "02",
          title: "OpsCore",
          category: "Operational incident management",
          summary:
            "Frontend development, protected navigation, role-based interfaces and REST API integration for a collaborative operational platform.",
          image: "/images/projects/opscore.webp",
          alt: "OpsCore operational incident dashboard",
          stack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Django REST API"],
          links: [
            {
              href: "https://github.com/No-Country-simulation/S04-26-Equipo-19-Web-App-Development",
              label: "View repository",
            },
          ],
        },
        {
          number: "03",
          title: "Estudio Jurídico Lachat",
          category: "Professional legal website",
          summary:
            "A production website with responsive design, local SEO, lead persistence, file uploads and transactional email.",
          image: "/images/projects/estudio-lachat.webp",
          alt: "Homepage of the Estudio Jurídico Lachat website",
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Resend"],
          links: [
            {
              href: "https://www.estudiolachat.com.ar/",
              label: "View live site",
            },
          ],
        },
      ],
    },
    approach: {
      title: "What I build",
      introduction: "Products with clear interfaces and solid foundations.",
      steps: [
        {
          number: "01",
          title: "Product development",
          description: "Full web applications with clean architecture and attention to detail.",
        },
        {
          number: "02",
          title: "Frontend engineering",
          description: "Interfaces and flows that are responsive, accessible and maintainable.",
        },
        {
          number: "03",
          title: "Backend and APIs",
          description: "Services, authentication, data modeling and external integrations.",
        },
        {
          number: "04",
          title: "Data and infrastructure",
          description: "Databases, deployment and production environments that support the product.",
        },
      ],
    },
    about: {
      title: "About",
      paragraphs: [
        "I’m a Full Stack Developer focused on building useful products with a strong balance between design, code and real-world needs.",
        "I enjoy turning product requirements into working software, solving problems and shipping value.",
      ],
      facts: [
        { label: "Location", value: "Argentina" },
        { label: "Availability", value: "Open to new opportunities" },
        { label: "Timezone", value: "UTC-3" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk about your next product.",
      text: "Open to product roles, engineering teams and selected freelance projects.",
      emailLabel: "Email",
      websiteLabel: "Website",
    },
    footerRights: "All rights reserved.",
    footerNote: "Built with Next.js, TypeScript and Tailwind CSS.",
  },
  es: {
    description:
      "Desarrollador Full Stack que construye productos web completos con una base sólida en frontend, integraciones backend y despliegue en producción.",
    navigationLabel: "Navegación principal",
    languageLabel: "Switch site language to English",
    navigation: [
      { href: "#work", label: "Proyectos" },
      { href: "#capabilities", label: "Capacidades" },
      { href: "#about", label: "Sobre mí" },
      { href: "#contact", label: "Contacto" },
    ],
    hero: {
      role: "Full Stack Developer",
      location: ["ARG", "UTC-3"],
      titleLines: ["Diseño, desarrollo y", "despliego productos", "web completos."],
      description:
        "Desde interfaces y flujos de producto hasta APIs, datos y producción.",
      primaryAction: { href: "#work", label: "Explorar proyectos" },
      secondaryAction: {
        download: true,
        href: "/cv/lucas-epherra-cv-es.pdf",
        label: "Descargar CV",
      },
    },
    featuredProject: {
      number: "01",
      title: "MiTaller360",
      category: "SaaS de gestión para talleres",
      roleLabel: "Rol",
      role: "Cofundador · Full Stack Developer",
      summary: [
        "Una plataforma completa para gestionar clientes, vehículos, órdenes de trabajo, agenda y recibos.",
        "Construida desde el frontend y el backend hasta los datos y el despliegue productivo.",
      ],
      stack: ["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
      image: "/images/projects/mitaller360.webp",
      imageAlt: "Panel de gestión de talleres de MiTaller360",
    },
    selectedProjects: {
      projects: [
        {
          number: "02",
          title: "OpsCore",
          category: "Gestión de incidentes operativos",
          summary:
            "Desarrollo frontend, navegación protegida, interfaces por rol e integración con API REST para una plataforma operativa colaborativa.",
          image: "/images/projects/opscore.webp",
          alt: "Dashboard operativo de incidentes de OpsCore",
          stack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Django REST API"],
          links: [
            {
              href: "https://github.com/No-Country-simulation/S04-26-Equipo-19-Web-App-Development",
              label: "Ver repositorio",
            },
          ],
        },
        {
          number: "03",
          title: "Estudio Jurídico Lachat",
          category: "Sitio web jurídico profesional",
          summary:
            "Un sitio productivo con diseño responsive, SEO local, persistencia de leads, carga de archivos y emails transaccionales.",
          image: "/images/projects/estudio-lachat.webp",
          alt: "Página principal del sitio Estudio Jurídico Lachat",
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Resend"],
          links: [
            {
              href: "https://www.estudiolachat.com.ar/",
              label: "Ver sitio publicado",
            },
          ],
        },
      ],
    },
    approach: {
      title: "Lo que construyo",
      introduction: "Productos con interfaces claras y fundamentos sólidos.",
      steps: [
        {
          number: "01",
          title: "Desarrollo de producto",
          description: "Aplicaciones web completas con arquitectura limpia y atención al detalle.",
        },
        {
          number: "02",
          title: "Ingeniería frontend",
          description: "Interfaces y flujos responsive, accesibles y mantenibles.",
        },
        {
          number: "03",
          title: "Backend y APIs",
          description: "Servicios, autenticación, modelado de datos e integraciones externas.",
        },
        {
          number: "04",
          title: "Datos e infraestructura",
          description: "Bases de datos, despliegues y entornos productivos que sostienen el producto.",
        },
      ],
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy Full Stack Developer y construyo productos útiles buscando un equilibrio sólido entre diseño, código y necesidades reales.",
        "Disfruto convertir requerimientos de producto en software funcional, resolver problemas y entregar valor.",
      ],
      facts: [
        { label: "Ubicación", value: "Argentina" },
        { label: "Disponibilidad", value: "Abierto a nuevas oportunidades" },
        { label: "Zona horaria", value: "UTC-3" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de tu próximo producto.",
      text: "Disponible para roles de producto, equipos de ingeniería y proyectos freelance seleccionados.",
      emailLabel: "Email",
      websiteLabel: "Sitio web",
    },
    footerRights: "Todos los derechos reservados.",
    footerNote: "Desarrollado con Next.js, TypeScript y Tailwind CSS.",
  },
} satisfies LocalizedSiteContent;
