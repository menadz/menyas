# Frise chronologique — carnet de bord

Petit site statique (HTML/CSS/JS pur, aucune dépendance à installer) avec :

- une **frise chronologique horizontale** (façon règle graduée) pour naviguer entre des dates clés
- un **carrousel de photos** pour chaque date
- une **carte OpenStreetMap** (via [Leaflet](https://leafletjs.com), gratuit, sans clé API) qui épingle un lieu lié à la date

## Fichiers

```
timeline-site/
├── index.html   → structure de la page
├── style.css    → design (thème "carnet d'expédition")
├── app.js       → logique (frise, carrousel, carte)
├── data.js      → VOS données : dates, textes, images, lieux
└── README.md
```

## Modifier le contenu

Tout se passe dans **`data.js`**. Chaque événement ressemble à ceci :

```js
{
  date: "1987-04-12",                 // AAAA-MM-JJ
  title: "Naissance",
  description: "Un court texte descriptif.",
  location: { name: "Alger, Algérie", lat: 36.7538, lng: 3.0588 },
  images: [
    "https://mon-site.com/photo1.jpg",
    "images/photo2.jpg"               // ou un fichier local, voir ci-dessous
  ]
}
```

Ajoutez, supprimez ou réordonnez librement les objets dans le tableau
`TIMELINE_EVENTS` — la frise se positionne automatiquement selon les dates
réelles (l'écart entre deux points reflète l'écart de temps réel).

Pour trouver des coordonnées GPS : clic droit sur un lieu dans
[openstreetmap.org](https://www.openstreetmap.org) → les coordonnées
s'affichent dans le menu contextuel.

### Utiliser vos propres photos

Actuellement le fichier `data.js` utilise des images de démonstration
(`picsum.photos`). Pour utiliser vos propres photos :

1. Créez un dossier `images/` à la racine du projet.
2. Placez-y vos fichiers (ex. `images/naissance-1.jpg`).
3. Dans `data.js`, remplacez les URLs par `"images/naissance-1.jpg"`.

## Héberger sur GitHub Pages

1. Créez un nouveau dépôt sur GitHub (ex. `ma-frise`), et poussez-y le
   contenu de ce dossier :

   ```bash
   cd timeline-site
   git init
   git add .
   git commit -m "Premier envoi de la frise chronologique"
   git branch -M main
   git remote add origin https://github.com/<votre-utilisateur>/ma-frise.git
   git push -u origin main
   ```

2. Sur GitHub, allez dans **Settings → Pages**.
3. Sous **Build and deployment**, choisissez **Deploy from a branch**,
   branche `main`, dossier `/ (root)`, puis **Save**.
4. Au bout de quelques minutes, le site sera disponible à l'adresse :
   `https://<votre-utilisateur>.github.io/ma-frise/`

Aucune étape de build n'est nécessaire : c'est un site 100 % statique.

## Personnaliser le style

Les couleurs, polices et espacements sont centralisés en haut de
`style.css` dans le bloc `:root { ... }` — modifiez ces variables pour
changer la palette globale sans toucher au reste du fichier.
