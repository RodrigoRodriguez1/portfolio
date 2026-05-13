import type { StackItem } from '@/types'

export const stackItems: StackItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 'expert' },
  { name: 'TypeScript', category: 'Frontend', level: 'expert' },
  { name: 'Angular', category: 'Frontend', level: 'expert' },
  { name: 'Next.js', category: 'Frontend', level: 'advanced' },
  { name: 'Single-SPA', category: 'Frontend', level: 'expert' },
  { name: 'Vite', category: 'Frontend', level: 'expert' },
  { name: 'TailwindCSS', category: 'Frontend', level: 'expert' },
  { name: 'Zustand', category: 'Frontend', level: 'advanced' },
  { name: 'Framer Motion', category: 'Frontend', level: 'advanced' },
  { name: 'Storybook', category: 'Frontend', level: 'expert' },

  // Backend
  { name: '.NET / C#', category: 'Backend', level: 'expert' },
  { name: 'Node.js', category: 'Backend', level: 'expert' },
  { name: 'PHP / Laravel', category: 'Backend', level: 'advanced' },
  { name: 'REST APIs', category: 'Backend', level: 'expert' },
  { name: 'Microserviços', category: 'Backend', level: 'expert' },
  { name: 'Clean Architecture', category: 'Backend', level: 'expert' },
  { name: 'SOLID', category: 'Backend', level: 'expert' },

  // Cloud & Infra
  { name: 'AWS Lambda', category: 'Cloud & Infra', level: 'expert' },
  { name: 'AWS SQS / SNS', category: 'Cloud & Infra', level: 'expert' },
  { name: 'AWS S3', category: 'Cloud & Infra', level: 'expert' },
  { name: 'API Gateway', category: 'Cloud & Infra', level: 'expert' },
  { name: 'CloudFormation', category: 'Cloud & Infra', level: 'expert' },
  { name: 'EventBridge', category: 'Cloud & Infra', level: 'advanced' },
  { name: 'Azure', category: 'Cloud & Infra', level: 'advanced' },
  { name: 'Docker', category: 'Cloud & Infra', level: 'advanced' },
  { name: 'Azure DevOps', category: 'Cloud & Infra', level: 'advanced' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 'expert' },
  { name: 'DynamoDB', category: 'Databases', level: 'expert' },
  { name: 'Oracle', category: 'Databases', level: 'advanced' },
  { name: 'SQL Server', category: 'Databases', level: 'advanced' },
  { name: 'MySQL', category: 'Databases', level: 'proficient' },

  // Messaging
  { name: 'Apache Kafka', category: 'Messaging', level: 'advanced' },
  { name: 'AWS SQS', category: 'Messaging', level: 'expert' },
  { name: 'AWS SNS', category: 'Messaging', level: 'expert' },
  { name: 'Azure Service Bus', category: 'Messaging', level: 'advanced' },

  // Observability
  { name: 'Datadog', category: 'Observability', level: 'advanced' },
  { name: 'Dynatrace', category: 'Observability', level: 'advanced' },
  { name: 'CloudWatch', category: 'Observability', level: 'expert' },
  { name: 'Grafana', category: 'Observability', level: 'proficient' },

  // Tools
  { name: 'Git / GitHub', category: 'Tools', level: 'expert' },
  { name: 'SonarQube', category: 'Tools', level: 'advanced' },
  { name: 'Figma', category: 'Tools', level: 'advanced' },
  { name: 'Jest / xUnit', category: 'Tools', level: 'advanced' },
  { name: 'OpenSearch', category: 'Tools', level: 'proficient' },
]

export const stackCategories = [
  'Frontend',
  'Backend',
  'Cloud & Infra',
  'Databases',
  'Messaging',
  'Observability',
  'Tools',
] as const
