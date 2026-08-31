---
type: Domain Concept
title: Game activity records
description: The difference between observed game sessions, cumulative playtime, platform imports, achievements and manual tracking.
resource: https://scrobble.dev/learn/games/
tags: [games, activity, sessions, playtime, privacy]
status: stable
stale_after: 2027-02-28
verified: { by: process:project-source-review, at: 2026-08-31T12:00:00Z }
sources:
  - { id: gameactivity-readme, resource: "https://github.com/Lacro59/playnite-gameactivity-plugin/blob/master/README.md", title: "GameActivity README" }
  - { id: romm-sessions, resource: "https://github.com/rommapp/romm/blob/master/backend/handler/play_session_handler.py", title: "RomM play-session handler" }
  - { id: chscrobbler-readme, resource: "https://github.com/angelolz/CHScrobbler/blob/master/README.md", title: "CHScrobbler README" }
  - { id: playnite-game-model, resource: "https://github.com/JosefNemec/Playnite/blob/master/source/PlayniteSDK/Models/Game.cs", title: "Playnite game model" }
  - { id: gamevault-progress, resource: "https://github.com/Phalcode/gamevault-backend/blob/master/src/modules/progresses/progress.entity.ts", title: "GameVault progress entity" }
---

# Game activity records

A game tracker can store several distinct forms of evidence.

## Session capture

Session capture observes a start and stop boundary. A useful session record identifies the game or release, platform, start time, end time and duration. Active time should remain distinct from wall-clock time when the source can detect idle, suspension or background execution.

## Current state and platform snapshots

A launcher or server can store total playtime, play count, last-played time or completion state. A platform API can expose a current snapshot. Those values do not automatically preserve the sessions that produced them.

Achievement events are another separate record. They can prove one action or milestone without describing the full play session.

## Minimum portable context

A portable game event should preserve:

- namespaced game or release identifiers;
- platform and edition when known;
- event kind;
- represented time;
- active and wall-clock duration when available;
- local observer, launcher, emulator, platform import or manual provenance;
- stable occurrence identity for safe retry;
- export, correction, deletion and privacy behavior.

A display title is not sufficient identity. The same name can refer to regional releases, remasters, storefront products or different achievement sets.

## Classification

Projects should be classified as session capture, playtime state, platform ingestion, achievement telemetry, library aggregation or manual tracking. A connected account or cumulative total is not proof of session-level scrobbling.

## Related concepts

- [Scrobbling](./scrobbling.md)
- [Media activity lifecycle](./activity-lifecycle.md)
- [Scrobble event](./scrobble-event.md)
- [Source-local media identity](./media-identity.md)
