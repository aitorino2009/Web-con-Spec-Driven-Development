/**
 * app/[lang]/layout.tsx
 * Layout de idioma — envuelve todas las páginas bajo una ruta /es/... o /en/...
 * Responsabilidades: montar la <BarraNavegacion /> y el contenido principal.
 */

import BarraNavegacion from '@/components/BarraNavegacion/BarraNavegacion';

export default async function LayoutIdioma({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;

    return (
        <>
            <BarraNavegacion lang={lang} />
            <main>{children}</main>
        </>
    );
}
