---
name: Nahuel Uliassi Pirchio — Portfolio
description: A flat, grotesque-type developer portfolio with one warm accent and exactly one deliberate shadow.
colors:
  terracotta-ember: "#E07B39"
  sky-signal: "#60A5FA"
  warm-paper: "#F5F4F2"
  warm-ink: "#1A1A1A"
  ink-void: "#111110"
  paper-mist: "#EDEDEB"
  neutral-surface: "#EDECEA"
  neutral-surface-dark: "#1E1D1B"
  hairline: "#D5D3CF"
  hairline-dark: "#2E2D2B"
  shadow-neutral: "#9A9896"
  shadow-neutral-dark: "#555452"
  bubble-clay: "#D4C9B8"
  bubble-midnight: "#1a3a5c"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "4.5rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "2.75rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  xs: "6px"
  sm: "10px"
  md: "12px"
  lg: "15px"
  avatar: "45%"
  circle: "50%"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "3rem"
components:
  button-accent:
    backgroundColor: "{colors.terracotta-ember}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.sm}"
    padding: "0.5rem"
  project-card:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: "1rem 1.25rem"
  skill-field-card:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
---

# Design System: Nahuel Uliassi Pirchio — Portfolio

## Overview

**Creative North Star: "The Quiet Workbench"**

This is a tool-maker's surface, not a showroom. It sits flat at rest — no ambient shadows, no gradients competing for attention, no glassmorphism — because the work being shown (full-stack, product-engineering craft) is the point, not the chrome around it. A single grotesque display typeface carries the whole system at large sizes and light weights (400), giving headlines an editorial, unhurried confidence instead of bold-and-loud SaaS-template energy. One warm accent color does all the emphasis work — terracotta in light mode, a cooler sky blue in dark mode — used sparingly enough that its rarity is the point.

Depth is earned, not decorative: exactly one shadow exists in the entire system, and it only appears when a project card is actively hovered. Everything else communicates state through color, opacity, and small, decisive transforms (translateY, scale). One organic, hand-drawn blob shape lives behind the hero as the system's single moment of asymmetry inside an otherwise geometric world of pills, circles, and rounded rectangles — confirmed to stay a one-off hero accent, not a recurring motif, so it keeps its impact.

Mood: **confident, restrained, technical.** Explicitly avoid: flashy gradients, generic SaaS-template gloss, and trend-chasing glassmorphism.

**Key Characteristics:**
- One warm accent color, everywhere else neutral.
- Flat by default; shadow is a rare, deliberate hover response.
- One display typeface, weight does the differentiation.
- Geometric shapes (pills, circles, rounded rectangles) with exactly one organic exception, kept rare.
- Small, decisive interaction feedback (scale/translate), not lingering animation.

## Colors

The palette is a warm neutral base carrying a single accent whose hue itself shifts with theme — terracotta in light mode, sky blue in dark mode — rather than just dimming.

### Primary
- **Terracotta Ember** (`#E07B39`, light mode): the system's one accent. Drives every primary CTA, active nav state, and interactive highlight. Also doubles as the link color.
- **Sky Signal** (`#60A5FA`, dark mode): the accent's dark-mode identity — not a dimmed terracotta, a genuinely different hue, kept at the same role and rarity.

### Neutral
- **Warm Paper** (`#F5F4F2`, light background) / **Ink Void** (`#111110`, dark background): the page canvas.
- **Warm Ink** (`#1A1A1A`, light text) / **Paper Mist** (`#EDEDEB`, dark text): primary reading color.
- **Neutral Surface** (`#EDECEA` light / `#1E1D1B` dark): the elevated-but-flat surface for cards and CTA text-on-accent (used as `--primary-color` and `--project-card-color`).
- **Hairline** (`#D5D3CF` light / `#2E2D2B` dark): dividers and thin borders only.
- **Shadow Neutral** (`#9A9896` light / `#555452` dark): the color role backing the system's one shadow.
- **Bubble Clay** (`#D4C9B8` light) / **Bubble Midnight** (`#1a3a5c` dark): reserved for the hero's organic blob shape only — not used elsewhere.

### Named Rules
**The One Accent Rule.** Only one non-neutral color is ever on screen at a time (terracotta or sky, never both, never a second competing hue). If a new surface needs a second color, it's wrong.

## Typography

**Display Font:** 'Bricolage Grotesque' (with sans-serif fallback) — the only typeface in the system, weights 300–800 loaded.

**Character:** A single grotesque family doing all the work: large sizes at light weight (400) read as editorial display type, while emphasis and active states jump straight to 500–800 with no intermediate step. Negative letter-spacing at display sizes tightens the large type instead of letting it sprawl.

### Hierarchy
- **Display** (400, 4.5rem, 1.1 line-height): hero title only (`3rem` at ≤768px). Negative tracking implied by the tight, large treatment.
- **Headline** (400, 2.75rem, 1.2 line-height, -0.02em): section headings (global `h2`).
- **Title** (600, 1.15rem, 1.3 line-height, -0.01em): project card titles — the one place body-scale text jumps to a heavier weight for scannability.
- **Body** (300, 1rem, 1.6 line-height): paragraph copy. Deliberately light-weight even at reading size — the system does not use regular (400) for body text.
- **Label** (500, 0.9rem): buttons, nav links, tech-badge captions. Active/selected states escalate further to 700–800 (e.g. active nav item, active language toggle) rather than adding color alone.

### Named Rules
**The Weight-Is-Meaning Rule.** Color and size stay restrained; font-weight is the primary signal for emphasis and state (300 body → 400 headings → 500 labels → 700–800 active/selected).

## Layout

Section-level width is capped globally (`section { max-width: 1400px; margin: 0 auto; }`); individual components layer tighter caps on top where content needs it (1200px for skills/media rows, 1000px for slider media, 300px for a constrained project image). There is no shared `.container` component — the cap lives on the semantic `section` element itself.

Section padding is generous and inconsistent by design intent rather than a strict scale: `3rem 1rem` (Experience), `3% 1%` (Contact), `1rem` (Projects grid wrapper), `1rem 1.25rem` (card interiors). The project grid uses CSS Grid auto-fill (`repeat(auto-fill, minmax(360px, 1fr))`, `gap: 1.5rem`) so it reflows without an explicit breakpoint; most other sections use Flexbox that switches `row` → `column` at the primary breakpoint.

**Breakpoints in active use:** 768px (primary mobile/desktop split, used almost everywhere), plus narrower single-purpose breakpoints at 720px, 810px, 870px, and 1050px for specific nav/hero adjustments. There is no 1024px or 1440px tier — this system only really distinguishes mobile from desktop.

## Elevation & Depth

Flat by default. Depth is communicated almost entirely through color, opacity, and transform (translateY, scale) rather than shadow. Exactly one `box-shadow` exists anywhere in the system.

### Shadow Vocabulary
- **Card Lift** (`box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12)`): the project card's hover-only elevation, paired with `transform: translateY(-3px)`. This is the system's single depth cue.

### Named Rules
**The Flat-By-Default Rule.** Shadows appear only as a direct response to interaction (hover), never at rest, and never anywhere except the confirmed Card Lift role. Confirmed: this stays hover-only even as new surfaces (Xnapper feature card, case-study sections) are built — do not add a resting shadow to signal importance; use size, position, and color instead.

## Shapes

Two families coexist deliberately: small interactive chrome uses a tight geometric radius scale (6–12px), while avatar/icon imagery sits near-circular (40–45%) or fully circular (50%). The single exception is the hero's organic blob (`border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%`) — confirmed to stay a one-off hero accent, never repeated on other surfaces, so its irregularity keeps reading as intentional rather than becoming a pattern.

**The Geometric-Except-Once Rule.** Every shape in the system is a rectangle, pill, or circle, with exactly one confirmed organic exception (the hero blob). New surfaces reach for the geometric language, not a second blob.

## Components

Interaction feel across the whole system: **tactile and confident** — small, decisive transforms (scale 1.01–1.02, translateY(-3px)) and instant color/opacity shifts, no bounce, no lingering easing.

### Buttons
- **Shape:** 10px radius on primary CTAs (nav resume link, floating link button); 6px on smaller in-card demo buttons.
- **Primary:** background `{colors.terracotta-ember}` / `{colors.sky-signal}`, text on accent uses the neutral-surface role, `padding: 0.5rem`.
- **Hover / Focus:** primary CTA (`resumeLink`) scales to 1.02 and underlines on hover; in-card demo buttons drop opacity to 0.88 and underline. No focus-visible treatment exists yet anywhere in the codebase — see Don't below.
- **Ghost variant:** the floating `LinkButton` icon+label combo stays hidden (`display: none`) until hover reveals the label inline (desktop) or a tap toggles it (mobile) — a deliberate reveal-on-intent pattern, not a bug to "fix" into always-visible.

### Cards
- **Corner Style:** 12px radius.
- **Background:** `{colors.neutral-surface}`, no border.
- **Shadow Strategy:** flat at rest; Card Lift shadow + `translateY(-3px)` on hover only (see Elevation & Depth).
- **Internal Padding:** `1rem 1.25rem`.
- **Signature behavior:** cards without a preview GIF reveal a dark scrim (`rgba(0,0,0,0.78)`) with white text on hover instead of the plain lift — a secondary, content-dependent hover state worth preserving when porting the card pattern to `/projects`.

### Navigation
- **Style:** fixed position, transparent + `backdrop-filter: blur(10px)` at rest, switching to a solid `{colors.warm-paper}`/`{colors.ink-void}` background once scrolled — never both effects at once.
- **Active state:** underline + bold-and-a-half weight jump + accent color, not color alone.
- **Mobile treatment:** collapses to a hamburger below 870px; the mobile menu is a centered, bordered panel (85% width, 95vh) rather than a full-bleed drawer — a deliberate "floating card" treatment, not an edge-to-edge sheet.

### Skill Field Card (signature)
The one place the system breaks perfect symmetry deliberately: first/last cards in the skills row get an asymmetric single-corner radius (15px on one corner only) instead of the uniform 15px-all-corners used elsewhere, reading as a connected sequence rather than four isolated boxes.

## Do's and Don'ts

### Do:
- **Do** keep exactly one accent color on screen at a time; switch hue by theme (terracotta/sky), never add a second concurrent accent.
- **Do** keep new shadows hover-only and identical to the confirmed Card Lift value; don't invent a second shadow vocabulary for new surfaces.
- **Do** let font-weight (300/400/500/700-800) carry emphasis before reaching for size or color.
- **Do** keep the hero blob exclusive to the homepage hero; use geometric shapes everywhere else, including the Xnapper case study and `/projects`.

### Don't:
- **Don't** add ambient or resting shadows to signal a section's importance (e.g. making the Xnapper card "float" at rest) — use scale, position, and copy hierarchy instead, per the Flat-By-Default Rule.
- **Don't** introduce a second display typeface or a bold (700+) headline weight — this system differentiates through size and the light/regular divide, not through introducing heavier display weights.
- **Don't** ship new interactive elements (new buttons, nav items, card links) without a `:focus-visible` state — the incumbent codebase has none, and it's a real accessibility gap to close going forward, not a pattern to keep replicating.
