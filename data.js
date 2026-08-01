/**
 * DONNÉES DE LA FRISE CHRONOLOGIQUE
 * -----------------------------------
 * Pour ajouter, modifier ou supprimer une date clé, éditez le tableau ci-dessous.
 *
 * Champs de chaque événement :
 *   date        : "AAAA-MM-JJ" (obligatoire, sert à trier et positionner sur la frise)
 *   title       : titre court de l'événement
 *   description : texte descriptif (1-3 phrases)
 *   location    : { name, lat, lng } — nom affiché + coordonnées GPS pour la carte
 *   images      : liste d'URLs d'images (mettez vos propres photos, ex: "images/photo1.jpg")
 *
 * Astuce : pour trouver des coordonnées GPS, faites un clic droit sur un lieu
 * dans https://www.openstreetmap.org et copiez la latitude/longitude affichée.
 */

const TIMELINE_EVENTS = [
  {
    date: "2025-07-31",
    title: "The Match",
    description: "Le point de départ de l'histoire.",
    location: [{ name: "Ouled Fayet, Alger", lat: 36.7345, lng: 2.9453 },
			   { name: "Birkhadem, Alger", lat: 36.69980, lng: 3.04554 }
	],
    images: [
      "https://picsum.photos/seed/alger1/900/700",
      "https://picsum.photos/seed/alger2/900/700",
      "https://picsum.photos/seed/alger3/900/700"
    ]
  },
 
{
    date: "2025-08-02",
    title: "Let's Go to Instagram",
    description: "Début des études supérieures et premiers pas vers l'indépendance.",
    location: { name: "Oran, Algérie", lat: 35.6969, lng: -0.6331 },
    images: [
      "https://picsum.photos/seed/oran1/900/700",
      "https://picsum.photos/seed/oran2/900/700"
    ]
  },

{
    date: "2025-08-05",
    title: "The Trip (and The Wait)",
    description: "Début des études supérieures et premiers pas vers l'indépendance.",
    location: { name: "Oran, Algérie", lat: 35.6969, lng: -0.6331 },
    images: [
      "https://picsum.photos/seed/oran1/900/700",
      "https://picsum.photos/seed/oran2/900/700"
    ]
  },

 {
    date: "2025-09-11",
    title: "1er Date",
    description: "Début des études supérieures et premiers pas vers l'indépendance.",
    location: { name: "Oran, Algérie", lat: 35.6969, lng: -0.6331 },
    images: [
      "https://picsum.photos/seed/oran1/900/700",
      "https://picsum.photos/seed/oran2/900/700"
    ]
  },
  {
    date: "2025-10-20",
    title: "Premier emploi",
    description: "Premier poste professionnel et déménagement dans une nouvelle ville.",
    location: { name: "Constantine, Algérie", lat: 36.3650, lng: 6.6147 },
    images: [
      "https://picsum.photos/seed/constantine1/900/700",
      "https://picsum.photos/seed/constantine2/900/700",
      "https://picsum.photos/seed/constantine3/900/700",
      "https://picsum.photos/seed/constantine4/900/700"
    ]
  },
  {
    date: "2025-11-15",
    title: "Voyage marquant",
    description: "Un voyage qui a changé la façon de voir les choses.",
    location: { name: "Paris, France", lat: 48.8566, lng: 2.3522 },
    images: [
      "https://picsum.photos/seed/paris1/900/700",
      "https://picsum.photos/seed/paris2/900/700"
    ]
  },
  {
    date: "2025-12-02",
    title: "Nouveau chapitre",
    description: "Un tournant important, riche de nouveaux projets.",
    location: { name: "Alger, Algérie", lat: 36.7538, lng: 3.0588 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700",
      "https://picsum.photos/seed/nouveau3/900/700"
    ]
  }
];
