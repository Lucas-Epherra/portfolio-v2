import type {
  CaseStudySlug,
  LocalizedCaseStudies,
  LocalizedCaseStudyUi,
} from "@/types/case-study";
import type { Locale } from "@/types/locale";

export const CASE_STUDY_ORDER = [
  "mitaller360",
  "opscore",
  "estudio-lachat",
] as const satisfies readonly CaseStudySlug[];

export const caseStudyUi = {
  en: {
    backToPortfolio: "Back to selected work",
    caseStudyLabel: "Case study",
    closeImageLabel: "Close image",
    contactLabel: "Contact",
    decisionsLabel: "Decisions",
    galleryLabel: "Product gallery",
    nextCase: "Next case study",
    overviewLabel: "Overview",
    portfolioLabel: "Portfolio",
    previousCase: "Previous case study",
    skipToContent: "Skip to case study content",
    viewImageLabel: "View full image",
  },
  es: {
    backToPortfolio: "Volver a proyectos",
    caseStudyLabel: "Caso de estudio",
    closeImageLabel: "Cerrar imagen",
    contactLabel: "Contacto",
    decisionsLabel: "Decisiones",
    galleryLabel: "Galería del producto",
    nextCase: "Siguiente caso de estudio",
    overviewLabel: "Resumen",
    portfolioLabel: "Portfolio",
    previousCase: "Caso de estudio anterior",
    skipToContent: "Saltar al contenido del caso de estudio",
    viewImageLabel: "Ver imagen completa",
  },
} satisfies LocalizedCaseStudyUi;

export const caseStudies = {
  en: {
    mitaller360: {
      slug: "mitaller360",
      number: "01",
      title: "MiTaller360",
      category: "Workshop management SaaS",
      description:
        "Case study of MiTaller360, a production-deployed SaaS for workshop operations built across frontend, backend, data and delivery.",
      summary:
        "A complete operational product that centralizes customers, vehicles, work orders, scheduling, receipts and workshop administration.",
      galleryTitle: "The workshop workflow, seen in context.",
      galleryDescription:
        "Selected product states show how the operational system works beyond its main dashboard.",
      heroImage: "/images/case-studies/mitaller360/dashboard.webp",
      heroAlt: "MiTaller360 workshop operations dashboard",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Resend",
        "Vercel",
        "Render",
      ],
      facts: [
        { label: "Role", value: "Co-founder · Full Stack Developer" },
        { label: "Scope", value: "Frontend, API, data and production" },
        { label: "Product", value: "Operational SaaS for automotive workshops" },
        { label: "Status", value: "Production deployed · Early validation" },
      ],
      actions: [
        { href: "https://www.mitaller360.com", label: "View live product" },
        {
          href: "https://github.com/Lucas-Epherra/talleres-mvp",
          label: "View repository",
        },
      ],
      sections: [
        {
          id: "overview",
          number: "01",
          eyebrow: "Context",
          title: "From scattered operational information to one workspace.",
          paragraphs: [
            "MiTaller360 began with a concrete operational problem: workshop information was spread across messages and manual records, making day-to-day follow-up harder than it needed to be.",
            "The product brings the essential workflow into one place so a workshop can understand what is pending, what is in progress and what needs attention without reconstructing the operation from separate conversations.",
          ],
        },
        {
          id: "scope",
          number: "02",
          eyebrow: "Product scope",
          title: "End-to-end responsibility across the product.",
          paragraphs: [
            "As co-founder and developer, I work across interface architecture, backend services, data modeling, integrations, deployment and functional QA.",
          ],
          bullets: [
            "Authentication, protected areas and role-based permissions.",
            "Workshop, customer and vehicle management.",
            "Work orders with operational statuses and event history.",
            "Scheduling and workshop agenda.",
            "Non-fiscal receipts with PDF generation and email delivery.",
            "Platform administration, invitations and audit events.",
            "Supplier and spare-part workflows connected to workshop operations.",
          ],
        },
        {
          id: "technical-decisions",
          number: "03",
          eyebrow: "Technical decisions",
          title: "Clear boundaries between interface, services and data.",
          paragraphs: [
            "The product uses a monorepo with independent web and API applications. This keeps deployment boundaries explicit while allowing the contracts between both sides to evolve as one product.",
          ],
          bullets: [
            "Next.js App Router and TypeScript for the product interface.",
            "NestJS REST API as the backend authority for business rules.",
            "Prisma and PostgreSQL for relational modeling and migrations.",
            "Object storage for workshop logos and Resend for transactional email.",
            "Reusable server-first UI with interactive behavior isolated to leaf components.",
          ],
        },
        {
          id: "delivery",
          number: "04",
          eyebrow: "Production delivery",
          title: "A deployed product, not a static prototype.",
          paragraphs: [
            "The frontend is deployed on Vercel and the API and database run on Render. The product also includes its own domain, transactional email configuration and production communication between services.",
            "Delivery includes responsive QA, role-based workflow checks and iterative corrections using real product states rather than isolated interface mocks.",
          ],
        },
      ],
      gallery: [
        {
          src: "/images/case-studies/mitaller360/work-order-detail.webp",
          alt: "MiTaller360 work order detail with diagnosis, parts and costs",
          caption:
            "A work order connects the reported issue, diagnosis, parts, labor and final cost in one operational record.",
          width: 1672,
          height: 941,
          layout: "wide",
        },
        {
          src: "/images/case-studies/mitaller360/mobile-dashboard.webp",
          alt: "Responsive MiTaller360 dashboard on a mobile viewport",
          caption:
            "The daily workshop summary remains usable on mobile without reducing the operational hierarchy.",
          width: 600,
          height: 1280,
          layout: "portrait",
        },
        {
          src: "/images/case-studies/mitaller360/work-orders.webp",
          alt: "MiTaller360 work order search, filters and operational counters",
          caption:
            "Search, status filters and counters provide a direct entry point into active workshop work.",
          width: 1366,
          height: 768,
          layout: "compact",
        },
        {
          src: "/images/case-studies/mitaller360/schedule.webp",
          alt: "MiTaller360 monthly workshop schedule",
          caption:
            "The monthly schedule connects appointments with workshop capacity and related work orders.",
          width: 1366,
          height: 768,
          layout: "compact",
        },
      ],
    },
    opscore: {
      slug: "opscore",
      number: "02",
      title: "OpsCore",
      category: "Operational incident management",
      description:
        "Case study of the frontend and API integration work delivered for OpsCore, a collaborative operational incident management MVP.",
      summary:
        "A collaborative product for reporting, assigning, resolving and analyzing operational incidents through role-specific workflows.",
      galleryTitle: "The incident lifecycle, seen from each role.",
      galleryDescription:
        "Reporting, supervision and resolution views show how the interface adapts information and available actions to each operational responsibility.",
      heroImage: "/images/case-studies/opscore/dashboard.webp",
      heroAlt: "OpsCore manager dashboard with operational incident metrics",
      stack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Django REST API", "Vercel"],
      facts: [
        { label: "Role", value: "Frontend Developer" },
        { label: "Context", value: "Collaborative No Country simulation" },
        { label: "Scope", value: "Frontend flows and REST API integration" },
        { label: "Status", value: "Operational MVP" },
      ],
      actions: [
        {
          href: "https://github.com/No-Country-simulation/S04-26-Equipo-19-Web-App-Development",
          label: "View repository",
        },
      ],
      sections: [
        {
          id: "overview",
          number: "01",
          eyebrow: "Context",
          title: "One incident, different responsibilities.",
          paragraphs: [
            "OpsCore was built as a collaborative product for operational teams. Its main interface challenge was not simply displaying incidents, but presenting the correct actions and information for each role.",
            "Operators report incidents, supervisors follow and assign them, technicians resolve them and managers analyze operational causes and weekly information.",
          ],
        },
        {
          id: "scope",
          number: "02",
          eyebrow: "Frontend scope",
          title: "Role-aware interfaces connected to a real API.",
          paragraphs: [
            "My contribution focused on frontend delivery and integration with the Django REST API owned by the backend team.",
          ],
          bullets: [
            "Login flows and protected navigation.",
            "Interfaces and available actions determined by user role.",
            "Incident creation, tracking, technician assignment and resolution.",
            "Notifications, dashboard views and root-cause workflows.",
            "Responsive navigation and mobile production corrections.",
          ],
        },
        {
          id: "technical-decisions",
          number: "03",
          eyebrow: "Technical decisions",
          title: "Authentication moved out of browser storage.",
          paragraphs: [
            "The authentication flow was migrated from local storage to an HttpOnly cookie-based session. The frontend then consumed session state through protected routes and server-aware requests instead of treating browser storage as the source of truth.",
            "API integration also required resolving production differences between desktop and mobile login behavior while preserving the backend contract.",
          ],
        },
        {
          id: "delivery",
          number: "04",
          eyebrow: "Team delivery",
          title: "Small changes integrated through a shared workflow.",
          paragraphs: [
            "The product was delivered through Git branches, pull requests, functional testing and coordination with the backend team. My work remained scoped to frontend behavior and the integration boundary rather than claiming ownership of the Django implementation.",
          ],
        },
      ],
      gallery: [
        {
          src: "/images/case-studies/opscore/incidents.webp",
          alt: "OpsCore supervisor incident list with alerts and filters",
          caption:
            "Supervisors receive pending alerts, filter visible incidents and move directly into assignment or follow-up.",
          width: 1254,
          height: 1254,
          layout: "wide",
        },
        {
          src: "/images/case-studies/opscore/mobile-login.webp",
          alt: "OpsCore login interface on a mobile viewport",
          caption:
            "The authentication flow and protected access remain clear and usable on mobile devices.",
          width: 924,
          height: 1600,
          layout: "portrait",
        },
        {
          src: "/images/case-studies/opscore/incident-detail.webp",
          alt: "Resolved OpsCore incident with operational details and root cause",
          caption:
            "The incident record centralizes priority, responsibility, root cause, resolution and elapsed time while enforcing role permissions.",
          width: 1122,
          height: 1402,
          layout: "compact",
        },
        {
          src: "/images/case-studies/opscore/report-incident.webp",
          alt: "OpsCore incident report form for an operator",
          caption:
            "Operators report a new incident through a focused form that records their active session automatically.",
          width: 1254,
          height: 1254,
          layout: "compact",
        },
      ],
    },
    "estudio-lachat": {
      slug: "estudio-lachat",
      number: "03",
      title: "Estudio Jurídico Lachat",
      category: "Professional legal website",
      description:
        "Case study of the production website and lead workflow developed for Estudio Jurídico Lachat.",
      summary:
        "A professional website for a real legal practice, combining a clear editorial presence with consultation capture, document uploads and local search foundations.",
      galleryTitle: "A professional service, presented with clarity.",
      galleryDescription:
        "Selected public pages and consultation states show how the editorial experience supports credibility and client contact.",
      heroImage: "/images/case-studies/estudio-lachat/homepage.webp",
      heroAlt: "Estudio Jurídico Lachat desktop homepage",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Resend", "Vercel"],
      facts: [
        { label: "Role", value: "Full Stack Developer" },
        { label: "Client", value: "Estudio Jurídico Lachat" },
        { label: "Scope", value: "Website, leads, email and local SEO" },
        { label: "Status", value: "Live in production" },
      ],
      actions: [
        { href: "https://www.estudiolachat.com.ar/", label: "View live site" },
        {
          href: "https://github.com/Lucas-Epherra/estudio-lachat-next",
          label: "View repository",
        },
      ],
      sections: [
        {
          id: "overview",
          number: "01",
          eyebrow: "Context",
          title: "A credible digital presence for a real professional practice.",
          paragraphs: [
            "The project needed to communicate legal services clearly without feeling distant or generic. The site had to support local positioning while giving potential clients a direct way to explain their situation and attach documentation.",
            "The visual direction uses an editorial structure, restrained colors and clear language to reinforce trust before asking the visitor to make contact.",
          ],
        },
        {
          id: "scope",
          number: "02",
          eyebrow: "Product scope",
          title: "The website also works as an intake workflow.",
          paragraphs: [
            "Beyond the public pages, I implemented the complete consultation flow and its supporting services.",
          ],
          bullets: [
            "Structured consultation forms with validation.",
            "Document uploads for legal enquiries.",
            "Lead persistence in Supabase.",
            "Transactional email notifications through Resend.",
            "Responsive navigation and accessible semantic structure.",
          ],
        },
        {
          id: "technical-decisions",
          number: "03",
          eyebrow: "Technical decisions",
          title: "Search visibility and maintainability were part of the build.",
          paragraphs: [
            "The application was rebuilt with Next.js App Router and strict TypeScript, using reusable sections and server-first rendering where interactivity was not required.",
          ],
          bullets: [
            "Localized service content and semantic heading structure.",
            "Metadata, Open Graph previews and structured search information.",
            "Local SEO foundations for legal searches in Tres Arroyos.",
            "Clear separation between interface, form validation, persistence and email delivery.",
          ],
        },
        {
          id: "delivery",
          number: "04",
          eyebrow: "Production delivery",
          title: "Domain, services and deployment configured as one product.",
          paragraphs: [
            "The work included the production domain, Vercel deployment, Supabase resources, Resend configuration and final responsive checks. The result is a live client website rather than a portfolio-only concept.",
          ],
        },
      ],
      gallery: [
        {
          src: "/images/case-studies/estudio-lachat/services.webp",
          alt: "Estudio Jurídico Lachat legal services page",
          caption:
            "The service overview translates legal practice areas into concrete situations and direct consultation paths.",
          width: 1366,
          height: 768,
          layout: "featured",
        },
        {
          src: "/images/case-studies/estudio-lachat/process.webp",
          alt: "Estudio Jurídico Lachat consultation process",
          caption:
            "A three-step explanation makes the consultation process predictable before the visitor shares personal information.",
          width: 1366,
          height: 768,
          layout: "wide",
        },
        {
          src: "/images/case-studies/estudio-lachat/mobile-homepage.webp",
          alt: "Estudio Jurídico Lachat homepage on a mobile viewport",
          caption:
            "The editorial hierarchy, brand identity and primary contact actions remain clear on mobile.",
          width: 778,
          height: 1600,
          layout: "portrait",
        },
        {
          src: "/images/case-studies/estudio-lachat/about.webp",
          alt: "Estudio Jurídico Lachat professional approach section",
          caption:
            "The practice positioning combines preventive criteria, remote assistance and direct language.",
          width: 1366,
          height: 768,
          layout: "compact",
        },
        {
          src: "/images/case-studies/estudio-lachat/contact-form.webp",
          alt: "Estudio Jurídico Lachat online consultation form",
          caption:
            "The intake form structures each enquiry, accepts supporting documents and prepares the lead workflow.",
          width: 1366,
          height: 768,
          layout: "compact",
        },
      ],
    },
  },
  es: {
    mitaller360: {
      slug: "mitaller360",
      number: "01",
      title: "MiTaller360",
      category: "SaaS de gestión para talleres",
      description:
        "Caso de estudio de MiTaller360, un SaaS desplegado en producción y construido desde el frontend hasta el backend, los datos y la entrega.",
      summary:
        "Un producto operativo completo que centraliza clientes, vehículos, órdenes de trabajo, agenda, recibos y administración del taller.",
      galleryTitle: "El flujo del taller, visto en contexto.",
      galleryDescription:
        "Una selección de estados del producto muestra cómo funciona el sistema operativo más allá del dashboard principal.",
      heroImage: "/images/case-studies/mitaller360/dashboard.webp",
      heroAlt: "Dashboard operativo de talleres de MiTaller360",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Resend",
        "Vercel",
        "Render",
      ],
      facts: [
        { label: "Rol", value: "Cofundador · Full Stack Developer" },
        { label: "Alcance", value: "Frontend, API, datos y producción" },
        { label: "Producto", value: "SaaS operativo para talleres mecánicos" },
        { label: "Estado", value: "Desplegado · Validación temprana" },
      ],
      actions: [
        { href: "https://www.mitaller360.com", label: "Ver producto" },
        {
          href: "https://github.com/Lucas-Epherra/talleres-mvp",
          label: "Ver repositorio",
        },
      ],
      sections: [
        {
          id: "overview",
          number: "01",
          eyebrow: "Contexto",
          title: "De información operativa dispersa a un único espacio de trabajo.",
          paragraphs: [
            "MiTaller360 nació a partir de un problema operativo concreto: la información del taller estaba distribuida entre mensajes y registros manuales, lo que dificultaba el seguimiento cotidiano.",
            "El producto reúne el flujo esencial en un solo lugar para entender qué está pendiente, qué se encuentra en proceso y qué requiere atención sin reconstruir la operación desde conversaciones separadas.",
          ],
        },
        {
          id: "scope",
          number: "02",
          eyebrow: "Alcance del producto",
          title: "Responsabilidad de extremo a extremo sobre el producto.",
          paragraphs: [
            "Como cofundador y desarrollador trabajo sobre la arquitectura de interfaz, servicios backend, modelado de datos, integraciones, despliegue y QA funcional.",
          ],
          bullets: [
            "Autenticación, áreas protegidas y permisos por rol.",
            "Gestión de talleres, clientes y vehículos.",
            "Órdenes de trabajo con estados operativos e historial de eventos.",
            "Agenda y turnos del taller.",
            "Recibos no fiscales con generación de PDF y envío por email.",
            "Administración de plataforma, invitaciones y eventos de auditoría.",
            "Flujos de proveedores y repuestos conectados con la operación.",
          ],
        },
        {
          id: "technical-decisions",
          number: "03",
          eyebrow: "Decisiones técnicas",
          title: "Límites claros entre interfaz, servicios y datos.",
          paragraphs: [
            "El producto utiliza un monorepo con aplicaciones web y API independientes. Esto mantiene explícitos los límites de despliegue y permite que los contratos entre ambos lados evolucionen como parte de un mismo producto.",
          ],
          bullets: [
            "Next.js App Router y TypeScript para la interfaz del producto.",
            "API REST en NestJS como autoridad de las reglas de negocio.",
            "Prisma y PostgreSQL para modelado relacional y migraciones.",
            "Almacenamiento de objetos para logos y Resend para emails transaccionales.",
            "Interfaz reutilizable server-first con interacción aislada en componentes hoja.",
          ],
        },
        {
          id: "delivery",
          number: "04",
          eyebrow: "Entrega productiva",
          title: "Un producto desplegado, no un prototipo estático.",
          paragraphs: [
            "El frontend está desplegado en Vercel y la API y la base de datos funcionan en Render. El producto también cuenta con dominio propio, configuración de emails transaccionales y comunicación productiva entre servicios.",
            "La entrega incluye QA responsive, validación de flujos por rol y correcciones iterativas utilizando estados reales del producto en lugar de mocks aislados.",
          ],
        },
      ],
      gallery: [
        {
          src: "/images/case-studies/mitaller360/work-order-detail.webp",
          alt: "Detalle de una orden de MiTaller360 con diagnóstico, repuestos y costos",
          caption:
            "Una orden conecta el problema reportado, el diagnóstico, los repuestos, la mano de obra y el costo final en un único registro operativo.",
          width: 1672,
          height: 941,
          layout: "wide",
        },
        {
          src: "/images/case-studies/mitaller360/mobile-dashboard.webp",
          alt: "Dashboard responsive de MiTaller360 en una pantalla móvil",
          caption:
            "El resumen diario del taller continúa siendo utilizable en mobile sin perder la jerarquía operativa.",
          width: 600,
          height: 1280,
          layout: "portrait",
        },
        {
          src: "/images/case-studies/mitaller360/work-orders.webp",
          alt: "Buscador, filtros y contadores operativos de órdenes en MiTaller360",
          caption:
            "La búsqueda, los filtros por estado y los contadores ofrecen una entrada directa al trabajo activo del taller.",
          width: 1366,
          height: 768,
          layout: "compact",
        },
        {
          src: "/images/case-studies/mitaller360/schedule.webp",
          alt: "Agenda mensual del taller en MiTaller360",
          caption:
            "La agenda mensual conecta los turnos con la capacidad del taller y las órdenes relacionadas.",
          width: 1366,
          height: 768,
          layout: "compact",
        },
      ],
    },
    opscore: {
      slug: "opscore",
      number: "02",
      title: "OpsCore",
      category: "Gestión de incidentes operativos",
      description:
        "Caso de estudio del frontend y la integración con API desarrollados para OpsCore, un MVP colaborativo de gestión de incidentes.",
      summary:
        "Un producto colaborativo para reportar, asignar, resolver y analizar incidentes operativos mediante flujos específicos por rol.",
      galleryTitle: "El ciclo del incidente, visto desde cada rol.",
      galleryDescription:
        "Las vistas de reporte, supervisión y resolución muestran cómo la interfaz adapta la información y las acciones disponibles a cada responsabilidad operativa.",
      heroImage: "/images/case-studies/opscore/dashboard.webp",
      heroAlt: "Dashboard de manager de OpsCore con métricas de incidentes operativos",
      stack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Django REST API", "Vercel"],
      facts: [
        { label: "Rol", value: "Frontend Developer" },
        { label: "Contexto", value: "Simulación colaborativa de No Country" },
        { label: "Alcance", value: "Flujos frontend e integración REST" },
        { label: "Estado", value: "MVP operativo" },
      ],
      actions: [
        {
          href: "https://github.com/No-Country-simulation/S04-26-Equipo-19-Web-App-Development",
          label: "Ver repositorio",
        },
      ],
      sections: [
        {
          id: "overview",
          number: "01",
          eyebrow: "Contexto",
          title: "Un incidente, distintas responsabilidades.",
          paragraphs: [
            "OpsCore fue construido como un producto colaborativo para equipos operativos. El principal desafío de interfaz no era solamente mostrar incidentes, sino presentar las acciones y la información correcta para cada rol.",
            "Los operadores reportan, los supervisores realizan seguimiento y asignan, los técnicos resuelven y los managers analizan causas e información semanal.",
          ],
        },
        {
          id: "scope",
          number: "02",
          eyebrow: "Alcance frontend",
          title: "Interfaces por rol conectadas con una API real.",
          paragraphs: [
            "Mi contribución se concentró en la entrega frontend y la integración con la API Django REST desarrollada por el equipo backend.",
          ],
          bullets: [
            "Flujos de login y navegación protegida.",
            "Interfaces y acciones disponibles según el rol del usuario.",
            "Creación, seguimiento, asignación técnica y resolución de incidentes.",
            "Notificaciones, dashboards y flujos de análisis de causa raíz.",
            "Navegación responsive y correcciones productivas en mobile.",
          ],
        },
        {
          id: "technical-decisions",
          number: "03",
          eyebrow: "Decisiones técnicas",
          title: "La autenticación dejó de depender del almacenamiento del navegador.",
          paragraphs: [
            "El flujo de autenticación se migró desde localStorage a sesiones mediante cookies HttpOnly. El frontend pasó a consumir el estado de sesión mediante rutas protegidas y requests conscientes del servidor, sin tratar al almacenamiento del navegador como fuente de verdad.",
            "La integración también requirió resolver diferencias productivas entre el login de escritorio y mobile respetando el contrato del backend.",
          ],
        },
        {
          id: "delivery",
          number: "04",
          eyebrow: "Entrega en equipo",
          title: "Cambios pequeños integrados mediante un flujo compartido.",
          paragraphs: [
            "El producto se entregó mediante ramas de Git, Pull Requests, validación funcional y coordinación con backend. Mi trabajo se mantuvo enfocado en el comportamiento frontend y el límite de integración, sin atribuirme la implementación de Django.",
          ],
        },
      ],
      gallery: [
        {
          src: "/images/case-studies/opscore/incidents.webp",
          alt: "Listado de incidentes de OpsCore con alertas y filtros para supervisión",
          caption:
            "Los supervisores reciben alertas pendientes, filtran los incidentes visibles y acceden directamente a la asignación o el seguimiento.",
          width: 1254,
          height: 1254,
          layout: "wide",
        },
        {
          src: "/images/case-studies/opscore/mobile-login.webp",
          alt: "Interfaz de acceso a OpsCore en una pantalla móvil",
          caption:
            "El flujo de autenticación y el acceso protegido mantienen claridad y usabilidad en dispositivos móviles.",
          width: 924,
          height: 1600,
          layout: "portrait",
        },
        {
          src: "/images/case-studies/opscore/incident-detail.webp",
          alt: "Incidente resuelto de OpsCore con detalle operativo y causa raíz",
          caption:
            "El registro centraliza prioridad, responsable, causa raíz, resolución y tiempo transcurrido, respetando los permisos del rol.",
          width: 1122,
          height: 1402,
          layout: "compact",
        },
        {
          src: "/images/case-studies/opscore/report-incident.webp",
          alt: "Formulario de reporte de incidentes de OpsCore para un operador",
          caption:
            "El operador registra un incidente mediante un formulario enfocado que incorpora automáticamente su sesión activa.",
          width: 1254,
          height: 1254,
          layout: "compact",
        },
      ],
    },
    "estudio-lachat": {
      slug: "estudio-lachat",
      number: "03",
      title: "Estudio Jurídico Lachat",
      category: "Sitio web jurídico profesional",
      description:
        "Caso de estudio del sitio productivo y el flujo de captación desarrollado para Estudio Jurídico Lachat.",
      summary:
        "Un sitio profesional para un estudio jurídico real, combinando una presencia editorial clara con consultas, carga de documentación y fundamentos de posicionamiento local.",
      galleryTitle: "Un servicio profesional, presentado con claridad.",
      galleryDescription:
        "Las páginas públicas y los estados de consulta seleccionados muestran cómo la experiencia editorial sostiene la credibilidad y el contacto con potenciales clientes.",
      heroImage: "/images/case-studies/estudio-lachat/homepage.webp",
      heroAlt: "Página principal de Estudio Jurídico Lachat en escritorio",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Resend", "Vercel"],
      facts: [
        { label: "Rol", value: "Full Stack Developer" },
        { label: "Cliente", value: "Estudio Jurídico Lachat" },
        { label: "Alcance", value: "Sitio, leads, emails y SEO local" },
        { label: "Estado", value: "Publicado en producción" },
      ],
      actions: [
        { href: "https://www.estudiolachat.com.ar/", label: "Ver sitio publicado" },
        {
          href: "https://github.com/Lucas-Epherra/estudio-lachat-next",
          label: "Ver repositorio",
        },
      ],
      sections: [
        {
          id: "overview",
          number: "01",
          eyebrow: "Contexto",
          title: "Una presencia digital creíble para un estudio profesional real.",
          paragraphs: [
            "El proyecto necesitaba comunicar servicios jurídicos con claridad sin sentirse distante ni genérico. El sitio debía favorecer el posicionamiento local y ofrecer una forma directa de explicar una situación y adjuntar documentación.",
            "La dirección visual utiliza una estructura editorial, colores contenidos y lenguaje claro para reforzar confianza antes de solicitar el contacto.",
          ],
        },
        {
          id: "scope",
          number: "02",
          eyebrow: "Alcance del producto",
          title: "El sitio también funciona como flujo de ingreso de consultas.",
          paragraphs: [
            "Además de las páginas públicas implementé el flujo completo de consultas y los servicios que lo sostienen.",
          ],
          bullets: [
            "Formularios estructurados con validación.",
            "Carga de documentación para consultas jurídicas.",
            "Persistencia de leads en Supabase.",
            "Notificaciones transaccionales mediante Resend.",
            "Navegación responsive y estructura semántica accesible.",
          ],
        },
        {
          id: "technical-decisions",
          number: "03",
          eyebrow: "Decisiones técnicas",
          title: "La visibilidad en buscadores y la mantenibilidad formaron parte del desarrollo.",
          paragraphs: [
            "La aplicación fue reconstruida con Next.js App Router y TypeScript estricto, utilizando secciones reutilizables y renderizado server-first donde no se requería interacción.",
          ],
          bullets: [
            "Contenido de servicios y jerarquía semántica de encabezados.",
            "Metadata, Open Graph e información estructurada para buscadores.",
            "Fundamentos de SEO local para búsquedas jurídicas en Tres Arroyos.",
            "Separación clara entre interfaz, validación, persistencia y entrega de emails.",
          ],
        },
        {
          id: "delivery",
          number: "04",
          eyebrow: "Entrega productiva",
          title: "Dominio, servicios y despliegue configurados como un único producto.",
          paragraphs: [
            "El trabajo incluyó dominio productivo, despliegue en Vercel, recursos de Supabase, configuración de Resend y validaciones responsive finales. El resultado es un sitio real para un cliente, no un concepto creado solamente para el portfolio.",
          ],
        },
      ],
      gallery: [
        {
          src: "/images/case-studies/estudio-lachat/services.webp",
          alt: "Página de servicios legales de Estudio Jurídico Lachat",
          caption:
            "La presentación de servicios traduce las áreas jurídicas en situaciones concretas y caminos directos de consulta.",
          width: 1366,
          height: 768,
          layout: "featured",
        },
        {
          src: "/images/case-studies/estudio-lachat/process.webp",
          alt: "Proceso de consulta de Estudio Jurídico Lachat",
          caption:
            "La explicación en tres pasos vuelve previsible el proceso antes de que la persona comparta información personal.",
          width: 1366,
          height: 768,
          layout: "wide",
        },
        {
          src: "/images/case-studies/estudio-lachat/mobile-homepage.webp",
          alt: "Página principal de Estudio Jurídico Lachat en una pantalla móvil",
          caption:
            "La jerarquía editorial, la identidad y las acciones principales de contacto se mantienen claras en mobile.",
          width: 778,
          height: 1600,
          layout: "portrait",
        },
        {
          src: "/images/case-studies/estudio-lachat/about.webp",
          alt: "Sección sobre el enfoque profesional de Estudio Jurídico Lachat",
          caption:
            "El posicionamiento del estudio combina criterio preventivo, atención remota y lenguaje directo.",
          width: 1366,
          height: 768,
          layout: "compact",
        },
        {
          src: "/images/case-studies/estudio-lachat/contact-form.webp",
          alt: "Formulario de consulta online de Estudio Jurídico Lachat",
          caption:
            "El formulario estructura cada consulta, admite documentación de respaldo y prepara el flujo de captación.",
          width: 1366,
          height: 768,
          layout: "compact",
        },
      ],
    },
  },
} satisfies LocalizedCaseStudies;

/** Comprueba si un segmento pertenece al conjunto público de casos. */
export function isCaseStudySlug(slug: string): slug is CaseStudySlug {
  return CASE_STUDY_ORDER.some((caseSlug) => caseSlug === slug);
}

/** Obtiene un caso solamente cuando el slug pertenece a la colección pública. */
export function getCaseStudy(locale: Locale, slug: string) {
  if (!isCaseStudySlug(slug)) {
    return undefined;
  }

  return caseStudies[locale][slug];
}
