import { activeLocales } from './ui';

/** getStaticPaths() for every route under /[lang] that is data-driven. */
export function localePaths() {
  return activeLocales
    .filter((code) => code !== 'en')
    .map((code) => ({ params: { lang: code } }));
}

/** Chapters are still Portuguese-only under /[lang]; Spanish has explicit pages. */
export function ptPaths() {
  return [{ params: { lang: 'pt-br' } }];
}
