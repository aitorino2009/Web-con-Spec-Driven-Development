import Image from 'next/image';
import Link from 'next/link';
import estilos from './Hero.module.css';

interface Props {
    dicc: {
        title: string;
        cta: string;
    };
    lang: string;
}

/**
 * Hero: Sección principal de impacto visual.
 * Implementa un diseño brutalista con tipografía Alfa Slab One y un CTA sólido.
 */
export default function Hero({ dicc, lang }: Props) {
    return (
        <section className={estilos.contenedor}>
            <div className={estilos.capaImagen}>
                <Image 
                    src="/hero-industrial.png" 
                    alt="RAW STITCH Industrial Fashion"
                    fill
                    priority
                    className={estilos.imagen}
                />
                <div className={estilos.overlay} />
            </div>
            
            <div className={estilos.contenido}>
                <h1 className={estilos.titulo}>
                    RAW STITCH
                </h1>
                
                <Link href={`/${lang}/coleccion`} className={estilos.botonCta}>
                    {dicc.cta}
                </Link>
            </div>
        </section>
    );
}
