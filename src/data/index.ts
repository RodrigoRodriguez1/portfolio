export { experiences } from './experience'
export { stackItems, stackCategories } from './stack'
export { cases } from './cases'
export { timelineEvents } from './timeline'

export const siteConfig = {
  name: 'Rodrigo Rodriguez',
  title: 'Engenheiro Full Stack · Arquitetura de Software',
  tagline: '6 anos de experiência em educação, varejo e fintechs. Atuação recente em sistemas financeiros no BTG Pactual e Banco Master.',
  location: 'São Paulo, Brasil',
  email: 'rodrigorfig1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rodrigorodriguezf/',
  github: 'https://github.com/RodrigoRodriguez1',
  available: true,
  stats: [
    { value: '6+', label: 'Anos de carreira' },
    { value: '2', label: 'Bancos em produção' },
    { value: '5+', label: 'Anos com AWS' },
    { value: '3', label: 'Clouds em produção' },
  ],
} as const
