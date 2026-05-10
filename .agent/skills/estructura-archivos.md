# Skill: Estructura de Archivos y Organización
**Propósito:** Mantener la integridad del proyecto mediante una organización modular y nombres en castellano.

## 1. Reglas de Componentes
- Todo componente debe residir en `componentes/[NombreDelComponente]/`.
- Archivos obligatorios por carpeta (nombres en castellano):
    - `index.ts`: Exportación (mantenemos index por estándar técnico).
    - `[Nombre].tsx`: Estructura y lógica.
    - `[Nombre].module.css`: Estilos aislados.

## 2. Nomenclatura
- Carpetas de componentes: `PascalCase` (ej. `BarraNavegacion`).
- Archivos de lógica: `kebab-case` (ej. `utilidades-idioma.ts`).
- Estilos: Siempre `[Nombre].module.css`.

## 3. Capa de Aplicación (Next.js)
- Las rutas se gestionan en la carpeta `app/` (estándar del framework).
- Se utiliza la estructura `app/[idioma]/` para internacionalización.