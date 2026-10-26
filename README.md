# otakumanifesto.org

The OTAKU Manifesto — a language-agnostic philosophy for object-oriented software.
Static Astro site, served by Cloudflare Workers Static Assets. No runtime, no client
framework, no tracking.

## Content model

| Path | What it is |
|---|---|
| `src/data/ruleGroups.ts` | the 7 groups and 5 pillars |
| `src/data/rules.ts` | the 40 rules, one sentence each, per language |
| `src/data/rulesContent1..3.ts` | one page of content per rule: purpose, concept, problem, solution, wrong/right samples, verification |
| `src/i18n/` | UI strings, home and manifesto copy, labels |
| `src/pages/` | chapter pages (English) |
| `src/pages/[lang]/` | the same chapters in each active locale |

A rule page is generated from data — adding a rule means adding one entry, not a file.

## Languages

`activeLocales` in `src/i18n/ui.ts` controls the switcher. A locale is listed only
when **every** page exists in it: there is no silent fallback to English. Portuguese, Spanish and French
are complete; the other three keep their translations in code and ship when their
chapters are finished.

## Code samples

Every sample is highlighted at build time with Shiki (GitHub light and dark themes),
via `<Code>` from `astro:components`. `CodeTabs` renders language tabs with CSS only;
`WrongRight` renders the mandatory pair. No client JavaScript is shipped.

## Commands

```bash
npm run dev      # local
npm run build    # static build into dist/
npm run deploy   # build + wrangler deploy
```
