import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"
import { Card, CardContent, CardDescription, CardHeader, CardTags, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"

export function Projects() {
  const sweMLProjects = projects.filter(project => project.category === "swe-ml")
  const universityProjects = projects.filter(project => project.category === "university")

  const renderProjectCard = (project: typeof projects[0]) => {
    const hasGallery = project.imageCount >= 3
    const cardContent = (
      <Card className={`h-full flex flex-col ${hasGallery ? 'hover:shadow-lg transition-shadow' : ''}`}>
        <div className="p-4">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 border border-neutral-200">
            <Image
              src={project.thumbnail}
              alt={project.name}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <CardHeader className="flex-grow pt-0">
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <CardTags tags={project.tags} />
          <div className="flex gap-2 mt-6">
            {project.link && (
              <Button
                size="default"
                variant="default"
                asChild
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Site
                </a>
              </Button>
            )}
            {project.github && (
              <Button
                size="default"
                variant="outline"
                asChild
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )

    return hasGallery ? (
      <Link key={project.id} href={`/project/${project.slug}`}>
        {cardContent}
      </Link>
    ) : (
      <div key={project.id}>
        {cardContent}
      </div>
    )
  }

  return (
    <section id="projects" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A collection of software engineering, machine learning, and academic projects
            showcasing practical applications and technical implementations.
          </p>
        </div>

        <Tabs defaultValue="swe-ml" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="swe-ml">SWE &amp; ML</TabsTrigger>
            <TabsTrigger value="university">University</TabsTrigger>
          </TabsList>

          <TabsContent value="swe-ml">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sweMLProjects.map(renderProjectCard)}
            </div>
          </TabsContent>

          <TabsContent value="university">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universityProjects.map(renderProjectCard)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
