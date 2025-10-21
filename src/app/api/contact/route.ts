import { NextRequest, NextResponse } from "next/server"
import sendEmail from "@/utils/email"
import { checkRateLimit } from "@/utils/rateLimit"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  honeypot?: string
}

const suspiciousPatterns = [
  /http[s]?:\/\//gi,
  /<script>/gi,
  /viagra|cialis|casino|poker|lottery/gi,
]

function containsSpam(text: string): boolean {
  return suspiciousPatterns.some((pattern) => pattern.test(text))
}

function getClientIdentifier(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0] : "unknown"
  return ip
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()

    const { name, email, subject, message, honeypot } = formData

    if (honeypot) {
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      )
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const clientId = getClientIdentifier(request)
    if (!checkRateLimit(clientId)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    if (name.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input exceeds maximum length" },
        { status: 400 }
      )
    }

    if (containsSpam(message) || containsSpam(subject)) {
      return NextResponse.json(
        { error: "Suspicious content detected" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    const emailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3>New Contact Form Submission</h3>
          <hr>
          <p><strong>Name:</strong><br>${name}</p>
          <p><strong>Email:</strong><br>${email}</p>
          <p><strong>Subject:</strong><br>${subject}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
          <hr>
        </body>
      </html>
    `

    await sendEmail(
      process.env.EMAIL_SERVER_USER || "",
      `Portfolio Contact: ${subject}`,
      emailHtml
    )

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
