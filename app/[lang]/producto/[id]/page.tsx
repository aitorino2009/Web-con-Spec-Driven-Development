import { getDictionary } from '@/lib/get-dictionary';
import GaleriaImagenes from '@/components/DetalleProducto/GaleriaImagenes';
import InfoProducto from '@/components/DetalleProducto/InfoProducto';
import estilos from './producto.module.css';

// Mapeo de imágenes (esto sigue siendo estático por ahora)
const PRODUCT_IMAGES: Record<string, string[]> = {
    '1': [
        '/productos/sudadera-bechamel-oversize/1.webp',
        '/productos/sudadera-bechamel-oversize/2.webp',
        '/productos/sudadera-bechamel-oversize/3.webp',
        '/productos/sudadera-bechamel-oversize/4.webp'
    ],
    '2': [
        '/productos/camiseta-panko-tech/1.webp',
        '/productos/camiseta-panko-tech/2.webp',
        '/productos/camiseta-panko-tech/3.webp',
        '/productos/camiseta-panko-tech/4.webp'
    ],
    '3': [
        '/productos/pantalones-rebozados/1.webp',
        '/productos/pantalones-rebozados/2.webp',
        '/productos/pantalones-rebozados/3.webp',
        '/productos/pantalones-rebozados/4.webp'
    ],
    '4': [
        '/productos/gorra-crujiente/1.webp',
        '/productos/gorra-crujiente/2.webp',
        '/productos/gorra-crujiente/3.webp',
        '/productos/gorra-crujiente/4.webp'
    ]
};

// Mapeo de precios (también lo centralizamos aquí o en el dicc)
const PRODUCT_PRICES: Record<string, string> = {
    '1': '65.00€',
    '2': '35.00€',
    '3': '85.00€',
    '4': '25.00€'
};

export default async function FichaProducto({ params }: { params: Promise<{ id: string, lang: string }> }) {
    const { id, lang } = await params;
    const dic = await getDictionary(lang);
    
    const productoTraducido = dic.productos[id];

    if (!productoTraducido) {
        return (
            <main className={estilos.pagina}>
                <div className={estilos.contenedor} style={{ textAlign: 'center', padding: '100px 0' }}>
                    <h1 className={estilos.nombre}>PRODUCTO NO ENCONTRADO</h1>
                    <p className={estilos.categoria}>EL LOTE SOLICITADO NO EXISTE EN NUESTRO ARCHIVO</p>
                </div>
            </main>
        );
    }

    // Recomponemos el objeto de producto con la data traducida y los assets
    const productoFinal = {
        ...productoTraducido,
        precio: PRODUCT_PRICES[id],
        imagenes: PRODUCT_IMAGES[id]
    };

    return (
        <main className={estilos.pagina}>
            <article className={estilos.contenedor}>
                <section className={estilos.columnaGaleria}>
                    <GaleriaImagenes imagenes={productoFinal.imagenes} />
                </section>
                
                <section className={estilos.columnaInfo}>
                    <InfoProducto producto={productoFinal} />
                </section>
            </article>
        </main>
    );
}
