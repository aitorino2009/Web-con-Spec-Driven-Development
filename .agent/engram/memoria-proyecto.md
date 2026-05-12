# Memoria Persistente del Proyecto
**Estado actual:** Fase de Desarrollo de Componentes.

## Decisiones del Arquitecto (Innegociables)
- **Idioma del Proyecto:** Castellano (nombres de carpetas y archivos).
- **Estética:** Prohibido el uso de Tailwind CSS.
- **Arquitectura de Estilos:** Uso estricto de CSS Modules (.module.css).
- **Estructura:** Componentes aislados (Lógica + Estilo en la misma carpeta).
- **Uso del Color Negro:** Reservado para texto y elementos estructurales (bordes/sombras). Prohibido en fondos grandes.

## Aprendizajes Recientes
- **Pivot de Color:** El usuario ha actualizado el color primario a `#eb955c` (Tono Croqueta), manteniendo la estética neo-brutalista.
- **SDD (Spec-Driven Development):** Flujo consolidado. Cada sección tiene su Spec técnica antes de la codificación.
- **Skills de Generación:** Diferenciación entre `generacion-imagenes.md` (lifestyle) y `fotos-producto.md` (e-commerce).
- **Hito de Internacionalización:** Catálogo 100% en diccionarios `es.json` e `en.json`, permitiendo traducción total sin tocar componentes.
- **Arquitectura Next.js 15 (Hidratación):** Las páginas dinámicas con `params` deben ser Server Components para evitar Hydration Mismatch.
- **UX de Inspección Técnica:** Sistema de Lightbox con zoom interno para inspección macro-fotográfica.
- **Fuente de Verdad (Master Inventory):** Uso de `.agent/specs/inventario-maestro.json` como base de datos centralizada para 120 productos, desacoplando la data de la lógica de renderizado.
- **Sistema de Placeholders:** Solución de diseño para catálogos masivos sin assets visuales. Uso de contenedores `#F2F2F2` con IDs en `Space Mono`.
- **Identidad Verbal (Nomenclatura):** Regla de oro para nombres de productos: `[Base de Prenda] + [Adjetivo Culinario]` (ej: Camiseta Panko Confitada).
- **Psicología de Precios:** Uso de precios realistas (`.99`, `.95`) para reforzar la percepción de marca profesional.

## Paleta de Colores y Estética
- **Fondo:** #FFFFFF (Blanco)
- **Texto:** #000000 (Negro)
- **Primario:** #eb955c (Naranja Croqueta)
- **Secundario:** #E6FFAC (Verde Lima Suave)
- **Acento:** #FFD3B4 (Crema)
- **Estilo:** Neo-brutalismo técnico (Factory Tag). Bordes de 3px, cajas sólidas y tipografía monoespaciada.
- **Tipografía Base:** `Space Mono` (Técnica) y `Alfa Slab One` (Titulares).

## Estado de Componentes
- **BarraNavegacion:** COMPLETADO. Sticky, tres zonas flex, fondo primario.
- **Navegación de Categorías:** COMPLETADO. Rutas dinámicas para Novedades, Hombre, Mujer, Básicos y Archivo conectadas al inventario maestro.
- **GridProductos:** COMPLETADO. Soporta placeholders dinámicos y filtrado por categoría.
- **Ficha de Producto (PDP) v2.0:** COMPLETADO. Ahora consume del inventario maestro y usa etiquetas i18n globales para los botones y secciones.
- **Internacionalización (i18n):** Sistema consolidado. Las etiquetas de interfaz (CTA, Secciones) están separadas del contenido del producto.
- **Inventario Maestro:** 120 referencias activas y categorizadas.