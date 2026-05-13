import { motion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'
import { siteConfig } from '@/data'
import { GithubIcon, LinkedinIcon } from '@/components/shared'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 grid-bg opacity-100"
        aria-hidden="true"
      />

      {/* Radial accent glow */}
      <div
        className="absolute inset-x-0 top-0 h-[60vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(59,130,246,0.13) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0a0a0a, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="section-container relative z-10 flex flex-col items-center text-center pt-24 pb-16">

        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-text-secondary">
              Aberto a novas oportunidades
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div {...fadeUp(0.2)} className="mb-6 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-text-primary leading-[1.05]">
            <span className="block text-text-secondary font-light mb-1 text-4xl sm:text-5xl md:text-6xl">
              Rodrigo Rodriguez
            </span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #fafafa 30%, rgba(250,250,250,0.55) 100%)',
              }}
            >
              Engenharia &amp; Arquitetura
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.32)}
          className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed mb-3 text-balance"
        >
          Seis anos em sistemas financeiros que não podem falhar.
          Backend, frontend e infraestrutura AWS — do BTG Pactual ao Banco Master.
        </motion.p>

        {/* Location */}
        <motion.div {...fadeUp(0.38)} className="flex items-center gap-1.5 text-text-muted text-sm font-mono mb-10">
          <MapPin size={12} />
          <span>{siteConfig.location}</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.44)} className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <button
            onClick={() => scrollToSection('cases')}
            className="px-5 py-2.5 bg-text-primary text-background text-sm font-medium rounded-lg hover:bg-white/90 transition-all duration-200 hover:shadow-accent-glow"
          >
            Ver projetos
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2.5 border border-border bg-surface/50 text-text-secondary text-sm font-medium rounded-lg hover:border-border-strong hover:text-text-primary transition-all duration-200 hover:bg-surface"
          >
            Entrar em contato
          </button>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 border border-border bg-surface/50 text-text-muted rounded-lg hover:border-border-strong hover:text-text-primary transition-all duration-200 hover:bg-surface"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 border border-border bg-surface/50 text-text-muted rounded-lg hover:border-border-strong hover:text-text-primary transition-all duration-200 hover:bg-surface"
          >
            <GithubIcon size={16} />
          </a>
        </motion.div>

        {/* Tech strip */}
        <motion.div {...fadeUp(0.52)} className="w-full max-w-2xl">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {['React', 'TypeScript', '.NET', 'Node.js', 'AWS', 'Microserviços', 'Single-SPA', 'PostgreSQL'].map(
              (tech) => (
                <span key={tech} className="text-xs font-mono text-text-muted">
                  {tech}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-text-secondary transition-colors duration-200 flex flex-col items-center gap-2"
        aria-label="Scroll para baixo"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
