# Skill: Arquitectura de Estilos (CSS Modules)
**Propósito:** Definir el estándar de diseño visual modular, tipado y sin frameworks de utilidad como Tailwind.

## 1. Reglas de Implementación
- **Aislamiento:** Cada componente tiene su propio archivo `[Nombre].module.css`.
- **Importación:** Se debe importar como `import estilos from './[Nombre].module.css'`.
- **Uso en TSX:** Las clases se aplican usando el objeto importado: `className={estilos.nombreClase}`.

## 2. Estándares de CSS
- **Nomenclatura:** Usar `camelCase` para las clases de CSS (ej. `.contenedorPrincipal`) para facilitar la lectura en TypeScript.
- **Variables Globales:** Solo se permiten variables (colores, fuentes) en `app/globals.css` bajo el selector `:root`.
- **Prohibiciones:** - Prohibido usar selectores de etiqueta directos (ej. `div { ... }`) dentro de los módulos.
    - Prohibido el uso de `!important`.

## 3. Responsividad
- Usar variables para los breakpoints (ej. `--tablet`, `--desktop`).
- Priorizar el enfoque "Mobile First".