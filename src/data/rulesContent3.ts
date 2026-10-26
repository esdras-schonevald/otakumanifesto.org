import type { RuleContent } from './rulesContent1';

export const rulesContent3: RuleContent[] = [
  {
    id: 26,
    slug: 'private-properties',
    title: { en: 'Private properties by default', 'pt-br': 'Propriedades privadas por padrão' },
    purpose: { en: 'Keep the internal shape of a class out of its contract.', 'pt-br': 'Manter a forma interna da classe fora do contrato.' },
    concept: { en: 'Private is the default. Protected exists only for framework inheritance you cannot avoid.', 'pt-br': 'Privado é o padrão. Protected existe só para herança de framework que você não consegue evitar.' },
    problem: { en: 'Protected fields invite subclasses to depend on internals, freezing the design.', 'pt-br': 'Campos protected convidam subclasses a depender de detalhes internos, congelando o design.' },
    solution: { en: 'Make it private and expose behaviour. If a subclass needs data, it needs a different collaboration.', 'pt-br': 'Torne privado e exponha comportamento. Se uma subclasse precisa de dados, ela precisa de outra colaboração.' },
    check: { en: 'Static analysis or review: no protected mutable state.', 'pt-br': 'Análise estática ou revisão: nenhum estado mutável protected.' },
    wrong: {
      php: `protected Money $balance;`,
      ts: `protected balance: Money;`,
    },
    right: {
      php: `private Money $balance;`,
      ts: `private balance: Money;`,
    },
  },
  {
    id: 27,
    slug: 'final-classes',
    title: { en: 'Classes are final by default', 'pt-br': 'Classes são finais por padrão' },
    purpose: { en: 'Keep extension a deliberate decision instead of an accident.', 'pt-br': 'Fazer da extensão uma decisão deliberada, não um acidente.' },
    concept: { en: 'A class you did not design for inheritance must not be inherited. Extension happens through interfaces.', 'pt-br': 'Uma classe que você não desenhou para herança não deve ser herdada. A extensão acontece por interfaces.' },
    problem: { en: 'Every non-final class is an undocumented promise that its internals will not change.', 'pt-br': 'Toda classe não final é uma promessa não documentada de que seus internos não mudarão.' },
    solution: { en: 'Mark it final or sealed. If variation is expected, extract an interface and compose.', 'pt-br': 'Marque como final ou sealed. Se a variação é esperada, extraia uma interface e componha.' },
    check: { en: 'Static rule: classes must be final unless annotated as extensible.', 'pt-br': 'Regra estática: classes devem ser final salvo anotação de extensibilidade.' },
    wrong: {
      php: `class Invoice {}`,
      ts: `class Invoice {}`,
    },
    right: {
      php: `final class Invoice {}`,
      ts: `final class Invoice {}`,
    },
  },
  {
    id: 28,
    slug: 'no-inheritance',
    title: { en: 'No inheritance', 'pt-br': 'Sem herança' },
    purpose: { en: 'Replace type hierarchy with composition and contracts.', 'pt-br': 'Substituir hierarquia de tipos por composição e contratos.' },
    concept: { en: 'Inheritance copies implementation. Composition injects behaviour. Only framework base classes are exempt.', 'pt-br': 'Herança copia implementação. Composição injeta comportamento. Só classes base de framework são exceção.' },
    problem: { en: 'Deep hierarchies make behaviour hard to locate: the method you call may live five levels up.', 'pt-br': 'Hierarquias profundas dificultam localizar comportamento: o método chamado pode estar cinco níveis acima.' },
    solution: { en: 'Extract an interface, implement it, and delegate shared code to a collaborator.', 'pt-br': 'Extraia uma interface, implemente e delegue o código comum a um colaborador.' },
    check: { en: 'Static rule: no extends other than framework classes.', 'pt-br': 'Regra estática: nenhum extends além de classes de framework.' },
    wrong: {
      php: `final class PremiumInvoice extends Invoice {}`,
      ts: `class PremiumInvoice extends Invoice {}`,
    },
    right: {
      php: `final class PremiumInvoice implements Invoice
{
    public function __construct(private InvoiceLines $lines, private Discount $discount) {}
}`,
      ts: `class PremiumInvoice implements Invoice {
  constructor(
    private readonly lines: InvoiceLines,
    private readonly discount: Discount,
  ) {}
}`,
    },
  },
  {
    id: 29,
    slug: 'validate-at-the-boundary',
    title: { en: 'Validate at the boundary', 'pt-br': 'Valide na fronteira' },
    purpose: { en: 'Guarantee that an object can never exist in an invalid state.', 'pt-br': 'Garantir que um objeto nunca exista em estado inválido.' },
    concept: { en: 'Constructors and public methods validate. After that, the type itself is the proof.', 'pt-br': 'Construtores e métodos públicos validam. Depois disso, o próprio tipo é a prova.' },
    problem: { en: 'When validation is spread across callers, one of them eventually forgets.', 'pt-br': 'Quando a validação está espalhada pelos chamadores, um deles acaba esquecendo.' },
    solution: { en: 'Validate once, in the constructor, and throw a domain exception that names the violated rule.', 'pt-br': 'Valide uma vez, no construtor, e lance exceção de domínio que nomeia a regra violada.' },
    check: { en: 'Tests for every invalid input at construction time.', 'pt-br': 'Testes para toda entrada inválida no momento da construção.' },
    wrong: {
      php: `$email = $request->get('email'); // trusted everywhere`,
      ts: `const email = request.get("email"); // trusted everywhere`,
    },
    right: {
      php: `final class Email
{
    private function __construct(private string $value) {}

    public static function fromString(string $value): self
    {
        if (filter_var($value, FILTER_VALIDATE_EMAIL) === false) {
            throw new InvalidEmail($value);
        }
        return new self($value);
    }
}`,
      ts: `class Email {
  private constructor(private readonly value: string) {}

  static fromString(value: string): Email {
    if (!value.includes("@")) throw new InvalidEmail(value);
    return new Email(value);
  }
}`,
    },
  },
  {
    id: 30,
    slug: 'fail-fast',
    title: { en: 'Fail fast', 'pt-br': 'Falhe rápido' },
    purpose: { en: 'Surface the error where it happened, not three layers later.', 'pt-br': 'Mostrar o erro onde ele aconteceu, não três camadas depois.' },
    concept: { en: 'When a precondition is violated, throw immediately. Silent defaults turn bugs into data corruption.', 'pt-br': 'Quando uma pré-condição é violada, lance imediatamente. Padrões silenciosos transformam bugs em corrupção de dados.' },
    problem: { en: 'A method that returns zero on failure hides the defect until the reconciliation report.', 'pt-br': 'Um método que devolve zero em falha esconde o defeito até o relatório de conciliação.' },
    solution: { en: 'Guard at the top and throw a specific exception. Let the caller decide how to recover.', 'pt-br': 'Guarde no topo e lance exceção específica. Deixe o chamador decidir como se recuperar.' },
    check: { en: 'Review: no swallowed exceptions, no catch that returns null.', 'pt-br': 'Revisão: sem exceções engolidas, sem catch que devolve null.' },
    wrong: {
      php: `public function withdraw(Money $amount): void
{
    if ($amount->isNegative()) {
        return;
    }
    // ...
}`,
      ts: `withdraw(amount: Money): void {
  if (amount.isNegative()) return;
  // ...
}`,
    },
    right: {
      php: `public function withdraw(Money $amount): void
{
    if ($amount->isNegative()) {
        throw new InvalidAmount($amount);
    }
    // ...
}`,
      ts: `withdraw(amount: Money): void {
  if (amount.isNegative()) throw new InvalidAmount(amount);
  // ...
}`,
    },
  },
  {
    id: 31,
    slug: 'no-input-mutation',
    title: { en: 'Never mutate inputs', 'pt-br': 'Nunca mute entradas' },
    purpose: { en: 'Make a function unable to damage the caller’s state.', 'pt-br': 'Fazer uma função incapaz de danificar o estado do chamador.' },
    concept: { en: 'Parameters are inputs. Changing them is an invisible output that the signature does not declare.', 'pt-br': 'Parâmetros são entradas. Alterá-los é uma saída invisível que a assinatura não declara.' },
    problem: { en: 'A function that sorts the caller’s list reorders data nobody expected to change.', 'pt-br': 'Uma função que ordena a lista do chamador reordena dados que ninguém esperava mudar.' },
    solution: { en: 'Copy before changing, or return a new value. Prefer immutable types where the language offers them.', 'pt-br': 'Copie antes de mudar, ou devolva um novo valor. Prefira tipos imutáveis onde a linguagem oferecer.' },
    check: { en: 'Review: any assignment to a parameter or nested field is a finding.', 'pt-br': 'Revisão: qualquer atribuição a parâmetro ou campo aninhado é um achado.' },
    wrong: {
      php: `public function applyDiscount(Order $order): void
{
    $order->total = $order->total - 500;
}`,
      ts: `function applyDiscount(order: Order): void {
  order.total -= 500;
}`,
    },
    right: {
      php: `public function withDiscount(Order $order): Order
{
    return $order->withTotal($order->total()->subtract(Money::of(500)));
}`,
      ts: `function withDiscount(order: Order): Order {
  return order.withTotal(order.total.subtract(Money.of(500)));
}`,
    },
  },
  {
    id: 32,
    slug: 'immutability',
    title: { en: 'Prefer immutability', 'pt-br': 'Prefira imutabilidade' },
    purpose: { en: 'Remove whole classes of bugs by removing mutation from the model.', 'pt-br': 'Remover classes inteiras de bugs removendo a mutação do modelo.' },
    concept: { en: 'Readonly properties and new instances make change explicit. A method either returns the next state or does nothing.', 'pt-br': 'Propriedades readonly e novas instâncias tornam a mudança explícita. Um método devolve o próximo estado ou não faz nada.' },
    problem: { en: 'Shared mutable objects change behind the caller’s back, and concurrency turns it into a race.', 'pt-br': 'Objetos mutáveis compartilhados mudam pelas costas do chamador, e concorrência transforma isso em corrida.' },
    solution: { en: 'Mark fields readonly and return copies. Mutate only at the infrastructure edge.', 'pt-br': 'Marque campos readonly e devolva cópias. Mute apenas na borda de infraestrutura.' },
    check: { en: 'Lint rule for reassignment; review of setters.', 'pt-br': 'Regra de lint para reatribuição; revisão de setters.' },
    wrong: {
      php: `final class Money
{
    public int $cents;
}`,
      ts: `class Money {
  public cents: number;
}`,
    },
    right: {
      php: `final class Money
{
    private function __construct(private readonly int $cents) {}

    public function subtract(Money $other): self
    {
        return new self($this->cents - $other->cents);
    }
}`,
      ts: `class Money {
  private constructor(private readonly cents: number) {}

  subtract(other: Money): Money {
    return new Money(this.cents - other.cents);
  }
}`,
    },
  },
  {
    id: 33,
    slug: 'empty-collections-not-null',
    title: { en: 'Empty collections, never null', 'pt-br': 'Coleções vazias, nunca null' },
    purpose: { en: 'Let the caller iterate without a null check.', 'pt-br': 'Deixar o chamador iterar sem checar null.' },
    concept: { en: 'A collection that may be null has two empty states. Return an empty collection and keep one.', 'pt-br': 'Uma coleção que pode ser null tem dois estados vazios. Devolva coleção vazia e mantenha um.' },
    problem: { en: 'Null collections force defensive code everywhere and still produce the occasional TypeError.', 'pt-br': 'Coleções null forçam código defensivo em todo lugar e ainda produzem um TypeError ocasional.' },
    solution: { en: 'Return an empty collection or an empty collection object.', 'pt-br': 'Devolva uma coleção vazia ou um objeto de coleção vazio.' },
    check: { en: 'Declare non-nullable collection return types.', 'pt-br': 'Declare tipos de retorno de coleção não anuláveis.' },
    wrong: {
      php: `public function items(): ?array
{
    return $this->items ?: null;
}`,
      ts: `items(): Item[] | null {
  return this.items.length ? this.items : null;
}`,
    },
    right: {
      php: `public function items(): array
{
    return $this->items;
}`,
      ts: `items(): readonly Item[] {
  return this.items;
}`,
    },
  },
  {
    id: 34,
    slug: 'result-or-exception',
    title: { en: 'Result or exception, never null', 'pt-br': 'Result ou exceção, nunca null' },
    purpose: { en: 'Make failure a declared part of the contract.', 'pt-br': 'Fazer da falha parte declarada do contrato.' },
    concept: { en: 'A method that may fail returns Result/Either or throws. Null is not a failure channel.', 'pt-br': 'Um método que pode falhar devolve Result/Either ou lança. Null não é canal de falha.' },
    problem: { en: 'Null merges “not found”, “not allowed” and “not computed yet” into one useless value.', 'pt-br': 'Null funde “não encontrado”, “não permitido” e “ainda não calculado” em um valor inútil.' },
    solution: { en: 'Use an explicit result type for expected failures and exceptions for programming errors.', 'pt-br': 'Use tipo de resultado explícito para falhas esperadas e exceções para erros de programação.' },
    check: { en: 'Make return types non-nullable; review every nullable return.', 'pt-br': 'Torne tipos de retorno não anuláveis; revise todo retorno anulável.' },
    wrong: {
      php: `public function find(AccountId $id): ?Account
{
    return $this->accounts[$id->value()] ?? null;
}`,
      ts: `find(id: AccountId): Account | null {
  return this.accounts.get(id.value) ?? null;
}`,
    },
    right: {
      php: `public function find(AccountId $id): Account
{
    return $this->accounts[$id->value()] ?? throw new AccountNotFound($id);
}`,
      ts: `find(id: AccountId): Account {
  const account = this.accounts.get(id.value);
  if (!account) throw new AccountNotFound(id);
  return account;
}`,
    },
  },
  {
    id: 35,
    slug: 'explicit-over-implicit',
    title: { en: 'Explicit over implicit', 'pt-br': 'Explícito em vez de implícito' },
    purpose: { en: 'Make the code say what it needs and what it does.', 'pt-br': 'Fazer o código dizer o que precisa e o que faz.' },
    concept: { en: 'Hidden dependencies, magic methods and implicit conversions all save typing now and cost a debugging session later.', 'pt-br': 'Dependências ocultas, métodos mágicos e conversões implícitas economizam digitação agora e custam uma sessão de debug depois.' },
    problem: { en: 'A magic getter that queries the database makes a property access look free.', 'pt-br': 'Um getter mágico que consulta o banco faz um acesso a propriedade parecer gratuito.' },
    solution: { en: 'Inject, name and declare. If a call is expensive, its name must say so.', 'pt-br': 'Injete, nomeie e declare. Se uma chamada é caro, o nome precisa dizer.' },
    check: { en: 'Review: no __get/__call/Proxy-based hidden dependencies.', 'pt-br': 'Revisão: sem dependências ocultas via __get/__call/Proxy.' },
    wrong: {
      php: `final class Report
{
    public function total(): Money
    {
        return $this->db()->query('SELECT ...');
    }
}`,
      ts: `class Report {
  total(): Money {
    return db.query("SELECT ...");
  }
}`,
    },
    right: {
      php: `final class Report
{
    public function __construct(private Ledger $ledger) {}

    public function total(): Money
    {
        return $this->ledger->totalFor($this->period);
    }
}`,
      ts: `class Report {
  constructor(private readonly ledger: Ledger) {}

  total(): Money {
    return this.ledger.totalFor(this.period);
  }
}`,
    },
  },
  {
    id: 36,
    slug: 'no-infrastructure-leaks',
    title: { en: 'No infrastructure in the domain', 'pt-br': 'Sem infraestrutura no domínio' },
    purpose: { en: 'Keep the business model independent of vendors.', 'pt-br': 'Manter o modelo de negócio independente de fornecedores.' },
    concept: { en: 'SQL, HTTP clients, file paths and framework annotations are details. They live in adapters.', 'pt-br': 'SQL, clientes HTTP, caminhos de arquivo e anotações de framework são detalhes. Vivem em adaptadores.' },
    problem: { en: 'An entity annotated with ORM metadata cannot be tested, moved or reused without the framework.', 'pt-br': 'Uma entidade anotada com metadados de ORM não pode ser testada, movida ou reutilizada sem o framework.' },
    solution: { en: 'Map at the boundary: a persistence model outside, a domain model inside.', 'pt-br': 'Mapeie na fronteira: modelo de persistência fora, modelo de domínio dentro.' },
    check: { en: 'Architecture test: domain must not import infrastructure packages.', 'pt-br': 'Teste de arquitetura: domínio não pode importar pacotes de infraestrutura.' },
    wrong: {
      php: `use Doctrine\\ORM\\Mapping as ORM;

#[ORM\\Entity]
final class Account
{
    #[ORM\\Column]
    private int $balance;
}`,
      ts: `import { Column, Entity } from "typeorm";

@Entity()
class Account {
  @Column()
  balance: number;
}`,
    },
    right: {
      php: `final class Account
{
    private function __construct(private Money $balance) {}

    public function withdraw(Money $amount): self { /* ... */ }
}`,
      ts: `class Account {
  private constructor(private readonly balance: Money) {}

  withdraw(amount: Money): Account { /* ... */ }
}`,
    },
  },
  {
    id: 37,
    slug: 'value-objects',
    title: { en: 'Wrap primitives in value objects', 'pt-br': 'Envolva primitivos em value objects' },
    purpose: { en: 'Give meaning and validation to every value that has rules.', 'pt-br': 'Dar significado e validação a todo valor que tem regras.' },
    concept: { en: 'A string with rules is not a string. Equality, formatting and validation belong to the type.', 'pt-br': 'Uma string com regras não é uma string. Igualdade, formatação e validação pertencem ao tipo.' },
    problem: { en: 'Raw strings travel through layers and are validated in three places, differently.', 'pt-br': 'Strings cruas atravessam camadas e são validadas em três lugares, de formas diferentes.' },
    solution: { en: 'Create a small immutable type with a factory that validates once.', 'pt-br': 'Crie um tipo imutável pequeno com uma fábrica que valida uma vez.' },
    check: { en: 'Review: public signatures with string/int for domain concepts.', 'pt-br': 'Revisão: assinaturas públicas com string/int para conceitos de domínio.' },
    wrong: {
      php: `public function register(string $email, string $document): void`,
      ts: `function register(email: string, document: string): void`,
    },
    right: {
      php: `public function register(Email $email, Document $document): void`,
      ts: `function register(email: Email, document: Document): void`,
    },
  },
  {
    id: 38,
    slug: 'no-generic-types',
    title: { en: 'No generic types', 'pt-br': 'Sem tipos genéricos' },
    purpose: { en: 'Keep types honest so the compiler can help.', 'pt-br': 'Manter os tipos honestos para o compilador ajudar.' },
    concept: { en: 'mixed, array, object and any erase information. They are allowed only at explicit serialization boundaries.', 'pt-br': 'mixed, array, object e any apagam informação. São permitidos só em fronteiras explícitas de serialização.' },
    problem: { en: 'An array parameter accepts anything and proves nothing; every access needs a cast and a prayer.', 'pt-br': 'Um parâmetro array aceita qualquer coisa e não prova nada; todo acesso exige cast e uma reza.' },
    solution: { en: 'Type the shape: a value object, a collection class or a DTO with named fields.', 'pt-br': 'Tipar a forma: um value object, uma classe de coleção ou um DTO com campos nomeados.' },
    check: { en: 'PHPStan level 8, strict TypeScript, no-explicit-any.', 'pt-br': 'PHPStan nível 8, TypeScript strict, no-explicit-any.' },
    wrong: {
      php: `public function hydrate(array $data): object`,
      ts: `function hydrate(data: any): any`,
    },
    right: {
      php: `public function fromArray(array $data): self`,
      ts: `function fromJSON(json: unknown): Account`,
    },
  },
  {
    id: 39,
    slug: 'interface-for-public-methods',
    title: { en: 'Public methods are declared in interfaces', 'pt-br': 'Métodos públicos são declarados em interfaces' },
    purpose: { en: 'Make every public capability a contract you can name, fake and replace.', 'pt-br': 'Fazer de toda capacidade pública um contrato que você pode nomear, falsificar e substituir.' },
    concept: { en: 'If a method is public, someone depends on it. That dependency should point at an interface, not a class.', 'pt-br': 'Se um método é público, alguém depende dele. Essa dependência deve apontar para uma interface, não para uma classe.' },
    problem: { en: 'Concrete dependencies make tests boot the real thing and make substitution impossible.', 'pt-br': 'Dependências concretas fazem os testes subirem o objeto real e tornam a substituição impossível.' },
    solution: { en: 'Declare a role interface, implement it, inject by the interface.', 'pt-br': 'Declare uma interface de papel, implemente e injete pela interface.' },
    check: { en: 'Review: constructors that accept concrete classes.', 'pt-br': 'Revisão: construtores que aceitam classes concretas.' },
    wrong: {
      php: `public function __construct(private StripeClient $client) {}`,
      ts: `constructor(private readonly stripe: StripeClient) {}`,
    },
    right: {
      php: `public function __construct(private PaymentGateway $gateway) {}`,
      ts: `constructor(private readonly gateway: PaymentGateway) {}`,
    },
  },
  {
    id: 40,
    slug: 'comments-explain-why',
    title: { en: 'Comments explain why', 'pt-br': 'Comentários explicam o porquê' },
    purpose: { en: 'Keep knowledge where a reader will look for it.', 'pt-br': 'Manter o conhecimento onde o leitor vai procurar.' },
    concept: { en: 'Code says what. Comments say why — and the why belongs to the contract, not to one implementation.', 'pt-br': 'O código diz o quê. O comentário diz o porquê — e o porquê pertence ao contrato, não a uma implementação.' },
    problem: { en: '“// increments i” ages badly; the reason behind a workaround is what disappears with the author.', 'pt-br': '“// incrementa i” envelhece mal; a razão por trás de um contorno é o que desaparece com o autor.' },
    solution: { en: 'Document the contract with the reason, the trade-off and the constraint. Delete comments that repeat the code.', 'pt-br': 'Documente o contrato com a razão, o trade-off e a restrição. Apague comentários que repetem o código.' },
    check: { en: 'Review: a comment that restates the next line is removed.', 'pt-br': 'Revisão: comentário que repete a linha seguinte é removido.' },
    wrong: {
      php: `// increments the counter
$counter++;`,
      ts: `// increments the counter
counter++;`,
    },
    right: {
      php: `interface RateLimiter
{
    /**
     * The provider counts a burst as a single request, so we
     * retry once after 250ms instead of counting it twice.
     */
    public function attempt(Request $request): Result;
}`,
      ts: `interface RateLimiter {
  /**
   * The provider counts a burst as a single request, so we
   * retry once after 250ms instead of counting it twice.
   */
  attempt(request: Request): Result;
}`,
    },
  },
];
