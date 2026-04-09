/**
 * theme.ts — Single source of truth for design tokens.
 * Change the palette here and every component that consumes
 * these tokens will update automatically.
 */

export const THEME = {
    // ── Core palette ──────────────────────────────────────────────────────────
    colors: {
        /** Page background */
        base:       '#000000',
        /** Primary accent */
        primary:    '#FF8C00',
        /** Dimmed accent */
        secondary:  'rgba(255,140,0,0.55)',
        /** Very subtle accent */
        muted:      'rgba(255,140,0,0.25)',
        /** Pure white */
        white:      '#ffffff',
    },

    // ── Card (smoked glass) ───────────────────────────────────────────────────
    card: {
        bg:           'rgba(0, 0, 0, 0.40)',
        backdropBlur: 'blur(12px)',
        border:       'rgba(255, 140, 0, 0.30)',       // orange-500/30
        hoverBorder:  'rgba(255, 140, 0, 0.65)',
        hoverGlow:    '0 0 0 1px rgba(255,140,0,0.45), 0 8px 32px rgba(255,140,0,0.18)',
        hoverY:       -6,
    },

    // ── Tech badge ────────────────────────────────────────────────────────────
    badge: {
        bg:     'rgba(255,140,0,0.08)',
        text:   'rgba(255,140,0,0.85)',
        border: 'rgba(255,140,0,0.22)',
    },

    // ── Category pill ─────────────────────────────────────────────────────────
    category: {
        bg:     'rgba(255,140,0,0.10)',
        text:   '#FF8C00',
        border: 'rgba(255,140,0,0.28)',
    },

    // ── Buttons ───────────────────────────────────────────────────────────────
    button: {
        primary: {
            bg:     'rgba(255,140,0,0.15)',
            hover:  'rgba(255,140,0,0.28)',
            text:   '#FF8C00',
            border: 'rgba(255,140,0,0.40)',
            shadow: '0 0 14px rgba(255,140,0,0.35)',
        },
        ghost: {
            bg:     'rgba(255,255,255,0.05)',
            hover:  'rgba(255,255,255,0.10)',
            text:   'rgba(255,255,255,0.65)',
            border: 'rgba(255,255,255,0.12)',
        },
    },
} as const

export type Theme = typeof THEME