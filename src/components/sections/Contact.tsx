import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin } from 'lucide-react'
import { AnimatedSection, SectionHeader, GithubIcon, LinkedinIcon } from '@/components/shared'
import { siteConfig } from '@/data'
import { cn } from '@/lib/utils'

type FormState = 'idle' | 'sending' | 'sent' | 'error'

interface FormData {
  name: string
  email: string
  message: string
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [state, setState] = useState<FormState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setState('sending')

    // mailto fallback — no backend dependency
    const subject = encodeURIComponent(`Contato via portfólio — ${form.name}`)
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`,
    )
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, '_blank')

    setTimeout(() => {
      setState('sent')
      setForm({ name: '', email: '', message: '' })
    }, 600)
  }

  const inputClass = cn(
    'w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-primary',
    'placeholder:text-text-muted outline-none',
    'transition-all duration-200',
    'focus:border-accent/50 focus:ring-1 focus:ring-accent/20',
    'hover:border-border-strong',
  )

  return (
    <AnimatedSection id="contact" className="py-28 md:py-36 border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: copy */}
          <div>
            <SectionHeader
              label="// contato"
              title="Vamos conversar."
              description="Aberto a oportunidades em engenharia e arquitetura de software. Se quiser trocar uma ideia sobre algum projeto ou posição, manda mensagem."
              align="left"
            />

            <div className="space-y-4 mb-10">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-md bg-surface border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors duration-200">
                  <Mail size={14} className="text-text-muted group-hover:text-accent transition-colors duration-200" />
                </div>
                <span className="text-sm font-mono">{siteConfig.email}</span>
              </a>

              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-8 h-8 rounded-md bg-surface border border-border flex items-center justify-center">
                  <MapPin size={14} className="text-text-muted" />
                </div>
                <span className="text-sm font-mono">{siteConfig.location}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                Redes
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group w-fit"
                >
                  <div className="w-8 h-8 rounded-md bg-surface border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors duration-200">
                    <LinkedinIcon size={14} className="text-text-muted group-hover:text-accent transition-colors duration-200" />
                  </div>
                  <span className="text-sm font-mono text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                    linkedin.com/in/rodrigorodriguezf
                  </span>
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group w-fit"
                >
                  <div className="w-8 h-8 rounded-md bg-surface border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors duration-200">
                    <GithubIcon size={14} className="text-text-muted group-hover:text-accent transition-colors duration-200" />
                  </div>
                  <span className="text-sm font-mono text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                    github.com/RodrigoRodriguez1
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-text-muted mb-1.5">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-text-muted mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-text-muted mb-1.5">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Conte sobre a oportunidade ou projeto..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={cn(inputClass, 'resize-none')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={state === 'sending' || state === 'sent'}
                whileHover={{ scale: state === 'idle' ? 1.01 : 1 }}
                whileTap={{ scale: state === 'idle' ? 0.99 : 1 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  'w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                  state === 'idle' && 'bg-text-primary text-background hover:bg-white/90',
                  state === 'sending' && 'bg-surface border border-border text-text-muted cursor-wait',
                  state === 'sent' && 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 cursor-default',
                  state === 'error' && 'bg-red-500/10 border border-red-500/30 text-red-400',
                )}
              >
                {state === 'idle' && (
                  <>
                    <Send size={14} />
                    Enviar mensagem
                  </>
                )}
                {state === 'sending' && (
                  <span className="font-mono text-xs">Abrindo cliente de email...</span>
                )}
                {state === 'sent' && (
                  <span className="font-mono text-xs">✓ Mensagem preparada — verifique seu email</span>
                )}
                {state === 'error' && (
                  <span className="font-mono text-xs">Erro ao enviar — tente por email diretamente</span>
                )}
              </motion.button>

              {state === 'idle' && (
                <p className="text-[11px] font-mono text-text-muted text-center">
                  Abre seu cliente de email com a mensagem preenchida.
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
