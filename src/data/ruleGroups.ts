export type Locale = 'en' | 'pt-br' | 'es' | 'ja' | 'zh' | 'fr' | 'it';

export interface Rule {
  id: number;
  text: Record<Locale, string>;
}

export interface RuleGroup {
  id: string;
  pillar: 'O' | 'T' | 'A' | 'K' | 'U';
  title: Record<Locale, string>;
  ids: number[];
}

export const groups: RuleGroup[] = [
  {
    id: 'complexity',
    pillar: 'O',
    title: { en: 'Complexity', 'pt-br': 'Complexidade', es: 'Complejidad', ja: '複雑度', zh: '复杂度', fr: 'Complexité', it: 'Complessità' },
    ids: [1, 2, 3, 4, 5],
  },
  {
    id: 'size',
    pillar: 'O',
    title: { en: 'Size', 'pt-br': 'Tamanho', es: 'Tamaño', ja: 'サイズ', zh: '规模', fr: 'Taille', it: 'Dimensione' },
    ids: [6, 7, 8, 9, 10, 11, 12],
  },
  {
    id: 'naming',
    pillar: 'O',
    title: { en: 'Naming', 'pt-br': 'Nomenclatura', es: 'Nomenclatura', ja: '命名', zh: '命名', fr: 'Nommage', it: 'Denominazione' },
    ids: [13, 14, 15, 16, 17],
  },
  {
    id: 'modularity',
    pillar: 'T',
    title: { en: 'Modularity', 'pt-br': 'Modularidade', es: 'Modularidad', ja: 'モジュール性', zh: '模块化', fr: 'Modularité', it: 'Modularità' },
    ids: [18, 19, 20, 21, 22, 23, 24],
  },
  {
    id: 'protection',
    pillar: 'A',
    title: { en: 'Protection', 'pt-br': 'Proteção', es: 'Protección', ja: '保護', zh: '保护', fr: 'Protection', it: 'Protezione' },
    ids: [25, 26, 27, 28, 29, 30, 31],
  },
  {
    id: 'side-effects',
    pillar: 'K',
    title: { en: 'Side effects and failure', 'pt-br': 'Efeitos colaterais e falha', es: 'Efectos secundarios y fallo', ja: '副作用と失敗', zh: '副作用与失败', fr: 'Effets de bord et échec', it: 'Effetti collaterali e fallimenti' },
    ids: [32, 33, 34, 35, 36],
  },
  {
    id: 'contracts',
    pillar: 'U',
    title: { en: 'Contracts', 'pt-br': 'Contratos', es: 'Contratos', ja: '契約', zh: '契约', fr: 'Contrats', it: 'Contratti' },
    ids: [37, 38, 39, 40],
  },
];
