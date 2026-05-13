import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { AnimatedSection, SectionHeader, Badge } from '@/components/shared'
import { cases } from '@/data'
import { cn } from '@/lib/utils'
import type { Case } from '@/types'

interface CaseCardProps {
  item: Case
  index: number
}

function CaseCard({ item, index }: CaseCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'card-base card-hover group relative overflow-hidden',
        item.highlight && 'border-accent/20',
      )}
    >
      {/* Highlight glow */}
      {item.highlight && (
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono text-text-muted">
              {item.company} · {item.year}
            </span>
            {item.tag && (
              <span className="text-[10px] font-mono text-text-muted bg-surface-raised border border-border px-1.5 py-0.5 rounded">
                {item.tag}
              </span>
            )}
            {item.highlight && !item.tag && (
              <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-1.5 py-0.5 rounded">
                Destaque
              </span>
            )}
          </div>
          <h3 className="text-text-primary font-medium text-lg leading-snug mb-1">
            {item.title}
          </h3>
          <p className="text-text-muted text-sm">{item.subtitle}</p>
        </div>

        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-label={expanded ? 'Recolher detalhes' : 'Ver detalhes'}
          className="shrink-0 p-1.5 rounded-md border border-border text-text-muted hover:text-text-primary hover:border-border-strong transition-all duration-200 mt-0.5"
        >
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </button>
      </div>

      {/* Context (always visible) */}
      <p className="text-text-secondary text-sm leading-relaxed mb-5">
        {item.context}
      </p>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-5 pt-1 pb-2">
              {/* Divider */}
              <div className="h-px bg-border" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
                    Desafio
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
                    Solução
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.solution}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
                    Impacto
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.impact}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stack + actions */}
      <div className="flex items-end justify-between gap-4 mt-1">
        <div className="flex flex-wrap gap-1.5">
          {item.stack.map((tech) => (
            <Badge key={tech} variant="subtle">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {item.repoUrl && (
            <a
              href={item.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] font-mono text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              GitHub
              <ArrowUpRight size={11} />
            </a>
          )}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 text-[11px] font-mono text-text-muted hover:text-accent transition-colors duration-200"
          >
            {expanded ? 'Recolher' : 'Detalhar'}
            <ArrowUpRight size={11} className={cn('transition-transform duration-200', expanded && 'rotate-90')} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export function Cases() {
  return (
    <AnimatedSection id="cases" className="py-28 md:py-36 border-t border-border">
      <div className="section-container">
        <SectionHeader
          label="// projetos"
          title="Projetos que valem contar."
          description="Do trabalho no BTG e Banco Master até os projetos da pós-graduação — situações onde as decisões técnicas tinham consequência real."
          align="left"
        />

        <div className="grid grid-cols-1 gap-4">
          {cases.map((item, i) => (
            <CaseCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="h-px flex-1 bg-border max-w-[80px]" />
          <p className="text-text-muted text-xs font-mono">
            O trabalho real está em repositórios privados de clientes —{' '}
            <button
              onClick={() => {
                const el = document.getElementById('contact')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-accent hover:underline underline-offset-2 transition-colors"
            >
              entre em contato para uma conversa técnica
            </button>
            .
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
