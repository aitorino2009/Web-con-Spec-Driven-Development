/**
 * app/[lang]/page.tsx
 * Página de inicio bajo la ruta /{idioma}/.
 * Por ahora es un placeholder visual para verificar que el Navbar funciona.
 */

import { getDictionary } from '@/lib/get-dictionary';
import Hero from '@/components/Hero/Hero';
import ProductGrid from '@/components/ProductGrid/ProductGrid';

export default async function PaginaInicio({ params }: { params: Promise<{ lang: string }> }) {
    // En Next.js 15, params se procesa como una promesa
    const { lang } = await params;
    const dic = await getDictionary(lang);

    return (
        <main>
            <Hero dicc={dic.hero} lang={lang} />
            <ProductGrid />
        </main>
    );
}
