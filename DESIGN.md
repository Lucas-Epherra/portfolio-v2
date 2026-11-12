---
name: Lucas Epherra — Portfolio
description: Grafito y lima. A graphite-light product stage where acid lime marks only what matters.
colors:
  ground: "#f4f5f2"
  panel: "#ffffff"
  ink: "#111311"
  ink-hover: "#2a2e2a"
  muted: "#565b55"
  chip: "#e8eae4"
  lime: "#c8f03c"
  lime-strong: "#b4dc22"
  line: "rgb(17 19 17 / 10%)"
  line-strong: "rgb(17 19 17 / 18%)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  display-case:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "5.5rem"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\""
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\""
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
  chip:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  tag: "6px"
  button: "12px"
  frame: "14px"
  frame-lg: "18px"
  panel: "22px"
  slab: "28px"
  pill: "9999px"
spacing:
  panel-inset: "12px"
  gutter-sm: "16px"
  gutter-md: "32px"
  gutter-lg: "72px"
  section: "80px"
  section-lg: "112px"
  container: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-stage:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.button}"
    padding: "0 16px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "48px"
  button-icon:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "40px"
  button-icon-hover:
    backgroundColor: "{colors.lime}"
  nav-link:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "40px"
  nav-link-hover:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
  chip-status:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  tag-tech:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.tag}"
    padding: "4px 8px"
  contribution-note:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "12px"
    padding: "12px 16px"
  card-panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-inset}"
  slab-contact:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.slab}"
    padding: "56px"
---

# Design System: Lucas Epherra — Portfolio

## Overview

**Creative North Star: "Grafito y lima"**

The work is the stage. A light graphite ground carries white product panels with hairline edges, and real screenshots sit inside them at large scale, so the first thing a visitor reads after the headline is a shipped product, not a name or a row of equal cards. The register is modern tech-product precision: one grotesque family for display with tight negative tracking, a calm humanist grotesque for reading, and almost no color.

Acid lime is the only voice. It behaves like a highlighter pen, never like paint: one phrase in a headline, the status chip on a live product, the bullets of a case-study list, the text selection, and the hover of small round icon buttons. Everything else is graphite: ink for primary actions and the closing contact slab, muted grey for secondary text, a pale chip grey for tags.

Density is medium. Panels nest one frame inside another (white panel, 12px inset, bordered image frame), sections are separated by single hairlines and generous vertical space, and motion is limited to short hover nudges. The world refuses gradients as decoration, glass, glow, dark/hacker styling, and the previous cream, serif and copper identity.

**Key Characteristics:**
- Graphite-light ground with white hairline panels and one soft ambient shadow.
- Acid lime as a highlighter only; never a button fill at rest, never decoration.
- Bricolage Grotesque display at weight 600 with tight negative tracking; Hanken Grotesk body.
- Pills for navigation, chips and most buttons; large rounded panels (22px, 28px for slabs).
- Real product screenshots at large scale as the main imagery.
- Motion limited to short hover nudges, ease-out, disabled under reduced motion.

## Colors

A near-monochrome graphite palette with one acid accent held to a few square centimetres per screen.

### Primary
- **Acid Lime** (lime): the highlighter. Fills the headline marker band behind one phrase, the status chip ("Deployed · early validation"), the text selection, and the hover state of round icon buttons in the case-study gallery.
- **Deep Lime** (lime-strong): the same accent one step darker for small solid marks that must hold against white: the square bullets in case-study lists.

### Neutral
- **Graphite Ink** (ink): text, primary action fills (Download CV, View case study, first case-study action), the contact slab, focus outlines, and the dark "back to portfolio" card in case-study navigation.
- **Ink Lift** (ink-hover): hover state of ink-filled buttons only. Currently a literal in components, not a CSS custom property.
- **Graphite Ground** (ground): page background, scrollbar track, text on ink surfaces, the contact email pill.
- **Panel White** (panel): project cards, case-study cards, secondary buttons.
- **Slate Muted** (muted): secondary copy, descriptions, definition-list labels, inactive nav, the label of the contribution note.
- **Chip Grey** (chip): nav hover fill, tech tags, image-frame placeholder background.
- **Hairline** (line): every border and divider: panel edges, image frames, section rules, definition rows.
- **Hairline Strong** (line-strong): secondary-button border, link underline at rest, separators in text.

### Dark Mode
A graphite night version of the same world, toggled from the header (moon/sun button, `aria-pressed`), stored in localStorage under `theme` and following the system preference until the visitor chooses. An inline script in the layout sets `data-theme` on `<html>` before first paint; without JavaScript the `prefers-color-scheme` media query applies. Tokens swap: ground #121412, panel #1a1d1a, ink #eceee8, muted #9ca197, chip #252925, hairlines in ink at 10% and 20%, a deeper black shadow. Lime stays #c8f03c. Ink-filled buttons invert into light pills with dark text. Text on lime always uses **on-lime** (#111311). The contact slab and the last-case card use **slab** / **on-slab** (ink and ground in light, #1f231f and ink in dark) instead of ink, so they never turn into a glaring light block. In dark the headline marker becomes lime text over a 16% lime band, because a full lime band behind light text loses contrast.

### Named Rules
**The Highlighter Rule.** Lime marks only what matters: one highlighted phrase per headline, status, active state, selection. It is never the resting fill of a button, never an icon color, never a background area.

**The Ink Action Rule.** The primary action on any surface is ink with ground text. If a second action sits beside it, it is white with a strong hairline, not a second dark button.

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif), via next/font as `--font-bricolage`
**Body Font:** Hanken Grotesk (with system-ui, sans-serif), via next/font as `--font-hanken`

**Character:** A grotesque with a point of view for headlines, set heavy (600) and tight, over a quiet, legible grotesque for reading. The contrast comes from size and tracking, not from a serif or a second accent color.

### Hierarchy
- **Display** (600, 2.625rem mobile / 3.75rem sm / 4.5rem lg, line-height 1.02, -0.035em): the home headline, max about 17ch on mobile, wide on desktop, with one phrase highlighted.
- **Display Case** (600, 3rem / 4.5rem / 5.5rem, line-height 0.98, -0.04em): the case-study title.
- **Headline** (600, 2.25rem mobile / 3rem sm, line-height 1.05, -0.03em): section titles (capabilities, about); the contact title runs up to 3.75rem at -0.035em.
- **Title** (600, 2rem, line-height 1, -0.03em): the featured project name (compact project cards use 1.625rem); case-study section titles use 1.875rem to 2.75rem at line-height 1.08, max 22ch.
- **Title Small** (600, 1.25rem, -0.015em): list item titles in the capabilities list.
- **Body Large** (400, 1.125rem, line-height 1.625): lead paragraphs and long reading text, max 60 to 65ch, ink at 80% or muted.
- **Body** (400, 0.9375rem, line-height 1.625): panel copy, nav links, contribution notes.
- **Label** (600, 0.875rem): buttons, inline action links, footer and meta.
- **Chip** (600 / 500, 0.8125rem): status chips and tech tags.

### Named Rules
**The No-Kicker Rule.** Headings stand alone: no eyebrow, overline or section number above them. Context comes from the heading itself.

**The Tight Display Rule.** Every Bricolage heading carries negative tracking (-0.015em small, -0.03em section, -0.035em to -0.04em display) and balanced wrapping.

## Layout

A single centered container (max 1440px) with gutters of 16px mobile, 32px from sm, 72px from lg. Sections stack vertically with 80px (mobile) to 112px (sm+) vertical padding and are separated by a single top hairline rather than background changes. Desktop compositions use a 12-column grid split 5/7 (capabilities, case-study hero) or a two-column panel (featured project: flexible screenshot plus a fixed 21rem meta column, with the other projects in a two-column grid of compact cards below from md; about: 0.8fr portrait plus 1.2fr copy). Below lg every grid collapses to one column; Inside panels the rhythm is a 12px inset and 12px gap; text columns inside panels pad 16px to 48px.

## Elevation & Depth

Hybrid and restrained: depth comes mostly from white panels on the graphite ground plus hairline borders, reinforced by one soft ambient shadow that every panel shares. There are no stacked elevation levels; the only overlay is the gallery lightbox, which uses the same panel shadow over an ink backdrop at 70%.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 1px 2px rgb(17 19 17 / 6%), 0 12px 32px -12px rgb(17 19 17 / 14%)`): project cards, case-study cards and navigation cards, round icon buttons over images, the lightbox.

### Named Rules
**The One Shadow Rule.** There is one shadow. Hierarchy is carried by border, fill and size, never by a deeper shadow, a hard offset shadow, or a glow.

## Shapes

Soft but not bubbly. Large surfaces use generous radii (22px panels, 28px for the about panel and contact slab); frames nested inside them step down (14px image frames, 18px for the portrait frame) so inner and outer curves stay concentric with the 12px inset. Interactive controls are pills: nav links, language toggle, status chips, CTA buttons, round icon buttons. Exceptions are deliberate: the project cards' "View case study" button is a 12px rounded bar that fills the card width, tech tags are 6px rounded, and list bullets are 8px lime squares with 3px corners. Every border is a 1px hairline.

## Components

### Buttons
Confident and dark, never loud.
- **Shape:** pill (9999px) by default; the full-width project-card action uses a 12px radius.
- **Primary:** ink fill, ground text, label type, 40px tall in the header, 48px in content, 16 to 20px horizontal padding, trailing Phosphor bold icon at 16px.
- **Hover / Focus:** fill lifts to Ink Lift over 200ms; the trailing arrow nudges (right for internal, up-right for external, down for download). Focus is a 2px ink outline at 3px offset.
- **Secondary:** white fill, 1px Hairline Strong border, ink text; hover darkens the border to ink.
- **Inverse (contact slab):** ground pill on ink, 56px tall, hover to white.
- **Round icon button:** 40px circle, white over images or chip grey in the lightbox header; hover fills Acid Lime.
- **Text action:** label type with an underline in Hairline Strong at 4px offset, darkening to ink on hover.

### Chips
- **Status:** Acid Lime pill, ink text at 0.8125rem/600, a 6px ink dot leading. One per project.
- **Tech tag:** Chip Grey, 6px radius, 0.8125rem/500.

### Cards / Containers
- **Corner Style:** 22px panels; 28px slabs.
- **Background:** Panel White; the contact slab and the "back to portfolio" navigation card are ink.
- **Shadow Strategy:** the single Panel shadow (see Elevation & Depth).
- **Border:** 1px Hairline; hover on link cards strengthens to Hairline Strong.
- **Internal Padding:** 12px inset around image frames (10px in gallery cards); 24 to 32px for text-led navigation cards; 24 to 56px for the contact slab.
- **Definition rows:** label in muted left, value in medium weight right, rows separated by hairlines.

### Navigation
Name left in display type (600, -0.02em), center links as muted pills with chip-grey hover, then the language toggle and the ink "Download CV" pill on the right. Desktop links hide below md; the CV button and language toggle always stay. Case studies open with a muted "back" link whose arrow slides left on hover, and close with three cards: previous, next, and the ink card back to the portfolio.

### Project Cards
All projects stay visible on the home page, with no tabs. The first project is featured: a white panel with a 16/8.4 screenshot beside a 21rem meta column (status chip, title, category, contribution note, role and stack rows, ink case-study bar, external text links). The others follow in a two-column grid from md as compact cards: 16/9 screenshot on top, then status chip, title, category, contribution note and the same actions pinned to the bottom so the card bottoms line up. The **contribution note** is a Graphite Ground block (12px radius) with a muted label and one sentence in ink saying what Lucas built, so recruiters read the personal contribution next to the product.

### Headline Marker
The `.highlight` mark paints a lime band 0.62em tall at 88% of the line box behind one phrase, cloning across line breaks, with ink text. It is the only expressive use of lime in headings: once on the home headline, once under the case-study title (the category).

## Do's and Don'ts

### Do:
- **Do** put a real product screenshot inside a white hairline panel at large scale wherever work is presented.
- **Do** keep lime to the highlighter roles: one headline phrase, status chips, bullets, selection, icon-button hover.
- **Do** make the primary action an ink pill (or the 12px project-card bar) with ground text and a trailing arrow that nudges on hover.
- **Do** nest frames concentrically: 22px panel, 12px inset, 14px bordered frame.
- **Do** separate sections with a single hairline and vertical space, not background bands.
- **Do** keep motion to 180 to 260ms, ease-out, transform and opacity only, and honor reduced motion.

### Don't:
- **Don't** fill a button with lime at rest, color icons lime, or use lime as a background area.
- **Don't** place eyebrows, kickers, overlines or section numbers above headings.
- **Don't** use gradients as decoration, glass/backdrop blur, glows, or hard offset shadows.
- **Don't** add a second shadow level; depth is border, fill and the one Panel shadow.
- **Don't** turn the dark mode into a dark/hacker theme (pure black, neon, glow, monospace), or bring back the cream, serif and copper identity.
- **Don't** add motion beyond small hover nudges and the lightbox.
