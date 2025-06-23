import { ArrowDown, Github, Linkedin, Mail, Calendar } from 'lucide-react'
import { Button } from './ui/button'


import { useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'

export function Hero() {
  const scrollToSkills = () => {
    const element = document.getElementById('skills')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const { theme } = useTheme();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (theme !== 'dark') return;
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Subtle cursor gradient for dark mode */}
      {theme === 'dark' && (
        <div
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 5,
            background: `radial-gradient(600px at ${cursor.x}px ${cursor.y}px, rgba(255,255,255,0.07) 0%, transparent 80%)`,
            transition: 'background 0.2s',
          }}
        />
      )}
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <img
            src="/me.jpg"
            alt="Ishjot Singh"
            className="mx-auto mb-8 rounded-full shadow-lg object-cover w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 border-4 border-background"
            width={192}
            height={192}
          />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ishjot Singh
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Software Development Engineer
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building scalable applications 
            that make a difference. Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <a href="mailto:ishjotca@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://calendly.com/ishjotca/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Meeting
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/ishjotsb" className="text-muted-foreground hover:text-primary transition-colors duration-200" target='_blank' rel='noopener noreferrer'>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/ishjotsb" className="text-muted-foreground hover:text-primary transition-colors duration-200" target='_blank' rel='noopener noreferrer'>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:ishjotca@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200" target='_blank' rel='noopener noreferrer'>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToSkills}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <ArrowDown className="h-6 w-6 mx-auto" />
        </button>
      </div>
    </section>
  )
}