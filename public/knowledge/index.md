---
okf_version: "0.2"
---

# Scrobble.dev knowledge bundle

This directory is the machine- and human-readable knowledge layer for scrobbling and media tracking.

## Concepts
- [Scrobbling](./concepts/scrobbling.md)
- [Media activity lifecycle](./concepts/activity-lifecycle.md)
- [Scrobble event](./concepts/scrobble-event.md)
- [Media identity](./concepts/media-identity.md)
- [Interoperability](./concepts/interoperability.md)
- [Audio and podcast activity records](./concepts/audio-and-podcast-activity.md)
- [Game activity records](./concepts/game-activity.md)
- [Anime catalogue granularity](./concepts/anime-catalogue-granularity.md)
- [Frequently asked questions](./faq.md)
- [Evidence method](./method.md)
- [Governance](./governance.md)

## Curated collections
- [Scrobbling project catalogue](./projects.md)

## Bundle history
- [Update log](./log.md)

## Format
- [Open Knowledge Format project](https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf)
- [Pinned OKF v0.2 specification](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/374e0bc4c644310ff56cdf9c0fe81eccdec862b0/okf/SPEC.md)

## Conventions
- Each concept has a stable path.
- Concept files use YAML frontmatter with a non-empty `type`.
- Relationships are ordinary Markdown links.
- Claims that depend on an external implementation should carry source/provenance context.
- Project-specific behavior must not be presented as ecosystem-wide consensus.
- Corrections should update the concept and preserve meaningful history in version control.

## Human-facing representations
- https://scrobble.dev/learn/scrobbling/
- https://scrobble.dev/learn/lifecycle/
- https://scrobble.dev/learn/audio-and-podcasts/
- https://scrobble.dev/learn/games/
- https://scrobble.dev/learn/anime-catalogues/
- https://scrobble.dev/build/
- https://scrobble.dev/standard/
- https://scrobble.dev/projects/
- https://scrobble.dev/faq/
- https://scrobble.dev/contribute/
- https://scrobble.dev/about/
