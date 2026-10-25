import type { Locale } from '../data/ruleGroups';

export const locales: Locale[] = ['en', 'pt-br', 'es', 'ja', 'zh', 'fr', 'it'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  'pt-br': 'Português (BR)',
  es: 'Español',
  ja: '日本語',
  zh: '中文',
  fr: 'Français',
  it: 'Italiano',
};

export const htmlLang: Record<Locale, string> = {
  en: 'en',
  'pt-br': 'pt-BR',
  es: 'es',
  ja: 'ja',
  zh: 'zh-Hans',
  fr: 'fr',
  it: 'it',
};

export const defaultLocale: Locale = 'en';

export function localePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? clean : `/${locale}${clean}`;
}

export interface UiStrings {
  contents: string;
  previous: string;
  next: string;
  language: string;
  start: string;
  guide: string;
  reference: string;
  overview: string;
  manifesto: string;
  shapes: string;
  guideIndex: string;
  rules: string;
  composition: string;
  protect: string;
  silent: string;
  contracts: string;
  checklist: string;
  languages: string;
  about: string;
  englishOnly: string;
  license: string;
  source: string;
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    contents: 'Contents',
    previous: 'Previous',
    next: 'Next',
    language: 'Language',
    start: 'Start',
    guide: 'Guide',
    reference: 'Reference',
    overview: 'Overview',
    manifesto: 'The manifesto',
    shapes: 'The three shapes',
    guideIndex: 'Guide index',
    rules: 'The 40 rules',
    composition: 'Composition',
    protect: 'Protect the core',
    silent: 'Silent infrastructure',
    contracts: 'Contracts',
    checklist: 'Checklist',
    languages: 'Languages',
    about: 'About',
    englishOnly: 'This chapter is currently available in English only.',
    license: 'CC BY-SA 4.0',
    source: 'Source',
  },
  'pt-br': {
    contents: 'Sumário',
    previous: 'Anterior',
    next: 'Próximo',
    language: 'Idioma',
    start: 'Início',
    guide: 'Guia',
    reference: 'Referência',
    overview: 'Visão geral',
    manifesto: 'O manifesto',
    shapes: 'As três formas',
    guideIndex: 'Índice do guia',
    rules: 'As 40 regras',
    composition: 'Composição',
    protect: 'Proteja o núcleo',
    silent: 'Infraestrutura silenciosa',
    contracts: 'Contratos',
    checklist: 'Checklist',
    languages: 'Linguagens',
    about: 'Sobre',
    englishOnly: 'Este capítulo está disponível apenas em inglês no momento.',
    license: 'CC BY-SA 4.0',
    source: 'Código',
  },
  es: {
    contents: 'Contenido',
    previous: 'Anterior',
    next: 'Siguiente',
    language: 'Idioma',
    start: 'Inicio',
    guide: 'Guía',
    reference: 'Referencia',
    overview: 'Visión general',
    manifesto: 'El manifiesto',
    shapes: 'Las tres formas',
    guideIndex: 'Índice de la guía',
    rules: 'Las 40 reglas',
    composition: 'Composición',
    protect: 'Protege el núcleo',
    silent: 'Infraestructura silenciosa',
    contracts: 'Contratos',
    checklist: 'Lista de verificación',
    languages: 'Lenguajes',
    about: 'Acerca de',
    englishOnly: 'Este capítulo está disponible solo en inglés por ahora.',
    license: 'CC BY-SA 4.0',
    source: 'Código',
  },
  ja: {
    contents: '目次',
    previous: '前へ',
    next: '次へ',
    language: '言語',
    start: 'はじめに',
    guide: 'ガイド',
    reference: 'リファレンス',
    overview: '概要',
    manifesto: 'マニフェスト',
    shapes: '3つの形',
    guideIndex: 'ガイド目次',
    rules: '40のルール',
    composition: '構成',
    protect: '中核を守る',
    silent: '静かなインフラ',
    contracts: '契約',
    checklist: 'チェックリスト',
    languages: '言語',
    about: 'このサイトについて',
    englishOnly: 'この章は現在英語のみです。',
    license: 'CC BY-SA 4.0',
    source: 'ソース',
  },
  zh: {
    contents: '目录',
    previous: '上一章',
    next: '下一章',
    language: '语言',
    start: '开始',
    guide: '指南',
    reference: '参考',
    overview: '概述',
    manifesto: '宣言',
    shapes: '三种形态',
    guideIndex: '指南索引',
    rules: '40 条规则',
    composition: '组合',
    protect: '保护核心',
    silent: '沉默的基础设施',
    contracts: '契约',
    checklist: '检查清单',
    languages: '语言',
    about: '关于',
    englishOnly: '本章目前仅有英文版本。',
    license: 'CC BY-SA 4.0',
    source: '源码',
  },
  fr: {
    contents: 'Sommaire',
    previous: 'Précédent',
    next: 'Suivant',
    language: 'Langue',
    start: 'Début',
    guide: 'Guide',
    reference: 'Référence',
    overview: 'Aperçu',
    manifesto: 'Le manifeste',
    shapes: 'Les trois formes',
    guideIndex: 'Index du guide',
    rules: 'Les 40 règles',
    composition: 'Composition',
    protect: 'Protéger le cœur',
    silent: 'Infrastructure silencieuse',
    contracts: 'Contrats',
    checklist: 'Liste de contrôle',
    languages: 'Langages',
    about: 'À propos',
    englishOnly: 'Ce chapitre est pour l’instant disponible uniquement en anglais.',
    license: 'CC BY-SA 4.0',
    source: 'Source',
  },
  it: {
    contents: 'Indice',
    previous: 'Precedente',
    next: 'Successivo',
    language: 'Lingua',
    start: 'Inizio',
    guide: 'Guida',
    reference: 'Riferimento',
    overview: 'Panoramica',
    manifesto: 'Il manifesto',
    shapes: 'Le tre forme',
    guideIndex: 'Indice della guida',
    rules: 'Le 40 regole',
    composition: 'Composizione',
    protect: 'Proteggi il nucleo',
    silent: 'Infrastruttura silenziosa',
    contracts: 'Contratti',
    checklist: 'Checklist',
    languages: 'Linguaggi',
    about: 'Informazioni',
    englishOnly: 'Questo capitolo è per ora disponibile solo in inglese.',
    license: 'CC BY-SA 4.0',
    source: 'Sorgente',
  },
};
