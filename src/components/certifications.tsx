'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, BadgeCheck } from 'lucide-react'
import React from "react"

const Certifications = () => {
    const certifications = [
        {
            title: 'React - The Complete Guide',
            issuer: 'Udemy',
            date: 'Nov 2023',
            credentialId: 'UC-XXXXXXXX',
            url: 'https://udemy.com/certificate/...',
            color: 'from-blue-500/20 to-cyan-500/20',
            border: 'border-blue-500/30',
            icon: '⚛️',
        },
        {
            title: 'JavaScript Algorithms and Data Structures',
            issuer: 'freeCodeCamp',
            date: 'Sep 2023',
            credentialId: 'FCC-XXXXXXXX',
            url: 'https://freecodecamp.org/certification/...',
            color: 'from-green-500/20 to-emerald-500/20',
            border: 'border-green-500/30',
            icon: '🟨',
        },
        {
            title: 'Next.js & React — The Complete Guide',
            issuer: 'Udemy',
            date: 'Feb 2024',
            credentialId: 'UC-YYYYYYYY',
            url: 'https://udemy.com/certificate/...',
            color: 'from-gray-500/20 to-slate-500/20',
            border: 'border-gray-400/30',
            icon: '▲',
        },
        {
            title: 'Responsive Web Design',
            issuer: 'freeCodeCamp',
            date: 'Jul 2023',
            credentialId: 'FCC-ZZZZZZZZ',
            url: 'https://freecodecamp.org/certification/...',
            color: 'from-orange-500/20 to-amber-500/20',
            border: 'border-orange-500/30',
            icon: '🎨',
        },
        {
            title: 'Node.js — The Complete Bootcamp',
            issuer: 'Udemy',
            date: 'Apr 2024',
            credentialId: 'UC-AAAAAAAA',
            url: 'https://udemy.com/certificate/...',
            color: 'from-green-600/20 to-lime-500/20',
            border: 'border-green-600/30',
            icon: '🟢',
        },
        {
            title: 'Git & GitHub Masterclass',
            issuer: 'Udemy',
            date: 'Jun 2023',
            credentialId: 'UC-BBBBBBBB',
            url: 'https://udemy.com/certificate/...',
            color: 'from-red-500/20 to-orange-500/20',
            border: 'border-red-500/30',
            icon: '🔧',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    }

    return (
        <section id="certifications" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Mis <span className="text-primary">Certificaciones</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Formación continua y certificados que avalan mi aprendizaje en el mundo del desarrollo
                    </p>
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            <motion.div
                                className={`glass rounded-xl p-6 h-full border ${cert.border} hover:glass-orange transition-all duration-300 relative overflow-hidden flex flex-col justify-between`}
                                whileHover={{ scale: 1.03 }}
                            >
                                {/* Background gradient glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none`} />

                                {/* Top: icon + verified badge */}
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-2xl">
                                                {cert.icon}
                                            </div>
                                            <div>
                                                <span className="text-xs text-gray-400 font-medium">{cert.issuer}</span>
                                                <div className="flex items-center gap-1 mt-0.5">
                                                    <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                                                    <span className="text-xs text-primary font-semibold">Verificado</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Award className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>

                                    {/* Date + credential */}
                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{cert.date}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 font-mono mb-4 truncate">
                                        ID: {cert.credentialId}
                                    </p>
                                </div>

                                {/* Footer: link */}
                                <motion.a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors group/link"
                                    whileHover={{ x: 4 }}
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Ver credencial
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Certifications