'use client'

import { motion } from 'framer-motion'
import React from "react"

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend',
            skills: [
                { name: 'React', level: 85, icon: '⚛️' },
                { name: 'Next.js', level: 80, icon: '▲' },
                { name: 'TypeScript', level: 75, icon: '📘' },
                { name: 'JavaScript', level: 90, icon: '🟨' },
                { name: 'HTML5', level: 95, icon: '🌐' },
                { name: 'CSS3', level: 90, icon: '🎨' },
                { name: 'Tailwind CSS', level: 85, icon: '💨' },
            ]
        },
        {
            category: 'Backend & Tools',
            skills: [
                { name: 'Node.js', level: 70, icon: '🟢' },
                { name: 'Python', level: 65, icon: '🐍' },
                { name: 'Git & GitHub', level: 85, icon: '🔧' },
                { name: 'Docker', level: 60, icon: '🐳' },
                { name: 'MongoDB', level: 70, icon: '🍃' },
                { name: 'PostgreSQL', level: 65, icon: '🐘' },
            ]
        },
        {
            category: 'Design & Others',
            skills: [
                { name: 'Figma', level: 75, icon: '🎨' },
                { name: 'UI/UX Design', level: 70, icon: '📱' },
                { name: 'Responsive Design', level: 90, icon: '📐' },
                { name: 'SEO', level: 65, icon: '🔍' },
                { name: 'Testing', level: 60, icon: '🧪' },
            ]
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            className="glass p-6 rounded-xl"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                {category.category}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="group"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">{skill.icon}</span>
                                                <span className="text-white font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-primary text-sm font-semibold">
                        {skill.level}%
                      </span>
                                        </div>

                                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                className="h-2 bg-gradient-to-r from-primary to-primary-dark rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills