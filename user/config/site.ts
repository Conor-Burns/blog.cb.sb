import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/cover.png?format=avif;webp&imagetools';

export const siteConfig: Site.Config = {
  url: 'https://burns.is',
  title: 'Burns',
  subtitle: 'Digital Braindump 🧠',
  description: 'Archiving my thoughts and learnings in the tech world 💾',
  lang: 'en',
  timeZone: 'Europe/Berlin',
  since: 2019,
  cover: SiteCover,
  author: {
    name: 'Conor Burns',
    status: '⌨️',
    statusTip:
      'Working on <a href="https://keeb.supply" rel="external" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" >KeebSupply</a>!',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://conor-burns.com',
    github: 'https://github.com/Conor-Burns',
    email: 'mail@conor-burns.com',
    bio: `Designing electronics <br/> KiCAD❤️ <br/> Unix stuff`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/Conor-Burns'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
          // Replace the following with your own setting
          // Plausible
          // '<link rel="preconnect" href="https://burns.is/stats/" />',
          // '<script defer type="text/partytown" data-domain="burns.is" src="/js/plausible.js"></script>',
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: true,
  id: 'giscus-comment',
  repo: 'Conor-Burns/burns.is',
  repoId: 'R_kgDOLAg7ww',
  category: 'BlogComments',
  categoryId: 'DIC_kwDOLAg7w84CcMxOasq',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'See Docs 📄',
    url: 'https://docs-svelte-qwer.vercel.app/',
    rel: 'external',
  },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'See Docs 📄',
      url: 'https://docs-svelte-qwer.vercel.app/',
      rel: 'external',
    },
  ],
};
