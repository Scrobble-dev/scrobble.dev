# scrobble.dev

[![CI](https://github.com/Scrobble-dev/scrobble.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/Scrobble-dev/scrobble.dev/actions)
[![Open Knowledge Format v0.2](https://img.shields.io/badge/OKF-v0.2-206bc4)](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/374e0bc4c644310ff56cdf9c0fe81eccdec862b0/okf/SPEC.md)
[![License: CC0-1.0](https://img.shields.io/badge/Catalogue-CC0--1.0-2fb344)](https://creativecommons.org/publicdomain/zero/1.0/)

> **The trusted, neutral, implementation-aware knowledge base and field guide for media tracking, scrobbling, and portable history.**

Scrobble.dev documents how media consumption becomes durable, user-owned history. It establishes common interoperability principles across music, films, television, anime, books, comics, podcasts, and video games while referencing [Fasti](https://github.com/Scrobble-dev/Fasti) as an open-source, local-first reference architecture.

---

## Core Pillars

1. **Domain-Driven Clarity (DDD)**: Explicitly separates playback, event capture, progress state, and collection ownership.
2. **Tabler-First Craft Floor**: Professional, high-contrast, accessible UI built directly with Tabler design tokens and datatable components.
3. **Ecosystem Neutrality**: Evaluates trackers and connectors on documented capabilities and verified evidence, without disparaging any tool.
4. **Machine-Readable Knowledge (OKF v0.2)**: Every concept is published simultaneously as structured HTML, validated Markdown, Schema.org JSON-LD, JSON, and CSV.
5. **Kathy Sierra Philosophy (*Badass Users*)**: Empowers developers and users to master their media history through concrete failure-case reproduction, instant demo access, and clear data portability.

---

## Domain Boundaries (DDD)

Media tracking systems often conflate separate domain concepts. Scrobble.dev maintains strict boundaries:

| Bounded Context | Core Responsibility | Key Question Answered |
| :--- | :--- | :--- |
| **Scrobble Event** | Append-only record of consumed media with cryptographic/verifiable state | *What happened and when?* |
| **Progress State** | Ephemeral or volatile playback position (seconds, pages, episodes) | *Where do I resume?* |
| **Media Identity** | Source-local and canonical provider identifiers (MusicBrainz, TMDB, OpenLibrary) | *What specific item was consumed?* |
| **Collection & Intent** | User ratings, watchlists, backlog queues, and physical/digital ownership | *What do I own or want to consume?* |
| **Synchronization** | Multi-directional event relay, deduplication, and state reconciliation | *How do records move between systems?* |
| **Catalogue Registry** | Source-linked directory of ecosystem projects, clients, and services | *Which tools support this workflow?* |

---

## Architecture & Distribution Pipeline

```
[src/data/projects.mjs] (Canonical Evidence Data)
        │
        ├──► Astro Static Site Generator ──► [dist/*.html] (Tabler-First Web UI)
        ├──► scripts/generate-public.mjs ──► [public/knowledge/projects.md] (OKF v0.2)
        ├──► src/pages/projects.json.js  ──► [/projects.json] (Machine API)
        ├──► src/pages/projects.csv.js   ──► [/projects.csv] (Tabular Distribution)
        └──► Schema.org Injector         ──► [JSON-LD: Dataset & SoftwareApplication]
```

### Key Repository Paths

- `src/pages/` — Canonical Astro web routes and documentation pages.
- `src/data/projects.mjs` — Source-of-truth project registry and evidence links.
- `src/styles/global.css` — Tabler-first design tokens, high-contrast badges, and responsive tables.
- `public/knowledge/` — [Open Knowledge Format v0.2](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/374e0bc4c644310ff56cdf9c0fe81eccdec862b0/okf/SPEC.md) Markdown bundle.
- `public/llms.txt` & `public/llms-full.txt` — LLM/Agent discoverability endpoints.
- `docs/` — In-depth architectural, design, and API reference documentation.

---

## Local Development & Testing

### Prerequisites
- Node.js $\ge 20.0.0$
- npm $\ge 10.0.0$

### Quick Start

```bash
# Install dependencies
npm install

# Start local Astro development server (http://localhost:4321)
npm run dev
```

### Verification & Test Suite

Before submitting pull requests, run the canonical offline gate:

```bash
npm test
```

The test runner validates:
1. `npm run generate:public` — Synchronizes `public/knowledge/projects.md` from canonical data.
2. `astro check` — Static TypeScript and Astro component type checking.
3. `astro build` — Static HTML rendering into `dist/`.
4. `scripts/build-sites.mjs` — Builds the Cloudflare Sites worker bundle.
5. `npm run validate:okf` — Strict JSON-schema verification of 11 Markdown files against OKF v0.2.
6. `npm run validate:public` — Scans output for prohibited internal scope keywords.
7. `node --test tests/*.test.mjs` — Executes all 20 contract, rendering, and structured-data assertions.

---

## Design & Accessibility Baseline

- **Design System**: Built on Tabler Core (`@tabler/core`) standards: `#e6e7e9` card borders, `#f8fafc` table headers, soft-tint status badges.
- **Accessibility**: Full compliance with **WCAG 2.2 Level AA** and **EN 301 549** ($\ge 44\text{px}$ interactive hitboxes, $\ge 4.5:1$ text contrast, high-contrast focus rings).
- **Neurodiversity & Scannability**: Designed for ADHD/AuDHD readability — table-first comparisons, 1-click credential copying, clear action items, and zero decorative layout shifts (`CLS = 0`).

---

## Reference Implementation

[Fasti](https://github.com/Scrobble-dev/Fasti) serves as the pinned, local-first reference architecture and daemon implementation for Scrobble.dev principles:
- **Offline-First**: Embedded SQLite with append-only ledger.
- **Zero Telemetry**: Strict privacy floor with zero tracking or phone-home SDKs.
- **Product Boundary**: *Fasti records, players play.* (No transcoding, decoding, or player lock-in).

---

## Documentation & Deep Guides

- [Architecture Guide](docs/ARCHITECTURE.md) — Detailed DDD domain model and data pipelines.
- [Design Contract](docs/DESIGN.md) — Tabler UI tokens, typography, and accessibility rubric.
- [API & Schema Reference](docs/API.md) — Distributions, JSON-LD, and OKF v0.2 contracts.
- [Contributing Guide](CONTRIBUTING.md) — Step-by-step instructions for contributing facts, code, and standard profiles.
- [Deployment Guide](docs/DEPLOYMENT.md) — Cloudflare Pages and static distribution procedures.

---

## Support & Governance

- **Maintainer**: [Ryan Winkler](https://github.com/ryan-winkler)
- **Sponsor the Work**: [GitHub Sponsors](https://github.com/sponsors/ryan-winkler)
- **Governance**: [public/knowledge/governance.md](public/knowledge/governance.md)
