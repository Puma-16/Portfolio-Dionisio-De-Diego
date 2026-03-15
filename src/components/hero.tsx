'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'
import * as THREE from 'three'

const FloatingGeometry = () => {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5
            meshRef.current.rotation.y += delta * 0.3
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
        }
    })

    return (
        <mesh
            ref={meshRef}
            scale={hovered ? 1.2 : 1}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
                color="#FF6B00"
                wireframe
                transparent
                opacity={0.8}
            />
        </mesh>
    )
}

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 0.8
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
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-900/20" />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    className="text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <span className="text-primary font-medium text-lg">Hola, soy</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
                            Dionisio de Diego Sepúlveda
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                            Junior Developer
                        </h2>
                    </motion.div>

                    <motion.p
                        className="text-lg text-gray-400 mb-8 leading-relaxed"
                        variants={itemVariants}
                    >
                        Desarrollador apasionado por crear experiencias web modernas y funcionales.
                        Especializado en java y tecnologías frontend de vanguardia.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="/CVDionisioDeDiego.pdf"
                            download
                            className="glass-orange px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/20 transition-all group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download className="w-5 h-5 group-hover:animate-bounce" />
                            Descargar CV
                        </motion.a>

                        <motion.a
                            href="https://github.com/Puma-16"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-white/20 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github className="w-5 h-5" />
                            GitHub
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/dionisio-de-diego-sepúlveda-6643aa352"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-white/20 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* 3D Scene */}
                <motion.div
                    className="h-96 w-full"
                    initial={{ scale: 0, rotateY: 180 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#FF6B00" />
                        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
                        <FloatingGeometry />
                    </Canvas>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero