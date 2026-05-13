import type { Case } from '@/types'

export const cases: Case[] = [
  {
    id: 'aws-migration-multiregion',
    title: 'Migração AWS Multi-Region',
    subtitle: 'Infraestrutura bancária do Brasil para os EUA, sem parar produção',
    context:
      'O setor de Garantias do BTG precisava operar em uma região AWS nos EUA por requisitos regulatórios e de latência internacional. O ambiente brasileiro não podia ser afetado.',
    challenge:
      'Projetar uma nova conta AWS do zero para um sistema bancário crítico, sem documentação de infraestrutura, com janelas mínimas de manutenção e tolerância zero a incidentes.',
    solution:
      'Conduzi o projeto inteiro: topologia de rede com VPC segmentada por camada, Security Groups por serviço, IAM com least privilege, CloudFormation modular para provisionamento reproduzível, filas SQS e tópicos SNS espelhando o ambiente brasileiro. Tudo validado em staging antes de tocar em produção.',
    impact:
      'Garantias passou a operar em dois ambientes AWS simultaneamente, com isolamento completo entre regiões e failover configurado. Nenhum incidente durante a migração.',
    stack: [
      'AWS VPC', 'CloudFormation', 'IAM', 'SQS', 'SNS',
      'S3', 'Lambda', 'API Gateway', 'RDS Aurora', 'DynamoDB', 'CloudWatch',
    ],
    company: 'FCamara · BTG Pactual',
    year: '2025',
    highlight: true,
  },
  {
    id: 'design-system-zero',
    title: 'Design System · Banco Master',
    subtitle: 'Base de componentes para produtos financeiros digitais',
    context:
      'O Banco Master tinha vários produtos digitais — Previdência, Tesouro Direto, Renda Fixa, Fundos — desenvolvidos por squads diferentes e sem componentes compartilhados. O resultado era inconsistência visual e retrabalho constante.',
    challenge:
      'Criar um Design System adotável de forma autônoma por múltiplos times, numa arquitetura Single-SPA, sem impactar produtos já em produção.',
    solution:
      'Defini a arquitetura em camadas: tokens de design, componentes primitivos, compostos com variantes e padrões de layout. React com TypeScript, documentação interativa no Storybook e publicação automatizada via Azure DevOps. Em paralelo, padronizei o sistema legado migrando componentes críticos sem quebrar nada.',
    impact:
      'O Design System virou a base de todos os produtos digitais do banco. Vários squads passaram a entregar interfaces novas em menos tempo e com menos inconsistências.',
    stack: [
      'React', 'TypeScript', 'Storybook', 'Single-SPA',
      'Vite', 'TailwindCSS', 'Zustand', 'Azure DevOps', 'Docker',
    ],
    company: 'Espresso Labs · Banco Master',
    year: '2025',
    highlight: true,
  },
  {
    id: 'debito-automatico-mapping',
    title: 'Documentação de Sistema Crítico',
    subtitle: 'Reverse engineering do Débito Automático no BTG Pactual',
    context:
      'O sistema de Débito Automático processava transações recorrentes de alto volume, mas não tinha documentação alguma. O conhecimento estava concentrado em poucos engenheiros — um risco operacional real.',
    challenge:
      'Mapear a arquitetura de um sistema crítico em produção sem referência documentada, identificando integrações, eventos e pontos de falha.',
    solution:
      'Fiz o levantamento de forma independente: leitura de código, análise de logs no Datadog e CloudWatch, rastreamento de tópicos SNS/SQS entre serviços. Documentei em C4, produzi diagramas de sequência para os fluxos críticos e apresentei para OPS, engenharia e stakeholders.',
    impact:
      'Sistema documentado e acessível para todo o time. Três pontos críticos identificados foram priorizados no roadmap técnico do trimestre seguinte.',
    stack: [
      '.NET', 'React', 'AWS SQS', 'SNS', 'EventBridge',
      'Datadog', 'CloudWatch', 'C4 Model', 'Miro',
    ],
    company: 'FCamara · BTG Pactual',
    year: '2026',
    highlight: false,
  },
]
