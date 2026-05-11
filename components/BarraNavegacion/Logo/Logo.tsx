import Link from 'next/link';
import estilos from './Logo.module.css';

/**
 * Componente Logo: RAW STITCH
 * Implementa la identidad visual principal. Es puramente tipográfico.
 * Redirige siempre a la raíz de la aplicación y mantiene su aspecto Neo-brutalista.
 */
export default function Logo() {
    return (
        <Link href="/" className={estilos.enlace} aria-label="Ir a la página de inicio">
            <span className={estilos.texto}>RAW STITCH</span>
        </Link>
    );
}
