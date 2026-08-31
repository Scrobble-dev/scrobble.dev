# Contributing to Scrobble.dev

Scrobble.dev is maintained in the open. We welcome factual corrections, project updates, interoperability failure reports, conformance cases, accessibility fixes, and domain guidance.

Application implementation features and bug fixes belong in the [Fasti issue tracker](https://github.com/Scrobble-dev/Fasti/issues).

---

## 1. Scope of Contributions

Scrobble.dev documents:
- **Core Domain Concepts**: Media activity, now playing, progress, completion, history, retries, corrections, deletions, synchronization, and portability.
- **Ecosystem Catalogue**: Independent, source-linked records of active media trackers, players, daemons, and connectors.
- **Draft Standard Profiles**: Open interoperability proposals and event payloads.
- **Allied Initiatives**: Peer networks, IndieWeb formats, and public metadata services (`/friends/`).

Scrobble.dev does **not**:
- Rank or promote commercial platforms over open tools.
- Host private user media data or streaming playback services.
- Invent ecosystem consensus where behavior is project-specific.

---

## 2. Contribution Pathways & Issue Templates

### A. Factual Correction or Project Addition
Open a [Scrobble.dev Issue](https://github.com/Scrobble-dev/scrobble.dev/issues/new) with the following format:

```markdown
### Project Update: [Project Name]
- **Project Name & URL**: [e.g. Audiobookshelf, https://www.audiobookshelf.org/]
- **Repository**: [e.g. https://github.com/advplyr/audiobookshelf]
- **Media Types**: [Film | Television | Anime | Books | Manga | Comics | Music | Podcasts | Video games | Board games]
- **Category**: [Tracker | Client | Connector | Service]
- **Hosting Model**: [Self-hosted | Cloud | Local client]
- **Pricing**: [Free | Freemium | Paid]
- **Licence**: [e.g. GPL-3.0]
- **Live Demo URL & Credentials**: [Optional, e.g. https://demo.example.com / username / password]
- **Capture Mechanism**: [e.g. Server API and webhook receiver]
- **Primary Source / Verification**: [Link to docs or release showing capability]
```

### B. Interoperability & Failure Report
When documenting synchronization, retry, or format mismatch bugs:
1. Identify the applications and versions involved.
2. Provide an anonymized, private-data-safe JSON event payload or reproducible event sequence.
3. State the observed result vs. expected durable history outcome.

### C. Open Knowledge Concept Update (OKF v0.2)
Reusable domain definitions belong in `public/knowledge/` and must include:
- A non-empty YAML `type` (e.g. `Concept`, `Method`, `Governance`).
- `title`, `description`, and stable `resource` URL.
- `status: stable` (or `draft` / `deprecated`).
- Primary `sources` with checked dates.

---

## 3. Writing & Design Standards

- **Voice**: ASD-STE100 Simplified Technical English — direct, active voice, zero hype, third-person institutional narrator.
- **UI Framework**: Tabler-first design (`@tabler/core`). Always use upstream Tabler classes for layout, datatables, badges, and forms.
- **Accessibility Floor**: WCAG 2.2 Level AA and EN 301 549 full conformance. $\ge 44\text{px}$ hitboxes, high-contrast focus rings, and zero layout shift (`CLS = 0`).
- **Philosophy**: Kathy Sierra (*Badass: Making Users Awesome*) — prioritize user empowerment, reduce cognitive friction, and provide instant recovery paths.

---

## 4. Local Development & Verification

```bash
# Install dependencies
npm install

# Start local server
npm run dev

# Run canonical validation gate
npm test
```

A pull request must pass `npm test` cleanly, which validates:
- Astro TypeScript types (`astro check`) and static build.
- OKF v0.2 schema validation across all Markdown files (`validate:okf`).
- Prohibited internal scope keyword scan (`validate:public`).
- All 20 automated unit and contract tests.

---

## 5. Community & Maintainer Support

- **Repository**: [https://github.com/Scrobble-dev/scrobble.dev](https://github.com/Scrobble-dev/scrobble.dev)
- **Fasti Engine**: [https://github.com/Scrobble-dev/Fasti](https://github.com/Scrobble-dev/Fasti)
- **Sponsor Ryan Winkler**: [https://github.com/sponsors/ryan-winkler](https://github.com/sponsors/ryan-winkler)
- **Governance**: [public/knowledge/governance.md](public/knowledge/governance.md)
