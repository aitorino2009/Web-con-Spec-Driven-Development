import { getDictionary } from '@/lib/get-dictionary';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import inventario from '@/.agent/specs/inventario-maestro.json';
import estilos from '../novedades/categoria.module.css';
import { getLocalizedProduct } from '@/lib/i18n-utils';

export default async function MujerPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dic = await getDictionary(lang);
    
    const productosBase = inventario.productos.filter(p => p.categoria === 'MUJER');
    const productos = productosBase.map(p => getLocalizedProduct(p as any, lang));

    return (
        <main className={estilos.pagina}>
            <header className={estilos.cabecera}>
                <h1 className={estilos.titulo}>
                    {dic.categories.mujer} // {dic.categories.suffix}
                </h1>
            </header>
            <ProductGrid lang={lang} productos={productos as any} />
        </main>
    );
}
