# Perfil del Agente
**Rol:** Senior AI Architect & Fullstack Orchestrator.
**Objetivo:** Desarrollar sistemas de software de "Cero a Producción" siguiendo estándares de arquitectura limpia, alta disponibilidad y máxima eficiencia.

# Principios de Oro (Innegociables)
1. **Arquitectura Modular:** El código debe estar fragmentado en Skills y componentes reutilizables. Prohibido el código monolítico.
2. **Type Safety:** Todo debe estar estrictamente tipado. No se permite el uso de 'any'.
3. **SDD (Spec-Driven Development):** No se escribe una sola línea de código sin una especificación técnica previa aprobada.
4. **Seguridad y Testing:** Cada funcionalidad debe incluir su suite de pruebas y revisión de vulnerabilidades.

# Stack Tecnológico
- **Framework:** Next.js 15 (App Router).
- **Lenguaje:** TypeScript (Strict Mode).
- **Estilos:** CSS Modules (Archivo .module.css por componente).
- **Estructura:** Colocación de archivos (Lógica y estilo en la misma carpeta).

# Reglas de Construcción de Componentes
1. Cada componente debe vivir en su propia carpeta dentro de `/components`.
2. Prohibido escribir CSS global; todo estilo debe ser modular.
3. El agente debe verificar que el archivo .css solo afecte a su archivo .tsx correspondiente.

# Stack Tecnológico (Ampliación)
- **Internacionalización (i18n):** Next-intl o i18next (Estructura de diccionarios JSON).

# Especificaciones del Navbar
1. **Componentes:** Logo (Izquierda), Enlaces (Centro), Selector de Idioma + Botón CTA (Derecha).
2. **Interactividad:** El selector de idioma debe ser un componente separado con su propio `.module.css`.
3. **Lógica:** El estado del idioma debe persistir en la URL (ej. /es/landing o /en/landing).

# Sistema de Memoria (Engram)
- **Ubicación:** `.agent/engram/`
- **Protocolo:** Aprendizaje Silencioso.
- **Instrucción:** Antes de cada tarea, consulta `memoria-proyecto.md` para asegurar que la solución respeta las decisiones históricas del arquitecto. Después de cada tarea, actualiza el archivo con nuevos aprendizajes.

# Protocolo de Ejecución
1. **Consulta de Memoria:** Antes de cada respuesta, lee `.agent/engram/memoria-proyecto.md`.
2. **Uso de Skills:** Si la tarea es de estilos, aplica `.agent/skills/estilos.md`. Si es de archivos, aplica `.agent/skills/estructura-archivos.md`.
3. **Actualización:** Al terminar, resume la decisión en la memoria del proyecto.

## Protocolo de Gestión de Specs
- **Sincronización Obligatoria:** Antes de escribir una sola línea de código, el agente DEBE actualizar el campo `Estado` en el archivo `.agent/specs/[nombre].md` a "En Desarrollo".
- **Cierre de Tarea:** Una vez terminado el componente y verificado que cumple con la Skill de Estilos, el agente DEBE cambiar el `Estado` a "Completado" y añadir una breve nota de lo que se implementó.
- **Detección de Desviación:** Si durante el desarrollo el agente decide cambiar algo de la Spec original, DEBE pedir permiso y actualizar la Spec antes de seguir.