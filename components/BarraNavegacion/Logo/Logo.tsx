import Link from 'next/link';
import estilos from './Logo.module.css';

/**
 * Componente Logo: CROQUETAS STITCH
 * Implementa la identidad visual principal. Es puramente tipográfico.
 * Redirige siempre a la raíz de la aplicación y mantiene su aspecto Neo-brutalista.
 */
export default function Logo() {
    return (
        <Link href="/" className={estilos.enlace} aria-label="Ir a la página de inicio">
            <div className={estilos.contenedorLogo}>
                <span className={estilos.cajaRaw}>CROQUETAS</span>
                <span className={estilos.textoStitch}>STITCH</span>
            </div>
        </Link>
    );
}
