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

import Logo from './Logo/Logo';
import SelectorIdioma from './SelectorIdioma/SelectorIdioma';
import estilos from './BarraNavegacion.module.css';

export default function BarraNavegacion() {
    return (
        <header className={estilos.contenedor}>
            {/* --- Zona Izquierda: Logo --- */}
            <div className={estilos.zonaIzquierda}>
                <Logo />
            </div>

            {/* --- Zona Centro: Navegación --- */}
            <nav className={estilos.zonaCentro}>
                {/* TODO: Componente <EnlacesNav /> */}
            </nav>

            {/* --- Zona Derecha: Acciones --- */}
            <div className={estilos.zonaDerecha}>
                <SelectorIdioma />
                {/* TODO: Componente <BotonCTA /> */}
            </div>
        </header>
    );
}
