"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaEnvelope, FaPaperPlane, FaCheckCircle } from "react-icons/fa"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" })
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Failed to send message")
      }
    } catch {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white"
    >
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="h-8 w-8 text-neutral-700" />
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-950">
              Get In Touch
            </h2>
          </div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-neutral-950"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-neutral-950"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-neutral-950"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-transparent"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-neutral-950"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  maxLength={5000}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  <FaCheckCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  <p className="text-sm font-medium">
                    {errorMessage || "Failed to send message. Please try again or email me directly."}
                  </p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Contact
