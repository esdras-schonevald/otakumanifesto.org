import { activeLocales } from './ui';

/** getStaticPaths() for every route under /[lang] that is data-driven. */
export function localePaths() {
  return activeLocales
    .filter((code) => code !== 'en')
    .map((code) => ({ params: { lang: code }, props: { lang: code } }));
}

/** Portuguese chapters live under /[lang]; the other locales use explicit pages. */
export function ptPaths() {
  return [{ params: { lang: 'pt-br' } }];
}
