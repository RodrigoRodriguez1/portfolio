import { motion } from 'framer-motion'
import { AnimatedSection, SectionHeader, Badge } from '@/components/shared'

const certifications = [
  'Exam 480: HTML5 · JavaScript · CSS3',
  'Exam 339: SharePoint Server 2016',
  'Pós Tech Software Architecture — FIAP (2025 → 2026)',
]

const highlights = [
  {
    label: 'Migração AWS',
    detail: 'Infraestrutura de Garantias do Brasil para os EUA. Montei a conta do zero sem parar produção.',
  },
  {
    label: 'Design System',
    detail: 'Criado do zero no Banco Master. Adotado por múltiplos squads com Storybook e Single-SPA.',
  },
  {
    label: 'Documentação C4',
    detail: 'Mapeei o Débito Automático do BTG sem nenhuma doc prévia. Análise de logs + leitura de código.',
  },
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
                Sou engenheiro full stack com 6 anos de carreira passando por{' '}
                <span className="text-text-primary font-medium">educação, varejo e fintechs</span>.
                Nos últimos dois anos, trabalhei em sistemas financeiros no{' '}
                <span className="text-text-primary font-medium">BTG Pactual</span> e no{' '}
                <span className="text-text-primary font-medium">Banco Master</span>.
              </p>
              <p>
                No dia a dia trabalho com backend em{' '}
                <span className="text-text-primary">.NET</span>,
                microfrontends em{' '}
                <span className="text-text-primary">React</span>{' '}
                com Single-SPA, e infraestrutura na{' '}
                <span className="text-text-primary">AWS</span>.
                Já mexi com Crédito, Garantias, Previdência Privada e Tesouro Direto.
              </p>
              <p>
                Um projeto que me marcou foi a{' '}
                <span className="text-text-primary">migração da infraestrutura de Garantias</span>{' '}
                do Brasil para uma região AWS nos EUA. Montei a conta do zero —
                rede, IAM, CloudFormation, filas — sem parar o ambiente brasileiro.
              </p>
              <p>
                Atualmente na{' '}
                <span className="text-text-primary">Pós Tech em Software Architecture pela FIAP</span>,
                focando em decisões de sistema e design de plataforma.
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

          {/* Right: highlights + info */}
          <div className="space-y-4">
            {/* Project highlights — replaces generic stats grid */}
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -2 }}
                className="card-base group"
              >
                <p className="text-text-primary text-sm font-medium mb-1.5 group-hover:text-accent transition-colors duration-200">
                  {h.label}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">{h.detail}</p>
              </motion.div>
            ))}

            {/* Current role */}
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
                FIAP · 2025 → 2026 · Sistemas distribuídos, event-driven design, engenharia de plataforma.
              </p>
            </motion.div>

            {/* Languages */}
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

            {/* Current position */}
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
