# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: recruiters, hiring managers and technical teams.** They arrive from LinkedIn, the CV or a direct link, scan quickly, and decide whether Lucas is worth contacting or advancing in a hiring process. Their job: verify real, end-to-end product work and find the CV and contact fast.
- **Secondary: founders and businesses looking for someone to build a web product.** Their job: judge whether Lucas can take a product from requirements to production and start a project conversation.
- Spanish-speaking audiences use `/es`; `/en` is the default and `x-default`.

## Product Purpose

A bilingual (ES/EN) professional portfolio for Lucas Epherra, Full Stack Developer, based in Tres Arroyos, Buenos Aires, Argentina (UTC-3), open to new opportunities. It presents selected work through case studies and leads to contact or CV download. Success means qualified contact: interview invitations first, project inquiries second.

## Positioning

The combination of two things a neighbouring portfolio cannot truthfully copy:

1. **A product of his own in production.** Lucas co-founded and builds MiTaller360, an operational SaaS for automotive workshops, with end-to-end responsibility across frontend, API, data, deployment and QA — not isolated tickets or static prototypes.
2. **Product and design judgment.** A balance between design, code and real-world needs; turning product requirements into working, usable software.

## Operating Context

- Visitors usually come from LinkedIn (planned: portfolio pinned in LinkedIn Featured, `/es` link), the CV PDFs, or direct shares with localized OG previews.
- Evaluation is fast and comparative: a recruiter skims the home page, opens one or two case studies, then downloads the CV or emails.
- Home page: hero, featured project (MiTaller360), selected projects (OpsCore, Estudio Jurídico Lachat), capabilities, about, contact. Each project has a case study route under `/{locale}/projects/{slug}`.

## Capabilities and Constraints

- Next.js App Router, React, strict TypeScript, Tailwind CSS v4, pnpm; deployed on Vercel at `https://www.lucasepherra.com.ar` (www canonical).
- Server-first: `"use client"` only in leaf components. No CMS, backend, database or auth.
- Content lives in `src/content/site.ts` and `src/content/case-studies.ts`; ES and EN must stay in sync.
- SEO commitments: localized metadata and `hreflang`, JSON-LD ProfilePage + Person with verifiable data only, 10 historical 308 redirects that must not be removed without reviewing traffic.
- Vercel Analytics only, no custom events, no Google Analytics.
- Social images are versioned (`portfolio-og-{es,en}-v2.png`); a new version becomes v3, never an overwrite.
- Validation after changes: `pnpm typecheck`, `pnpm lint`, `pnpm build`, plus Lighthouse and headers when relevant.

## Brand Commitments

- Name: Lucas Epherra. Role label: Full Stack Developer.
- Voice: direct and factual; no defensive phrasing, no invented metrics.
- Personal photo exists at `public/images/lucas-epherra.webp`.

## Evidence on Hand

- **Case studies with real screenshots:** MiTaller360 (`public/images/case-studies/mitaller360/`), OpsCore (`.../opscore/`), Estudio Jurídico Lachat (`.../estudio-lachat/`).
- **Live products and repositories:** mitaller360.com, estudiolachat.com.ar, public GitHub repositories linked from content.
- **CVs:** `public/cv/lucas-epherra-cv-{en,es}.pdf`.
- **Testimonials — not yet on the site, potentially obtainable:**
  - A reference could be requested from the Estudio Jurídico Lachat client about their website.
  - Three LinkedIn recommendations related to OpsCore could be extracted.
  - The CEO of No Country left a LinkedIn recommendation.
  - None of these may be quoted until the actual text and permission are in hand.
- **Fellowship work is under NDA:** do not publish its content; whether anything can be shown is undecided.
- No client logos, press, or quantified outcome metrics exist. Do not fabricate any.

## Product Principles

1. **Proof over claims.** Every assertion is backed by a live product, a repository, a screenshot or a verifiable fact.
2. **Employment first, projects second.** CV and contact paths serve recruiters without hiding the project-inquiry path.
3. **End-to-end ownership is the story.** Show responsibility across interface, services, data and delivery, led by MiTaller360.
4. **Two languages, one truth.** ES and EN carry the same content and claims.
5. **Production quality is part of the evidence.** Accessibility, performance and SEO of the portfolio itself demonstrate the craft.

## Accessibility & Inclusion

- WCAG AA contrast is a standing requirement (copper accent tokens are split per light/dark background to meet it).
- Unique accessible names on case-study links, a single `h1` per page, skip link on case studies, correct `lang` per locale.
