import ProductGrid from '@/components/ProductGrid/ProductGrid';
import inventario from '@/.agent/specs/inventario-maestro.json';
import estilos from '../novedades/categoria.module.css';

export default async function BasicosPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    
    const productos = inventario.productos.filter(p => p.categoria === 'BÁSICOS');

    return (
        <main className={estilos.pagina}>
            <header className={estilos.cabecera}>
                <h1 className={estilos.titulo}>BÁSICOS // ARCHIVO TÉCNICO</h1>
            </header>
            <ProductGrid lang={lang} productos={productos} />
        </main>
    );
}
