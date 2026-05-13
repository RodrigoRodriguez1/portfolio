export { experiences } from './experience'
export { stackItems, stackCategories } from './stack'
export { cases } from './cases'
export { timelineEvents } from './timeline'

export const siteConfig = {
  name: 'Rodrigo Rodriguez',
  title: 'Engenheiro Full Stack · Arquitetura de Software',
  tagline: 'Sistemas financeiros de alta criticidade, arquitetura de microserviços e infraestrutura cloud-native.',
  location: 'São Paulo, Brasil',
  email: 'rodrigorfig1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rodrigorodriguezf/',
  github: 'https://github.com/RodrigoRodriguez1',
  available: true,
  stats: [
    { value: '6+', label: 'Anos em produção' },
    { value: '2', label: 'Bancos de grande porte' },
    { value: '210+', label: 'Projetos integrados' },
    { value: '3', label: 'Clouds em produção' },
  ],
} as const
