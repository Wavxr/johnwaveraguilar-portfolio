import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { socials } from "@/data/socials"
import { FaGithub, FaLinkedin, FaFileDownload, FaFacebook, FaEnvelope } from "react-icons/fa"

function Hero() {
  const socialIcons = {
    github: <FaGithub className="h-5 w-5" />,
    linkedin: <FaLinkedin className="h-5 w-5" />,
    resume: <FaFileDownload className="h-5 w-5" />,
    facebook: <FaFacebook className="h-5 w-5" />,
    gmail: <FaEnvelope className="h-5 w-5" />,
  }

  const displayedSocials = socials.filter(
    (social) => social.id === "github" || social.id === "linkedin" || social.id === "resume"
  )

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-white"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-950 tracking-tight">
                John Waver
                <br />
                Aguilar
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 font-medium">
                Software Engineer & ML Enthusiast
              </p>
            </div>

            <p className="text-base md:text-lg text-neutral-700 leading-relaxed max-w-xl">
              Building innovative solutions with modern web technologies and
              machine learning. Passionate about creating impactful applications
              that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {displayedSocials.map((social) => (
                <Button key={social.id} variant="outline" asChild>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center gap-2"
                  >
                    {socialIcons[social.id as keyof typeof socialIcons]}
                    <span className="font-medium">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-neutral-950">
                    FEU Institute of Technology
                  </p>
                  <p className="text-sm text-neutral-600">
                    B.S in Computer Science - Software Engineering
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-neutral-200 rounded-2xl" />
              <div className="relative w-full h-full p-8">
                <Image
                  src="/hero/face.jpg"
                  alt="John Waver Aguilar"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
