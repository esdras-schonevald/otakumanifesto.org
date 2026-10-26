import type { Locale } from '../data/ruleGroups';

interface RulesPageCopy {
  title: string;
  kicker: string;
  lede: string;
  intro: string;
  outro: string;
}

export const rulesPage: Record<'pt-br' | 'es' | 'fr' | 'it' | 'ja' | 'zh', RulesPageCopy> = {
  'pt-br': {
    title: 'As quarenta regras',
    kicker: 'Trilha O — Domine sua Disciplina',
    lede: 'Quarenta regras, cada uma com um limite. São mecânicas por um motivo: uma regra que depende de gosto não pode ser revisada, automatizada ou discutida.',
    intro:
      '<strong>Complexidade ciclomática ≤ 5 por método</strong> é a métrica principal. Ela conta os caminhos independentes que o leitor precisa sustentar ao mesmo tempo: cada ramo, laço e operador booleano soma um. O resto da disciplina existe para manter esse número baixo. Cada regra abaixo tem sua própria página com propósito, conceito, problema e solução.',
    outro:
      'Em caso de dúvida, escolha a opção mais restritiva. É o critério de desempate que a filosofia prescreve.',
  },
  es: {
    title: 'Las cuarenta reglas',
    kicker: 'Ruta O — Domina tu Disciplina',
    lede: 'Cuarenta reglas, cada una con un umbral. Son mecánicas por un motivo: una regla que depende del gusto no puede revisarse, automatizarse ni discutirse.',
    intro:
      '<strong>Complejidad ciclomática ≤ 5 por método</strong> es la métrica principal. Cuenta los caminos independientes que el lector debe sostener a la vez: cada rama, bucle y operador booleano suma uno. El resto de la disciplina existe para mantener ese número bajo. Cada regla tiene su propia página con propósito, concepto, problema y solución.',
    outro:
      'En caso de duda, elige la opción más restrictiva. Es el criterio de desempate que prescribe la filosofía.',
  },

  fr: {
    title: 'Les quarante règles',
    kicker: 'Piste O — Maîtrise ta Discipline',
    lede: 'Quarante règles, chacune avec un seuil. Elles sont mécaniques pour une raison : une règle qui dépend du goût ne peut être ni revue, ni automatisée, ni discutée.',
    intro:
      '<strong>Complexité cyclomatique ≤ 5 par méthode</strong> est la métrique principale. Elle compte les chemins indépendants que le lecteur doit tenir à la fois : chaque branche, boucle et opérateur booléen en ajoute un. Le reste de la discipline existe pour garder ce nombre bas. Chaque règle a sa propre page avec but, concept, problème et solution.',
    outro:
      'En cas de doute, choisissez l’option la plus restrictive. C’est le critère de départage que prescrit la philosophie.',
  },

  it: {
    title: 'Le quaranta regole',
    kicker: 'Percorso O — Padroneggia la tua Disciplina',
    lede: 'Quaranta regole, ognuna con una soglia. Sono meccaniche per un motivo: una regola che dipende dal gusto non può essere revisionata, automatizzata o discussa.',
    intro:
      '<strong>Complessità ciclomatica ≤ 5 per metodo</strong> è la metrica principale. Conta i percorsi indipendenti che il lettore deve tenere a mente insieme: ogni ramo, ciclo e operatore booleano ne aggiunge uno. Il resto della disciplina esiste per tenere basso quel numero. Ogni regola ha la sua pagina con scopo, concetto, problema e soluzione.',
    outro:
      'In caso di dubbio, scegli l’opzione più restrittiva. È il criterio di spareggio che la filosofia prescrive.',
  },

  ja: {
    title: '40のルール',
    kicker: 'トラック O — 規律を自ら律する',
    lede: '40のルール、それぞれに閾値があります。機械的である理由は単純です。好みに依存するルールは、レビューも自動化も議論もできないからです。',
    intro:
      '<strong>メソッドあたりの循環的複雑度 ≤ 5</strong> が主要指標です。読み手が同時に保持しなければならない独立した経路の数であり、分岐・ループ・論理演算子が一つずつ増やします。規律の残りはこの数を低く保つためのものです。各ルールには目的・概念・問題・解決を示す専用のページがあります。',
    outro:
      '迷ったら、より制限の強い選択をしてください。それがこの哲学の定める判断基準です。',
  },

  zh: {
    title: '四十条规则',
    kicker: '路线 O — 自律',
    lede: '四十条规则，每条都有一个阈值。它们之所以机械，是因为依赖品味的规则无法评审、无法自动化，也无法争论。',
    intro:
      '<strong>每个方法的圈复杂度 ≤ 5</strong> 是主要指标。它计算读者必须同时持有的独立路径数：每个分支、循环和布尔运算符各加一。纪律部分的其余内容都是为了让这个数字保持低位。下面每条规则都有自己的页面，说明目的、概念、问题与解决方案。',
    outro:
      '拿不准时，选择更严格的选项。这就是这套哲学规定的裁决标准。',
  },
};

export function rulesPageFor(locale: Locale): RulesPageCopy {
  if (locale === 'zh') return rulesPage.zh;
  if (locale === 'ja') return rulesPage.ja;
  if (locale === 'it') return rulesPage.it;
  if (locale === 'fr') return rulesPage.fr;
  return locale === 'es' ? rulesPage.es : rulesPage['pt-br'];
}
