import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a
              href="https://github.com/ishjotsb"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ishjotsb"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ishjotca@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Ishjot Singh
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}