import ProductGrid from '@/components/ProductGrid/ProductGrid';
import inventario from '@/.agent/specs/inventario-maestro.json';
import estilos from './categoria.module.css';

export default async function NovedadesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    
    // Filtrar productos por categoría NOVEDADES
    const productos = inventario.productos.filter(p => p.categoria === 'NOVEDADES');

    return (
        <main className={estilos.pagina}>
            <header className={estilos.cabecera}>
                <h1 className={estilos.titulo}>NOVEDADES // ARCHIVO TÉCNICO</h1>
            </header>
            <ProductGrid lang={lang} productos={productos} />
        </main>
    );
}
