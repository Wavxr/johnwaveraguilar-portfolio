import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Waver Aguilar - Portfolio",
  description: "Software Engineer & ML Enthusiast. Building innovative solutions with modern web technologies and machine learning.",
  icons: {
    icon: "/logo-500x500.webp",
    shortcut: "/logo-500x500.webp",
    apple: "/logo-500x500.webp",
  },
  openGraph: {
    title: "John Waver Aguilar - Portfolio",
    description: "Software Engineer & ML Enthusiast",
    images: ["/logo-500x500.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
