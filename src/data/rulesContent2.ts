import type { RuleContent } from './rulesContent1';

export const rulesContent2: RuleContent[] = [
  {
    id: 11,
    slug: 'two-constructor-parameters',
    title: { en: 'Two parameters per constructor', 'pt-br': 'Dois parâmetros por construtor' },
    purpose: { en: 'Keep construction explicit and hard to get wrong.', 'pt-br': 'Manter a construção explícita e difícil de errar.' },
    concept: { en: 'A constructor with more than two arguments describes a concept with no name.', 'pt-br': 'Um construtor com mais de dois argumentos descreve um conceito sem nome.' },
    problem: { en: 'Long constructors push callers to pass nulls for the fields they do not have yet.', 'pt-br': 'Construtores longos empurram quem chama a passar null para campos que ainda não tem.' },
    solution: { en: 'Accept a value object, or provide named factories for each valid combination.', 'pt-br': 'Aceite um value object, ou ofereça fábricas nomeadas para cada combinação válida.' },
    check: { en: 'Same lint rule as methods, applied to constructors.', 'pt-br': 'A mesma regra de lint dos métodos, aplicada a construtores.' },
    wrong: {
      php: `new Withdrawal($account, $amount, $currency, $requestedAt);`,
      ts: `new Withdrawal(account, amount, currency, requestedAt);`,
    },
    right: {
      php: `new Withdrawal($account, RequestedAmount::of($amount, $currency, $requestedAt));`,
      ts: `new Withdrawal(account, RequestedAmount.of(amount, currency, requestedAt));`,
    },
  },
  {
    id: 12,
    slug: 'two-methods-per-interface',
    title: { en: 'Two methods per interface', 'pt-br': 'Dois métodos por interface' },
    purpose: { en: 'Keep contracts small enough that every implementer can honour all of them.', 'pt-br': 'Manter contratos pequenos o bastante para todo implementador honrar todos eles.' },
    concept: { en: 'An interface with five methods is usually four interfaces sharing a name.', 'pt-br': 'Uma interface com cinco métodos costuma ser quatro interfaces dividindo um nome.' },
    problem: { en: 'Wide interfaces force fakes to implement methods the test never calls, and hide which capability the caller needs.', 'pt-br': 'Interfaces largas obrigam fakes a implementar métodos que o teste nunca chama, e escondem qual capacidade o chamador precisa.' },
    solution: { en: 'Split by role: readers, writers, notifiers. The caller depends on the smallest one.', 'pt-br': 'Divida por papel: leitores, escritores, notificadores. O chamador depende da menor.' },
    check: { en: 'Review plus a static rule on interface method count.', 'pt-br': 'Revisão mais regra estática de contagem de métodos da interface.' },
    wrong: {
      php: `interface AccountRepository
{
    public function find(AccountId $id): Account;
    public function save(Account $account): void;
    public function delete(AccountId $id): void;
    public function count(): int;
}`,
      ts: `interface AccountRepository {
  find(id: AccountId): Account;
  save(account: Account): void;
  remove(id: AccountId): void;
  count(): number;
}`,
    },
    right: {
      php: `interface Accounts
{
    public function find(AccountId $id): Account;
}

interface AccountWrites
{
    public function save(Account $account): void;
}`,
      ts: `interface Accounts {
  find(id: AccountId): Account;
}

interface AccountWrites {
  save(account: Account): void;
}`,
    },
  },
  {
    id: 13,
    slug: 'no-abbreviations',
    title: { en: 'No abbreviations', 'pt-br': 'Sem abreviações' },
    purpose: { en: 'Make names readable without a glossary.', 'pt-br': 'Tornar nomes legíveis sem glossário.' },
    concept: { en: 'Abbreviations optimise for the writer and tax every future reader.', 'pt-br': 'Abreviações otimizam para quem escreve e cobram de todo leitor futuro.' },
    problem: { en: 'Every team invents its own shortlist: usr, user, u, cli, cust — and the codebase becomes an acronym soup.', 'pt-br': 'Cada equipe inventa sua própria lista: usr, user, u, cli, cust — e o código vira sopa de siglas.' },
    solution: { en: 'Spell it out. The extra characters cost nothing at runtime and buy clarity forever.', 'pt-br': 'Escreva por extenso. Os caracteres extras não custam nada em runtime e compram clareza para sempre.' },
    check: { en: 'Grep for a blocklist of common abbreviations in public names.', 'pt-br': 'Grep por uma blocklist de abreviações comuns em nomes públicos.' },
    wrong: {
      php: `public function upd(Rq $req, Svc $svc, Cfg $cfg): void`,
      ts: `function upd(req: Rq, svc: Svc, cfg: Cfg): void`,
    },
    right: {
      php: `public function update(Request $request, Service $service, Configuration $configuration): void`,
      ts: `function update(request: Request, service: Service, configuration: Configuration): void`,
    },
  },
  {
    id: 14,
    slug: 'boolean-naming',
    title: { en: 'Boolean method names', 'pt-br': 'Nomes de métodos booleanos' },
    purpose: { en: 'Make a condition read as a question.', 'pt-br': 'Fazer uma condição ser lida como uma pergunta.' },
    concept: { en: 'Boolean methods start with is, has, can or should — never with a noun or a verb that suggests an action.', 'pt-br': 'Métodos booleanos começam com is, has, can ou should — nunca com substantivo ou verbo que sugira ação.' },
    problem: { en: 'A method called active() could return a boolean, a state object or a list; the caller guesses.', 'pt-br': 'Um método chamado active() pode devolver booleano, objeto de estado ou lista; quem chama adivinha.' },
    solution: { en: 'Prefix the predicate. If the name needs “check” or “verify”, the method is doing something else.', 'pt-br': 'Prefixe o predicado. Se o nome precisa de “check” ou “verify”, o método está fazendo outra coisa.' },
    check: { en: 'Naming convention test or static rule on boolean return types.', 'pt-br': 'Teste de convenção de nomes ou regra estática sobre tipos booleanos.' },
    wrong: {
      php: `public function active(): bool
{
    return $this->status === Status::Active;
}`,
      ts: `active(): boolean {
  return this.status === Status.Active;
}`,
    },
    right: {
      php: `public function isActive(): bool
{
    return $this->status === Status::Active;
}`,
      ts: `isActive(): boolean {
  return this.status === Status.Active;
}`,
    },
  },
  {
    id: 15,
    slug: 'verb-method-names',
    title: { en: 'Methods start with a verb', 'pt-br': 'Métodos começam com um verbo' },
    purpose: { en: 'Say what the method does, not what it is about.', 'pt-br': 'Dizer o que o método faz, não sobre o que ele é.' },
    concept: { en: 'Method names are commands: calculateTotal, sendReceipt, withdraw. Nouns are for values and types.', 'pt-br': 'Nomes de método são comandos: calculateTotal, sendReceipt, withdraw. Substantivos são para valores e tipos.' },
    problem: { en: 'A noun name hides whether the call mutates, queries or only formats.', 'pt-br': 'Um nome substantivo esconde se a chamada muta, consulta ou apenas formata.' },
    solution: { en: 'Rename to verb + object. If no verb fits, the method probably does two things.', 'pt-br': 'Renomeie para verbo + objeto. Se nenhum verbo serve, o método provavelmente faz duas coisas.' },
    check: { en: 'Review checklist; naming linters can flag public methods.', 'pt-br': 'Checklist de revisão; linters de nomes podem apontar métodos públicos.' },
    wrong: {
      php: `public function total(): Money`,
      ts: `total(): Money`,
    },
    right: {
      php: `public function calculateTotal(): Money`,
      ts: `calculateTotal(): Money`,
    },
  },
  {
    id: 16,
    slug: 'constant-naming',
    title: { en: 'Constant case', 'pt-br': 'Caixa de constantes' },
    purpose: { en: 'Make constants visually distinct from variables.', 'pt-br': 'Tornar constantes visualmente distintas de variáveis.' },
    concept: { en: 'Constants are UPPER_SNAKE_CASE in every language that allows the convention.', 'pt-br': 'Constantes são UPPER_SNAKE_CASE em toda linguagem que permite a convenção.' },
    problem: { en: 'When constants look like variables, readers assume they can change.', 'pt-br': 'Quando constantes parecem variáveis, leitores assumem que podem mudar.' },
    solution: { en: 'Apply the case and, where the language allows, make the binding immutable.', 'pt-br': 'Aplique a caixa e, quando a linguagem permitir, torne o binding imutável.' },
    check: { en: 'Formatter enforces the case for constants.', 'pt-br': 'O formatador garante a caixa das constantes.' },
    wrong: {
      php: `const maxRetryCount = 3;`,
      ts: `const maxRetryCount = 3;`,
    },
    right: {
      php: `const MAX_RETRY_COUNT = 3;`,
      ts: `const MAX_RETRY_COUNT = 3;`,
    },
  },
  {
    id: 17,
    slug: 'camel-case',
    title: { en: 'camelCase for members', 'pt-br': 'camelCase para membros' },
    purpose: { en: 'Keep one naming convention across properties and methods.', 'pt-br': 'Manter uma convenção de nomes entre propriedades e métodos.' },
    concept: { en: 'Properties and methods use camelCase; types use PascalCase. The convention is the cheapest documentation that exists.', 'pt-br': 'Propriedades e métodos usam camelCase; tipos usam PascalCase. A convenção é a documentação mais barata que existe.' },
    problem: { en: 'Mixed conventions make the reader check the declaration to know whether a name is a type or a value.', 'pt-br': 'Convenções mistas fazem o leitor consultar a declaração para saber se um nome é tipo ou valor.' },
    solution: { en: 'Let the formatter decide; do not debate naming in review.', 'pt-br': 'Deixe o formatador decidir; não discuta nomes na revisão.' },
    check: { en: 'PHP-CS-Fixer, EditorConfig + Roslyn, ESLint naming rules.', 'pt-br': 'PHP-CS-Fixer, EditorConfig + Roslyn, regras de nomeação do ESLint.' },
    wrong: {
      php: `private Money $Balance;`,
      ts: `private Balance: Money;`,
    },
    right: {
      php: `private Money $balance;`,
      ts: `private balance: Money;`,
    },
  },
  {
    id: 18,
    slug: 'first-class-collections',
    title: { en: 'First-class collections', 'pt-br': 'Coleções de primeira classe' },
    purpose: { en: 'Give a collection its own type and its own invariants.', 'pt-br': 'Dar à coleção um tipo próprio e invariantes próprias.' },
    concept: { en: 'A class that holds a collection holds nothing else. Filtering, ordering and count logic move inside it.', 'pt-br': 'Uma classe que guarda uma coleção não guarda mais nada. Filtro, ordenação e contagem vão para dentro dela.' },
    problem: { en: 'Arrays passed around carry no rules: every caller re-implements the same filter and forgets one case.', 'pt-br': 'Arrays circulando não carregam regras: cada chamador reimplementa o mesmo filtro e esquece um caso.' },
    solution: { en: 'Wrap the array, expose behaviour (not the array), and let the collection answer the questions it owns.', 'pt-br': 'Envolva o array, exponha comportamento (não o array) e deixe a coleção responder às perguntas que ela possui.' },
    check: { en: 'Review: any public method returning a raw array of domain objects is a finding.', 'pt-br': 'Revisão: qualquer método público que devolve array cru de objetos de domínio é um achado.' },
    wrong: {
      php: `/** @var Route[] */
private array $routes;

public function find(string $path): ?Route
{
    foreach ($this->routes as $route) {
        if ($route->path() === $path) {
            return $route;
        }
    }
    return null;
}`,
      ts: `private routes: Route[];

find(path: string): Route | undefined {
  return this.routes.find((route) => route.path === path);
}`,
    },
    right: {
      php: `final class RouteMap
{
    /** @param list<Route> $routes */
    private function __construct(private array $routes) {}

    public function resolve(RoutePath $path): Route
    {
        return $this->matching($path) ?? throw new RouteNotFound($path);
    }

    private function matching(RoutePath $path): ?Route
    {
        foreach ($this->routes as $route) {
            if ($route->matches($path)) {
                return $route;
            }
        }
        return null;
    }
}`,
      ts: `class RouteMap {
  private constructor(private readonly routes: readonly Route[]) {}

  resolve(path: RoutePath): Route {
    const found = this.routes.find((route) => route.matches(path));

    if (!found) throw new RouteNotFound(path);

    return found;
  }
}`,
    },
  },
  {
    id: 19,
    slug: 'one-dot-per-line',
    title: { en: 'One dot per line', 'pt-br': 'Um ponto por linha' },
    purpose: { en: 'Limit how much of another object’s structure a caller must know.', 'pt-br': 'Limitar quanto da estrutura de outro objeto o chamador precisa conhecer.' },
    concept: { en: 'A chain like a.b().c().d() means the caller knows four objects it does not own (Law of Demeter).', 'pt-br': 'Uma cadeia como a.b().c().d() significa que o chamador conhece quatro objetos que não possui (Lei de Demeter).' },
    problem: { en: 'When the middle object changes shape, every chain through it breaks.', 'pt-br': 'Quando o objeto do meio muda de forma, toda cadeia que passa por ele quebra.' },
    solution: { en: 'Ask the object you already have. If it cannot answer, the behaviour is in the wrong place.', 'pt-br': 'Pergunte ao objeto que você já tem. Se ele não consegue responder, o comportamento está no lugar errado.' },
    check: { en: 'Review: fluent builders are the documented exception.', 'pt-br': 'Revisão: builders fluentes são a exceção documentada.' },
    wrong: {
      php: `return $this->registry->find($name)->host()->value();`,
      ts: `return this.registry.find(name).host().value();`,
    },
    right: {
      php: `$service = $this->registry->find($name);

return $service->hostValue();`,
      ts: `const service = this.registry.find(name);

return service.hostValue();`,
    },
  },
  {
    id: 20,
    slug: 'no-static',
    title: { en: 'No static methods', 'pt-br': 'Sem métodos estáticos' },
    purpose: { en: 'Keep dependencies visible and behaviour replaceable.', 'pt-br': 'Manter dependências visíveis e comportamento substituível.' },
    concept: { en: 'Static methods are global functions with a namespace. Only factories and genuinely pure functions are allowed.', 'pt-br': 'Métodos estáticos são funções globais com namespace. Só fábricas e funções genuinamente puras são permitidas.' },
    problem: { en: 'A static call cannot be faked, so tests reach the real database, clock or network.', 'pt-br': 'Uma chamada estática não pode ser falsificada, então testes alcançam o banco, o relógio ou a rede de verdade.' },
    solution: { en: 'Inject an instance behind an interface. Keep static only for value construction and pure math.', 'pt-br': 'Injete uma instância atrás de uma interface. Mantenha static só para construção de valores e matemática pura.' },
    check: { en: 'Static analysis flags static methods outside factories.', 'pt-br': 'Análise estática aponta métodos estáticos fora de fábricas.' },
    wrong: {
      php: `$user = User::find($id);`,
      ts: `const user = User.find(id);`,
    },
    right: {
      php: `$user = $this->users->find($id);`,
      ts: `const user = this.users.find(id);`,
    },
  },
  {
    id: 21,
    slug: 'command-query-separation',
    title: { en: 'Commands and queries', 'pt-br': 'Comandos e consultas' },
    purpose: { en: 'Make each method either ask a question or change the world — never both.', 'pt-br': 'Fazer cada método perguntar ou mudar o mundo — nunca os dois.' },
    concept: { en: 'A query returns a value and has no side effects; a command changes state and returns nothing meaningful.', 'pt-br': 'Uma consulta devolve valor e não tem efeito colateral; um comando muda estado e não devolve nada significativo.' },
    problem: { en: 'When a getter also saves, every read becomes a write and caching becomes impossible.', 'pt-br': 'Quando um getter também salva, toda leitura vira escrita e cache fica impossível.' },
    solution: { en: 'Split the method: one returns the decision, another applies it.', 'pt-br': 'Divida o método: um devolve a decisão, outro a aplica.' },
    check: { en: 'Review: value-returning methods must not persist, send or log as a side effect.', 'pt-br': 'Revisão: métodos que devolvem valor não podem persistir, enviar ou logar como efeito colateral.' },
    wrong: {
      php: `public function total(): Money
{
    $this->orders->save($this->order);
    return $this->order->total();
}`,
      ts: `total(): Money {
  this.orders.save(this.order);
  return this.order.total();
}`,
    },
    right: {
      php: `public function total(): Money
{
    return $this->order->total();
}

public function confirm(): void
{
    $this->orders->save($this->order);
}`,
      ts: `total(): Money {
  return this.order.total();
}

confirm(): void {
  this.orders.save(this.order);
}`,
    },
  },
  {
    id: 22,
    slug: 'pure-functions',
    title: { en: 'Prefer pure functions', 'pt-br': 'Prefira funções puras' },
    purpose: { en: 'Make behaviour predictable and testable with a value comparison.', 'pt-br': 'Tornar o comportamento previsível e testável com comparação de valores.' },
    concept: { en: 'Same input, same output, no hidden state. Purity is a spectrum; move as far toward it as the problem allows.', 'pt-br': 'Mesma entrada, mesma saída, sem estado oculto. Pureza é um espectro; vá o mais longe que o problema permitir.' },
    problem: { en: 'Functions that read the clock or a global cannot be tested without freezing time or mocking the world.', 'pt-br': 'Funções que leem o relógio ou um global não podem ser testadas sem congelar o tempo ou mockar o mundo.' },
    solution: { en: 'Pass what varies as a parameter. A pure core with impure edges is the same idea as Armor the Core.', 'pt-br': 'Passe o que varia como parâmetro. Um núcleo puro com bordas impuras é a mesma ideia de Blindar o Núcleo.' },
    check: { en: 'Review plus tests: a pure function needs no setup, only a table of cases.', 'pt-br': 'Revisão mais testes: uma função pura não precisa de setup, apenas de uma tabela de casos.' },
    wrong: {
      php: `public function isExpired(): bool
{
    return $this->expiresAt < new DateTimeImmutable();
}`,
      ts: `isExpired(): boolean {
  return this.expiresAt < new Date();
}`,
    },
    right: {
      php: `public function isExpiredAt(DateTimeImmutable $now): bool
{
    return $this->expiresAt < $now;
}`,
      ts: `isExpiredAt(now: Date): boolean {
  return this.expiresAt < now;
}`,
    },
  },
  {
    id: 23,
    slug: 'no-globals',
    title: { en: 'No global state or singletons', 'pt-br': 'Sem estado global ou singletons' },
    purpose: { en: 'Make the dependency graph explicit and the system reproducible.', 'pt-br': 'Tornar o grafo de dependências explícito e o sistema reproduzível.' },
    concept: { en: 'A singleton is a global with a constructor. It hides a dependency and survives between tests.', 'pt-br': 'Um singleton é um global com construtor. Ele esconde uma dependência e sobrevive entre testes.' },
    problem: { en: 'Global state makes tests order-dependent and production incidents impossible to reproduce.', 'pt-br': 'Estado global faz testes dependerem de ordem e incidentes de produção impossíveis de reproduzir.' },
    solution: { en: 'Construct once at the composition root and pass it in. One instance is a decision, not a language feature.', 'pt-br': 'Construa uma vez na raiz de composição e passe adiante. Uma instância é uma decisão, não um recurso da linguagem.' },
    check: { en: 'Grep for getInstance, static properties and module-level mutable state.', 'pt-br': 'Grep por getInstance, propriedades estáticas e estado mutável em nível de módulo.' },
    wrong: {
      php: `$clock = Clock::getInstance();`,
      ts: `const clock = Clock.getInstance();`,
    },
    right: {
      php: `final class Expiry
{
    public function __construct(private Clock $clock) {}
}`,
      ts: `class Expiry {
  constructor(private readonly clock: Clock) {}
}`,
    },
  },
  {
    id: 24,
    slug: 'small-functions',
    title: { en: 'Small, focused functions', 'pt-br': 'Funções pequenas e focadas' },
    purpose: { en: 'Make each function name a single step you can reuse and test alone.', 'pt-br': 'Fazer cada função nomear um passo único que você pode reutilizar e testar sozinho.' },
    concept: { en: 'Extract as soon as a block does more than one thing, even if it is only three lines.', 'pt-br': 'Extraia assim que um bloco fizer mais de uma coisa, mesmo que sejam só três linhas.' },
    problem: { en: 'A function that mixes validation, persistence and formatting cannot be reused without dragging the database along.', 'pt-br': 'Uma função que mistura validação, persistência e formatação não pode ser reutilizada sem arrastar o banco junto.' },
    solution: { en: 'Name the step and let the caller compose. Small functions are the unit of review.', 'pt-br': 'Nomeie o passo e deixe o chamador compor. Funções pequenas são a unidade de revisão.' },
    check: { en: 'Complexity and line-count rules catch this automatically.', 'pt-br': 'As regras de complexidade e tamanho pegam isso automaticamente.' },
    wrong: {
      php: `public function send(array $data): void
{
    $email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
    $body = str_replace('{name}', $data['name'], $this->template);
    $this->mailer->send($email, $body);
    $this->logger->info('sent', ['email' => $email]);
}`,
      ts: `send(data: { email: string; name: string }): void {
  const body = this.template.replace("{name}", data.name);
  this.mailer.send(data.email, body);
  this.logger.info("sent", { email: data.email });
}`,
    },
    right: {
      php: `public function send(Recipient $recipient, Message $message): void
{
    $this->mailer->send($recipient, $message);
    $this->logger->info('sent', ['email' => $recipient->value()]);
}`,
      ts: `send(recipient: Recipient, message: Message): void {
  this.mailer.send(recipient, message);
  this.logger.info("sent", { email: recipient.value });
}`,
    },
  },
  {
    id: 25,
    slug: 'no-getters-setters',
    title: { en: 'No getters, setters or public properties', 'pt-br': 'Sem getters, setters ou propriedades públicas' },
    purpose: { en: 'Make the object, not its callers, responsible for its own state.', 'pt-br': 'Fazer o objeto, e não seus chamadores, responsável pelo próprio estado.' },
    concept: { en: 'The object exposes behaviour, not data. Asking for state and changing it outside is procedural code wearing a class.', 'pt-br': 'O objeto expõe comportamento, não dados. Pedir estado e mudá-lo fora é código procedural vestido de classe.' },
    problem: { en: 'Removing the getter but making the field public is worse: now no one guards the invariant.', 'pt-br': 'Remover o getter e tornar o campo público é pior: agora ninguém guarda a invariante.' },
    solution: { en: 'Move the operation into the object: withdraw instead of setBalance, renew instead of setExpiry.', 'pt-br': 'Mova a operação para dentro do objeto: withdraw em vez de setBalance, renew em vez de setExpiry.' },
    check: { en: 'Review: public setters and mutable public fields are findings; getters need a business justification.', 'pt-br': 'Revisão: setters públicos e campos públicos mutáveis são achados; getters precisam de justificativa de negócio.' },
    wrong: {
      php: `$account->setBalance($account->getBalance() - 500);`,
      ts: `account.setBalance(account.getBalance() - 500);`,
    },
    right: {
      php: `$account = $account->withdraw(Money::fromCents(500));`,
      ts: `account = account.withdraw(Money.fromCents(500));`,
    },
  },
];
