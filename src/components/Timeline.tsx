import { Calendar, MapPin, Building, Briefcase, Book } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const experiences = [
  {
    type: 'professional',
    title: 'Mobile Developer (Contract)',
    company: 'Fluidwave',
    location: 'Vancouver, Canada',
    period: 'Feb 2025 - April 2025',
    description: 'Led development of scalable microservices architecture, improving system performance by 40%. Mentored junior developers and implemented best practices for code quality.',
    technologies: ['React Native', 'TypeScript', 'Clerk', 'LiveKit', 'CapacitorJS'],
  },
  {
    type: 'professional',
    title: 'Product Engineer',
    company: 'Smart Energy Water',
    location: 'Noida, India',
    period: 'July 2021 - July 2023',
    description: 'Built and maintained full-stack web applications serving 10k+ users. Collaborated with product team to deliver features that increased user engagement by 25%.',
    technologies: ['ASP.NET', 'C#', 'JavaScript', 'LinQ', 'SQL Server', 'jQuery'],
  },
  {
    type: 'education',
    title: 'Bachelor of Engineering in Electronics and Computers',
    company: 'Thapar University',
    location: 'Patiala, Punjab',
    period: '2017 - 2021',
    description: 'Graduated with honors. Focused on algorithms, data structures, and software engineering principles. Active in coding competitions and tech clubs.'
  },
  {
    type: 'education',
    title: 'Post Graduation in Web and Mobile App Development',
    company: 'Langara College',
    location: 'Vancouver, Canada',
    period: '2023 - 2024',
    description: 'Graduated with honors. Focused on algorithms, data structures, and software engineering principles. Active in coding competitions and tech clubs.'
  },
  {
    type: 'professional',
    title: 'Product Engineer - Intern',
    company: 'Smart Energy Water',
    location: 'Noida, India',
    period: 'January 2021 - June 2021',
    description: 'Developed automated testing frameworks that reduced manual testing time by 60%. Worked on API integration and database optimization.',
  },
]

export function Timeline() {
  const sortedExperiences = [...experiences].sort((a, b) => {
    // Extract starting year from period string
    const getStartYear = (period: string) => {
      // Handles '2023 - Present', 'July 2021 - July 2023', etc.
      const match = period.match(/(\d{4})/);
      return match ? parseInt(match[1], 10) : 0;
    };
    return getStartYear(b.period) - getStartYear(a.period);
  });

  return (
    <section id="timeline" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and education
          </p>
        </div>

        <div className="relative">
          {/* Center timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-border hidden md:block"></div>

          {/* Mobile Layout */}
          <div className="block md:hidden space-y-8">
            {sortedExperiences.map((experience, index) => {
              const Icon = experience.type === 'professional' ? Briefcase : Book;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`flex items-center justify-center rounded-full bg-background border-2 ${
                      experience.type === 'professional' ? 'border-primary' : 'border-secondary'
                    } w-12 h-12 shadow-md flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {index !== sortedExperiences.length - 1 && (
                      <div className="w-1 bg-border flex-1 mt-4" style={{ minHeight: '60px' }}></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-medium">{experience.period}</span>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {experience.description}
                        </p>
                        {experience.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            {sortedExperiences.map((experience, index) => {
              const isLeft = index % 2 === 0;
              const Icon = experience.type === 'professional' ? Briefcase : Book;
              
              return (
                <div key={index} className="relative flex items-center mb-12 last:mb-0">
                  {/* Left side content */}
                  <div className="w-1/2 pr-8">
                    {isLeft && (
                      <div className="text-right">
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {experience.title}
                            </h3>
                            <div className="flex items-center justify-end text-muted-foreground mb-2">
                              <span className="font-medium mr-2">{experience.company}</span>
                              <Building className="h-4 w-4" />
                            </div>
                            <div className="flex items-center justify-end text-muted-foreground text-sm mb-2">
                              <span className="mr-2">{experience.location}</span>
                              <MapPin className="h-4 w-4" />
                            </div>
                            <div className="flex items-center justify-end text-muted-foreground text-sm mb-4">
                              <span className="font-medium mr-2">{experience.period}</span>
                              <Calendar className="h-4 w-4" />
                            </div>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {experience.description}
                            </p>
                            {experience.technologies && (
                              <div className="flex flex-wrap gap-2 justify-end">
                                {experience.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>

                  {/* Center timeline icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`flex items-center justify-center rounded-full bg-background border-2 ${
                      experience.type === 'professional' ? 'border-primary' : 'border-secondary'
                    } w-12 h-12 shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Right side content */}
                  <div className="w-1/2 pl-8">
                    {!isLeft && (
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {experience.title}
                          </h3>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <Building className="h-4 w-4 mr-2" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground text-sm mb-2">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground text-sm mb-4">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="font-medium">{experience.period}</span>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {experience.description}
                          </p>
                          {experience.technologies && (
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}