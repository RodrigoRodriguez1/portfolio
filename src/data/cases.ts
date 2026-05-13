import type { Case } from '@/types'

export const cases: Case[] = [
  {
    id: 'aws-migration-multiregion',
    title: 'Migração AWS Multi-Region',
    subtitle: 'Infraestrutura bancária crítica do Brasil para os EUA',
    context:
      'O setor de Garantias do BTG Pactual precisava operar em uma região AWS nos EUA para atender requisitos regulatórios e de latência para operações internacionais, sem interromper a operação existente no Brasil.',
    challenge:
      'Estruturar do zero uma nova conta AWS em ambiente multi-region para um sistema bancário crítico — sem documentação prévia, com janelas de manutenção mínimas e altíssima criticidade operacional.',
    solution:
      'Assumi a liderança técnica da migração: projetei e implementei VPC, Subnets públicas e privadas, Security Groups, IAM Roles e Policies com least privilege, S3 Buckets, CloudFormation Stacks, filas SQS, tópicos SNS e toda a configuração de rede multi-region. Garantindo isolamento total, conformidade bancária e failover entre regiões.',
    impact:
      'Sistema de Garantias operando com disponibilidade multi-region, com isolamento completo entre ambientes Brasil e EUA, conformidade regulatória e sem nenhum incidente de segurança.',
    stack: [
      'AWS VPC', 'CloudFormation', 'IAM', 'SQS', 'SNS', 'S3',
      'Lambda', 'API Gateway', 'RDS Aurora', 'DynamoDB', 'CloudWatch',
    ],
    company: 'FCamara · BTG Pactual',
    year: '2025',
    highlight: true,
  },
  {
    id: 'design-system-zero',
    title: 'Design System do Zero',
    subtitle: 'Produto financeiro com consistência visual em escala',
    context:
      'O Banco Master precisava de um Design System unificado para seus produtos digitais financeiros — Previdência Privada, Tesouro Direto, Renda Fixa e Fundos de Investimento — garantindo consistência e velocidade de entrega.',
    challenge:
      'Criar do zero um Design System para produtos financeiros críticos, com componentes acessíveis, documentados e escaláveis, que pudesse ser adotado por múltiplos times de forma independente via arquitetura de microfrontends.',
    solution:
      'Projetei e implementei o Design System completo: tokens de design (cores, tipografia, espaçamento), componentes base e compostos em React + TypeScript, documentação interativa com Storybook e pipeline de publicação via Azure DevOps. Atuei também na evolução e padronização do sistema existente.',
    impact:
      'Redução significativa no tempo de desenvolvimento de novas features, consistência visual entre todos os produtos financeiros e base reutilizável adotada por múltiplos squads.',
    stack: [
      'React', 'TypeScript', 'Storybook', 'Single-SPA', 'Vite',
      'TailwindCSS', 'Zustand', 'Azure DevOps', 'Docker',
    ],
    company: 'Espresso Labs · Banco Master',
    year: '2025',
    highlight: true,
  },
  {
    id: 'debito-automatico-mapping',
    title: 'Arquitetura de Débito Automático',
    subtitle: 'Documentação técnica e mapeamento de sistema legado crítico',
    context:
      'O sistema de Débito Automático do BTG Pactual era um dos mais críticos da operação bancária, porém sem nenhuma documentação técnica — operando em produção sob altíssimo risco de conhecimento concentrado.',
    challenge:
      'Mapear do zero um sistema bancário crítico sem documentação, identificar todos os fluxos, integrações e pontos de falha, e criar uma documentação estruturada que permitisse visibilidade para times de OPS, engenharia e stakeholders de negócio.',
    solution:
      'Assumi a iniciativa de reverse engineering do sistema: mapeei todos os fluxos de dados, integrações entre microserviços, eventos de mensageria e pontos críticos. Criei documentação em múltiplos níveis usando o modelo C4, diagramas detalhados no Miro e identifiquei os principais pontos de melhoria. Apresentei os resultados formalmente para times de OPS e stakeholders.',
    impact:
      'Sistema completamente documentado em modelo C4, visibilidade total do fluxo para stakeholders, identificação de 3 pontos críticos de melhoria priorizados no roadmap e eliminação do risco de conhecimento concentrado.',
    stack: [
      '.NET', 'React', 'AWS SQS', 'SNS', 'EventBridge',
      'Datadog', 'CloudWatch', 'Miro', 'C4 Model',
    ],
    company: 'FCamara · BTG Pactual',
    year: '2026',
    highlight: false,
  },
]
