'use client'

import React from "react"
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import AboutMe from '@/components/aboutMe'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
//import Certifications from '@/components/certifications'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            <Experience />
            <Projects />

            <Footer />
        </main>
    )
}