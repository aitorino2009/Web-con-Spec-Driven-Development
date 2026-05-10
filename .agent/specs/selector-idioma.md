# Especificación: Selector de Idioma

**Estado:** Completado.

## 1. Responsabilidad y Ubicación
- **Ubicación:** `components/BarraNavegacion/SelectorIdioma/`
- **Responsabilidad:** Permitir al usuario alternar entre los idiomas disponibles (español e inglés) manteniendo la ruta en la que se encuentra.

## 2. Diseño y Estética
- **Estilo Visual:** Minimalista y vibrante (Neo-brutalista), alejándose de estéticas oscuras tipo Cyberpunk tradicional.
- **Formato:** Texto simple interactivo: `ES | EN`.
- **Regla del Negro:** El color negro (`#000000`) se usará **única y exclusivamente** para el texto.
- **Colores:** Se usarán los colores claros/vibrantes de la paleta Cyber-Lime, evitando rellenar áreas o fondos con negro.
- **Interactividad:** El idioma activo debe tener un distintivo visual sutil pero claro (ej. diferente grosor de fuente o un fondo vibrante sin usar negro).

## 3. Lógica y Comportamiento
- **Tipo de Componente:** Componente de Cliente (`"use client"`).
- **Detección del Idioma Actual:** Utilizar hooks de Next.js (ej. `usePathname`) para detectar la ruta actual y el idioma en uso.
- **Navegación Fluida:** Al hacer clic en un idioma, se debe reemplazar la sección del idioma en la URL (ej. pasar de `/es/landing` a `/en/landing`) utilizando el router de Next.js para una transición óptima.
