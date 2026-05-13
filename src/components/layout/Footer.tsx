import { Mail } from 'lucide-react'
import { siteConfig } from '@/data'
import { GithubIcon, LinkedinIcon } from '@/components/shared'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-0">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center">
            <span className="text-accent font-mono text-[10px] font-medium">RR</span>
          </div>
          <span className="text-text-muted text-xs font-mono">
            © {year} {siteConfig.name}
          </span>
        </div>

        <p className="text-text-muted text-xs font-mono order-last sm:order-none hidden md:block">
          Built with React · TypeScript · Vite · TailwindCSS
        </p>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
