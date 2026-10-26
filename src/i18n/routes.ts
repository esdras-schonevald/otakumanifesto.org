import { activeLocales } from './ui';

/** getStaticPaths() for every route under /[lang]. */
export function localePaths() {
  return activeLocales
    .filter((code) => code !== 'en')
    .map((code) => ({ params: { lang: code } }));
}
