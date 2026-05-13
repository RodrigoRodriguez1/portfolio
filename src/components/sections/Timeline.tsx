import { motion } from 'framer-motion'
import { AnimatedSection, SectionHeader } from '@/components/shared'
import { timelineEvents } from '@/data'
import { cn } from '@/lib/utils'

const typeStyles = {
  job: {
    dot: 'border-border-strong bg-background',
    label: 'text-text-muted',
    badge: 'text-text-muted',
  },
  education: {
    dot: 'border-accent bg-accent/20',
    label: 'text-accent',
    badge: 'text-accent',
  },
  milestone: {
    dot: 'border-text-primary bg-text-primary/20',
    label: 'text-text-primary',
    badge: 'text-text-primary',
  },
}

const typeLabel = {
  job: 'Experiência',
  education: 'Formação',
  milestone: 'Marco',
}

export function Timeline() {
  return (
    <AnimatedSection className="py-28 md:py-36 border-t border-border overflow-hidden">
      <div className="section-container">
        <SectionHeader
          label="// trajetória"
          title="Uma carreira construída com intenção."
          description="De SharePoint e .NET a microserviços financeiros em escala — cada passo com propósito."
          align="center"
        />

        {/* Desktop: horizontal scroll timeline */}
        <div className="hidden md:block relative">
          {/* Horizontal line */}
          <div className="absolute top-[22px] left-0 right-0 h-px bg-border" />

          <div className="flex gap-0 overflow-x-auto no-scrollbar pb-4">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center min-w-[160px] max-w-[200px] flex-1 px-3"
              >
                {/* Dot */}
                <div
                  className={cn(
                    'w-3 h-3 rounded-full border-2 shrink-0 z-10 bg-background mb-4',
                    typeStyles[event.type].dot,
                  )}
                />

                {/* Year */}
                <span
                  className={cn(
                    'text-xs font-mono mb-2',
                    typeStyles[event.type].badge,
                  )}
                >
                  {event.year}
                </span>

                {/* Content */}
                <div className="text-center">
                  <p className="text-text-primary text-xs font-medium leading-snug mb-1">
                    {event.title}
                  </p>
                  <p className="text-text-muted text-[11px] font-mono mb-2 leading-snug">
                    {event.company}
                  </p>
                  <p className="text-text-muted text-[11px] leading-relaxed hidden lg:block">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden space-y-0">
          {timelineEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex gap-4 relative"
            >
              {/* Line + dot */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className={cn(
                    'w-2.5 h-2.5 rounded-full border-2 mt-1 shrink-0 z-10',
                    typeStyles[event.type].dot,
                  )}
                />
                {i < timelineEvents.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-1.5 min-h-[2rem]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={cn(
                      'text-[10px] font-mono',
                      typeStyles[event.type].badge,
                    )}
                  >
                    {event.year}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted/50">
                    · {typeLabel[event.type]}
                  </span>
                </div>
                <p className="text-text-primary text-sm font-medium leading-snug mb-0.5">
                  {event.title}
                </p>
                <p className="text-text-muted text-xs font-mono mb-2">{event.company}</p>
                <p className="text-text-muted text-xs leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {Object.entries(typeLabel).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className={cn(
                  'w-2 h-2 rounded-full border-2',
                  typeStyles[key as keyof typeof typeStyles].dot,
                )}
              />
              <span className="text-[11px] font-mono text-text-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
