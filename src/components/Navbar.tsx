import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { Button } from './ui/button'
import './logo-font.css'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'timeline' },
    { label: 'Projects', id: 'projects' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16">
          <div className="logo-font text-2xl sm:text-3xl tracking-wide bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Ishjot Singh
          </div>

          {/* Desktop Navigation - perfectly centered */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            {/* Download CV Button - Desktop */}
            <a
              href="/cv.pdf"
              download
              className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-medium text-sm"
              style={{ textDecoration: 'none' }}
            >
              <Download size={16} />
              Download CV
            </a>
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              {/* Download CV Button - Mobile */}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-medium text-sm mt-2"
                style={{ textDecoration: 'none' }}
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}