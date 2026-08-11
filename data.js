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
    description: "",
    location: [{ name: "Ouled Fayet, Alger", lat: 36.7345, lng: 2.9453 },
			   { name: "Birkhadem, Alger", lat: 36.69980, lng: 3.04554 }
	],
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMEdRpAaU1tyfavoQZc-Qx5tMERzrMSDDEFDpY5ugRzpyH2Ml4iaLZLgPbjAL0d8ZdatgWFXS37k1eLsRgB4pYs5QMQZBHsw4jiV4HcBJG5T7byrO_oVpt_2LdRVoIAfBz1rlzK7Ju2IC3a-GtPw7zt=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/alger2/900/700",
      "https://picsum.photos/seed/alger3/900/700"
    ]
  },
 
{
    date: "2025-08-02",
    title: "Let's Go to Instagram",
    description: "",
   location: [{ name: "Ouled Fayet, Alger", lat: 36.7345, lng: 2.9453 },
			   { name: "Birkhadem, Alger", lat: 36.69980, lng: 3.04554 }
	],
    images: [
      "https://picsum.photos/seed/oran1/900/700",
      "https://picsum.photos/seed/oran2/900/700"
    ]
  },

{
    date: "2025-08-04",
    title: "les vacances à Bejaia",
    description: "",
   location: [{ name: " Alger", lat: 36.7345, lng: 2.9453 },
			   { name: " Bejaia", lat: 36.7538, lng: 5.0564 } , 
	],
    images: [
      "https://picsum.photos/seed/oran1/900/700",
      "https://picsum.photos/seed/oran2/900/700"
    ]
  },



{
    date: "2025-09-11",
    title: "1er Date",
    description: "Stress, Sfindja",
    location: { name: "El Biar, Alger", lat: 36.76873472753813, lng: 3.0404750825668807 }, 
    images: [
      "https://picsum.photos/seed/oran1/900/700",
      "https://picsum.photos/seed/oran2/900/700"
    ]
  },

 {
    date: "2025-09-23",
    title: "2eme Date",
    description: "Monte Bello.",
    location: { name: "Sidi Rached, Tipaza", lat: 36.566901410285986, lng: 2.561909280710982 },
    images: [
      "https://picsum.photos/seed/oran1/900/700",
      "https://picsum.photos/seed/oran2/900/700"
    ]
  },
  {
    date: "2025-10-01",
    title: "Musée National des beaux arts : 1er date un Mercredi, le début d'une tradition 'The WednUSday'",
    description: ".... mais l'oeuvre d'art est à coté de moi.",
    location: { name: "Belcourt, Alger", lat: 36.74633265250696, lng: 3.0723024073020127 },  
    images: [
      "https://picsum.photos/seed/constantine1/900/700",
      "https://picsum.photos/seed/constantine2/900/700"
      
    ]
  },
  {
    date: "2025-10-08",
    title: "CINEMA DATE",
    description: "test",
    location: { name: "Garden City, Alger", lat: 36.750756, lng: 2.95202 }, 
    images: [
      "https://picsum.photos/seed/paris1/900/700",
      "https://picsum.photos/seed/paris2/900/700"
    ]
  },
  {
    date: "2025-10-12",
    title: "Taste of India : le 1er date un Dimanche",
    description: "Un tournant important, riche de nouveaux projets.",
    location: { name: "Ben Aknoun, Alger", lat: 36.76002534466582, lng: 3.013961449472725 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  },


 
 {
    date: "2025-10-30",
    title: "Jardin d'essais",
    description: "Un tournant important, riche de nouveaux projets.",
    location: { name: "El Hamma, Alger", lat: 36.748464449140435, lng: 3.0763037089899274}, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  },


 {
    date: "2025-10-16",
    title: "Why not Jeudi aussi ? ",
    description: "Spicy.",
    location: { name: "Les Sources, Alger", lat: 36.73618773382194, lng: 3.053372369071417 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  },
{
    date: "2025-10-22",
    title: "Rebelote Jardin d'essai then Sidi Fredj : 2en1 Date ",
    description: "Un tournant important, riche de nouveaux projets.",
    location: [{ name: "El Hamma, Alger", lat: 36.748464449140435, lng: 3.0763037089899274 },
			   { name: "Port de Sidi Fredj, Alger", lat: 36.76510857416144, lng: 2.8480988402373586 }
	],
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  },

 {
    date: "2025-10-23",
    title: "Menad deviens WOKE ",
    description: "",
    location: { name: "Wahed el resto f Kouba nsit asmou, Alger", lat: 36.728920317864386, lng: 3.077646823714506 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  },
 
 {
    date: "2025-10-27",
    title: "1er petit dej ensemble ", 
    description: "In the car",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     ]
  },

 {
    date: "2025-10-29",
    title: "Zoo Date ...",
    description: "... meme si on a pas d'enfants and déjeuner à 16h",
    location: { name: "Ben Aknoun, Alger", lat: 36.73844323526958, lng: 3.019381797906782 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

  {
    date: "2025-10-29",
    title: "1er appel video sur whatsapp",
    description: "...",
    location: [{ name: "Ouled Fayet, Alger", lat: 36.7345, lng: 2.9453 },
			   { name: "Birkhadem, Alger", lat: 36.69980, lng: 3.04554 }
	],
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
 
 
 
 {
    date: "2025-11-02",
    title: "Lunch before school",
    description: "... ",
    location: { name: "Ben Aknoun, Alger", lat: 36.76010500779611, lng: 3.0006831574254957 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
 {
    date: "2025-11-03",
    title: "sbah w 3shiya : double date",
    description: "... ",
    location: { name: "Said Hamdine, Alger", lat: 36.7538, lng: 3.0588 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,


 {
    date: "2025-11-05",
    title: "Aerohabitat 10em étage",
    description: "Comme la vue depuis l'aerohabitat, chaque date avec toi est à couper le souffle",
    location: { name: "Telemly, Alger", lat: 36.76657409232144, lng: 3.044697069072758 },  
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

 {
    date: "2025-11-06",
    title: "Fight in the kitchen",
    description: " ",
    location: { name: "Les sources, Alger", lat: 36.722819665437235, lng: 3.0761160383883706 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,



 {
    date: "2025-11-12",
    title: "Breaking News : Yass in Ouled Fayet",
    description: "Au programme : Pizza,Mer calme ,Ciel bleu lovely moments and Yass driving the ACCENT ! ", 
    location: { name: "Sidi Fredj, Alger", lat: 36.76510857416144, lng: 2.8480988402373586 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,


{
    date: "2025-11-19",
    title: "Woke Again chez Thaliando",
    description: "Ptit dej in the car",
    location: { name: "Monument du martyr, Alger", lat: 36.743563839239144, lng: 3.0701064114011376}, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
{
    date: "2025-11-26",
    title: "Date 24",
    description: "Spicy and Tee",
    location: { name: "Draria, Alger", lat: 36.71949687158915, lng: 2.9936379690706763 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2025-11-27",
    title: "Date 25",
    description: "Makloub chez Plan B",
    location: { name: "Sidi Yahia, Alger", lat: 36.739486619588476, lng: 3.043353340236255 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2025-12-01",
    title: "Monday Breakfast : Date 26",
    description: "",
    location: { name: "Sidi Yahia, Alger", lat: 36.7538, lng: 3.0588 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
{
    date: "2025-12-03",
    title: "Mr Djamel Bellil : c'est un honneur de vous connaitre",
    description: "3ami Djamel day ou plutot Monsieur Bellil, then Direction el hamdania for chwa",
    location: [{ name: "Les Vergers, Birkhadem", lat: 36.71810387443986, lng: 3.0518853537294035 }, 
			   { name: "Chiffa, Blida", lat: 36.3714692699027, lng: 2.771704340220241 } 
	],
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2025-12-04",
    title: "Mondo della pizza",
    description: "pour à la fin prendre un Panuozzo",
    location: { name: "Kouba, Alger", lat: 36.725010360847456, lng: 3.0992066979061783 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2025-12-10",
    title: "Happy Birthday habibti",
    description: "",
    location: { name: "Fontaine d'or, Tipaza", lat: 36.591788243888146, lng: 2.4714410801477964 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2025-12-11",
    title: "Let's go see the ducks",
    description: "",
    location: { name: "Jardin d'essais, Alger", lat: 36.748464449140435, lng: 3.0763037089899274},
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2025-12-15",
    title: "Ptit dej",
    description: "",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,


{
    date: "2025-12-17",
    title: "Yassmine's favourite place",
    description: "",
    location: { name: "Marina Mall, Alger", lat: 36.74000714167303, lng: 3.143309797906855 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2025-12-18",
    title: "début des Vakonces d'hiver",
    description: "",
    location: { name: "Birkhadem, Alger", lat: 36.7538, lng: 3.0588 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2025-12-23",
    title: "Let's go to Blida",
    description: "",
    location: { name: "Bab Errahba, Blida", lat: 36.488397644852775, lng: 2.8484407883882636 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2025-12-27",
    title: "Choufa Day",
    description: "",
    location: { name: "Résidence la Belle Colline, Djnen Sfari", lat: 36.69979090237409, lng: 3.045510167222708 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2025-12-31",
    title: "",
    description: "",
    location: { name: "Ferme Montebello,Sidi Rached, Tipaza", lat: 36.56684109132703, lng: 2.562027297899312}, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
{
    date: "2026-01-07",
    title: "Back To Yasmine's favourite place",
    description: "",
    location: { name: "Marina Mall,Alger", lat: 36.74000714167303, lng: 3.143309797906855 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-01-11",
    title: "Ptit déj",
    description: "",
    location: { name: "la buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,


{
    date: "2026-01-12",
    title: "Date 39",
    description: "",
    location: { name: "la buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,


{
    date: "2026-01-14",
    title: "Are you kidding me ? XD",
    description: "",
    location: { name: "Marina Mall, Alger", lat: 36.74000714167303, lng: 3.143309797906855 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-01-18",
    title: "Petit Dej",
    description: "",
    location: { name: "la buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
{
    date: "2026-01-21",
    title: "Oh come on !",
    description: "",
    location: { name: "Marina Mall, Alger", lat: 36.74000714167303, lng: 3.143309797906855 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,


{
    date: "2026-01-22",
    title: "Borgir (horrible) chez Pepper",
    description: "",
    location: { name: "Sidji Yaya, Alger", lat: 36.738805421343535, lng: 3.033386565377242 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-01-24",
    title: "Let's go drop some Curriculums",
    description: "",
    location: { name: "Safex, Alger", lat: 36.73452742891914, lng: 3.1524335114007096 },  
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
{
    date: "2026-01-26",
    title: "Ptit dej bel qaada",
    description: "",
    location: { name: "la buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
{
    date: "2026-02-01",
    title: "Déjeuner 3and la Buvette",
    description: "",
    location: { name: "la buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-02-04",
    title: "Naan Time",
    description: "",
    location: { name: "Cheraga, Alger", lat: 36.76714005186158, lng: 2.959915926988183 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-02-05",
    title: "Uncle Buns",
    description: "",
    location: { name: "Les sources, Alger", lat: 36.73428493808473, lng: 3.06134593838889 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-02-09",
    title: "Date 50",
    description: "",
    location: { name: "Said Hamdine, Alger", lat: 36.7538, lng: 3.0588 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-02-11",
    title: "Jardin d'essais",
    description: "Durant cet épisode Yasmine installe Snapchat sur le téléphone de Menad",
    location: { name: "Jardin d'essais, Alger", lat: 36.748464449140435, lng: 3.0763037089899274 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-02-18",
    title: "Last date before Ramadan",
    description: "",
    location: { name: "Sidi Fredj, Alger", lat: 36.76510857416144, lng: 2.8480988402373586 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
{
    date: "2026-02-21",
    title: "First Date of ramadan #DigitalMarketing #Code2012 #SahhawYaSahha",
    description: "also Menad flexin with his new jacket",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-02-28",
    title: "2nd Date of ramadan #DigitalMarketing #Code2012 #qalbifilmadina",
    description: "",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-03-05",
    title: "3rd Date of ramadan ",
    description: "",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-03-07",
    title: "4th Date of ramadan ",
    description: "",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-03-11",
    title: "5th Date of ramadan ",
    description: "",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-03-15",
    title: "6th Date of ramadan ",
    description: "",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,


{
    date: "2026-03-22",
    title: "Mhiba Day",
    description: "",
    location: { name: "Résidence La Belle Colline, Alger", lat: 36.69979090237409, lng: 3.045510167222708 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-03-25",
    title: "Date 60 : Let's go to our favourite place",
    description: "",
    location: { name: "Ruines Romaines, Tipaza", lat: 36.594083579319715, lng: 2.443332118260243 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-03-28",
    title: "Let's go buy a ring",
    description: "",
    location: [
	{ name: "Bab El Oued", lat: 36.7911560348191, lng: 3.0518413392481047 },
	{ name: "Mohammadia", lat: 36.72891969321381, lng: 3.148018226290668 }, 
	{ name: "Draria", lat: 36.71757477433482, lng: 2.996555869932153 } 
	],
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-04-01",
    title: "Ce n'est pas un poisson d'avril : it's date number 62",
    description: "Hayya naddarbo chwa",
    location: { name: "Chiffa, Blida", lat: 36.3714692699027, lng: 2.771704340220241 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
{
    date: "2026-04-06",
    title: "Date 63",
    description: "Petit dej avec des madelaines",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,


{
    date: "2026-04-08",
    title: "1st Gelato of the season",
    description: "",
    location: { name: "Sidi Yaya, Alger", lat: 36.742134833403405, lng: 3.0296833564404753 },  
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-04-09",
    title: "Date 65",
    description: "Dans ce nouvel épisode, Yasmine aide à changer le filtre de la clim",
    location: { name: "Les sources, Alger", lat: 36.73428493808473, lng: 3.06134593838889 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-04-13",
    title: "Petit dej avec du chocolé",
    description: "",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,


{
    date: "2026-04-15",
    title: "2eme Cinoche à Cosmos",
    description: "Sorry Ryan Gosling it was not a great movie, at least it was a Lovely Moment with my habibti",
    location: { name: "Cosmos, Alger", lat: 36.74336261774533, lng: 3.070489933156982}, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-04-20",
    title: "Petit dej avec du café seulement",
    description: "on sent que la saison tire sur la fin",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672},
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-04-22",
    title: "NOTRE DAME FINALLY",
    description: "... and then dejeuner fl'endroit préféré de Yasmine ",
    location: [{ name: "Notre Dame, Alger", lat: 36.80116569733494, lng: 3.0426257699350656 },  
				{ name: "Marina Mall, Alger", lat: 36.74000714167303, lng: 3.143309797906855 }]  , 
	images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-04-26",
    title: "Date Numero 70",
    description: "Fritet omlitet à la Buvette",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-04-29",
    title: "Chewai Staifi then Oued Smar",
    description: "Fritet omlitet à la Buvette",
     location: [{ name: "l'jomhoriya, Alger", lat: 36.67497984617233, lng: 3.1935108545874344 },
	{ name: "Oued Smar, Alger", lat: 36.698783612656534, lng: 3.1567433732618064 }] ,
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-05-13",
    title: "Comme un air de vacances",
    description: "",
     location: 
	{ name: "Hadiqat El Raboua, Tipaza", lat: 36.59226335499861, lng: 2.4667259834204507 },  
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
{
    date: "2026-05-20",
    title: "Looking for a chambre à coucher",
    description: "",
     location: { name: "Draria, Alger", lat: 36.7106968916634, lng: 2.997867988048374 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-05-30",
    title: "Tour des salles",
    description: "....(save the date : 17/12/2026)",
     location: { name: "Dely Brahim, Alger", lat: 36.754930619932885, lng: 2.9785521313066137 }, 
    images: [
      "https://picsum.photos/seed/nouveau1/900/700",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,



{
    date: "2026-06-02",
    title: "Rajlek houwa 3douwek",
    description: "Yasmine a pris cette phrase très au serieux",
     location: { name: "El Hamma, Alger", lat: 36.748464449140435, lng: 3.0763037089899274 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-06-03",
    title: "Michael Jackson a pilé pilé pilé",
    description: "",
     location: { name: "Marina Mall, Alger", lat: 36.74000714167303, lng: 3.143309797906855},
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-06-13",
    title: "Le grand jour épisode 02 : she's finally got a ring",
    description: "",
     location: { name: "Résidence La Belle Colline, Alger", lat: 36.69979090237409, lng: 3.045510167222708 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-06-27",
    title: "First date as  fiancés",
    description: "",
     location: [{ name: "Numidia Park, Tipaza", lat: 36.53374524487224, lng: 2.401188941090127 }, 
				{ name: "La Couronne, Tipaza", lat: 36.58972890476771, lng: 2.4349207085546434 },
				{ name: "Staouali, Alger", lat: 36.75520857099187,  lng: 2.8868537815752546 }],
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-07-11",
    title: "Let's celebrate in a fancy restaurant",
    description: "et comme de tradition on se fait dégager avant 15h xD",
     location: { name: "Dar el Beida, Alger", lat: 36.71848587347081, lng: 3.209058896917279 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-07-16",
    title: "Date numéro 80",
    description: "",
     location: { name: "Ain Naadja, Alger", lat: 36.7056578218444, lng: 3.0820411834243067 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,



{
    date: "2026-07-22",
    title: "The ring is back baby",
    description: "Unusual Date at 18h et découverte de Bravo Ice Cream",
     location: { name: "Birkhadem, Alger", lat: 36.719273471767615, lng: 3.0504094410964337 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-07-24",
    title: "1er (double) date un vendredi #Code213",
    description: "et retour du petit dej dans la voiture #MondayTradition",
     location: { name: "La Buvette then Val d'hydra, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,
{
    date: "2026-07-25",
    title: "Toutes les ocasions sont bonnes pour se retrouver #Code213",
    description: "et déjeuner tardif featuring Yass Borgir + Gelato",
     location: { name: "Val d'hydra, Alger", lat: 36.761688624420046,  lng: 3.0248953712472186 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-07-31",
    title: "Ofet celle du 24-07 ce n'était pas la derniere séance de formation",
    description: "une autre occasion pour se revoir ... 2 fois :D",
     location: { name: "Val d'hydra, Alger", lat: 36.761688624420046,  lng: 3.0248953712472186 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,

{
    date: "2026-08-02",
    title: "34+1 : The Anniversary Menad Edition",
    description: "Une année passée ensemble et quelle année, I Love You So Much <3",
     location: { name: "Hadiqat El Raboua, Tipaza", lat: 36.59226335499861, lng: 2.4667259834204507  },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://picsum.photos/seed/nouveau2/900/700"
     
    ]
  } ,


];
