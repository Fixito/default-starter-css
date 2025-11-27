# 🎨 CSS Starter par Défaut

> Un système de design moderne inspiré de Shadcn avec CSS Layers, tokens sémantiques et mode sombre automatique.

## ✨ Caractéristiques

- 🚀 **Performance** : Variables CSS optimisées et mode sombre automatique
- ♿ **Accessibilité** : HTML sémantique, ARIA, focus visible
- 📱 **Responsive** : Typographie fluide avec `clamp()` et breakpoints logiques
- 🌙 **Mode sombre** : Détection automatique avec `prefers-color-scheme`
- 🎯 **Moderne** : OKLCH, propriétés logiques, CSS Layers, `@view-transition`
- 🎨 **Tokens** : Architecture de variables sémantiques

## 🏗️ Architecture CSS Layers

```css
@layer normalize, reset, theme, base, compositions, components, utilities;
```

| Layer          | Description                            |
| -------------- | -------------------------------------- |
| `normalize`    | Normalisation cross-browser            |
| `reset`        | Reset minimal (box-sizing, margins)    |
| `theme`        | Tokens sémantiques light/dark          |
| `base`         | Styles de base (body, headings, links) |
| `compositions` | Layouts (auto-grid, cluster)           |
| `components`   | Navbar, boutons, formulaires, alertes  |
| `utilities`    | Container, flow, sr-only               |

## 🎨 Tokens sémantiques

```css
:root {
  /* Base */
  --background: var(--neutral-50);
  --foreground: var(--neutral-950);

  /* Primary & Buttons */
  --primary: var(--primary-600);
  --button-primary: var(--primary);
  --soft: var(--primary-100);

  /* UI */
  --accent: var(--white);
  --muted: var(--neutral-50);
  --border: var(--neutral-200);
  --card: var(--white);
  --destructive: var(--red-800);

  /* Navbar */
  --navbar: var(--white);
  --navbar-foreground: var(--secondary-foreground);
  --navbar-primary: var(--primary-600);

  /* Alerts */
  --alert-destructive: var(--red-50);
  --alert-success: var(--green-50);
}
```

Les tokens sont automatiquement adaptés en mode sombre via `@media (prefers-color-scheme: dark)`.

## 📦 Composants inclus

- ✅ **Navbar** : Responsive avec menu mobile accessible
- ✅ **Boutons** : `default`, `secondary`, `soft`, `block`
- ✅ **Formulaires** : Inputs, select, textarea, validation `aria-invalid`
- ✅ **Alertes** : `alert-danger`, `alert-success`
- ✅ **Layouts** : Container, auto-grid, cluster, flow
- ✅ **Loader** : Animation de chargement

## 🛠️ Personnalisation

### Changer la couleur primaire

1. Remplacez les variables `--primary-*` dans `:root` (palette OKLCH)
2. Les tokens sémantiques dans `@layer theme` s'adaptent automatiquement

### Typographie fluide

Basée sur [Fluid Type Scale](https://www.fluid-type-scale.com/) :

```css
--fs-sm: clamp(0.8rem, 0.15vi + 0.77rem, 0.89rem);
--fs-base: clamp(1rem, 0.31vi + 0.94rem, 1.19rem);
--fs-md: clamp(1.25rem, 0.55vi + 1.14rem, 1.58rem);
/* ... */
```

## 📚 Ressources

- [Fluid Type Scale](https://www.fluid-type-scale.com/) - Générateur d'échelles fluides
- [OKLCH Color Picker](https://oklch.com/) - Espace colorimétrique moderne
- [Shadcn UI](https://ui.shadcn.com/) - Inspiration pour les tokens

## 📄 Licence

MIT License
