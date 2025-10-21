import Image from "next/image"
import { certifications } from "@/data/certifications"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa"

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-white"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <FaCertificate className="h-8 w-8 text-neutral-700" />
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-950">
              Certifications
            </h2>
          </div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my
            technical expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification) => (
            <Card
              key={certification.id}
              className="group hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0 bg-neutral-50 rounded-lg p-2 border border-neutral-200">
                    <Image
                      src={"/certificates/logo/" + certification.companyLogo}
                      alt={certification.company}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <CardTitle className="text-lg leading-tight">
                  {certification.name}
                </CardTitle>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-neutral-700">
                    {certification.company}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {certification.date}
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4"
                  asChild
                >
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential
                    <FaExternalLinkAlt className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
