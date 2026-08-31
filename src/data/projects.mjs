export const CATALOGUE_CHECKED_AT = '2026-08-31';

export const MEDIA = ['Film', 'Television', 'Anime', 'Books', 'Manga', 'Comics', 'Music', 'Podcasts', 'Video games', 'Board games', 'Fitness'];
export const HOSTING_MODELS = ['Self-hosted', 'Cloud', 'Local client'];
export const PRICING_MODELS = ['Free', 'Freemium', 'Paid'];

const source = (id, title, url, checkedAt = CATALOGUE_CHECKED_AT) => ({ id, title, url, checkedAt });

/**
 * Catalogue facts are deliberately descriptive. `unknown` means the checked
 * sources did not establish a lifecycle state; it must not be rendered as
 * false or inactive.
 *
 * @type {Array<{
 *   id:string,
 *   name:string,
 *   summary:string,
 *   media:string[],
 *   category:string,
 *   capture:string,
 *   hosting:'Self-hosted'|'Cloud'|'Local client',
 *   pricing:'Free'|'Freemium'|'Paid',
 *   sourceState:'Open source'|'Partly open source'|'No public source repository verified',
 *   license:string|null,
 *   url:string,
 *   demoUrl?:string,
 *   demoCredentials?:string,
 *   repository:string|null,
 *   contribute:string,
 *   lifecycle:'active'|'archived'|'unknown',
 *   checkedAt:string,
 *   sources:Array<{id:string,title:string,url:string,checkedAt:string}>
 * }>}
 */
export const PROJECTS = [
  {
    id: 'fasti',
    name: 'Fasti',
    summary: 'Local-first media tracking daemon, annal and player-independent recorder.',
    media: MEDIA,
    category: 'Tracker',
    capture: 'Daemon API, player integrations and local annal',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'AGPL-3.0',
    url: 'https://github.com/Scrobble-dev/Fasti',
    repository: 'https://github.com/Scrobble-dev/Fasti',
    contribute: 'https://github.com/Scrobble-dev/Fasti/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('fasti-repository', 'Fasti repository', 'https://github.com/Scrobble-dev/Fasti')]
  },
  {
    id: 'ryot',
    name: 'Ryot',
    summary: 'Self-hosted comprehensive media and fitness tracking platform with integrations and stats.',
    media: ['Film', 'Television', 'Anime', 'Books', 'Comics', 'Podcasts', 'Video games', 'Fitness'],
    category: 'Tracker',
    capture: 'Web app, browser extension, API and integrations',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'AGPL-3.0',
    url: 'https://ryot.io/',
    demoUrl: 'https://demo.ryot.io/',
    demoCredentials: 'Public demo instance',
    repository: 'https://github.com/IgnisDa/ryot',
    contribute: 'https://github.com/IgnisDa/ryot/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('ryot-homepage', 'Ryot website', 'https://ryot.io/'),
      source('ryot-repository', 'Ryot repository', 'https://github.com/IgnisDa/ryot'),
      source('ryot-demo', 'Ryot live demo', 'https://demo.ryot.io/')
    ]
  },
  {
    id: 'yamtrack',
    name: 'Yamtrack',
    summary: 'Self-hosted anime and media tracker with Plex and Jellyfin webhook synchronization.',
    media: ['Film', 'Television', 'Anime'],
    category: 'Tracker',
    capture: 'Media server webhooks and web interface',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-3.0',
    url: 'https://github.com/FuzzyGrim/Yamtrack',
    demoUrl: 'https://yamtrack.fuzzygrim.com',
    demoCredentials: 'username: demo / password: demo',
    repository: 'https://github.com/FuzzyGrim/Yamtrack',
    contribute: 'https://github.com/FuzzyGrim/Yamtrack/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('yamtrack-repository', 'Yamtrack repository', 'https://github.com/FuzzyGrim/Yamtrack'),
      source('yamtrack-demo', 'Yamtrack live demo', 'https://yamtrack.fuzzygrim.com')
    ]
  },
  {
    id: 'cinephage',
    name: 'Cinephage',
    summary: 'All-in-one self-hosted media gathering and tracking solution.',
    media: ['Film', 'Television'],
    category: 'Tracker',
    capture: 'Web application and automated media gathering',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-3.0',
    url: 'https://github.com/MoldyTaint/Cinephage',
    repository: 'https://github.com/MoldyTaint/Cinephage',
    contribute: 'https://github.com/MoldyTaint/Cinephage/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('cinephage-repository', 'Cinephage repository', 'https://github.com/MoldyTaint/Cinephage')]
  },
  {
    id: 'mediatracker',
    name: 'MediaTracker',
    summary: 'Self-hosted media tracker for movies, TV shows, video games, books and audiobooks.',
    media: ['Film', 'Television', 'Books', 'Podcasts', 'Video games'],
    category: 'Tracker',
    capture: 'Web application and API',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-3.0',
    url: 'https://github.com/bonukai/MediaTracker',
    repository: 'https://github.com/bonukai/MediaTracker',
    contribute: 'https://github.com/bonukai/MediaTracker/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('mediatracker-repository', 'MediaTracker repository', 'https://github.com/bonukai/MediaTracker')]
  },
  {
    id: 'watcharr',
    name: 'Watcharr',
    summary: 'Self-hosted web application for tracking watched movies, TV series and played games.',
    media: ['Film', 'Television', 'Anime', 'Video games'],
    category: 'Tracker',
    capture: 'Web application and Jellyfin/Plex integrations',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://watcharr.app/',
    demoUrl: 'https://watcharr.app/',
    demoCredentials: 'Public demo / website',
    repository: 'https://github.com/sbondCo/Watcharr',
    contribute: 'https://github.com/sbondCo/Watcharr/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('watcharr-website', 'Watcharr website', 'https://watcharr.app/'),
      source('watcharr-repository', 'Watcharr repository', 'https://github.com/sbondCo/Watcharr')
    ]
  },
  {
    id: 'media-journal',
    name: 'media-journal',
    summary: 'Lightweight self-hosted personal journal for logging movies, series, books and games.',
    media: ['Film', 'Television', 'Books', 'Video games'],
    category: 'Tracker',
    capture: 'Manual logging and web UI',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://github.com/mihail-pop/media-journal',
    repository: 'https://github.com/mihail-pop/media-journal',
    contribute: 'https://github.com/mihail-pop/media-journal/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('media-journal-repository', 'media-journal repository', 'https://github.com/mihail-pop/media-journal')]
  },
  {
    id: 'localtracker',
    name: 'LocalTracker',
    summary: 'Offline-first, privacy-focused desktop and web application for personal media tracking.',
    media: ['Film', 'Television', 'Anime', 'Books', 'Video games'],
    category: 'Tracker',
    capture: 'Local database and manual entry',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://github.com/Nsttt/localtracker',
    repository: 'https://github.com/Nsttt/localtracker',
    contribute: 'https://github.com/Nsttt/localtracker/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('localtracker-repository', 'LocalTracker repository', 'https://github.com/Nsttt/localtracker')]
  },
  {
    id: 'media-tracker-michaelx',
    name: 'media-tracker',
    summary: 'Self-hosted media tracker web application for movies, shows, video games and books.',
    media: ['Film', 'Television', 'Books', 'Video games'],
    category: 'Tracker',
    capture: 'Web application and API',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://github.com/michaelx/media-tracker',
    repository: 'https://github.com/michaelx/media-tracker',
    contribute: 'https://github.com/michaelx/media-tracker/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('media-tracker-michaelx-repository', 'media-tracker repository', 'https://github.com/michaelx/media-tracker')]
  },
  {
    id: 'sofa',
    name: 'Sofa',
    summary: 'Open-source personal web tracker for movies and TV shows.',
    media: ['Film', 'Television'],
    category: 'Tracker',
    capture: 'Web application and TMDB search',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://github.com/jakejarvis/sofa',
    repository: 'https://github.com/jakejarvis/sofa',
    contribute: 'https://github.com/jakejarvis/sofa/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('sofa-repository', 'Sofa repository', 'https://github.com/jakejarvis/sofa')]
  },
  {
    id: 'scrob',
    name: 'scrob',
    summary: 'Command-line media scrobbler, web client and webhook relay for streaming services and media servers.',
    media: ['Film', 'Television'],
    category: 'Connector',
    capture: 'CLI, webhook listener and web app',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://scrob.app/',
    demoUrl: 'https://scrob.app/',
    demoCredentials: 'Web client available at scrob.app',
    repository: 'https://github.com/ellite/scrob',
    contribute: 'https://github.com/ellite/scrob/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('scrob-app', 'scrob web app', 'https://scrob.app/'),
      source('scrob-repository', 'scrob repository', 'https://github.com/ellite/scrob')
    ]
  },
  {
    id: 'maloja',
    name: 'Maloja',
    summary: 'Self-hosted scrobble database with personal listening statistics.',
    media: ['Music'],
    category: 'Tracker',
    capture: 'Compatible clients and API submissions',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-3.0',
    url: 'https://github.com/krateng/maloja',
    repository: 'https://github.com/krateng/maloja',
    contribute: 'https://github.com/krateng/maloja/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('maloja-repository', 'Maloja repository', 'https://github.com/krateng/maloja')]
  },
  {
    id: 'movary',
    name: 'Movary',
    summary: 'Self-hosted web application for recording and rating watched films.',
    media: ['Film'],
    category: 'Tracker',
    capture: 'Manual entry and integrations',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://github.com/leepeuker/movary',
    repository: 'https://github.com/leepeuker/movary',
    contribute: 'https://github.com/leepeuker/movary/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('movary-repository', 'Movary repository', 'https://github.com/leepeuker/movary')]
  },
  {
    id: 'multi-scrobbler',
    name: 'multi-scrobbler',
    summary: 'Self-hosted multi-source playback scrobbler and relay supporting 20+ music and podcast services.',
    media: ['Music', 'Podcasts'],
    category: 'Connector',
    capture: 'Playback integrations and relays',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://docs.multi-scrobbler.app/',
    repository: 'https://github.com/FoxxMD/multi-scrobbler',
    contribute: 'https://github.com/FoxxMD/multi-scrobbler/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('multi-scrobbler-repository', 'multi-scrobbler repository', 'https://github.com/FoxxMD/multi-scrobbler'),
      source('multi-scrobbler-docs', 'multi-scrobbler documentation', 'https://docs.multi-scrobbler.app/')
    ]
  },
  {
    id: 'fasti',
    name: 'Fasti',
    summary: 'Local-first media Record and observation service. No supported public release exists.',
    media: ['Film', 'Television', 'Anime', 'Books', 'Music', 'Podcasts', 'Video games'],
    category: 'Record system',
    capture: 'Authenticated API observations and governed imports',
    sourceState: 'Open source',
    license: 'AGPL-3.0-or-later',
    url: 'https://fasti.scrobble.dev/',
    repository: 'https://github.com/Scrobble-dev/Fasti',
    contribute: 'https://github.com/Scrobble-dev/Fasti/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_UPDATED_AT,
    sources: [
      source(
        'fasti-readme',
        'Fasti repository status and scope',
        'https://github.com/Scrobble-dev/Fasti/blob/9511a46b6177c1ec27aa9398ac222e3b719b41ea/README.md',
        CATALOGUE_UPDATED_AT
      )
    ]
  },
  {
    id: 'trakt',
    name: 'Trakt',
    summary: 'Film and television service with watch history, lists and media-centre scrobbling.',
    media: ['Film', 'Television'],
    category: 'Service',
    capture: 'Manual history and media-centre scrobbling',
    hosting: 'Cloud',
    pricing: 'Freemium',
    sourceState: 'No public source repository verified',
    license: null,
    url: 'https://trakt.tv/',
    repository: null,
    contribute: 'https://forums.trakt.tv/',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('trakt-scrobble-docs', 'Trakt scrobble documentation', 'https://docs.trakt.tv/reference/about-scrobble')]
  },
  {
    id: 'simkl',
    name: 'Simkl',
    summary: 'Service for tracking film, television and anime across apps, imports and an API.',
    media: ['Film', 'Television', 'Anime'],
    category: 'Service',
    capture: 'Automatic trackers, imports, API and manual updates',
    hosting: 'Cloud',
    pricing: 'Freemium',
    sourceState: 'No public source repository verified',
    license: null,
    url: 'https://simkl.com/',
    repository: null,
    contribute: 'https://support.simkl.org/',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('simkl-service', 'Simkl service', 'https://simkl.com/')]
  },
  {
    id: 'letterboxd',
    name: 'Letterboxd',
    summary: 'Film diary and social catalogue built around logs, ratings, reviews and lists.',
    media: ['Film'],
    category: 'Service',
    capture: 'Manual logging and CSV import',
    hosting: 'Cloud',
    pricing: 'Freemium',
    sourceState: 'No public source repository verified',
    license: null,
    url: 'https://letterboxd.com/',
    repository: null,
    contribute: 'https://letterboxd.com/contact/',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('letterboxd-welcome', 'Letterboxd welcome guide', 'https://letterboxd.com/welcome/')]
  },
  {
    id: 'mdblist',
    name: 'MDBList',
    summary: 'Automated dynamic list creator and filter service integrating with Trakt and media servers.',
    media: ['Film', 'Television'],
    category: 'Service',
    capture: 'Automated cloud lists, filters and Trakt sync',
    hosting: 'Cloud',
    pricing: 'Freemium',
    sourceState: 'No public source repository verified',
    license: null,
    url: 'https://mdblist.com/',
    repository: null,
    contribute: 'https://mdblist.com/',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('mdblist-service', 'MDBList service', 'https://mdblist.com/')]
  },
  {
    id: 'wetrakr',
    name: 'WeTrakr',
    summary: 'Film and television tracker with an official open-source Kodi scrobbler.',
    media: ['Film', 'Television'],
    category: 'Service',
    capture: 'Manual tracking and Kodi playback',
    hosting: 'Cloud',
    pricing: 'Free',
    sourceState: 'Partly open source',
    license: 'Kodi add-on: MIT',
    url: 'https://wetrakr.com/',
    repository: 'https://github.com/wetrakr/wetrakr-kodi',
    contribute: 'https://github.com/wetrakr/wetrakr-kodi/issues',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('wetrakr-kodi', 'WeTrakr Kodi scrobbler', 'https://github.com/wetrakr/wetrakr-kodi')]
  },
  {
    id: 'last-fm',
    name: 'Last.fm',
    summary: 'Music service built around listening history and recommendations.',
    media: ['Music'],
    category: 'Service',
    capture: 'Player and application submissions',
    hosting: 'Cloud',
    pricing: 'Freemium',
    sourceState: 'No public source repository verified',
    license: null,
    url: 'https://www.last.fm/about/trackmymusic',
    repository: null,
    contribute: 'https://support.last.fm/',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('lastfm-track-music', 'Last.fm Track My Music', 'https://www.last.fm/about/trackmymusic')]
  },
  {
    id: 'listenbrainz',
    name: 'ListenBrainz',
    summary: 'Open listening-history service operated by the MetaBrainz Foundation.',
    media: ['Music'],
    category: 'Service',
    capture: 'API submissions, imports and compatible clients',
    hosting: 'Cloud',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-2.0',
    url: 'https://listenbrainz.org/',
    demoUrl: 'https://listenbrainz.org/explore/',
    demoCredentials: 'Public exploration interface',
    repository: 'https://github.com/metabrainz/listenbrainz-server',
    contribute: 'https://github.com/metabrainz/listenbrainz-server',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('listenbrainz-repository', 'ListenBrainz server repository', 'https://github.com/metabrainz/listenbrainz-server')]
  },
  {
    id: 'web-scrobbler',
    name: 'Web Scrobbler',
    summary: 'Browser extension that scrobbles music and podcast playback across hundreds of web players.',
    media: ['Music', 'Podcasts'],
    category: 'Client',
    capture: 'Browser playback',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://web-scrobbler.com/',
    repository: 'https://github.com/web-scrobbler/web-scrobbler',
    contribute: 'https://github.com/web-scrobbler/web-scrobbler/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('web-scrobbler-repository', 'Web Scrobbler repository', 'https://github.com/web-scrobbler/web-scrobbler'),
      source('web-scrobbler-website', 'Web Scrobbler website', 'https://web-scrobbler.com/')
    ]
  },
  {
    id: 'pano-scrobbler',
    name: 'Pano Scrobbler',
    summary: 'Windows, Linux and Android client for several scrobbling services.',
    media: ['Music'],
    category: 'Client',
    capture: 'Device playback',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-3.0',
    url: 'https://github.com/kawaiiDango/pano-scrobbler',
    repository: 'https://github.com/kawaiiDango/pano-scrobbler',
    contribute: 'https://github.com/kawaiiDango/pano-scrobbler/issues',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('pano-scrobbler-repository', 'Pano Scrobbler repository', 'https://github.com/kawaiiDango/pano-scrobbler')]
  },
  {
    id: 'mal-sync',
    name: 'MAL-Sync',
    summary: 'Browser extension that updates anime and manga lists across supported services.',
    media: ['Anime', 'Manga'],
    category: 'Connector',
    capture: 'Streaming and reading websites',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-3.0',
    url: 'https://github.com/MALSync/MALSync',
    repository: 'https://github.com/MALSync/MALSync',
    contribute: 'https://github.com/MALSync/MALSync/issues',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('mal-sync-repository', 'MAL-Sync repository', 'https://github.com/MALSync/MALSync')]
  },
  {
    id: 'trackma',
    name: 'Trackma',
    summary: 'Multi-service anime and manga list manager for Unix-like systems.',
    media: ['Anime', 'Manga'],
    category: 'Client',
    capture: 'Desktop playback and manual updates',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-3.0',
    url: 'https://github.com/z411/trackma',
    repository: 'https://github.com/z411/trackma',
    contribute: 'https://github.com/z411/trackma/issues',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('trackma-repository', 'Trackma repository', 'https://github.com/z411/trackma')]
  },
  {
    id: 'taiga',
    name: 'Taiga',
    summary: 'Windows anime tracker with automatic episode recognition.',
    media: ['Anime'],
    category: 'Client',
    capture: 'Desktop playback recognition',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-3.0',
    url: 'https://github.com/erengy/taiga',
    repository: 'https://github.com/erengy/taiga',
    contribute: 'https://github.com/erengy/taiga/issues',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('taiga-repository', 'Taiga repository', 'https://github.com/erengy/taiga')]
  },
  {
    id: 'movary-kodi-addon',
    name: 'Movary Kodi add-on',
    summary: 'Kodi add-on that sends completed film plays to Movary.',
    media: ['Film'],
    category: 'Connector',
    capture: 'Kodi playback',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://github.com/leepeuker/movary-kodi-addon',
    repository: 'https://github.com/leepeuker/movary-kodi-addon',
    contribute: 'https://github.com/leepeuker/movary-kodi-addon/issues',
    lifecycle: 'unknown',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('movary-kodi-repository', 'Movary Kodi add-on repository', 'https://github.com/leepeuker/movary-kodi-addon')]
  },
  {
    id: 'audiobookshelf',
    name: 'Audiobookshelf',
    summary: 'Self-hosted audiobook and podcast server with progress tracking, open APIs, and webhook scrobbling.',
    media: ['Books', 'Podcasts'],
    category: 'Tracker',
    capture: 'Server API, streaming clients, and webhooks',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-3.0',
    url: 'https://www.audiobookshelf.org/',
    demoUrl: 'https://www.audiobookshelf.org/',
    repository: 'https://github.com/advplyr/audiobookshelf',
    contribute: 'https://github.com/advplyr/audiobookshelf/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('audiobookshelf-repository', 'Audiobookshelf repository', 'https://github.com/advplyr/audiobookshelf'),
      source('audiobookshelf-website', 'Audiobookshelf website', 'https://www.audiobookshelf.org/')
    ]
  },
  {
    id: 'bookwyrm',
    name: 'BookWyrm',
    summary: 'Social, federated book tracking and reading log powered by ActivityPub.',
    media: ['Books'],
    category: 'Tracker',
    capture: 'Web application, ActivityPub federation, and manual logging',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'Anti-Capitalist Software License v1.4',
    url: 'https://joinbookwyrm.com/',
    demoUrl: 'https://bookwyrm.social/',
    repository: 'https://github.com/bookwyrm-social/bookwyrm',
    contribute: 'https://github.com/bookwyrm-social/bookwyrm/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('bookwyrm-repository', 'BookWyrm repository', 'https://github.com/bookwyrm-social/bookwyrm'),
      source('bookwyrm-website', 'BookWyrm website', 'https://joinbookwyrm.com/')
    ]
  },
  {
    id: 'hardcover',
    name: 'Hardcover',
    summary: 'Social book tracking platform with custom lists, reading goals, and a GraphQL API.',
    media: ['Books', 'Comics'],
    category: 'Tracker',
    capture: 'Web application, mobile app, and GraphQL API',
    hosting: 'Cloud',
    pricing: 'Freemium',
    sourceState: 'No public source repository verified',
    license: null,
    url: 'https://hardcover.app/',
    demoUrl: 'https://hardcover.app/',
    repository: null,
    contribute: 'https://github.com/hardcoverapp/feedback/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('hardcover-website', 'Hardcover website', 'https://hardcover.app/'),
      source('hardcover-feedback', 'Hardcover feedback tracker', 'https://github.com/hardcoverapp/feedback')
    ]
  },
  {
    id: 'openreads',
    name: 'Openreads',
    summary: 'Offline, privacy-respecting book tracker for Android with Open Library lookups and local storage.',
    media: ['Books'],
    category: 'Tracker',
    capture: 'Android app, barcode scanner, and manual logging',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-3.0',
    url: 'https://openreads.app/',
    repository: 'https://github.com/mateusz-bak/openreads-android',
    contribute: 'https://github.com/mateusz-bak/openreads-android/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('openreads-repository', 'Openreads repository', 'https://github.com/mateusz-bak/openreads-android'),
      source('openreads-website', 'Openreads website', 'https://openreads.app/')
    ]
  },
  {
    id: 'antennapod',
    name: 'AntennaPod',
    summary: 'Open-source podcast manager with gpodder.net and Nextcloud sync support.',
    media: ['Podcasts'],
    category: 'Client',
    capture: 'Mobile player playback and gpodder.net synchronization',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'GPL-3.0',
    url: 'https://antennapod.org/',
    demoUrl: 'https://antennapod.org/',
    repository: 'https://github.com/AntennaPod/AntennaPod',
    contribute: 'https://github.com/AntennaPod/AntennaPod/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('antennapod-repository', 'AntennaPod repository', 'https://github.com/AntennaPod/AntennaPod'),
      source('antennapod-website', 'AntennaPod website', 'https://antennapod.org/')
    ]
  },
  {
    id: 'podverse',
    name: 'Podverse',
    summary: 'Cross-platform podcast player supporting Podcasting 2.0 and cross-device queue sync.',
    media: ['Podcasts'],
    category: 'Client',
    capture: 'Cross-platform app, Podcasting 2.0 feeds, and sync server',
    hosting: 'Self-hosted',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'AGPL-3.0',
    url: 'https://podverse.fm/',
    demoUrl: 'https://podverse.fm/',
    repository: 'https://github.com/podverse/podverse',
    contribute: 'https://github.com/podverse/podverse/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [
      source('podverse-repository', 'Podverse repository', 'https://github.com/podverse/podverse'),
      source('podverse-website', 'Podverse website', 'https://podverse.fm/')
    ]
  },
  {
    id: 'rescrobbled',
    name: 'Rescrobbled',
    summary: 'Lightweight daemon for Linux that scrobbles MPRIS music players to Last.fm and ListenBrainz.',
    media: ['Music', 'Podcasts'],
    category: 'Client',
    capture: 'Linux MPRIS D-Bus listener and scrobble dispatcher',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://github.com/mariusor/rescrobbled',
    repository: 'https://github.com/mariusor/rescrobbled',
    contribute: 'https://github.com/mariusor/rescrobbled/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('rescrobbled-repository', 'Rescrobbled repository', 'https://github.com/mariusor/rescrobbled')]
  },
  {
    id: 'yozora',
    name: 'Yozora',
    summary: 'Modern desktop music scrobbler supporting Spotify, Apple Music, and local audio players.',
    media: ['Music'],
    category: 'Client',
    capture: 'Desktop player integration and scrobble relay',
    hosting: 'Local client',
    pricing: 'Free',
    sourceState: 'Open source',
    license: 'MIT',
    url: 'https://github.com/jarnand/yozora',
    repository: 'https://github.com/jarnand/yozora',
    contribute: 'https://github.com/jarnand/yozora/issues',
    lifecycle: 'active',
    checkedAt: CATALOGUE_CHECKED_AT,
    sources: [source('yozora-repository', 'Yozora repository', 'https://github.com/jarnand/yozora')]
  }
];

export const CATEGORIES = [...new Set(PROJECTS.map((project) => project.category))].sort();
export const SOURCE_STATES = [...new Set(PROJECTS.map((project) => project.sourceState))].sort();
export const LICENSE_STATES = ['Published licence', 'No licence verified'];

/**
 * Filter projects supporting multi-value arrays or single values for all facets.
 */
export function filterProjects(projects, {
  query = '',
  media = [],
  category = [],
  hosting = [],
  pricing = [],
  sourceState = [],
  license = []
} = {}) {
  const normalizedQuery = query.trim().toLocaleLowerCase('en');
  const mediaList = Array.isArray(media) ? media.filter((m) => m && m !== 'All') : (media && media !== 'All' ? [media] : []);
  const catList = Array.isArray(category) ? category.filter((c) => c && c !== 'All') : (category && category !== 'All' ? [category] : []);
  const hostList = Array.isArray(hosting) ? hosting.filter((h) => h && h !== 'All') : (hosting && hosting !== 'All' ? [hosting] : []);
  const priceList = Array.isArray(pricing) ? pricing.filter((p) => p && p !== 'All') : (pricing && pricing !== 'All' ? [pricing] : []);
  const sourceList = Array.isArray(sourceState) ? sourceState.filter((s) => s && s !== 'All') : (sourceState && sourceState !== 'All' ? [sourceState] : []);
  const licenseList = Array.isArray(license) ? license.filter((l) => l && l !== 'All') : (license && license !== 'All' ? [license] : []);

  return projects.filter((project) => {
    const haystack = `${project.name} ${project.summary} ${project.media.join(' ')} ${project.category} ${project.hosting} ${project.pricing} ${project.capture}`.toLocaleLowerCase('en');
    const queryMatch = !normalizedQuery || haystack.includes(normalizedQuery);
    const mediaMatch = mediaList.length === 0 || mediaList.some((m) => project.media.includes(m));
    const catMatch = catList.length === 0 || catList.includes(project.category);
    const hostMatch = hostList.length === 0 || hostList.includes(project.hosting);
    const priceMatch = priceList.length === 0 || priceList.includes(project.pricing);
    const sourceMatch = sourceList.length === 0 || sourceList.includes(project.sourceState);
    const licenseMatch = licenseList.length === 0 || licenseList.some((l) => l === 'Published licence' ? Boolean(project.license) : !project.license);

    return queryMatch && mediaMatch && catMatch && hostMatch && priceMatch && sourceMatch && licenseMatch;
  });
}

export function sortProjects(projects, key = 'name', direction = 'asc') {
  const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
  const value = (project) => key === 'media' ? project.media.join(', ') : project[key] ?? '';
  return [...projects].sort((left, right) => collator.compare(value(left), value(right)) * (direction === 'desc' ? -1 : 1));
}
