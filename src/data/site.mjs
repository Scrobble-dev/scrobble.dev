export const SITE = {
  name: 'Scrobble.dev',
  description: 'Scrobbling explained: how media activity becomes a history you can keep and move.',
  primaryNavigation: [
    { label: 'Learn', href: '/learn/', match: ['/learn/'] },
    { label: 'Build', href: '/build/', match: ['/build/'] },
    { label: 'Draft profiles', href: '/standard/', match: ['/standard/'] },
    { label: 'Projects', href: '/projects/', match: ['/projects/'] },
    { label: 'Contribute', href: '/contribute/', match: ['/contribute/'] }
  ],
  footerSections: [
    {
      label: 'Projects',
      links: [
        { label: 'Fasti repository', href: 'https://github.com/Scrobble-dev/Fasti' },
        { label: 'Fasti issues', href: 'https://github.com/Scrobble-dev/Fasti/issues' },
        { label: 'Project catalogue', href: '/projects/' }
      ]
    },
    {
      label: 'Field guide',
      links: [
        { label: 'About and evidence method', href: '/about/' },
        { label: 'Changelog & releases', href: '/changelog/' },
        { label: 'FAQ', href: '/faq/' },
        { label: 'Scrobble.dev source', href: 'https://github.com/Scrobble-dev/scrobble.dev' },
        { label: 'Knowledge bundle', href: '/knowledge/index.md' },
        { label: 'Friends & peers', href: '/friends/' },
        { label: 'Open Knowledge Format project', href: 'https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf' },
        { label: 'OKF v0.2 specification', href: 'https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/374e0bc4c644310ff56cdf9c0fe81eccdec862b0/okf/SPEC.md' }
      ]
    },
    {
      label: 'Support the maintainer',
      links: [
        { label: 'Sponsor Ryan', href: 'https://github.com/sponsors/ryan-winkler' }
      ]
    }
  ],
  footerActions: [
    { label: 'Improve this field guide', href: 'https://github.com/Scrobble-dev/scrobble.dev/issues/new' }
  ]
};
