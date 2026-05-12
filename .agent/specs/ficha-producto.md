# Especificación: Ficha de Producto (PDP)

**Estado:** Completado
**Versión:** 1.0.0

## 1. Objetivo
Diseñar e implementar la página de detalle de producto (`/producto/[id]`) con un enfoque en la claridad técnica, el realismo fotográfico y una jerarquía visual neo-brutalista.

## 2. Experiencia de Usuario (UX) e Interfaz (UI)
- **Layout Desktop:** Dos columnas asimétricas (60% galería / 40% información).
- **Layout Móvil:** Una sola columna con galería tipo carrusel vertical.

### Columna A: Galería (Izquierda)
- **Imagen Principal:** Gran formato, borde de `3px`, fondo gris neutro.
- **Miniaturas:** Lista vertical u horizontal de imágenes secundarias (las fotos 1-4 de Krea). Al hacer clic, cambian la imagen principal.

### Columna B: Info de Producto (Derecha)
- **Metadatos:** Categoría en tipografía `Space Mono` pequeña y color `var(--color-primario)`.
- **Título:** `Alfa Slab One` en gran tamaño.
- **Precio:** `Space Mono` bold.
- **Selector de Tallas:** Botones cuadrados sólidos (`S, M, L, XL`). El seleccionado tendrá fondo negro y texto blanco.
- **CTA:** Botón "AÑADIR AL CARRITO" masivo, con efecto de sombra sólida neo-brutalista.
- **Acordeones:** Secciones desplegables para "DETALLES TÉCNICOS" y "ENVÍOS" con iconos de flecha técnicos.

## 3. Estructura de Routing (Next.js 15)
Para asegurar la escalabilidad y el soporte de idiomas, la ruta será:
`app/[lang]/producto/[id]/page.tsx`

Esto permite:
1.  **Internacionalización:** El parámetro `[lang]` ya está integrado.
2.  **SEO:** Cada producto tendrá su propia URL limpia.
3.  **Carga Paralela:** Uso de Server Components para obtener los datos del producto por `id`.

## 4. Componentes Requeridos
- **GaleriaProducto:** Gestión de estados para el cambio de imagen.
- **SelectorTallas:** Manejo de estado de selección.
- **AcordeonTecnico:** Componente colapsable.

## 5. Implementación Técnica
- **Ubicación:** `app/[lang]/producto/[id]/`
- **Componentes:** `components/FichaProducto/`
- **Estilos:** CSS Modules siguiendo la Skill de Estilos.
