# Portfolio — Tadeo Leon

Portfolio profesional de **Tadeo Daniel Leon Ferenese** (Software & Applied AI Engineer | Data Science & Local-First Architectures).

La especificación completa del contenido está en [AGENT.md](./AGENT.md).

## Stack

- React 19 (JavaScript, JSX)
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`, tokens en `src/index.css` bajo `@theme`)
- `lucide-react` para íconos
- Geist y Geist Mono self-hosted (`@fontsource-variable/*`)
- Vitest + Testing Library (jsdom)
- ESLint + Prettier

## Scripts

| Script               | Qué hace                              |
| -------------------- | ------------------------------------- |
| `npm run dev`        | Servidor de desarrollo                |
| `npm run build`      | Build de producción                   |
| `npm run preview`    | Sirve el build localmente             |
| `npm test`           | Corre los tests una vez               |
| `npm run test:watch` | Tests en modo watch                   |
| `npm run lint`       | ESLint (falla con cualquier warning)  |
| `npm run format`     | Prettier                              |

## Estructura

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/      # MediaPlaceholder
│   └── organisms/
├── sections/           # Hero, Specialties, Projects, Timeline (containers)
├── data/               # Única fuente del contenido (sin datos inventados)
├── test/setup.js
├── App.jsx
├── main.jsx
└── index.css           # Tokens de diseño (@theme)
```

El contenido vive en `src/data`; los componentes de UI lo reciben por props.
Los contratos de datos están documentados con JSDoc en `src/data/types.js`.

## Anclas

`#inicio`, `#especialidades`, `#proyectos`, `#trayectoria` y `#educacion`.
`#educacion` es una sub-ancla dentro de la sección `#trayectoria` (columna derecha).

## Reemplazar los placeholders de multimedia

Cada proyecto en `src/data/projects.js` tiene una lista `media`. Mientras un slot no tenga `src`, se muestra un placeholder etiquetado. Para usar un archivo real, copiarlo a `public/media/` y agregar `src`:

```js
{
  type: 'video',
  label: 'VIDEO DEMO: ...',
  aspect: '16/9',
  src: '/media/nodo-demo.mp4',
}
```

El proyecto del Poder Judicial es confidencial y no debe llevar capturas.

## Pendientes conocidos

- Botón "Descargar CV (PDF)": falta el archivo, `href` sin definir en `src/data/profile.js`.
- Implementación visual de cada sección (hoy son stubs con su título).
