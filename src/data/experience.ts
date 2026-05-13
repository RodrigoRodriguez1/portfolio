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
      'Atuação no setor de Crédito e Garantias do BTG Pactual, em um ecossistema de mais de 210 serviços integrados. O trabalho cobre backend em .NET, microfrontends em React e infraestrutura AWS — com foco em confiabilidade, rastreabilidade e conformidade bancária.',
    highlights: [
      'Conduzi a migração da infraestrutura de Garantias do Brasil para uma região AWS nos EUA, projetando do zero a conta de destino: VPC com isolamento por camada, subnets públicas e privadas, Security Groups por serviço, IAM Roles com least privilege, CloudFormation Stacks modulares, filas SQS, tópicos SNS e configurações de rede para operação multi-region. A migração ocorreu sem interrupção do ambiente de produção brasileiro.',
      'Desenvolvo e evoluo serviços cloud-native utilizando Lambda, SQS, SNS, EventBridge, API Gateway, DynamoDB e PostgreSQL no RDS/Aurora — cobrindo tanto fluxos síncronos quanto pipelines event-driven assíncronos.',
      'Atuação em sustentação (RTB) com monitoramento ativo via Datadog, CloudWatch e Dynatrace. Em um ambiente onde qualquer instabilidade impacta operações financeiras em tempo real, a capacidade de diagnosticar e resolver incidentes com precisão é parte central do trabalho.',
      'Mapeei do zero o fluxo de Débito Automático — um sistema crítico sem documentação, com conhecimento concentrado em poucos engenheiros. Produzi documentação estruturada no modelo C4, diagramas de fluxo no Miro e conduzi a apresentação formal para times de OPS e stakeholders de negócio.',
      'No frontend, trabalho com React e TypeScript em arquitetura de microfrontends, desenvolvendo componentes do core compartilhado, implementando globalização (i18n) e mantendo contratos de interface entre squads.',
    ],
    stack: [
      'React', 'TypeScript', '.NET', 'AWS Lambda', 'SQS', 'SNS',
      'EventBridge', 'API Gateway', 'DynamoDB', 'PostgreSQL', 'RDS Aurora',
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
      'Atuei como referência técnica no time de frontend do Banco Master, com responsabilidade sobre decisões de arquitetura, qualidade de entrega e desenvolvimento de produtos financeiros digitais. O trabalho envolveu tanto construção de features do zero quanto evolução de sistemas existentes em produção.',
    highlights: [
      'Liderei decisões de arquitetura frontend para o time, sendo o ponto de referência técnica em dúvidas de design de componentes, padrões de estado, contratos entre microfrontends e estratégia de migração de código legado.',
      'Trabalhei no desenvolvimento de produtos financeiros de alta responsabilidade: Previdência Privada, Tesouro Direto, Renda Fixa, Fundos de Investimento e Remessas Cambiais — produtos com fluxos regulatórios rígidos e alta exigência de consistência de dados.',
      'Estruturei a arquitetura de microfrontends com Single-SPA e Vite, definindo as fronteiras de cada aplicação, os contratos de comunicação via eventos e a estratégia de carregamento de módulos em produção.',
      'Criei o Design System do banco do zero e, em um segundo momento, conduzi a padronização do sistema existente — estabelecendo tokens de design, hierarquia de componentes, diretrizes de acessibilidade e fluxo de publicação via Storybook.',
      'Contribuí com infraestrutura e pipeline de entrega via Azure DevOps, incluindo configuração de CI/CD e containerização com Docker. Monitorei estabilidade das aplicações com Datadog e Dynatrace, trabalhando em contato próximo com times de UX, Produto e QA.',
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
      'Por quase três anos, atuei no desenvolvimento de plataformas educacionais do grupo Ânima — um dos maiores grupos de ensino superior privado do Brasil. O trabalho cobriu frontend, backend e infraestrutura em um ambiente de escala nacional, com múltiplos sistemas interdependentes e alto volume de usuários.',
    highlights: [
      'Desenvolvi e mantive aplicações frontend com React e Vue.js, e serviços backend com Node.js em arquitetura serverless e .NET 8 — cobrindo desde APIs de alto throughput até rotinas de processamento assíncrono.',
      'Construí e evoluí pipelines serverless na AWS com Lambda, SQS, S3 e CloudFormation, integrando com serviços do Azure para cenários específicos de autenticação e notificação. A escolha de serverless reduziu custo operacional e simplificou o scaling em períodos de pico (matrículas, vestibulares).',
      'Implementei buscas e indexação com OpenSearch, melhorando a experiência de pesquisa de cursos e conteúdos educacionais para milhares de estudantes.',
      'Trabalhei com múltiplos bancos de dados em contextos distintos: DynamoDB para dados de alta leitura, PostgreSQL para domínios relacionais, Oracle para integrações legadas com ERPs educacionais e SQL Server em sistemas administrativos.',
      'Adotei TDD como prática padrão, com cobertura via Jest no frontend e xUnit no backend. Qualidade de código monitorada via SonarQube integrado ao pipeline de CI, com gate de qualidade obrigatório para merge.',
    ],
    stack: [
      'React', 'Vue.js', 'TypeScript', 'Node.js', '.NET 8',
      'AWS Lambda', 'SQS', 'S3', 'CloudFormation',
      'DynamoDB', 'PostgreSQL', 'Oracle', 'SQL Server',
      'OpenSearch', 'Jest', 'xUnit', 'SonarQube', 'Azure',
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
      'Atuei em uma consultoria de produto atendendo múltiplos clientes simultaneamente — com responsabilidade sobre ciclo completo de desenvolvimento: levantamento de requisitos, arquitetura, implementação, publicação e suporte. Os projetos variaram entre sistemas de rastreabilidade industrial, plataformas de e-commerce e aplicativos mobile publicados nas lojas.',
    highlights: [
      'Desenvolvi o sistema de rastreabilidade da Thoth Company com Angular e TypeScript no frontend e PHP/Laravel no backend, com foco em performance de consulta e integridade dos dados logísticos.',
      'Construí e mantive aplicações mobile com Flutter para múltiplos clientes — incluindo apps de e-commerce e delivery. Fui responsável pelo ciclo completo: desenvolvimento, testes, publicação na Play Store e App Store e atualizações em produção.',
      'Implementei animações e transições com AnimationControllers e Rive, elevando a qualidade de experiência dos produtos sem comprometer performance nos dispositivos-alvo.',
      'Trabalhei com Firebase (Cloud Firestore e Storage) como backend principal para os apps mobile, gerenciando sincronização de dados em tempo real e armazenamento de mídia.',
      'Para o cliente Açaí Concept, atuei em stack completa — Flutter no mobile, Angular no web e Node.js no backend — mantendo consistência de produto entre os canais digital.',
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
      'Início de carreira em consultoria de TI, com atuação no desenvolvimento de portais institucionais para a USP e sistemas administrativos para clientes corporativos. O trabalho envolveu plataformas Microsoft — SharePoint e .NET — em ambientes de governança rígida e processos formais de aprovação.',
    highlights: [
      'Desenvolvi e mantive portais das unidades de ensino da USP em SharePoint Foundation 2010 e 2013 com .NET 4.5, incluindo fluxos de aprovação de documentos, gestão de conteúdo e Master Pages customizadas para cada unidade.',
      'Utilizei SharePoint Designer para modelagem de workflows complexos de aprovação, adaptando os fluxos às regras de governança acadêmica de cada unidade da universidade.',
      'Para o cliente WCA-Brasil, desenvolvi e mantive sistemas em .NET WebForms com ASP.NET, gerenciando o ciclo de dados com SQL Server — criação de tabelas, views e procedures — e administrando as aplicações no IIS.',
      'Esse período foi fundamental para construir disciplina em ambientes corporativos, entender ciclos de desenvolvimento com requisitos formalizados e trabalhar com sistemas legados de alta responsabilidade institucional.',
    ],
    stack: [
      'SharePoint', '.NET', 'ASP.NET WebForms', 'C#',
      'SQL Server', 'SharePoint Designer', 'IIS',
    ],
    type: 'fulltime',
  },
]
