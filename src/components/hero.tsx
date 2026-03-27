'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'
import * as THREE from 'three'

// ─── Floating 3D geometry (unchanged) ────────────────────────────────────────
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
            <meshStandardMaterial color="#FF6B00" wireframe transparent opacity={0.8} />
        </mesh>
    )
}

// ─── Glitch text hook ─────────────────────────────────────────────────────────
const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#@$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

function useGlitchText(target: string, trigger: boolean) {
    const [display, setDisplay] = useState(target)

    useEffect(() => {
        if (!trigger) return
        let frame = 0
        const totalFrames = 18
        const interval = setInterval(() => {
            frame++
            setDisplay(
                target
                    .split('')
                    .map((char, i) => {
                        if (char === ' ') return ' '
                        const revealAt = Math.floor((i / target.length) * totalFrames)
                        if (frame >= revealAt + 6) return char
                        return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
                    })
                    .join('')
            )
            if (frame >= totalFrames + 6) clearInterval(interval)
        }, 45)
        return () => clearInterval(interval)
    }, [target, trigger])

    return display
}

// ─── Typewriter hook ──────────────────────────────────────────────────────────
function useTypewriter(lines: string[], delay = 0) {
    const [lineIndex, setLineIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [displayed, setDisplayed] = useState<string[]>([])
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setStarted(true), delay)
        return () => clearTimeout(t)
    }, [delay])

    useEffect(() => {
        if (!started) return
        if (lineIndex >= lines.length) return

        if (charIndex < lines[lineIndex].length) {
            const t = setTimeout(() => {
                setCharIndex((c) => c + 1)
            }, 28)
            return () => clearTimeout(t)
        } else {
            const t = setTimeout(() => {
                setDisplayed((d) => [...d, lines[lineIndex]])
                setLineIndex((l) => l + 1)
                setCharIndex(0)
            }, 350)
            return () => clearTimeout(t)
        }
    }, [started, lineIndex, charIndex, lines])

    const currentPartial =
        lineIndex < lines.length ? lines[lineIndex].slice(0, charIndex) : ''

    return { displayed, currentPartial, done: lineIndex >= lines.length }
}

// ─── Boot screen ──────────────────────────────────────────────────────────────
const BOOT_LINES = [
    'Sys.Scan(👋 Cargando portfolio)  Running...',
    '> Inicializando módulos...',
    '> Conectando con el servidor...',
    '> legacy_code rejected. compile better mistakes.',
    '// REWRITING... ██████████ 100%',
    'BOOT COMPLETE — Bienvenido.',
]

const BootScreen = ({ onDone }: { onDone: () => void }) => {
    const { displayed, currentPartial, done } = useTypewriter(BOOT_LINES, 200)

    useEffect(() => {
        if (done) {
            const t = setTimeout(onDone, 600)
            return () => clearTimeout(t)
        }
    }, [done, onDone])

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="font-mono text-sm md:text-base text-green-400 max-w-xl w-full px-8">
                {displayed.map((line, i) => (
                    <div key={i} className="mb-1">
                        <span className="text-primary">$</span>{' '}
                        <span className={i === BOOT_LINES.length - 1 ? 'text-white font-bold' : ''}>
                            {line}
                        </span>
                    </div>
                ))}
                {!done && (
                    <div className="mb-1">
                        <span className="text-primary">$</span>{' '}
                        <span className="text-green-300">{currentPartial}</span>
                        <span className="inline-block w-2 h-4 bg-green-400 ml-0.5 animate-pulse" />
                    </div>
                )}
            </div>
        </motion.div>
    )
}

// ─── Terminal line component ──────────────────────────────────────────────────
const TerminalLine = ({ prefix, text, className = '' }: { prefix: string; text: string; className?: string }) => (
    <div className={`font-mono text-sm flex items-center gap-2 ${className}`}>
        <span className="text-primary select-none">{prefix}</span>
        <span>{text}</span>
        <span className="inline-block w-1.5 h-4 bg-primary ml-0.5 animate-pulse opacity-70" />
    </div>
)

// ─── System stats bar ─────────────────────────────────────────────────────────
const stats = [
    { label: 'UPTIME', value: '2Y', accent: true },
    { label: 'PROYECTOS', value: '15+', accent: false },
    { label: 'ESTABILIDAD', value: '97%', accent: false },
    { label: 'CAFÉ', value: '∞', accent: true },
    { label: 'PASIÓN', value: '100%', accent: false },
]

const StatsBar = () => (
    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
        {stats.map((s) => (
            <div key={s.label} className="font-mono text-xs flex items-center gap-1.5">
                <span className="text-gray-500 tracking-widest">{s.label}::</span>
                <span className={s.accent ? 'text-primary font-bold' : 'text-white font-semibold'}>
                    {s.value}
                </span>
            </div>
        ))}
    </div>
)

// ─── Scanline overlay ─────────────────────────────────────────────────────────
const Scanlines = () => (
    <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.03]"
        style={{
            backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 4px)',
        }}
    />
)

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
    const [booted, setBooted] = useState(false)
    const [glitchTrigger, setGlitchTrigger] = useState(false)

    const name = 'Dionisio de Diego Sepúlveda'
    const glitchedName = useGlitchText(name, glitchTrigger)

    useEffect(() => {
        if (booted) {
            const t = setTimeout(() => setGlitchTrigger(true), 400)
            return () => clearTimeout(t)
        }
    }, [booted])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.6 } },
    }
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    }

    return (
        <>
            <AnimatePresence>{!booted && <BootScreen onDone={() => setBooted(true)} />}</AnimatePresence>

            <section
                id="hero"
                className="min-h-screen flex items-center justify-center relative overflow-hidden"
            >
                <Scanlines />

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-900/20" />
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,107,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.5) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />

                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Text Content */}
                    <motion.div
                        className="text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate={booted ? 'visible' : 'hidden'}
                    >
                        {/* Terminal greeting */}
                        <motion.div variants={itemVariants} className="mb-4">
                            <TerminalLine
                                prefix="root@portfolio:~$"
                                text="uptime: 2y --force-relearn"
                                className="text-green-400"
                            />
                        </motion.div>

                        {/* Subtle label */}
                        <motion.div variants={itemVariants}>
                            <span className="text-primary font-mono text-sm tracking-widest uppercase">
                                // Hola, soy
                            </span>

                            {/* Glitch name */}
                            <h1
                                className="text-4xl md:text-6xl font-bold mb-3 leading-tight cursor-pointer select-none"
                                style={{ fontFamily: "'Courier New', monospace" }}
                                onClick={() => {
                                    setGlitchTrigger(false)
                                    setTimeout(() => setGlitchTrigger(true), 10)
                                }}
                                title="Haz clic para glitch"
                            >
                                <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
                                    {glitchedName}
                                </span>
                            </h1>

                            {/* Role with blink cursor */}
                            <h2 className="text-xl md:text-2xl text-gray-300 mb-1 font-mono flex items-center gap-2">
                                <span className="text-primary">{'>'}</span> Junior Developer
                                <span className="inline-block w-2.5 h-5 bg-primary animate-pulse ml-1" />
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            className="text-base text-gray-400 mt-4 mb-2 leading-relaxed font-mono"
                            variants={itemVariants}
                        >
                            <span className="text-gray-600">{'// '}</span>
                            Desarrollador apasionado por crear experiencias web modernas y funcionales.
                            Especializado en Java y tecnologías frontend de vanguardia.
                        </motion.p>

                        {/* System stats */}
                        <motion.div variants={itemVariants}>
                            <StatsBar />
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div className="flex flex-wrap gap-4 mt-8" variants={itemVariants}>
                            <motion.a
                                href="/CVDionisioDeDiego.pdf"
                                download
                                className="glass-orange px-6 py-3 rounded-lg font-mono text-sm font-medium flex items-center gap-2 hover:bg-primary/20 transition-all group border border-primary/40"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-4 h-4 group-hover:animate-bounce" />
                                ./download_cv.sh
                            </motion.a>

                            <motion.a
                                href="https://github.com/Puma-16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass px-6 py-3 rounded-lg font-mono text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </motion.a>

                            <motion.a
                                href="https://www.linkedin.com/in/dionisio-de-diego-sepúlveda-6643aa352"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass px-6 py-3 rounded-lg font-mono text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* 3D Scene */}
                    <motion.div
                        className="h-96 w-full"
                        initial={{ scale: 0, rotateY: 180 }}
                        animate={booted ? { scale: 1, rotateY: 0 } : { scale: 0, rotateY: 180 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} color="#FF6B00" />
                            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
                            <FloatingGeometry />
                        </Canvas>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-primary rounded-full mt-2" />
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default Hero