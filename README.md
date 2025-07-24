# Styles CSS par défaut

- Gagne du temps sur la configuration du projet
- Moins de lignes de CSS

## Normalize

Petit fichier CSS qui assure la cohérence entre les navigateurs dans le style par défaut des éléments HTML.

Manière alternative de faire cela :

```css
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- Aller sur [Docs](https://necolas.github.io/normalize.css/)
- Télécharger la dernière version
- Créer un fichier `normalize.css` et coller le contenu
- Configurer le lien dans le HTML :

```html
<link rel="stylesheet" href="./normalize.css" />
```

## Main

Créer un fichier `main.css`

### Les Polices

#### Sélectionner Des Polices

- [fontpair](https://www.fontpair.co/)
- [pagecloud](https://www.pagecloud.com/blog/best-google-fonts-pairings)

#### Prendre le CSS

- [typescale](https://type-scale.com/)
- [fluid-typescale](https://www.fluid-type-scale.com/)

Faire quelques ajustements :

```css
*,
::after,
::before {
  box-sizing: border-box;
}
```

- Définir `margin-bottom: 1em` et `max-width: 65ch` pour les `p`
- Définir `margin: 0`, `margin-bottom: 1.38rem` pour les `h1,h2,h3,h4,h5`

## Les Couleurs

```css
:root {
  --black: oklch(14.077% 0.0044 285.776);
  --white: oklch(100% 0 0);
  --green-light: oklch(98.2% 0.018 155.826);
  --green-dark: oklch(44.8% 0.119 151.328);
  --red-light: oklch(97.1% 0.013 17.38);
  --red-dark: oklch(44.4% 0.177 26.899);
}
```

#### Sélectionner La Couleur Primaire

Approche manuelle :

- [coolors](https://coolors.co/)
- [happyhues](https://www.happyhues.co/)
- Sélectionner sa propre couleur
- Récupérer les nuances sur [shadowlord](https://noeldelgado.github.io/shadowlord/#73fdad)

Approche plus rapide avec les librairies :

- [Bootstrap](https://getbootstrap.com/docs/5.0/customize/color/#color-sass-maps)
- [Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)

#### Sélectionenr Les Gris

- [tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)

#### Box Shadow

- [tailwind](https://tailwindcss.com/docs/box-shadow)
