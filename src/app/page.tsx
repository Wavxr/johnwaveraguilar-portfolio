"use client"

import Hero from "@/components/sections/hero"
import Skills from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import Certifications from "@/components/sections/certifications"
import ContactForm from "@/components/sections/contact"
import Footer from "@/components/layout/footer"
import NavBar from "@/components/layout/navbar"
import { homeNavLinks } from "@/constants/navlinks"

export default function Home() {
	return (
		<>
			<NavBar navLinks={homeNavLinks} />
			<Hero />
			<Skills />
			<Projects />
			<Certifications />
			<ContactForm />
			<Footer />
		</>
	)
}