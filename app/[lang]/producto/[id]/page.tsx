import { getDictionary } from '@/lib/get-dictionary';
import GaleriaImagenes from '@/components/DetalleProducto/GaleriaImagenes';
import InfoProducto from '@/components/DetalleProducto/InfoProducto';
import inventario from '@/.agent/specs/inventario-maestro.json';
import estilos from './producto.module.css';

// Mapeo de imágenes para los productos estrella (1-4)
const PRODUCT_IMAGES: Record<string, string[]> = {
    '1': [
        '/productos/sudadera-bechamel-oversize/1.webp',
        '/productos/sudadera-bechamel-oversize/2.webp',
        '/productos/sudadera-bechamel-oversize/3.webp',
        '/productos/sudadera-bechamel-oversize/4.webp'
    ],
    'CS-N-001': [
        '/productos/sudadera-bechamel-oversize/1.webp',
        '/productos/sudadera-bechamel-oversize/2.webp',
        '/productos/sudadera-bechamel-oversize/3.webp',
        '/productos/sudadera-bechamel-oversize/4.webp'
    ],
    'CS-N-002': [
        '/productos/camiseta-panko-tech/1.webp',
        '/productos/camiseta-panko-tech/2.webp',
        '/productos/camiseta-panko-tech/3.webp',
        '/productos/camiseta-panko-tech/4.webp'
    ],
    'CS-N-003': [
        '/productos/pantalones-rebozados/1.webp',
        '/productos/pantalones-rebozados/2.webp',
        '/productos/pantalones-rebozados/3.webp',
        '/productos/pantalones-rebozados/4.webp'
    ],
    'CS-N-004': [
        '/productos/gorra-crujiente/1.webp',
        '/productos/gorra-crujiente/2.webp',
        '/productos/gorra-crujiente/3.webp',
        '/productos/gorra-crujiente/4.webp'
    ]
    // Los demás usarán el placeholder por ahora
};

export default async function FichaProducto({ params }: { params: Promise<{ id: string, lang: string }> }) {
    const { id, lang } = await params;
    const dic = await getDictionary(lang);
    
    // Buscamos el producto en el inventario maestro
    const productoBase = inventario.productos.find(p => p.id === id);

    if (!productoBase) {
        return (
            <main className={estilos.pagina}>
                <div className={estilos.contenedor} style={{ textAlign: 'center', padding: '100px 0' }}>
                    <h1 className={estilos.nombre}>ID: {id} // NO ENCONTRADO</h1>
                    <p className={estilos.categoria}>EL LOTE SOLICITADO NO EXISTE EN NUESTRO ARCHIVO MAESTRO</p>
                </div>
            </main>
        );
    }

    // Recomponemos el objeto con la data del inventario y los labels del dicc
    const productoFinal = {
        id: productoBase.id,
        nombre: productoBase.nombre,
        precio: productoBase.precio,
        categoria: productoBase.categoria,
        descripcion: productoBase.descripcion,
        detalles: productoBase.detalles,
        envio: productoBase.envio,
        // Labels de interfaz desde el diccionario
        cta: dic.pdp.cta,
        tallas: dic.pdp.tallas,
        secciones: dic.pdp.secciones,
        // Assets
        imagenes: PRODUCT_IMAGES[id] || []
    };

    return (
        <main className={estilos.pagina}>
            <article className={estilos.contenedor}>
                <section className={estilos.columnaGaleria}>
                    {productoFinal.imagenes.length > 0 ? (
                        <GaleriaImagenes imagenes={productoFinal.imagenes} />
                    ) : (
                        <div className={estilos.placeholderPDP}>
                            <span className={estilos.placeholderId}>{productoFinal.id}</span>
                            <p>IMAGEN TÉCNICA NO DISPONIBLE</p>
                        </div>
                    )}
                </section>
                
                <section className={estilos.columnaInfo}>
                    <InfoProducto producto={productoFinal} />
                </section>
            </article>
        </main>
    );
}

