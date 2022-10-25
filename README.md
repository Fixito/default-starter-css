# CSS Default Starter / Styles Globaux

- Gagne du temps sur la configuration du projet
- Moins de lignes de CSS

## Normalize

Petit fichier CSS qui assure la cohérence entre les navigateurs dans le style par défaut des éléments HTML.

Manière alternative de faire cela :

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- Aller sur [Docs ](https://necolas.github.io/normalize.css/)
- Sélectionner la dernière version
- Créer normalize.css
- Configurer le lien dans le HTML

```html
<link rel="stylesheet" href="./normalize.css" />
```

## Main

Créer un fichier main.css

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

- Définir `margin-bottom: 1.5rem` et `max-width: 40em` pour les `p`
- Définir `margin: 0`, `margin-bottom: 1.38rem` et `text-transform: capitalize` pour les `h1,h2,h3,h4,h5`

## Les Couleurs

```css
:root {
  /* primaire */
  /* gris */
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;
}
```

#### Sélectionner La Couleur Primaire

Approche manuelle :

- [coolors](https://coolors.co/)
- [happyhues](https://www.happyhues.co/)
- Sélectionenr sa propre couleur
- récupérer les nuances sur [shadowlord](https://noeldelgado.github.io/shadowlord/#73fdad)

Approche plus rapide avec les librairies :

- [bootstrap](https://getbootstrap.com/docs/5.0/customize/color/#color-sass-maps)
- [tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)

#### Sélectionenr Les Gris

- [tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)

#### Box Shadow

- [tailwind](https://tailwindcss.com/docs/box-shadow)
