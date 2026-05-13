import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', 'mb-12 md:mb-16', className)}>
      <span className="section-label mb-3 block">{label}</span>
      <h2
        className={cn(
          'text-3xl md:text-4xl font-light tracking-tight text-text-primary mb-4',
          align === 'center' && 'mx-auto',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
