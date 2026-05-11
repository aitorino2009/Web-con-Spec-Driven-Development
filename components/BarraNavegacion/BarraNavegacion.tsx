/**
 * BarraNavegacion.tsx
 * Contenedor principal de la barra de navegación.
 *
 * Spec: .agent/specs/barra-navegacion.md
 * Composición:
 *   - Izquierda: Espacio para el Logo (pendiente).
 *   - Centro:    Espacio reservado (vacío por ahora).
 *   - Derecha:   Espacio para Acciones - Selector de idioma + CTA (pendiente).
 */

import { getDictionary } from '@/lib/get-dictionary';
import Logo from './Logo/Logo';
import EnlacesNav from './EnlacesNav/EnlacesNav';
import SelectorIdioma from './SelectorIdioma/SelectorIdioma';
import estilos from './BarraNavegacion.module.css';

export default async function BarraNavegacion({ lang }: { lang: string }) {
    const dict = await getDictionary(lang);

    return (
        <header className={estilos.contenedor}>
            {/* --- Zona Izquierda: Logo --- */}
            <div className={estilos.zonaIzquierda}>
                <Logo />
            </div>

            {/* --- Zona Centro: Navegación --- */}
            <nav className={estilos.zonaCentro}>
                <EnlacesNav dicc={dict.navigation} lang={lang} />
            </nav>

            {/* --- Zona Derecha: Acciones --- */}
            <div className={estilos.zonaDerecha}>
                <SelectorIdioma />
                {/* TODO: Componente <BotonCTA /> */}
            </div>
        </header>
    );
}
