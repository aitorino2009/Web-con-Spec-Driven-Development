# Memoria Persistente del Proyecto
**Estado actual:** Fase de Cimentación.

## Decisiones del Arquitecto (Innegociables)
- **Idioma del Proyecto:** Castellano (nombres de carpetas y archivos).
- **Estética:** Prohibido el uso de Tailwind CSS.
- **Arquitectura de Estilos:** Uso estricto de CSS Modules (.module.css).
- **Estructura:** Componentes aislados (Lógica + Estilo en la misma carpeta).

## Aprendizajes Recientes
- El usuario prefiere un flujo de trabajo de "Aprendizaje Silencioso".
- El agente tiene permiso para crear carpetas automáticamente siguiendo la Skill de Estructura.
- El usurio decidió esta paleta de colores y estética de diseño:
    - **Fondo:** #FFFFFF (Blanco)
    - **Texto:** #000000 (Negro)
    - **Primario:** #B3FF00 (Verde Lima Vibrante)
    - **Secundario:** #E6FFAC (Verde Lima Suave)
    - **Acento:** #FFD3B4 (Crema)
    - **Estilo:** Neo-brutalismo (Bordes gruesos de 3px y sombras sólidas de 5px en negro).

## Decisiones de Componentes
- **BarraNavegacion (Contenedor):** COMPLETADO. `header` sticky con tres zonas flex. Fondo `var(--color-primario)`. Spec cerrada. Pendiente: Logo, EnlacesNav, SelectorIdioma y BotonCTA.
- **Redireccionamiento Raíz:** Implementado en `app/page.tsx` para redirigir `/` a `/es`.
    - **Estilo:** Neo-brutalismo (Bordes gruesos de 3px y sombras sólidas de 5px en negro).
