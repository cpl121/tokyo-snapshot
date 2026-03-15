# Tokio en Cifras — Design System

> Versión 1.0 · Basado en Next.js 15 + Tailwind CSS 3.4 + TypeScript

---

## Principios de diseño

| Principio           | Descripción                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| **Sobriedad**       | Dark theme profundo (#0a0a0a). Sin decoraciones innecesarias.                   |
| **Jerarquía clara** | Tipografía de gran contraste (black → bold → semibold → regular).               |
| **Acento único**    | Un único color de acento (Rojo Tokio) para énfasis y CTAs.                      |
| **Accesibilidad**   | WCAG 2.1 AA como mínimo. Foco visible, semántica correcta, movimiento reducido. |
| **Mobile-first**    | Diseño pensado para pantallas pequeñas y escalado hacia arriba.                 |

---

## 1. Paleta de colores

### Superficies (fondos)

| Token CSS                 | Valor     | Clase Tailwind       | Uso                                |
| ------------------------- | --------- | -------------------- | ---------------------------------- |
| `--color-surface-base`    | `#0a0a0a` | `bg-surface-base`    | Fondo de página principal          |
| `--color-surface-subtle`  | `#0d0d0d` | `bg-surface-subtle`  | Fondos alternativos (StatsSummary) |
| `--color-surface-raised`  | `#111111` | `bg-surface-raised`  | Tarjetas, tablas (filas pares)     |
| `--color-surface-overlay` | `#0e0e0e` | `bg-surface-overlay` | Filas alternadas en tabla          |

### Bordes

| Token CSS                | Valor     | Clase Tailwind          | Uso                       |
| ------------------------ | --------- | ----------------------- | ------------------------- |
| `--color-border-faint`   | `#1a1a1a` | `border-border-faint`   | Separadores muy sutiles   |
| `--color-border-default` | `#1f1f1f` | `border-border-default` | Borde estándar de tarjeta |
| `--color-border-muted`   | `#2a2a2a` | `border-border-muted`   | Borde algo más visible    |

### Texto

| Token CSS                | Valor     | Clase Tailwind        | WCAG vs. surface-base              |
| ------------------------ | --------- | --------------------- | ---------------------------------- |
| `--color-text-primary`   | `#ffffff` | `text-white`          | 21:1 ✅ AAA                        |
| `--color-text-secondary` | `#e5e7eb` | `text-text-secondary` | ~18:1 ✅ AAA                       |
| `--color-text-muted`     | `#9ca3af` | `text-text-muted`     | ~7:1 ✅ AA                         |
| `--color-text-subtle`    | `#6b7280` | `text-text-subtle`    | ~4.5:1 ✅ AA (texto grande)        |
| `--color-text-faint`     | `#374151` | `text-text-faint`     | ~3:1 — solo para texto no esencial |

> ⚠️ `text-text-faint` no supera AA para texto normal. Usar únicamente para disclaimers y metadatos secundarios.

### Acento — Rojo Tokio

Basado en Tailwind red, anclado en `#DC2626`.

| Escala  | Valor         | Clase Tailwind       | Uso                           |
| ------- | ------------- | -------------------- | ----------------------------- |
| 400     | `#F87171`     | `text-primary-400`   | Texto en hover                |
| 500     | `#EF4444`     | `text-primary-500`   | Valores KPI, valores de stats |
| **600** | **`#DC2626`** | **`bg-primary-600`** | **Color principal de marca**  |
| 700     | `#B91C1C`     | `bg-primary-700`     | Hover del botón primario      |
| 900     | `#7F1D1D`     | `bg-primary-900`     | Fondos de acento sutil        |
| 950     | `#450A0A`     | `bg-primary-950`     | Fondos de realce mínimo       |

### Verde de éxito

Solo para métricas positivas (índice de seguridad, etc.).

| Escala | Valor     | Clase Tailwind     |
| ------ | --------- | ------------------ |
| 400    | `#4ade80` | `text-success-400` |
| 500    | `#22c55e` | `text-success-500` |

---

## 2. Tipografía

**Font family:** Inter (Google Fonts) · `var(--font-inter)`
**Fallback stack:** `system-ui, -apple-system, sans-serif`

### Escala tipográfica

| Nombre | Tamaño | Line-height | Peso    | Clase Tailwind | Uso                           |
| ------ | ------ | ----------- | ------- | -------------- | ----------------------------- |
| `2xs`  | 10px   | 1rem        | —       | `text-2xs`     | Micro-etiquetas internas      |
| `xs`   | 12px   | 1.5         | 400–600 | `text-xs`      | Eyebrows, notas, metadatos    |
| `sm`   | 14px   | 1.5         | 400–600 | `text-sm`      | Cuerpo secundario, celdas     |
| `base` | 16px   | 1.5         | 400     | `text-base`    | Cuerpo principal              |
| `lg`   | 18px   | 1.75        | 600     | `text-lg`      | Subtítulos de sección         |
| `xl`   | 20px   | 1.75        | 400     | `text-xl`      | Lead / intro text             |
| `2xl`  | 24px   | 1.3         | 700     | `text-2xl`     | Headings secundarios          |
| `3xl`  | 30px   | 1.2         | 700     | `text-3xl`     | Headings principales (mobile) |
| `5xl`  | 48px   | 1           | 900     | `text-5xl`     | Valores KPI grandes           |
| `7xl`  | 72px   | 1           | 900     | `text-7xl`     | Heading hero (tablet)         |
| `8xl`  | 96px   | 1           | 900     | `text-8xl`     | Heading hero (desktop)        |

### Pesos

| Nombre   | Valor | Clase Tailwind  | Uso                       |
| -------- | ----- | --------------- | ------------------------- |
| Regular  | 400   | `font-normal`   | Cuerpo de texto           |
| Semibold | 600   | `font-semibold` | Valores de stats, labels  |
| Bold     | 700   | `font-bold`     | Headings h2               |
| Black    | 900   | `font-black`    | Valores KPI, heading hero |

### Letter-spacing

| Token              | Valor | Clase Tailwind     | Uso                        |
| ------------------ | ----- | ------------------ | -------------------------- |
| `tracking-widest`  | 0.1em | `tracking-widest`  | Eyebrows, labels uppercase |
| `tracking-widest2` | 0.2em | `tracking-widest2` | Texto japonés decorativo   |

---

## 3. Espaciado

Grid base de **8px**. Se usa la escala estándar de Tailwind.

| Clase   | px   | Uso habitual               |
| ------- | ---- | -------------------------- |
| `gap-1` | 4px  | Separación mínima          |
| `gap-2` | 8px  | Tags, badges               |
| `gap-3` | 12px | Grid de tarjetas hero      |
| `gap-4` | 16px | Grid KPI                   |
| `gap-6` | 24px | Separación de bloques      |
| `px-4`  | 16px | Padding horizontal mobile  |
| `px-6`  | 24px | Padding horizontal tablet  |
| `px-8`  | 32px | Padding horizontal desktop |
| `py-12` | 48px | Footer padding             |
| `py-16` | 64px | Sección estándar           |

---

## 4. Layout

### Contenedor principal

```
max-width: 72rem (1152px)   →   max-w-content
margin: auto
padding-inline: 1rem → 1.5rem → 2rem  (mobile → tablet → desktop)
```

### Breakpoints (Tailwind defaults)

| Nombre | mínimo | Uso                        |
| ------ | ------ | -------------------------- |
| `sm`   | 640px  | 2 columnas en grids        |
| `md`   | 768px  | —                          |
| `lg`   | 1024px | Navbar desktop, 4 columnas |
| `xl`   | 1280px | —                          |

---

## 5. Border radius

| Token          | Valor  | Clase Tailwind | Uso                            |
| -------------- | ------ | -------------- | ------------------------------ |
| `rounded-md`   | 6px    | `rounded-md`   | Botones, inputs                |
| `rounded-lg`   | 8px    | `rounded-lg`   | —                              |
| `rounded-card` | 12px   | `rounded-card` | Tarjetas, tablas, contenedores |
| `rounded-pill` | 9999px | `rounded-pill` | Badges, tags, eyebrows         |

---

## 6. Sombras y efectos

No se usan sombras `box-shadow`. El contraste visual se logra mediante:

- Bordes sutiles (`border-border-default`)
- Diferencia de valor entre superficies (e.g. `surface-raised` sobre `surface-base`)
- `backdrop-blur-md` en elementos flotantes (navbar, tarjetas hero)

---

## 7. Animaciones y transiciones

### Transiciones

| Duración       | Uso                                      |
| -------------- | ---------------------------------------- |
| `duration-150` | Hover de filas de tabla, colores rápidos |
| `duration-300` | Hover de tarjetas, colores normales      |
| `duration-500` | Efectos lentos (progress bars)           |

Función de tiempo: `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind default ease-in-out).

### Keyframes definidos

| Nombre                       | Descripción                            | Clase                |
| ---------------------------- | -------------------------------------- | -------------------- |
| `fade-in`                    | Aparece desde abajo (8px) con opacidad | `animate-fade-in`    |
| `slide-down`                 | Aparece desde arriba (4px)             | `animate-slide-down` |
| `bounce` (Tailwind built-in) | Rebote vertical — indicador scroll     | `animate-bounce`     |
| `pulse` (Tailwind built-in)  | Parpadeo de opacidad                   | `animate-pulse`      |

### Movimiento reducido

Todas las animaciones y transiciones se reducen a prácticamente cero cuando el usuario tiene activado `prefers-reduced-motion: reduce`. Ver [globals.css](../app/globals.css).

---

## 8. Iconografía

Se usan **emojis Unicode** como iconos de sección (ej: 👥 🏙️ 💴). No se incluye ninguna librería de iconos para mantener el bundle mínimo.

Los SVGs inline se utilizan en:

- Navbar hamburger (custom)
- Scroll chevron en Hero (Heroicons stroke style)
- Info icon en callout de desempleo

---

## 9. Focus y accesibilidad

### Focus ring

```css
outline: 2px solid #dc2626;
outline-offset: 2px (normal) / 3px (botones);
border-radius: 4px;
```

Solo visible en `:focus-visible` (no se muestra en clicks de ratón).

### Skip link

Visible al primer Tab. Posicionado en la parte superior de la pantalla.
Navega a `#main-content` (el elemento `<main>`).

### Jerarquía de headings

```
h1  → Heading hero ("Tokio en Cifras")
h2  → Headings de sección (KPI, Población, etc.)
       También "Los números que definen Tokio" en StatsSummary
```

No se omite ningún nivel de heading.

### Roles ARIA relevantes

| Elemento          | Atributo           | Valor                            |
| ----------------- | ------------------ | -------------------------------- |
| `<nav>` principal | `aria-label`       | "Navegación principal"           |
| Botón hamburger   | `aria-expanded`    | `true` / `false`                 |
| Botón hamburger   | `aria-controls`    | ID del menú                      |
| Sección Hero      | `aria-label`       | "Introducción — Tokio en Cifras" |
| Sección KPI       | `aria-labelledby`  | `#kpi-heading`                   |
| Fuentes           | `<nav>`            | `aria-label="Fuentes de datos"`  |
| Kanji decorativos | `aria-hidden`      | `true`                           |
| `<table>`         | `<th scope="col">` | Columnas con header              |
| `<table>`         | `<th scope="row">` | Primera celda de cada fila       |

---

## 10. Componentes

### KpiCard

```tsx
<KpiCard value="37M" label="Habitantes" sublabel="Gran Tokio" />
```

- Usa `<article>` como elemento raíz
- El par valor/etiqueta se marca con `<dl>/<dt>/<dd>` para lectores de pantalla
- Línea de acento roja que se expande en hover (`w-8 → w-12`)

### StatsTable

```tsx
<StatsTable rows={section.rows} caption="Indicadores de población de Tokio" />
```

- `caption` oculto con `.sr-only` — describe el propósito de la tabla
- `<th scope="col">` en encabezados de columna
- `<th scope="row">` en primera celda de cada fila (el indicador)
- Filas alternadas: `surface-raised` / `surface-overlay`
- Hover sutil: `bg-primary-600/5`

### SectionHeader

```tsx
<SectionHeader id="poblacion" icon="👥" title="Población" description="..." />
```

- El `id` se aplica sobre el `<div>` contenedor — permite anclas de navegación
- El `scroll-margin-top` global (`[id] { scroll-margin-top: 5rem }`) compensa la navbar fija

### Navbar

- Solo usa `"use client"` (estado de scroll y menú)
- Cierre con tecla `Escape`
- `useId()` para vincular botón ↔ menú móvil con `aria-controls`

---

## 11. Utilidades CSS personalizadas

Definidas en `app/globals.css` bajo `@layer components`:

| Clase                | Descripción                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `.section-container` | `max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16`                 |
| `.card`              | `bg-surface-raised border border-border-default rounded-card`      |
| `.text-muted`        | `text-text-muted`                                                  |
| `.section-divider`   | `border-b border-border-faint`                                     |
| `.label-eyebrow`     | `text-xs font-semibold tracking-widest uppercase text-primary-500` |
| `.skip-link`         | Link de salto al contenido — solo visible en focus de teclado      |

---

## 12. Checklist de calidad UI

- [ ] Todo texto interactivo tiene `:focus-visible` visible
- [ ] Contraste de texto ≥ 4.5:1 (texto normal) o ≥ 3:1 (texto grande)
- [ ] Tablas con `scope` en `<th>` y `caption` descriptivo
- [ ] No hay animaciones sin soporte para `prefers-reduced-motion`
- [ ] Botones tienen `aria-label` si no tienen texto visible
- [ ] El documento tiene un único `<h1>`
- [ ] La página funciona correctamente sin JavaScript (SSR / estático)
- [ ] El primer elemento focusable es el skip link
