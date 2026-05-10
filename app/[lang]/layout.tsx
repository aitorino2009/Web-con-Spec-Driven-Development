/**
 * app/[lang]/layout.tsx
 * Layout de idioma — envuelve todas las páginas bajo una ruta /es/... o /en/...
 * Responsabilidades: montar la <BarraNavegacion /> y el contenido principal.
 */

import BarraNavegacion from '@/components/BarraNavegacion/BarraNavegacion';

export default function LayoutIdioma({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <BarraNavegacion />
            <main>{children}</main>
        </>
    );
}
