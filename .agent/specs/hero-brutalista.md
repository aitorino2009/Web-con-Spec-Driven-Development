# Especificación: Hero Brutalista (Impacto Visual)

**Estado:** En Desarrollo
**Versión:** 4.0.0 (The Mixed Group)

## 1. Objetivo
Evolucionar el impacto visual de la marca incluyendo diversidad de género. Mantener la estética Adidas Originals / Lifestyle profesional, mostrando a un grupo mixto (2 hombres, 2 mujeres) con ropa técnica premium, alegría genuina y luz solar urbana.

## 2. Identidad Visual
- **Fondo:** Nueva imagen lifestyle (/hero-v4-mixed-group.png) - En proceso de generación.
- **Tipografía Titular:** `Alfa Slab One`. Texto "CROQUETAS STITCH" en blanco puro (#FFFFFF), con sombreado atmosférico reforzado (capas de 30px y 90px).
- **CTA:** Bloque negro sólido (#000000) con texto "VER NOVEDADES". Hover con sombra Cyber-Lime.

## 3. Prompt de Imagen (8K RAW - Mixed Group Evolution)
> "Professional 8K full-frame fashion editorial photograph of a diverse group of four models (2 women and 2 men) laughing naturally and walking confidently on a clean, sunlit modern urban paseo in Barcelona. They are wearing premium, functional tech-wear and stylish urban separates in a sophisticated neutral color palette with subtle lime accents. Dynamic poses, authentic natural expressions. Aesthetic resembles an Adidas Originals campaign. Ultra-high definition photorealism, shot on analog film with natural grain. Daylight --ar 16:9"

## 4. Estructura del Componente
- **Contenedor:** `section` (100vh).
- **Overlay:** Mínimo (0.1) para preservar el look de película y la luz natural.

## 5. Implementación Técnica
- **Componente:** `components/Hero/Hero.tsx`
- **Estilos:** `components/Hero/Hero.module.css`
