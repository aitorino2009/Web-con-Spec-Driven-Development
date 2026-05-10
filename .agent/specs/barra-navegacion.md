# Especificación: Barra de Navegación (Contenedor)
**Estado:** Completado.
**Implementado:** Contenedor `header` sticky con tres zonas (izquierda/centro/derecha) en flexbox, fondo `var(--color-primario)` y borde inferior Neo-brutalista. Subcomponentes marcados como TODO para la siguiente iteración.
**Estado:** Esqueleto Inicial.

## 1. Estructura Dinámica
- **Ubicación:** `componentes/BarraNavegacion/`
- **Composición:** Un contenedor `header` con tres áreas definidas:
    - **Izquierda:** Espacio para el Logo.
    - **Centro:** Espacio reservado (vacío por ahora).
    - **Derecha:** Espacio para Acciones (Selector de idioma y CTA).

## 2. Estilo Neo-brutalista
- **Fondo:** `var(--color-primario)` (#B3FF00) para que destaque.
- **Borde:** Inferior con `var(--borde-grueso)`.
- **Dimensiones:** Altura fija de `80px` con alineación vertical centrada (`flex`).

## 3. Comportamiento
- **Posición:** `sticky` en la parte superior (top: 0).
- **Z-index:** Elevado para estar siempre por encima del resto del contenido.