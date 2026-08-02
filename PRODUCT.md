# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are recruiters, hiring managers, and technical interviewers evaluating Nahuel Uliassi Pirchio for full-stack software developer / product-engineering roles (remote, international). Their job on this site: quickly judge whether he can own complex product features end-to-end (UI, application logic, data, production delivery), then act (open the Xnapper case study, browse projects, download the resume, or make contact).

## Product Purpose

A personal portfolio whose purpose is to get Nahuel hired for full-stack, product-focused developer roles. Success means a visitor understands his positioning within roughly ten seconds of landing, sees credible end-to-end ownership evidence, and has a low-friction path to the resume or a contact channel.

## Positioning

**Full-Stack Software Developer focused on product engineering**, proven primarily through Xnapper — a commercial product with an approved public figure of ~20,000 active users — where Nahuel owned complex features end-to-end (frontend, application state, processing, persistence, service integrations, architecture, security/reliability, and shipping through real release cycles).

This is a confirmed reversal of an earlier decision: the hero previously used generic "software developer" wording to avoid feeling boxed-in by "full-stack." The user has now explicitly confirmed adopting the full-stack/product-engineering framing as primary, following review of an external redesign brief. Desktop/Electron work exists as supporting technical context inside the Xnapper case study but must never be the lead framing or make the site read as aimed at desktop-only roles.

## Operating Context

- Bilingual site: Spanish and English via `next-translate`, default locale `es`, no locale auto-detection.
- Currently a single-page site with anchor/scroll-based navigation (`IntersectionObserver` + hash links) — no real routes besides the homepage and an existing project-detail dynamic route.
- Moving toward a route-based information architecture: `/` (focused landing page), `/projects` (full catalog), `/work/xnapper` (dedicated case study), plus the existing project detail route.
- Resume/CV is hosted externally on Google Drive (separate EN/ES links via env vars), not bundled as a static file.

## Capabilities and Constraints

- No implementation detail about Xnapper's S3 usage may appear in public copy.
- Nahuel must not be positioned primarily as an Electron/desktop specialist. Desktop-specific detail may appear only as supporting evidence inside the Xnapper case study.
- Approved for public use: "approximately 20,000 active users" as the Xnapper user-base figure (confirmed by the user; more conservative "thousands of active users" wording is a fallback style choice, not a disclosure constraint).
- Xnapper dates are February 2025 – May 2026; this is factually correct (confirmed against the current date), not a typo.
- **Xnapper UI screenshots / demo video are not ready yet.** Case-study and featured-work sections must be built to work correctly with placeholder media now, without blocking on real assets, and without fabricating or implying media that doesn't exist.
- If real Xnapper UI capture ever happens, it is limited to the visible editor interface (timeline, clip editing, playback, export dialog) — never internal architecture, source, or implementation detail.
- Stack has no TypeScript and no test runner/harness (confirmed via repo scan). Any future work requiring TDD needs a test harness added first.
- Unsupported numbers/percentages (beyond the approved user-count figure) must not be introduced — outcomes need to stay verifiable.

## Brand Commitments

- Name: Nahuel Uliassi Pirchio.
- Existing profile links are fixed and must be preserved: GitHub (`github.com/NahuelUliassiPirchio`), LinkedIn (`linkedin.com/in/uliassipirchio`), contact email (`uliassipirchio@gmail.com`).
- Resume links (Google Drive, EN/ES) must keep working through the redesign.

## Evidence on Hand

- Seven existing personal projects with real repos/demos: Basic Store, Stop Rows, Simple Pomodoro and To-do, Light Control Pro, Map Zone Delimiter, Personal Portfolio, Huffman Tree Compressor. Current project data lives in i18n JSON (`locales/{en,es}/projects.json`) and lacks `category`, `featured`, `status`, and `caseStudySlug` fields needed for the new information architecture.
- No Xnapper screenshots, demo video, or other visual assets are on hand yet — future work must not fabricate or imply media that doesn't exist; ship placeholder-safe layouts instead.
- Existing About/Experience copy already downplays desktop as the primary focus; it's a partial head start, not a finished match for the new positioning.

## Product Principles

1. Full-stack, product-first positioning — Xnapper is the flagship proof, not evidence of a desktop specialism.
2. Outcomes and ownership come before technology lists in all copy.
3. Progressive disclosure — the homepage stays scannable and short; depth lives in `/projects` and `/work/xnapper`.
4. Every claim must be evidence-backed; no invented or unsupported metrics.
5. Bilingual parity (ES/EN) is maintained across all new and changed content.
