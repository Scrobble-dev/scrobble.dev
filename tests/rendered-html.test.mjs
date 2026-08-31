import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { CATALOGUE_CHECKED_AT, filterProjects, PROJECTS, sortProjects } from '../src/data/projects.mjs';

const dist = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');

test('builds the knowledge-first field guide and catalogue', async () => {
  const [home, learn, lifecycle, build, projects, faq, draft, about, friends, llms, catalogue, json, csv] = await Promise.all([
    dist('index.html'),
    dist('learn/index.html'),
    dist('learn/lifecycle/index.html'),
    dist('build/index.html'),
    dist('projects/index.html'),
    dist('faq/index.html'),
    dist('standard/index.html'),
    dist('about/index.html'),
    dist('friends/index.html'),
    dist('llms.txt'),
    dist('knowledge/projects.md'),
    dist('projects.json'),
    dist('projects.csv')
  ]);

  assert.match(home, /A scrobble is a durable record/);
  assert.match(home, /I use trackers/);
  assert.match(home, /I build trackers/);
  assert.match(learn, /Start with the record\. Then choose the tool/);
  assert.match(lifecycle, /When does media activity become history/);
  assert.match(build, /Record enough context to retry, correct and export/);
  assert.match(projects, /Search projects/);
  assert.match(projects, /All media/);
  assert.match(projects, /Reset filters/);
  assert.match(projects, /pinned v0\.2 specification/);
  assert.match(projects, /Fasti documentation/);
  assert.match(faq, /Why is anime a separate catalogue facet/);
  assert.match(draft, /Eight draft principles/);
  assert.match(about, /Scrobble\.dev explains how media activity becomes/);
  assert.match(friends, /Friends & Open Knowledge Peers/);
  assert.match(llms, /Scrobbling definition/);
  assert.match(catalogue, /# Scrobbling project catalogue/);

  const parsed = JSON.parse(json);
  assert.equal(parsed.projects.length, PROJECTS.length);
  assert.equal(new Set(parsed.projects.map(({ id }) => id)).size, PROJECTS.length);
  assert.equal(csv.trim().split('\n').length, PROJECTS.length + 1);

  for (const html of [home, learn, lifecycle, build, projects, faq, draft, about, friends]) {
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
    assert.ok(blocks.length >= 2);
  }
});

test('publishes crawler, sitemap, LLM and structured-data discovery surfaces', async () => {
  const [home, robots, sitemapIndex, sitemap, llms, expanded] = await Promise.all([
    dist('index.html'),
    dist('robots.txt'),
    dist('sitemap-index.xml'),
    dist('sitemap-0.xml'),
    dist('llms.txt'),
    dist('llms-full.txt')
  ]);

  assert.match(robots, /^Sitemap: https:\/\/scrobble\.dev\/sitemap-index\.xml$/m);
  assert.match(sitemapIndex, /https:\/\/scrobble\.dev\/sitemap-0\.xml/);
  assert.match(sitemap, /https:\/\/scrobble\.dev\/projects\//);
  assert.match(llms, /^# Scrobble\.dev$/m);
  assert.match(expanded, /^# Scrobble\.dev: expanded context$/m);

  const schemaTypes = [...home.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1])['@type']);
  assert.deepEqual(schemaTypes, ['WebSite', 'Person', 'WebPage', 'DefinedTermSet']);
});

test('filters and sorts the evidence registry without changing its source', () => {
  const filmConnectors = filterProjects(PROJECTS, { media: 'Film', category: 'Connector', sourceState: 'Open source' }).map(({ name }) => name);
  assert.ok(filmConnectors.includes('Movary Kodi add-on'));
  assert.ok(filmConnectors.includes('scrob'));

  assert.ok(filterProjects(PROJECTS, { media: 'Books' }).length >= 5);
  assert.ok(filterProjects(PROJECTS, { sourceState: 'No public source repository verified' }).length >= 4);

  const selfHosted = filterProjects(PROJECTS, { query: 'self-hosted' }).map(({ name }) => name);
  assert.ok(selfHosted.includes('Fasti'));
  assert.ok(selfHosted.includes('Ryot'));
  assert.ok(selfHosted.includes('Maloja'));

  const sorted = sortProjects(PROJECTS, 'name').slice(0, 3).map(({ name }) => name);
  assert.deepEqual(sorted, ['AntennaPod', 'Audiobookshelf', 'BookWyrm']);
  assert.deepEqual(sortProjects(PROJECTS, 'name', 'desc').slice(0, 2).map(({ name }) => name), ['Yozora', 'Yamtrack']);
  assert.deepEqual(PROJECTS.map(({ id }) => id), [...PROJECTS].map(({ id }) => id));
  const fasti = PROJECTS.filter(({ id }) => id === 'fasti');
  assert.equal(fasti.length, 1);
  assert.equal(fasti[0].url, 'https://github.com/Scrobble-dev/Fasti');
  assert.equal(fasti[0].sources[0].id, 'fasti-repository');
});

test('keeps catalogue distributions and visible structured data in parity', async () => {
  const [projectsHtml, catalogue, json, csv] = await Promise.all([
    dist('projects/index.html'),
    dist('knowledge/projects.md'),
    dist('projects.json'),
    dist('projects.csv')
  ]);
  const parsed = JSON.parse(json);
  const csvIds = csv.trim().split('\n').slice(1).map((line) => line.match(/^"([^"]+)"/)?.[1]);

  assert.deepEqual(parsed.projects.map(({ id }) => id), PROJECTS.map(({ id }) => id));
  assert.deepEqual(csvIds, PROJECTS.map(({ id }) => id));
  for (const project of PROJECTS) {
    assert.match(projectsHtml, new RegExp(`data-id="${project.id}"`));
    assert.match(catalogue, new RegExp(`\\| ${project.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} \\|`));
  }

  const blocks = [...projectsHtml.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const itemList = blocks.find((block) => block['@type'] === 'ItemList');
  const dataset = blocks.find((block) => block['@type'] === 'Dataset');
  assert.equal(itemList.numberOfItems, PROJECTS.length);
  assert.equal(dataset.version, parsed.version);
  assert.equal(parsed.updatedAt, CATALOGUE_CHECKED_AT);
  assert.equal(dataset.dateModified, parsed.updatedAt);
});
