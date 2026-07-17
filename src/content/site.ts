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
    contactLabel: "Start a conversation",
    navigation: [
      { href: "#top", label: "Profile" },
      { href: "#work", label: "Selected work" },
      { href: "#about", label: "Capabilities" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      availability: "Open to product and engineering opportunities",
      eyebrow: "Full Stack Developer · Product-minded execution",
      titleStart: "I build",
      titleFocus: "web products",
      titleEnd: "from interface to production.",
      description:
        "I’m Lucas Epherra. I work across frontend, APIs, authentication, data and deployment to turn product requirements into complete, maintainable web experiences.",
      primaryAction: { href: "#work", label: "See selected work" },
      secondaryAction: {
        href: "mailto:lucasepherra@gmail.com",
        label: "Start a conversation",
      },
    },
    featuredProject: {
      eyebrow: "Selected work · 01",
      title: "MiTaller360",
      summary:
        "A SaaS product for the day-to-day management of automotive workshops, connecting operational workflows, data and platform administration in one system.",
      facts: [
        { label: "Role", value: "Co-founder · Full Stack Developer" },
        { label: "Product", value: "Multi-workshop SaaS" },
        { label: "Scope", value: "Frontend · Backend · Data · Delivery" },
      ],
      capabilities: [
        "Authentication and permissions",
        "Clients, vehicles and work orders",
        "Scheduling, receipts and transactional email",
        "Platform administration and audit trail",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "NestJS",
        "Prisma",
        "PostgreSQL",
      ],
      panelLabel: "Operational architecture",
      panelTitle: "One workspace, connected workflows",
      workFlow: ["Workshop", "Work order", "Receipt"],
    },
    about: {
      eyebrow: "Profile · Capabilities",
      title: "A frontend foundation with full product scope.",
      paragraphs: [
        "I build interfaces with close attention to hierarchy, accessibility and responsive behavior, then connect them to the services and data that make the product work.",
        "My recent work includes authentication, permissions, REST APIs, relational data, transactional email, production deployments and the QA needed to keep those flows reliable.",
      ],
      capabilities: [
        {
          title: "Product interfaces",
          description: "Responsive, accessible experiences shaped around real workflows.",
        },
        {
          title: "Backend integration",
          description: "APIs, authentication, permissions and external service connections.",
        },
        {
          title: "Data and delivery",
          description: "Relational persistence, deployment and production-focused QA.",
        },
      ],
      technologiesLabel: "Working stack",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "Supabase",
        "Resend",
      ],
    },
    selectedProjects: {
      eyebrow: "Selected work · 02—03",
      title: "Different products, the same focus on execution.",
      introduction:
        "Two projects that show collaborative product work and delivery for a real professional service.",
      projects: [
        {
          number: "02",
          title: "OpsCore",
          category: "Collaborative operational platform",
          summary:
            "Incident management product with protected navigation, role-based interfaces, assignment and resolution flows, notifications, dashboards and REST API integration.",
          image: "/images/projects/opscore.webp",
          alt: "OpsCore operational incident dashboard",
          stack: ["Next.js", "React", "Tailwind CSS", "Django REST API"],
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
          category: "Professional website · Production",
          summary:
            "A production website for a law firm, built around local SEO and a consultation flow with file uploads, lead persistence and transactional email.",
          image: "/images/projects/estudio-lachat.webp",
          alt: "Homepage of the Estudio Jurídico Lachat website",
          stack: ["Next.js", "TypeScript", "Supabase", "Resend"],
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
      eyebrow: "How I work",
      title: "Clear decisions, contained complexity, verifiable delivery.",
      steps: [
        {
          number: "01",
          title: "Understand the workflow",
          description: "Define the user, the real task and the technical constraints before shaping the interface.",
        },
        {
          number: "02",
          title: "Build by responsibility",
          description: "Separate presentation, data and integration concerns so the product remains maintainable.",
        },
        {
          number: "03",
          title: "Verify the full path",
          description: "Review responsive behavior, accessibility, typed contracts and the production build.",
        },
      ],
      servicesLabel: "Available for",
      services: [
        "Professional websites",
        "Web applications and management panels",
        "Modernization and integration of web systems",
      ],
    },
    contact: {
      eyebrow: "Let’s work together",
      title: "Have a product, role or web challenge in mind?",
      text: "I’m open to conversations with product teams, engineering teams and businesses that need thoughtful web execution.",
      emailLabel: "Write to Lucas",
    },
    footerNote: "Designed and built from Argentina.",
  },
  es: {
    description:
      "Desarrollador Full Stack que construye productos web completos con una base sólida en frontend, integraciones backend y despliegue en producción.",
    navigationLabel: "Navegación principal",
    languageLabel: "Switch site language to English",
    contactLabel: "Iniciar una conversación",
    navigation: [
      { href: "#top", label: "Perfil" },
      { href: "#work", label: "Proyectos" },
      { href: "#about", label: "Capacidades" },
      { href: "#contact", label: "Contacto" },
    ],
    hero: {
      availability: "Disponible para oportunidades de producto e ingeniería",
      eyebrow: "Full Stack Developer · Ejecución con visión de producto",
      titleStart: "Construyo",
      titleFocus: "productos web",
      titleEnd: "de la interfaz a producción.",
      description:
        "Soy Lucas Epherra. Trabajo en frontend, APIs, autenticación, datos y despliegue para convertir necesidades de producto en experiencias web completas y mantenibles.",
      primaryAction: { href: "#work", label: "Ver proyectos" },
      secondaryAction: {
        href: "mailto:lucasepherra@gmail.com",
        label: "Iniciar una conversación",
      },
    },
    featuredProject: {
      eyebrow: "Proyecto seleccionado · 01",
      title: "MiTaller360",
      summary:
        "Un producto SaaS para la gestión cotidiana de talleres mecánicos que conecta flujos operativos, datos y administración de plataforma en un único sistema.",
      facts: [
        { label: "Rol", value: "Cofundador · Full Stack Developer" },
        { label: "Producto", value: "SaaS multi-taller" },
        { label: "Alcance", value: "Frontend · Backend · Datos · Despliegue" },
      ],
      capabilities: [
        "Autenticación y permisos",
        "Clientes, vehículos y órdenes de trabajo",
        "Agenda, recibos y emails transaccionales",
        "Administración de plataforma y auditoría",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "NestJS",
        "Prisma",
        "PostgreSQL",
      ],
      panelLabel: "Arquitectura operativa",
      panelTitle: "Un espacio, flujos conectados",
      workFlow: ["Taller", "Orden de trabajo", "Recibo"],
    },
    about: {
      eyebrow: "Perfil · Capacidades",
      title: "Una base frontend con alcance completo de producto.",
      paragraphs: [
        "Construyo interfaces cuidando jerarquía, accesibilidad y comportamiento responsive, y las conecto con los servicios y datos que hacen funcionar el producto.",
        "Mi trabajo reciente incluye autenticación, permisos, APIs REST, datos relacionales, emails transaccionales, despliegues productivos y el QA necesario para sostener esos flujos.",
      ],
      capabilities: [
        {
          title: "Interfaces de producto",
          description: "Experiencias responsive y accesibles construidas alrededor de flujos reales.",
        },
        {
          title: "Integración backend",
          description: "APIs, autenticación, permisos y conexiones con servicios externos.",
        },
        {
          title: "Datos y despliegue",
          description: "Persistencia relacional, publicación y QA orientado a producción.",
        },
      ],
      technologiesLabel: "Stack de trabajo",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "Supabase",
        "Resend",
      ],
    },
    selectedProjects: {
      eyebrow: "Proyectos seleccionados · 02—03",
      title: "Productos distintos, el mismo foco en la ejecución.",
      introduction:
        "Dos proyectos que muestran trabajo colaborativo de producto y una entrega productiva para un servicio profesional real.",
      projects: [
        {
          number: "02",
          title: "OpsCore",
          category: "Plataforma operativa colaborativa",
          summary:
            "Producto para gestionar incidentes con navegación protegida, interfaces por rol, flujos de asignación y resolución, notificaciones, dashboards e integración con API REST.",
          image: "/images/projects/opscore.webp",
          alt: "Dashboard operativo de incidentes de OpsCore",
          stack: ["Next.js", "React", "Tailwind CSS", "Django REST API"],
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
          category: "Sitio profesional · Producción",
          summary:
            "Sitio productivo para un estudio jurídico, desarrollado alrededor del SEO local y un flujo de consultas con carga de archivos, persistencia de leads y emails transaccionales.",
          image: "/images/projects/estudio-lachat.webp",
          alt: "Página principal del sitio Estudio Jurídico Lachat",
          stack: ["Next.js", "TypeScript", "Supabase", "Resend"],
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
      eyebrow: "Cómo trabajo",
      title: "Decisiones claras, complejidad contenida y entregas verificables.",
      steps: [
        {
          number: "01",
          title: "Entender el flujo",
          description: "Defino el usuario, la tarea real y las restricciones técnicas antes de diseñar la interfaz.",
        },
        {
          number: "02",
          title: "Construir por responsabilidad",
          description: "Separo presentación, datos e integraciones para que el producto siga siendo mantenible.",
        },
        {
          number: "03",
          title: "Verificar el recorrido completo",
          description: "Reviso responsive, accesibilidad, contratos tipados y el build de producción.",
        },
      ],
      servicesLabel: "Disponible para",
      services: [
        "Sitios web profesionales",
        "Aplicaciones web y paneles de gestión",
        "Modernización e integración de sistemas web",
      ],
    },
    contact: {
      eyebrow: "Trabajemos juntos",
      title: "¿Tenés un producto, una oportunidad o un desafío web en mente?",
      text: "Estoy abierto a conversar con equipos de producto, equipos de ingeniería y empresas que necesiten una ejecución web cuidada.",
      emailLabel: "Escribirle a Lucas",
    },
    footerNote: "Diseñado y desarrollado desde Argentina.",
  },
} satisfies LocalizedSiteContent;
