export interface NavItem {
  href: string;
  title: string;
  short: string;
}

export const nav: { label: string; items: NavItem[] }[] = [
  {
    label: 'Start',
    items: [
      { href: '/', title: 'Overview', short: 'Overview' },
      { href: '/manifesto', title: 'The OTAKU Manifesto', short: 'The manifesto' },
      { href: '/shapes', title: 'The three shapes', short: 'The three shapes' },
    ],
  },
  {
    label: 'Guide',
    items: [
      { href: '/guide', title: 'How to apply it', short: 'Guide index' },
      { href: '/guide/object-calisthenics', title: 'Discipline: the nine rules', short: 'The nine rules' },
      { href: '/guide/composition', title: 'Composition: parts and pipes', short: 'Composition' },
      { href: '/guide/protect-the-core', title: 'Armor: protect the core', short: 'Protect the core' },
      { href: '/guide/silent-infrastructure', title: 'Infrastructure stays silent', short: 'Silent infrastructure' },
      { href: '/guide/contracts', title: 'Contracts and language', short: 'Contracts' },
      { href: '/guide/checklist', title: 'Audit checklist', short: 'Checklist' },
    ],
  },
  {
    label: 'Reference',
    items: [
      { href: '/languages', title: 'Languages and tooling', short: 'Languages' },
      { href: '/about', title: 'About, license, contributing', short: 'About' },
    ],
  },
];

export const flat: NavItem[] = nav.flatMap((group) => group.items);

export function neighbour(path: string) {
  const index = flat.findIndex((item) => item.href === path);
  return {
    previous: index > 0 ? flat[index - 1] : null,
    next: index >= 0 && index < flat.length - 1 ? flat[index + 1] : null,
  };
}
