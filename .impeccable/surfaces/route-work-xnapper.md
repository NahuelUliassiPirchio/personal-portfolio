---
version: 1
slug: "route-work-xnapper"
primary_target: "route:/work/xnapper"
related_targets: []
---

# Surface Brief: Xnapper Case Study (`/work/xnapper`)

## 1. Job & Audience

Recruiters, hiring managers, and technical interviewers arriving via a "View Case Study" CTA from the homepage's featured-work section or the nav's "Work" item. They arrive already primed with interest in Xnapper as proof of full-stack/product-engineering ownership.

**Visitor mode:** Persuade, Read-structured — moves a hiring decision forward, but earns it through case-study clarity and evidence, not sales copy. Structured like a well-written technical writeup, not a landing page.

## 2. Outcome & Proof

**Core belief the page must land:** "This person can take an ambiguous, technically difficult feature from problem to shipped production code, solo, across the whole stack."

**Success:** that belief forms within a 2–4 minute read, followed by a low-friction path to the resume or a contact channel — the page's job ends at belief, conversion happens quietly after.

**Evidence allowed:** only the redesign brief's verified/safe outcomes — expanded the product from screenshot to video editing workflows, shipped through multiple production releases, improved maintainability of export/persistence flows, reduced security/reliability risk, supported ~20,000 active users (approved figure). No invented percentages or performance claims.

## 3. Selected Direction

**Visual authority:** extends DESIGN.md's "The Quiet Workbench" system as-is — no new visual world, no new accent color, no new typeface. Flat by default, one accent color per theme, geometric shapes, hover-only shadow (Card Lift), font-weight carries emphasis.

**Structural/interaction thesis:** continuous single-page scroll with a lightweight sticky mini-nav that appears once the visitor scrolls past the header. The mini-nav reuses the existing NavBar's active-state visual language (underline + weight jump + accent color) rather than inventing a new pattern, and lets a skimming visitor jump directly to Outcome or What-I-Built without scrolling the full page.

**Sequence** (fixed, per the redesign brief):
1. Header — product name, role, dates (Feb 2025 – May 2026), product scale, one-sentence summary, hero media slot.
2. Context — max 2 short paragraphs (what the product does, what the role covered, why it was technically difficult).
3. Main Challenge — one framing statement.
4. What I Built — 4 subsections: Video editing, Product state & architecture, Reliability & security, Licensing service. Each concise, each with its own media slot.
5. Design Decisions — max 3 cards (Demuxer-based frame extraction, Export strategies, Persistent undo history). Each explains the problem the pattern solved, never name-drops a pattern without justifying it.
6. Outcome — safe/verified outcomes only.
7. Technology list — restrained, supports the story rather than replacing it.

**Focal moment:** Design Decisions — it should get the most compositional weight on the page (largest/most visually prominent cards) since it's where concrete architectural judgment is proven, even without real UI media to lean on.

**Implementation consequence:** every media slot needs a real "coming soon" component — visually honest, clearly marked as pending, never a fake/implied screenshot. This is a permanent-feeling design decision until real media exists, not a broken placeholder.

## 4. Scope & Boundaries

**Fidelity:** a fully implementation-ready page (not a wireframe), single route `/work/xnapper`.

**Explicitly out of scope for this brief:** the homepage's "Featured Work: Xnapper" section and nav wiring — those are separate surfaces covered elsewhere in the redesign.

**Anti-goals:**
- No Electron/desktop-specialist framing as the lead identity.
- No implementation detail about S3.
- No invented performance percentages or conversion metrics.
- No dedicated S3/licensing-implementation-detail card.
- No more than 3 Design Decision cards.

## 5. States & Ranges

- Context: max 2 short paragraphs.
- Each What-I-Built subsection: tight bullet list, not prose blocks.
- Design Decisions: exactly ≤3 cards.
- Outcome: only the brief's stated safe outcomes list — no additions.
- Media state: every visual slot (hero, 4× What-I-Built, up to 3× Design Decision) ships with a visible "coming soon" placeholder. No lorem-ipsum imagery, no fabricated screenshots implying the media exists.
- No loading/error/empty states needed — static content page, no data fetching beyond i18n resolution.

## 6. Interaction & Layout

- **Header:** name/role/dates/scale/summary + hero placeholder (clearly marked pending, not a broken-image look).
- **Sticky mini-nav:** appears after the header on scroll; section labels (Context, Challenge, What I Built, Decisions, Outcome, Stack); highlights the current section using the site's existing active-nav visual language.
- **Section rhythm:** alternate density between quieter prose sections (Context, Challenge) and denser bullet/card sections (What I Built, Decisions) so a single long scroll doesn't read as monotonous.
- **What I Built:** renders as 4 subsections/cards, each with its own placeholder media slot.
- **Design Decisions:** largest/most prominent cards on the page (the focal moment) — problem-first framing, not name-drop-first.
- **Closing CTA:** quiet resume/contact links, styled like the site's existing restrained accent buttons (tactile hover per DESIGN.md) — not a hard-sell block.
- **Mobile:** the sticky mini-nav needs a collapsed treatment for small screens — left as an explicit open decision below, not to be invented silently.

## 7. Constraints & Open Decisions

- Route: `/work/xnapper`, per the redesign brief.
- Accessibility: every new interactive element (mini-nav links, CTA buttons) must ship with a `:focus-visible` state — DESIGN.md flags this as a sitewide gap, not something to keep replicating.
- Localization: full bilingual (en/es) parity required, consistent with the rest of the site.
- **Open — mobile mini-nav treatment:** not resolved here (e.g., collapse to a compact bottom indicator vs. a minimal breadcrumb vs. hide entirely below a breakpoint). A builder must not invent this silently; confirm before or during implementation.
- **Open — data source mechanism:** whether this page's content lives in a new locale namespace (e.g. `locales/{en,es}/xnapper.json`) or another mechanism is the SDD/engineering track's call, not this brief's.
- Do not add a resting (non-hover) shadow anywhere on this page to signal importance (Flat-By-Default Rule).
- Do not introduce a second accent color or a second display typeface.
- Do not let placeholder media read as finished, real screenshots.
