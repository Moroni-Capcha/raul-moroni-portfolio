# Raúl Moroni — Portfolio

Portafolio personal con el diseño "Crimson Nocturne", construido con Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 y GSAP.

Sitio en vivo: https://raul-moroni-portfolio.vercel.app

## Estructura

```
app/
  layout.tsx        Fuentes, metadata (SEO / Open Graph) y fondo global
  page.tsx          Compone todas las secciones
  globals.css       Tokens de diseño Tailwind v4 (@theme) y utilidades
components/         Una sección por componente (Hero, About, Skills, Projects, Contact...)
lib/content.ts      Toda la copy: navegación, skills, proyectos y contacto
types/index.ts      Interfaces compartidas
public/images/      Foto, video del avatar y capturas de proyectos
```

## Cómo correrlo

Este repo usa `pnpm`; no mezcles `npm`/`yarn`.

```bash
pnpm install
pnpm run dev     # http://localhost:3000
pnpm run build
pnpm run lint
```

## Agregar un proyecto

1. Agrega una entrada en `projects` dentro de `lib/content.ts` (`image` es opcional; sin imagen se muestra una portada tipográfica).
2. Guarda la captura en `public/images/projects/` (16:9, unos 1280×720, JPEG liviano).

## Notas de diseño

Los tokens (colores, tipografía, espaciado) viven en `app/globals.css` bajo `@theme`, sin `tailwind.config.js`. Así se generan clases como `bg-primary-container`, `text-on-surface-variant` o `font-display`.
