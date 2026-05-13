import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'fcamara-btg',
    company: 'FCamara',
    role: 'Full Stack Developer',
    period: { start: '2025-12', end: null },
    location: 'São Paulo, Brasil',
    client: 'BTG Pactual',
    description:
      'Trabalho no setor de Crédito e Garantias do BTG Pactual. Backend em .NET, microfrontends em React e infraestrutura AWS, num ambiente com dezenas de microserviços interdependentes.',
    highlights: [
      'Migrei a infraestrutura de Garantias do Brasil para uma região AWS nos EUA. Montei a conta do zero: VPC, subnets, Security Groups, IAM com least privilege, CloudFormation modular, filas SQS e tópicos SNS. O ambiente brasileiro não teve nenhuma interrupção.',
      'Desenvolvo e mantenho serviços event-driven com Lambda, SQS, SNS e EventBridge, integrados a DynamoDB e PostgreSQL no RDS/Aurora. Fluxos síncronos e pipelines assíncronos.',
      'Faço sustentação em produção com Datadog, CloudWatch e Dynatrace. Em banco, qualquer instabilidade tem custo direto. Diagnóstico rápido e solução precisa são a parte mais importante do trabalho.',
      'O sistema de Débito Automático não tinha documentação. Mapeei tudo do zero lendo código e analisando logs no Datadog e CloudWatch. Produzi documentação C4, diagramas de sequência e apresentei para OPS e stakeholders.',
      'No frontend, trabalho nos componentes do core compartilhado em React e TypeScript, mantendo contratos entre squads e implementando i18n para operações internacionais.',
    ],
    stack: [
      'React', 'TypeScript', '.NET', 'AWS Lambda', 'SQS', 'SNS',
      'EventBridge', 'API Gateway', 'DynamoDB', 'PostgreSQL',
      'CloudFormation', 'Datadog', 'Dynatrace', 'Docker',
    ],
    type: 'contract',
  },
  {
    id: 'espresso-banco-master',
    company: 'Espresso Labs',
    role: 'Full Stack Developer',
    period: { start: '2025-02', end: '2025-11' },
    location: 'São Paulo, Brasil',
    client: 'Banco Master',
    description:
      'Trabalhei nos produtos digitais do Banco Master: Previdência Privada, Tesouro Direto, Renda Fixa, Fundos de Investimento e Remessas Cambiais. Time com mais de 6 engenheiros, colaboração direta com UX, Produto e QA.',
    highlights: [
      'Fui o ponto de referência técnica de frontend do time. Na prática isso significava revisar decisões de arquitetura de componentes, definir padrões de estado e alinhar contratos entre os microfrontends.',
      'Trabalhei na arquitetura de microfrontends com Single-SPA e Vite. Defini as fronteiras entre as aplicações e como os módulos eram carregados em produção.',
      'Em dois momentos diferentes do projeto trabalhei com o Design System: primeiro criei do zero a biblioteca de componentes, depois assumi a padronização da versão legada existente. Tokens, variantes de componentes e publicação via Storybook.',
      'Além das features de produto, fui responsável pelos módulos administrativos internos: dashboards operacionais, boards de gestão e painéis de configuração.',
      'Configurei pipelines de CI/CD no Azure DevOps e containerização com Docker. Acompanhei estabilidade com Datadog e Dynatrace.',
    ],
    stack: [
      'React', 'TypeScript', 'Single-SPA', 'Vite', 'Zustand',
      'TailwindCSS', 'Storybook', 'Azure DevOps', 'Docker',
      'Datadog', 'Dynatrace', 'Figma', 'SonarQube',
    ],
    type: 'contract',
  },
  {
    id: 'dti-anima',
    company: 'dti digital',
    role: 'Full Stack Developer',
    period: { start: '2022-06', end: '2025-02' },
    location: 'São Paulo, Brasil',
    client: 'Ânima Educação',
    description:
      'Quase três anos desenvolvendo plataformas educacionais para o grupo Ânima. Frontend em React e Vue.js, backend em Node.js e .NET 8, infraestrutura AWS.',
    highlights: [
      'Trabalhei em APIs de alto volume e processamento assíncrono. Frontend em React e Vue.js, backend em Node.js serverless e .NET 8.',
      'Montei pipelines serverless na AWS com Lambda, SQS e CloudFormation. Nos períodos de pico (matrículas e vestibulares) a infraestrutura escalava sem precisar de intervenção manual.',
      'Implementei busca com OpenSearch para o catálogo de cursos, substituindo buscas SQL que travavam em volume.',
      'Trabalhei com DynamoDB, PostgreSQL e Oracle dependendo do contexto. Cada banco estava ali por um motivo específico.',
      'TDD com Jest e xUnit. SonarQube como gate no pipeline: nada entrava sem passar pela análise.',
    ],
    stack: [
      'React', 'Vue.js', 'TypeScript', 'Node.js', '.NET 8',
      'AWS Lambda', 'SQS', 'S3', 'CloudFormation',
      'DynamoDB', 'PostgreSQL', 'Oracle', 'OpenSearch',
      'Jest', 'xUnit', 'SonarQube', 'Azure',
    ],
    type: 'fulltime',
  },
  {
    id: 'thoth-company',
    company: 'THOTH Company',
    role: 'Full Stack Developer',
    period: { start: '2020-09', end: '2022-05' },
    location: 'São Paulo, Brasil',
    client: 'Múltiplos clientes',
    description:
      'Consultoria com múltiplos clientes simultâneos: rastreabilidade industrial, e-commerce e apps mobile. Ciclo completo do projeto, do levantamento até a publicação nas lojas.',
    highlights: [
      'Desenvolvi o sistema de rastreabilidade com Angular e PHP/Laravel. O desafio principal era manter integridade de dados e queries rápidas num volume que crescia bastante.',
      'Construí e publiquei apps mobile com Flutter para vários clientes: e-commerce, delivery e food service. Play Store e App Store, do zero até live.',
      'Usei Firebase como backend nos apps mobile: Firestore para dados em tempo real e Storage para mídia.',
      'No Açaí Concept, trabalhei em toda a stack: Flutter no mobile, Angular no web e Node.js no backend, mantendo os três canais consistentes.',
    ],
    stack: [
      'Angular', 'TypeScript', 'Flutter', 'Dart',
      'PHP', 'Laravel', 'Node.js',
      'Firebase', 'MySQL', 'SQL Server',
    ],
    type: 'fulltime',
  },
  {
    id: 'tksi-usp',
    company: 'tksi Soluções em TI',
    role: 'Desenvolvedor .NET · SharePoint',
    period: { start: '2019-02', end: '2020-08' },
    location: 'São Paulo, Brasil',
    client: 'Universidade de São Paulo · WCA-Brasil',
    description:
      'Primeiro emprego, em consultoria Microsoft. Portais para as unidades da USP e sistemas internos para a WCA-Brasil.',
    highlights: [
      'Desenvolvi e mantive portais das unidades da USP em SharePoint Foundation com .NET 4.5: fluxos de aprovação de documentos, gestão de conteúdo e Master Pages por unidade.',
      'Modelei workflows de aprovação no SharePoint Designer com as regras específicas de cada unidade acadêmica.',
      'Na WCA-Brasil, trabalhei em sistemas .NET WebForms: banco de dados SQL Server com tabelas, views e procedures, e gestão de aplicações no IIS.',
    ],
    stack: [
      'SharePoint', '.NET', 'ASP.NET WebForms', 'C#',
      'SQL Server', 'SharePoint Designer', 'IIS',
    ],
    type: 'fulltime',
  },
]
