export interface Experience {
  id: string
  company: string
  role: string
  period: { start: string; end: string | null }
  location: string
  client?: string
  description: string
  highlights: string[]
  stack: string[]
  type: 'fulltime' | 'contract'
}

export interface StackItem {
  name: string
  category: StackCategory
  level: 'expert' | 'advanced' | 'proficient'
}

export type StackCategory =
  | 'Frontend'
  | 'Backend'
  | 'Cloud & Infra'
  | 'Databases'
  | 'Messaging'
  | 'Observability'
  | 'Tools'

export interface Case {
  id: string
  title: string
  subtitle: string
  context: string
  challenge: string
  solution: string
  impact: string
  stack: string[]
  company: string
  year: string
  highlight: boolean
}

export interface TimelineEvent {
  id: string
  year: string
  title: string
  company: string
  description: string
  type: 'job' | 'education' | 'milestone'
}

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}
