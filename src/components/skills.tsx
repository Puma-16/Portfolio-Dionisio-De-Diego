'use client'

import { motion } from 'framer-motion'
import React, { useState } from "react"

const skills = [
    {
        name: 'Java',
        svg: (
            <svg viewBox="0 0 128 128" className="w-12 h-12">
                <path fill="#0074BD" d="M47.6 98.6s-4.8 2.8 3.4 3.7c9.9 1.1 15 1 25.9-.9 0 0 2.9 1.8 6.9 3.3-24.5 10.5-55.5-.6-36.2-6.1z"/>
                <path fill="#EA2D2E" d="M44.6 84.4s-5.4 4 2.8 4.9c10.6 1.1 19 1.2 33.5-1.6 0 0 2 2 5.2 3.1-29.7 8.7-62.7.7-41.5-6.4z"/>
                <path fill="#0074BD" d="M73.5 61.3c6 6.9-1.6 13.1-1.6 13.1s15.2-7.9 8.2-17.7c-6.5-9.2-11.5-13.7 15.5-29.4.1-.1-42.3 10.6-22.1 34z"/>
                <path fill="#EA2D2E" d="M100.2 108.6s3.6 2.9-3.9 5.2c-14.3 4.3-59.5 5.6-72.1.2-4.5-2 4-4.7 6.7-5.3 2.8-.6 4.4-.5 4.4-.5-5.1-3.6-32.9 7-14.1 10 51.2 8.3 93.4-3.7 78.9-9.6z"/>
                <path fill="#0074BD" d="M49.9 70.6s-23.4 5.5-8.3 7.5c6.4.9 19.2.7 31.1-.4 9.7-.9 19.5-2.8 19.5-2.8s-3.4 1.5-5.9 3.1c-23.7 6.2-69.6 3.3-56.4-3 11.2-5.2 20-4.4 20-4.4z"/>
                <path fill="#EA2D2E" d="M88.5 93.7c24.1-12.5 12.9-24.5 5.2-22.9-1.9.4-2.8.8-2.8.8s.7-1.1 2.1-1.6c15.6-5.5 27.6 16.2-4.9 24.8.1 0 .4-.3.4-.1z"/>
                <path fill="#0074BD" d="M77 2s13.4 13.4-12.7 34c-20.9 16.5-4.8 25.9 0 36.6-12.2-11-21.1-20.7-15.1-29.7C58 30.5 82.6 24.2 77 2z"/>
                <path fill="#EA2D2E" d="M52.2 126.2c23.1 1.5 58.6-.8 59.5-11.7 0 0-1.6 4.2-19.1 7.5-19.8 3.7-44.2 3.3-58.7.9-.1-.1 3 2.4 18.3 3.3z"/>
            </svg>
        )
    },
    {
        name: 'Spring Boot',
        svg: (
            <svg viewBox="0 0 128 128" className="w-12 h-12">
                <circle cx="64" cy="64" r="60" fill="#6DB33F"/>
                <path d="M92.1 34.6C83.5 26 71.7 21 58.7 21c-24.8 0-45 20.2-45 45 0 9.1 2.7 17.6 7.4 24.7L18 107l17-3c6.6 3.9 14.3 6.1 22.5 6.1h.2c24.8 0 45.3-20.2 45.3-45 0-12.1-4.7-23.4-10.9-30.5zm-33.4 69.1h-.1c-7.7 0-15.2-2.1-21.8-6l-1.6-.9-16.1 4.2 4.3-15.7-1-1.7c-4.3-6.9-6.5-14.8-6.5-23 0-23.8 19.4-43.2 43.3-43.2 11.5 0 22.4 4.5 30.5 12.7 8.1 8.1 12.6 19 12.6 30.6-.1 23.8-19.5 43-43.6 43z" fill="#fff"/>
                <path d="M84 74.2c-1.3-.6-7.5-3.7-8.7-4.1-1.1-.4-2-.6-2.8.6-.8 1.3-3.2 4.1-3.9 4.9-.7.8-1.5.9-2.7.3-1.3-.6-5.4-2-10.2-6.3-3.8-3.4-6.3-7.5-7.1-8.8-.7-1.3-.1-2 .5-2.6.6-.6 1.3-1.5 1.9-2.2.6-.7.8-1.3 1.3-2.1.4-.8.2-1.5-.1-2.1-.3-.6-2.8-6.8-3.9-9.3-.9-2.4-1.9-2.1-2.6-2.1h-2.3c-.8 0-2.1.3-3.3 1.5-1.1 1.3-4.2 4.1-4.2 10s4.3 11.6 4.9 12.4c.6.8 8.5 13 20.5 18.2 2.9 1.2 5.1 2 6.8 2.5 2.9.9 5.5.8 7.5.5 2.3-.3 7.1-2.9 8.1-5.7 1-2.8 1-5.2.7-5.7-.3-.5-1-.7-2.3-1.3z" fill="#6DB33F"/>
            </svg>
        )
    },
    {
        name: 'Python',
        svg: (
            <svg viewBox="0 0 128 128" className="w-12 h-12">
                <path d="M49.3 10.7C36.8 10.7 28 17 28 25.9v13.6h26.1v4.1H22.2C11.7 43.6 3 52.4 3 64s8.7 20.4 19.2 20.4H29V71.1c0-11.7 9.1-20.5 19.9-20.5H79c10.2 0 18.4-8.2 18.4-18.4V24.4C97.4 14.1 89.1 10.7 79 10.7H49.3zm-7.2 10.7c3.7 0 6.7 3 6.7 6.7 0 3.7-3 6.7-6.7 6.7-3.7 0-6.7-3-6.7-6.7 0-3.7 3-6.7 6.7-6.7z" fill="#3776AB"/>
                <path d="M78.7 117.3c12.5 0 21.3-6.3 21.3-15.2V88.5H74v-4.1h31.8c10.5 0 19.2-8.8 19.2-20.4S116.3 43.6 105.8 43.6H99v13.3c0 11.7-9.1 20.5-19.9 20.5H49c-10.2 0-18.4 8.2-18.4 18.4v21.8c0 10.3 8.3 13.7 18.4 13.7h29.7zm7.2-10.7c-3.7 0-6.7-3-6.7-6.7 0-3.7 3-6.7 6.7-6.7 3.7 0 6.7 3 6.7 6.7 0 3.7-3 6.7-6.7 6.7z" fill="#FFD43B"/>
            </svg>
        )
    },
    {
        name: 'HTML5',
        svg: (
            <svg viewBox="0 0 128 128" className="w-12 h-12">
                <path d="M19.6 4l7.4 83.5 37 10.5 37-10.5 7.4-83.5z" fill="#E44D26"/>
                <path d="M64 95.8l30-8.4 6.3-71.3H64v79.7z" fill="#F16529"/>
                <path d="M64 52H45.7l-1.2-13.5H64V25.6H30.7l3.4 38.3H64V52zm0 30.3l-.1.1-12.6-3.4-1.3-10.4H37l2.6 21 24.4 6.8V82.3z" fill="#EBEBEB"/>
                <path d="M63.9 52v13H80.6l-1.5 15.8-15.2 3.5v13.6l24.5-6.8 2.9-27.6.3-4H63.9zm0-26.5v13h32.5l.3-3.3.6-7 .3-2.7H63.9z" fill="#fff"/>
            </svg>
        )
    },
    {
        name: 'CSS3',
        svg: (
            <svg viewBox="0 0 128 128" className="w-12 h-12">
                <path d="M19.6 4l7.4 83.5 37 10.5 37-10.5 7.4-83.5z" fill="#1572B6"/>
                <path d="M64 95.8l30-8.4 6.3-71.3H64v79.7z" fill="#33A9DC"/>
                <path d="M64 52H46.6l1.1 13H64V52zm0-26.5H29.6l1.1 13h33.3V25.5z" fill="#EBEBEB"/>
                <path d="M64 82.3l-.1.1-12.6-3.4-1.3-10.4H37l2.6 21 24.4 6.8V82.3z" fill="#EBEBEB"/>
                <path d="M63.9 65H51.3l1.3 10.4 11.4 3.2V65zm.1-39.5v13h32.5l-.9 10H64v13h28.2l-3 27.6-25.2 7V96l24.5-6.8 4.4-48.7H64z" fill="#fff"/>
            </svg>
        )
    },
    {
        name: 'Angular',
        svg: (
            <svg viewBox="0 0 128 128" className="w-12 h-12">
                <path d="M64 4L8.6 24.5l8.3 71.8L64 124l47.1-27.7 8.3-71.8z" fill="#DD0031"/>
                <path d="M64 4v14.9-.1V124l47.1-27.7 8.3-71.8z" fill="#C3002F"/>
                <path d="M64 18.9L32.5 91.4h11.8l6.5-16.2h26.4l6.5 16.2h11.8zm9.2 45.3H54.8L64 40.9z" fill="#fff"/>
            </svg>
        )
    },
    {
        name: 'React',
        svg: (
            <svg viewBox="0 0 128 128" className="w-12 h-12">
                <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
                <g fill="none" stroke="#61DAFB" strokeWidth="5.5">
                    <ellipse cx="64" cy="64" rx="51" ry="19.6"/>
                    <ellipse cx="64" cy="64" rx="51" ry="19.6" transform="rotate(60 64 64)"/>
                    <ellipse cx="64" cy="64" rx="51" ry="19.6" transform="rotate(120 64 64)"/>
                </g>
            </svg>
        )
    },
    {
        name: 'Kotlin',
        svg: (
            <svg viewBox="0 0 128 128" className="w-12 h-12">
                <defs>
                    <linearGradient id="kGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E44857"/>
                        <stop offset="46%" stopColor="#C711E1"/>
                        <stop offset="100%" stopColor="#7F52FF"/>
                    </linearGradient>
                </defs>
                <path d="M8 8h56L8 67.5z" fill="url(#kGrad1)"/>
                <path d="M8 120l56-56L120 120z" fill="url(#kGrad1)"/>
                <path d="M8 8l56 56L120 8z" fill="url(#kGrad1)"/>
            </svg>
        )
    },
    {
        name: 'JavaScript',
        svg: (
            <svg viewBox="0 0 128 128" className="w-12 h-12">
                <rect width="128" height="128" fill="#F7DF1E"/>
                <path d="M116 96.2c0 13-7.6 18.9-18.7 18.9-9.9 0-15.7-5.2-18.6-11.5l10.1-6.1c1.9 3.4 3.7 6.2 7.9 6.2 4 0 6.6-1.6 6.6-7.7V52.4h12.7v43.8zm-36.7.8c0 15.1-8.9 22-21.7 22-11.6 0-18.4-6-21.8-13.3l10.1-5.9c2.5 4.3 5.8 7.5 11.5 7.5 4.8 0 7.9-2.4 7.9-8.6V52.4h14v44.6z"/>
            </svg>
        )
    },
    {
        name: 'MySQL',
        svg: (
            <svg viewBox="0 0 128 128" className="w-12 h-12">
                <path d="M10 25v15c0 8.3 24.2 15 54 15s54-6.7 54-15V25c0 8.3-24.2 15-54 15S10 33.3 10 25z" fill="#F29111"/>
                <ellipse cx="64" cy="25" rx="54" ry="15" fill="#00618A"/>
                <path d="M10 40v15c0 8.3 24.2 15 54 15s54-6.7 54-15V40c0 8.3-24.2 15-54 15S10 48.3 10 40z" fill="#00618A"/>
                <path d="M10 55v15c0 8.3 24.2 15 54 15s54-6.7 54-15V55c0 8.3-24.2 15-54 15S10 63.3 10 55z" fill="#F29111"/>
                <path d="M10 70v15c0 8.3 24.2 15 54 15s54-6.7 54-15V70c0 8.3-24.2 15-54 15S10 78.3 10 70z" fill="#00618A"/>
            </svg>
        )
    },
    {
        name: 'Git',
        svg: (
            <svg viewBox="0 0 128 128" className="w-12 h-12">
                <path d="M124.7 58.4L69.6 3.3C67.4 1.1 64.5 0 61.5 0c-3 0-5.9 1.1-8.1 3.3L42.2 14.5l13.7 13.7c2.2-.9 4.7-.5 6.5 1.3 1.9 1.9 2.3 4.7 1.1 7l13.2 13.2c2.3-1.2 5.1-.8 7 1.1 2.6 2.6 2.6 6.8 0 9.4-2.6 2.6-6.8 2.6-9.4 0-2-2-2.5-5-.9-7.5L60.1 39.5v34.2c.8.4 1.6.9 2.2 1.6 2.6 2.6 2.6 6.8 0 9.4-2.6 2.6-6.8 2.6-9.4 0-2.6-2.6-2.6-6.8 0-9.4.8-.8 1.8-1.4 2.8-1.7V38.9c-1-.4-2-.9-2.8-1.7-2-2-2.5-5-.9-7.5L38.5 16.1 3.3 51.4c-4.4 4.4-4.4 11.7 0 16.2l55.1 55.1c2.2 2.2 5.1 3.3 8.1 3.3 3 0 5.9-1.1 8.1-3.3l50.1-50.1c4.4-4.5 4.4-11.7 0-16.2z" fill="#F34F29"/>
            </svg>
        )
    },
]

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

    return (
        <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Mis <span className="text-primary">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Tecnologías y herramientas que domino para crear experiencias web excepcionales
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="relative"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            onHoverStart={() => setHoveredSkill(skill.name)}
                            onHoverEnd={() => setHoveredSkill(null)}
                        >
                            {/* Tooltip */}
                            <motion.div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-semibold text-white whitespace-nowrap pointer-events-none z-20"
                                style={{ background: '#FF6B00' }}
                                initial={{ opacity: 0, y: 4 }}
                                animate={
                                    hoveredSkill === skill.name
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 4 }
                                }
                                transition={{ duration: 0.15 }}
                            >
                                {skill.name}
                                <span
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                                    style={{ background: '#FF6B00' }}
                                />
                            </motion.div>

                            {/* Icon card: sin animar `background` para evitar el error de color */}
                            <motion.div
                                className="w-20 h-20 rounded-2xl flex items-center justify-center cursor-pointer"
                                style={{
                                    background: 'rgba(255,255,255,0.07)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                }}
                                whileHover={{
                                    scale: 1.18,
                                    boxShadow: '0 0 22px rgba(255,107,0,0.5)',
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {skill.svg}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills