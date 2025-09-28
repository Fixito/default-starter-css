# 🎨 CSS Starter par Défaut

> Un système de design moderne avec CSS Layers pour démarrer vos projets web rapidement.

## ✨ Caractéristiques

- 🚀 **Performance** : Variables CSS optimisées et mode sombre automatique
- ♿ **Accessibilité** : HTML sémantique et focus visible par défaut
- 📱 **Responsive** : Typographie fluide avec `clamp()` et breakpoints logiques
- 🌙 **Mode sombre** : Détection automatique avec `prefers-color-scheme`
- 🎯 **Moderne** : Utilise OKLCH, propriétés logiques CSS, et CSS Layers
- 🧩 **Modulaire** : Architecture en couches avec priorité contrôlée
- 🎛️ **Maintenable** : CSS Layers pour une hiérarchie claire

## 🚀 Démarrage rapide

1. **Téléchargez** les fichiers CSS
2. **Incluez** dans votre HTML :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <link rel="stylesheet" href="./main.css" />
  </head>
</html>
```

3. **Utilisez** le HTML sémantique :

```html
<!-- Boutons -->
<button>Bouton par défaut</button>
<button data-variant="soft">Bouton doux</button>
<button data-variant="block">Bouton pleine largeur</button>

<!-- Sections -->
<section>
  <header>
    <h2>Titre avec soulignement automatique</h2>
  </header>
</section>

<!-- Formulaires -->
<form>
  <label for="email">Email</label>
  <input type="email" id="email" />
</form>
```

## 🏗️ Architecture CSS Layers

### Hiérarchie des couches (priorité croissante)

```css
@layer normalize, reset, base, theme, buttons, section, compositions, utilities, alerts, form;
```

1. **`normalize`** - Normalisation cross-browser
2. **`reset`** - Reset minimal (box-sizing, margins)
3. **`base`** - Styles de base (body, headings, links)
4. **`theme`** - Variables sémantiques et thèmes
5. **`buttons`** - Styles des boutons
6. **`section`** - Styles des sections
7. **`compositions`** - Layouts (auto-grid, cluster)
8. **`utilities`** - Classes utilitaires
9. **`alerts`** - Composants d'alerte
10. **`form`** - Styles de formulaires

### Variables sémantiques dans le layer `theme`

```css
@layer theme {
  :root {
    /* Semantic variables - Light theme */
    --color-bg: var(--primary-50);
    --color-text: var(--primary-950);
    --color-link: var(--primary-600);

    /* Component semantic variables */
    --color-btn-bg: var(--primary-600);
    --color-alert-danger-bg: var(--red-50);
  }

  /* Dark theme overrides */
  @media (prefers-color-scheme: dark) {
    :root {
      --color-bg: var(--neutral-900);
      --color-text: var(--white);
    }
  }
}
```

### Typographie fluide

Basée sur [Fluid Type Scale](https://www.fluid-type-scale.com/) pour une mise à l'échelle parfaite :

```css
/* Échelle fluide responsive : 320px → 1280px */
--fs-sm: clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem);
--fs-base: clamp(1rem, 0.34vi + 0.91rem, 1.19rem);
--fs-md: clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem);
--fs-lg: clamp(1.56rem, 1vi + 1.31rem, 2.11rem);
--fs-xl: clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem);
--fs-xxl: clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem);
--fs-xxxl: clamp(3.05rem, 3.54vi + 2.17rem, 5rem);
```

## 🎨 Palette de couleurs

- **Primary** : Système complet 50→950 en OKLCH
- **Neutral** : Gris harmonieux pour les textes et arrière-plans
- **Success/Error** : Couleurs sémantiques pour les états

## 🌙 Mode sombre

Thème sombre organisé dans le layer `theme` avec basculement automatique :

```css
@layer theme {
  /* Light theme par défaut */
  :root {
    /* variables claires */
  }

  /* Dark theme override */
  @media (prefers-color-scheme: dark) {
    :root {
      --color-bg: var(--neutral-900);
      --color-text: var(--white);
      --color-link: var(--primary-400);
      /* + toutes les surcharges composants */
    }
  }
}
```

## 📦 Composants inclus

- ✅ **Boutons** : Variants via `data-variant`
- ✅ **Formulaires** : Labels, Inputs et textarea stylés
- ✅ **Alertes** : Succès et erreur
- ✅ **Sections** : En-tête de section
- ✅ **Utilitaires** : Container, flow, sr-only
- ✅ **Compositions** : Auto-grid et cluster

## 🛠️ Personnalisation

### Changer la couleur primaire

1. Générez votre palette sur [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)
2. Remplacez les variables `--primary-*` dans `:root` (design tokens)
3. Les variables sémantiques dans `@layer theme` s'adaptent automatiquement

### Ajuster la typographie

1. Utilisez [Fluid Type Scale Calculator](https://www.fluid-type-scale.com/)
2. Remplacez les variables `--fs-*` dans `:root`

### Ajouter un thème personnalisé

```css
@layer theme {
  [data-theme='custom'] {
    --color-bg: #your-color;
    --color-text: #your-text;
    /* Surcharge des variables sémantiques */
  }
}
```

## 📚 Ressources

### Typographie fluide

- [Fluid Type Scale](https://www.fluid-type-scale.com/) - Générateur d'échelles fluides

### Couleurs

- [Coolors](https://coolors.co/) - Générateur de palettes
- [Happy Hues](https://www.happyhues.co/) - Palettes avec exemples
- [OKLCH Color Picker](https://oklch.com/) - Espace colorimétrique moderne

### Inspiration

- [Fonts In Use](https://fontsinuse.com/) - Typographie en situation
- [Modern Font Stacks](https://modernfontstacks.com/) - Polices système

## 🏆 Bonnes pratiques

- **HTML sémantique** : Privilégiez `<section>`, `<button>`, `<small>`
- **Data attributes** : Utilisez `data-variant` au lieu de classes
- **CSS Layers** : Architecture en couches pour une priorité prévisible
- **Variables CSS** : Design tokens séparés des variables sémantiques
- **Responsive-first** : Mobile d'abord avec `clamp()`
- **Accessibilité** : Focus visible et contrastes respectés
- **Thèmes** : Centralisés dans le layer `theme` pour faciliter la maintenance

## 🔧 Avantages des CSS Layers

- ✅ **Priorité prévisible** : Plus de conflit de spécificité
- ✅ **Architecture claire** : Séparation logique des responsabilités
- ✅ **Maintenance facile** : Modifications ciblées par couche
- ✅ **Évolutivité** : Ajout de nouveaux thèmes simplifié
- ✅ **Performance** : Contrôle fin du cascade CSS

## 📄 Licence

MIT License - Utilisez librement dans vos projets !
