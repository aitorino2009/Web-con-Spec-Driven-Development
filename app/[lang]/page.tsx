import { getDictionary } from '@/lib/get-dictionary';
import Hero from '@/components/Hero/Hero';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import EncabezadoSeccion from '@/components/EncabezadoSeccion/EncabezadoSeccion';
import inventario from '@/.agent/specs/inventario-maestro.json';
import { getLocalizedProduct } from '@/lib/i18n-utils';

export default async function PaginaInicio({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dic = await getDictionary(lang);
    
    // Mapeo de assets para el Grid (Sincronizado con inventario-maestro)
    const PRODUCT_IMAGES: Record<string, string> = {
        'CS-N-001': '/productos/sudadera-bechamel-oversize/1.webp',
        'CS-N-002': '/productos/camiseta-panko-tech/1.webp',
        'CS-N-003': '/productos/pantalones-rebozados/1.webp',
        'CS-N-004': '/productos/gorra-crujiente/1.webp'
    };

    // Obtenemos los productos destacados desde el inventario maestro
    const productosDestacados = ['CS-N-001', 'CS-N-002', 'CS-N-003', 'CS-N-004'].map(id => {
        const pBase = inventario.productos.find(p => p.id === id);
        if (!pBase) return null;
        
        const pLocalizado = getLocalizedProduct(pBase as any, lang);
        
        return {
            ...pLocalizado,
            imagen: PRODUCT_IMAGES[id],
            tag: dic.grid.tag_nuevo
        };
    }).filter(p => p !== null);

    return (
        <main>
            <Hero dicc={dic.hero} lang={lang} />
            <EncabezadoSeccion 
                titulo={dic.grid.title} 
                subtitulo={dic.grid.subtitle} 
                alineacion="left"
            />
            <ProductGrid lang={lang} productos={productosDestacados} />
        </main>
    );
}


