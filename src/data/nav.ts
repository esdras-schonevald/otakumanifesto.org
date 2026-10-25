export interface NavLink {
  path: string;
  key: 'overview' | 'manifesto' | 'shapes' | 'guideIndex' | 'rules' | 'composition' | 'protect' | 'silent' | 'contracts' | 'checklist' | 'languages' | 'about';
}

export interface NavGroup {
  key: 'start' | 'guide' | 'reference';
  items: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    key: 'start',
    items: [
      { path: '/', key: 'overview' },
      { path: '/manifesto', key: 'manifesto' },
      { path: '/shapes', key: 'shapes' },
    ],
  },
  {
    key: 'guide',
    items: [
      { path: '/guide', key: 'guideIndex' },
      { path: '/guide/rules', key: 'rules' },
      { path: '/guide/composition', key: 'composition' },
      { path: '/guide/protect-the-core', key: 'protect' },
      { path: '/guide/silent-infrastructure', key: 'silent' },
      { path: '/guide/contracts', key: 'contracts' },
      { path: '/guide/checklist', key: 'checklist' },
    ],
  },
  {
    key: 'reference',
    items: [
      { path: '/languages', key: 'languages' },
      { path: '/about', key: 'about' },
    ],
  },
];

/** Paths that exist in every locale. Everything else falls back to English. */
export const translatedPaths = new Set(['/', '/manifesto']);

export const flat = navGroups.flatMap((group) => group.items);

export function neighbour(path: string) {
  const index = flat.findIndex((item) => item.path === path);
  return {
    previous: index > 0 ? flat[index - 1] : null,
    next: index >= 0 && index < flat.length - 1 ? flat[index + 1] : null,
  };
}
