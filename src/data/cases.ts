import type { Case } from '@/types'

export const cases: Case[] = [
  {
    id: 'aws-migration-multiregion',
    title: 'Migração AWS Multi-Region',
    subtitle: 'Infraestrutura bancária do Brasil para os EUA, sem interrupção de produção',
    context:
      'O setor de Garantias do BTG Pactual precisava expandir operação para uma região AWS nos EUA — por exigência regulatória e requisitos de latência para transações internacionais. O ambiente brasileiro deveria continuar operando normalmente durante e após a migração.',
    challenge:
      'Projetar e implementar uma nova conta AWS do zero, em ambiente multi-region, para um sistema bancário crítico — sem documentação de infraestrutura existente, com janelas de manutenção extremamente restritas e tolerância zero a incidentes de segurança ou disponibilidade.',
    solution:
      'Conduzi o projeto de ponta a ponta: modelei a topologia de rede com VPC segmentada por camada (pública, privada, isolada), configurei Subnets com controle de tráfego por Security Groups por serviço, implementei IAM Roles e Policies seguindo o princípio de least privilege, estruturei CloudFormation Stacks modulares para provisionamento reproduzível, e configurei filas SQS e tópicos SNS espelhando o comportamento do ambiente brasileiro. Todo o trabalho foi validado em ambiente de staging antes de qualquer alteração em produção.',
    impact:
      'O sistema de Garantias passou a operar em dois ambientes AWS simultaneamente, com isolamento de rede completo entre Brasil e EUA, failover configurado e conformidade com os requisitos regulatórios da operação internacional. Nenhum incidente de segurança ou disponibilidade durante a migração.',
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
    subtitle: 'Fundação de componentes para produtos financeiros digitais em escala',
    context:
      'O Banco Master operava com múltiplos produtos financeiros digitais — Previdência Privada, Tesouro Direto, Renda Fixa, Fundos de Investimento e Remessas Cambiais — desenvolvidos por squads diferentes, sem uma base compartilhada de componentes. Isso gerava inconsistência visual, retrabalho e acoplamento desnecessário entre times.',
    challenge:
      'Criar do zero um Design System que pudesse ser adotado de forma independente por múltiplos times, em uma arquitetura de microfrontends com Single-SPA, sem impactar os produtos já em produção. O sistema precisava cobrir desde tokens de design até componentes compostos com lógica de negócio financeiro.',
    solution:
      'Defini a arquitetura do sistema em camadas: tokens de design (cores, tipografia, espaçamento, elevação), componentes primitivos sem estado, componentes compostos com variantes, e padrões de layout. Implementei tudo em React com TypeScript, com documentação interativa no Storybook e pipeline de publicação automatizado via Azure DevOps. Em paralelo, conduzi a padronização do sistema legado existente, migrando componentes críticos sem quebrar os produtos em produção.',
    impact:
      'O Design System passou a ser a base de desenvolvimento de todos os produtos digitais do banco, com adoção por múltiplos squads de forma autônoma. Reduziu significativamente o tempo de implementação de novas interfaces e eliminou a principal fonte de inconsistências visuais entre produtos.',
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
    subtitle: 'Reverse engineering e arquitetura do Débito Automático no BTG Pactual',
    context:
      'O sistema de Débito Automático do BTG Pactual processava transações financeiras recorrentes de alto volume, mas operava sem qualquer documentação técnica formal. O conhecimento estava concentrado em poucos engenheiros, criando risco operacional real para o banco.',
    challenge:
      'Mapear a arquitetura e os fluxos de um sistema crítico em produção sem documentação de referência, identificando integrações com outros microserviços, eventos de mensageria, pontos de falha potenciais e regras de negócio implícitas no código.',
    solution:
      'Assumi a iniciativa de forma independente, conduzindo um processo sistemático de reverse engineering: leitura de código-fonte, análise de logs no Datadog e CloudWatch, mapeamento de tópicos SNS/SQS e rastreamento de fluxos de dados entre serviços. Documentei a arquitetura no modelo C4 (contexto, container, componente), produzi diagramas de sequência para os fluxos críticos e consolidei os principais riscos e oportunidades de melhoria. Conduzi a apresentação formal para o time de OPS, engenharia e stakeholders de negócio.',
    impact:
      'O sistema passou a ter documentação estruturada acessível a todo o time de engenharia, eliminando o risco de conhecimento concentrado. Três pontos críticos identificados foram priorizados no roadmap técnico do trimestre seguinte.',
    stack: [
      '.NET', 'React', 'AWS SQS', 'SNS', 'EventBridge',
      'Datadog', 'CloudWatch', 'C4 Model', 'Miro',
    ],
    company: 'FCamara · BTG Pactual',
    year: '2026',
    highlight: false,
  },
]
