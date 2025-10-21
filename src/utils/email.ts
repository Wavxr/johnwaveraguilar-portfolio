import { createTransport } from "nodemailer"

const mailerConfig = {
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
}

const createEmailTransporter = async () => {
  const transporter = createTransport({
    ...mailerConfig,
    pool: true,
    from: `John Waver Aguilar Portfolio <${process.env.EMAIL_SERVER_USER}>`,
    opportunisticTLS: true,
    priority: "high",
    connectionTimeout: 10 * 60 * 1000,
    greetingTimeout: 5 * 60 * 1000,
  })
  return transporter
}

async function sendEmail(to: string, subject: string, html: string) {
  try {
    const emailTransporter = await createEmailTransporter()
    await emailTransporter.sendMail({
      to,
      subject,
      html,
    })
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}

export default sendEmail
