import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'subtle' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono transition-colors duration-200',
        variant === 'default' && 'bg-surface-raised border border-border text-text-secondary hover:border-accent/40 hover:text-text-primary',
        variant === 'accent' && 'bg-accent/10 border border-accent/30 text-accent',
        variant === 'subtle' && 'bg-surface text-text-muted border border-border-subtle',
        variant === 'outline' && 'border border-border-strong text-text-secondary bg-transparent',
        className,
      )}
    >
      {children}
    </span>
  )
}
