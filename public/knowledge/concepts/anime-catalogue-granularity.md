---
type: Domain Concept
title: Anime catalogue granularity
description: Why anime services can disagree about entries, parts, specials, seasons and episode coordinates during history import.
resource: https://scrobble.dev/learn/anime-catalogues/
tags: [anime, imports, episodes, identity, correction]
status: stable
stale_after: 2027-02-28
verified: { by: process:project-source-review, at: 2026-08-31T12:00:00Z }
sources:
  - { id: animeapi-issue-11, resource: "https://github.com/nattadasu/animeApi/issues/11", title: "animeApi issue 11: request for feedback on anime mapping and tracking" }
---

# Anime catalogue granularity

Anime services can describe the same material with different record boundaries.

## Common differences

- One service can keep specials under a main series while another creates separate entries.
- One service can use one item while another divides the material into several parts.
- Recaps and bonus episodes can shift later episode numbers.
- One service can start a new entry for a cour while a television catalogue keeps it inside one season.
- A provider can move, merge or remove a current catalogue entry.
- An export can contain completion without the original watch timestamp.

These differences can create one-to-many or many-to-one relationships. They can also make a numeric episode coordinate unsafe outside the source catalogue that defined it.

## Safe import behavior

A safe import preserves:

- source namespace and source item identifier;
- source part, season or episode coordinate;
- the label known at import time;
- event time when supplied;
- export and import times as separate values;
- the evidence and checked date used for the current interpretation.

When exact correspondence is unavailable, the activity remains unresolved rather than being forced onto a convenient destination entry. A later correction preserves the original import evidence and records why the interpretation changed.

Provider absence, an empty response or a failed lookup is not a deletion instruction.

## Practical consequence

History portability depends on more than copying a completion number. The receiving system must preserve the source structure well enough to inspect disagreement, retry safely and correct the subject later without inventing or erasing activity.

## Related concepts

- [Source-local media identity](./media-identity.md)
- [Interoperability](./interoperability.md)
- [Media activity lifecycle](./activity-lifecycle.md)
- [Scrobble event](./scrobble-event.md)
