# 🎨 CSS Starter par Défaut

> Un système de design moderne inspiré de Tailwind Plus et Shadcn avec CSS Layers, tokens sémantiques et mode sombre automatique. Aucun outil de build requis.

## ✨ Caractéristiques

- 🚀 **Performance** : Variables CSS optimisées, aucune dépendance
- ♿ **Accessibilité** : HTML sémantique, ARIA, focus visible, skip-link, `prefers-reduced-motion`
- 📱 **Responsive** : Typographie fluide avec `clamp()` et breakpoints logiques
- 🌙 **Mode sombre** : `light-dark()` natif — chaque token déclaré une seule fois, zéro flash
- 🎯 **Moderne** : OKLCH, propriétés logiques CSS, CSS Layers, `@view-transition`
- 🎨 **Tokens** : Architecture de variables sémantiques à deux niveaux (globaux + composants)

## 🏗️ Architecture CSS Layers

```css
@layer normalize, reset, tokens, theme, base, layout, components, utilities;
```

| Layer        | Description                                              |
| ------------ | -------------------------------------------------------- |
| `normalize`  | Normalisation cross-browser                              |
| `reset`      | Reset minimal (box-sizing, margins)                      |
| `tokens`     | Valeurs brutes — palette OKLCH, espacements, typographie |
| `theme`      | Tokens sémantiques — `light-dark()` gère le mode sombre  |
| `base`       | Styles de base (body, headings, links, img, motion)      |
| `layout`     | Layouts (container, auto-grid, cluster, page)            |
| `components` | Navbar, boutons, formulaires, alertes, badges, table     |
| `utilities`  | flow, sr-only, skip-link, max-w-\*, mx-auto, text-center |

## 🎨 Tokens sémantiques

Variables CSS sémantiques pour couleurs, composants et UI. Chaque token est déclaré **une seule fois** avec `light-dark(valeurClaire, valeurSombre)` dans `@layer theme`. Le thème est piloté par `color-scheme` via `data-theme` sur `<html>`.

```css
/* Exemple d'ajout d'un token thématique */
--my-token: light-dark(var(--color-neutral-100), var(--color-neutral-800));
```

Deux niveaux de tokens coexistent :

1. **Tokens globaux** — `--primary`, `--foreground`, `--background`, `--border`, `--muted`…
2. **Tokens composants** — `--button-secondary`, `--navbar-brand`, `--badge-success`…

## 📦 Composants inclus

- ✅ **Alerts** : `alert-danger`, `alert-warning`, `alert-success`
- ✅ **Badges** : default, `badge-success`, `badge-warning`, `badge-danger`
- ✅ **Boutons** : default, `secondary`, `destructive`, `soft`
- ✅ **Card** : `.card`, `.card-title`, `.card-description`
- ✅ **Formulaires** : input, select, textarea, `input-group`, validation `aria-invalid`
- ✅ **Layouts** : Container, auto-grid, cluster, flow
- ✅ **Loader** : Animation de chargement
- ✅ **Navbar** : Responsive avec menu mobile accessible (`aria-expanded`, `inert`, fermeture `Escape` + clic extérieur)
- ✅ **Table** : Tableau stylisé responsive

## 📁 Structure du projet

```
css/
├── main.css          # Styles principaux (layers, composants)
├── tokens.css        # Valeurs brutes (palette, espacements, typographie)
├── theme.css         # Tokens sémantiques (light-dark)
└── normalize.css     # Normalisation cross-browser
js/
├── main.js           # Menu mobile (inert + Escape + clic extérieur), dark mode, année courante
└── utils/
    └── dom.js        # Utilitaire DOM (selectElement)
index.html            # Page de démonstration complète
cards.html            # Exemples de cartes
tables.html           # Exemples de tableaux
```

## 🛠️ Personnalisation

### Changer la couleur primaire

1. Modifiez les variables `--color-primary-*` dans `tokens.css` (espace colorimétrique OKLCH)
2. Les tokens sémantiques dans `@layer theme` s'adaptent automatiquement

### Ajouter un token thématique

Dans `@layer theme :root {}`, déclarez le token avec `light-dark()` — une seule ligne suffit pour les deux thèmes :

```css
--my-token: light-dark(var(--color-neutral-100), var(--color-neutral-800));
```

### Typographie fluide

Basée sur [Utopia](https://utopia.fyi/type/calculator/?c=320,16,1.2,1280,18,1.25,5,2,&s=0.75) :

```css
--fs-xs: round(nearest, clamp(0.6944rem, 0.6859rem + 0.0426vw, 0.72rem), 0.125rem);
--fs-sm: round(nearest, clamp(0.8333rem, 0.8111rem + 0.1111vw, 0.9rem), 0.125rem);
--fs-base: round(nearest, clamp(1rem, 0.9583rem + 0.2083vw, 1.125rem), 0.125rem);
--fs-md: round(nearest, clamp(1.2rem, 1.1313rem + 0.3438vw, 1.4063rem), 0.125rem);
/* ... jusqu'à --fs-xxxl avec round(nearest, ..., 0.125rem) */
```

### Créer une nouvelle page

Copiez la structure de `index.html` — elle contient déjà le skip-link, le script anti-flash, la navbar responsive et le footer.

## ♿ Accessibilité

- **Skip-link** : lien "Aller au contenu principal" visible au focus clavier (premier `Tab`)
- **Navigation mobile accessible** : menu mobile piloté par `aria-expanded`, fermeture sur `Escape` et clic extérieur, et `inert` sur `<main>`/`<footer>` quand le menu est ouvert
- **Mouvement réduit** : `@media (prefers-reduced-motion: reduce)` désactive toutes les transitions/animations globalement
- **ARIA** : `aria-expanded`, `aria-current`, `aria-label`, `aria-invalid`, `aria-errormessage` utilisés systématiquement

## 📚 Ressources

- [Preflight](https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/preflight.css) - Normalisation utilisée par Tailwind
- [Utopia](https://utopia.fyi/) - Générateur d'échelles fluides
- [Tailwind CSS](https://tailwindcss.com/docs/theme#default-theme-variable-reference) - Référence des tokens de thème
- [Shadcn UI](https://ui.shadcn.com/) - Inspirations pour les tokens sémantiques
- [Tailwind Plus](https://tailwindcss.com/plus?ref=top) - Inspirations pour les composants

## 📄 Licence

MIT License
