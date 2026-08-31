# AGENTS.md

## Mission

Maintain scrobble.dev as a trusted, neutral, implementation-aware knowledge base and ecosystem field guide for scrobbling and portable media tracking. The site documents the scrobbling ecosystem neutrally while referencing Fasti as a pinned local-first reference architecture.

---

## Source-of-Truth Hierarchy

1. Domain definitions and interoperability principles in `public/knowledge/`.
2. Human-facing explanations in `src/pages/`.
3. Project-specific behavior from primary project repositories and documentation.
4. External ecosystem sources, preferring primary documentation over summaries.

If two sources disagree, do not silently choose one. Record scope, version, provenance, and the unresolved difference.

---

## Domain Boundaries (DDD)

Keep these concepts strictly distinct unless an explicit relationship is being described:
- **Scrobble event**: Immutable, append-only assertion of media consumption with verifiable timestamp.
- **Media entity / identity**: Canonical and source-local identifiers (MusicBrainz, TMDB, OpenLibrary).
- **User progress state**: Volatile, dirty resume position (seconds, pages, episode numbers).
- **Rating / review**: Qualitative user judgment.
- **Watchlist / backlog intent**: Forward-looking intent to consume.
- **Collection / ownership**: Physical or digital license state.
- **List membership**: Curated editorial or personal grouping.
- **Derived statistics**: Aggregated calculations (scrobble counts, listening hours).
- **Recommendation signal**: Inferred interest vectors.
- **Synchronization operation**: Transport, relay, and idempotent deduplication.

A page may compose them; storage and documentation must not collapse them.

---

## Content Architecture & Writing Style

- **ASD-STE100 Simplified Technical English**: Use active voice, direct verbs, short sentences, and concrete nouns. Zero fluff, buzzwords, or marketing hype.
- **ADHD / AuDHD Scannability**: Use tables, bold leads, structured bullet points, and high-contrast labels. Avoid walls of unbroken prose.
- **Kathy Sierra Philosophy (*Badass: Making Users Awesome*)**: Focus on helping developers and users master portable media tracking. Provide immediate access to live demos, 1-click credential copying, failure-case reproductions, and clear recovery routes.
- **Progressive Disclosure**: Definition $\to$ practical examples $\to$ edge cases $\to$ implementation details.
- **Institutional Narrator**: Maintain a calm, authoritative, third-person voice. Never drift into casual first-person conversational filler.

---

## Design System & UI Component Standards (Tabler-First)

1. **Tabler Core Component Hierarchy**:
   - Tabler Core component (direct usage).
   - Tabler pattern composition (`search-results.html`, `datatables.html`).
   - Fasti token-skinned Tabler element (`brand/tokens/tokens.json`).
   - Custom Svelte/Astro component (STRICT EXCEPTION: only if Tabler has zero equivalent; requires explicit documented rationale).
2. **Typography & Layout**:
   - Headings: Georgia serif.
   - Body: Arial sans-serif.
   - Metadata & Labels: Courier New monospace.
   - Zero layout shifts (`CLS = 0`). Minimum 44px hitboxes for all interactive elements.
3. **Chesterton's Fence**:
   - Never delete, hide, or disable an existing UI affordance, filter facet, or export format without tracing callers, tests, and documented intent.
   - Mature partial features behind clear unavailable states or TODO markers instead of breaking them.

---

## Accessibility & Interaction QA Rubric

Before merging material UI changes, audit against:
- **WCAG 2.2 Level AA**: Minimum 4.5:1 text contrast (7.0:1 on paper cards), 3px high-contrast focus rings with 2px offset, non-obscured focus.
- **EN 301 549**: Conformance across Clause 9 (Web), Clause 10 (Documents), Clause 11 (Software), and Clause 12 (Documentation).
- **AskTog Interaction Principles**: Anticipation, Fitts's law, latency reduction, user work protection, and state continuity.
- **Gestalt Grouping**: Proximity, similarity, common region, continuity, and figure/ground separation.
- **10 Nielsen Usability Heuristics**: Visibility of system status, match real world, user control/recovery, consistency, error prevention, recognition over recall, flexibility/efficiency, minimalist aesthetic, error diagnosis, and accessible help.

---

## Structured Data, Knowledge Files & IndieWeb

- **Open Knowledge Format (OKF v0.2)**: `public/knowledge/` conforms to the pinned OKF v0.2 specification (`config/okf-v0.2.json`). Every concept has a non-empty `type`, `title`, `description`, `status`, and source citations.
- **Google Search Gallery Schema.org**: `WebSite`, `Person`, `BreadcrumbList`, `Dataset`, `DataDownload`, `ItemList`, `SoftwareApplication`, `TechArticle`, `FAQPage`.
- **IndieWeb Microformats2**: Markup pages with `h-card` (publisher/author), `h-entry` (articles/concepts), `h-feed`, `e-content`, `p-name`, `p-category`, and `u-url`.
- **Slashfriends (`/friends/`)**: Implement and maintain `/friends/` according to https://slashfriends.org/ with `rel="friend"` links and peer feed references.

---

## Reference Implementation & Governance

- **Fasti Engine**: [https://github.com/Scrobble-dev/Fasti](https://github.com/Scrobble-dev/Fasti)
- **Scrobble.dev Repository**: [https://github.com/Scrobble-dev/scrobble.dev](https://github.com/Scrobble-dev/scrobble.dev)
- **Maintainer Support**: [https://github.com/sponsors/ryan-winkler](https://github.com/sponsors/ryan-winkler)

---

## Validation Gate

Run the canonical gate before any PR:

```bash
npm test
```

This executes:
1. `npm run generate:public` (Regenerates `public/knowledge/projects.md`)
2. `astro check && astro build` (Typecheck & static SSG build)
3. `scripts/build-sites.mjs` (Sites worker generation)
4. `npm run validate:okf` (OKF v0.2 JSON schema validation)
5. `npm run validate:public` (Scope leak detection)
6. `node --test tests/*.test.mjs` (All unit and contract tests)

---

## Generated Catalogue Contract

- `CATALOGUE_CHECKED_AT` in `src/data/projects.mjs` is the sole published catalogue date. `CATALOGUE_UPDATED_AT` aliases it for generated and schema outputs.
- Change the registry first. Then run `npm test`. The generated `projects.json` `updatedAt`, Dataset `dateModified`, and `public/knowledge/projects.md` must agree with the registry date.
- Keep project IDs unique. The rendered catalogue, CSV, JSON, knowledge file, and structured data must describe the same project list.
