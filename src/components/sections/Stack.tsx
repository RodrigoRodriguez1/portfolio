import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection, SectionHeader } from '@/components/shared'
import { stackItems, stackCategories } from '@/data'
import { cn } from '@/lib/utils'
import type { StackCategory } from '@/types'

const levelColor: Record<string, string> = {
  expert: 'bg-accent',
  advanced: 'bg-text-secondary',
  proficient: 'bg-border-strong',
}

const levelLabel: Record<string, string> = {
  expert: 'Expert',
  advanced: 'Advanced',
  proficient: 'Proficient',
}

export function Stack() {
  const [active, setActive] = useState<StackCategory | 'Todos'>('Todos')

  const categories: Array<StackCategory | 'Todos'> = ['Todos', ...stackCategories]

  const filtered =
    active === 'Todos'
      ? stackItems
      : stackItems.filter((s) => s.category === active)

  return (
    <AnimatedSection id="stack" className="py-28 md:py-36 border-t border-border">
      <div className="section-container">
        <SectionHeader
          label="// stack"
          title="Tecnologias & ferramentas."
          description="O que uso no dia a dia: frontend, backend, cloud e observabilidade. Acumulado em 6 anos de projetos diferentes."
          align="left"
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200',
                active === cat
                  ? 'bg-text-primary text-background'
                  : 'bg-surface border border-border text-text-muted hover:text-text-secondary hover:border-border-strong',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -2, transition: { duration: 0.18 } }}
                className="group card-base flex flex-col gap-2.5 cursor-default"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-primary font-medium leading-snug">
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      'h-1.5 w-1.5 rounded-full shrink-0',
                      levelColor[item.level],
                    )}
                    title={levelLabel[item.level]}
                  />
                </div>
                <span className="text-[10px] font-mono text-text-muted group-hover:text-text-secondary transition-colors duration-200">
                  {item.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Legend */}
        <div className="flex items-center gap-5 mt-8">
          {Object.entries(levelLabel).map(([key, label]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className={cn('h-1.5 w-1.5 rounded-full', levelColor[key])} />
              <span className="text-xs font-mono text-text-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
