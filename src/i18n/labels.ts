import type { Locale } from '../data/ruleGroups';
import type { Lang } from '../data/rulesContent1';

interface Labels {
  rule: string;
  theRule: string;
  wrong: string;
  right: string;
  previousRule: string;
  nextRule: string;
  ruleNav: string;
  allRules: string;
  sections: {
    concept: string;
    problem: string;
    solution: string;
    check: string;
    pillar: string;
  };
  pillars: Record<'O' | 'T' | 'A' | 'K' | 'U', string>;
  lang: Record<Lang, string>;
}

export const labels: Record<Locale, Labels> = {
  en: {
    rule: 'Rule',
    theRule: 'The rule',
    wrong: 'Wrong',
    right: 'Right',
    previousRule: 'Previous rule',
    nextRule: 'Next rule',
    ruleNav: 'Rule navigation',
    allRules: 'All forty rules',
    sections: {
      concept: 'Concept',
      problem: 'Problem',
      solution: 'Solution',
      check: 'How to check',
      pillar: 'Pillar',
    },
    pillars: {
      O: 'Own your Discipline',
      T: 'Tools for Composition',
      A: 'Armor the Core',
      K: 'Keep Infrastructure Silent',
      U: 'Universal Language & Contracts',
    },
    lang: { php: 'PHP', ts: 'TypeScript', cs: 'C#', java: 'Java', cpp: 'C++', text: 'Structure', yaml: 'YAML', bash: 'Shell' },
  },
  'pt-br': {
    rule: 'Regra',
    theRule: 'A regra',
    wrong: 'Errado',
    right: 'Certo',
    previousRule: 'Regra anterior',
    nextRule: 'Próxima regra',
    ruleNav: 'Navegação entre regras',
    allRules: 'As quarenta regras',
    sections: {
      concept: 'Conceito',
      problem: 'Problema',
      solution: 'Solução',
      check: 'Como verificar',
      pillar: 'Pilar',
    },
    pillars: {
      O: 'Domine sua Disciplina',
      T: 'Ferramentas para Composição',
      A: 'Blinde o Núcleo',
      K: 'Mantenha a Infraestrutura Silenciosa',
      U: 'Linguagem Universal e Contratos',
    },
    lang: { php: 'PHP', ts: 'TypeScript', cs: 'C#', java: 'Java', cpp: 'C++', text: 'Estrutura', yaml: 'YAML', bash: 'Shell' },
  },
  es: {
    rule: 'Regla', theRule: 'La regla', wrong: 'Incorrecto', right: 'Correcto',
    previousRule: 'Regla anterior', nextRule: 'Regla siguiente', ruleNav: 'Navegación de reglas',
    allRules: 'Las cuarenta reglas',
    sections: { concept: 'Concepto', problem: 'Problema', solution: 'Solución', check: 'Cómo verificar', pillar: 'Pilar' },
    pillars: { O: 'Domina tu Disciplina', T: 'Herramientas para la Composición', A: 'Blinda el Núcleo', K: 'Mantén la Infraestructura Silenciosa', U: 'Lenguaje Universal y Contratos' },
    lang: { php: 'PHP', ts: 'TypeScript', cs: 'C#', java: 'Java', cpp: 'C++', text: 'Estructura', yaml: 'YAML', bash: 'Shell' },
  },
  ja: {
    rule: 'ルール', theRule: 'ルール', wrong: '誤り', right: '正しい',
    previousRule: '前のルール', nextRule: '次のルール', ruleNav: 'ルール間の移動',
    allRules: '40のルール',
    sections: { concept: '概念', problem: '問題', solution: '解決', check: '確認方法', pillar: '柱' },
    pillars: { O: '規律を自ら律する', T: '構成のための道具', A: '中核を装甲する', K: 'インフラを静かに保つ', U: '普遍言語と契約' },
    lang: { php: 'PHP', ts: 'TypeScript', cs: 'C#', java: 'Java', cpp: 'C++', text: '構造', yaml: 'YAML', bash: 'Shell' },
  },
  zh: {
    rule: '规则', theRule: '规则', wrong: '错误', right: '正确',
    previousRule: '上一条', nextRule: '下一条', ruleNav: '规则导航',
    allRules: '四十条规则',
    sections: { concept: '概念', problem: '问题', solution: '解决方案', check: '如何检查', pillar: '支柱' },
    pillars: { O: '自律', T: '组合的工具', A: '装甲核心', K: '让基础设施沉默', U: '通用语言与契约' },
    lang: { php: 'PHP', ts: 'TypeScript', cs: 'C#', java: 'Java', cpp: 'C++', text: '结构', yaml: 'YAML', bash: 'Shell' },
  },
  fr: {
    rule: 'Règle', theRule: 'La règle', wrong: 'Incorrect', right: 'Correct',
    previousRule: 'Règle précédente', nextRule: 'Règle suivante', ruleNav: 'Navigation des règles',
    allRules: 'Les quarante règles',
    sections: { concept: 'Concept', problem: 'Problème', solution: 'Solution', check: 'Comment vérifier', pillar: 'Pilier' },
    pillars: { O: 'Maîtrise ta Discipline', T: 'Outils de Composition', A: 'Blindez le Cœur', K: 'Gardez l’Infrastructure Silencieuse', U: 'Langage Universel et Contrats' },
    lang: { php: 'PHP', ts: 'TypeScript', cs: 'C#', java: 'Java', cpp: 'C++', text: 'Structure', yaml: 'YAML', bash: 'Shell' },
  },
  it: {
    rule: 'Regola', theRule: 'La regola', wrong: 'Sbagliato', right: 'Corretto',
    previousRule: 'Regola precedente', nextRule: 'Regola successiva', ruleNav: 'Navigazione tra regole',
    allRules: 'Le quaranta regole',
    sections: { concept: 'Concetto', problem: 'Problema', solution: 'Soluzione', check: 'Come verificare', pillar: 'Pilastro' },
    pillars: { O: 'Padroneggia la tua Disciplina', T: 'Strumenti per la Composizione', A: 'Proteggi il Nucleo', K: 'Mantieni l’Infrastruttura Silenziosa', U: 'Linguaggio Universale e Contratti' },
    lang: { php: 'PHP', ts: 'TypeScript', cs: 'C#', java: 'Java', cpp: 'C++', text: 'Struttura', yaml: 'YAML', bash: 'Shell' },
  },
};
