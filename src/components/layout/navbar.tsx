"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Logo from "../logo/logo"
import { socials } from "@/data/socials"
import { FaBars, FaTimes } from "react-icons/fa"

interface NavLink {
  name: string
  href: string
  icon: React.ReactNode
}

interface NavBarProps {
  navLinks: NavLink[]
}

function NavBar({ navLinks }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
          <Link className="flex items-center gap-2" href="#" onClick={closeMobileMenu}>
            <Logo props={{ width: 32, height: 32 }} />
            <span className="text-lg font-bold text-neutral-950">
              John Waver Aguilar
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Button
              className="lg:hidden"
              size="icon"
              variant="outline"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
              )}
            </Button>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-72 bg-white border-l border-neutral-200 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full overflow-y-auto">
              <nav className="flex-1 p-6">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-4 text-base font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
                    >
                      <span className="text-xl text-neutral-500">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="border-t border-neutral-200 p-6">
                <p className="text-xs font-semibold text-neutral-500 mb-4 uppercase tracking-wider">
                  Connect
                </p>
                <div className="flex flex-col gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar
