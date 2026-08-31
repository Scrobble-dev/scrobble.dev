# Scrobble.dev API, Schema & Distribution Contracts

## Overview

Scrobble.dev provides first-class machine-readable endpoints, structured data schemas, and agent discoverability formats alongside its human-facing web interface.

---

## 1. Machine-Readable Distributions

All catalogue distributions are compiled deterministically at build time and dedicated to the public domain under **CC0 1.0 Universal**.

### 1.1 Project Catalogue JSON API
- **Endpoint**: `https://scrobble.dev/projects.json`
- **Method**: `GET`
- **Content-Type**: `application/json; charset=utf-8`
- **Schema**:
```json
{
  "version": "0.3",
  "checkedAt": "2026-08-31",
  "license": "https://creativecommons.org/publicdomain/zero/1.0/",
  "projects": [
    {
      "id": "fasti",
      "name": "Fasti",
      "summary": "Local-first media tracking daemon, annal and player-independent recorder.",
      "media": ["Film", "Television", "Anime", "Books", "Manga", "Comics", "Music", "Podcasts", "Video games", "Board games"],
      "category": "Tracker",
      "capture": "Daemon API, player integrations and local annal",
      "hosting": "Self-hosted",
      "pricing": "Free",
      "sourceState": "Open source",
      "license": "AGPL-3.0",
      "url": "https://github.com/Scrobble-dev/Fasti",
      "demoUrl": "https://github.com/Scrobble-dev/Fasti",
      "repository": "https://github.com/Scrobble-dev/Fasti",
      "contribute": "https://github.com/Scrobble-dev/Fasti/issues",
      "lifecycle": "active",
      "checkedAt": "2026-08-31",
      "sources": [
        {
          "id": "fasti-repository",
          "title": "Fasti repository",
          "url": "https://github.com/Scrobble-dev/Fasti",
          "checkedAt": "2026-08-31"
        }
      ]
    }
  ]
}
```

### 1.2 Tabular CSV Distribution
- **Endpoint**: `https://scrobble.dev/projects.csv`
- **Method**: `GET`
- **Content-Type**: `text/csv; charset=utf-8`
- **Headers**: `"id","name","category","hosting","pricing","source_state","license","media","url","repository","lifecycle","checked_at"`

### 1.3 Release Verification Endpoint
- **Endpoint**: `https://scrobble.dev/release.json`
- **Method**: `GET`
- **Content-Type**: `application/json; charset=utf-8`
- **Response**:
```json
{
  "commit": "374e0bc4c644310ff56cdf9c0fe81eccdec862b0",
  "repository": "https://github.com/Scrobble-dev/scrobble.dev"
}
```

---

## 2. Schema.org JSON-LD Structured Data

Every page injects validated JSON-LD matching Google Search Gallery specifications:

| Page / Route | Primary Schema Types | Key Properties |
| :--- | :--- | :--- |
| **Site Root (`/`)** | `WebSite`, `Person` | `url`, `name`, `description`, `publisher`, `sameAs` |
| **Projects (`/projects/`)** | `Dataset`, `DataDownload`, `ItemList`, `SoftwareApplication` | `version`, `license`, `distribution`, `itemListElement`, `operatingSystem`, `applicationCategory` |
| **Learn (`/learn/scrobbling/`)** | `TechArticle`, `DefinedTermSet`, `DefinedTerm` | `headline`, `inLanguage`, `author`, `hasDefinedTerm` |
| **FAQ (`/faq/`)** | `FAQPage` | `mainEntity` (`Question` + `Answer`) |
| **All Subpages** | `BreadcrumbList` | `itemListElement` with positional hierarchy |

---

## 3. Open Knowledge Format (OKF v0.2)

The knowledge graph under `public/knowledge/` conforms to the official [OKF v0.2 Specification](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/374e0bc4c644310ff56cdf9c0fe81eccdec862b0/okf/SPEC.md):

- **Bundle Root**: `public/knowledge/index.md` (declares `okf_version: "0.2"`).
- **Concept Frontmatter**:
```yaml
---
type: Concept
title: Scrobble event
description: An immutable, append-only record of consumed media.
resource: https://scrobble.dev/knowledge/concepts/scrobble-event.md
tags: [scrobble-event, ledger, immutable]
status: stable
verified: { by: OpenAI/Codex-2026-08-11, at: 2026-08-11T20:58:36Z }
stale_after: 2027-02-11
sources:
  - { id: fasti-repo, resource: "https://github.com/Scrobble-dev/Fasti", title: "Fasti repository" }
---
```

---

## 4. IndieWeb Standards & Agent Discoverability

- **Microformats2**:
  - `h-card`: Publisher, maintainer, and friends identity (`p-name`, `u-url`, `p-note`, `rel="author me"`).
  - `h-entry`: Field guide articles and concept explanations (`p-name`, `e-content`, `dt-published`, `dt-updated`, `p-author`).
  - `h-item`: Structured catalogue entries (`p-name`, `p-summary`, `p-category`).
- **Slashfriends (`/friends/`)**: Implements https://slashfriends.org/ peer discovery standard with `rel="friend"` outbound links and RSS/Atom feed references.
- **LLM Context Discovery**:
  - `https://scrobble.dev/llms.txt`: Compact LLM discovery index.
  - `https://scrobble.dev/llms-full.txt`: Full site context and domain primer.
