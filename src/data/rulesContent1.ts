import type { Locale } from './ruleGroups';

export type Lang = 'php' | 'ts' | 'cs' | 'java' | 'cpp' | 'text' | 'yaml' | 'bash';
export type L10n = Partial<Record<Locale, string>> & { en: string };

export type ExampleSet = Partial<Record<Lang, string>>;

export interface RuleContent {
  id: number;
  slug: string;
  title: L10n;
  purpose: L10n;
  concept: L10n;
  problem: L10n;
  solution: L10n;
  check: L10n;
  wrong: ExampleSet;
  right: ExampleSet;
}

export const rulesContent: RuleContent[] = [
  {
    id: 1,
    slug: 'cyclomatic-complexity',
    title: { en: 'Cyclomatic complexity', 'pt-br': 'Complexidade ciclomática' },
    purpose: {
      en: 'Keep every method small enough to be reasoned about linearly.',
      'pt-br': 'Manter todo método pequeno o bastante para ser raciocinado linearmente.',
    },
    concept: {
      en: 'Complexity counts the independent paths through a method: each branch, loop and boolean operator adds one. Five is the ceiling.',
      'pt-br': 'A complexidade conta os caminhos independentes de um método: cada ramo, laço e operador booleano soma um. O teto é cinco.',
    },
    problem: {
      en: 'A method with ten paths cannot be tested case by case, and every change risks a path nobody exercises.',
      'pt-br': 'Um método com dez caminhos não pode ser testado caso a caso, e cada mudança arrisca um caminho que ninguém exercita.',
    },
    solution: {
      en: 'Extract branches into named methods, replace conditional ladders with polymorphism, and use guard clauses so the happy path stays straight.',
      'pt-br': 'Extraia ramos para métodos nomeados, troque escadas de condicionais por polimorfismo e use cláusulas de guarda para o caminho feliz ficar reto.',
    },
    check: {
      en: 'Fail the build above 5: PHP_CodeSniffer, PMD, ESLint complexity, clang-tidy.',
      'pt-br': 'Falhe o build acima de 5: PHP_CodeSniffer, PMD, ESLint complexity, clang-tidy.',
    },
    wrong: {
      php: `public function rate(Order $order): string
{
    if ($order->isPaid()) {
        if ($order->hasFraudCheck()) {
            if ($order->customer()->isTrusted()) {
                return 'approved';
            }
            return 'review';
        }
        return 'hold';
    }
    return 'rejected';
}`,
      ts: `function rate(order: Order): string {
  if (order.isPaid()) {
    if (order.hasFraudCheck()) {
      if (order.customer.isTrusted()) {
        return "approved";
      }
      return "review";
    }
    return "hold";
  }
  return "rejected";
}`,
    },
    right: {
      php: `public function rate(Order $order): string
{
    if (! $order->isPaid()) {
        return 'rejected';
    }

    return $order->hasFraudCheck()
        ? $this->review($order)
        : 'hold';
}

private function review(Order $order): string
{
    return $order->customer()->isTrusted() ? 'approved' : 'review';
}`,
      ts: `function rate(order: Order): string {
  if (!order.isPaid()) return "rejected";

  return order.hasFraudCheck() ? review(order) : "hold";
}

function review(order: Order): string {
  return order.customer.isTrusted ? "approved" : "review";
}`,
    },
  },
  {
    id: 2,
    slug: 'single-indentation',
    title: { en: 'One level of indentation', 'pt-br': 'Um nível de indentação' },
    purpose: {
      en: 'Make the shape of a method visible at a glance.',
      'pt-br': 'Deixar a forma do método visível de relance.',
    },
    concept: {
      en: 'A method may contain a loop or a conditional, never a loop inside a conditional. The inner body becomes another method.',
      'pt-br': 'Um método pode conter um laço ou um condicional, nunca um laço dentro de um condicional. O corpo interno vira outro método.',
    },
    problem: {
      en: 'Nested blocks hide the early exit and force the reader to simulate the stack manually.',
      'pt-br': 'Blocos aninhados escondem a saída antecipada e obrigam o leitor a simular a pilha mentalmente.',
    },
    solution: {
      en: 'Name the inner step and call it. The extracted method is usually the missing concept.',
      'pt-br': 'Nomeie o passo interno e chame-o. O método extraído costuma ser o conceito que faltava.',
    },
    check: {
      en: 'Reviewer check: any line with two indentation levels is a finding.',
      'pt-br': 'Checagem de revisão: qualquer linha com dois níveis de indentação é um achado.',
    },
    wrong: {
      php: `foreach ($this->routes as $route) {
    if ($route->matches($method, $path)) {
        return $route;
    }
}`,
      ts: `for (const route of this.routes) {
  if (route.matches(method, path)) {
    return route;
  }
}`,
    },
    right: {
      php: `foreach ($this->routes as $route) {
    $match = $this->match($route, $method, $path);

    if ($match !== null) {
        return $match;
    }
}

private function match(Route $route, HttpMethod $method, RoutePath $path): ?Route
{
    return $route->matches($method, $path) ? $route : null;
}`,
      ts: `for (const route of this.routes) {
  if (route.matches(method, path)) return route;
}`,
    },
  },
  {
    id: 3,
    slug: 'no-else',
    title: { en: 'No else keyword', 'pt-br': 'Sem a palavra-chave else' },
    purpose: {
      en: 'Turn every decision into a single exit that the reader can follow.',
      'pt-br': 'Transformar cada decisão em uma saída única que o leitor consegue seguir.',
    },
    concept: {
      en: 'If the condition is false, leave. The remaining code is the happy path, at the bottom, unindented.',
      'pt-br': 'Se a condição é falsa, saia. O restante é o caminho feliz, embaixo, sem indentação.',
    },
    problem: {
      en: 'A ladder of if/else hides the fact that some branches only exist to reject bad input.',
      'pt-br': 'Uma escada de if/else esconde que alguns ramos só existem para rejeitar entrada inválida.',
    },
    solution: {
      en: 'Invert the condition, throw or return early, and keep the positive case as the last statement.',
      'pt-br': 'Inverta a condição, lance exceção ou retorne cedo, e mantenha o caso positivo como a última instrução.',
    },
    check: {
      en: 'Grep for else: each hit must be justified in the review, or removed.',
      'pt-br': 'Grep por else: cada ocorrência precisa de justificativa na revisão, ou sai.',
    },
    wrong: {
      php: `if ($service->isAvailable()) {
    return $this->forward($request, $service);
} else {
    throw new ServiceUnavailable();
}`,
      ts: `if (service.isAvailable()) {
  return forward(request, service);
} else {
  throw new ServiceUnavailable();
}`,
    },
    right: {
      php: `if (! $service->isAvailable()) {
    throw new ServiceUnavailable();
}

return $this->forward($request, $service);`,
      ts: `if (!service.isAvailable()) throw new ServiceUnavailable();

return forward(request, service);`,
    },
  },
  {
    id: 4,
    slug: 'no-switch',
    title: { en: 'No switch or case', 'pt-br': 'Sem switch ou case' },
    purpose: {
      en: 'Make variation a property of objects, not a list of branches in one place.',
      'pt-br': 'Fazer da variação uma propriedade dos objetos, não uma lista de ramos em um lugar.',
    },
    concept: {
      en: 'A switch on a type is a polymorphism that has not been discovered yet. The case bodies become implementations of one contract.',
      'pt-br': 'Um switch sobre um tipo é um polimorfismo que ainda não foi descoberto. Os corpos dos cases viram implementações de um contrato.',
    },
    problem: {
      en: 'Every new case edits the same function, so the file accumulates reasons to change.',
      'pt-br': 'Cada novo caso edita a mesma função, então o arquivo acumula motivos para mudar.',
    },
    solution: {
      en: 'Declare an interface, one implementation per case, and resolve the implementation at the boundary.',
      'pt-br': 'Declare uma interface, uma implementação por caso, e resolva a implementação na borda.',
    },
    check: {
      en: 'Lint rule or grep: switch/case is a finding outside generated code.',
      'pt-br': 'Regra de lint ou grep: switch/case é um achado fora de código gerado.',
    },
    wrong: {
      php: `public function fee(Method $method): Money
{
    switch ($method) {
        case Method::PIX: return Money::zero();
        case Method::CARD: return Money::of(199);
        default: return Money::of(499);
    }
}`,
      ts: `function fee(method: Method): Money {
  switch (method) {
    case "pix": return Money.zero();
    case "card": return Money.of(199);
    default: return Money.of(499);
  }
}`,
    },
    right: {
      php: `interface FeePolicy
{
    public function fee(): Money;
}

final class PixFee implements FeePolicy
{
    public function fee(): Money { return Money::zero(); }
}

// resolved once, at the boundary
$fee = $policies[$method]->fee();`,
      ts: `interface FeePolicy {
  fee(): Money;
}

const policies: Record<Method, FeePolicy> = {
  pix: { fee: () => Money.zero() },
  card: { fee: () => Money.of(199) },
};

const fee = policies[method].fee();`,
    },
  },
  {
    id: 5,
    slug: 'no-magic-values',
    title: { en: 'No magic numbers or strings', 'pt-br': 'Sem números ou strings mágicos' },
    purpose: {
      en: 'Give every literal that carries meaning a name and a type.',
      'pt-br': 'Dar nome e tipo a todo literal que carrega significado.',
    },
    concept: {
      en: 'A literal repeated in three places is an unnamed rule. Name it once; the compiler then enforces it.',
      'pt-br': 'Um literal repetido em três lugares é uma regra sem nome. Nomeie uma vez; o compilador passa a garantí-la.',
    },
    problem: {
      en: 'When the value changes, nothing tells you which of the nine occurrences were the rule and which were coincidence.',
      'pt-br': 'Quando o valor muda, nada diz qual das nove ocorrências era a regra e qual era coincidência.',
    },
    solution: {
      en: 'Extract a constant or, when the set is closed, an enum. The name documents the intent at the call site.',
      'pt-br': 'Extraia uma constante ou, quando o conjunto é fechado, um enum. O nome documenta a intenção no ponto de uso.',
    },
    check: {
      en: 'Static analysis flags numeric and string literals in business code.',
      'pt-br': 'Análise estática aponta literais numéricos e de string no código de negócio.',
    },
    wrong: {
      php: `if ($order->status() === 'PENDING' && $order->total() > 10000) {
    $this->hold($order, 48);
}`,
      ts: `if (order.status === "PENDING" && order.total > 10000) {
  hold(order, 48);
}`,
    },
    right: {
      php: `enum OrderStatus: string
{
    case Pending = 'PENDING';
}

const REVIEW_THRESHOLD_IN_CENTS = 10000;
const HOLD_HOURS = 48;

if ($order->hasStatus(OrderStatus::Pending) && $order->isAbove(REVIEW_THRESHOLD_IN_CENTS)) {
    $this->hold($order, HOLD_HOURS);
}`,
      ts: `const OrderStatus = { Pending: "PENDING" } as const;
const REVIEW_THRESHOLD_IN_CENTS = 10_000;
const HOLD_HOURS = 48;

if (order.status === OrderStatus.Pending && order.total > REVIEW_THRESHOLD_IN_CENTS) {
  hold(order, HOLD_HOURS);
}`,
    },
  },
  {
    id: 6,
    slug: 'class-size',
    title: { en: 'Fifty lines per class', 'pt-br': 'Cinquenta linhas por classe' },
    purpose: {
      en: 'Keep a class readable without scrolling and without a map.',
      'pt-br': 'Manter uma classe legível sem rolar a tela e sem mapa.',
    },
    concept: {
      en: 'Count only the code inside the class body — no namespace, imports, attributes or blank lines. Fifty is the ceiling.',
      'pt-br': 'Conte apenas o código dentro do corpo da classe — sem namespace, imports, atributos ou linhas em branco. Cinquenta é o teto.',
    },
    problem: {
      en: 'A class that needs a table of contents has more than one reason to change, and reviewers stop reading it whole.',
      'pt-br': 'Uma classe que precisa de sumário tem mais de um motivo para mudar, e os revisores param de lê-la por inteiro.',
    },
    solution: {
      en: 'Extract the second responsibility into a collaborator. The class keeps the behaviour that names it.',
      'pt-br': 'Extraia a segunda responsabilidade para um colaborador. A classe fica com o comportamento que a nomeia.',
    },
    check: {
      en: 'PHPMD ExcessiveClassLength (50), Checkstyle FileLength, ESLint max-lines.',
      'pt-br': 'PHPMD ExcessiveClassLength (50), Checkstyle FileLength, ESLint max-lines.',
    },
    wrong: {
      php: `final class Order
{
    public function total(): Money { /* ... */ }
    public function applyDiscount(): void { /* ... */ }
    public function notifyCustomer(): void { /* ... */ }
    public function generateInvoice(): Invoice { /* ... */ }
    public function sendToErp(): void { /* ... */ }
    public function exportCsv(): string { /* ... */ }
    public function refund(): void { /* ... */ }
    // ... 40 more lines
}`,
      ts: `class Order {
  total(): Money { /* ... */ }
  applyDiscount(): void { /* ... */ }
  notifyCustomer(): void { /* ... */ }
  generateInvoice(): Invoice { /* ... */ }
  sendToErp(): void { /* ... */ }
  exportCsv(): string { /* ... */ }
  refund(): void { /* ... */ }
  // ... 40 more lines
}`,
    },
    right: {
      php: `final class Order
{
    public function total(): Money { /* ... */ }
    public function applyDiscount(Discount $discount): self { /* ... */ }
    public function refund(RefundPolicy $policy): Refund { /* ... */ }
}

// Movement, notification and export live in their own classes,
// composed by the use case.`,
      ts: `class Order {
  total(): Money { /* ... */ }
  applyDiscount(discount: Discount): Order { /* ... */ }
  refund(policy: RefundPolicy): Refund { /* ... */ }
}

// Movement, notification and export live in their own classes,
// composed by the use case.`,
    },
  },
  {
    id: 7,
    slug: 'method-size',
    title: { en: 'Twenty lines per method', 'pt-br': 'Vinte linhas por método' },
    purpose: {
      en: 'Make a method fit in one screen and one thought.',
      'pt-br': 'Fazer um método caber em uma tela e em um pensamento.',
    },
    concept: {
      en: 'Count executable lines only. Twenty is the ceiling; a method that needs more is usually two methods in a trench coat.',
      'pt-br': 'Conte apenas linhas executáveis. Vinte é o teto; um método que precisa de mais costuma ser dois métodos disfarçados.',
    },
    problem: {
      en: 'Long methods mix policy with detail, so the reader cannot tell what is essential from what is incidental.',
      'pt-br': 'Métodos longos misturam política com detalhe, e o leitor não distingue o essencial do incidental.',
    },
    solution: {
      en: 'Extract each block that starts with a verb. The method becomes a sequence of named steps.',
      'pt-br': 'Extraia cada bloco que começa com um verbo. O método vira uma sequência de passos nomeados.',
    },
    check: {
      en: 'PHPMD ExcessiveMethodLength (20), PMD NPathLength, ESLint max-lines-per-function.',
      'pt-br': 'PHPMD ExcessiveMethodLength (20), PMD NPathLength, ESLint max-lines-per-function.',
    },
    wrong: {
      php: `public function handle(Request $request): Response
{
    $payload = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);
    $order = $this->orders->find($payload['id']);
    $amount = Money::fromCents($payload['amount']);
    if ($order->balance()->isLessThan($amount)) {
        return new JsonResponse(['error' => 'insufficient'], 409);
    }
    $order->withdraw($amount);
    $this->orders->save($order);
    $this->mailer->send(new Receipt($order));
    $this->logger->info('withdrawal', ['order' => $order->id()->value()]);
    return new JsonResponse(['ok' => true]);
}`,
      ts: `function handle(request: Request): Response {
  const payload = JSON.parse(request.body);
  const order = orders.find(payload.id);
  const amount = Money.fromCents(payload.amount);
  if (order.balance.isLessThan(amount)) {
    return { status: 409, body: { error: "insufficient" } };
  }
  order.withdraw(amount);
  orders.save(order);
  mailer.send(new Receipt(order));
  logger.info("withdrawal", { order: order.id.value });
  return { status: 200, body: { ok: true } };
}`,
    },
    right: {
      php: `public function handle(Request $request): Response
{
    $command = WithdrawCommand::fromRequest($request);

    return $this->withdraw($command);
}

private function withdraw(WithdrawCommand $command): Response
{
    $result = $this->useCase->__invoke($command);

    return $result->isSuccess()
        ? new JsonResponse(['ok' => true])
        : new JsonResponse(['error' => $result->error()], 409);
}`,
      ts: `function handle(request: Request): Response {
  return withdraw(WithdrawCommand.fromRequest(request));
}

function withdraw(command: WithdrawCommand): Response {
  const result = useCase.run(command);

  return result.isSuccess()
    ? { status: 200, body: { ok: true } }
    : { status: 409, body: { error: result.error } };
}`,
    },
  },
  {
    id: 8,
    slug: 'package-size',
    title: { en: 'Ten classes per package', 'pt-br': 'Dez classes por pacote' },
    purpose: {
      en: 'Keep a package small enough to be understood as one subject.',
      'pt-br': 'Manter um pacote pequeno o bastante para ser entendido como um assunto.',
    },
    concept: {
      en: 'A namespace with more than ten classes is hiding a boundary that should have been a package.',
      'pt-br': 'Um namespace com mais de dez classes esconde uma fronteira que deveria ter virado pacote.',
    },
    problem: {
      en: 'Large packages become import dumping grounds; everything references everything and nothing can be moved.',
      'pt-br': 'Pacotes grandes viram depósitos de imports; tudo referencia tudo e nada pode ser movido.',
    },
    solution: {
      en: 'Split by subject, not by technical type: payments, identity, shipping — not services, helpers, models.',
      'pt-br': 'Divida por assunto, não por tipo técnico: pagamentos, identidade, frete — não services, helpers, models.',
    },
    check: {
      en: 'Count files per directory in CI; fail above 10.',
      'pt-br': 'Conte arquivos por diretório no CI; falhe acima de 10.',
    },
    wrong: {
      text: `src/Services/
├── PaymentService.php
├── InvoiceService.php
├── CustomerService.php
├── OrderService.php
├── RefundService.php
├── ReportService.php
├── MailService.php
├── ExportService.php
├── AuthService.php
├── SearchService.php
├── WebhookService.php
└── CacheService.php`,
      ts: `src/services/
├── payment.service.ts
├── invoice.service.ts
├── customer.service.ts
├── order.service.ts
├── refund.service.ts
├── report.service.ts
├── mail.service.ts
├── export.service.ts
├── auth.service.ts
├── search.service.ts
├── webhook.service.ts
└── cache.service.ts`,
    },
    right: {
      text: `src/Payment/
├── Charge.php
├── Refund.php
├── Ledger.php
└── Receipt.php

src/Identity/
├── User.php
├── Credential.php
└── Session.php`,
      ts: `src/payment/
├── charge.ts
├── refund.ts
├── ledger.ts
└── receipt.ts

src/identity/
├── user.ts
├── credential.ts
└── session.ts`,
    },
  },
  {
    id: 9,
    slug: 'two-instance-variables',
    title: { en: 'Two instance variables', 'pt-br': 'Duas variáveis de instância' },
    purpose: {
      en: 'Force every class to have one clear concept behind its state.',
      'pt-br': 'Forçar toda classe a ter um conceito claro por trás do seu estado.',
    },
    concept: {
      en: 'More than two fields usually means three responsibilities sharing a constructor, or one concept that was never named.',
      'pt-br': 'Mais de dois campos costuma significar três responsabilidades dividindo um construtor, ou um conceito que nunca foi nomeado.',
    },
    problem: {
      en: 'Classes with many fields attract behaviour from everywhere, and every test needs the whole object graph.',
      'pt-br': 'Classes com muitos campos atraem comportamento de todo lado, e todo teste precisa do grafo inteiro de objetos.',
    },
    solution: {
      en: 'Group the fields that always travel together into a value object and give it the name of the concept.',
      'pt-br': 'Agrupe os campos que sempre andam juntos em um value object e dê a ele o nome do conceito.',
    },
    check: {
      en: 'Reviewer check plus a static rule on field count.',
      'pt-br': 'Checagem de revisão mais uma regra estática de contagem de campos.',
    },
    wrong: {
      php: `final class Service
{
    public function __construct(
        private ServiceName $name,
        private ServiceHost $host,
        private ServicePort $port,
    ) {}
}`,
      ts: `class Service {
  constructor(
    readonly name: ServiceName,
    readonly host: ServiceHost,
    readonly port: ServicePort,
  ) {}
}`,
    },
    right: {
      php: `final class Service
{
    public function __construct(
        private ServiceName $name,
        private Endpoint $endpoint,
    ) {}
}

final class Endpoint
{
    public function __construct(
        private ServiceHost $host,
        private ServicePort $port,
    ) {}
}`,
      ts: `class Service {
  constructor(
    readonly name: ServiceName,
    readonly endpoint: Endpoint,
  ) {}
}

class Endpoint {
  constructor(
    readonly host: ServiceHost,
    readonly port: ServicePort,
  ) {}
}`,
    },
  },
  {
    id: 10,
    slug: 'two-parameters',
    title: { en: 'Two parameters per method', 'pt-br': 'Dois parâmetros por método' },
    purpose: {
      en: 'Keep the call site readable and the parameter list honest.',
      'pt-br': 'Manter o ponto de chamada legível e a lista de parâmetros honesta.',
    },
    concept: {
      en: 'Arguments that always appear together are a concept. Two is the ceiling before the list becomes positional guessing.',
      'pt-br': 'Argumentos que sempre aparecem juntos são um conceito. Dois é o teto antes de a lista virar adivinhação posicional.',
    },
    problem: {
      en: 'With four parameters, two of them the same type, a swap compiles and fails in production.',
      'pt-br': 'Com quatro parâmetros, dois do mesmo tipo, uma troca compila e falha em produção.',
    },
    solution: {
      en: 'Introduce a parameter object named after the intent and validate it once.',
      'pt-br': 'Introduza um objeto de parâmetro nomeado pela intenção e valide-o uma vez.',
    },
    check: {
      en: 'PHP_CodeSniffer, PMD ExcessiveParameterList, ESLint max-params.',
      'pt-br': 'PHP_CodeSniffer, PMD ExcessiveParameterList, ESLint max-params.',
    },
    wrong: {
      php: `public function transfer(
    AccountId $from,
    AccountId $to,
    Money $amount,
    string $description,
): Receipt {
    // ...
}`,
      ts: `function transfer(
  from: AccountId,
  to: AccountId,
  amount: Money,
  description: string,
): Receipt {
  // ...
}`,
    },
    right: {
      php: `public function transfer(Transfer $transfer): Receipt
{
    // ...
}

final class Transfer
{
    private function __construct(
        private AccountId $from,
        private TransferTarget $target,
    ) {}

    public static function between(
        AccountId $from,
        AccountId $to,
        Money $amount,
        Description $description,
    ): self {
        return new self($from, new TransferTarget($to, $amount, $description));
    }
}`,
      ts: `function transfer(transfer: Transfer): Receipt {
  // ...
}

class Transfer {
  private constructor(
    readonly from: AccountId,
    readonly target: TransferTarget,
  ) {}

  static between(
    from: AccountId,
    to: AccountId,
    amount: Money,
    description: Description,
  ): Transfer {
    return new Transfer(from, new TransferTarget(to, amount, description));
  }
}`,
    },
  },
];
