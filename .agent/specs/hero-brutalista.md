# Especificación: Hero Brutalista (Impacto Visual)

**Estado:** En Desarrollo
**Versión:** 1.0.0

## 1. Objetivo
Crear el primer impacto visual de RAW STITCH mediante una sección a pantalla completa que combine fotografía de alta costura industrial con tipografía brutalista de gran formato.

## 2. Identidad Visual
- **Fondo:** Imagen de alta calidad (8K) que ocupe el 100% del viewport height (`100vh`).
- **Tipografía Titular:** `Alfa Slab One`. Tamaño gigante, superpuesto sobre la imagen.
- **Color Texto:** Blanco o Negro con alto contraste (dependiendo de la imagen). Inicialmente Blanco para destacar sobre fondos industriales oscuros.
- **CTA:** Botón rectangular sólido, negro, sin bordes redondeados.

## 3. Prompt de Imagen (8K RAW)
Para ser utilizado en Midjourney / Stable Diffusion:
> "8K RAW, ultra-detailed industrial high fashion photography, medium shot of a stoic fashion model wearing a highly textured technical futuristic garment, abandoned concrete warehouse environment, harsh dramatic studio lighting with deep shadows, cinematic composition, film grain texture, muted color palette, high-end editorial style, no smiles, no cliches, raw aesthetic --ar 16:9 --v 6.0"

## 4. Estructura del Componente
- **Contenedor:** `section` con `width: 100%` y `height: 100vh`.
- **Overlay:** Capa sutil de oscurecimiento si es necesario para legibilidad.
- **Contenido:** Centrado o alineado según impacto visual.
- **CTA:** Botón grande con tipografía `Space Mono`.

## 5. Implementación Técnica
- **Componente:** `components/Hero/Hero.tsx`
- **Estilos:** `components/Hero/Hero.module.css`
- **i18n:** Uso de las llaves `hero.title` y `hero.cta`.
