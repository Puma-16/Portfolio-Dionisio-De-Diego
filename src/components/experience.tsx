'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import React from "react"

const Experience = () => {
    const experiences = [
        {
            title: 'Desarrollador Web Junior',
            company: '3XA',
            location: 'Remoto',
            period: '2026 - Presente',
            description: 'Desarrollo de aplicaciones web personalizadas usando PHP , python e herramientad de IA.',
            technologies: ['PHP', 'Python','HTML','CSS','JavaScript','Claude code'],
            type: 'practicas'
        }
    ]

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'freelance':
                return 'bg-primary text-black'
            case 'internship':
                return 'bg-blue-500 text-white'
            case 'project':
                return 'bg-green-500 text-white'
            case 'education':
                return 'bg-purple-500 text-white'
            default:
                return 'bg-gray-500 text-white'
        }
    }

    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'freelance':
                return 'Freelance'
            case 'internship':
                return 'Prácticas'
            case 'project':
                return 'Proyecto'
            case 'education':
                return 'Educación'
            default:
                return type
        }
    }

    return (
        <section id="experience" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Mi <span className="text-primary">Experiencia</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Mi experiencia en el sector laboral
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative flex items-start mb-12 last:mb-0"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-black z-10"></div>

                                {/* Content card */}
                                <div className="ml-16 w-full">
                                    <motion.div
                                        className="glass p-6 rounded-xl hover:glass-orange transition-all duration-300 group"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        {/* Header */}
                                        <div className="flex flex-wrap items-start justify-between mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 text-xs rounded-full font-medium ${getTypeColor(exp.type)}`}>
                            {getTypeLabel(exp.type)}
                          </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                                    {exp.title}
                                                </h3>
                                                <h4 className="text-primary font-semibold flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4" />
                                                    {exp.company}
                                                </h4>
                                            </div>
                                        </div>

                                        {/* Meta info */}
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {exp.location}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Technologies */}
                                        <div>
                                            <h5 className="text-white font-semibold mb-2">Tecnologías utilizadas:</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-gray-800 text-primary text-sm rounded-full border border-primary/30 hover:bg-primary/10 transition-colors"
                                                    >
                            {tech}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience