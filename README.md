# 🎨 CSS Starter par Défaut

> Un système de design moderne inspiré de Shadcn avec CSS Layers, tokens sémantiques et mode sombre automatique. Aucun outil de build requis.

## ✨ Caractéristiques

- 🚀 **Performance** : Variables CSS optimisées, aucune dépendance
- ♿ **Accessibilité** : HTML sémantique, ARIA, focus visible, skip-link, `prefers-reduced-motion`
- 📱 **Responsive** : Typographie fluide avec `clamp()` et breakpoints logiques
- 🌙 **Mode sombre** : `light-dark()` natif — chaque token déclaré une seule fois, zéro flash
- 🎯 **Moderne** : OKLCH, propriétés logiques CSS, CSS Layers, `@view-transition`
- 🎨 **Tokens** : Architecture de variables sémantiques à deux niveaux (globaux + composants)

## 🏗️ Architecture CSS Layers

```css
@layer normalize, reset, theme, base, compositions, components, utilities;
```

| Layer          | Description                                             |
| -------------- | ------------------------------------------------------- |
| `normalize`    | Normalisation cross-browser                             |
| `reset`        | Reset minimal (box-sizing, margins)                     |
| `theme`        | Tokens sémantiques — `light-dark()` gère le mode sombre |
| `base`         | Styles de base (body, headings, links, img, motion)     |
| `compositions` | Layouts (auto-grid, cluster, page)                      |
| `components`   | Navbar, boutons, formulaires, alertes, badges, table    |
| `utilities`    | Container, flow, sr-only, skip-link, max-w-\*, hidden   |

## 🎨 Tokens sémantiques

Variables CSS sémantiques pour couleurs, composants et UI. Chaque token est déclaré **une seule fois** avec `light-dark(valeurClaire, valeurSombre)` dans `@layer theme`. Le thème est piloté par `color-scheme` via `data-theme` sur `<html>`.

```css
/* Exemple d'ajout d'un token thématique */
--my-token: light-dark(var(--color-neutral-100), var(--color-neutral-800));
```

Deux niveaux de tokens coexistent :

1. **Tokens globaux** — `--primary`, `--foreground`, `--background`, `--border`, `--muted`…
2. **Tokens composants** — `--button-primary`, `--navbar-accent`, `--badge-success`…

## 📦 Composants inclus

- ✅ **Alertes** : `alert-danger`, `alert-success`
- ✅ **Badges** : default, `badge-success`, `badge-danger`
- ✅ **Boutons** : default, `secondary`, `soft`, `block`
- ✅ **Card** : `.card`, `.card-title`, `.card-description`
- ✅ **Formulaires** : Inputs, select, textarea, validation `aria-invalid`
- ✅ **Layouts** : Container, auto-grid, cluster, flow
- ✅ **Loader** : Animation de chargement
- ✅ **Navbar** : Responsive avec menu mobile accessible (focus trap via `inert`)
- ✅ **Table** : Tableau stylisé responsive

## 📁 Structure du projet

```
css/
├── main.css          # Styles principaux (layers, tokens, composants)
└── normalize.css     # Normalisation cross-browser
js/
├── main.js           # Menu mobile + focus trap + dark mode + année courante
└── utils/
    └── dom.js        # Utilitaire DOM (selectElement)
index.html            # Page de démonstration complète
cards.html            # Exemples de cartes
tables.html           # Exemples de tableaux
```

## 🛠️ Personnalisation

### Changer la couleur primaire

1. Modifiez les variables `--color-primary-*` dans `:root` (espace colorimétrique OKLCH)
2. Les tokens sémantiques dans `@layer theme` s'adaptent automatiquement

### Ajouter un token thématique

Dans `@layer theme :root {}`, déclarez le token avec `light-dark()` — une seule ligne suffit pour les deux thèmes :

```css
--my-token: light-dark(var(--color-neutral-100), var(--color-neutral-800));
```

### Typographie fluide

Basée sur [Utopia](https://utopia.fyi/type/calculator/?c=320,16,1.2,1280,18,1.25,5,2,&s=0.75) :

```css
--fs-sm: clamp(0.8333rem, 0.8111rem + 0.1111vw, 0.9rem);
--fs-base: clamp(1rem, 0.9583rem + 0.2083vw, 1.125rem);
--fs-md: clamp(1.2rem, 1.1313rem + 0.3438vw, 1.4063rem);
/* ... jusqu'à --fs-xxxl */
```

### Créer une nouvelle page

Copiez la structure de `index.html` — elle contient déjà le skip-link, le script anti-flash, la navbar responsive et le footer.

## ♿ Accessibilité

- **Skip-link** : lien "Aller au contenu principal" visible au focus clavier (premier `Tab`)
- **Focus trap** : menu mobile utilise `inert` sur `<main>` et `<footer>` pour piéger le focus
- **Mouvement réduit** : `@media (prefers-reduced-motion: reduce)` désactive toutes les transitions/animations globalement
- **ARIA** : `aria-expanded`, `aria-current`, `aria-label`, `aria-invalid`, `aria-errormessage` utilisés systématiquement

## 📚 Ressources

- [Utopia](https://utopia.fyi/) - Générateur d'échelles fluides
- [OKLCH Color Picker](https://oklch.com/) - Espace colorimétrique moderne
- [Shadcn UI](https://ui.shadcn.com/) - Inspiration pour les tokens

## 📄 Licence

MIT License
