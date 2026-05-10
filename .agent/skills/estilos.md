# Skill: Arquitectura de Estilos (CSS Modules)
**Propósito:** Definir el estándar de diseño visual modular, tipado y sin frameworks de utilidad como Tailwind.

## 1. Reglas de Implementación
- **Aislamiento:** Cada componente tiene su propio archivo `[Nombre].module.css`.
- **Importación:** Se debe importar como `import estilos from './[Nombre].module.css'`.
- **Variables Obligatorias:** Prohibido usar valores fijos (hexadecimales o píxeles sueltos). Se deben usar las variables de `app/globals.css`.

## 2. Estándares de CSS
- **Nomenclatura:** Usar `camelCase` para las clases de CSS (ej. `.contenedorPrincipal`) para facilitar la lectura en TypeScript.
- **Variables Globales:** Solo se permiten variables (colores, fuentes) en `app/globals.css` bajo el selector `:root`.
- **Prohibiciones:** - Prohibido usar selectores de etiqueta directos (ej. `div { ... }`) dentro de los módulos.
    - Prohibido el uso de `!important`.

## 3. Responsividad y Estética Neo-brutalista
- **Mobile First:** Diseñar primero para móvil y usar `media queries` para escritorio.
- **Tokens de Diseño:** Los componentes deben aplicar por defecto:
    - `border: var(--borde-grueso);`
    - `box-shadow: var(--sombra-solida);`

## 4. Identidad Visual (Referencia)
- El agente debe consultar `app/globals.css` para aplicar la paleta **Cyber-Lime** (Verde Lima, Negro, Crema) definida por el arquitecto.