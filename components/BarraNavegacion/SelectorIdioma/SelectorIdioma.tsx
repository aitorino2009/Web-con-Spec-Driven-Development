"use client";

import { usePathname, useRouter } from 'next/navigation';
import estilos from './SelectorIdioma.module.css';

export default function SelectorIdioma() {
    const pathname = usePathname();
    const router = useRouter();

    // Detección de idioma asumiendo estructura de ruta /[lang]/...
    const idiomaActual = pathname.startsWith('/en') ? 'en' : 'es';

    const cambiarIdioma = (nuevoIdioma: string) => {
        if (idiomaActual === nuevoIdioma) return;

        // Reemplazamos únicamente el primer segmento de idioma en la URL
        const nuevaRuta = pathname.replace(`/${idiomaActual}`, `/${nuevoIdioma}`);
        router.push(nuevaRuta);
    };

    return (
        <div className={estilos.contenedor}>
            <button
                onClick={() => cambiarIdioma('es')}
                className={`${estilos.boton} ${idiomaActual === 'es' ? estilos.activo : ''}`}
                aria-label="Cambiar a Español"
            >
                ES
            </button>
            <span className={estilos.separador} aria-hidden="true">|</span>
            <button
                onClick={() => cambiarIdioma('en')}
                className={`${estilos.boton} ${idiomaActual === 'en' ? estilos.activo : ''}`}
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    );
}
