/**
 * app/[lang]/page.tsx
 * Página de inicio bajo la ruta /{idioma}/.
 * Por ahora es un placeholder visual para verificar que el Navbar funciona.
 */

import { getDictionary } from '@/lib/get-dictionary';

export default async function PaginaInicio({ params }: { params: Promise<{ lang: string }> }) {
    // En Next.js 15, params se procesa como una promesa
    const { lang } = await params;
    const dic = await getDictionary(lang);

    return (
        <section style={{ padding: '48px 24px' }}>
            <h1>{dic.home.title}</h1>
            <p>{dic.home.subtitle}</p>
        </section>
    );
}
