'use client'

import React from "react"
import Starfield from '@/components/starfield'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import AboutMe from '@/components/aboutMe'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Certifications from '@/components/certifications'
import Footer from '@/components/footer'
import Manifesto from "@/components/manifesto"

export default function Home() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <div className="lg:pr-[96px]">
                <Starfield />
                <Hero />
                <AboutMe />
                <Manifesto />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Footer />
            </div>
        </main>
    )
}