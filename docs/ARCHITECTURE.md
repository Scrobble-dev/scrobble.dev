# Scrobble.dev Architecture & Domain-Driven Design (DDD) Blueprint

## Executive Overview

Scrobble.dev operates as an independent, neutral, implementation-aware knowledge base and ecosystem field guide for scrobbling, media tracking, and portable history. It uses [Fasti](https://github.com/Scrobble-dev/Fasti) as an open-source, local-first reference architecture.

---

## 1. Domain-Driven Design (DDD) & Bounded Contexts

Media tracking systems routinely fail by collapsing separate domain concerns into monolithic tracking rows. Scrobble.dev defines and enforces 6 discrete bounded contexts:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SCROBBLE.DEV DOMAIN MAP                         │
└────────────────────────────────────────────────────────────────────────┘

 ┌─────────────────────────┐         ┌─────────────────────────┐
 │   1. SCROBBLE EVENT     │         │   2. PROGRESS STATE     │
 │   • Append-only ledger  │         │   • Volatile position   │
 │   • Immutable timestamp │         │   • Seconds/pages/ep    │
 │   • Cryptographic nonce │         │   • Dirty resume marker │
 └───────────┬─────────────┘         └────────────┬────────────┘
             │                                    │
             ▼                                    ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                  3. CANONICAL MEDIA IDENTITY                │
 │   • Source-local identifiers (Plex ratingKey, Spotify URI)  │
 │   • Canonical namespaces (MusicBrainz, TMDB, OpenLibrary)   │
 │   • Explicit provenance & mapping confidence                │
 └───────────────────────────┬─────────────────────────────────┘
                             │
             ┌───────────────┴───────────────┐
             ▼                               ▼
 ┌─────────────────────────┐     ┌─────────────────────────────┐
 │  4. COLLECTION & INTENT │     │   5. SYNCHRONIZATION        │
 │  • Watchlists & queues  │     │   • Bidirectional relays    │
 │  • Ratings & reviews    │     │   • Idempotent deduplication│
 │  • Physical ownership   │     │   • Conflict reconciliation │
 └─────────────────────────┘     └─────────────────────────────┘
                             │
                             ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                   6. CATALOGUE REGISTRY                     │
 │   • Source-verified tracker & connector capabilities        │
 │   • Open Knowledge Format (OKF v0.2) portable bundle        │
 │   • Multi-format distributions (Web, JSON, CSV, JSON-LD)    │
 └─────────────────────────────────────────────────────────────┘
```

### Bounded Context Definitions

1. **Scrobble Event**:
   - **Definition**: An immutable, append-only factual assertion that a user consumed a specific unit of media during a recorded timeframe.
   - **Key Invariants**: Event identity must remain stable across retries; playback time must be distinguished from recorded/received timestamps; state mutations must append rather than overwrite history.

2. **Progress State**:
   - **Definition**: The transient, mutable resume point of active media consumption.
   - **Key Invariants**: Must preserve native units (seconds, chapter index, page number, episode sequence) before deriving coarse percentages; volatile progress must never pollute the durable event ledger.

3. **Canonical Media Identity**:
   - **Definition**: The entity resolution layer binding playback evidence to universal or source-local metadata entities.
   - **Key Invariants**: Source-local identifiers are preserved; external provider IDs are treated as evidence, not canonical identity; mappings carry explicit provenance.

4. **Collection & Intent**:
   - **Definition**: User-declared relationships with media outside active playback (e.g. wishlist, ownership, 5-star rating, review).
   - **Key Invariants**: Conflating a watchlist item with a consumed scrobble event is strictly prohibited.

5. **Synchronization**:
   - **Definition**: The reconciliation and transport protocol moving media records across heterogeneous storage nodes.
   - **Key Invariants**: Relays must operate idempotently; retry failures must not duplicate records; deletions and corrections must propagate without state corruption.

6. **Catalogue Registry**:
   - **Definition**: The evidence-backed catalog of active, verified tracking software, connectors, and protocols.
   - **Key Invariants**: Inclusion does not imply endorsement; facts must cite first-party sources; unknown states must remain explicitly unknown.

---

## 2. Multi-Tier Distribution Pipeline

```
[src/data/projects.mjs] (Canonical Evidence Data)
        │
        ├──► Astro SSG Compiler ────────► [dist/*.html] (Tabler-First Web UI)
        ├──► scripts/generate-public.mjs ─► [public/knowledge/projects.md] (OKF v0.2)
        ├──► src/pages/projects.json.js ──► [/projects.json] (Machine JSON API)
        ├──► src/pages/projects.csv.js  ──► [/projects.csv] (Tabular Distribution)
        ├──► Schema.org LD Generator ───► [JSON-LD: Dataset & SoftwareApplication]
        └──► scripts/build-sites.mjs ───► [dist/_worker.js] (Cloudflare Sites Engine)
```

---

## 3. Engineering & Architectural Invariants

- **Zero Runtime Telemetry**: The application and all generated outputs contain zero tracking SDKs, analytics beacons, or third-party phone-home scripts.
- **Offline & Local-First Operation**: All web pages, client-side filters, and knowledge files function fully offline without external runtime API dependencies.
- **Strict Static Site Generation (SSG)**: Astro compiles 100% static HTML with zero server-side state drift.
- **Deterministic Offline CI Gates**: Every build enforces `astro check`, `validate:okf`, `validate:public`, and 20 automated unit/contract tests before release.
- **Open Knowledge Format (OKF v0.2)**: All domain concepts are serialized in versioned, YAML-frontmatter Markdown conforming to the pinned OKF v0.2 JSON schema.
