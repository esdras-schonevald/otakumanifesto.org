import type { Locale } from '../data/ruleGroups';
import type { ManifestoContent } from './home';

export const manifesto: Record<Locale, ManifestoContent> = {
  en: {
    kicker: 'Chapter 01 — Rigid core, flexible edges',
    lede:
      'OTAKU is an acronym, and every letter is a constraint. Forty rules make it measurable; one metric decides whether a method is too complex to exist.',
    intro: [
      'The philosophy has a rigid core and flexible edges. The core — the five pillars and the thresholds that operationalize them — does not negotiate. The edges — language, framework, style, tooling — are free.',
      'The five pillars are ordered on purpose. Discipline is first because nothing else survives without it. Contracts are last because they are the only thing the outside world is allowed to see.',
    ],
    pillars: [
      { letter: 'O', name: 'Own your Discipline', short: 'Be strict with yourself.', body: 'Restriction is the only path to liberation. Complexity, size and naming are measured, not debated.' },
      { letter: 'T', name: 'Tools for Composition', short: 'Compose like Unix.', body: 'Small parts with clear inputs and outputs. The application is a data pipe, and side effects stay at the edges.' },
      { letter: 'A', name: 'Armor the Core', short: 'Protect the heart of the business.', body: 'Dependencies point inwards only. Entities and use cases never learn the name of a framework.' },
      { letter: 'K', name: 'Keep Infrastructure Silent', short: 'Infrastructure is just a detail.', body: 'Persistence behaves like an in-memory collection. Failure is explicit; state is immutable by default.' },
      { letter: 'U', name: 'Universal Language & Contracts', short: 'Speak the user’s language.', body: 'Ubiquitous language made explicit in design-first contracts. Primitives are wrapped; every public method has a contract.' },
    ],
    metricH: 'The primary metric',
    metricP1:
      'Cyclomatic complexity — Thomas J. McCabe’s count of independent paths through a method — is the philosophy’s main instrument. A method with cyclomatic complexity above 5 is rejected, regardless of how readable it looks. Five paths are already five branches of reasoning a reader must hold at once.',
    metricP2:
      'Everything else in the discipline section is a way to keep that number low: one level of indentation, no ELSE, no switch/case, guard clauses, extraction. The metric is measurable in every language in this book, and every ecosystem has a tool that reports it.',
    rulesH: 'The forty rules',
    rulesIntro:
      'Every rule has a measurable threshold. When in doubt, choose the more restrictive option.',
    totalLine: '40 rules · 7 groups · 5 pillars',
    closingH: 'How the pillars enforce each other',
    closingP1:
      'Discipline makes composition possible: a 300-line class cannot be replaced. Composition makes the core defensible: a monolith cannot hide its dependencies. A protected core makes infrastructure genuinely optional. Contracts are the only reason any of it can be verified from outside.',
    closingP2:
      'Remove one pillar and the others become ceremony. Keep all five and the system becomes boring — in the way bridges are boring.',
  },
  'pt-br': {
    kicker: 'Capítulo 01 — Núcleo rígido, bordas flexíveis',
    lede:
      'OTAKU é um acrônimo, e cada letra é uma restrição. Quarenta regras a tornam mensurável; uma métrica decide se um método é complexo demais para existir.',
    intro: [
      'A filosofia tem núcleo rígido e bordas flexíveis. O núcleo — os cinco pilares e os limites que os operacionalizam — não negocia. As bordas — linguagem, framework, estilo, ferramentas — são livres.',
      'Os cinco pilares têm ordem intencional. Disciplina vem primeiro porque nada sobrevive sem ela. Contratos vêm por último porque são a única coisa que o mundo externo pode ver.',
    ],
    pillars: [
      { letter: 'O', name: 'Domine sua Disciplina', short: 'Seja rígido consigo mesmo.', body: 'Restrição é o único caminho para a liberdade. Complexidade, tamanho e nomes são medidos, não debatidos.' },
      { letter: 'T', name: 'Ferramentas para Composição', short: 'Componha como o Unix.', body: 'Partes pequenas com entradas e saídas claras. A aplicação é um data pipe e os efeitos colaterais ficam nas bordas.' },
      { letter: 'A', name: 'Blinde o Núcleo', short: 'Proteja o coração do negócio.', body: 'Dependências apontam apenas para dentro. Entidades e casos de uso nunca conhecem o nome de um framework.' },
      { letter: 'K', name: 'Mantenha a Infraestrutura Silenciosa', short: 'Infraestrutura é só um detalhe.', body: 'A persistência se comporta como coleção em memória. A falha é explícita; o estado é imutável por padrão.' },
      { letter: 'U', name: 'Linguagem Universal e Contratos', short: 'Fale a língua do usuário.', body: 'Linguagem ubíqua explícita em contratos design-first. Primitivos são encapsulados; todo método público tem contrato.' },
    ],
    metricH: 'A métrica principal',
    metricP1:
      'A complexidade ciclomática — a contagem de caminhos independentes de um método, de Thomas J. McCabe — é o instrumento principal da filosofia. Um método com complexidade acima de 5 é rejeitado, por mais legível que pareça. Cinco caminhos já são cinco raciocínios que o leitor precisa sustentar ao mesmo tempo.',
    metricP2:
      'Todo o resto da seção de disciplina serve para manter esse número baixo: um nível de indentação, sem ELSE, sem switch/case, cláusulas de guarda, extração. A métrica é mensurável em todas as linguagens deste livro, e cada ecossistema tem uma ferramenta que a reporta.',
    rulesH: 'As quarenta regras',
    rulesIntro:
      'Toda regra tem um limite mensurável. Em caso de dúvida, escolha a opção mais restritiva.',
    totalLine: '40 regras · 7 grupos · 5 pilares',
    closingH: 'Como os pilares se sustentam',
    closingP1:
      'Disciplina torna a composição possível: uma classe de 300 linhas não pode ser substituída. Composição torna o núcleo defensável: um monólito não consegue esconder suas dependências. Um núcleo protegido torna a infraestrutura realmente opcional. Contratos são a única razão pela qual tudo isso pode ser verificado de fora.',
    closingP2:
      'Remova um pilar e os outros viram cerimônia. Mantenha os cinco e o sistema fica entediante — do jeito que pontes são entediantes.',
  },
  es: {
    kicker: 'Capítulo 01 — Núcleo rígido, bordes flexibles',
    lede:
      'OTAKU es un acrónimo, y cada letra es una restricción. Cuarenta reglas lo hacen medible; una métrica decide si un método es demasiado complejo para existir.',
    intro: [
      'La filosofía tiene un núcleo rígido y bordes flexibles. El núcleo —los cinco pilares y los umbrales que los operacionalizan— no negocia. Los bordes —lenguaje, framework, estilo, herramientas— son libres.',
      'Los cinco pilares tienen un orden intencional. La disciplina va primero porque nada sobrevive sin ella. Los contratos van al final porque son lo único que el mundo exterior puede ver.',
    ],
    pillars: [
      { letter: 'O', name: 'Domina tu Disciplina', short: 'Sé estricto contigo mismo.', body: 'La restricción es el único camino a la libertad. Complejidad, tamaño y nombres se miden, no se debaten.' },
      { letter: 'T', name: 'Herramientas para la Composición', short: 'Compón como Unix.', body: 'Piezas pequeñas con entradas y salidas claras. La aplicación es una tubería de datos y los efectos quedan en los bordes.' },
      { letter: 'A', name: 'Blinda el Núcleo', short: 'Protege el corazón del negocio.', body: 'Las dependencias apuntan solo hacia dentro. Entidades y casos de uso nunca conocen el nombre de un framework.' },
      { letter: 'K', name: 'Mantén la Infraestructura Silenciosa', short: 'La infraestructura es solo un detalle.', body: 'La persistencia se comporta como una colección en memoria. El fallo es explícito; el estado es inmutable por defecto.' },
      { letter: 'U', name: 'Lenguaje Universal y Contratos', short: 'Habla el idioma del usuario.', body: 'Lenguaje ubicuo explícito en contratos design-first. Los primitivos se envuelven; todo método público tiene contrato.' },
    ],
    metricH: 'La métrica principal',
    metricP1:
      'La complejidad ciclomática —el conteo de caminos independientes de un método, de Thomas J. McCabe— es el instrumento principal de la filosofía. Un método con complejidad superior a 5 se rechaza, por legible que parezca. Cinco caminos ya son cinco razonamientos que el lector debe sostener a la vez.',
    metricP2:
      'Todo lo demás en la sección de disciplina sirve para mantener ese número bajo: un nivel de indentación, sin ELSE, sin switch/case, cláusulas de guarda, extracción. La métrica es medible en todos los lenguajes de este libro, y cada ecosistema tiene una herramienta que la reporta.',
    rulesH: 'Las cuarenta reglas',
    rulesIntro:
      'Cada regla tiene un umbral medible. En caso de duda, elige la opción más restrictiva.',
    totalLine: '40 reglas · 7 grupos · 5 pilares',
    closingH: 'Cómo se sostienen los pilares',
    closingP1:
      'La disciplina hace posible la composición: una clase de 300 líneas no se puede reemplazar. La composición hace defendible el núcleo: un monolito no puede esconder sus dependencias. Un núcleo protegido hace que la infraestructura sea realmente opcional. Los contratos son la única razón por la que todo esto se puede verificar desde fuera.',
    closingP2:
      'Quita un pilar y los demás se vuelven ceremonia. Mantén los cinco y el sistema se vuelve aburrido, como los puentes.',
  },
  ja: {
    kicker: '第1章 — 硬い核、柔らかい縁',
    lede:
      'OTAKUは頭字語であり、すべての文字が制約です。40のルールがそれを測定可能にし、1つの指標がメソッドの存在可否を決めます。',
    intro: [
      'この哲学には硬い核と柔らかい縁があります。核＝5つの柱とそれを運用する閾値は交渉しません。縁＝言語、フレームワーク、スタイル、ツールは自由です。',
      '5つの柱の順序には意図があります。規律が最初なのは、それがなければ何も残らないからです。契約が最後なのは、外の世界が見てよい唯一のものだからです。',
    ],
    pillars: [
      { letter: 'O', name: '規律を自ら律する', short: '自分に厳しく。', body: '制約だけが自由への道です。複雑度、サイズ、命名は議論ではなく測定の対象です。' },
      { letter: 'T', name: '構成のための道具', short: 'Unixのように構成する。', body: '入出力が明確な小さな部品。アプリケーションはデータパイプで、副作用は縁に留まります。' },
      { letter: 'A', name: '中核を装甲する', short: 'ビジネスの中核を守る。', body: '依存は内側だけへ。エンティティとユースケースはフレームワークの名前を知りません。' },
      { letter: 'K', name: 'インフラを静かに保つ', short: 'インフラはただの詳細。', body: '永続化はメモリ上のコレクションのように振る舞います。失敗は明示的で、状態は既定で不変です。' },
      { letter: 'U', name: '普遍言語と契約', short: 'ユーザーの言葉で語る。', body: 'ユビキタス言語を設計先行の契約に明示します。プリミティブは包み、すべての公開メソッドに契約があります。' },
    ],
    metricH: '主要な指標',
    metricP1:
      '循環的複雑度（Thomas J. McCabeによる、メソッドを通る独立経路の数）がこの哲学の主要な計器です。複雑度が5を超えるメソッドは、どれほど読みやすく見えても却下されます。5つの経路は、読み手が同時に保持すべき5つの推論です。',
    metricP2:
      '規律の節の他のすべては、この数を低く保つための手段です。1階層のインデント、ELSEなし、switch/caseなし、ガード節、抽出。この指標は本書のすべての言語で測定でき、どのエコシステムにも報告するツールがあります。',
    rulesH: '40のルール',
    rulesIntro: 'すべてのルールには測定可能な閾値があります。迷ったら、より制限の強い選択をしてください。',
    totalLine: '40のルール · 7グループ · 5つの柱',
    closingH: '柱は互いを支える',
    closingP1:
      '規律が構成を可能にします。300行のクラスは差し替えられません。構成が中核を守ります。モノリスは依存を隠せません。守られた中核がインフラを本当に任意のものにします。契約だけが、それを外部から検証できる理由です。',
    closingP2:
      '柱を1つ外すと、残りは儀式になります。5つすべてを保てば、システムは退屈になります。橋が退屈であるのと同じ意味で。',
  },
  zh: {
    kicker: '第一章 — 硬核心，软边缘',
    lede:
      'OTAKU 是一个首字母缩写，每一个字母都是一条约束。四十条规则让它可度量；一个指标决定一个方法是否复杂到不该存在。',
    intro: [
      '这套哲学有坚硬的核心和柔软的边缘。核心——五个支柱及其可度量的阈值——不可谈判。边缘——语言、框架、风格、工具——自由。',
      '五个支柱的顺序是有意的。纪律在先，因为没有它其余都无法存活；契约在最后，因为它是外部世界唯一能看到的东西。',
    ],
    pillars: [
      { letter: 'O', name: '自律', short: '对自己严格。', body: '限制是通往自由的唯一道路。复杂度、规模和命名都靠度量，而不是争论。' },
      { letter: 'T', name: '组合的工具', short: '像 Unix 一样组合。', body: '小而清晰的输入输出部件。应用是一条数据管道，副作用留在边缘。' },
      { letter: 'A', name: '装甲核心', short: '保护业务核心。', body: '依赖只向内。实体与用例永远不知道框架的名字。' },
      { letter: 'K', name: '让基础设施保持沉默', short: '基础设施只是细节。', body: '持久化像内存集合一样工作。失败是显式的，状态默认不可变。' },
      { letter: 'U', name: '通用语言与契约', short: '说用户的语言。', body: '把通用语言写进设计先行的契约。原始类型被包装；每个公有方法都有契约。' },
    ],
    metricH: '核心指标',
    metricP1:
      '圈复杂度——Thomas J. McCabe 提出的方法独立路径数——是这套哲学的主要仪器。圈复杂度超过 5 的方法必须被拒绝，无论它看起来多易读。五条路径已经是读者必须同时持有的五种推理。',
    metricP2:
      '纪律部分的其余内容都是压低这个数字的手段：一层缩进、不用 ELSE、不用 switch/case、卫语句、抽取。这个指标在本书的每种语言里都可度量，每个生态都有报告它的工具。',
    rulesH: '四十条规则',
    rulesIntro: '每条规则都有可度量的阈值。拿不准时，选择更严格的选项。',
    totalLine: '40 条规则 · 7 组 · 5 个支柱',
    closingH: '支柱如何相互支撑',
    closingP1:
      '纪律使组合成为可能：300 行的类无法替换。组合使核心可防卫：单体无法隐藏依赖。受保护的核心让基础设施真正可选。契约是这一切能从外部验证的唯一原因。',
    closingP2:
      '去掉一根支柱，其余就沦为仪式。保留五根，系统会变得无聊——就像桥梁的无聊。',
  },
  fr: {
    kicker: 'Chapitre 01 — Noyau rigide, bords souples',
    lede:
      'OTAKU est un acronyme, et chaque lettre est une contrainte. Quarante règles le rendent mesurable ; une métrique décide si une méthode est trop complexe pour exister.',
    intro: [
      'La philosophie a un noyau rigide et des bords souples. Le noyau — les cinq piliers et les seuils qui les rendent opérationnels — ne négocie pas. Les bords — langage, framework, style, outillage — sont libres.',
      'L’ordre des cinq piliers est intentionnel. La discipline vient d’abord parce que rien ne survit sans elle. Les contrats viennent en dernier parce qu’ils sont la seule chose que le monde extérieur a le droit de voir.',
    ],
    pillars: [
      { letter: 'O', name: 'Maîtrise ta Discipline', short: 'Sois strict avec toi-même.', body: 'La restriction est le seul chemin vers la liberté. Complexité, taille et nommage se mesurent, ils ne se débattent pas.' },
      { letter: 'T', name: 'Outils de Composition', short: 'Compose comme Unix.', body: 'Des pièces petites aux entrées et sorties claires. L’application est un tuyau de données et les effets restent aux bords.' },
      { letter: 'A', name: 'Blindez le Cœur', short: 'Protège le cœur du métier.', body: 'Les dépendances pointent uniquement vers l’intérieur. Entités et cas d’usage ignorent le nom d’un framework.' },
      { letter: 'K', name: 'Gardez l’Infrastructure Silencieuse', short: 'L’infrastructure n’est qu’un détail.', body: 'La persistance se comporte comme une collection en mémoire. L’échec est explicite ; l’état est immuable par défaut.' },
      { letter: 'U', name: 'Langage Universel et Contrats', short: 'Parle la langue de l’utilisateur.', body: 'Langage ubiquitaire explicite dans des contrats design-first. Les primitifs sont encapsulés ; chaque méthode publique a un contrat.' },
    ],
    metricH: 'La métrique principale',
    metricP1:
      'La complexité cyclomatique — le nombre de chemins indépendants d’une méthode, selon Thomas J. McCabe — est l’instrument principal de la philosophie. Une méthode au-delà de 5 est rejetée, aussi lisible paraisse-t-elle. Cinq chemins sont déjà cinq raisonnements que le lecteur doit tenir simultanément.',
    metricP2:
      'Tout le reste de la section discipline sert à garder ce nombre bas : un seul niveau d’indentation, pas de ELSE, pas de switch/case, des clauses de garde, de l’extraction. La métrique est mesurable dans tous les langages de ce livre, et chaque écosystème a un outil qui la rapporte.',
    rulesH: 'Les quarante règles',
    rulesIntro:
      'Chaque règle a un seuil mesurable. En cas de doute, choisissez l’option la plus restrictive.',
    totalLine: '40 règles · 7 groupes · 5 piliers',
    closingH: 'Comment les piliers se soutiennent',
    closingP1:
      'La discipline rend la composition possible : une classe de 300 lignes ne se remplace pas. La composition rend le cœur défendable : un monolithe ne peut pas cacher ses dépendances. Un cœur protégé rend l’infrastructure réellement optionnelle. Les contrats sont la seule raison pour laquelle tout cela se vérifie de l’extérieur.',
    closingP2:
      'Retirez un pilier et les autres deviennent une cérémonie. Gardez les cinq et le système devient ennuyeux — de la même façon qu’un pont est ennuyeux.',
  },
  it: {
    kicker: 'Capitolo 01 — Nucleo rigido, bordi flessibili',
    lede:
      'OTAKU è un acronimo, e ogni lettera è un vincolo. Quaranta regole lo rendono misurabile; una metrica decide se un metodo è troppo complesso per esistere.',
    intro: [
      'La filosofia ha un nucleo rigido e bordi flessibili. Il nucleo — i cinque pilastri e le soglie che li rendono operativi — non negozia. I bordi — linguaggio, framework, stile, strumenti — sono liberi.',
      'L’ordine dei cinque pilastri è intenzionale. La disciplina viene prima perché nulla sopravvive senza di essa. I contratti vengono per ultimi perché sono l’unica cosa che il mondo esterno può vedere.',
    ],
    pillars: [
      { letter: 'O', name: 'Padroneggia la tua Disciplina', short: 'Sii severo con te stesso.', body: 'La restrizione è l’unica via alla libertà. Complessità, dimensione e denominazione si misurano, non si discutono.' },
      { letter: 'T', name: 'Strumenti per la Composizione', short: 'Componi come Unix.', body: 'Parti piccole con input e output chiari. L’applicazione è un data pipe e gli effetti collaterali restano ai bordi.' },
      { letter: 'A', name: 'Proteggi il Nucleo', short: 'Proteggi il cuore del business.', body: 'Le dipendenze puntano solo verso l’interno. Entità e casi d’uso non conoscono il nome di un framework.' },
      { letter: 'K', name: 'Mantieni l’Infrastruttura Silenziosa', short: 'L’infrastruttura è solo un dettaglio.', body: 'La persistenza si comporta come una collezione in memoria. Il fallimento è esplicito; lo stato è immutabile per default.' },
      { letter: 'U', name: 'Linguaggio Universale e Contratti', short: 'Parla la lingua dell’utente.', body: 'Linguaggio ubiquo esplicito in contratti design-first. I primitivi sono incapsulati; ogni metodo pubblico ha un contratto.' },
    ],
    metricH: 'La metrica principale',
    metricP1:
      'La complessità ciclomatica — il numero di percorsi indipendenti di un metodo, secondo Thomas J. McCabe — è lo strumento principale della filosofia. Un metodo oltre 5 viene rifiutato, per quanto leggibile possa sembrare. Cinque percorsi sono già cinque ragionamenti che il lettore deve tenere insieme.',
    metricP2:
      'Tutto il resto della sezione disciplina serve a tenere basso quel numero: un solo livello di indentazione, niente ELSE, niente switch/case, guard clause, estrazione. La metrica è misurabile in ogni linguaggio di questo libro, e ogni ecosistema ha uno strumento che la riporta.',
    rulesH: 'Le quaranta regole',
    rulesIntro:
      'Ogni regola ha una soglia misurabile. Nel dubbio, scegli l’opzione più restrittiva.',
    totalLine: '40 regole · 7 gruppi · 5 pilastri',
    closingH: 'Come i pilastri si sostengono',
    closingP1:
      'La disciplina rende possibile la composizione: una classe di 300 righe non si sostituisce. La composizione rende difendibile il nucleo: un monolite non può nascondere le dipendenze. Un nucleo protetto rende l’infrastruttura davvero opzionale. I contratti sono l’unica ragione per cui tutto questo è verificabile dall’esterno.',
    closingP2:
      'Togli un pilastro e gli altri diventano cerimonia. Tieni tutti e cinque e il sistema diventa noioso — come lo sono i ponti.',
  },
};
