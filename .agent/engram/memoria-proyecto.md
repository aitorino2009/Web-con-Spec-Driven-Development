# Memoria Persistente del Proyecto
**Estado actual:** Fase de Desarrollo de Componentes.

## Decisiones del Arquitecto (Innegociables)
- **Idioma del Proyecto:** Castellano (nombres de carpetas y archivos).
- **Estética:** Prohibido el uso de Tailwind CSS.
- **Arquitectura de Estilos:** Uso estricto de CSS Modules (.module.css).
- **Estructura:** Componentes aislados (Lógica + Estilo en la misma carpeta).
- **Uso del Color Negro:** Reservado para texto y elementos estructurales (bordes/sombras). Prohibido en fondos grandes.

## Aprendizajes Recientes
- **Pivot de Color:** El usuario ha actualizado el color primario a `#eb955c` (Tono Croqueta), alejándose del verde lima inicial pero manteniendo la estética neo-brutalista.
- **Arquitectura de Componentes:** Se ha adoptado el uso de Client Components (`'use client'`) de forma estratégica cuando se requiere manejo de eventos (como `onError` para imágenes) o interactividad compleja, manteniendo el resto como Server Components.
- **SDD (Spec-Driven Development):** Flujo consolidado. Cada sección (Hero, Grid) tiene su Spec técnica antes de la codificación.
- **Skills de Generación:** Diferenciación clara entre `generacion-imagenes.md` (lifestyle/campaña) y `fotos-producto.md` (e-commerce/producto puro).

## Paleta de Colores y Estética
- **Fondo:** #FFFFFF (Blanco)
- **Texto:** #000000 (Negro)
- **Primario:** #eb955c (Naranja Croqueta) - *Actualizado por el usuario*
- **Secundario:** #E6FFAC (Verde Lima Suave)
- **Acento:** #FFD3B4 (Crema)
- **Estilo:** Neo-brutalismo técnico (Factory Tag). Bordes de 3px, cajas sólidas y tipografía monoespaciada.
- **Tipografía Base:** `Space Mono` (Técnica) y `Alfa Slab One` (Titulares).

## Estado de Componentes
- **GridProductos:** COMPLETADO. Implementado como Client Component. Grid responsivo (1/2/3-4 col) con tarjetas neo-brutalistas e imágenes reales de Krea. Estructura de activos organizada por carpetas por producto para futuras expansiones (hover/galería).
- **Hero Brutalista v4.0 (The Mixed Group):** EN DESARROLLO. Spec actualizada para grupo mixto (2H/2M). Imagen en cola de generación.
- **BarraNavegacion (Contenedor):** COMPLETADO. `header` sticky con tres zonas flex. Fondo `var(--color-primario)`.
- **SelectorIdioma:** COMPLETADO. Componente de cliente (ES | EN).
- **Logo (RAW STITCH):** COMPLETADO. Diseño 'Factory Tag' con Space Mono 700.
- **Redireccionamiento Raíz:** Implementado en `app/page.tsx`.
- **Internacionalización (i18n):** Sistema de diccionarios JSON funcionando para Server Components.