---
type: Domain Concept
title: Audio and podcast activity records
description: The difference between music scrobbles, listening-history destinations and podcast playback-state synchronization.
resource: https://scrobble.dev/learn/audio-and-podcasts/
tags: [audio, music, podcasts, activity, synchronization]
status: stable
stale_after: 2027-02-28
verified: { by: process:project-source-review, at: 2026-08-31T12:00:00Z }
sources:
  - { id: lastfm-track-music, resource: "https://www.last.fm/about/trackmymusic", title: "Last.fm Track My Music" }
  - { id: listenbrainz, resource: "https://listenbrainz.org/", title: "ListenBrainz" }
  - { id: mopidy-scrobbler, resource: "https://github.com/mopidy/mopidy-scrobbler/blob/main/README.md", title: "Mopidy-Scrobbler README" }
  - { id: gpodder-sync, resource: "https://github.com/gpodder/gpodder/blob/master/src/gpodder/my.py", title: "gPodder synchronization implementation" }
  - { id: antennapod-sync, resource: "https://github.com/AntennaPod/AntennaPod/blob/develop/net/sync/service/src/main/java/de/danoeh/antennapod/net/sync/service/SyncService.java", title: "AntennaPod synchronization implementation" }
  - { id: audiobookshelf-sessions, resource: "https://github.com/advplyr/audiobookshelf/blob/master/server/managers/PlaybackSessionManager.js", title: "Audiobookshelf playback-session implementation" }
---

# Audio and podcast activity records

Music scrobbling and podcast synchronization often use similar words for different records.

## Music scrobbling

A music capture client observes a track play and submits it to a destination. The destination keeps listening history independently of the player. A bridge can receive one source's playback data and forward it to one or more destinations.

A current “now playing” value is temporary. A durable listen contains a represented time, track context and provenance.

## Podcast synchronization

Podcast clients commonly exchange subscriptions, episode actions, position and completion with compatible services. This makes multi-device resume possible. It does not automatically create a general listening-event history that unrelated players can inspect and move.

A portable podcast event should preserve:

- feed URL and episode GUID when supplied;
- any source-local episode identifier;
- event kind, such as started, progress, completed or corrected;
- event time, kept separate from receipt and import time;
- position and duration in seconds when known;
- player, device and import provenance;
- privacy, correction, deletion and export behavior.

A feed URL alone is not permanent identity. Feeds can redirect, move or reuse weak GUIDs.

## Project classification

A project should be described by the job its documented behavior performs:

- capture client;
- history destination;
- bridge;
- playback-state synchronization;
- manual tracker or importer.

Using “scrobbler” for every project hides material differences in event durability, portability and user control.

## Related concepts

- [Scrobbling](./scrobbling.md)
- [Media activity lifecycle](./activity-lifecycle.md)
- [Scrobble event](./scrobble-event.md)
- [Source-local media identity](./media-identity.md)
