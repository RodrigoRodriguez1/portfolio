import { Navbar, Footer } from '@/components/layout'
import { Hero, About, Experience, Stack, Timeline, Cases, Contact } from '@/components/sections'

function App() {
  return (
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
  )
}

export default App
