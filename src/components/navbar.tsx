'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import React from "react"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Sobre mí', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experiencia', href: '#experience' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Certificaciones', href: '#certifications' },
    ]

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'glass backdrop-blur-md py-4'
                    : 'py-6'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                    >
                        {'<Dev />'}
                    </motion.div>

                    {/* Navigation Items */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-white hover:text-primary transition-colors relative"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-white hover:text-primary transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar