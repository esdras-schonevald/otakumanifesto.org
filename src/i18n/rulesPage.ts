import type { Locale } from '../data/ruleGroups';

interface RulesPageCopy {
  title: string;
  kicker: string;
  lede: string;
  intro: string;
  outro: string;
}

export const rulesPage: Record<'pt-br' | 'es' | 'fr' | 'it', RulesPageCopy> = {
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
};

export function rulesPageFor(locale: Locale): RulesPageCopy {
  if (locale === 'it') return rulesPage.it;
  if (locale === 'fr') return rulesPage.fr;
  return locale === 'es' ? rulesPage.es : rulesPage['pt-br'];
}
