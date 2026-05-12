import { getDictionary } from '@/lib/get-dictionary';
import Hero from '@/components/Hero/Hero';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import EncabezadoSeccion from '@/components/EncabezadoSeccion/EncabezadoSeccion';
import inventario from '@/.agent/specs/inventario-maestro.json';

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

    const PRODUCT_PRICES: Record<string, string> = {
        'CS-N-001': '65.00€',
        'CS-N-002': '35.00€',
        'CS-N-003': '85.00€',
        'CS-N-004': '25.00€'
    };

    // Obtenemos los productos destacados desde el inventario maestro
    const productosDestacados = ['CS-N-001', 'CS-N-002', 'CS-N-003', 'CS-N-004'].map(id => {
        const pBase = inventario.productos.find(p => p.id === id);
        return {
            id,
            nombre: pBase?.nombre || 'Producto',
            precio: PRODUCT_PRICES[id],
            imagen: PRODUCT_IMAGES[id],
            tag: dic.grid.tag_nuevo
        };
    });

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

