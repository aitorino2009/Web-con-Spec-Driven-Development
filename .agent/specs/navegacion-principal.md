# Especificación: Navegación Principal

**Estado:** En Desarrollo
**Versión:** 1.0.0

## 1. Objetivo
Implementar el menú de navegación central de CROQUETAS STITCH, priorizando la sobriedad, la elegancia funcional y la coherencia con la nueva identidad técnica Space Mono.

## 2. Secciones y Enlaces
Los enlaces se gestionarán dinámicamente mediante el sistema de internacionalización:

| Clave i18n | Español (ES) | Inglés (EN) | Ruta |
| :--- | :--- | :--- | :--- |
| `novedades` | NOVEDADES | NEW ARRIVALS | `/novedades` |
| `hombre` | HOMBRE | MEN | `/hombre` |
| `mujer` | MUJER | WOMEN | `/mujer` |
| `basicos` | BÁSICOS | BASICS | `/basicos` |
| `archivo` | ARCHIVO | ARCHIVE | `/archivo` |

## 3. Identidad Visual (Interfaz)
- **Tipografía:** `Space Mono` (Extra Bold 700 para mantener consistencia con el logo).
- **Color de Texto:** Negro puro (`var(--color-texto)`).
- **Disposición:** Flexbox horizontal centrado en la zona media de la `BarraNavegacion`.
- **Espaciado:** `gap: 2.5rem` (32px - 40px) para un look aireado y de alta gama.

## 4. Interactividad (Hover)
Buscamos un efecto limpio y no intrusivo:
- **Hover:** Subrayado fino (`text-decoration: underline`) con un `text-underline-offset: 8px` y `text-decoration-thickness: 1px`.
- **Transición:** Suave cambio de opacidad o simplemente el subrayado directo.

## 5. Implementación Técnica
- **Componente:** `componentes/BarraNavegacion/EnlacesNav/EnlacesNav.tsx`
- **Estilos:** `componentes/BarraNavegacion/EnlacesNav/EnlacesNav.module.css`
- **Integración:** Se insertará en el `header` (BarraNavegacion.tsx) desplazando el espacio reservado actual.
