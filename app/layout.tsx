/**
 * app/layout.tsx
 * Layout raíz de Next.js — obligatorio para el App Router.
 * Responsabilidades: <html>, <body>, importación de estilos globales.
 * La <BarraNavegacion /> se coloca en el layout de [lang] para tener
 * acceso al parámetro de idioma.
 */

import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import './globals.css';

const syne = Syne({ 
    subsets: ['latin'], 
    weight: ['800'],
    variable: '--font-syne',
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'Aprendizaje con IA',
    description: 'Proyecto de aprendizaje con desarrollo guiado por especificaciones (SDD).',
};

export default function LayoutRaiz({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${syne.variable}`}>{children}</body>
        </html>
    );
}
