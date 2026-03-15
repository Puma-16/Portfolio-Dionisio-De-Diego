import type { Metadata } from 'next'
import './globals.css'
import React from "react"

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
        <html lang="es">
            <body>{children}</body>
        </html>
    )
}