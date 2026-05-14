/**
 * app/layout.tsx
 * Layout raíz de Next.js — obligatorio para el App Router.
 * Responsabilidades: <html>, <body>, importación de estilos globales.
 * La <BarraNavegacion /> se coloca en el layout de [lang] para tener
 * acceso al parámetro de idioma.
 */

import type { Metadata } from 'next';
import { Space_Mono, Alfa_Slab_One } from 'next/font/google';
import './globals.css';

const spaceMono = Space_Mono({ 
    subsets: ['latin'], 
    weight: ['700'],
    variable: '--font-space-mono',
    display: 'swap'
});

const alfaSlabOne = Alfa_Slab_One({
    subsets: ['latin'],
    weight: ['400'], // Alfa Slab One solo tiene peso 400
    variable: '--font-alfa-slab',
    display: 'swap'
});

export const metadata: Metadata = {
    title: {
        template: '%s | CROQUETAS STITCH',
        default: 'CROQUETAS STITCH',
    },

    description: 'La vanguardia de la moda culinaria neo-brutalista. Ropa técnica inspirada en la fritura perfecta.',
    icons: {
        icon: '/favicon.png',
    },
};




export default function LayoutRaiz({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${spaceMono.variable} ${alfaSlabOne.variable}`}>{children}</body>
        </html>
    );
}
