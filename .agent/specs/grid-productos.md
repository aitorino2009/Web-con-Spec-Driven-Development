# Especificación: Grid de Productos Destacados

**Estado:** En Desarrollo
**Versión:** 1.0.0

## 1. Objetivo
Implementar una sección de "Productos Destacados" debajo del Hero que muestre la colección actual de CROQUETAS STITCH con una estética neo-brutalista técnica, enfatizando la calidad y el carácter divertido de la marca.

## 2. Identidad Visual y Estilo
- **Grid:** Layout responsivo basado en CSS Grid.
    - Móvil: 1 columna.
    - Tablet: 2 columnas.
    - Desktop: 3 o 4 columnas (según ancho de pantalla).
- **Contenedor:** Padding lateral consistente con el resto de la página.
- **Tarjeta de Producto (Ficha):**
    - **Borde:** `var(--borde-grueso)`.
    - **Sombra:** `var(--sombra-solida)` en hover o estado estático según diseño.
    - **Badge 'Novedad':** Bloque sólido de `var(--color-primario)` con texto en negro, posicionado sobre la imagen.
    - **Tipografía:**
        - Nombre: `Space Mono` (Bold).
        - Precio: `Space Mono`.

## 3. Interacción (Micro-animaciones)
- **Hover Imagen:**
    - Opción A: Zoom suave (`scale(1.05)`) con transición de 0.3s.
    - Opción B: Cambio de `src` a una imagen de detalle (vía estado de React).
- **Hover Tarjeta:** Elevación sutil o cambio en la intensidad de la sombra sólida.

## 4. Datos de Ejemplo (Placeholder)
| ID | Nombre | Precio | Tag | Imagen |
|---|---|---|---|---|
| 1 | Sudadera Bechamel Oversize | 65.00€ | Novedad | /productos/bechamel-oversize.png |
| 2 | Camiseta Panko Tech | 35.00€ | Novedad | /productos/panko-tech.png |
| 3 | Pantalones Rebozados | 85.00€ | Novedad | /productos/pantalones-rebozados.png |
| 4 | Gorra Crujiente | 25.00€ | Novedad | /productos/gorra-crujiente.png |

## 5. Estructura de Componentes
- **GridProductos:** Contenedor principal que maneja el layout.
- **TarjetaProducto:** Componente individual para cada producto.
    - `Image` de Next.js para optimización.
    - Badge condicional.

## 6. Implementación Técnica
- **Ubicación:** `components/GridProductos/`
- **Archivos:**
    - `GridProductos.tsx`
    - `GridProductos.module.css`
    - `TarjetaProducto.tsx` (opcional, si se decide separar).
