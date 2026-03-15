'use client'

import { motion } from 'framer-motion'
import { Code, Coffee, Lightbulb, Heart } from 'lucide-react'
import React from "react"

const AboutMe = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    }

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    const stats = [
        { icon: Code, label: 'Proyectos', value: '15+' },
        { icon: Coffee, label: 'Café consumido', value: '∞' },
        { icon: Lightbulb, label: 'Ideas ejecutadas', value: '25+' },
        { icon: Heart, label: 'Pasión', value: '100%' },
    ]

    return (
        <section id="about" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Sobre <span className="text-primary">mí</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Bio */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-6 leading-relaxed">
                            Soy un desarrollador junior apasionado por la tecnología y el diseño. Mi journey comenzó
                            hace 2 años cuando descubrí el mundo del desarrollo web y quedé fascinado por la posibilidad
                            de crear experiencias digitales únicas.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-6 leading-relaxed">
                            Me especializo en tecnologías frontend modernas como React, Next.js y TypeScript,
                            siempre buscando escribir código limpio, eficiente y mantenible. Me encanta aprender
                            nuevas tecnologías y enfrentar desafíos que me permitan crecer profesionalmente.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Cuando no estoy programando, disfruto contribuir a proyectos open source, leer sobre
                            las últimas tendencias en desarrollo web, y explorar nuevas herramientas que puedan
                            mejorar mi workflow.
                        </motion.p>

                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-semibold text-white mb-4">Lo que me motiva:</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    Crear soluciones innovadoras y user-friendly
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    Aprendizaje continuo y mejora constante
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    Colaboración en equipos multidisciplinarios
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    Impacto positivo a través de la tecnología
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-2 gap-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="glass p-6 rounded-xl text-center group hover:glass-orange transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:animate-bounce" />
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe