import { ThemeProvider } from './components/ThemeProvider'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Timeline } from './components/Timeline'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { CursorGradient } from './components/CursorGradient'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <CursorGradient />
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Timeline />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App