# Especificación: Navegación Principal

**Estado:** Completado
**Implementación:** Menú central dinámico con detección de ruta activa (`usePathname`). Estética de "Factory Tag" para la sección actual, cumpliendo estrictamente con la Skill de Estilos (uso de variables globales y sin `!important`).
**Versión:** 1.1.0


## 1. Objetivo
Implementar el menú de navegación central de CROQUETAS STITCH, priorizando la sobriedad, la elegancia funcional y la coherencia con la nueva identidad técnica Space Mono.

## 2. Secciones y Enlaces
(Secciones dinámicas gestionadas por i18n...)

## 3. Identidad Visual (Interfaz)
- **Tipografía:** `Space Mono` (Extra Bold 700).
- **Color de Texto:** Negro puro (`var(--color-texto)`).
- **Disposición:** Flexbox horizontal centrado.
- **Espaciado:** `gap: 2.5rem`.

## 4. Interactividad y Estados
### Hover (Etiqueta Dinámica)
Buscamos una respuesta visual táctil y potente:
- **Efecto:** El enlace se transforma en una caja sólida.
- **Fondo:** `var(--color-secundario)` (Verde Lima).
- **Borde:** `var(--borde-grueso)`.
- **Sombra:** `var(--sombra-solida)` (estilo Neo-brutalista).
- **Transform:** `translate(-4px, -4px)` para simular profundidad.

### Estado Activo (Sección Actual)
(Se mantiene la Factory Tag en Naranja Croqueta...)


## 5. Implementación Técnica
- **Componente:** `componentes/BarraNavegacion/EnlacesNav/EnlacesNav.tsx` (Client Component).
- **Estilos:** `componentes/BarraNavegacion/EnlacesNav/EnlacesNav.module.css` (CSS Modules).

