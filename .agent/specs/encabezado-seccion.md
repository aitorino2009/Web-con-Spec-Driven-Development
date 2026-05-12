# Especificación: Encabezado de Sección (SectionHeader)

**Estado:** Completado
**Versión:** 1.0.0

## 1. Objetivo
Crear un componente de encabezado reutilizable que sirva para introducir secciones (como la Grid de Productos) con un impacto visual fuerte y coherente con la marca.

## 2. Identidad Visual
- **Tipografía Principal:** `Alfa Slab One` (Titular).
- **Tipografía Secundaria:** `Space Mono` (Metadatos/Subtítulo).
- **Estilo:**
    - Texto en **Uppercase** total.
    - Alineación: Izquierda por defecto (posibilidad de centrado).
    - Elemento Decorativo: Una línea sólida de `var(--borde-grueso)` que subraye o enmarque el título.
    - Padding: Espaciado generoso superior e inferior para que la página "respire" entre bloques.

## 3. Propiedades (Props)
| Prop | Tipo | Descripción |
|---|---|---|
| `titulo` | String | Texto principal (ej: "Sintoniza con el crujiente"). |
| `subtitulo` | String | (Opcional) Texto pequeño tipo código/batch. |
| `alineacion` | 'left' | 'center' | Alineación del texto. |

## 4. Estructura de Componentes
- **EncabezadoSeccion:**
    - Contenedor con `display: flex` y dirección de columna.
    - `h2` para el título principal.
    - `span` o `p` para el subtítulo/metadato.

## 5. Implementación Técnica
- **Ubicación:** `components/EncabezadoSeccion/`
- **Archivos:** `EncabezadoSeccion.tsx`, `EncabezadoSeccion.module.css`.
