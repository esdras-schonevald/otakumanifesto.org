import type { Locale } from '../data/ruleGroups';

export interface HomeContent {
  kicker: string;
  titleA: string;
  titleB: string;
  lead: string;
  actions: { manifesto: string; guide: string; shapes: string };
  whyH: string;
  whyP1: string;
  whyP2: string;
  readH: string;
  cards: { n: string; h: string; p: string }[];
  refuseH: string;
  refusals: string[];
  quote: string;
  scopeH: string;
  scopeP1: string;
  scopeP2: string;
}

export interface ManifestoContent {
  kicker: string;
  lede: string;
  intro: string[];
  pillars: { letter: string; name: string; short: string; body: string }[];
  metricH: string;
  metricP1: string;
  metricP2: string;
  rulesH: string;
  rulesIntro: string;
  totalLine: string;
  closingH: string;
  closingP1: string;
  closingP2: string;
}

export const home: Record<Locale, HomeContent> = {
  en: {
    kicker: 'A philosophy for object-oriented software',
    titleA: 'Structure is a decision,',
    titleB: 'not an accident.',
    lead:
      'OTAKU is a philosophy for object-oriented software. Five constraints decide what code is allowed to exist; three shapes decide how repositories are organized. Nothing here belongs to a language — only to the paradigm.',
    actions: { manifesto: 'Read the manifesto', guide: 'Open the guide', shapes: 'The three shapes' },
    whyH: 'Why this exists',
    whyP1:
      'Frameworks are excellent until you need to replace one piece — and then demand that you replace all of them. The usual escape is a rewrite, which replaces one set of accidental constraints with another. OTAKU is the opposite bet: architecture made of parts small enough to understand in one sitting, and replaceable without permission.',
    whyP2:
      'The name is an acronym, and also a temperament. It describes a technical obsession with mastery, discipline and structural purity — the willingness to delete a clever abstraction because it cannot be explained in a sentence.',
    readH: 'How to read this book',
    cards: [
      { n: '01', h: 'The manifesto', p: 'Five pillars, forty measurable rules, one primary metric.' },
      { n: '02', h: 'The three shapes', p: 'Atom, assembly, application. Every repository is exactly one.' },
      { n: '03', h: 'The guide', p: 'How to apply it, with code in PHP, C#, Java, C++ and TypeScript.' },
    ],
    refuseH: 'What it refuses',
    refusals: [
      'Frameworks leaking into the domain layer.',
      'Repositories that cannot be classified as atom, assembly or application.',
      'Abstractions created before the second real use case exists.',
      'Methods above a cyclomatic complexity of 5.',
      'Interfaces published without a contract.',
    ],
    quote: 'Write code that never needs “fixing” because it was built under absolute constraint.',
    scopeH: 'Scope',
    scopeP1:
      'OTAKU was born inside PHPRise, but PHP is only where it started. The rules measure indentation, complexity, dependencies, contracts and naming — concepts every object-oriented language expresses. The guide is written against PHP, C#, Java, C++ and TypeScript.',
    scopeP2:
      'If your language has classes, interfaces, exceptions and a package manager, the philosophy applies. If it does not, this is not the right tool — and that is a legitimate answer.',
  },
  'pt-br': {
    kicker: 'Uma filosofia para software orientado a objetos',
    titleA: 'Estrutura é uma decisão,',
    titleB: 'não um acidente.',
    lead:
      'OTAKU é uma filosofia para software orientado a objetos. Cinco restrições decidem o que pode existir no código; três formas decidem como os repositórios se organizam. Nada aqui pertence a uma linguagem — apenas ao paradigma.',
    actions: { manifesto: 'Ler o manifesto', guide: 'Abrir o guia', shapes: 'As três formas' },
    whyH: 'Por que isso existe',
    whyP1:
      'Frameworks são excelentes até você precisar substituir uma peça — e então exigirem que você substitua todas. A saída habitual é a reescrita, que troca um conjunto de restrições acidentais por outro. OTAKU aposta no contrário: arquitetura feita de partes pequenas o bastante para entender de uma vez, e substituíveis sem pedir permissão.',
    whyP2:
      'O nome é um acrônimo e também um temperamento: obsessão técnica por domínio, disciplina e pureza estrutural — a disposição de apagar uma abstração esperta porque ela não cabe em uma frase.',
    readH: 'Como ler este livro',
    cards: [
      { n: '01', h: 'O manifesto', p: 'Cinco pilares, quarenta regras mensuráveis, uma métrica principal.' },
      { n: '02', h: 'As três formas', p: 'Átomo, assembly, aplicação. Todo repositório é exatamente uma.' },
      { n: '03', h: 'O guia', p: 'Como aplicar, com código em PHP, C#, Java, C++ e TypeScript.' },
    ],
    refuseH: 'O que ele recusa',
    refusals: [
      'Frameworks vazando para a camada de domínio.',
      'Repositórios que não se classificam como átomo, assembly ou aplicação.',
      'Abstrações criadas antes do segundo caso de uso real.',
      'Métodos com complexidade ciclomática acima de 5.',
      'Interfaces publicadas sem contrato.',
    ],
    quote: 'Escreva código que nunca precise de “conserto” porque foi construído sob restrição absoluta.',
    scopeH: 'Escopo',
    scopeP1:
      'OTAKU nasceu dentro do PHPRise, mas o PHP é apenas onde começou. As regras medem indentação, complexidade, dependências, contratos e nomes — conceitos que toda linguagem orientada a objetos expressa. O guia cobre PHP, C#, Java, C++ e TypeScript.',
    scopeP2:
      'Se a sua linguagem tem classes, interfaces, exceções e um gerenciador de pacotes, a filosofia se aplica. Se não tem, esta não é a ferramenta certa — e isso é uma resposta legítima.',
  },
  es: {
    kicker: 'Una filosofía para el software orientado a objetos',
    titleA: 'La estructura es una decisión,',
    titleB: 'no un accidente.',
    lead:
      'OTAKU es una filosofía para el software orientado a objetos. Cinco restricciones deciden qué código puede existir; tres formas deciden cómo se organizan los repositorios. Nada aquí pertenece a un lenguaje: solo al paradigma.',
    actions: { manifesto: 'Leer el manifiesto', guide: 'Abrir la guía', shapes: 'Las tres formas' },
    whyH: 'Por qué existe',
    whyP1:
      'Los frameworks son excelentes hasta que necesitas reemplazar una pieza, y entonces exigen que reemplaces todas. La salida habitual es reescribir, lo que cambia un conjunto de restricciones accidentales por otro. OTAKU apuesta a lo contrario: arquitectura hecha de piezas lo bastante pequeñas para entender de una vez, y reemplazables sin pedir permiso.',
    whyP2:
      'El nombre es un acrónimo y también un temperamento: obsesión técnica por el dominio, la disciplina y la pureza estructural; la disposición a borrar una abstracción ingeniosa porque no cabe en una frase.',
    readH: 'Cómo leer este libro',
    cards: [
      { n: '01', h: 'El manifiesto', p: 'Cinco pilares, cuarenta reglas medibles, una métrica principal.' },
      { n: '02', h: 'Las tres formas', p: 'Átomo, ensamblaje, aplicación. Cada repositorio es exactamente una.' },
      { n: '03', h: 'La guía', p: 'Cómo aplicarlo, con código en PHP, C#, Java, C++ y TypeScript.' },
    ],
    refuseH: 'Lo que rechaza',
    refusals: [
      'Frameworks filtrándose en la capa de dominio.',
      'Repositorios que no pueden clasificarse como átomo, ensamblaje o aplicación.',
      'Abstracciones creadas antes del segundo caso de uso real.',
      'Métodos con complejidad ciclomática superior a 5.',
      'Interfaces publicadas sin contrato.',
    ],
    quote: 'Escribe código que nunca necesite «arreglos» porque fue construido bajo restricción absoluta.',
    scopeH: 'Alcance',
    scopeP1:
      'OTAKU nació dentro de PHPRise, pero PHP es solo donde empezó. Las reglas miden indentación, complejidad, dependencias, contratos y nombres: conceptos que todo lenguaje orientado a objetos expresa. La guía cubre PHP, C#, Java, C++ y TypeScript.',
    scopeP2:
      'Si tu lenguaje tiene clases, interfaces, excepciones y un gestor de paquetes, la filosofía aplica. Si no, esta no es la herramienta correcta, y esa es una respuesta legítima.',
  },
  ja: {
    kicker: 'オブジェクト指向ソフトウェアのための哲学',
    titleA: '構造は決定である。',
    titleB: '偶然ではない。',
    lead:
      'OTAKUはオブジェクト指向ソフトウェアのための哲学です。5つの制約がコードの存在可否を決め、3つの形がリポジトリの構成を決めます。ここにあるのは言語の話ではなく、パラダイムの話です。',
    actions: { manifesto: 'マニフェストを読む', guide: 'ガイドを開く', shapes: '3つの形' },
    whyH: 'なぜ存在するのか',
    whyP1:
      'フレームワークは、一部品を差し替えたいと思うまでは優れています。その瞬間、全部を差し替えろと言ってくる。逃げ道は書き直しですが、それは偶発的な制約を別の偶発的な制約に置き換えるだけです。OTAKUは逆に賭けます。一度で理解できる大きさの部品で作り、許可なく差し替えられる構造を。',
    whyP2:
      '名前は頭字語であり、気質でもあります。習熟・規律・構造的純粋性への技術的偏執、つまり一文で説明できない巧妙な抽象を削除できる胆力のことです。',
    readH: 'この本の読み方',
    cards: [
      { n: '01', h: 'マニフェスト', p: '5つの柱、40の測定可能なルール、1つの主要指標。' },
      { n: '02', h: '3つの形', p: 'アトム、アセンブリ、アプリケーション。リポジトリは必ずどれか1つ。' },
      { n: '03', h: 'ガイド', p: 'PHP、C#、Java、C++、TypeScriptのコードで適用方法を示します。' },
    ],
    refuseH: '拒否するもの',
    refusals: [
      'ドメイン層に漏れ出すフレームワーク。',
      'アトム・アセンブリ・アプリケーションに分類できないリポジトリ。',
      '2つ目の実用例が存在する前に作られた抽象。',
      '循環的複雑度が5を超えるメソッド。',
      '契約なしで公開されたインターフェース。',
    ],
    quote: '絶対的な制約の下で作られたがゆえに、二度と「修正」を必要としないコードを書け。',
    scopeH: '適用範囲',
    scopeP1:
      'OTAKUはPHPRiseの中で生まれましたが、PHPは出発点にすぎません。ルールが測るのはインデント、複雑度、依存関係、契約、命名であり、これはあらゆるオブジェクト指向言語が表現できる概念です。ガイドはPHP、C#、Java、C++、TypeScriptを扱います。',
    scopeP2:
      'クラス、インターフェース、例外、パッケージマネージャがある言語なら適用できます。なければ、これは適切な道具ではありません。それも正当な答えです。',
  },
  zh: {
    kicker: '面向对象软件的哲学',
    titleA: '结构是一种决定，',
    titleB: '而不是意外。',
    lead:
      'OTAKU 是一套面向对象软件的哲学。五条约束决定什么代码可以存在，三种形态决定仓库如何组织。这里讨论的不是某种语言，而是范式。',
    actions: { manifesto: '阅读宣言', guide: '打开指南', shapes: '三种形态' },
    whyH: '为什么存在',
    whyP1:
      '框架在你想替换某一个部件之前都很优秀——那时它会要求你替换全部。通常的出路是重写，但那只是一种偶然约束替换另一种。OTAKU 押注相反的方向：由小到一次就能读完的部件构成架构，并且可以不经许可被替换。',
    whyP2:
      '这个名字既是首字母缩写，也是一种气质：对掌握、纪律和结构纯粹性的技术偏执——愿意删掉一个聪明的抽象，只因为它无法用一句话解释。',
    readH: '如何阅读本书',
    cards: [
      { n: '01', h: '宣言', p: '五个支柱、四十条可度量规则、一个核心指标。' },
      { n: '02', h: '三种形态', p: '原子、装配、应用。每个仓库必须是其中之一。' },
      { n: '03', h: '指南', p: '如何落地，含 PHP、C#、Java、C++ 和 TypeScript 代码。' },
    ],
    refuseH: '它拒绝什么',
    refusals: [
      '框架渗入领域层。',
      '无法归类为原子、装配或应用的仓库。',
      '在第二个真实用例出现之前就创造的抽象。',
      '圈复杂度超过 5 的方法。',
      '没有契约就发布的接口。',
    ],
    quote: '写出永远不需要「修复」的代码，因为它是在绝对约束下构建的。',
    scopeH: '范围',
    scopeP1:
      'OTAKU 诞生于 PHPRise，但 PHP 只是起点。规则度量缩进、复杂度、依赖、契约和命名——这些概念每种面向对象语言都能表达。指南覆盖 PHP、C#、Java、C++ 和 TypeScript。',
    scopeP2:
      '如果你的语言有类、接口、异常和包管理器，这套哲学就适用。如果没有，那它就不是合适的工具——这也是一个正当的答案。',
  },
  fr: {
    kicker: 'Une philosophie pour le logiciel orienté objet',
    titleA: 'La structure est une décision,',
    titleB: 'pas un accident.',
    lead:
      'OTAKU est une philosophie pour le logiciel orienté objet. Cinq contraintes décident ce qui a le droit d’exister dans le code ; trois formes décident comment les dépôts s’organisent. Rien ici n’appartient à un langage — seulement au paradigme.',
    actions: { manifesto: 'Lire le manifeste', guide: 'Ouvrir le guide', shapes: 'Les trois formes' },
    whyH: 'Pourquoi cela existe',
    whyP1:
      'Les frameworks sont excellents jusqu’au jour où il faut remplacer une pièce — et ils exigent alors de toutes les remplacer. L’échappatoire habituelle est la réécriture, qui remplace un jeu de contraintes accidentelles par un autre. OTAKU parie l’inverse : une architecture faite de pièces assez petites pour être comprises d’un coup, et remplaçables sans permission.',
    whyP2:
      'Le nom est un acronyme, et aussi un tempérament : une obsession technique de la maîtrise, de la discipline et de la pureté structurelle — la volonté de supprimer une abstraction astucieuse parce qu’elle ne tient pas en une phrase.',
    readH: 'Comment lire ce livre',
    cards: [
      { n: '01', h: 'Le manifeste', p: 'Cinq piliers, quarante règles mesurables, une métrique principale.' },
      { n: '02', h: 'Les trois formes', p: 'Atome, assemblage, application. Chaque dépôt est exactement l’une d’elles.' },
      { n: '03', h: 'Le guide', p: 'Comment l’appliquer, avec du code en PHP, C#, Java, C++ et TypeScript.' },
    ],
    refuseH: 'Ce qu’il refuse',
    refusals: [
      'Des frameworks qui fuient dans la couche domaine.',
      'Des dépôts qui ne se classent ni en atome, ni en assemblage, ni en application.',
      'Des abstractions créées avant le deuxième cas d’usage réel.',
      'Des méthodes au-delà d’une complexité cyclomatique de 5.',
      'Des interfaces publiées sans contrat.',
    ],
    quote: 'Écrivez du code qui n’aura jamais besoin d’« être réparé », parce qu’il a été construit sous contrainte absolue.',
    scopeH: 'Portée',
    scopeP1:
      'OTAKU est né dans PHPRise, mais PHP n’est que le point de départ. Les règles mesurent l’indentation, la complexité, les dépendances, les contrats et le nommage — des concepts que tout langage orienté objet exprime. Le guide couvre PHP, C#, Java, C++ et TypeScript.',
    scopeP2:
      'Si votre langage a des classes, des interfaces, des exceptions et un gestionnaire de paquets, la philosophie s’applique. Sinon, ce n’est pas le bon outil — et c’est une réponse légitime.',
  },
  it: {
    kicker: 'Una filosofia per il software orientato agli oggetti',
    titleA: 'La struttura è una decisione,',
    titleB: 'non un incidente.',
    lead:
      'OTAKU è una filosofia per il software orientato agli oggetti. Cinque vincoli decidono cosa può esistere nel codice; tre forme decidono come si organizzano i repository. Nulla qui appartiene a un linguaggio — solo al paradigma.',
    actions: { manifesto: 'Leggi il manifesto', guide: 'Apri la guida', shapes: 'Le tre forme' },
    whyH: 'Perché esiste',
    whyP1:
      'I framework sono eccellenti finché non devi sostituire un pezzo — e allora pretendono che tu li sostituisca tutti. La via d’uscita abituale è la riscrittura, che scambia un insieme di vincoli accidentali con un altro. OTAKU scommette il contrario: architettura fatta di parti abbastanza piccole da capire in una volta, e sostituibili senza permesso.',
    whyP2:
      'Il nome è un acronimo e anche un temperamento: ossessione tecnica per la padronanza, la disciplina e la purezza strutturale — la volontà di eliminare un’astrazione ingegnosa perché non sta in una frase.',
    readH: 'Come leggere questo libro',
    cards: [
      { n: '01', h: 'Il manifesto', p: 'Cinque pilastri, quaranta regole misurabili, una metrica principale.' },
      { n: '02', h: 'Le tre forme', p: 'Atomo, assemblaggio, applicazione. Ogni repository è esattamente una.' },
      { n: '03', h: 'La guida', p: 'Come applicarla, con codice in PHP, C#, Java, C++ e TypeScript.' },
    ],
    refuseH: 'Cosa rifiuta',
    refusals: [
      'Framework che filtrano nel livello di dominio.',
      'Repository che non si classificano come atomo, assemblaggio o applicazione.',
      'Astrazioni create prima del secondo caso d’uso reale.',
      'Metodi con complessità ciclomatica superiore a 5.',
      'Interfacce pubblicate senza contratto.',
    ],
    quote: 'Scrivi codice che non avrà mai bisogno di «riparazioni» perché è stato costruito sotto vincolo assoluto.',
    scopeH: 'Ambito',
    scopeP1:
      'OTAKU è nato dentro PHPRise, ma PHP è solo il punto di partenza. Le regole misurano indentazione, complessità, dipendenze, contratti e denominazione — concetti che ogni linguaggio orientato agli oggetti esprime. La guida copre PHP, C#, Java, C++ e TypeScript.',
    scopeP2:
      'Se il tuo linguaggio ha classi, interfacce, eccezioni e un package manager, la filosofia si applica. Se non li ha, non è lo strumento giusto — e questa è una risposta legittima.',
  },
};
