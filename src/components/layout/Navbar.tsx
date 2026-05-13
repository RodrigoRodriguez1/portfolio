import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { scrollToSection, cn } from '@/lib/utils'
import { siteConfig } from '@/data'

const links = [
  { label: 'Sobre', href: 'about' },
  { label: 'Experiência', href: 'experience' },
  { label: 'Stack', href: 'stack' },
  { label: 'Cases', href: 'cases' },
  { label: 'Contato', href: 'contact' },
]

export function Navbar() {
  const progress = useScrollProgress()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    scrollToSection(href)
    setMobileOpen(false)
  }

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
        style={{ scaleX: progress }}
      />

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/60'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-14 md:h-16">
            {/* Logo / Name */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2.5 group"
              aria-label="Ir para o início"
            >
              <div className="w-7 h-7 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-mono text-xs font-medium">RR</span>
              </div>
              <span className="font-medium text-sm text-text-primary tracking-tight hidden sm:block">
                {siteConfig.name}
              </span>
            </button>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary rounded-md hover:bg-surface transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-3.5 py-1.5 text-sm bg-text-primary text-background font-medium rounded-md hover:bg-white/90 transition-all duration-200"
              >
                Contato
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary rounded-md hover:bg-surface transition-colors duration-200"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-14 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-3 py-3 text-sm text-text-secondary hover:text-text-primary rounded-md hover:bg-surface transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 mt-2 border-t border-border flex flex-col gap-2">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary rounded-md hover:bg-surface transition-colors duration-200"
                >
                  GitHub ↗
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary rounded-md hover:bg-surface transition-colors duration-200"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
