'use client'

import Image from 'next/image'
import { SKILLS, type Skill } from '@/lib/skills-data'

// ─── CSS keyframes (inyectado una sola vez) ───────────────────────────────────
const MARQUEE_CSS = `
@keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
.marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 40s linear infinite;
    will-change: transform;
}
.marquee-track:hover {
    animation-play-state: paused;
}
`

// ─── SkillCard ────────────────────────────────────────────────────────────────
interface SkillCardProps {
    skill: Skill
}

const SkillCard = ({ skill }: SkillCardProps) => (
    <div
        className="
            flex-shrink-0 flex items-center gap-3
            mx-3 px-4 py-2 rounded-md
            font-geo text-sm select-none
            transition-colors duration-200
        "
        style={{
            background:   'rgba(255,255,255,0.04)',
            border:       '1px solid rgba(255,255,255,0.08)',
            color:        'rgba(255,255,255,0.78)',
        }}
        onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = `${skill.glowColor}55`
        }}
        onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
        }}
    >
        {/* Prefijo numérico estilo terminal */}
        <span
            className="text-[10px] tracking-widest font-geo leading-none"
            style={{ color: 'rgba(255,140,0,0.55)' }}
        >
            [{skill.id}]
        </span>

        {/* Icono con drop-shadow neón */}
        <span
            className="flex-shrink-0 flex items-center"
            style={{
                filter: [
                    `drop-shadow(0 0 4px ${skill.glowColor}cc)`,
                    `drop-shadow(0 0 10px ${skill.glowColor}77)`,
                ].join(' '),
            }}
        >
            <Image
                src={skill.iconPath}
                alt={skill.name}
                width={28}
                height={28}
                className="h-7 w-auto object-contain"
                // unoptimized evita que Next intente optimizar SVGs externos
                unoptimized
            />
        </span>

        {/* Nombre */}
        <span className="whitespace-nowrap leading-none">{skill.name}</span>
    </div>
)

// ─── Skills section ───────────────────────────────────────────────────────────
const Skills = () => {
    // Duplicar para loop continuo sin salto visual
    const doubled = [...SKILLS, ...SKILLS]

    return (
        <section
            id="skills"
            aria-label="Tecnologías"
            className="relative w-full py-5 overflow-hidden"
            style={{
                background:   'rgba(0,0,0,0.75)',
                borderTop:    '1px solid rgba(255,140,0,0.22)',
                borderBottom: '1px solid rgba(255,140,0,0.22)',
                zIndex: 2,
            }}
        >
            <style>{MARQUEE_CSS}</style>

            {/* Etiqueta de sección estilo terminal */}
            <p
                className="font-geo text-[11px] tracking-[0.25em] mb-3 px-6"
                style={{ color: 'rgba(255,140,0,0.4)' }}
            >
                SKILLS::REGISTRY &nbsp;/&nbsp; SCANNING [{SKILLS.length} MODULES]
            </p>

            {/* Fade izquierdo */}
            <div
                className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
                style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.95), transparent)',
                }}
            />

            {/* Fade derecho */}
            <div
                className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
                style={{
                    background: 'linear-gradient(to left, rgba(0,0,0,0.95), transparent)',
                }}
            />

            {/* Track del marquee */}
            <div className="overflow-hidden">
                <div className="marquee-track">
                    {doubled.map((skill, idx) => (
                        <SkillCard
                            key={`${skill.id}-${idx}`}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills