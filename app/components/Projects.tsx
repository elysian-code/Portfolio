import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/card"
import { Badge } from "@/app/components/badge"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "WebSockets"],
    liveUrl: "https://example-taskapp.com",
    githubUrl: "https://github.com/yourusername/task-management-app",
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

