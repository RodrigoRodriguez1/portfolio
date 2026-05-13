import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { AnimatedSection, SectionHeader, Badge } from '@/components/shared'
import { experiences } from '@/data'
import { cn } from '@/lib/utils'
import type { Experience } from '@/types'

function periodLabel(start: string, end: string | null): string {
  const fmt = (d: string) =>
    new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric' }).format(
      new Date(d + '-01'),
    )
  return `${fmt(start)} — ${end ? fmt(end) : 'Presente'}`
}

function durationLabel(start: string, end: string | null): string {
  const s = new Date(start + '-01')
  const e = end ? new Date(end + '-01') : new Date()
  const months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth())
  const y = Math.floor(months / 12)
  const m = months % 12
  const parts = []
  if (y > 0) parts.push(`${y} ano${y > 1 ? 's' : ''}`)
  if (m > 0) parts.push(`${m} ${m > 1 ? 'meses' : 'mês'}`)
  return parts.join(' ')
}

interface ExperienceCardProps {
  exp: Experience
  index: number
  isLast: boolean
}

function ExperienceCard({ exp, index, isLast }: ExperienceCardProps) {
  const [open, setOpen] = useState(index === 0)

  return (
    <div className="relative flex gap-6 md:gap-10">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.08 + 0.2, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'w-2.5 h-2.5 rounded-full border-2 mt-1.5 shrink-0 z-10',
            index === 0
              ? 'border-accent bg-accent/30'
              : 'border-border-strong bg-background',
          )}
        />
        {!isLast && (
          <div className="w-px flex-1 bg-border mt-2 min-h-[2rem]" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-10">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full text-left group"
          aria-expanded={open}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              {/* Company + client */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-text-primary font-medium text-base">
                  {exp.company}
                </span>
                {exp.client && (
                  <>
                    <span className="text-text-muted text-sm">·</span>
                    <span className="text-accent text-sm font-mono">{exp.client}</span>
                  </>
                )}
              </div>

              {/* Role */}
              <p className="text-text-secondary text-sm mb-2">{exp.role}</p>

              {/* Period + duration */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-text-muted">
                  {periodLabel(exp.period.start, exp.period.end)}
                </span>
                <span className="text-xs font-mono text-text-muted/60">
                  {durationLabel(exp.period.start, exp.period.end)}
                </span>
                {exp.period.end === null && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    Atual
                  </span>
                )}
              </div>
            </div>

            {/* Chevron */}
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-text-muted group-hover:text-text-secondary transition-colors duration-200 mt-1 shrink-0"
            >
              <ChevronDown size={16} />
            </motion.div>
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 space-y-5">
                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="text-accent font-mono mt-0.5 shrink-0 text-xs">→</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.stack.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-28 md:py-36 border-t border-border">
      <div className="section-container">
        <SectionHeader
          label="// experiência"
          title="Onde construí expertise."
          description="Trajetória em consultoria e produto, sempre com clientes de alta exigência técnica."
          align="left"
        />

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
