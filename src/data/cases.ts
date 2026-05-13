import type { Case } from '@/types'

export const cases: Case[] = [
  {
    id: 'aws-migration-multiregion',
    title: 'Migração AWS Multi-Region',
    subtitle: 'Infraestrutura de Garantias do Brasil para os EUA sem parar produção',
    context:
      'O setor de Garantias do BTG precisava operar numa região AWS nos EUA por requisitos regulatórios e de latência internacional. O ambiente brasileiro tinha que continuar funcionando normalmente.',
    challenge:
      'Montar uma conta AWS do zero para um sistema bancário em produção. Não havia documentação de infraestrutura. Janelas de manutenção pequenas e qualquer incidente teria impacto financeiro direto.',
    solution:
      'Fiz o projeto inteiro: VPC segmentada por camada, Security Groups por serviço, IAM com least privilege, CloudFormation modular para provisionamento reproduzível, filas SQS e tópicos SNS espelhando o ambiente brasileiro. Tudo validado em staging antes de tocar em produção.',
    impact:
      'Garantias passou a rodar em dois ambientes AWS ao mesmo tempo, com isolamento completo entre regiões. O ambiente brasileiro não teve nenhuma interrupção durante a migração.',
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
    subtitle: 'Biblioteca de componentes para produtos financeiros de squads diferentes',
    context:
      'O Banco Master tinha vários produtos digitais — Previdência, Tesouro Direto, Renda Fixa, Fundos — desenvolvidos por squads diferentes, sem componentes compartilhados. Cada time fazia o seu, o que gerava inconsistência visual e muito retrabalho.',
    challenge:
      'Criar um Design System que múltiplos times conseguissem adotar sem depender de mim, numa arquitetura Single-SPA onde as aplicações são isoladas. E sem quebrar o que já estava em produção.',
    solution:
      'Defini a estrutura em camadas: tokens de design, componentes primitivos, compostos com variantes e padrões de layout. React com TypeScript, Storybook para documentação interativa e publicação automatizada via Azure DevOps. Em paralelo, fui migrando os componentes críticos do sistema legado para o novo padrão.',
    impact:
      'O Design System virou a base dos produtos digitais do banco. Squads conseguiam criar interfaces novas sem partir do zero ou pedir ajuda para alinhamento visual.',
    stack: [
      'React', 'TypeScript', 'Storybook', 'Single-SPA',
      'Vite', 'TailwindCSS', 'Zustand', 'Azure DevOps', 'Docker',
    ],
    company: 'Espresso Labs · Banco Master',
    year: '2025',
    highlight: true,
  },
  {
    id: 'stackfood',
    title: 'StackFood — Pedidos com microserviços',
    subtitle: 'Plataforma de food service com 5 serviços .NET, SNS/SQS e infra completa na AWS',
    context:
      'Projeto da pós-graduação em Software Architecture (FIAP SOAT). O desafio era construir um sistema real de gerenciamento de pedidos para lanchonetes, com múltiplos times de desenvolvimento e serviços independentes.',
    challenge:
      'Manter o fluxo de pedido consistente — criação, pagamento, produção e entrega — sem acoplamento entre serviços. Qualquer falha numa etapa não podia derrubar as outras, e o estado do pedido precisava ser rastreável em tempo real.',
    solution:
      'Cinco microserviços .NET 8, cada um com banco de dados próprio (PostgreSQL ou DynamoDB conforme o padrão de acesso). Comunicação assíncrona via SNS/SQS — cada serviço publica e consome eventos sem saber quem está do outro lado. Clean Architecture e DDD em todos os serviços. Infra provisionada com Terraform: EKS para os containers, API Gateway com Lambda para autenticação, ArgoCD para GitOps e Cloudflare na borda.',
    impact:
      'Fluxo de pedido completo funcionando de ponta a ponta, com BDD tests no serviço de pagamentos e cobertura de testes unitários em todos os serviços. Deploy automatizado via ArgoCD a cada merge na main.',
    stack: [
      '.NET 8', 'C#', 'AWS SNS', 'AWS SQS', 'DynamoDB',
      'PostgreSQL', 'AWS Cognito', 'AWS Lambda', 'API Gateway',
      'EKS', 'Kubernetes', 'Terraform', 'ArgoCD', 'Docker', 'Cloudflare',
    ],
    company: 'Pós Tech FIAP SOAT',
    year: '2025',
    highlight: true,
    tag: 'Pós-graduação',
    repoUrl: 'https://github.com/Stack-Food',
  },
  {
    id: 'optimus-frame',
    title: 'OptimusFrame — Processamento de vídeo',
    subtitle: 'Pipeline assíncrono de extração de frames com .NET, RabbitMQ e OpenCV',
    context:
      'Hackathon da pós-graduação (FIAP SOAT). O sistema precisava receber uploads de vídeo, processar os frames de forma assíncrona e disponibilizar o resultado em ZIP para download — sem bloquear o cliente durante o processamento.',
    challenge:
      'Processamento de vídeo é pesado e bloqueante. Fazer isso de forma síncrona numa API era inviável. O pipeline precisava ser resiliente a falhas e notificar erros sem depender de polling.',
    solution:
      'Três serviços .NET 8 com responsabilidades separadas. O Core recebe o upload em Base64, salva no S3, persiste metadados no PostgreSQL e publica o evento no RabbitMQ. O Transform Worker consome de forma assíncrona, usa OpenCvSharp para extrair os frames, comprime em ZIP e sobe o resultado ao S3. Erros notificados via AWS SES. URL pré-assinada com 60 min de validade para o download. Autenticação via AWS Cognito. Mesma base de infra do StackFood: Terraform, EKS, ArgoCD, API Gateway.',
    impact:
      'Pipeline funcionando de ponta a ponta no hackathon. Cobertura de testes > 70% com xUnit, Moq e FluentAssertions. O projeto usou OpenCvSharp — binding .NET do OpenCV — que foi a parte mais técnica e diferente do que normalmente se faz em .NET.',
    stack: [
      '.NET 8', 'C#', 'RabbitMQ', 'OpenCvSharp', 'AWS S3',
      'AWS Cognito', 'AWS SES', 'PostgreSQL', 'API Gateway',
      'EKS', 'Kubernetes', 'Terraform', 'ArgoCD', 'Docker', 'xUnit',
    ],
    company: 'Pós Tech FIAP SOAT — Hackathon',
    year: '2025',
    highlight: false,
    tag: 'Pós-graduação',
    repoUrl: 'https://github.com/Stack-Food/optimus-frame-core',
  },
  {
    id: 'debito-automatico-mapping',
    title: 'Mapeamento do Débito Automático',
    subtitle: 'Documentar um sistema em produção que não tinha documentação',
    context:
      'O sistema de Débito Automático processava transações recorrentes no BTG, mas não existia documentação. O conhecimento estava na cabeça de poucas pessoas — qualquer saída do time criava um problema real.',
    challenge:
      'Mapear a arquitetura de um sistema em produção sem nenhuma referência escrita, entendendo as integrações, os eventos e onde os pontos de falha estavam.',
    solution:
      'Fiz o levantamento lendo código, analisando logs no Datadog e CloudWatch e rastreando os tópicos SNS/SQS entre serviços. Documentei em C4, criei diagramas de sequência para os fluxos principais e apresentei para OPS, engenharia e stakeholders.',
    impact:
      'O sistema ficou documentado e acessível para qualquer pessoa do time. Três pontos críticos que identifiquei foram priorizados no roadmap técnico do trimestre seguinte.',
    stack: [
      '.NET', 'React', 'AWS SQS', 'SNS', 'EventBridge',
      'Datadog', 'CloudWatch', 'C4 Model', 'Miro',
    ],
    company: 'FCamara · BTG Pactual',
    year: '2026',
    highlight: false,
  },
]
