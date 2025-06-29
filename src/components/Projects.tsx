import { Globe, Video, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const projects = [
  {
    title: 'Praisely',
    description: 'A SaaS platform that enables businesses to collect and display customer reviews via unique product pages and customizable “Wall of Love” embeds.',
    image: '/praisely.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Mongoose', 'Vercel'],
    visit: 'https://praisely.vercel.app',
    demo: 'https://youtu.be/_e1InT-G2Lc?si=sZ17bcn3zCTg5HNk',
    featured: true,
  },
  {
    title: 'Plant',
    description: 'A full-stack application designed for landscaping businesses to manage clients, inventory, and scheduling in real-time.',
    image: '/plant.png',
    technologies: ['React Native', 'Expo', 'Firebase'],
    visit: 'https://plan-t.ca',
    demo: 'https://plan-t.ca',
    featured: true,
  },
  {
    title: 'Peekabite',
    description: 'An AI-powered mobile app that scans food barcodes and delivers personalized nutritional insights using OpenAI\'s LLMs.',
    image: '/peekabite.png',
    technologies: ['Next.js', 'Supabase', 'Tailwind CSS'],
    visit: 'https://peekabite.ca',
    demo: 'https://youtu.be/yQRrk_TNynE?si=pQY7erqqjEk4n7my',
    featured: true,
  },
  {
    title: 'Mailstorm',
    description: 'Effortless Bulk Emails, Personalized for Everyone. In 3 simple steps.',
    image: '/mailstorm.png',
    technologies: ['React', 'Express', 'SendGrid'],
    visit: 'https://mailstorm.vercel.app',
    demo: 'https://mailstorm.vercel.app',
    featured: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've worked on recently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Visit
                      </Button>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        <Video className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                

                <div className="flex space-x-4">
                  <a
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Visit
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/ishjotsb" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}