'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const navItems = [
    { label: 'INICIO',          href: '#hero' },
    { label: 'SOBRE MÍ',        href: '#about' },
    { label: 'SKILLS',          href: '#skills' },
    { label: 'EXPERIENCIA',     href: '#experience' },
    { label: 'PROYECTOS',       href: '#projects' },
    { label: 'CERTIFICACIONES', href: '#certifications' },
]

export default function Navbar() {
    const [active, setActive]   = useState(0)
    const [hovered, setHovered] = useState<number | null>(null)
    const [mobileOpen, setMobile] = useState(false)

    /* auto-highlight section on scroll */
    useEffect(() => {
        const ids = navItems.map(n => n.href.replace('#', ''))
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        const i = ids.indexOf(e.target.id)
                        if (i !== -1) setActive(i)
                    }
                })
            },
            { threshold: 0.4 }
        )
        ids.forEach(id => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [])

    const scrollTo = useCallback((href: string, i: number) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        setActive(i)
        setMobile(false)
    }, [])

    /*
      For each item, compute its distance from the "focused" item (hovered or active).
      dist = 0  → front / active   (full size, orange, no rotation)
      dist = 1  → one step back
      dist = 2+ → deeper back
    */
    const pivot = hovered ?? active

    const getTransform = (i: number) => {
        const dist   = i - pivot          // signed distance
        const absDist = Math.abs(dist)

        if (absDist === 0) return {
            rotateX:   0,
            translateY: 0,
            translateZ: 0,
            scale:     1,
            opacity:   1,
            blur:      0,
            color:     '#FF6B00',
            fontSize:  '13px',
            glow:      true,
        }

        const sign = dist > 0 ? 1 : -1
        return {
            rotateX:    sign * Math.min(absDist * 18, 65),
            translateY: sign * Math.min(absDist * 22, 80),
            translateZ: -Math.min(absDist * 55, 220),
            scale:      Math.max(1 - absDist * 0.18, 0.3),
            opacity:    Math.max(1 - absDist * 0.28, 0.06),
            blur:       Math.min(absDist * 1.4, 6),
            color:      '#1a1a1a',
            fontSize:   '13px',
            glow:       false,
        }
    }

    return (
        <>
            {/* ─── DESKTOP sidebar (right) ─── */}
            <nav
                aria-label="Navegación principal"
                className="hidden lg:flex"
                style={{
                    position:       'fixed',
                    right:          0,
                    top:            0,
                    height:         '100vh',
                    width:          '96px',
                    zIndex:         50,
                    flexDirection:  'column',
                    alignItems:     'center',
                    justifyContent: 'center',
                    borderLeft:     '1px solid rgba(255,107,0,0.10)',
                    background:     'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(14px)',
                    perspective:    '600px',
                }}
            >
                {/* ambient orange glow */}
                <div style={{
                    position:   'absolute',
                    right:      0,
                    top:        '50%',
                    transform:  'translateY(-50%)',
                    width:      '160px',
                    height:     '280px',
                    background: 'radial-gradient(ellipse at 85% 50%, rgba(255,107,0,0.15) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />

                {/* stacked items */}
                <div style={{
                    position:         'relative',
                    display:          'flex',
                    flexDirection:    'column',
                    alignItems:       'center',
                    gap:              '0px',
                    transformStyle:   'preserve-3d',
                    perspective:      '600px',
                    perspectiveOrigin: '50% 50%',
                }}>
                    {navItems.map((item, i) => {
                        const t = getTransform(i)
                        return (
                            <motion.button
                                key={item.label}
                                onClick={() => scrollTo(item.href, i)}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                animate={{
                                    rotateX:    t.rotateX,
                                    y:          t.translateY,
                                    scale:      t.scale,
                                    opacity:    t.opacity,
                                    color:      t.color,
                                    filter:     `blur(${t.blur}px)`,
                                }}
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                style={{
                                    fontFamily:     '"Arial Black", "Impact", sans-serif',
                                    fontWeight:     900,
                                    fontSize:       '11px',
                                    letterSpacing:  '0.18em',
                                    textTransform:  'uppercase',
                                    writingMode:    'vertical-rl',
                                    background:     'none',
                                    border:         'none',
                                    cursor:         'pointer',
                                    padding:        '10px 0',
                                    lineHeight:     1,
                                    transformOrigin: 'center center',
                                    transformStyle: 'preserve-3d',
                                    whiteSpace:     'nowrap',
                                    textShadow:     t.glow
                                        ? '0 0 16px rgba(255,107,0,0.8), 0 0 40px rgba(255,107,0,0.4)'
                                        : 'none',
                                    userSelect: 'none',
                                }}
                            >
                                {item.label}
                            </motion.button>
                        )
                    })}
                </div>

                {/* bottom brand */}
                <span style={{
                    position:     'absolute',
                    bottom:       '24px',
                    fontFamily:   '"Arial Black", sans-serif',
                    fontWeight:   900,
                    fontSize:     '8px',
                    letterSpacing: '0.2em',
                    color:        '#FF6B00',
                    writingMode:  'vertical-rl',
                    textTransform: 'uppercase',
                    opacity:      0.5,
                    userSelect:   'none',
                }}>
                    &lt;DEV /&gt;
                </span>
            </nav>

            {/* ─── MOBILE top bar ─── */}
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 flex lg:hidden items-center justify-between px-6"
                style={{ height: '60px' }}
                initial={{ y: -60 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div style={{
                    position:       'absolute',
                    inset:          0,
                    background:     mobileOpen ? '#000' : 'rgba(0,0,0,0.75)',
                    backdropFilter: 'blur(14px)',
                    borderBottom:   '1px solid rgba(255,107,0,0.12)',
                    transition:     'background 0.3s',
                }} />

                <span style={{
                    position:      'relative',
                    fontFamily:    '"Arial Black", sans-serif',
                    fontWeight:    900,
                    fontSize:      '13px',
                    letterSpacing: '0.14em',
                    color:         '#FF6B00',
                }}>
                    &lt;DEV /&gt;
                </span>

                <button
                    onClick={() => setMobile(v => !v)}
                    aria-label="Toggle menu"
                    style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
                >
                    {[0, 1, 2].map(j => (
                        <motion.span
                            key={j}
                            animate={
                                mobileOpen
                                    ? j === 0 ? { rotate: 45,  y: 7,  opacity: 1 }
                                        : j === 1 ? { opacity: 0 }
                                            : { rotate: -45, y: -7, opacity: 1 }
                                    : { rotate: 0, y: 0, opacity: 1 }
                            }
                            transition={{ duration: 0.25 }}
                            style={{ display: 'block', width: '22px', height: '2px', background: '#FF6B00', borderRadius: '2px', transformOrigin: 'center' }}
                        />
                    ))}
                </button>
            </motion.nav>

            {/* ─── MOBILE drawer ─── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="lg:hidden"
                        initial={{ clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ clipPath: 'inset(0 0 0% 0)' }}
                        exit={{   clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        style={{
                            position:      'fixed',
                            inset:         0,
                            zIndex:        49,
                            background:    '#000',
                            display:       'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding:       '0 48px',
                        }}
                    >
                        <div style={{
                            position:   'absolute',
                            left:       0,
                            top:        '30%',
                            width:      '60%',
                            height:     '300px',
                            background: 'radial-gradient(ellipse, rgba(255,107,0,0.09) 0%, transparent 70%)',
                            pointerEvents: 'none',
                        }} />

                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.label}
                                onClick={() => scrollTo(item.href, i)}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 + 0.1, duration: 0.4, ease: 'easeOut' }}
                                style={{
                                    background:    'none',
                                    border:        'none',
                                    cursor:        'pointer',
                                    textAlign:     'left',
                                    padding:       '12px 0',
                                    borderBottom:  '1px solid rgba(255,255,255,0.04)',
                                    fontFamily:    '"Arial Black", sans-serif',
                                    fontWeight:    900,
                                    fontSize:      i === active ? '2rem' : '1.7rem',
                                    letterSpacing: '0.06em',
                                    textTransform: 'uppercase',
                                    color:         i === active ? '#FF6B00' : '#222',
                                    textShadow:    i === active ? '0 0 20px rgba(255,107,0,0.5)' : 'none',
                                    transition:    'color 0.3s',
                                    lineHeight:    1.1,
                                }}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}