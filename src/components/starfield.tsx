'use client'

import { useRef, useEffect } from 'react'

interface Star {
    x: number
    y: number
    radius: number
    opacity: number
    speed: number      // velocidad de parpadeo
    phase: number      // fase inicial del parpadeo
}

const STAR_COUNT = 220

function createStar(width: number, height: number): Star {
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.2,        // 0.2 – 1.6 px
        opacity: Math.random() * 0.5 + 0.3,        // 0.3 – 0.8
        speed: Math.random() * 0.6 + 0.2,          // parpadeo lento/rápido
        phase: Math.random() * Math.PI * 2,         // fase aleatoria
    }
}

const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const starsRef = useRef<Star[]>([])
    const rafRef = useRef<number>(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // ── Inicializar tamaño y estrellas ─────────────────────────────────
        const init = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            starsRef.current = Array.from({ length: STAR_COUNT }, () =>
                createStar(canvas.width, canvas.height)
            )
        }

        // ── Bucle de animación ─────────────────────────────────────────────
        let t = 0
        const draw = () => {
            t += 0.016 // ~60 fps tick

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (const star of starsRef.current) {
                // Parpadeo suave con seno
                const twinkle = Math.sin(t * star.speed + star.phase) * 0.25
                const alpha = Math.min(1, Math.max(0, star.opacity + twinkle))

                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`
                ctx.fill()
            }

            rafRef.current = requestAnimationFrame(draw)
        }

        // ── Redimensionar ──────────────────────────────────────────────────
        const handleResize = () => {
            const prevW = canvas.width
            const prevH = canvas.height
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            // Reescalar posiciones existentes para no perder todas las estrellas
            for (const star of starsRef.current) {
                star.x = (star.x / prevW) * canvas.width
                star.y = (star.y / prevH) * canvas.height
            }

            // Añadir estrellas extra si la ventana creció mucho
            const deficit = STAR_COUNT - starsRef.current.length
            if (deficit > 0) {
                for (let i = 0; i < deficit; i++) {
                    starsRef.current.push(createStar(canvas.width, canvas.height))
                }
            }
        }

        init()
        draw()
        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(rafRef.current)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        />
    )
}

export default Starfield