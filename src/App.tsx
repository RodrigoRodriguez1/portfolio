import { ThemeProvider } from '@/context/ThemeContext'
import { Navbar, Footer } from '@/components/layout'
import { Hero, About, Experience, Stack, Timeline, Cases, Contact } from '@/components/sections'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text-primary">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Stack />
          <Timeline />
          <Cases />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
