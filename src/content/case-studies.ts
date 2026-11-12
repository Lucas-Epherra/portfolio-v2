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
      contribution:
        "I co-founded a SaaS that centralizes work orders, scheduling and receipts for workshops.",
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
        { href: "https://www.mitaller360.com", label: "Access MiTaller360" },
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
      contribution:
        "I implemented role-based incident reporting, assignment and resolution flows and integrated the frontend with a REST API.",
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
      contribution:
        "I turned a landing page into a multi-page site with practice areas, legal guides and local SEO, routing every enquiry to WhatsApp with a message tailored to each page.",
      description:
        "Case study of the multi-page website developed and published for Estudio Jurídico Lachat.",
      summary:
        "The website of a real legal practice, rebuilt as a multi-page site with practice areas, legal guides and WhatsApp consultations.",
      galleryTitle: "A legal practice, explained page by page.",
      galleryDescription:
        "Practice areas, guides and the contact page show how the site answers common questions before the first message.",
      heroImage: "/images/case-studies/estudio-lachat/homepage.webp",
      heroAlt: "Estudio Jurídico Lachat desktop homepage",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Schema.org", "Vercel"],
      facts: [
        { label: "Role", value: "Full Stack Developer" },
        { label: "Client", value: "Estudio Jurídico Lachat" },
        { label: "Scope", value: "Multi-page site, content and local SEO" },
        { label: "Status", value: "Live in production" },
      ],
      actions: [
        { href: "https://www.estudiolachat.com.ar/", label: "View live site" },
      ],
      sections: [
        {
          id: "overview",
          number: "01",
          eyebrow: "Context",
          title: "From a single landing page to a site people can navigate.",
          paragraphs: [
            "The first version was a one-page landing with a contact form. As the practice grew to nine practice areas and two in-person locations, a single scroll could no longer explain what the practice handles or how a consultation works.",
            "The second version reorganizes the content into navigable pages, so each visitor can find their situation, read about it and reach the practice with context.",
          ],
        },
        {
          id: "scope",
          number: "02",
          eyebrow: "Product scope",
          title: "Each area, guide and question has its own page.",
          paragraphs: [
            "I rebuilt the site structure, the visual design and the content model, working with the content provided by the practice.",
          ],
          bullets: [
            "Nine practice areas, each with its own page, common situations and FAQs.",
            "Legal guides with author, credentials and update date.",
            "A frequently asked questions page grouped by topic.",
            "About and contact pages with locations, opening hours and first consultation details.",
            "Breadcrumbs, a mobile menu and a floating WhatsApp button on every page.",
          ],
        },
        {
          id: "technical-decisions",
          number: "03",
          eyebrow: "Technical decisions",
          title: "Contact moved from a form to WhatsApp.",
          paragraphs: [
            "The first version stored enquiries with attachments in Supabase and sent email notifications. In the redesign, consultations were routed to WhatsApp, where visitors can also send documents. The form remains in the code, disabled.",
            "Each page opens the chat with its own prefilled message, so the practice knows which area or guide the enquiry comes from.",
          ],
          bullets: [
            "Prefilled WhatsApp messages resolved from the current route.",
            "Structured data for the legal service, people, FAQs, services and articles.",
            "Per-page metadata, sitemap and llms.txt for search and AI assistants.",
            "Permanent redirects whenever a route or area was renamed.",
          ],
        },
        {
          id: "delivery",
          number: "04",
          eyebrow: "Production delivery",
          title: "Iterated with the client and published in production.",
          paragraphs: [
            "Changes were delivered through branches and Pull Requests, reviewed with the practice and deployed on Vercel with its own domain. The result is a live client website rather than a portfolio-only concept.",
          ],
        },
      ],
      gallery: [
        {
          src: "/images/case-studies/estudio-lachat/services.webp",
          alt: "Estudio Jurídico Lachat practice areas page",
          caption:
            "The practice areas page describes each area through concrete situations and links to its own page.",
          width: 1366,
          height: 768,
          layout: "featured",
        },
        {
          src: "/images/case-studies/estudio-lachat/guide.webp",
          alt: "Estudio Jurídico Lachat guide on starting a succession",
          caption:
            "Guides answer frequent questions in depth, with author, credentials and update date.",
          width: 1366,
          height: 768,
          layout: "wide",
        },
        {
          src: "/images/case-studies/estudio-lachat/mobile-homepage.webp",
          alt: "Estudio Jurídico Lachat homepage on a mobile viewport",
          caption:
            "On mobile, the WhatsApp action and the practice areas stay within reach from the first screen.",
          width: 778,
          height: 1600,
          layout: "portrait",
        },
        {
          src: "/images/case-studies/estudio-lachat/service-area.webp",
          alt: "Estudio Jurídico Lachat succession practice area page",
          caption:
            "Each area page opens WhatsApp with a message specific to that area.",
          width: 1366,
          height: 768,
          layout: "compact",
        },
        {
          src: "/images/case-studies/estudio-lachat/contact.webp",
          alt: "Estudio Jurídico Lachat contact page centered on WhatsApp",
          caption:
            "The contact page explains next steps, locations and opening hours before the first message.",
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
      contribution:
        "Cofundé un SaaS que centraliza órdenes de trabajo, agenda y recibos para talleres.",
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
        { href: "https://www.mitaller360.com", label: "Acceder a MiTaller360" },
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
      contribution:
        "Implementé flujos de reporte, asignación y resolución de incidentes por rol e integré el frontend con una API REST.",
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
      contribution:
        "Convertí una landing en un sitio multipágina con áreas de práctica, guías jurídicas y SEO local, y llevé cada consulta a WhatsApp con un mensaje según la página.",
      description:
        "Caso de estudio del sitio multipágina desarrollado y publicado para Estudio Jurídico Lachat.",
      summary:
        "El sitio de un estudio jurídico real, rehecho como sitio multipágina con áreas de práctica, guías jurídicas y consultas por WhatsApp.",
      galleryTitle: "Un estudio jurídico, explicado página por página.",
      galleryDescription:
        "Las áreas de práctica, las guías y la página de contacto muestran cómo el sitio responde las dudas frecuentes antes del primer mensaje.",
      heroImage: "/images/case-studies/estudio-lachat/homepage.webp",
      heroAlt: "Página principal de Estudio Jurídico Lachat en escritorio",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Schema.org", "Vercel"],
      facts: [
        { label: "Rol", value: "Full Stack Developer" },
        { label: "Cliente", value: "Estudio Jurídico Lachat" },
        { label: "Alcance", value: "Sitio multipágina, contenido y SEO local" },
        { label: "Estado", value: "Publicado en producción" },
      ],
      actions: [
        { href: "https://www.estudiolachat.com.ar/", label: "Ver sitio publicado" },
      ],
      sections: [
        {
          id: "overview",
          number: "01",
          eyebrow: "Contexto",
          title: "De una landing a un sitio que se puede recorrer.",
          paragraphs: [
            "La primera versión era una landing de una sola página con formulario de contacto. Cuando el estudio pasó a nueve áreas de práctica y dos sedes presenciales, una sola página ya no alcanzaba para explicar qué temas atiende ni cómo funciona una consulta.",
            "La segunda versión ordena el contenido en páginas navegables, para que cada persona encuentre su situación, lea sobre ella y llegue al estudio con contexto.",
          ],
        },
        {
          id: "scope",
          number: "02",
          eyebrow: "Alcance del producto",
          title: "Cada área, guía y pregunta tiene su propia página.",
          paragraphs: [
            "Rehíce la estructura del sitio, el diseño visual y el modelo de contenido, trabajando con el contenido que aportó el estudio.",
          ],
          bullets: [
            "Nueve áreas de práctica, cada una con su página, situaciones frecuentes y preguntas.",
            "Guías jurídicas con autora, matrícula y fecha de actualización.",
            "Página de preguntas frecuentes agrupadas por tema.",
            "Páginas de nosotros y contacto con sedes, horarios y datos de la primera consulta.",
            "Breadcrumbs, menú móvil y botón flotante de WhatsApp en todas las páginas.",
          ],
        },
        {
          id: "technical-decisions",
          number: "03",
          eyebrow: "Decisiones técnicas",
          title: "El contacto pasó del formulario a WhatsApp.",
          paragraphs: [
            "La primera versión guardaba las consultas con adjuntos en Supabase y enviaba notificaciones por correo. En el rediseño las consultas pasaron a WhatsApp, donde también se puede enviar documentación. El formulario quedó en el código, desactivado.",
            "Cada página abre el chat con su propio mensaje precargado, así el estudio sabe desde qué área o guía llega la consulta.",
          ],
          bullets: [
            "Mensajes de WhatsApp precargados según la ruta actual.",
            "Datos estructurados del estudio, sus profesionales, preguntas frecuentes, servicios y artículos.",
            "Metadata por página, sitemap y llms.txt para buscadores y asistentes de IA.",
            "Redirecciones permanentes cada vez que se renombró una ruta o un área.",
          ],
        },
        {
          id: "delivery",
          number: "04",
          eyebrow: "Entrega productiva",
          title: "Iterado con la clienta y publicado en producción.",
          paragraphs: [
            "Los cambios se entregaron con ramas y Pull Requests, se revisaron con el estudio y se desplegaron en Vercel con dominio propio. El resultado es un sitio real para un cliente, no un concepto creado solamente para el portfolio.",
          ],
        },
      ],
      gallery: [
        {
          src: "/images/case-studies/estudio-lachat/services.webp",
          alt: "Página de áreas de práctica de Estudio Jurídico Lachat",
          caption:
            "La página de áreas describe cada una con situaciones concretas y enlaza a su propia página.",
          width: 1366,
          height: 768,
          layout: "featured",
        },
        {
          src: "/images/case-studies/estudio-lachat/guide.webp",
          alt: "Guía de Estudio Jurídico Lachat sobre cómo iniciar una sucesión",
          caption:
            "Las guías responden en profundidad las dudas frecuentes, con autora, matrícula y fecha de actualización.",
          width: 1366,
          height: 768,
          layout: "wide",
        },
        {
          src: "/images/case-studies/estudio-lachat/mobile-homepage.webp",
          alt: "Página principal de Estudio Jurídico Lachat en una pantalla móvil",
          caption:
            "En mobile, la acción de WhatsApp y las áreas de práctica quedan al alcance desde la primera pantalla.",
          width: 778,
          height: 1600,
          layout: "portrait",
        },
        {
          src: "/images/case-studies/estudio-lachat/service-area.webp",
          alt: "Página del área de sucesiones de Estudio Jurídico Lachat",
          caption:
            "Cada página de área abre WhatsApp con un mensaje propio de esa área.",
          width: 1366,
          height: 768,
          layout: "compact",
        },
        {
          src: "/images/case-studies/estudio-lachat/contact.webp",
          alt: "Página de contacto de Estudio Jurídico Lachat centrada en WhatsApp",
          caption:
            "La página de contacto explica los próximos pasos, las sedes y los horarios antes del primer mensaje.",
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
