'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'

// ─── Glitch hook ──────────────────────────────────────────────────────────────
const CHARS = '!<>-_\\/[]{}=+*^?#@$%&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function useGlitch(target: string, active: boolean) {
    const [text, setText] = useState(target)

    useEffect(() => {
        if (!active) { setText(target); return }
        let frame = 0
        const total = 24
        const id = setInterval(() => {
            frame++
            setText(
                target.split('').map((ch, i) => {
                    if (ch === ' ') return ' '
                    const reveal = Math.floor((i / target.length) * total)
                    if (frame >= reveal + 8) return ch
                    return CHARS[Math.floor(Math.random() * CHARS.length)]
                }).join('')
            )
            if (frame >= total + 8) clearInterval(id)
        }, 40)
        return () => clearInterval(id)
    }, [target, active])

    return text
}

// ─── Typewriter hook ──────────────────────────────────────────────────────────
function useTypewriter(text: string, speed = 32, startDelay = 0) {
    const [displayed, setDisplayed] = useState('')
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setStarted(true), startDelay)
        return () => clearTimeout(t)
    }, [startDelay])

    useEffect(() => {
        if (!started || displayed.length >= text.length) return
        const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed)
        return () => clearTimeout(t)
    }, [started, displayed, text, speed])

    return { displayed, done: displayed.length >= text.length }
}

// ─── Stagger variants ─────────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.13 },
    }),
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
    const NAME = 'Dionisio de Diego Sepúlveda'
    const [glitchOn, setGlitchOn] = useState(false)
    const glitchedName = useGlitch(NAME, glitchOn)
    const terminal = useTypewriter('root@portfolio:~/$ uptime: 2y --force-relearn', 28, 300)

    useEffect(() => {
        const t = setTimeout(() => setGlitchOn(true), 700)
        return () => clearTimeout(t)
    }, [])

    const reglitch = () => {
        setGlitchOn(false)
        setTimeout(() => setGlitchOn(true), 10)
    }

    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden"
            style={{ zIndex: 1 }}
        >
            {/* Vignette */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 35%, rgba(0,0,0,0.88) 100%)',
                    zIndex: 0,
                }}
            />

            {/* Grid sutil */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.032]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,140,0,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,0,0.7) 1px, transparent 1px)',
                    backgroundSize: '72px 72px',
                    zIndex: 0,
                }}
            />

            {/* ── Contenido centrado ── */}
            <div className="relative z-10 flex flex-col items-center gap-3 max-w-3xl w-full">

                {/* Línea de terminal */}
                <motion.div
                    custom={0} variants={fadeUp} initial="hidden" animate="visible"
                    className="flex items-center gap-1 font-geo text-xs md:text-sm tracking-widest"
                    style={{ color: 'rgba(255,140,0,0.65)' }}
                >
                    <span>{terminal.displayed}</span>
                    {!terminal.done && (
                        <span
                            className="inline-block w-1.5 h-4 animate-pulse"
                            style={{ background: 'rgba(255,140,0,0.8)' }}
                        />
                    )}
                </motion.div>

                {/* Saludo */}
                <motion.p
                    custom={1} variants={fadeUp} initial="hidden" animate="visible"
                    className="font-geo text-sm md:text-base tracking-[0.3em] uppercase mt-1"
                    style={{ color: 'rgba(255,180,80,0.5)' }}
                >
                    // HOLA, SOY
                </motion.p>

                {/* Nombre — Audiowide + glow naranja + glitch */}
                <motion.h1
                    custom={2} variants={fadeUp} initial="hidden" animate="visible"
                    className="font-audiowide leading-tight cursor-pointer select-none mt-1"
                    style={{
                        fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                        color: '#FF8C00',
                        textShadow: `
                            0 0 6px  rgba(255,140,0,1),
                            0 0 18px rgba(255,140,0,0.75),
                            0 0 40px rgba(255,100,0,0.45),
                            0 0 80px rgba(255,60,0,0.2)
                        `,
                    }}
                    onClick={reglitch}
                    title="Clic para glitch"
                >
                    {glitchedName}
                </motion.h1>

                {/* Rol */}
                <motion.h2
                    custom={3} variants={fadeUp} initial="hidden" animate="visible"
                    className="font-geo text-lg md:text-2xl flex items-center gap-2 mt-1"
                    style={{ color: 'rgba(255,255,255,0.82)' }}
                >
                    <span style={{ color: '#FF8C00', fontWeight: 700 }}>{'>'}</span>
                    Junior Developer
                    <span
                        className="inline-block w-2.5 h-5 ml-1 animate-pulse"
                        style={{ background: '#FF8C00' }}
                    />
                </motion.h2>

                {/* Descripción */}
                <motion.p
                    custom={4} variants={fadeUp} initial="hidden" animate="visible"
                    className="font-geo text-sm md:text-base max-w-xl leading-relaxed mt-2"
                    style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                    <span style={{ color: 'rgba(255,140,0,0.35)' }}>{'// '}</span>
                    Desarrollador apasionado por crear experiencias web modernas y funcionales.
                    Especializado en Java y tecnologías frontend de vanguardia.
                </motion.p>

                {/* Divider */}
                <motion.div
                    custom={5} variants={fadeUp} initial="hidden" animate="visible"
                    className="flex items-center gap-3 w-full max-w-xs mt-5"
                >
                    <div className="flex-1 h-px"
                        style={{ background: 'linear-gradient(to right, transparent, rgba(255,140,0,0.4))' }} />
                    <span className="font-geo text-xs" style={{ color: 'rgba(255,140,0,0.45)' }}>◈</span>
                    <div className="flex-1 h-px"
                        style={{ background: 'linear-gradient(to left, transparent, rgba(255,140,0,0.4))' }} />
                </motion.div>

                {/* Botones */}
                <motion.div
                    custom={6} variants={fadeUp} initial="hidden" animate="visible"
                    className="flex flex-wrap justify-center gap-4 mt-2"
                >
                    <motion.a
                        href="/CVDionisioDeDiego.pdf"
                        download
                        className="group relative flex items-center gap-2 px-6 py-3 rounded-lg font-geo text-sm font-semibold overflow-hidden"
                        style={{
                            border: '1px solid rgba(255,140,0,0.5)',
                            background: 'rgba(255,140,0,0.07)',
                            color: '#FF8C00',
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: 'rgba(255,140,0,0.13)' }} />
                        <Download className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
                        <span className="relative z-10">./download_cv.sh</span>
                    </motion.a>

                    <motion.a
                        href="https://github.com/Puma-16"
                        target="_blank" rel="noopener noreferrer"
                        className="group relative flex items-center gap-2 px-6 py-3 rounded-lg font-geo text-sm font-semibold overflow-hidden"
                        style={{
                            border: '1px solid rgba(255,255,255,0.14)',
                            background: 'rgba(255,255,255,0.04)',
                            color: 'rgba(255,255,255,0.72)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: 'rgba(255,255,255,0.07)' }} />
                        <Github className="w-4 h-4 relative z-10" />
                        <span className="relative z-10">GitHub</span>
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/dionisio-de-diego-sep%C3%BAveda-6643aa352"
                        target="_blank" rel="noopener noreferrer"
                        className="group relative flex items-center gap-2 px-6 py-3 rounded-lg font-geo text-sm font-semibold overflow-hidden"
                        style={{
                            border: '1px solid rgba(255,255,255,0.14)',
                            background: 'rgba(255,255,255,0.04)',
                            color: 'rgba(255,255,255,0.72)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: 'rgba(255,255,255,0.07)' }} />
                        <Linkedin className="w-4 h-4 relative z-10" />
                        <span className="relative z-10">LinkedIn</span>
                    </motion.a>
                </motion.div>

                {/* Stats sistema */}
                <motion.div
                    custom={7} variants={fadeUp} initial="hidden" animate="visible"
                    className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-6"
                >
                    {[
                        { label: 'UPTIME',      value: '2Y'   },
                        { label: 'PROYECTOS',   value: '15+'  },
                        { label: 'ESTABILIDAD', value: '97%'  },
                        { label: 'CAFÉ',        value: '∞'    },
                        { label: 'PASIÓN',      value: '100%' },
                    ].map((s) => (
                        <div key={s.label} className="font-geo text-[11px] flex items-center gap-1">
                            <span style={{ color: 'rgba(255,255,255,0.22)', letterSpacing: '0.15em' }}>
                                {s.label}::
                            </span>
                            <span style={{ color: '#FF8C00', fontWeight: 600 }}>{s.value}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
                <div
                    className="w-6 h-10 rounded-full flex justify-center pt-2"
                    style={{ border: '2px solid rgba(255,140,0,0.35)' }}
                >
                    <div
                        className="w-1 h-2.5 rounded-full"
                        style={{ background: 'rgba(255,140,0,0.65)' }}
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero