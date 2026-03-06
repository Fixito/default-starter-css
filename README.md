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

| Layer          | Description                                          |
| -------------- | ---------------------------------------------------- |
| `normalize`    | Normalisation cross-browser                          |
| `reset`        | Reset minimal (box-sizing, margins)                  |
| `theme`        | Tokens sémantiques light/dark                        |
| `base`         | Styles de base (body, headings, links)               |
| `compositions` | Layouts (auto-grid, cluster, page)                   |
| `components`   | Navbar, boutons, formulaires, alertes, badges, table |
| `utilities`    | Container, flow, sr-only                             |

## 🎨 Tokens sémantiques

Variables CSS sémantiques pour couleurs, composants et UI. Adaptées automatiquement en mode sombre via `prefers-color-scheme`. Consultez `@layer theme` dans `main.css` pour la liste complète.

## 📦 Composants inclus

- ✅ **Alertes** : alert-danger, alert-success
- ✅ **Badges** : default, badge-success, badge-danger
- ✅ **Boutons** : default, secondary, soft, block
- ✅ **Card** : .card, .card-title, .card-description
- ✅ **Formulaires** : Inputs, select, textarea, validation aria-invalid
- ✅ **Layouts** : Container, auto-grid, cluster, flow
- ✅ **Loader** : Animation de chargement
- ✅ **Navbar** : Responsive avec menu mobile accessible
- ✅ **Table** : Tableau stylisé

## 📁 Structure du projet

```
css/
├── main.css          # Styles principaux
└── normalize.css     # Normalisation cross-browser
js/
├── main.js           # Script principal (ES Module)
└── utils/
    └── dom.js        # Utilitaires DOM (selectElement)
```

## 🛠️ Personnalisation

### Changer la couleur primaire

1. Remplacez les variables `--primary-*` dans `:root` (palette OKLCH)
2. Les tokens sémantiques dans `@layer theme` s'adaptent automatiquement

### Typographie fluide

Basée sur [Utopia](https://utopia.fyi/type/calculator/?c=320,16,1.2,1280,18,1.25,5,2,&s=0.75) :

```css
--fs-sm: clamp(0.8333rem, 0.8111rem + 0.1111vw, 0.9rem);
--fs-base: clamp(1rem, 0.9583rem + 0.2083vw, 1.125rem);
--fs-md: clamp(1.2rem, 1.1313rem + 0.3438vw, 1.4063rem);
/* ... */
```

## 📚 Ressources

- [Utopia](https://utopia.fyi/) - Générateur d'échelles fluides
- [OKLCH Color Picker](https://oklch.com/) - Espace colorimétrique moderne
- [Shadcn UI](https://ui.shadcn.com/) - Inspiration pour les tokens

## 📄 Licence

MIT License
