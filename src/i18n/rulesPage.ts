import type { Locale } from '../data/ruleGroups';

interface RulesPageCopy {
  title: string;
  kicker: string;
  lede: string;
  intro: string;
  outro: string;
}

export const rulesPage: Record<'pt-br' | 'es', RulesPageCopy> = {
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
};

export function rulesPageFor(locale: Locale): RulesPageCopy {
  return locale === 'es' ? rulesPage.es : rulesPage['pt-br'];
}
