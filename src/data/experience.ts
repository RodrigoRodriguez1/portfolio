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
      'Trabalho no setor de Crédito e Garantias do BTG Pactual, em um ecossistema de mais de 210 serviços. Backend em .NET, microfrontends em React e infraestrutura AWS em produção.',
    highlights: [
      'Conduzi a migração da infraestrutura de Garantias para uma região AWS nos EUA. Projetei a conta do zero: topologia de rede, IAM com least privilege, CloudFormation modular, filas SQS e tópicos SNS. A migração aconteceu sem nenhuma interrupção no ambiente brasileiro.',
      'Desenvolvo e mantenho serviços event-driven com Lambda, SQS, SNS e EventBridge, integrados a DynamoDB e PostgreSQL no RDS/Aurora. Tanto fluxos síncronos quanto pipelines assíncronos.',
      'Faço sustentação ativa em produção com Datadog, CloudWatch e Dynatrace. Num banco, instabilidade tem custo imediato — diagnóstico rápido e resolução precisa são parte central do trabalho.',
      'Mapeei o sistema de Débito Automático do zero: sem documentação, com conhecimento concentrado. Produzi documentação C4, diagramas de fluxo e apresentei para OPS e stakeholders de negócio.',
      'No frontend, desenvolvo componentes do core compartilhado em React e TypeScript, mantendo contratos de interface entre squads e implementando globalização (i18n) para operações internacionais.',
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
      'Referência técnica de frontend no Banco Master. Produto financeiro digital com produtos como Previdência Privada, Tesouro Direto e Renda Fixa — onde consistência e confiabilidade não são opcionais.',
    highlights: [
      'Fui o ponto de referência técnica do time: decisões de arquitetura de componentes, padrões de estado, contratos entre microfrontends e estratégia para migração de código legado.',
      'Estruturei a arquitetura de microfrontends com Single-SPA e Vite, definindo fronteiras de aplicação, contratos via eventos e estratégia de carregamento de módulos em produção.',
      'Criei o Design System do banco do zero e, depois, padronizei o sistema legado. Tokens de design, hierarquia de componentes, diretrizes de acessibilidade e publicação automatizada via Storybook.',
      'Configurei pipelines de CI/CD no Azure DevOps e containerização com Docker. Monitorei estabilidade com Datadog e Dynatrace em contato próximo com UX, Produto e QA.',
    ],
    stack: [
      'React', 'TypeScript', 'Single-SPA', 'Vite', 'Zustand',
      'TailwindCSS', 'Storybook', 'Node.js', '.NET',
      'Azure DevOps', 'Docker', 'Datadog', 'Dynatrace',
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
      'Quase três anos desenvolvendo plataformas educacionais para o grupo Ânima, um dos maiores grupos de ensino superior privado do Brasil. Escala nacional, múltiplos sistemas interdependentes.',
    highlights: [
      'Desenvolvi aplicações React e Vue.js no frontend e serviços em Node.js serverless e .NET 8 no backend, cobrindo APIs de alto volume e processamento assíncrono.',
      'Construí pipelines serverless na AWS com Lambda, SQS e CloudFormation. A arquitetura simplificou o scaling nos períodos de pico — matrículas e vestibulares — sem custo operacional fixo.',
      'Implementei busca e indexação com OpenSearch, melhorando a experiência de pesquisa de cursos para milhares de estudantes.',
      'Múltiplos bancos de dados por contexto: DynamoDB para leitura intensiva, PostgreSQL para domínios relacionais, Oracle para integrações com ERPs legados.',
      'TDD com Jest e xUnit. SonarQube integrado ao pipeline como gate obrigatório para merge.',
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
      'Consultoria de produto com responsabilidade sobre o ciclo completo: requisitos, arquitetura, implementação e publicação. Projetos em rastreabilidade, e-commerce e apps mobile publicados nas lojas.',
    highlights: [
      'Desenvolvi o sistema de rastreabilidade industrial com Angular e PHP/Laravel, com foco em integridade de dados e performance de consulta.',
      'Construí e publiquei apps mobile com Flutter para múltiplos clientes, incluindo e-commerce e delivery. Ciclo completo: desenvolvimento, testes, Play Store e App Store.',
      'Usei Firebase como backend para os apps mobile: Cloud Firestore para dados em tempo real e Storage para mídia.',
      'No cliente Açaí Concept, trabalhei em stack completa: Flutter mobile, Angular web e Node.js backend, mantendo consistência entre os canais.',
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
      'Início de carreira em consultoria Microsoft. Portais institucionais para a USP e sistemas administrativos corporativos — ambientes com governança rígida e processos formais.',
    highlights: [
      'Desenvolvi portais das unidades da USP em SharePoint Foundation com .NET 4.5: fluxos de aprovação, gestão de conteúdo e Master Pages por unidade.',
      'Modelei workflows de aprovação no SharePoint Designer, adaptados às regras de cada unidade acadêmica.',
      'Para a WCA-Brasil, mantive sistemas em .NET WebForms com SQL Server: tabelas, views, procedures e gestão no IIS.',
    ],
    stack: [
      'SharePoint', '.NET', 'ASP.NET WebForms', 'C#',
      'SQL Server', 'SharePoint Designer', 'IIS',
    ],
    type: 'fulltime',
  },
]
