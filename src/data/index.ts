export { experiences } from './experience'
export { stackItems, stackCategories } from './stack'
export { cases } from './cases'
export { timelineEvents } from './timeline'

export const siteConfig = {
  name: 'Rodrigo Rodriguez',
  title: 'Full Stack Engineer & Software Architect',
  tagline: 'Engenheiro Full Stack com 6 anos em sistemas financeiros de alta complexidade.',
  location: 'São Paulo, Brasil',
  email: 'rodrigorfig1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rodrigorodriguezf/',
  github: 'https://github.com/RodrigoRodriguez1',
  available: true,
  stats: [
    { value: '6+', label: 'Anos de experiência' },
    { value: '2', label: 'Bancos de grande porte' },
    { value: '210+', label: 'Projetos integrados' },
    { value: '3', label: 'Clouds dominadas' },
  ],
} as const
