import type { Metadata } from 'next'
import { Audiowide, Geo } from 'next/font/google'
import './globals.css'
import React from 'react'

const audiowide = Audiowide({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-audiowide',
    display: 'swap',
})

const geo = Geo({
    weight: ['400'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-geo',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Portfolio - Junior Developer',
    description: 'Portfolio de desarrollador junior especializado en aplicaciones multiplataforma',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className={`${audiowide.variable} ${geo.variable}`}>
        <body>{children}</body>
        </html>
    )
}