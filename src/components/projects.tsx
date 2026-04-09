'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, FolderOpen } from 'lucide-react'
import { THEME } from '@/lib/theme'
import { PROJECTS, type Project } from '@/lib/projects-data'

// ─── CategoryPill ─────────────────────────────────────────────────────────────
const CategoryPill = ({ category }: { category: Project['category'] }) => {
    const labels: Record<Project['category'], string> = {
        fullstack: 'Fullstack',
        frontend:  'Frontend',
        backend:   'Backend',
    }
    return (
        <span
            className="font-geo text-[10px] tracking-[0.25em] px-2.5 py-1 rounded-sm uppercase whitespace-nowrap"
            style={{
                color:      THEME.category.text,
                background: THEME.category.bg,
                border:     `1px solid ${THEME.category.border}`,
            }}
        >
            {labels[category]}
        </span>
    )
}

// ─── TechBadge ────────────────────────────────────────────────────────────────
// Usa los SVGs tal cual desde /public/icons/ sin filtro de color,
// respetando los colores originales de cada logo.
const TechBadge = ({ name, icon }: { name: string; icon: string }) => (
    <span
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-geo text-xs"
        style={{
            background: THEME.badge.bg,
            color:      THEME.badge.text,
            border:     `1px solid ${THEME.badge.border}`,
        }}
    >
        <Image
            src={icon}
            alt={name}
            width={14}
            height={14}
            className="w-3.5 h-3.5 object-contain flex-shrink-0"
            unoptimized
        />
        {name}
    </span>
)

// ─── ActionButton ─────────────────────────────────────────────────────────────
interface ActionButtonProps {
    href: string
    variant: 'primary' | 'ghost'
    icon: React.ReactNode
    label: string
}

const ActionButton = ({ href, variant, icon, label }: ActionButtonProps) => {
    const t = variant === 'primary' ? THEME.button.primary : THEME.button.ghost
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-geo text-xs font-semibold cursor-pointer"
            style={{
                background: t.bg,
                color:      t.text,
                border:     `1px solid ${t.border}`,
            }}
            whileHover={{
                background: t.hover,
                boxShadow: variant === 'primary' ? THEME.button.primary.shadow : 'none',
                scale: 1.04,
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18 }}
        >
            {icon}
            {label}
        </motion.a>
    )
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.09 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{
                y:           hovered ? THEME.card.hoverY : 0,
                boxShadow:   hovered ? THEME.card.hoverGlow : '0 2px 16px rgba(0,0,0,0.5)',
                borderColor: hovered ? THEME.card.hoverBorder : THEME.card.border,
            }}

            className="flex flex-col rounded-xl overflow-hidden"
            style={{
                background:          THEME.card.bg,
                backdropFilter:      THEME.card.backdropBlur,
                WebkitBackdropFilter: THEME.card.backdropBlur,
                border:              `1px solid ${THEME.card.border}`,
            }}
        >
            {/* ── Card header ── */}
            <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,140,0,0.06) 0%, rgba(0,0,0,0.3) 100%)',
                    borderBottom: `1px solid ${THEME.card.border}`,
                }}
            >
                {/* Subtle orange grid */}
                <div
                    className="absolute inset-0 opacity-[0.055]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,140,0,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,0,0.7) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                />

                {/* Placeholder */}
                <div className="relative z-10 text-center px-4 select-none">
                    <FolderOpen
                        className="mx-auto mb-2"
                        style={{ color: 'rgba(255,140,0,0.25)' }}
                        size={34}
                    />
                    <span
                        className="font-audiowide text-sm"
                        style={{ color: 'rgba(255,255,255,0.22)' }}
                    >
                        {project.title}
                    </span>
                </div>

                {/* ── Hover overlay ──
                    pointer-events:none cuando está oculto para no bloquear
                    clics en el resto de la tarjeta. Se activa solo al hover. */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-3 z-20"
                    style={{
                        background:     'rgba(0,0,0,0.72)',
                        backdropFilter: 'blur(4px)',
                        pointerEvents:  hovered ? 'auto' : 'none',
                    }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.18 }}
                >
                    <ActionButton
                        href={project.githubUrl}
                        variant="ghost"
                        icon={<Github size={13} />}
                        label="Código"
                    />
                    <ActionButton
                        href={project.liveUrl}
                        variant="primary"
                        icon={<ExternalLink size={13} />}
                        label="Demo"
                    />
                </motion.div>
            </div>

            {/* ── Card body ── */}
            <div className="flex flex-col flex-1 p-5 gap-4">

                {/* Title + category */}
                <div className="flex items-start justify-between gap-3">
                    <h3
                        className="font-audiowide text-base leading-snug"
                        style={{ color: THEME.colors.white }}
                    >
                        {project.title}
                    </h3>
                    <CategoryPill category={project.category} />
                </div>

                {/* Description */}
                <p
                    className="font-geo text-sm leading-relaxed flex-1"
                    style={{ color: 'rgba(255,255,255,0.48)' }}
                >
                    {project.description}
                </p>

                {/* Tech badges — SVGs con sus colores originales */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <TechBadge key={tech.name} {...tech} />
                    ))}
                </div>

                {/* Bottom action row */}
                <div
                    className="flex gap-3 pt-3"
                    style={{ borderTop: `1px solid rgba(255,140,0,0.10)` }}
                >
                    <ActionButton
                        href={project.githubUrl}
                        variant="ghost"
                        icon={<Github size={13} />}
                        label="Ver código"
                    />
                    <ActionButton
                        href={project.liveUrl}
                        variant="primary"
                        icon={<ExternalLink size={13} />}
                        label="Demo en vivo"
                    />
                </div>
            </div>
        </motion.article>
    )
}

// ─── Projects section ─────────────────────────────────────────────────────────
const Projects = () => (
    <section
        id="projects"
        className="relative py-24 px-4 overflow-hidden"
        style={{ zIndex: 2 }}
    >
        {/* Ambient glow */}
        <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] opacity-15"
            style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(255,140,0,0.6), transparent 70%)',
            }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">

            {/* ── Header ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="text-center mb-16"
            >
                <p
                    className="font-geo text-[11px] tracking-[0.4em] mb-4 uppercase"
                    style={{ color: 'rgba(255,140,0,0.45)' }}
                >
                    // OPEN_SOURCE::REGISTRY
                </p>

                <h2
                    className="font-audiowide text-4xl md:text-5xl mb-4"
                    style={{ color: THEME.colors.white }}
                >
                    Mis Proyectos
                </h2>

                <div className="flex justify-center mb-6">
                    <div
                        className="h-0.5 w-24 rounded-full"
                        style={{ background: THEME.colors.primary }}
                    />
                </div>

                <p
                    className="font-geo text-base max-w-xl mx-auto leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                    Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo.
                </p>
            </motion.div>

            {/* ── Grid ── */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>

            {/* ── CTA ── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center mt-14"
            >
                <ActionButton
                    href="https://github.com/Puma-16"
                    variant="primary"
                    icon={<Github size={15} />}
                    label="Ver todos mis proyectos en GitHub"
                />
            </motion.div>
        </div>
    </section>
)

export default Projects