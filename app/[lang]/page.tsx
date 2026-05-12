/**
 * app/[lang]/page.tsx
 * Página de inicio bajo la ruta /{idioma}/.
 * Por ahora es un placeholder visual para verificar que el Navbar funciona.
 */

import { getDictionary } from '@/lib/get-dictionary';
import Hero from '@/components/Hero/Hero';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import EncabezadoSeccion from '@/components/EncabezadoSeccion/EncabezadoSeccion';

export default async function PaginaInicio({ params }: { params: Promise<{ lang: string }> }) {
    // En Next.js 15, params se procesa como una promesa
    const { lang } = await params;
    const dic = await getDictionary(lang);
    
    // Mapeo de assets para el Grid (mismo que en PDP)
    const PRODUCT_IMAGES: Record<string, string> = {
        '1': '/productos/sudadera-bechamel-oversize/1.webp',
        '2': '/productos/camiseta-panko-tech/1.webp',
        '3': '/productos/pantalones-rebozados/1.webp',
        '4': '/productos/gorra-crujiente/1.webp'
    };

    const PRODUCT_PRICES: Record<string, string> = {
        '1': '65.00€',
        '2': '35.00€',
        '3': '85.00€',
        '4': '25.00€'
    };

    // Construimos el array de productos para el Grid usando el diccionario
    const productosParaGrid = Object.keys(dic.productos).map(id => ({
        id,
        nombre: dic.productos[id].nombre,
        precio: PRODUCT_PRICES[id],
        imagen: PRODUCT_IMAGES[id],
        tag: dic.grid.tag_nuevo
    }));

    return (
        <main>
            <Hero dicc={dic.hero} lang={lang} />
            <EncabezadoSeccion 
                titulo={dic.grid.title} 
                subtitulo={dic.grid.subtitle} 
                alineacion="left"
            />
            <ProductGrid lang={lang} productos={productosParaGrid} />
        </main>
    );
}
