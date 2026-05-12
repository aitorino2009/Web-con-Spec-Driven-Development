# Memoria Persistente del Proyecto
**Estado actual:** Fase de Cimentación.

## Decisiones del Arquitecto (Innegociables)
- **Idioma del Proyecto:** Castellano (nombres de carpetas y archivos).
- **Estética:** Prohibido el uso de Tailwind CSS.
- **Arquitectura de Estilos:** Uso estricto de CSS Modules (.module.css).
- **Estructura:** Componentes aislados (Lógica + Estilo en la misma carpeta).
- **Uso del Color Negro:** El color negro (#000000) se reserva para el **texto y elementos estructurales** (bordes y sombras del estilo neo-brutalista). Queda totalmente prohibido su uso en fondos o bloques de color grandes para evitar una estética cyberpunk oscura y mantener el enfoque Cyber-Lime.

## Aprendizajes Recientes
- El usuario prefiere un flujo de trabajo de "Aprendizaje Silencioso".
- El agente tiene permiso para crear carpetas automáticamente siguiendo la Skill de Estructura.
- Se ha implementado una nueva Skill especializada en fotografía de producto para e-commerce (`fotos-producto.md`), diferenciándola de la Skill de lifestyle.
- El usurio decidió esta paleta de colores y estética de diseño:
    - **Fondo:** #FFFFFF (Blanco)
    - **Texto:** #000000 (Negro)
    - **Primario:** #B3FF00 (Verde Lima Vibrante)
    - **Secundario:** #E6FFAC (Verde Lima Suave)
    - **Acento:** #FFD3B4 (Crema)
    - **Estilo:** Neo-brutalismo técnico (Factory Tag). Bordes limpios, cajas sólidas y tipografía monoespaciada para elementos de identidad.
    - **Tipografía Base:** `Space Mono` (Cuerpo, Navegación e Identidad Técnica). `Alfa Slab One` (Titulares de alto impacto).


- **GridProductos:** EN DESARROLLO. Spec creada. Grid responsivo (1/2/3-4 col) con tarjetas neo-brutalistas. Pendiente: Implementación de componentes y assets de imagen.
- **Hero Brutalista v4.0 (The Mixed Group):** EN DESARROLLO. Evolución a grupo mixto (2H/2M) con estética premium tech-wear. Spec actualizada. Imagen en cola de generación por límites de capacidad.
- **Hero Brutalista v3.0 (4K & Estabilidad Visual):** COMPLETADO. Integración de imagen 4K y sombreado atmosférico suave. Se descartaron delineados y strokes para mantener la limpieza editorial.
- **SelectorIdioma:** COMPLETADO. Componente de cliente minimalista (ES | EN) con diseño Neo-brutalista vibrante. Regla estricta: Negro solo para texto.
- **Internacionalización (i18n):** Implementado sistema nativo de diccionarios JSON (`dictionaries/`) y cargador asíncrono (`lib/get-dictionary.ts`) para Server Components.
- **Logo (RAW STITCH):** REDISEÑADO. Estilo 'Factory Tag' neo-brutalista técnico puro. Uso de fuente Space Mono 700. La palabra RAW va dentro de una caja negra sólida con texto blanco, y STITCH fuera con letter-spacing de 0.1em. Se eliminaron sombras y efectos 'pegatina'.