'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Image from 'next/image'
import React from "react"

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            description: 'Plataforma de e-commerce moderna con carrito de compras, pasarela de pago integrada y panel de administración completo.',
            image: '/projects/ecommerce.jpg', // Necesitarás añadir estas imágenes
            technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
            githubUrl: 'https://github.com/tu-usuario/ecommerce-platform',
            liveUrl: 'https://tu-ecommerce.vercel.app',
            category: 'fullstack'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y sistema de notificaciones.',
            image: '/projects/taskapp.jpg',
            technologies: ['React', 'Firebase', 'Material-UI', 'Context API'],
            githubUrl: 'https://github.com/tu-usuario/task-management',
            liveUrl: 'https://task-manager-demo.vercel.app',
            category: 'frontend'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Dashboard meteorológico interactivo con mapas, pronósticos detallados y visualización de datos en tiempo real.',
            image: '/projects/weather.jpg',
            technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
            githubUrl: 'https://github.com/tu-usuario/weather-dashboard',
            liveUrl: 'https://weather-dash-demo.vercel.app',
            category: 'frontend'
        },
        {
            id: 4,
            title: 'Social Media API',
            description: 'API RESTful para una red social con autenticación JWT, upload de imágenes y sistema de posts en tiempo real.',
            image: '/projects/api.jpg',
            technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
            githubUrl: 'https://github.com/tu-usuario/social-api',
            liveUrl: 'https://social-api-docs.vercel.app',
            category: 'backend'
        },
        {
            id: 5,
            title: 'Portfolio Website',
            description: 'Mi portfolio personal con animaciones Three.js, diseño responsive y optimizado para SEO.',
            image: '/projects/portfolio.jpg',
            technologies: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
            githubUrl: 'https://github.com/tu-usuario/portfolio',
            liveUrl: 'https://tu-portfolio.vercel.app',
            category: 'frontend'
        },
        {
            id: 6,
            title: 'Crypto Tracker',
            description: 'Aplicación para tracking de criptomonedas con gráficos interactivos, alertas de precio y portfolio personal.',
            image: '/projects/crypto.jpg',
            technologies: ['React', 'TypeScript', 'CoinGecko API', 'Recharts'],
            githubUrl: 'https://github.com/tu-usuario/crypto-tracker',
            liveUrl: 'https://crypto-tracker-demo.vercel.app',
            category: 'frontend'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Mis <span className="text-primary">Proyectos</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="glass rounded-xl overflow-hidden group hover:glass-orange transition-all duration-300"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gray-800 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center">
                                    <Eye className="w-12 h-12 text-primary opacity-50" />
                                </div>
                                {/* Placeholder for actual images */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                    <span className="text-gray-500 font-medium">{project.title}</span>
                                </div>

                                {/* Overlay with links */}
                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github className="w-5 h-5 text-white" />
                                    </motion.a>
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary/80 rounded-full hover:bg-primary transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ExternalLink className="w-5 h-5 text-white" />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                    {project.category}
                  </span>
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-800 text-primary text-xs rounded-full border border-primary/30"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <motion.a
                        href="https://github.com/tu-usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 glass-orange px-8 py-3 rounded-lg font-medium hover:bg-primary/20 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github className="w-5 h-5" />
                        Ver todos mis proyectos en GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects