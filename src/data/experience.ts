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
      'Atuação no setor de Crédito e Garantias do BTG Pactual, em ambiente de altíssima complexidade com mais de 210 projetos integrados em arquitetura de microserviços.',
    highlights: [
      'Principal responsável pela migração de infraestrutura do ambiente Brasil para AWS nos EUA, estruturando do zero VPC, Subnets, Security Groups, IAM Roles, CloudFormation Stacks e configurações multi-region.',
      'Desenvolvimento e manutenção de soluções cloud-native com Lambda, SQS, SNS, S3, API Gateway, EventBridge, DynamoDB, PostgreSQL (RDS/Aurora) e CloudWatch.',
      'Sustentação RTB com monitoramento e resolução de incidentes críticos em produção via Datadog, CloudWatch e Dynatrace.',
      'Mapeamento do fluxo de Débito Automático do zero — documentação C4, diagramas Miro e apresentação para times de OPS e stakeholders.',
      'Atuação full stack: backend em .NET e microfrontends em React com componentes compartilhados (common/core) e globalização i18n.',
    ],
    stack: [
      'React', 'TypeScript', '.NET', 'AWS Lambda', 'SQS', 'SNS', 'S3',
      'API Gateway', 'EventBridge', 'DynamoDB', 'PostgreSQL', 'RDS',
      'CloudFormation', 'CloudWatch', 'Datadog', 'Dynatrace', 'Docker',
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
      'Referência técnica frontend no time do Banco Master, liderando decisões arquiteturais e sendo ponto de apoio para outros desenvolvedores em produtos financeiros críticos.',
    highlights: [
      'Referência técnica frontend: liderança de decisões e suporte técnico ao time de desenvolvimento.',
      'Desenvolvimento de produtos financeiros críticos: Previdência Privada, Tesouro Direto, Renda Fixa, Fundos de Investimento e Remessas Cambiais.',
      'Arquitetura de microfrontends com Single-SPA e Vite — construção e evolução de aplicações modulares.',
      'Criação do Design System do zero e evolução/padronização do existente, com consistência visual via Storybook.',
      'DevOps via Azure DevOps (CI/CD) e Docker; monitoramento com Datadog e Dynatrace.',
    ],
    stack: [
      'React', 'TypeScript', 'Single-SPA', 'Vite', 'Zustand', 'TailwindCSS',
      'Storybook', 'Azure DevOps', 'Docker', 'Datadog', 'Dynatrace',
      'Node.js', '.NET',
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
      'Desenvolvimento e manutenção de sistemas educacionais em escala nacional para o grupo Ânima, cobrindo frontend, backend e infraestrutura cloud.',
    highlights: [
      'Frontend com React e Vue.js; backend com Node.js (serverless) e .NET 8.',
      'Testes unitários com TDD: Jest e xUnit.',
      'Infraestrutura AWS: CloudWatch, Lambda, S3, CloudFormation; Azure services.',
      'Gerenciamento de filas com AWS SQS e Service Bus.',
      'Banco de dados: DynamoDB, PostgreSQL, Oracle, SQL Server.',
      'Qualidade de código com SonarQube; versionamento Git Flow.',
      'Busca com OpenSearch e AWS CloudWatch.',
    ],
    stack: [
      'React', 'Vue.js', 'TypeScript', 'Node.js', '.NET 8',
      'AWS Lambda', 'SQS', 'S3', 'CloudFormation', 'DynamoDB',
      'PostgreSQL', 'Oracle', 'SQL Server', 'Jest', 'xUnit',
      'SonarQube', 'OpenSearch', 'Azure',
    ],
    type: 'fulltime',
  },
  {
    id: 'thoth-company',
    company: 'THOTH Company',
    role: 'Full Stack Developer',
    period: { start: '2020-09', end: '2022-05' },
    location: 'São Paulo, Brasil',
    client: 'Múltiplos clientes (Rastreabilidade Tracker, Thoth Commerce, Açaí Concept)',
    description:
      'Desenvolvimento web e mobile para múltiplos clientes, cobrindo desde sistemas de rastreabilidade até e-commerce e apps publicados nas lojas.',
    highlights: [
      'Desenvolvimento web com Angular 2+ e TypeScript no frontend.',
      'Backend com PHP/Laravel e Node.js.',
      'Desenvolvimento mobile com Flutter/Dart — publicações na Play Store e App Store.',
      'Integração com Firebase (Cloud Firestore, Storage) e DIO (HttpClient Flutter).',
      'Animações com AnimationControllers, Flare/Rive.',
      'Banco de dados: MySQL e Microsoft SQL Server.',
    ],
    stack: [
      'Angular', 'TypeScript', 'Flutter', 'Dart', 'PHP', 'Laravel',
      'Node.js', 'Firebase', 'MySQL', 'SQL Server', 'Bootstrap',
    ],
    type: 'fulltime',
  },
  {
    id: 'tksi-usp',
    company: 'tksi Soluções em TI',
    role: 'Desenvolvedor .NET / SharePoint',
    period: { start: '2019-02', end: '2020-08' },
    location: 'São Paulo, Brasil',
    client: 'Universidade de São Paulo (USP) · WCA-Brasil',
    description:
      'Desenvolvimento e manutenção de portais institucionais e sistemas de gestão documental para a USP, com foco em SharePoint e .NET.',
    highlights: [
      'Desenvolvimento e manutenção de portais das unidades de ensino da USP.',
      'SharePoint Foundation 2010/2013 com .NET 4.5 — fluxos de aprovação e Master Pages.',
      'SharePoint Designer 2010/2013 para criação de workflows.',
      'Sistema .NET WebForms ASP.NET para WCA-Brasil.',
      'Gerenciamento de bancos SQL Server: tabelas, views e procedures.',
      'Gestão de aplicações no IIS.',
    ],
    stack: [
      'SharePoint', '.NET', 'ASP.NET WebForms', 'C#', 'SQL Server',
      'SharePoint Designer', 'IIS',
    ],
    type: 'fulltime',
  },
]
