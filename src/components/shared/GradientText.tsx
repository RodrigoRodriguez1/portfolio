import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  variant?: 'white' | 'accent'
}

export function GradientText({ children, className, variant = 'white' }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-clip-text text-transparent',
        variant === 'white' && 'bg-gradient-to-r from-white via-white/90 to-white/60',
        variant === 'accent' && 'bg-gradient-to-r from-accent to-blue-400',
        className,
      )}
    >
      {children}
    </span>
  )
}
