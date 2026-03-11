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
- **Semantic tokens**: Defined in `@layer theme` using `light-dark()` — each token declared once, no separate dark block needed
- **Fluid typography**: Uses `clamp()` for responsive font sizes (`--fs-xs` to `--fs-xxxl`)
- **Font weights**: `--fw-normal` (400), `--fw-medium` (500), `--fw-semibold` (600)
- **Line heights**: `--leading-tight` (1.1), `--leading-snug` (1.333), `--leading-normal` (1.5)
- **Spacing scale**: `--space-0` through `--space-16` (e.g. `--space-4` = 1rem)
- **Shadows**: `--shadow-sm` for subtle elevation; `--ring-shadow`, `--ring-shadow-danger`, `--ring-shadow-success` for inset borders
- **Transition**: `--transition: 150ms ease` — use on `transition-property` for consistent timing

When adding colors, use existing semantic tokens like `var(--primary)`, `var(--foreground)`, `var(--muted-foreground)` rather than raw color values.

### Dark Mode

Dark mode is managed via `data-theme="dark|light"` on `<html>`, set by JavaScript.

**Anti-flash script** — Place this **before** the `<link>` CSS tag in every `<head>`:

```html
<script>
  const theme =
    localStorage.getItem('theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
</script>
```

**CSS** — Tokens use `light-dark(lightValue, darkValue)` in `@layer theme`. The `color-scheme` property on `:root` is set to `light` by default and overridden to `dark` by `:root[data-theme='dark']`. This is what controls which value `light-dark()` picks.

To add a new token that changes with the theme:
```css
/* In @layer theme :root {} */
--my-token: light-dark(var(--color-neutral-100), var(--color-neutral-800));
```

**Do not** create a separate `:root[data-theme='dark']` block for new tokens — `light-dark()` handles it.

**JS** — The `.theme-toggle` button in [js/main.js](../js/main.js) swaps `dataset.theme` and persists the choice with `localStorage.setItem('theme', next)`.

**Toggle button** — Already included in every navbar; no extra HTML needed when copying a page template (`aria-label="Basculer le thème"`, icons `.moon-icon` / `.sun-icon`).

### Design Token Naming

Two levels coexist intentionally:

1. **Global tokens** (context-agnostic) — use freely anywhere:
   `--primary`, `--foreground`, `--background`, `--border`, `--muted`, `--destructive`…

2. **Component tokens** (scoped to one component) — prefixed by component name:
   `--button-primary`, `--alert-destructive`, `--badge-success`, `--navbar-accent`…

Prefer global tokens for new styles. Create component tokens only when a component needs a color distinct from the corresponding global token.

### Breakpoints

```
sm : @media (width >= 40rem)   →  640px   (tablet / desktop nav)
lg : @media (width >= 64rem)   → 1024px  (large desktop)
```

No CSS custom properties exist for breakpoints (browser limitation). Use these two values consistently.

### Page Transitions

The project uses the View Transitions API for navigation:

```css
@view-transition {
  navigation: auto;
}
```

No configuration needed — transitions are automatic between pages.

### Motion & Accessibility

A global `@media (prefers-reduced-motion: reduce)` rule in `@layer base` disables all transitions and animations for users who opt out of motion. When writing animations:

- Gate new animations with `@media (prefers-reduced-motion: no-preference)` (like `.loader` does), **or**
- Let the global rule handle it — all `transition-duration` and `animation-duration` are forced to `0.01ms`

## Conventions

### HTML Structure

- Language: `lang="fr"` (French)
- Page layout: Use `.page` class on `<body>` for sticky footer grid
- **Skip link**: Every page must start with `<a href="#main-content" class="skip-link">Aller au contenu principal</a>` as the first child of `<body>`, and `<main>` must have `id="main-content"`
- Container: Use `.container` class for max-width and responsive padding
- Accessibility: Always include `aria-label`, `aria-current="page"` for nav, `.sr-only` for screen reader text
- External links: Always add `rel="noopener noreferrer"` on `target="_blank"` links

### Mobile Menu & Focus Trap

The mobile menu uses `inert` on `<main>` and `<footer>` when open to trap keyboard focus inside the navbar:

```js
// When menu opens:
mainContent.inert = true;
pageFooter.inert = true;

// When menu closes:
mainContent.inert = false;
pageFooter.inert = false;
```

`inert` makes an element and all its descendants non-interactive and invisible to assistive technology. It is fully supported in all modern browsers.

### Images

All `img` elements are responsive by default (`max-inline-size: 100%; height: auto;`) — safe to use inline, in navbars, or as logos without any class.

Add `.img` for explicit cover behavior (requires an explicit height alongside it):

```html
<img src="hero.jpg" alt="…" class="img" style="…">  <!-- display: block; object-fit: cover -->
```

### Component Patterns

**Buttons**: Use `data-variant` attribute for variants:

```html
<button>Primary</button>
<button data-variant="secondary">Secondary</button>
<button data-variant="soft">Soft</button>
<button data-variant="block">Full Width</button>
```

Disabled state: add `disabled` attribute — applies `opacity: 0.5` and `cursor: not-allowed`.

**Forms**: Use `aria-invalid="true"` for validation states (auto-styles labels and borders red). Use `.form-alert` for inline error messages below fields.

**Input Group**: Pair an input with a button side-by-side:

```html
<div class="input-group">
  <input type="text" />
  <button>Envoyer</button>
</div>
```

**Select**: Uses `appearance: base-select` for fully custom styling inside a `@supports (appearance: base-select)` block. Falls back gracefully to native styled select (background, border, border-radius, padding already applied). Options support `:checked`, `::checkmark`, and `:hover` states.

**Cards**: Structure with `.card > .card-title + .card-description`. The `.card` uses `flex-direction: column` with `gap`.

**Badges**: Use `.badge` with optional modifier classes:

```html
<span class="badge">Default</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-success">Succès</span>
```

**Alerts**: Use `.alert.alert-danger` or `.alert.alert-success` with `.alert-content > .alert-icon-wrapper + text`

**Tables**: Wrap tables in the responsive structure:

```html
<div class="table-container">
  <div class="table-wrapper">
    <div class="table-scroll">
      <table>
        ...
      </table>
    </div>
  </div>
</div>
```

Use `.table-header` / `.table-header-text` / `.table-header-actions` for the header above the table. Striped rows are automatic via `tbody tr:nth-of-type(2n)`.

**Loader**: Spinning indicator:

```html
<div class="loader"></div>
```

**Section**: Use `<section>` with a `<header>` containing an `<h2>` to get the auto underline decoration and centered layout.

### Layout Compositions

- `.auto-grid`: Responsive grid with `--grid-min-item-size` custom property
- `.cluster`: Flexbox wrapper with `--gutter`, `--cluster-horizontal-alignment`
- `.flow`: Vertical spacing via lobotomized owl (`--flow-space`)

### Utility Classes

Beyond `.container`, `.sr-only`, and `.flow`, a minimal set is available for rapid prototyping:

- `.mx-auto` — horizontal centering (`margin-inline: auto`)
- `.text-center` / `.text-left` / `.text-right` — text alignment
- `.hidden` — `display: none`
- `.max-w-xs` (20rem) / `.max-w-sm` (24rem) / `.max-w-md` (28rem) / `.max-w-lg` (32rem) / `.max-w-xl` (36rem)

**Avoid inline styles** — use these utilities instead.

### JavaScript

- ES Modules only (`type="module"`)
- DOM utilities in [js/utils/dom.js](../js/utils/dom.js) - use `selectElement()` helper
- Import pattern: `import { selectElement as get } from './utils/dom.js'`
- [js/main.js](../js/main.js) handles:
  - Mobile menu toggle (`aria-expanded`) + focus trap (`inert` on `<main>` and `<footer>`)
  - Escape key and click-outside to close menu
  - Dark mode toggle (`.theme-toggle`) with `localStorage` persistence
  - Current year display (`.year`)

## Key Files

| File                                      | Purpose                                         |
| ----------------------------------------- | ----------------------------------------------- |
| [css/main.css](../css/main.css)           | All styles including layers, tokens, components |
| [css/normalize.css](../css/normalize.css) | Cross-browser normalization                     |
| [js/main.js](../js/main.js)               | Mobile menu + focus trap + dark mode toggle + current year |
| [js/utils/dom.js](../js/utils/dom.js)     | DOM selection helper with error handling        |
| [index.html](../index.html)               | Full component showcase/demo page               |
| [cards.html](../cards.html)               | Card component examples                         |
| [tables.html](../tables.html)             | Table component examples                        |

## Adding New Components

1. Add styles in `@layer components { }` in main.css
2. Use semantic tokens (`var(--*)`) for colors — prefer global tokens (`--primary`, `--foreground`) over raw color values
3. Use `light-dark(lightValue, darkValue)` in `@layer theme` for any new theme-aware tokens; do not add a separate `:root[data-theme='dark']` block
4. Use CSS logical properties (`inline-size`, `block-size`, `inset-inline`)
5. Use existing variables for spacing, radius (`--rounded-lg`), shadows (`--shadow-sm`)
6. Include responsive breakpoints at `40rem` (sm) and `64rem` (lg)
7. Gate animations with `@media (prefers-reduced-motion: no-preference)`
