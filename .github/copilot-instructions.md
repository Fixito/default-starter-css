# Copilot Instructions - CSS Starter Design System

## Project Overview

This is a modern CSS design system (in French) inspired by Shadcn, featuring CSS Layers, semantic tokens, and automatic dark mode. It's a static site starter with no build tools required.

## Architecture

### CSS Layers (Cascade Order)

The project uses a strict cascade order defined in [css/main.css](../css/main.css):

```css
@layer normalize, reset, theme, base, compositions, components, utilities;
```

**Always place new styles in the appropriate layer.** Components go in `@layer components`, layout patterns in `@layer compositions`, etc.

### Design Tokens

- **Color palette**: OKLCH color space (`oklch(...)`) - see `:root` for primary, neutral, green, red scales
- **Semantic tokens**: Defined in `@layer theme` with automatic dark mode via `prefers-color-scheme`
- **Fluid typography**: Uses `clamp()` for responsive font sizes (`--fs-xs` to `--fs-xxxl`)

When adding colors, use existing semantic tokens like `var(--primary)`, `var(--foreground)`, `var(--muted-foreground)` rather than raw color values.

### Dark Mode

Dark mode is **automatic** via `@media (prefers-color-scheme: dark)` in the theme layer. Override tokens in that media query rather than creating separate dark classes.

## Conventions

### HTML Structure

- Language: `lang="fr"` (French)
- Page layout: Use `.page` class on `<body>` for sticky footer grid
- Container: Use `.container` class for max-width and responsive padding
- Accessibility: Always include `aria-label`, `aria-current="page"` for nav, `.sr-only` for screen reader text

### Component Patterns

**Buttons**: Use `data-variant` attribute for variants:

```html
<button>Primary</button>
<button data-variant="secondary">Secondary</button>
<button data-variant="soft">Soft</button>
<button data-variant="block">Full Width</button>
```

**Forms**: Use `aria-invalid="true"` for validation states (auto-styles labels and borders red)

**Cards**: Structure with `.card > header > .card-title + .card-description`

**Alerts**: Use `.alert.alert-danger` or `.alert.alert-success` with `.alert-content > .alert-icon-wrapper + text`

### Layout Compositions

- `.auto-grid`: Responsive grid with `--grid-min-item-size` custom property
- `.cluster`: Flexbox wrapper with `--gutter`, `--cluster-horizontal-alignment`
- `.flow`: Vertical spacing via lobotomized owl (`--flow-space`)

### JavaScript

- ES Modules only (`type="module"`)
- DOM utilities in [js/utils/dom.js](../js/utils/dom.js) - use `selectElement()` helper
- Import pattern: `import { selectElement as get } from './utils/dom.js'`

## Key Files

| File                                      | Purpose                                         |
| ----------------------------------------- | ----------------------------------------------- |
| [css/main.css](../css/main.css)           | All styles including layers, tokens, components |
| [css/normalize.css](../css/normalize.css) | Cross-browser normalization                     |
| [js/utils/dom.js](../js/utils/dom.js)     | DOM selection helper with error handling        |
| [index.html](../index.html)               | Full component showcase/demo page               |

## Adding New Components

1. Add styles in `@layer components { }` in main.css
2. Use semantic tokens (`var(--*)`) for colors
3. Use CSS logical properties (`inline-size`, `block-size`, `inset-inline`)
4. Use existing variables for spacing, radius (`--rounded-lg`), shadows (`--shadow-sm`)
5. Include responsive breakpoints at `40rem` (mobile) and `64rem` (desktop)
