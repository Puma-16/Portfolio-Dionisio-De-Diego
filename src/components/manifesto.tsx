'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// ─── Data ─────────────────────────────────────────────────────────────────────
const DIRECTIVES = [
    {
        id: 'ETHOS_01',
        tag: 'AI::PARADIGM',
        title: 'IA amigo o enemigo?',
        body: 'La capacidad de escribir código sintácticamente correcto ya no es rara. La IA lo hace más rápido, de forma gratuita y las 24 horas del día, los 7 días de la semana. Sin embargo, la programación no se trata de escribir líneas, sino de saber qué líneas no escribir. La IA es sólo un poderoso generador — y yo soy el filtro.',
        logCode: 'LOG_0x1A3F',
    },
    {
        id: 'ETHOS_02',
        tag: 'LEARNING::LOOP',
        title: 'Compilación Continua',
        body: 'Mi bucle de aprendizaje es infinito. No sólo uso herramientas; las desmantelo para entender su núcleo. Si no estoy rompiendo mis propios límites, estoy decayendo.',
        logCode: 'LOG_0x2B7C',
    },
    {
        id: 'ETHOS_03',
        tag: 'PHILOSOPHY::CORE',
        title: 'El arte de la simplicidad',
        body: 'La complejidad es fácil, la simplicidad es difícil. Mi objetivo no es escribir el máximo código posible, sino resolver el problema con la menor cantidad de él.',
        logCode: 'LOG_0x3D9E',
    },
]

// ─── Scan line animation ──────────────────────────────────────────────────────
const ScanEffect = ({ active }: { active: boolean }) => (
    <motion.div
        className="absolute inset-x-0 top-0 h-px pointer-events-none z-20"
        style={{
            background:
                'linear-gradient(to right, transparent 0%, rgba(255,140,0,0.9) 40%, rgba(255,255,255,0.95) 50%, rgba(255,140,0,0.9) 60%, transparent 100%)',
            boxShadow: '0 0 16px 4px rgba(255,140,0,0.5)',
        }}
        initial={{ top: '0%', opacity: 0 }}
        animate={
            active
                ? { top: ['0%', '100%'], opacity: [0, 1, 1, 0] }
                : { top: '0%', opacity: 0 }
        }
        transition={{ duration: 0.65, ease: 'easeIn', delay: 0.1 }}
    />
)

// ─── Single directive row ─────────────────────────────────────────────────────
const DirectiveRow = ({
    directive,
    index,
    isLast,
}: {
    directive: (typeof DIRECTIVES)[number]
    index: number
    isLast: boolean
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative overflow-hidden"
            style={{
                borderBottom: isLast ? 'none' : '1px solid rgba(255,140,0,0.1)',
            }}
        >
            {/* Scan line fires once when entering viewport */}
            <ScanEffect active={inView} />

            {/* Hover left accent bar */}
            <motion.div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                animate={{ background: hovered ? '#FF8C00' : 'rgba(255,140,0,0.2)' }}
                transition={{ duration: 0.25 }}
            />

            <div
                className="pl-6 pr-4 py-8 md:py-10 transition-colors duration-300"
                style={{
                    background: hovered
                        ? 'rgba(255,140,0,0.03)'
                        : 'transparent',
                }}
            >
                {/* Top meta row */}
                <div className="flex items-center gap-4 mb-4">
                    <span
                        className="font-geo text-[10px] tracking-[0.35em]"
                        style={{ color: 'rgba(255,140,0,0.55)' }}
                    >
                        [{directive.id}]
                    </span>
                    <span
                        className="font-geo text-[10px] tracking-[0.25em] px-2 py-0.5 rounded-sm"
                        style={{
                            color: 'rgba(255,140,0,0.7)',
                            border: '1px solid rgba(255,140,0,0.2)',
                            background: 'rgba(255,140,0,0.06)',
                        }}
                    >
                        {directive.tag}
                    </span>
                    <div
                        className="flex-1 h-px"
                        style={{
                            background:
                                'linear-gradient(to right, rgba(255,140,0,0.2), transparent)',
                        }}
                    />
                    <span
                        className="font-geo text-[10px] tracking-widest"
                        style={{ color: 'rgba(255,255,255,0.15)' }}
                    >
                        {directive.logCode}
                    </span>
                </div>

                {/* Title */}
                <motion.h3
                    className="font-audiowide text-xl md:text-2xl lg:text-3xl mb-4"
                    animate={{
                        color: hovered ? '#FF8C00' : 'rgba(255,255,255,0.88)',
                        textShadow: hovered
                            ? '0 0 14px rgba(255,140,0,0.7), 0 0 32px rgba(255,140,0,0.3)'
                            : '0 0 0px transparent',
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {directive.title}
                </motion.h3>

                {/* Body */}
                <p
                    className="font-geo text-sm md:text-base leading-relaxed max-w-3xl"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                    {directive.body}
                </p>

                {/* Bottom status */}
                <div className="flex items-center gap-2 mt-5">
                    <motion.span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        animate={{
                            background: inView ? '#FF8C00' : 'rgba(255,255,255,0.2)',
                            boxShadow: inView ? '0 0 6px #FF8C00' : 'none',
                        }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                    />
                    <span
                        className="font-geo text-[10px] tracking-widest"
                        style={{ color: 'rgba(255,255,255,0.18)' }}
                    >
                        {inView ? 'STATUS::LOADED' : 'STATUS::PENDING'}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

// ─── Manifesto ────────────────────────────────────────────────────────────────
const Manifesto = () => {
    const headerRef = useRef<HTMLDivElement>(null)
    const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

    return (
        <section
            id="manifesto"
            className="relative py-24 px-4 overflow-hidden"
            style={{ background: '#000', zIndex: 2 }}
        >
            {/* Subtle scanline texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.022]"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.5) 4px)',
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto">

                {/* ── Top metadata bar ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={headerInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap justify-between items-center gap-2 mb-2 pb-2"
                    style={{ borderBottom: '1px solid rgba(255,140,0,0.15)' }}
                    ref={headerRef}
                >
                    {[
                        'SYSTEM_AUTH: GRANTED',
                        'LOG_TYPE: ETHOS_V1.0',
                        'FILTER_STATUS: ACTIVE',
                        `SESSION: ${new Date().getFullYear()}`,
                    ].map((meta) => (
                        <span
                            key={meta}
                            className="font-geo text-[10px] tracking-[0.25em]"
                            style={{ color: 'rgba(255,140,0,0.35)' }}
                        >
                            {meta}
                        </span>
                    ))}
                </motion.div>

                {/* ── Section header ── */}
                <div className="mb-12 mt-8">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={headerInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-geo text-[11px] tracking-[0.45em] mb-3"
                        style={{ color: 'rgba(255,140,0,0.4)' }}
                    >
                        // INCOMING TRANSMISSION &nbsp;·&nbsp; CLASSIFIED DOCUMENT
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.55, delay: 0.18 }}
                        className="font-audiowide text-4xl md:text-5xl lg:text-6xl"
                        style={{
                            color: '#FF8C00',
                            textShadow:
                                '0 0 10px rgba(255,140,0,0.7), 0 0 40px rgba(255,140,0,0.25)',
                        }}
                    >
                        MANIFESTO
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={headerInView ? { scaleX: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-4 h-px origin-left"
                        style={{
                            background:
                                'linear-gradient(to right, #FF8C00, rgba(255,140,0,0.1) 70%, transparent)',
                        }}
                    />
                </div>

                {/* ── Console block ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={headerInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    className="relative"
                    style={{
                        border: '1px solid rgba(255,140,0,0.18)',
                        background: 'rgba(255,140,0,0.015)',
                    }}
                >
                    {/* Corner labels */}
                    <CornerLabel pos="tl" text="CONSOLE::EXPANDED" />
                    <CornerLabel pos="tr" text="DEV::CORE::DIRECTIVES" />
                    <CornerLabel pos="bl" text="EOF::PENDING" />
                    <CornerLabel pos="br" text={`NODES: ${DIRECTIVES.length}`} />

                    {/* Directives */}
                    {DIRECTIVES.map((d, i) => (
                        <DirectiveRow
                            key={d.id}
                            directive={d}
                            index={i}
                            isLast={i === DIRECTIVES.length - 1}
                        />
                    ))}
                </motion.div>

                {/* ── Bottom transmission footer ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-between items-center mt-3"
                >
                    <span
                        className="font-geo text-[10px] tracking-widest"
                        style={{ color: 'rgba(255,255,255,0.1)' }}
                    >
                        END::TRANSMISSION
                    </span>
                    <span
                        className="font-geo text-[10px] tracking-widest"
                        style={{ color: 'rgba(255,255,255,0.1)' }}
                    >
                        CHECKSUM::OK &nbsp;·&nbsp; INTEGRITY: 100%
                    </span>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Corner label helper ──────────────────────────────────────────────────────
const CORNER_CLASSES: Record<string, string> = {
    tl: 'top-0 left-0 -translate-y-1/2 pl-2',
    tr: 'top-0 right-0 -translate-y-1/2 pr-2',
    bl: 'bottom-0 left-0 translate-y-1/2 pl-2',
    br: 'bottom-0 right-0 translate-y-1/2 pr-2',
}

const CornerLabel = ({ pos, text }: { pos: string; text: string }) => (
    <span
        className={`absolute font-geo text-[9px] tracking-[0.25em] px-1.5 ${CORNER_CLASSES[pos]}`}
        style={{
            color: 'rgba(255,140,0,0.4)',
            background: '#000',
        }}
    >
        {text}
    </span>
)

export default Manifesto