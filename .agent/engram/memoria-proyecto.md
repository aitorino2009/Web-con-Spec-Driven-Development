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
- **SelectorIdioma:** COMPLETADO. ES | EN funcional.
- **Logo (RAW STITCH):** COMPLETADO. Estilo Factory Tag.
- **Hero Brutalista v4.0:** COMPLETADO. Sincronizado con i18n.
- **EncabezadoSeccion:** COMPLETADO. Soporte para subtítulos y alineación.
- **GridProductos:** COMPLETADO. Responsivo, conectado a diccionarios y navegación dinámica.
- **Ficha de Producto (PDP):** COMPLETADO. Server Component, Galería con Lightbox y zoom, Info técnica 100% traducida.
- **Internacionalización (i18n):** Sistema consolidado para todo el flujo de compra.