'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import React from "react"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/Puma-16',
            color: 'hover:text-gray-300'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/dionisio-de-diego-sepúlveda-6643aa352',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'dionisiodediegosepulveda@gmail.com',
            color: 'hover:text-primary'
        }
    ]

    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-2">
                            {'<Dev />'}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Creando experiencias web excepcionales, una línea de código a la vez.
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center space-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 ${link.color} transition-colors`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <link.icon className="w-6 h-6" />
                                <span className="sr-only">{link.name}</span>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Back to Top */}
                    <motion.div
                        className="flex justify-end"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.button
                            onClick={scrollToTop}
                            className="glass p-3 rounded-full hover:glass-orange transition-all group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ArrowUp className="w-5 h-5 text-primary group-hover:animate-bounce" />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    className="border-t border-gray-800 mt-8 pt-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
                        © {currentYear} Dionisio de Diego Sepúlveda.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer