# Rodrigo Rodriguez — Portfolio

Personal portfolio site for Rodrigo Rodriguez, Senior Full Stack Engineer specialized in financial systems, microservices architecture, and cloud-native infrastructure.

**Live:** [rodrigorodriguez.dev](https://rodrigorodriguez.dev)  
**LinkedIn:** [linkedin.com/in/rodrigorodriguezf](https://www.linkedin.com/in/rodrigorodriguezf/)  
**GitHub:** [github.com/RodrigoRodriguez1](https://github.com/RodrigoRodriguez1)

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | TailwindCSS 3 |
| Animation | Framer Motion |
| UI Primitives | Radix UI / shadcn-compatible |
| Icons | Lucide React |
| Deploy | Vercel |

---

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar (sticky + blur + progress bar), Footer
│   ├── sections/        # Hero, About, Experience, Stack, Timeline, Cases, Contact
│   └── shared/          # AnimatedSection, SectionHeader, Badge, GradientText, SocialIcons
├── data/                # Structured content: experience, stack, cases, timeline, siteConfig
├── hooks/               # useScrollProgress, useInView
├── lib/                 # cn(), formatDate(), scrollToSection()
├── styles/              # globals.css (CSS variables, utilities)
└── types/               # TypeScript interfaces
```

---

## Getting Started

```bash
# Clone
git clone https://github.com/RodrigoRodriguez1/portfolio.git
cd portfolio

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

---

## Design Decisions

- **Dark mode only** — no toggle, deliberate positioning
- **Single accent color** — `#3b82f6` (blue), nothing else
- **Font** — DM Sans (display) + DM Mono (labels, code)
- **No profile photo** — focus on technical depth, not aesthetics
- **No particle effects** — elegance over visual noise
- **Subtle grid background** — Linear.app inspired
- **Sticky nav with blur** — Vercel/Ramp inspired
- **Framer Motion** — `ease: [0.22, 1, 0.36, 1]`, max 0.55s duration, no bounce

---

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub Integration

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

The `vercel.json` is already configured for SPA routing.

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, title, tagline, CTAs, status badge, tech strip |
| **About** | Professional bio, stats, current role, certifications |
| **Experience** | Accordion timeline: FCamara/BTG, Espresso/Banco Master, dti digital, THOTH, tksi/USP |
| **Stack** | 45+ technologies filtered by category with proficiency levels |
| **Timeline** | Horizontal (desktop) / vertical (mobile) career timeline 2018→2026 |
| **Cases** | 3 detailed cases: AWS multi-region migration, Design System, Débito Automático |
| **Contact** | mailto-based form, direct links to email, LinkedIn, GitHub |

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values if integrating EmailJS:

```bash
cp .env.example .env.local
```

The contact form works without any env vars via `mailto:` fallback.

---

## License

MIT — feel free to use as inspiration, but please swap out the personal content.
