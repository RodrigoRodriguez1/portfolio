import { motion } from 'framer-motion'
import { AnimatedSection, SectionHeader, Badge } from '@/components/shared'
import { siteConfig } from '@/data'

const certifications = [
  'Exam 480: HTML5 · JavaScript · CSS3',
  'Exam 339: SharePoint Server 2016',
  'Pós Tech Software Architecture — FIAP',
]

export function About() {
  return (
    <AnimatedSection id="about" className="py-28 md:py-36">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: text */}
          <div>
            <SectionHeader
              label="// sobre"
              title="Gosto de problemas que importam."
              align="left"
            />

            <div className="space-y-5 text-text-secondary text-base leading-relaxed">
              <p>
                Sou engenheiro full stack com seis anos trabalhando em{' '}
                <span className="text-text-primary font-medium">sistemas financeiros</span>.
                Passei por{' '}
                <span className="text-text-primary font-medium">BTG Pactual</span> e{' '}
                <span className="text-text-primary font-medium">Banco Master</span>,
                onde qualquer falha em produção tem consequência real.
              </p>
              <p>
                Trabalho de forma full stack: backend em{' '}
                <span className="text-text-primary">.NET</span>,
                microfrontends em{' '}
                <span className="text-text-primary">React</span>{' '}
                com Single-SPA, e infraestrutura na{' '}
                <span className="text-text-primary">AWS</span>.
                Os domínios que já trabalhei incluem Crédito, Garantias,
                Previdência Privada e Tesouro Direto.
              </p>
              <p>
                Um trabalho que me marcou foi a{' '}
                <span className="text-text-primary">migração da infraestrutura de Garantias</span>{' '}
                do Brasil para uma região AWS nos EUA. Conduzi do zero, sem
                interrupção do ambiente de produção.
              </p>
              <p>
                Estou na{' '}
                <span className="text-text-primary">Pós Tech em Software Architecture pela FIAP</span>,
                aprofundando o lado de decisões sistêmicas e design de plataforma.
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <p className="section-label mb-3">Formação & Certificações</p>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="text-accent font-mono mt-0.5 shrink-0">→</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: stats + highlights */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {siteConfig.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="card-base"
                >
                  <p
                    className="text-3xl font-light tracking-tight text-text-primary mb-1"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-text-muted font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Highlight cards */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="card-base border-accent/20 bg-accent/5"
            >
              <p className="text-xs font-mono text-accent mb-2">Em andamento</p>
              <p className="text-text-primary font-medium text-sm mb-1">
                Pós Tech — Software Architecture
              </p>
              <p className="text-text-muted text-xs">
                FIAP · 2025 → 2026 · Sistemas distribuídos, event-driven design e engenharia de plataforma.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="card-base"
            >
              <p className="text-xs font-mono text-text-muted mb-2">Idiomas</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="subtle">Português · Nativo</Badge>
                <Badge variant="subtle">Inglês · Professional Working</Badge>
                <Badge variant="subtle">Espanhol · Básico</Badge>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="card-base"
            >
              <p className="text-xs font-mono text-text-muted mb-2">Atuação atual</p>
              <p className="text-text-primary text-sm font-medium">FCamara · BTG Pactual</p>
              <p className="text-text-secondary text-xs mt-1">
                Crédito & Garantias · Infraestrutura AWS · .NET · React
              </p>
              <div className="flex items-center gap-1.5 mt-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono text-text-muted">Desde dez/2025</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
