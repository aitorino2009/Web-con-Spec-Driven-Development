# Especificación: Logo "RAW STITCH"

**Estado:** Completado.

## 1. Responsabilidad y Ubicación
- **Ubicación:** `components/BarraNavegacion/Logo/`
- **Responsabilidad:** Representar la identidad visual de la marca "RAW STITCH" en la zona izquierda de la Barra de Navegación y ser reutilizable en otras secciones. Debe ser completamente escalable.

## 2. Tipografía y Carácter
- **Fuente:** `Syne` (importada desde Google Fonts).
- **Peso:** El más alto posible (ExtraBold 800 o Black 900).
- **Carácter:** Diseño puramente tipográfico. Debe transmitir una actitud "loca", moderna, cruda y contundente.

## 3. Estilo Visual (Neo-Brutalismo Vibrante)
- **Texto:** Color negro (`var(--color-texto)`).
- **Contorno (Stroke):** Grueso y definido, en color negro.
- **Sombra (Shadow):** Sombra sólida desplazada (offset) para generar volumen y profundidad sin desenfoques (blur: 0).
- **REGLA DE ORO:** Los fondos detrás del logo deben ser siempre vibrantes (como el Verde Lima). Está **prohibido** el uso de fondos negros u oscuros. El negro se limita de forma exclusiva al texto, el contorno y la sombra.

## 4. Lógica y Comportamiento
- **Enlace:** Debe envolver el texto en un componente `<Link>` de Next.js apuntando a la raíz (`/`), manteniendo el idioma actual.
- **Escalabilidad:** Se debe maquetar de forma que herede o reciba propiedades de tamaño (mediante `font-size`) para adaptarse tanto a la altura de la Barra de Navegación como a tamaños gigantes en secciones de tipo Hero.
