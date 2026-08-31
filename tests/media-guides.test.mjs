import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const dist = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');

function structuredData(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
}

test('builds source-linked audio, podcast, game and anime guides', async () => {
  const [audio, games, anime, learn, knowledge, llms, expanded] = await Promise.all([
    dist('learn/audio-and-podcasts/index.html'),
    dist('learn/games/index.html'),
    dist('learn/anime-catalogues/index.html'),
    dist('learn/index.html'),
    dist('knowledge/index.md'),
    dist('llms.txt'),
    dist('llms-full.txt')
  ]);

  assert.match(audio, /Audio and podcast projects do not record the same thing/);
  assert.match(audio, /Mopidy-Scrobbler/);
  assert.match(audio, /AntennaPod/);
  assert.match(audio, /Playback-state sync/);

  assert.match(games, /Game activity can be a session, a snapshot or an achievement/);
  assert.match(games, /GameActivity for Playnite/);
  assert.match(games, /RomM/);
  assert.match(games, /CHScrobbler/);

  assert.match(anime, /Anime catalogues can disagree before playback starts/);
  assert.match(anime, /animeApi issue #11/);
  assert.match(anime, /Missing event times/);
  assert.match(anime, /Require explicit deletion/);

  assert.match(learn, /How do audio and podcast projects differ/);
  assert.match(learn, /What does a game tracker actually record/);
  assert.match(learn, /Why do anime imports become ambiguous/);
  assert.match(knowledge, /Audio and podcast activity records/);
  assert.match(knowledge, /Game activity records/);
  assert.match(knowledge, /Anime catalogue granularity/);
  assert.match(llms, /Audio and podcast projects/);
  assert.match(expanded, /Medium-specific activity/);

  for (const html of [audio, games, anime]) {
    const blocks = structuredData(html);
    assert.ok(blocks.some((block) => block['@type'] === 'TechArticle'));
    assert.ok(blocks.some((block) => block['@type'] === 'BreadcrumbList'));
  }
});

test('keeps automatic capture distinct from state and manual tracking', async () => {
  const [audio, games] = await Promise.all([
    dist('learn/audio-and-podcasts/index.html'),
    dist('learn/games/index.html')
  ]);

  assert.match(audio, /It does not automatically create a portable event history/);
  assert.match(games, /Those fields do not prove a durable, portable occurrence log/);
  assert.match(games, /It is a tracker, not automatic capture/);
});
