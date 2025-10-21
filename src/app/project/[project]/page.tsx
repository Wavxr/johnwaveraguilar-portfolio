"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { projects } from "@/data/projects"
import { Card, CardContent, CardDescription, CardHeader, CardTags, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa"
import { useState } from "react"
import NavBar from "@/components/layout/NavBar"
import Footer from "@/components/layout/footer"
import { homeNavLinks } from "@/constants/navlinks"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const projectSlug = params.project as string
  
  const project = projects.find(p => p.slug === projectSlug)
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (!project || project.imageCount < 3) {
    router.push("/#projects")
    return null
  }

  const imageNumbers = Array.from({ length: project.imageCount }, (_, i) => i + 1)

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar navLinks={homeNavLinks} />
      
      <main className="flex-1 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <Button 
            variant="outline" 
            onClick={() => router.push("/#projects")}
            className="mb-8"
          >
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Button>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <CardTitle className="text-3xl mb-2">{project.name}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </div>
                <div className="flex gap-2 shrink-0">
                  {project.link && (
                    <Button variant="default" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="mr-2" />
                        View Site
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <CardTags tags={project.tags} />
            </CardHeader>

            {project.imageCount > 0 && (
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {imageNumbers.map(num => (
                    <button
                      key={num}
                      onClick={() => setSelectedImage(num)}
                      className="aspect-video relative overflow-hidden rounded-lg bg-neutral-100 border-2 border-neutral-200 hover:ring-2 hover:ring-neutral-900 transition-all"
                    >
                      <Image
                        src={`${project.imageFolder}/${num}.jpg`}
                        alt={`${project.name} screenshot ${num}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </main>

      <Footer />

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-neutral-300"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <div className="relative max-w-7xl max-h-full">
            <Image
              src={`${project.imageFolder}/${selectedImage}.jpg`}
              alt={`${project.name} screenshot ${selectedImage}`}
              width={1920}
              height={1080}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <Button
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(prev => prev === 1 ? project.imageCount : (prev ?? 1) - 1)
              }}
              disabled={selectedImage === 1}
            >
              Previous
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(prev => prev === project.imageCount ? 1 : (prev ?? 1) + 1)
              }}
              disabled={selectedImage === project.imageCount}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}