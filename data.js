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

const MUSIC_FILE = "audio/Oasis_Wonderwall.mp3";


const TIMELINE_EVENTS = [
  {
    date: "2025-07-31",
    title: "The Match",
    description: "How it all started",
    location: [{ name: "Ouled Fayet, Alger", lat: 36.7345, lng: 2.9453 },
			   { name: "Birkhadem, Alger", lat: 36.69980, lng: 3.04554 }
	],
    images: [
      
   "img/firefox_YscIZFlULV.png"
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
      "img/insta.jpg"
    ]
  },

{
    date: "2025-08-04",
    title: "les vacances à Bejaia",
    description: "Pendant que Yasmine prends du bon temps, Menad se pose des questions ",
   location: [{ name: " Alger", lat: 36.7345, lng: 2.9453 },
			   { name: " Bejaia", lat: 36.7538, lng: 5.0564 } , 
	],
    images: [
      
       "img/b1.jpg",
	   "img/b2.jpg",
       "img/b0.jpg",	  
	  "img/b3.jpg",
	   "img/b4.jpg",
	   "img/b5.jpg",
       "img/b6.png"
	]
  },



{
    date: "2025-09-11",
    title: "1er Date",
    description: "Au Menu : du stress, good food, stress, une belle vue, une invitation à quitter le resto avant 15h et au final une magnifique 1ere rencontre",
    location: [{ name: "Bazar Africain, Alger", lat: 36.71365307703204, lng: 3.0472575257114 } , 
	{ name: "El Biar, Alger", lat: 36.76873472753813, lng: 3.0404750825668807 }
	
	],
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczNXtdc68HBnZGqzVTiWQnRovTZYooNKTu3ZE041NIh9NV5ccD2mEHTOE876Ii4wyAVsLQzEgOvdof91T_hMNwNCfJCe3l8SmcKIbMKbA81X0zk_LSn1_aOQHS9_AYPQnwT0vmocoJNKFczO_FKkqhCO=w996-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPUMtr_syuIltU376xvfOHuWVaz2YueBbdd2ggQVsi2sQ72W6kI-y9waYoMe3LXgACgKDNsyumAr2yq2r1T6xhRALaJLQOuWM-SPx1R_hmF17k_rNd6gUaO-RT_clHpEQskVnVLecr2ObbZrEjkUCs_=w560-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOfiVAHgEM2QCcQP9yPG2oyt8RFyZ3IiFgCcnZvthm7AlVjy2mhZflD6bk7Xl__joNNDtEw82G39fZaXvosfHnhQgwh57M7WmvL2cLmm1MuZOzF-qw5RGgPxEZJpVjFEHvy2KhdYuWmhiDxN9O9HjKg=w996-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNj6k7uRWXdUjPIgyZ30EOGMjxYoHe59qb0HOpZZTW4IqLwDKjSmZMf2qI8DnySPS-064bQmuNLRj8dM3eP3QBhnUT2IMPO7s5wOzWfW7DfxP_mTr7zmLJUtYC2kNqsahlGLs1PTM9i-YkQ84tflCzm=w996-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczO8jOA64EnxuHGMDCPtEePQcz_N7G_1Id56akydRVdXCveg90h0h1EqEZCXT4dQMYA_oW8v20s5Bt9PNIBbDDheFhBstO7b-eeBKjcahtB5e4usjsZ6DK_6scU1rx1eJrJUHHSXks2Aj-hIN2LJfFwH=w560-h747-s-no?authuser=0"
    ]
  },

 {
    date: "2025-09-23",
    title: "2eme Date : it's getting serious",
    description: "On en fera des dates avec Yasmine (énormement mais on le sait pas encore) mais celui là c'est top 3 et il n'est pas 3eme, tout était parfait : aussi la 1ere fois qu'on se tiens la main <3 ",
    location: { name: "Sidi Rached, Tipaza", lat: 36.566901410285986, lng: 2.561909280710982 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOUmj_3vc31imISM0D1qHfcoolUnz_L6-PFuegFryM_y5AQZ9Wy838kSn31OX5B0OcLBnkTFNUPUFOadXSTofyg0B-8bSWU5nhQVYSMTZvXAL5S0R7hJkGiFem-9jLURN4cfhQQ3dUe9vBmxDV52NTG=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMXQIk7Wgm4rf3iQPvgrCiAV9HRz93m6iG8yIbPjSlFMpVR9mq-gNfYt90C2NB8h-0ZxjGoPKzT-2WqaPS8FTRDLXMaTOZrnZ3JDcfIaeYFLa5HvClPE36DGex1t1bp9VPSCwhFdCuc9GWIPdhIK7E=w1080-h720-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNDZ6hvJFVjQLAzgR9SayLGZFW6VzBB5T4xTZoQh4ulRL4EPuWyuznaM-xGo1lDvpuh0j19dGuN637bUsfn247qTSRgKu8rWXxNImfoVNPzMW_MKCaA9Snic0nImnWiiqw76nw3E7upO8b6Biy2guI=w498-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMFNm4C93rklCXW-moXyftj9OuV5-Ko9RK8H8ed7yMlRF08IBHlWdoXGD4zFNwty6B05KLzENAy9D92IxETTQmQNG6rP2bjmDf9I42T76P68iU3DnUe3FMcKz89ycl7iAYRuu5f7I3PfET_KqnSDcUN=w996-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPWpxgFYLKU6mZyhNIyqlv7_13RXrV6bcIi3a2RSLx-3NIGJBfgOwypXfk_8-r_SgqyBOQ3YaZRgNGlaEBX4JBgd8ba6aPvzDKow-EhF5_SWSd1cfnA9tnKvwhXUpAs95ZxTCSIz_a2syRAwV5EoSS4=w996-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMe_fCcFwKq4c5b0G4qNDZP-l3To7FgQR_4Ed3aKLiHoRdhrjCnrpt_sU4gYwZQYgc79uDxeae_OpI5gfuE2v128OBap9KcHTbqMF7qcD-m6SQihDjgABZlSen0AWjXIHz0tlTxWZOjXk1V1lJUiwTU=w560-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPTI_40KIqkHjDbyU0OE6irHlyaPzQV_E2aekfweDu0JZ7SClEjJqLQW661vDtUfOuDV_nSM68WNIG_cmUn5Z1kkD8jC2xqSvTh1IVDzdjb_2xcuRTuUqIEWU6ttLFWbaNgHEOGic89uV-EpwvwLXnb=w560-h747-s-no?authuser=0"
	  
    ]
  },
  {
    date: "2025-10-01",
    title: "Musée National des beaux arts : 1er date un Mercredi, le début d'une tradition 'The WednUSday'",
    description: ".... mais la plus belle oeuvre d'art est à coté de moi.",
    location: { name: "Belcourt, Alger", lat: 36.74633265250696, lng: 3.0723024073020127 },  
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPoKD4p-XT7Jl6F_Owf4vOyvEmdckCEnmlnF9GtN_ni5Vg-EGAvIkJpBdZITJ-OyaplQvvJWgVFkC_LwFvPlz-4i8FPz0bCcUwmz_-h2dljoXUz8XZEVwGB1-oRILNUK1uUno6nUPSJN7lZWrJz6yic=w562-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOwaDiKDcSqtAJdJXu5Yd0TTvHlzPf8MjANUND2hUpWnsw7LdIccX713dbja3a3NXVOlX8svPkQ8EJV27rDI8i4kNGip4p1XmHeGWT73KnOjfaqfIp_qJH6dpR67R6OWdkjUvqaIWIDlorT_Xis4UWV=w560-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOxzOtTWBvJRQ1TdraFfhtNMUyCwouPtRGMtSj5f8yg-aRury6-oSVW6w8sGG7psIZ__0LMNhXyI1VFwyKJrnMYL5R58UtUvq2Oob2RjHbki0ZtVie9PLQXIKNIMoij9kejdm6Bo-NOK4wPqxaRj6tP=w562-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOq3MoROLal25RHzePxtPFBbwlB-0Sr1yNy0pFtfHN5u4KlwS8zUykYJkNcKnlKmGTSWCbBe_igxJ2A8DS0xRrvrpY0qFq1nf2pH-jGuGmjRZNG3yyNMuifQXMwcOTPlJczu0JB4SWeXem6XqST_MNP=w562-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNr4NccCuTcl-yDL9eiaI0uaFkyr_hNBCdhbSRLD0s0WobILsXZngHziB_QSpVFF7nQSnWdz3KUkmrMDEpzUXFJdUF3wdiKesE1IRAKQ7z08zON-iyrMO-rLPmwKuE7l1WnT7PSPTgNctL2JOoNZuZj=w562-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPYGtOd3jIuQMnNzslaHRa4fi19N7yqNljWIv5Uk4y1fHc1wz6oVYV_Hl0x4mGG-y19Vc8UvAUDjLOPt0ld6SKmSirLvR3lCenv5Df0Pua-cL48YmFY833pLMqFP7qxUghf3XLwz5S3XgNRuuv90InM=w562-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNO2k-HvUv00m73vH3s4mPsBo0L7y67JersmvrcTVTRjCguvBOVHeRvpEBqqpBF-Iqo5mzIArrR2cyXv1EN3B51Yol8ef79LxWvPZA5_o7zMlaCQmLioSZYABTjMHr0HD5GZU8DMoNgW4OVwYykt9wv=w996-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPCu680v94HjWmB3PLwJ7KbEUrCUj9icHVJHbj-XumkPW4yNkX3l0qCteHtnKvi1YszxGaPONIpUZMWMcVRAzaZGjzSYXSggSczalMyIHyXfUwOG7uH46djYnajHMel61IS5lB_5JxZq8forxREROCu=w562-h747-s-no?authuser=0"
    ]
  },
  {
    date: "2025-10-08",
    title: "CINEMA DATE",
    description: "quand elle pose sa tete sur mon épaule, je plane",
    location: { name: "Garden City, Alger", lat: 36.750756, lng: 2.95202 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPwn6MRuH58XZ4SGFJbB5I4l1lv1cQ7iII1jOsHAAAN3emZl1Snn3ndw_9A-tfNPS7JrMRCHfT_wBYTuJx07bcdkshcosyt_tn7H9R-cJH3zd3JAGHEd8FhUxAfJudKSxR6zjoZscM2wYp1d9mg6GdI=w996-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPuWvC4P1lVzcPo4FFykuJdHfB-ZAtw6JRVjyA7oZEvvWa-sOjxBL1kAi9cPd0idK2d0RhwFBVr1nY4Xu9lkVA9Z951hWUBjvF6oaXdOcz3ua3VqIx-VJM5yDCetUxtjjFWVyHnvXMtdFtDB4fl1JPF=w560-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMP2MkuNqEs_DgNjOemOPOzGQgE4eRfkKMCXZ3npU4GF7Co5O-GXgI-LyR9vA59xxZsCctoPQueITgVJk-Q7BKrSm_1uRpMjVwDNPxdlbyNIdnl9AlItT52jKYO62KwZ73I6JE-83vKATNNaMlJvZaG=w992-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNMlcbhBCoXl3RCJxczcsQIb1xy2ZPxovveSKdDrvfiAQN8IRtL2GfXAOWzjhR9VtUPBt6hmtfO4vFRvJwjdeAqcd2lj9iBNLvvs10iF5PSkHHe6JagHHH65Hqpm3CW40YbRLNhRJ1vBwquN9IKpzyS=w562-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPTd8aSOF9zQJb72gPQCVklr4kR3BN_o6Lr41Tc0_XsvpHpOf7tmorPBJhh70PRN3aDMSxFmQsjr9QgG8BT8qtNphoaw9w8R49r9TVfSUHvQH_NE7SmT6-CV8EAgX3JJdRAOGPM91QXa0SXbdD_pnIt=w562-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPX6XV0sX5wj-bFG5tTBLIpLPh6E-16grIA-LAxu5PgGJ6myTa3UGlOoPd6xqj9vf2qqwDf8r1Si1I6qvCEG-dZ3VA6b-92ghPAfQy09aUOE36DRTsYN4kym67OY-KiEMq7mDxCvs4stkrzgbC2tsS3=w562-h747-s-no?authuser=0"
	
    ]
  },
  {
    date: "2025-10-12",
    title: "Taste of India : le 1er date un Dimanche",
    description: "Au menu : Yasmine qui doit reprendre les cours à 13h, j'oublie où j'ai garé la voiture, déjuner en catastrophe mais Yasmine n'avait pas l'air d'etre aussi préssé que moi de rentrer à l'heure",
    location: { name: "Ben Aknoun, Alger", lat: 36.76002534466582, lng: 3.013961449472725 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPiJbS3AQg4E1eRn52zFsYYkU6LqQW9cWMYtabA1-RB00ckwwDtY5rJto19wEY_2TEj5Btp_sOmUL_PluCZp7LDitNOBZzljcvdLNyyXd5adS_oHPz8cc95QM5RFy25WpfLaDv8Y_wf_7ZTDSOPblj3=w992-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczObMcD72kFrIL8CIfjA6tULsQvYq9KqCYjrYFNMb6R71Rnf9KPRuIItA4VLXMSsBPODaz4kG_d-BjX0Aum-VocxIWQd720ZS9oDtrIYdXh4mw5XpaGkiIkR4d03zxIVuQmiGpnam2HiomKimta4NDdz=w562-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM07YB3J6AOsCLc2wmQ9zZdMyz9y7-Yp-LX5UVIC-uWfJDPC_a8p4Iec1cdujtwT_GUEV8gmgySU9dbTAxfDW93cPQeJvikdvumaPtPrWBkXfX4qb8O51cL_zWU7qh2-UbYDcsyddHtgCqQS315fvtF=w562-h747-s-no?authuser=0"
	  
     
    ]
  },


 
 {
    date: "2025-10-15",
    title: "Let's go to Jardin d'essais",
    description: "",
    location: { name: "El Hamma, Alger", lat: 36.748464449140435, lng: 3.0763037089899274}, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMClTHefP4CptIe9Z7tQGzMqB6UPw1pMRhf5JIfSKZc1exV3gRrPGO1eCN6PKfxu3Scbw4Sp24ZWCIYoGwf2Up2TpsHqanf-cFKPWqG6lVlgpIwenIMF76E8kzQaPRVOf0Qyt45O6wlvjmEFbTEJKko=w420-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPnhovAcyXiDSyMOyVn7kbhavVeMXWnEUIZGxmwYfHZ0LlflCHhz7L3TqxLixl_hQ-i9pJx6arKebUVcP6O-DW5Ie8CxpWOORsyFdsh0SsmaC6gCctQuE1yUVPqwWt6ecP-DS07cUYBx87tZB199-8t=w420-h747-s-no?authuser=0",
     "https://lh3.googleusercontent.com/pw/AP1GczN9jEnOelXffR0GA1pXyC4lOC2ICc4d9ZK_KVqrEHH2Qb_KtJVQNawCbIFZSShchmrB9CTHabq496cUQLZPG_mwrW6_J0GB5wy4k0l3H3R9dyUKMPuQ8Ur4-TZSjkTrv4HQt-K-Yg0AqE3gIyrV5gSe=w560-h747-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczM4fb6IwySx8R3xZjliZHKXBWK9Ws8pJxgzdNanKkhlX7sl6gIN206XBMoXqV4DCI4mcUq-gJnpNKjV9imJzPuaqTo8PmK2rBFIKm61yVOoAqlqF1ONYSyXAwVt4-mRImktGH6JmFLuqtKokSyZqp6M=w560-h747-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczPmjxukWoK8bciMgCuhj4x2B700-A56sgQvbPcumKLZZEWIi5y49YHele6xPRbNd9kwQNcobIrJLMcpO_C6yfiLBDHwMJ7BeoRy21LlLd34oiySABz6_WRvEMscwXVbD_lgPgqPkOKa8QGTG2BIs0iH=w560-h747-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczOh8mCpqKjPNBwoWD_OIcPjE8qA0b3pX44P2mQ6ykA-ov_2BZg0DXPEi4JNdN0j3ErHLfMxQRTNjRYS7uvmw_QEDuGqCmtLI6UL7Y-RHfmfY6cpzQA9uZQZj1mXD5S7SXrxLTNK5Pb2qVXGVc8r1Tiy=w420-h747-s-no?authuser=0"
    ]
  },


 {
    date: "2025-10-16",
    title: "Why not Jeudi aussi ? ",
    description: "",
    location: { name: "Les Sources, Alger", lat: 36.73618773382194, lng: 3.053372369071417 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMLVXZkdz__ZHCVr4UDZLA9-J56nG7S46hrkMTkcL-jeuf4EXzN8VF52PjvEJNY0oTT21_x06Gbp0ZaTmBfKAZmcYggCR9er0JHgelHQpJblTL6SZ8flwpWllHsk_Eio2494zOPJXV2mGtsEzhw5KvR=w562-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPOyIXqxoh9UDa0k5gziaDADkiwDbg4Y17sXuaAuF027joullfKh__-R3M1zsSoSc8Sh4xIliBWHfBqTVWCsEbYkfOrOGgVN3sjjoX6PWIcZsA0i4WJAes3G-7Iun0d_qhYVs2P7VckvIazjM8iAQdn=w420-h747-s-no?authuser=0",
       "https://lh3.googleusercontent.com/pw/AP1GczPkcAuDq8XqIy-qrvETFDApPkYeI4pVeS0KUkGpsnTn00_uY_O1U5ZXu3zBxLVhcqeW3aoBHspbG0_r-NsUjG4Ubl9FTPmVNGnvJqG2Mt6qDB5wWYw5i4NAREqkd7uLu7-4zotQvKkDaOdVDeZTOWon=w996-h747-s-no?authuser=0"     
    ]
  },
{
    date: "2025-10-22",
    title: "Rebelote Jardin d'essai then Sidi Fredj : 2en1 Date ",
    description: "",
    location: [{ name: "El Hamma, Alger", lat: 36.748464449140435, lng: 3.0763037089899274 },
			   { name: "Port de Sidi Fredj, Alger", lat: 36.76510857416144, lng: 2.8480988402373586 }
	],
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczN68nIrWSfGi6uk2wuSkmxfSIhkIIEOUnzzP0YUaJPjUEEdF-dhoiJZq2dJNQXTMqIVWBxeHtvb8F2wD7-XCuKHH3i3RabBMPmvICjlWave57prl0Ad_lwGjwquyVDZ8XuswXUA8PbWqHsgSP1n2dgI=w560-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMXznvIlDjMKJsxPeprFx5Z7NZvwj9p0JlrKwuADMpJSrvwBoBwX10HTdq3JtF2T7JxG9gE6JSQDz_4naj4O-eqiFPOiqSArbG1FhJb0ACJhNozAP7-AAhukPF7aRrgaZnMnQCpSN1IVmnbEQznNn6c=w996-h747-s-no?authuser=0",
     "https://lh3.googleusercontent.com/pw/AP1GczMLxpRZUogtKAsKkk8MjGrXrnoXz1MmAZJMGq91gO1pM3BOwGilhps5FsUJ-AsgMX9MMLyL0VtzRtE8J7R3WFq91DQt5G37l1XVrCfWcXmZPLmC8L2MYLeR4CnJdoQa0zm_xeewpuh9-Z-sluna-w24=w560-h747-s-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPvjrorys8UwqJWPf27S-_5QMFAm8eg76igvZzDUwMvBsZxgsOClUk_lH5T0eNPxACluFtmuvKE6cmvQLAExrOiUFkzLjLPLIC4ZjZmsNmEsVeqYPuyeIFS-5m175ihubdnBaKYCULHiYG-HWKt-x5F=w992-h747-s-no?authuser=0",
	"https://lh3.googleusercontent.com/pw/AP1GczM6UKbmzjFzZOqJDeu1-60eCqIc4u3FgyMGqyn84iPN_p2-_RHgJbKrnB5dcKOYHRUgllr4QI_AKOtbWGc9vPpYEfa5sPVddw_qyC_qhF_EIlarYPBMj9lnxRi5YXrEUyNjpIU_JycGfmHRlbHBvX_D=w420-h747-s-no?authuser=0",
	"https://lh3.googleusercontent.com/pw/AP1GczP5KOgfb3AlfE4ouKoLoJsXr8YFYWtYH03STO2ly7gtemIDjEcuMiQMwtoqNcKU4W075oZ_PccU5-eKijxE7NRocZSxqrHHJTA1_xzidU5gsHKSQdhqru7GnUgaDWhNASWfB4MLaBLRmZR8D9q75VRV=w992-h747-s-no?authuser=0",
	"https://lh3.googleusercontent.com/pw/AP1GczNsgeRQEx03eVMIKMHVIsrod5l4YBh3RlnnCHC7Fuzqd--C4uon5-ZYpiBzTFzFfSVQW-Vz_MDrY6CgdWK2AKkcqNrQxWbAwc6bErlvUOwR67vHGUaqxSwuf334dXAoQOiloPk-F6aRKWxxdGDpe1zM=w560-h747-s-no?authuser=0",
	"https://lh3.googleusercontent.com/pw/AP1GczOV90QHeQM5xKgTjIZD39-sFWVB2g21SXxv9865Loy000gPBHWBGAnB2vMZjT0O1Dn7tJf2z5O1jxhUJGOgfuHrczAuYLKq3HXnvmtVDg7ZGg7BCt1GF98nvwEUku9AOR1Q7zcok-sTWMMal2b-j6oy=w420-h747-s-no?authuser=0"
	
	]
  },

 {
    date: "2025-10-23",
    title: "Menad deviens WOKE ",
    description: "",
    location: { name: "Wahed el resto f Kouba nsit asmou, Alger", lat: 36.728920317864386, lng: 3.077646823714506 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMK8vP2fpa9nfeG9YjRNNAp1K_8e1naacYZsthnY3xiHXAwKPX29J4ZIvUH_FmA7PUraNGdQhI6bYbphSaJ3uxBWmrEUIhVsENOnbSRKalP6-5k2YiPRTpQPqpiJV6Yxa0tQoo1qAnIWvYNqU9zCRlj=w420-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOsYFnk5bdSDzpffrwqdgLVH3xU1xI9NDIwlArPsfEQ2UOuwTZb_rhvRcQSM_KjkmTnXQgjDtIwX90eTfPXRR31F-l7BBshT0_CZ9KdB6FjHw4zfs6-6tjveWCjsk1suakULLWMcwU4qK4DNSRws_5x=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMBtsF8uYZjAe-LzP92nGHIoc8xLGoeYpIN_y6uiQvpA7zdjSGGF-GNnKOFmp7DQpCRKme54P544T6JImAcTlmg6q1FbA2LEFSlnaoSnD_tDBjx5DZhSM3LKlPKqF6rKfcps2Tgl5KWWor9MR9M9HRK=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNN9gomiBNVdtEDLIrEE7i85SizUv25OnybO6mHHFExrax3nsgJiA6CDemGdrz81IPP-FDIzFUjMZ75jySejtjh0DRJp_q2QdwCQ-_ZJqNu-w1BbeEXR9Va-kjx9_13CQXAfcEENTry5SmIUyxlMHeR=w996-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNSnlAuVajtDqTP4sq2tZGlJ7XfU86bHfUpUaQPlUtMtIRfetEtnyYaeCC6Ur5XaWegAA7tnr0hrhYfNs9shtON2uQuO4FyrLqm64UO1fcOXo1zHroUjM9qlnILR4yUMqBgFaDdLqte0Z5HafWpeVSD=w996-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN3EKCIXAX0ydzVmqc9mHp1-WYJjEasWGuiNg1aZg3ypyCwsMTjj9fWIP8fP_D9x-naLlP-KPV3mH2RlAm2kKuhj-d-QJGcS8QIXtx66iRDkK39ysXbSoBCZKwKEcs2MsOOOoTXUlEDM3KKmTSfFAgU=w562-h747-s-no?authuser=0"
	  
     
    ]
  },
 
 {
    date: "2025-10-27",
    title: "1er petit dej ensemble ", 
    description: "Naissance d'une belle tradition : le MondayBreakfast",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczP9psyeJvbAdQWsVaFNUJSJPzeJg5XaXfgBM9XmY5rOblbX48gzfm1XMHXS9zcomhv1M1sP1f74pWneTLV67No3eVKRzKBLf7nOlK37g56cosBm9ucI7TJjeKVisiZOIfCPRE2o7k3muniAjW_Dh8MV=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNjxPLBKrRRXU8VSEFHjXcgUWPXbQmC4CnjWpV7tfeKTtWoyNUJGFSOHETxmJL9Sb3XEuWqwFZo0scTZaj8a7NyFzF2-XxdFyRkK2S00ZH_JG_Qdr6RNFQdNFjNNszCjD2-5MZOoIxduenHNq-wtq8z=w996-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMImXUhcSiIWsIaKR2alUYGWSLKiOAMgemMip1IOkmOSkpM3gQsmmFY52twA1aaqnT9dRXbiPU3G2i_oNpsrb0BDeL2Jipl5U0LTvnFzrHWGwxFPk7r56fMTSl9aRIhfYYmkPesNU4McKRwN8bZuQL4=w420-h747-s-no?authuser=0"
     ]
  },

 {
    date: "2025-10-29",
    title: "Zoo Date ...",
    description: "... meme si on a pas d'enfants and déjeuner à 16h à cause de Abdelmadjid T",
    location: { name: "Ben Aknoun, Alger", lat: 36.73844323526958, lng: 3.019381797906782 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPp6BtbX5lIGCC29D1pYtTJt_A7HRt86grt-KrTmgEW6NtmzU6DJDAcBjO7hY-4eFMdCfvH_Irdq4i7BoXi9WiQmZtpaRBS7xheZI2L_WIr25wPdKB8oc9lCZaZDIOu2x4rl4AXn1FRrFB1-GOftW7y=w996-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOoHooaQSeb5GXBNNsmdS8jXBI2RJzyCu1ugobHSpOvtne_CWQZmKayRzZed9vLHBFVMPQ8LB1ApNeHY-RBaSE9gFec03zEvt5Rczxw8mV8KpknmVU5hrRZyFu7An7I0mKu-HDUNQqOxB3Mga3dpusV=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNMAYFLkBHGPSEbx2KL1niT9Kt58I8afcGrEg6U98eFQomOXe9oj91gXNX-q38LCtx_G8fu3o-b3O8cZvNQ-vf_rlMJVEIOrrACTfZydWx6k1MtPQ9S_FdIojPXHp_dKp3lkTqx5SGXL6_0RNRuM6Qe=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNcxctl3dxMkZpYrQj5haM2gHcX7G6JXkIpQ_LCeRlzbUGX73VRz1rwlV6ljAjjYvnCtoqBksV9ke3hHL7wWA3EUIKK0C7vaJwbNU7C02otfeQ_BLaxbM338jiDqj5FbelObvbRUDvWyXqMFVdMhBmQ=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczO9mZ9MieqZa8OCBH6FAjfZHpYK625HeCLdwQjaNLZCNknUUPWCzRee5wXEGdkdkuZFubIZjauY1vUWKutLdzLMcgbrdMDWUK3hrGiVnhwDGvc6t9HIU1uRfUE4sYlfrfKwoo00C_b39oHYngS4brcy=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPLURAdy7GirxekCFZrdzk0HQkhcDCqfvgaZL-M2V5BhTdviBDwRdyerpaq8CYXY4uYnavgdmDBCQ9lsaIz6uVzdI8ye_IASB0kAIjieWesRz3Ygow6uS_IZ2Vtr5r7i12RwwMX_JNgj5M2pk7LK50i=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMMqM2PM3RT6ueI4YOw2N1f0K2Ai_XIxbjW8W5hkR3jVDHa8e0HhkoAnXPNtBOIcVx5ExfcrOXJhu5AIKvem8zmgLlmhpsqULOA2uNnDQm8MABBMKgEy9gz2EnS5gFkJQunD3adbVEULuJKz20sRSnV=w420-h747-s-no?authuser=0"
     
    ]
  } ,

  {
    date: "2025-10-29",
    title: "1er appel video sur whatsapp",
    description: "En vrai wella en appel video : on vois vraiment pas le temps passer avec cette femme incroyable, ps : ces photos ne correspendent pas à cet appel ",
    location: [{ name: "Ouled Fayet, Alger", lat: 36.7345, lng: 2.9453 },
			   { name: "Birkhadem, Alger", lat: 36.69980, lng: 3.04554 }
	],
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczN_rpgpa-2D2kP0L0ND0qtqcVE18XcitPHNd0GE8ZRFfDfA9zfdouPDewAN6P9QETXVUjbsdnhid-LE_wWxPhl7tqkXyRRrRlguTiWTOwGxBGrIany_t3S0pYVhicdacH9_tGRKLImyLNp1Uj4zRFqp=w856-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczO6aEubltbMbP2rwOSNNGV5tHZVK0AHJhXteWN3FEFKclOwm-N2ufklAYgy-nK3dccTjzLUccKfVEFe0TQC61Kap-SMVBDSv0yydoHXRKtHvZWfRRaYCzzewucPTgxZy4nmijlSPAaDyYE_-_0Qp81MBw=w856-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPsYo1C3qOdFdkGMGfQziPDkDOPYh6VFY_2JTF0keWTWg314XO8dfyy7eYU9NxyRq3zTsZHSfHRpjnju2iEzDYo-jVzU0an09pK6Sn-e_9mpQttwF3RW_gm5QOh-qXf7k4f2bJhIQ-jiNcyr8GBwU9eCA=w856-h1854-s-no?authuser=0"
    ]
  } ,
 
 
 
 {
    date: "2025-11-02",
    title: "Mini Tradition : Sunday Lunch à la foret de Benaknoun",
    description: "",
    location: { name: "Ben Aknoun, Alger", lat: 36.76010500779611, lng: 3.0006831574254957 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPUl77f2K2gpopvGhoygIGOuHAhmhFBj5v5xbrIpBhgpN7zaRKOonwbooAbz3xP104tAJaQjZ1OoR2eBrvJFWMpgy5fjI51IpNZTxv4blcW7S5C8sXw8HImQcX9-iJIsu-e2b6_dSquV7_dumBdMDcd=w420-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOLka7lKOBoK-61fo8WT36NI4MPQfmQi-cMf5MCxljNdJjf7rhqH8FXfsYjfJXNXZHkvl-bnSyizP-dDz9WdP-1_Qq6_NNQyAvt6Jn5n1vv31GMwZ-cM-_wIPFVEEzxQGaSeWsjJy6OswYNzOQ-8k0P=w560-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNTG0RO6M26vg992Rxg4UUOfYNGhNSLFXv5oYBYG-qgeHMZViDF1A9rxM_vcP-Ov_O2mOEDopf1JYksrpANyec4Wfg5n3Cwc7QEEJiRPtb4IcM51N-EV2ebHW3MjXs9pV8NapTPtnnRVaEQnZ8f62Bc=w560-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP6DMBlb3EIKrJNjvVFNTj0Wt4cIoqBmYokJFagi0cQ0zqgrI2bEHKgm9hZPncA5cUH5Xe2Xci9W6B1BmoXET25z50SyxeQsa60F88JeEY0SRdq6Koh4qZWAxTV4Yn6nSMrTb5ym5B3HnEGbkuB088n=w560-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMf1JSZhYIKC7j0mH-_eVf9YPgssjMwo4bgQ0gnRmPqUV5zKjxtjRf8y1c9DiQLop-WL-vuiAZgTUQL_t0X5M2-0eFaCTWk3ZdY0_vKGqgnBDbirQed_PUQI3Qb2QBgTgumP-ZYRfXXYtPhWbVyoLVg=w560-h747-s-no?authuser=0"
    ]
  } ,
 {
    date: "2025-11-03",
    title: "sbah w 3shiya : double date",
    description: "",
    location: { name: "Said Hamdine, Alger", lat: 36.7538, lng: 3.0588 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPI37U3ksyPS8OMZ34LZ8vwPIhxnqFqnVJPXOoI7sO1ccQo5GFUPNXFknm5wMQbwgmZDbdVYqM3hPUcbsLw6m1BHSY5fnCfxd7FAkyd3eTZiTfgJ61EBcgilvmeD5RNfufo351apEscMgE6GvNtLpiA=w1080-h608-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMfntiBXPPJEHU48NNCuTUB6XG7M2OjlozoP-N-VU_slIFNvUy0WFq0cowILfLepfjTl-lez0KCwYouSVo2GmkFi5obhUNn-9tX8mTiPoENaNFlhSrG2O5J-R-E87ON-hbO0g7vOKbr7JOQVdYKzagf=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPWYtSNYndsH5sAfq-LPvDmshatXUALiA1D9_sx9LUSIFYYcKLcRSscV_A9rCsvvTX6EuXNOsv8rVQK8I_qqOnEegBpqFRHPT015j0EOwiq68NVxpRdwrKAve94UfhDAhefr6Pln09HxfGnBbbk9-1q=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMZXW6ZXA5BxRuuxNsICOZAXO54S7K20ijNx_HAjP_jfpdybw4FXd1RVgW0sjSucymOT8xRF0UqJMmnMX32yZ2_1MDLSc50LlcW5e7AHBo9MUHNWt0Zu8SdtCNLhhrsN3CbhsgG63CHUpY5X51ZnZTh=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPjNSWUcd_2yrjBzZR3MDRSQkbyzsqypJ5bsyX9xEPjnfiLMIdCrwj7AczhzYVq3PCAsCmtre7eOoaBln7Hk852wpZowph-AEkUHxVJOe6IST4ensXXpFtqkD-EcQqSV9rQYzd7kpUzqKTveTBrUCPl=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMaoG3i6RBZNAag-m0H1c2SgtPe9abC_LYy0826r7OiELGcsQCevovjGEyDOnoPn5eogXjE90W_zUPj3dloWfNNYBo5O9CcvC8WX51TSLu4b4MGi5KdDL9GAW6y-83xFMpVD7dxLME99eV0vYClchM_=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPHE9i31E22R2J1IWA2GhQ1YGDPPmgXARN1-v9-UfVyPQWB9UkzSgbTxQJ-CrdlLSeYZrJP4E7UDDl0tpfILwlBdtYWrfu5sZW1pDKYaWHkNjiLcZW4rkaSYf6jXoOQ5UI2bIo4w38VtE2lT7zrwyf_=w420-h747-s-no?authuser=0"
     
    ]
  } ,


 {
    date: "2025-11-05",
    title: "Aerohabitat 10em étage",
    description: "Comme la vue depuis l'aerohabitat, chaque date avec toi est à couper le souffle",
    location: { name: "Telemly, Alger", lat: 36.76657409232144, lng: 3.044697069072758 },  
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczN_BtPCQ13OD95pzTOeOAbQdhKJGBHDmeIN-Zvi6PmF2HGw2mEFjFsf7DEdVtJxxN13jQKh3QrmfTtzNdwmt_lxoajNteyw-r0CWMYm-uvZqVn-zXq1m2XNujjOSt8FVDQ_N1MSvXEyhak1VXUFNiev=w420-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczN2Jy7hKw_4KFc03Y2jLo3ymQ9o9DEWeuggTlKEoop1HjJ2wxKv0B-U1SA_nRHMl1Ep0sg1v4dUczxxD8kdI9_MadfA-T-YUFwREG9nGCkrbHLLcpcLIS-fW7GYIrtZxdHndMP0UkO9SQjQzXa8R1Hf=w420-h747-s-no?authuser=0",
     "https://lh3.googleusercontent.com/pw/AP1GczME0zJ2O3Y73cIEeQkrGLusVSon0B0xNMJOKaVvZHgF7KaDGbRNKFyhZ4xCIpvAZHARnKqKaH-DmKmEN_QjgUKrqZHWsXYCDeGFSMaS4PI47WlV5mKtUrSMp8VC4e9VKl7ufLxGvTNcAUJ1pu-jIvsu=w560-h747-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczPJAB1WkrtEaS0gQqOos9jiFveTeb8ZyWzyRfxLjzCgzvjxE_LO5Bbe4BWCF7oO6_6Ut6JgFouLbH9lIHBDrvwwhu78BBKibfDNKxHJx-kr1KIqOmag0u14fCfw0bXaOdnJRrAoKGhfKCnjuV2FDmyT=w1080-h608-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczP4TjNmm6BTg2i29dwofHDZTnTILj--yTleSFULVEBRID-cBgjgkjBqrztHiH6-A_B0hmcGb1SR30z2VmkDS_8lWGv0EbHdwuPcim1rZ8e0npVUj0cvTTuDjP5DP3YqXfHclzL7lvSnjDLrm3j891Vc=w1080-h608-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczOcl-DEG-Eoz1VioroumXqqmagBNF7qtC8wbOd62lXlC3Pt1XSJM_Jsqk0EtYl8XFfoBkQRkQoyC_Ul0K9SzhIdtE61UuE8rQ8Fz_erqSbsY76ok4Gk2zAeVFIzOmmASmuOLGb39cOZb5zWzBiilgUJ=w996-h747-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczOlSIIiUwpBF7IkbF2Tc_5N1H7v6vUqqzzsMTyTF24V8CnyYf4jdT3oaqecUsQFOMWy1YlQ3r6PEdcOaxDgKEEmumy-notHbaeIXVqCiMaD9nE6qQOtb7UgmFqm1pwSmX_z4jhHdwe1_UTg8RMiWkQ3=w1080-h608-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczOtM7_KieWSN2CLoPHFcLWOkPFwBFWZmFNFazWKbNBGMFDxu8OTHAKyW-KfK7WI1N63M0_9Zs550o4aK3KQx2NOIIgk8uTLlUq8hpFz2jGpzZsVrd844Dyo5Jm-7Ds3wSj2lvHvjBq6VQa8duX-vYtD=w560-h747-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczMx5lh3-WqczInpuagiOetxEAqKUyS3P57K_Jt7C5ygl26PSlxdTwfhP4Jb-awlmO06pRMH_d_QnLNYdLVBrhBbVgHVS7uMmwt346r308rRJE6zTVLyZ5bV5tT0i5_iaTTsFn96lnCirWuE2dKRgF79=w420-h747-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczOV4i8DmmS_UrL7Vea6BaR0vsEQgZf_y2jdI79z6oJtN8Vq8nfk1536TskGPmvYjnaAxiFRUgoYynegWnDVy0QkIgRSGAJaYz4n-Ow6z9qjsGn1YMr3vY4u_NaiW-QNAoFoGfh_yxpk05JkHmAEQYAn=w420-h747-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczM9PFHKUS33KaYdjXQYTuc-QjsPHJNek_yCpwg5WeXApvMuft-D1TvCP0Wta8TCd0XJVKoqE0xdISgvL3LcXoWW2HzorRT1WGSHUvByup9v84kbqP1cpAhGOMt38ag_bylWrWMn-WBUXB47K0Yaq2TY=w420-h747-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczPhyr2wnTf7VnnZ8TUCaeFnWEPyAxiN161skGPg6NQ7NSpb4c0X65M_RH-q-WCF99xt8Bea8ovpW2MdrtYq2OoruoDQ9ahvYJsaAX8V1MwM43oVoMra0QE0GioYCEtCGhfYwzC9DzYZBVM1KD6MS4jJ=w1080-h608-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczNAxV5bpNqpDuskH2EEEcD_D3zDWEfYBnVAKRK-c8Daqukqi6t62deIztOeVrtCJ2-YTdEik-53j3Gm8ZjRKx1Vgq-TKi5Mb01vW_5z10ovRCTlbV6RJwFIevfphD9ZpwhfMdvIiWviESnKzPu9-O5T=w1080-h608-s-no?authuser=0"
	 
    ]
  } ,

 {
    date: "2025-11-06",
    title: "Fight in the kitchen",
    description: "",
    location: { name: "Les sources, Alger", lat: 36.722819665437235, lng: 3.0761160383883706 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOAxwQ7NFpzGu3xRQUXV7W0v-ByE9NGIo9hI8b4BLzpnKLqHugbNzlyWmWYz1svKIZyMYd-LYdmDrWlp5hcnbwc9BAbUJZnhOVZjzlUeHx-b85s0CJjeJJvtEsPhc-oTeXYpyybHoU4x6ofzZR7EIQk=w560-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOlk1tLK5qkehRS46b_SSkAucWUDkH7CYuwj_q8zrnp5KmInMAbMQtm9n1dZ50gg5oZy8_sBBHA3tBU7yWZs3AhuVzjrW-4kXGL4VCIehdbITFDjS7xq53lrkbyOgndnkjMAU7b8OOyOgXmsh9f0_Om=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMkzN16XWrCCd_6YCCoucpO4D8PeTQH54aiMBBWJhTiQmxGo7hsVxu2r36UPM6RkyqQ2XJVZRfB9v2ZR8AuJ1cXg1mrI28mU-vZasuUrJKMRBwKAzqrw3kZLZh43_S-soVIaEH9sE-_4IMi2lsEOKdV=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNC3vs_TUgARiP4Cp33G6uDdj6jXxxqR_pBTULpNwS3fzSTrzwDv5viXlE3nXFLio5OblarAUfSzzZiWmfSx9xP2Q9uRAH9a12Gv1JRUYDi3PVZ1pJO-twRgzemBU18F48eiHPCOVy02B_gJTm8QBpM=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP20NxfR437sDmgz-W1w3Dd-pSuzeOYBBfdmfdk3c7hZ7Hfu6uNkxI_V_xYmnSRa8qqIS5br5jxzDlIjDcu1lnQPSH82YP5XCW-6WsBdlyPkiDVz40sNDV7EjVWEA4F4QR21e2alkpPHpqflzdi50Hf=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNm0ACZO-Qv8YSx5L6yL4hKTxtiDnuJQoTbbGMR_MwuyeWftvqpQfcxB-FGmVZufO_uGJ7rNoRSjeKSEKxISujETqBZBA3cmImRhDl6QCTDRg7D9bkk8CdazVIZ5hCJok7yw9FWSm6MhmxpSwANhpGN=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM7prWOkX3rJsXtHxOF2oZDQOiF2h_7BxObQVBAgktcz0ud7dA3tjyhC_W55M4CT76BzgziOfkQNcHOqztblXdxPe6mDuNXEwK9phcjx91Ipngm9Je4TXxFOy5avRvQ_e_Nbi9D7-scAt66RYbq5KLD=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM6LsXNCIb5zF8ISLqFdrsP-c6H3y3klgC2f4Ga1AhS5SlrHXEHWK9SUfRjv_ki3qNA41V3u0tjrhwsqkhpSA0Fx1u_smoXjvxuej0UBRkHLfe03P7ap29INdB380vUbwqeQKAl7wb9uWF1ufTjZQNK=w420-h747-s-no?authuser=0"
     
    ]
  } ,



 {
    date: "2025-11-12",
    title: "Breaking News : Yass in Ouled Fayet",
    description: "Au programme : Pizza,Mer calme ,Ciel bleu lovely moments and Yass driving the ACCENT ! ", 
    location: { name: "Sidi Fredj, Alger", lat: 36.76510857416144, lng: 2.8480988402373586 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOyaa5v8vUXYrGy_wBXWpPSaQgbxYyLLXTnaoWaM2_Ocwt3e1psqHDZirY3jOl4QPUHt0fWRgENYUprXknbMeaAQ6fMw0lXFbdL0VOm8BsUasIqWA4s4AJgBsEZr4XgTLDSNvfrRD4fitGfr47920by=w420-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMiL_IRRsAh7HXtpFYNi1tGDOSGEsBBkc1FLOtZKKnSc7n-48ix396ewQVQRoziE0fG-IG3c-lEEjD7TKheBB2vxVtQvmTOWL2BsbBBiKB1CnU_4cvDdOFORdCDV7r9pDBBoY2WaK3XdTR-SOevJoCm=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOpJG0kuzUgdxgBX4yAgRMeeMK1krRZ2PFLF0FU_bMlCik_932WWJGLv5MCgi9BSlhoPsDARDul0fC19JO-1qZwWeH7DNir6kRKGJt9TupspKFdz4xeW3wLoPOEnvBF2COH0UnbfxMLFcucPiixeiYY=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN76vfDx9zRehwWdSOxpHeWZMGQmpK1oB2DOsGHz51RyzcCF9dtNfaQIiAyj0PrzxkMl3KBkOvV1YoLhJjn5DPOl_E2OxksJcp4Ie-WCTrf90_C_k71JUjPhMCOGS6zhMr1m0aHzejaJvfNNbmBdehd=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPIfOkVMz1O7xe3fY98K3ooRCd0ZDzOzsKLPqETVbCTKf10sADMRaN6TkSSgtqi729l77vp99oIdZRXd_A20Y0gcww9dcNXoDsf5R7Wsj0QDrfh8E3IV8dXDm4sKWQFi0m0jSnfGZF7dkq1lf0fGqmN=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOY2yqFttR8uiEWY1Muxog1Pcx4F0Qt1ipYJlqs-borRVIrpzYxl7L5bkvpoNkjw7Cyn9tfN6DW_PzzAyBCURS1vTvOaTbKg32u-QU_B6_IBUL6aA59faGjVtEtlEnw-v8ZDMHm__zIxJydCy3Vfm-1=w1328-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPAezRuQWsP3RuejtoWwv3FB4--AD5ixtiTfBA0KZKSMytgMEqNZS1yVcnOxeKypmDnwy5KSbIZn9-Fy0juwegtuTPquWQQDmIZl3kh2qrUg7QiDLfs1B9o6A21cEZXyeuy_ABsuUXo49k_36CGq2CW=w1328-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNqje6Bo9PMno-pyeQ3nFbpEvSneFduGEDZFKCsKuHQuAHpu2Fh-x5n4M_q9vLWPogLvuyJA-ESa2vMfho9k_0sit5O080x00Hth00Q9ucfgslz-UECAc7_MEun064ujSTqX1vb1omnqdcdhTWA_b-g=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOMo5sv5AyJWq-cSvNQfGHi29ZCPMD6JUFVRI3x1ZI8BXREzbCC0yELDjT30AhLifVr8NkglEcMYvVO37cvoMo7Q_3eQR8Ll1hE0hpARvacqcYF2I9yVyDUzZu_YL-TEObuwmRvqNFQwHJpN_jsi2I9=w996-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN2GBOnO8DvhlVe9Kg4ANEIKI6oKy55ip95bzQ61O9A8aOo9iClbnM-ZyNBIi-alICFcTtiRJn35C-Gr6qBX5Bi-2n3EHSzX8SdyKCAityd4LehMPt3Q572JlyS2opp_8aHxyrEOZxmfWia3d_Ugkql=w996-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM8kM1Z7Hv4_4jkmqvf7VZ6RSdE-rruFXy4cH0-2ibvveyt-cNxllQbKdPJXpq6Jtd_bhB1LXXZEL2_GVXrIUZa_ZA2h20oALzD0qB4F5KWhpEEWuD66P6vmlLqJy7lyxT85rjGAAqYOeVhLqVMYUgR=w560-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNSdqrsVXjvcibEymkyJELuoRS4euNp-ydEzLZ_e8hGsEqHgRBLMJcKkAVlpmuXFcSJzBR1jjqbYsqM4Q3X2Pti4u81Vcq6gBJv0_khnO8CDwquB1bt03UxdGu5wE5RBYoklaKKnK5y20TUE_NH5_ZS=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNS1KPFPuWK3IETRQWqKOizXWfUKAc9BwcCdpB6YJ27pIXBmC7VplbQS-YkAZg6ExLRdwB9IBTrHvKhLygqvY9dc6yxOZpEZNveDiCbP4HsYjW6k3azRdkZrYfMJB2VuqFyRTDd931fytgnXO5hyd3f=w420-h747-s-no?authuser=0"
     
    ]
  } ,


{
    date: "2025-11-19",
    title: "Woke Again chez Thaliando",
    description: "",
    location: { name: "Monument du martyr, Alger", lat: 36.743563839239144, lng: 3.0701064114011376}, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPfOIz92-M1DehfIEURd2__1zfLPnsIgfilU35JbBM-1tzT-rSbPEIzJ4a71ej_56AJMZjgHzJjUuu2QA7eNdQNopzo_eMSjHxhTeStw-8wbbM9kN18Gu_ep0PW8dquZyW7I5jWY0sgeMymjykrlNed=w420-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNuKhkNQVwxjMwN1MPH5P0HH3w_qEPwE5_n9PLrybNsS_OB1PhRFqTo_pYi4krHRqcjWd04WzQdryJRTZde4AixM-j1joLr4S53pOyuC1CADcFPp7R_JHcvbhKIyKqP9-EBwdh7jObvNsbMIh16fzJE=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOtry7LkiKc46YU14kKZOzu76MlM0xVrNydhBswgIEdLJXn6cNN_ktDYPBDEg1VbsOEEWzn8E3RLUSex8i57QvbuNwOJa5JiENg2NAEPgrnpPl6IefdVplobL22IhyYHFM_d8lv83CrJCcaxCMHa0jC=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMxz4sp6jk6ntQlDmSYK9YZybzzYKPMH7Bv91-gMdxE3HYoQ6FzhyJHKmfqbXiBhvpXQgaVzIJSdjKCRwc8OLckKAqNb6KonAnTqyAcp1fyViKdx-AVkMzz8sn6ITlPeOUeygpXpbm2YxDx3x1ymAE1=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMc2DPbpLzNLFMx8w4S6Q-J1TNirvXI-ec_AJ81Q8RH8ql-lBqghT_nEdgY6kfRzkjy-cdb_SkOluh08PkNwx-14ZRXGTnFao7VfVmhLFPnj67T5if2tCyG65KWVZH9CkqGhv9lXfmiQCrtZ6icimgs=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOraCaD1EfEJb9_klNenq32bWtrxSQF6Asod6-9Jh9YHTxTQORNt8vWBgeDoDcQ3pr-46W35UyxFDh99XhkYTx_BZgTw1rmJt_MXO-sLyt48wFR92H0A7mBccoyf3ujl22pRyXg35QWIT4xWzjN5kD_=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNy7qMoXdy5WnAgpzUJZ4r4_cb1KYSXrNl8RCnjGD_hWw2yndSIBGOQe8xoNYMWLMgcr1B54kWfpLZ66v8fvZeqWxMhIqKHu4pKOILpYUTLj-ktgC-AeQ3_en3EgU9bP-7mb6Rn_jLxAPPLt6ph3eJm=w560-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMwCBHCDRIXMY2l0yLxaIsm44S8aLOe_UzaZM8vHjxjA5u8wJGQR7XBl-oWcLxw17DxzxkjY9FLfGxnENX9_IsaMc-Qkkzs7FrIqPXo67XsmJwnnHTIGD94oDZd8eWnmsSIF8iw_FoYyAkA_0sylpN4=w420-h747-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2025-11-20",
    title: "Rainy Days are the best days",
    description: "Plan B, Buée sur les vitres and love",
    location: { name: "Sidi Yahia, Alger", lat: 36.739486619588476, lng: 3.043353340236255 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMnUVUi3IQLHwfeE0K9JMj7JEOmMM0a6QonO7XqGcx_dirHZD9tChf42fBmCYp3taOTGXy1cuPx7umNm-06p-kBqmRXnXbZ910lhDDNCxRaKd65fA_wSPsE41M19VrJ60LK9sIoTiW1UO9eiCAEQa6j=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNQFSk4Tvex_eqcm4hqYRRsmpAevQDFCf8_XJUHraxEn3dj8m6BS1NdddMwRsx2bzRQhAqmfB16gNhLutHZN2vr5KUk0EW5GryXEYx_pZm6roHdc1v85HtXk_yPWy5delt5o2oHxNKmwaulB978JW2a=w996-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMpaBBLAIs2csA9frdnti3vVJYVA0BOZq6pMjK3erBW6NKeyYQfaLuLnxqy9b3X7sROQDZ9v2RS3f0kyyVxtADyJ-ZA5HWFpoRHRO94wXWEpDWnzEzNYUf4g6JFuKi3-rfGPPSYx5UHrwL_pLoOmc-x=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNL0S6s7I21SYNVemXsUW0dfopKHeWhb3tJMRQiHQeNa6YH9POYYIe8fhMWxQ6H7Cbualw9QCpxX6xgK4fx1-pNzA8jQV9lk59HDPXsazqsVTh1ziIZW7RB1KlFMWpvIyA5mU23b8DwhJH2THYg_g3A=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNOaeHXYrE-Un1TBg5n58MyLhT1sv-DQHLXKd1LfLRgQpjYUYWRVlYuTbz5b5LHEDNuFnp55HUwwv090xhZUMHnx247Rsq8PQOB3ZjeBcLrt_Fg5qfnh0vNXg7JrCwRraRGQMqhilxfMrmn-ikA6F6M=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNIwdIgfylCXjHu5hWGizpBOA3XatbuMa8FdBuoYAnAETtLo4wJEH9jbYFvEjTecbD8C4GnNVv_dk1Jw_gjxW2tcVC_kecnXyUackYCDqgQZWfC9sL0yFeCwGJA0jKRM9mEwvvmZC5ZgYyqEzzIwvh8=w420-h747-s-no?authuser=0"
     
    ]
  } ,



{
    date: "2025-11-26",
    title: "Date 24 : et Yasmine commence déjà a montrer des signes de fatigue",
    description: "",
    location: { name: "Draria, Alger", lat: 36.71949687158915, lng: 2.9936379690706763 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczN1YKuCQKtdO08g8LatrPtJ2neEqApOVZz3CL_LavXWIr6HzpsLq7mfFYLkvUP1OOBsK_xDLCIU40UBXXPYs-M8XlR-0g5qTtDEbBCOLIVBEKe6Dw0cH-jYmDMgB6MKxppmcJHknUb2fALEh1ZRpBlw=w420-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczM692Gr8U2Lv3MS2xBvj03r-9HKvVryIUo9pFvpseU1Y7ikLGn-poL619ytSzGVAQefx6WpvtutwK8Jo9pm0O4TgWsAMUjKJnpoXmdDuThqbZp1x5FfvdrTPXm89DtMgPCnVt-sOwNzJ-JCVqJoK47_=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMDtfCwLAQ8dkXC1l7kIhurdrf2v508c_ZbGHfkpprLpSJBKd5aVaRsHlEEftURiw10ugCD-AeD1g6nv0aYcmEMvXI4KDyerm3sbPZz-vecmAugd6o-9OFFWtVO_ERRwQz9sgQiPjKmp7j6LiFadwab=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPDcFFJ_jM4aWSFChd4GOB8IjbhPnq_SyDd0VtY2dVQyMAX5ldJrUGdoN2DsvvROsUK8C0UNOnmFBZEmtfET0hOkcMXnEIY9Gy98JVsrM6Yp8kA8-KrXxo0NueANPUScXRx1LjEX-5z35s96Eq6MNbM=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOX6-c5UoKM34B67Vl6p0WhB_Xkb5vceagPaDph3WvDixb3lNq1t0C-XtJtDmItMSiZQHPQsksI3Bryhm2rkIjsVpKbU7hqlnqMlu-H2j0q6Gl2HNvR2J6dlbZyKg8kGcYOnSKoUiZbj491zhybMSc_=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPY7mezBfGmId-Y92pGwD06S55kQ5Yu_v6O1cV6ehqU9-2TBGLRo4iXzQRN3VB04eVE9xa1ywIpURh5X0QeOT-EL3B898S3gXQnPfCZ9nDzlJMoU0N4cHLvGcZ7fNDa3CDz6GILaS8bO_DAN0GcdCkV=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOp8wisJ_RugHZL243hbqpFfHbUOYnUHiIg_uh7cw9cnoOw5d5TYbDTsR63qP0wPvpATaq_NCsQSgVnH3ZJGGSTyXLmXhMrByc_dbjgVHPzX9PCt3Q3TrAu_4OTsCUMSIDdH790FG2GImz3AlyS0P-O=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPAS3CNIdHB398b5NiPIUfUBZXmwyLP7rP0ESihiQ9ub0woRvSwpQc5zCT7zMScRdod2bsQ2LE9rMbY7r4xYatc5ridE74yUBdgRFsa8_A3o3JeJSY2RGPpThVvNxeD_gac-WTPZTeP4Oz_0xixx7Gg=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPo4WJW9yohIYApWVvo_5-02CRlWImPxsUtqMByReVrCZPCrQeiX5Bq7zVVvDe9IKgNMknCAFWzNjmFIjSh07mvJ9JxYoRt6WfD0EddZuzMFOQl-7XFBCob7egL54C-UPZuZXmFMk0Adrk-YK47Hdgs=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOtEgiG0GY7IuNX2ZCuZvB_lnl3YHzoT3Sdv8VEQSah0C2S8tV3nLYOLaUCQJTD9CdTqGyTJB664uQTr4W0dR5G9NM6TyvSoPmFXXj3yD1d2VhACuV999qxdXR_YU-Rxk1V7ZoR-X5t7IgP_gnTxDlX=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN8Avr2WOat5A0fenBC_cCzl6gSnnOGHhrimTj2eIj8B4jA5Z4bOz5KgMLHIjAXF-LRaI_JtG0QtXRU050QmSI9EXN3uS7DM2o8mloMR_TdhqKc08F5W_ZXWqNv_w0cHRqZ-E1zdf9qTr_uiJ9Lbz-A=w1080-h608-s-no?authuser=0"
	  
     
    ]
  } ,

{
    date: "2025-11-27",
    title: "Thursday Date  it's number 25",
    description: "Makloub chez Plan B",
    location: { name: "Sidi Yahia, Alger", lat: 36.739486619588476, lng: 3.043353340236255 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczO2Y47QyK45_SdnF0YAVw6C2M9SPWUwk7bJBXr2s57_dWboZ18TzJaopSIaNN69bHqjWYMfcwz5bjCVjWOaaAmMsSkVrEbbG_0u97oC5TDEHKzJ6F3qjqHm91gkKgijPxUIVIsgDpPw3pJsdAMkX93I=w420-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOY6JBOfke9hadVmZUj6roSCkrbWdJVSDzjwKTyo26f-RqYbrdIFknXWXuwtNsQKOHbAhH4hkygc1_15PJZ2fKOWwLd6n4PM2ey1p1t8bI-aOTtg5Z_aTxKhiM2l0jmo1kKTc2sDyDwmmwA90kktu50=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPb407oC33p9H4jCR8KYAoDIjHxMoCYu7FB5pq152aa1GPbJMv5CHfJfzdtSSRooDmmnpZXsTGaBm8QnnEgJXEW66BfI37LTt0TqErn_lYiBL9VKRu8zNoj65-P8aoNN058araffU9hXOqBHyDyjqK9=w996-h747-s-no?authuser=0"
	  
     
    ]
  } ,

{
    date: "2025-12-01",
    title: "Monday Breakfast : Date 26",
    description: "",
    location: { name: "Sidi Yahia, Alger", lat: 36.7538, lng: 3.0588 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOh4nRXceN1t0bGFm3V0XH7vjSRtlzohAr43mf4sbV9qKpkzZBf5Javs-hfiTUr6LUB0Uo9UGgTGxo2tkwzlpWeAm3GbC4dNJZm6kMqIUFjWDyMICpcIAtW487_N9_Iwq5y92JkAJXOo4J75kUssgqV=w1328-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczP12-UkhTXBJLTiUhjzaIH2hBNyOSH_vP9AXqUOsuy4QicIWWKQsfpJb5pUYICNe0EH_1q8aM-2LJGc7nCkoxOVoIhZbYPgWWc1hQYvLE89tWCFSEy_7BuohsT0ojLfzJlTT-0wvXPjaI7YBogF4KWl=w1328-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPdSZevnQF4h0mX6Xz2iw5Vt7H_ygKD_M5Zg54RElh1-eov4ETrKxSF-tQ-Yf6QvmUdtvy1NNSLtST7bTmjjpi8GpI2x3XO_AdTqIzKuG2YX5Z7IN8Cb6xhWczVcAK_11Fa8hELSlXt65aOt2eITPEj=w1328-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMiatn5wsOwIQ1MqkryQgiq7eal5sH5wHhBScP3EkecyU4fFnmUjmuzW24qlU05tMJBT9m4WRTr-vuSe49Q6C_y9dckOHn6nLC4tIT5pweJMYBGb_bA3wCmbzfbnOamDPxYPH38SviNt2hFfL6Ac7MO=w1328-h747-s-no?authuser=0"
	  
     
    ]
  } ,
{
    date: "2025-12-03",
    title: "Mr Djamel Bellil : c'est un honneur de vous connaitre",
    description: "3ami Djamel day ou plutot Monsieur Bellil, then Direction el hamdania for chwa avec el hajja Yasmine",
    location: [{ name: "Les Vergers, Birkhadem", lat: 36.71810387443986, lng: 3.0518853537294035 }, 
			   { name: "Chiffa, Blida", lat: 36.3714692699027, lng: 2.771704340220241 } 
	],
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczNgh2Xe8TIwHXGM7dDBYFzfxr5xg2w8j43L4EItNgLH9liYIxKwDk6DhFAcBIPJ7XnCHTbd5x_CMJGhzTlspGGesWJY8KKS9PERuwcy1M9aKimshQdCfjf3rpBzaARh6YOZQ2x7OCtKBxS2g1Ld5inC=w560-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOtIc1dJHurV4MOjwachdi-dyPeOnzB3ykjWg0pq1-fhtlzcbcRvIv3Z3h7kTK2uYzR0_1cZNgoJjAwXYsmXhfP1l-Q3UP1SsQBSjS0zVR8vEV9dFUIP4Ud26O3kkOqg-koJmA97hwpOF1TqKxpzqBX=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPc2f86RHb71aoG1ksPxPnhFnuXruGgQvUyaUTU4dk63F4Rl-AXrxrkqqqW9kRlxYP3VzmE0FOFSUHJ_roMfJd_-kK3sfOQKoK24OS21PjTE0DGqYSnvcF4-IpIUUYfzI6REeWpRSOp_7ZrL82HUv2w=w1080-h608-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOrGvZBvpELxeJ0hTzewyLexfve8zpdFGuXdfzeE6YXXk41qwnXr4Z3M3iTPqPEXRrBC6FJJN8eNn1elauKiQJER8HSVQFAcSUs1Ty__P4s5gdSBYDVdudnaoTWqjDMqKPZ_T8t3d4yXAUa2WY3JNaq=w1328-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOAYb-Q_HJboXq03DmKjNjUgPrNNVDBEvNXpiGxIUC1PuI25eibjngJoejvi4WySU6yyaaFBkqtEq4cgWzndsj7j1RKE1tDVWhPNh-hDfnm-IhNgfwQ5bYQmo1JDlHGSEIvw4dIGi3RZbPOimF1duhY=w1328-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMlgdrOZTP_eKConKRg5cM5h8mvyEg9kXvQQ730fcykNkzI9xIsM6agVCZY5_ZMoEP1fURqMcYFaLlpVjg2ivBVa3oReDzNf-aLuf8QgGW-VdRvScQn3LWoyL2P8xItXuvaIROmhiMdrNAa1S4k74KF=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPNS9HaDfG9I6LiHn5fcOBrvlVzFc6vPm4-G396YDx-Re1jIW9jalpSu55ujbeiVg3vnamMcDsKfDpzPQs8bQXPSWf0KV1eMyi9mmTsM0PKYAEv6U-JCngnGD9dNlqMrARPTndieNs3Do9VGv2oWL8H=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN6kvAl1UDse8O_CU927JCSp3Q5f_VRiwunDK9xCez_XMHZySnR1hzagfQ92MtDOhecm9X8HVGQ8R9cxd-8_h-eDeV1oLGqTt_95B9M7S5-beGk3-2g-VMMtzyBhZaOHWdqf1fxsx1QExZEJCrpIaDX=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPs92ys2jjtkJ48rBitFD3-BpOQz_rExalrh0j5O32AriRuKMKN6GjMAhO0TPlWzOz5x5aoPUBBA_1s_9lnwEaI0p8z4XUzKtCy-iuyu3cg4Nx1kKMqH8ikYSenCW9z7ydaFiU3wowVmjgBskKR9m7d=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP0ccp29QXYZfh2A1l84eGyrcYXScxhO0bzltzw9MAiJtFKxowA040YSIoODwoC0Zk0-XrnYu6qO0uuVf-dfkbsr0bEfL-TgwpWWMS96aAdeTl6M8UK669c1YkhVL9h5IL_fpXYcWvAd76Gd04-kltI=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOG0vNL2QnmYAzWBtkq1YxOQwA6wUhdKFrly2CKUMOzX7YmJYEvn24RshGeRQYqdpDgzGtZR7-v9608sacnkVKHiHe-LHR_I-K8dyfU8se4PKlHrO7hWuypPcmKCZXCd05IKq9mmJyjyk8RB_uFDRoo=w420-h747-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2025-12-04",
    title: "Mondo della pizza",
    description: "pour à la fin prendre un Panuozzo",
    location: { name: "Kouba, Alger", lat: 36.725010360847456, lng: 3.0992066979061783 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPakLrNDBdYbRzPClJLgclAtDGOCpXJLkiaupbTjccl1TL6vC29srexSRv6f-TeGkuFL0D6wjlY15wHURU2zNUu7iZ3J26WB1br7DmcAXuasrl_LWhzaJHxp26wmmuopJ04EuyeXyqONS55IU3v8eYr=w420-h747-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNsk--Mj1ltelv73iT6hTWV7p2dmBkiG5xUexophgrC-2kJskWfczLoB-o1opNDaZ_vYVy1OcttBR1SWSctMTiXO-llnF7yXEdnpVL43m03Ows3sW19-0CWdHnrAavzoR6Q9yDKQOKVIREHfMFmlgD2=w420-h747-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM3pz8Qqt1zPcwEok8q_clVgozEVWyvzWbai-9rcSCh0V5HL5apSYEqhiF5p5_PNqsq11LqkQadkP30G5-dRH8edc2RpSc0Kdm-k4qnsHCJPwGQWrhDuHguF75tqgDWi_uvpageKApKooKoU_tcQs4R=w420-h747-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2025-12-10",
    title: "Happy 30th Birthday habibti",
    description: "1er anniversaire en tant qu'amoureux",
    location: { name: "Fontaine d'or, Tipaza", lat: 36.591788243888146, lng: 2.4714410801477964 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOljdRlR6buCbicUbLrWwcMy60w10I96V26fNHF2d5eXGgksfxeJXadlFvKz0YHIUZypnlCFHlNzaiHij18sgkwIfHEq9VG6wzQA2B_0biahIxJprA8Sv0MeKA-TI__A92XgmvsdMb9N4KBhEu0eqsH=w1912-h874-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMilLr4C48c3lNYF61mQUR74Ol10It3a_vM-fTY7GrGCWhVv9dX6nkXI1rjfX97v4DP3wDBcLqr1rSrVCSqc-QWD8Ry3gHiLqPZUdw9VLvlr6Ovv6-nI7aAray-lVOjL4Dv8N2T8H1STgVEwtHZiywR=w1916-h1078-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOvpeUlyMOrjqmSJqY5-qvYSdVK29O3kBN358wBdp1I-IydSVSPl_CVHHPNOi8atkEPWQuib14MhfyWDen3d0GY7GgbUg1RO7FsNc9SjRwBU4ZvM2Whqdjc5G3ZA7lxz-VukgbrOxlO9fUQQJfCxi4K=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM9TXhibQ7ecPoiorTbQXasOJM4ySRDSfNT88OZZ9PusYhyvdCSpyTdH0qCrUCjWrdczO3LrLDb0BtT3OFdMlv8N06VVQ0_7Gu8LHWjxh3A_S8ZPFvmEyfKAuv4EXpndp8mAzbUzJyHDHM_f2iBSNF-=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPDrdKVnxNeGWPbJXuOYs0mYo_vtM95-fqdv6lro66B-Dird1eQWkl2xt-r0tv9FjSq8SbDw1NIrMWeYuITmatdC6eaT2_Z2zFX1lT77HoY5QB84ucCvLv1po5MmnL3DokXvu71ZIWw3ka2rf9rYV7A=w1916-h1078-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPw1jwhF_YrTjI-DTcWBvdAowIdShXRy9iqtm8MZCzzb1zd7l9_Yfa53hDrLzodK6b4al9aEfvOqzsPloMKNFrrXOKQPRrZbgRCiTNYGuVvqkvexrMoAKhwgjFiR-U0qS0HZfDjOENNOvP_P6mecRLT=w1916-h1078-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPkpH3JY98oT1i0lbNbldmEYyFtknRaLbPf-C15FOVP_XTAqCTI7BBeScsHNgQDKL83PlHpPHYMn5CZQklDWuvnjCQQeuG7mnTLfzCz_c23gUUMyj8KVRwyTbEox0JhPrWK31sSYTzMPfucIr_DGdTy=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOjfuxmw-IpMRJv1LK0pQjCcn0U2ACW2is_gYvDj4A7UiyXXnn-hcJaDVItLvMKn1BhHgibD-2whMSW1V-1ptlg9a4cdGKaLh2zq0lPRLGtWQRETXp7vO0XOAMVHShEg7i_GA1jrb-WAlrWMnh7iG5T=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNeRyjzuF2guFUmhPhZ_s9jMVH-y3dezAyn7G0ojmjD1rSjrFd0FnGcXhXff5C6wW_bUyDp8yWVETkFxJnqzjwMccF1JpcguM69kt04kPre7A_hlQvyFIOjIZ83CReP2O8cP7Sgpv8U1uDGETAzr3Ti=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNdMZ-3tFWeZ20yXx3xt_QnaIAri2gn1DVoR9yBXaBKL0QEd1WexfwE5rO86WuNqhsjFF8dViq2Ss9hsE1x2OsHLpQK6qEx_KAD04Y9sFzsJ9PSsnxfrEtTRnEC79TMKG-hc_qAfmqeOh1goEPp7M0h=w1042-h1854-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2025-12-11",
    title: "Let's go see the ducks",
    description: "",
    location: { name: "Jardin d'essais, Alger", lat: 36.748464449140435, lng: 3.0763037089899274},
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMDq_8gh84mj51WO5Wj3sWOKlyoZW6L5xNc6Bd9jkBjZIrfvW4MqfZ8jgG2K-OrrgaaiSovpdNFua3c-1EPKPIlMlFv_B6LqEOZZ6_ekEVn8CkuFlH-TsbQIZvtlzfH9Y_WobbjJJoPyOFiNj6eAse2=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMG69g1tZIVxCR5lCtNNqJJYo52IOnIy499wWgdg5l9MdTRUlYzA8aNQylUGz5bYM6ApW9x8rT0P0x6x3rPDD-3h4Iie2Ry98i3ahmvEqpj4EWika_n6tPY2Fa5kCXZHF3RFZxy3Wj1i8QqyornGsa_=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPLlASBtQvSpOk5PAQLouXWMzziAMvKup4Gt7f9DWOC_M4o12NhHJjJRIHVe5Q5YIn7fSoTRK_47YpCBT5RP_IHUAM4x0Hx25ZYdIOahLhwEUdeIQwRYrr2xBDUBa4r6KymTiMrq6H42bQch98arOIh=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNUNcPsN6ez-QhNGgEXf0k9xkd_dX4VLkFR6McCOhChmCVrBqVhXM_ox9Oatqc_AymZiAZqBNfLbq1Nauh31fBDfHiHJBQGJrM29tKmqrURrEYSkScnYoD5Vt_kBg7PfFqLmm6OcvI98L2aLa29i4Nl=w1042-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczP5Ngv7UOEG05xI07t8vVeIqdgpqj_4033oWJX9NiQ6Zed3zyGst8CmL6C_undBdP_aRb9ZUoL3svzGRQ6HL_uSyChhJRM-GjaIxkb1j69O-F4QnGtORmJ6tC1eFK6ot6VXMYX4cBUsJJCMr5OrEYy8=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNKOnll5sT9rkMs-mD3QWan2BeopFuxAARd9-rq1Dy2nZxGP9zYrok8H65qLzQGKCQ_hSBAIMHGpjNy0ima_unaiDw3bAjzpiIUQDbqYpF0S-CLNvwvBybHhCLvlLthWR5RF9kgU52JBNJgMJWarP1a=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMMYS0eQT0rSOVw_jSKBc15MKXThcZf_dbjQUTxmJWfBT_BKx-ma_0G8Bbx0HM-qSEwWHX2jIY43v6KLfVRZEVfVOWgC49NmvobmS_D07tc4jeuYh2nVAGG4dz4nrfT5zGdbMQLUnqRvTINJAXElH-H=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOxy1ff5YE2TCHxhbVh6hAQjLuOOrrEuA1OYCD3d9HwVkf2pPvI0TjNglb7LGng8bV1kIx8ugesoYf86Na_ac-yVKjok-3owpWWtbZ-PcUmjTi7JYAPwevAGle0LcMp2TwurkN1Eo41ZNFQF9Wvgfpp=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNrNuUoz1XJXpwrJfNNshAEoRofV9oQPfOwEZST2YBaEksSE0OJ3Dd_t_FMDqZbWaQQgJcMFmgn9cUxqGoTIHjddG2Eh3FqpIFBXt18a6KxCUGAL_cTgkpHbE3nZQul0MmC8eIux1WkgDrw7TsV1KEV=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMlVXf0njgc7FuVgZmYYbAUYkt2mPrtOvBZ4JitsdxniWL-fr3fZGjf7secRiz1haMQdr07y_7Za5d0S9UmQ9mfKJXv9dE4wJtWubXe-pJ7Jkk7NnzwaOsgt6Or3TW3FQ1fwJq7dcd9UGCA4-CNyy7k=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN4Ur83nVWIoszl61iMNYAd23lMCPhhgYo6d07KpTXIyEpcUjco8Unx1D62ZhZ55EMr_eZ9LdsuUpK_yUbG4S_cJN9bxQLw7IrX2tMNLNaXHbZ-xA2sndBOwMlbRe15Jns8Wy6W8WkSJCibgENUdTxI=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOrlJP9U4_ZbdYWqiQFMC_JQO34kIw8HkRhDAuJn6_F0iqLNOmA7zJNPpwrfwCw07ApRlOTzCBsE7nxv92ojx_s3JNjl5tcCZ-vD0f3637rYn5m_4eJzxtTOS9AjWFgieT0AiCbPNmoRUtqaeDWFpVl=w1042-h1854-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2025-12-15",
    title: "Ptit dej",
    description: "",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPrtcv_M3gM6rwNd9wgCv5Bwby1bGB5rVA65MaLJsNZNZ6m-IkBgl9-sU9HvNuU-j_fCFLM_C2IdhXJjK2vID_C6YXGWiouNWJTz477AYKo7K9Pv1p8acgdmYkyeBWpCEoWFippVhThPCVkk-71tAgy=w1042-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOvjGRLxLC31-rRqDMAgSNA8f7mfHzjeWLV-Y23gEvkdiiwdQSU_q6BTIMX6BCNGuG7O0QKAODzzjjVaBnQBqWbqLVSo19FK_ALJTVrvOMjhKgNjy5-mmjU6W9vgKiD_AgfgHDHc5CFMDnlKXyi9gAm=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMJAyyhd7Bdh7ngcvGBoRVjiAWGbhaFCstwSVFXzAzpTN10VynqA2W-_kqvZKfYjjHOFWD-z6KcZiybo0iSgd5X35_hlhFv1tTValzhBN5H3Ih4u4-ZbKo5aX8lH2YOPSgomZKFgt0J4pr84B-rLOdb=w1042-h1854-s-no?authuser=0"
     
    ]
  } ,


{
    date: "2025-12-17",
    title: "Review du chocolat Moment Maqrout Ellouz (non rémunéré)",
    description: "",
    location: { name: "Marina Mall, Alger", lat: 36.74000714167303, lng: 3.143309797906855 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPtQX02kBYSRmz_05FQQrj77goiHwMtnibwdT3nr_6Bm-UHaWoZW4wIW7BxY1W7bVXM0i9bvDPzpgC7X9Abh92_ZvbuALeEZHIYL8qOwLcx7t2XHCByUEtEZJdvPZjrDyeacFAFkgpjqkXCki_JKK_S=w1042-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNRcjYj5K5_tKq37t6kaXUcSSnsFkoSGO4jc-tx-jPfwoGA-8MwK45FffZGCjhUbIdvjpPR_-l0-35B95eiuDx9fyaa8Xs-Fewhv-YXmgMZzjQfiml4ZEW9uPyzN62l9wFn5OYOKgbNW6-aPOR628X-=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPo29Cd6nnPcSuWPnpOfnXjMKiQyXTeT_v9ySdtW62Pnc1AKbgWPCzz1IQtgDz8Sb18VvzcvSuxj0t47xJ-wUBUhTF5KO_yOYR4i_O7Kw_WDiZHIym2s0efJEhYyZ6iiSwzTTHpZx1TnETMEdldmu5u=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczO0dMtQKxIjuufQt0LhUU3zH78Jn8BRkVp2skkkOQ-GmG4wspXOQcK9RTdsWycyJ6GMCm2PzAVGMNgb8ee7ssM1SPZ1oSCbizKCTzzmMqt5h9ayQwh7t8EllTYqT4w6DcFW-3islsvGLIUloDSLZaZG=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPi-vKvkWm6OO_YltiRJd77-ViSLtrLyiW5_m6CX-G0T1Q7hnPYKcTHvXKfw7jGLZnzXm1a1jwgwUHjJiQpdvutK9smPeo8y-h2D_7OrasRaNEHyNKj1YidT3LoA_Pn757rJ5ZtiLGz4JEt5osh0qvj=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMxYtST8Q-gKKSceXHjX8KMH1fpVu-9aChL3MJMiAu_ec5-gvktAvHHrjrSvZax-r92kLkoI0U-VYZKXsCpSAy6iEJkeljq5naOu6JkBixRsJr0t8QAOmQxpVQmrso-VW0NhNlKs5foZsLBj6y9Qz2i=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMA7eusQvtMxt19CZ9YW8YeR0UcWmR1pOuSdHcf7LqkfbBR2HX7eBJawdrAWWjl8D7velZwQM6fJzxMcDBjxG16c3Sa_ZQKJhwTBD3LZ_HTEqSH3au0wEYfb8GQrk5Qt6iQGF_HnYJTJ_YOUzvllqL3=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNydsGQhW0d8uMhXNBFd7zFIfzB62N9YY30UtD6lBJiVgqhmjnG0fKWO83ZdFt4kNjO8_2buyzvRqnaMG4jXLl0e8Q8xNDzJkKZvzhJKBQYtyYc40A7ow4qcXbGqVcXq8DieWt_0hSJYHWunWCxpLOo=w1042-h1854-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2025-12-18",
    title: "début des Vakonces d'hiver",
    description: "",
    location: { name: "Birkhadem, Alger", lat: 36.7538, lng: 3.0588 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOECHzECSAeBYtqUugH9t_DyuWF06T__PRnk1PmYaj2rO9bTWeTOQg_vYGYkCa4gvNY4_NfR7LG58ArgMrIF7heakW2vPN_gLLXHlwA1t7XrjtIWoMMa1btS0UriN-qEOb7-KsMjkxl_ht5nFQo1cIn=w1196-h672-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczM_NHvhtXsYaZTDnlhn5LMiexcNCTeYO_Vq5wdSd1gDbldYwaCcV6gTDNUO-50IgJ_BO1PL8em6DScaq3YBuN8Asv9gWTMY5Eq3YLQT9FWPxpxg9PDQodxHygKBW2NX-aPboatjGFQj3jdkuQqzYao3=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPjpil-yLtcISulNS1QxVL3hjJjY3i8rNmKQCoBBnM9BiidQKl3Y1GU2Q2j0hGbC3X8gjqOu926eNx65cCjc-br6IjvS-d6vcFOz18W8YQjtyBsNdUaHu3H9gOvGBHhUWL1gfnY4eNvKG2TthC4RWrs=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNRLgeqOmOZmBZMbCi9eJ5us84NRTo4bPuKJE7_XpXa5riUBpKsmvOEd9N6Vsxtg512KLA1B3fQq8sYn0j0XrUhE2jquHztLmG7ONEYFmq67IKBDnYyExy0_J9onFejqKMGns9TQj_GpIMoj5tLyAxe=w1042-h1854-s-no?authuser=0"
	  
     
    ]
  } ,

{
    date: "2025-12-23",
    title: "Back to the origins : Let's go to Blida",
    description: "Dans cet épisode : Yasmine retrouve le lycée où elle a étudié, récupéré une bague dans un endroit flippant ",
    location: { name: "Bab Errahba, Blida", lat: 36.488397644852775, lng: 2.8484407883882636 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczNvKFl_Gl0Si7klq6uRmnu9lGLoUwH9ci3_PZWe65Qen40pERsQNbRK335ZjNGOYQ5napUls7s2DdlT6rhw7Tf1wMboAJHy89iDU-2NasmJ5kntabcqIC-oz2R3JVgECOqCNjlAX_g_-AmFEgY_bW1L=w1042-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNEP5GZM-m5OkMFtZN7urG2u8hswtvpzllPyQx3ykl-ognS96QHOrgGC-16hQNsTQTN4aOxsWPxNXO52yZEF9t0pYEykBTVW4DVMTE5bwNvTJ8LQxUOSPJVw1611Dhzh8Y9iyOxJfZCLpwJtLvv9ZRH=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOorygqnvea0wfqmUdGjUX0uPkimnUK6aJ3R-1wogQ6y_xhVBctEXbj7ZlubzZHQx9Q6SLw_J9tRjscj-x-mfkczL9YR0ZVCiFZq9a32-2I5U_Ro4o6D7JttScaErFix2z7UFBTEHszBAiKxI-Yv_6J=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP8mplVb7scAauoedQwRC7sNdNB9EpBRaG5kh3SX8DYmiciOHb3Exq_UGxs4sK1ikmeHlfKQVAwddEjurHdzLjmOQV6finCI5uC7G2dqbUFh99E6cls-7zbScLXAhwuXwYTZsGd2N1JAuBLLP4w0zqk=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMIk54xZVhB0siwyJIhBGVrMZsL5oFyBr8_VhtYJXyzg9D9K62G65_LDQeRSNE1G3XQ-ssHNuTjEi8zg59WdLWMbZ4lOvZHpg0arRuWh237pWsji0LqzgiM9M5E8T9k7Pq_yjVjC5kBtbOimUTZT9Hh=w1042-h1854-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2025-12-27",
    title: "Choufa Day",
    description: "Finally nos familles se rencontrent ",
    location: { name: "Résidence la Belle Colline, Djnen Sfari", lat: 36.69979090237409, lng: 3.045510167222708 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczN_o5xUKHlfqVJPeoUKvPPLfjM7vb8W7fAIPvhsdcjXXF7twEYKX9X6YXqdbA4I0nn9wBe60O2QpMYLw7OteoGFYBRLDyhVcFoHgZKFGB7Gdd-b2ipjkSMOfpCPl_JPgENEmvx4tJRiDZF2bxveQa7j=w1280-h960-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMBu_DrEoACulhLD7HT52YTMF-1MtKrtSzPFVmJWOmtOVOIpN0Ds4AS_MwP_uzv71OlZ8j8jcMb3PjiJnMI7E2c8Py-_yk0R6jAs42c5k6IqiCrsBx0u98c5Kw5vroqwaY6E6h5Trwknzz3YA9HmdAM=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMCgjY7YiTdvBttviS91CBqA6EI8wbhZ8oyvBsOuQISAzphcx7TmrGd5zVDsbtuUdp5IG8cuEbcLkPX9WH-MU2h97JPVuUdymdKNBSa7dc8_llwx2rg8lhigxLXaltXpNUwsNtANju0ZPYCK2zcFS6U=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczO0KH26Kuqn4mxXIhqgKUlJjVAPx0QfeRMOslOpBX3jACNFHNTQNHYbz50tkqqCfVYf9vuKknXyFES14ErklrSvyYyZqd0sAIClIxOjGCaDMG2ngCiCDXTQHe4ipr919xixesRHr_uNbMNmfKaM_omN=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN_o5xUKHlfqVJPeoUKvPPLfjM7vb8W7fAIPvhsdcjXXF7twEYKX9X6YXqdbA4I0nn9wBe60O2QpMYLw7OteoGFYBRLDyhVcFoHgZKFGB7Gdd-b2ipjkSMOfpCPl_JPgENEmvx4tJRiDZF2bxveQa7j=w1280-h960-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPVTJWubj4gv3yfnaIiNy5tTRiEfOHKdySqqVHS_ILTrNB2VaiQQISlMpmDeUCYh0c0WTuMlNDl2_ciUQVPbsYgEpokgMu91XChVlMK_voOjuspoEbIZcuw7YFoFMPUaAtQsjIx920NexhU0jKgz1Nw=w1080-h810-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPP43qwcSKZiM7O4JF9A8GU23To45leAo3rJ4F6craAkJjEIfon_ypJrkPwstZhbk690_GzlgQn-h1_oNyETq_-IIX8prUD8eWrmkYNnEpmStY6wS4qUCSa74dNtOk0is7ddwL8HRV-kx1Y-576mG4n=w1280-h960-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP-TevF4pJR4sKO1wVZzTRNxcYOZ8aLgzkyZV9vIg-cX4CP00Ljjol0C5hji6XH8ACm5I9p8QyyaEXKBcTJkYIx2h0xkzicl9EKvC0axOvmOe6j62s2sQYv_OkShtKSGFF2a8n5DDNG6efKWXHm_U5B=w810-h1080-s-no?authuser=0"
	  
     
    ]
  } ,

{
    date: "2025-12-31",
    title: "Last date of the year",
    description: "",
    location: { name: "Ferme Montebello,Sidi Rached, Tipaza", lat: 36.56684109132703, lng: 2.562027297899312}, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOn7uRBnepAskvaKwSMOOZTOuLsAL1OJZS7MP3Z7QAs02RbhNRMscXkcnW_g1uaE2G42SZcdYj-vBbw2v_gVzGWRZadqH2d32l_CecXWwYKKIh-KlQTmwVpuE-dY2Hr376Ok57xfzgQKqOQsqx6c5Dg=w1916-h1078-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczN_Cv_reJXprgWDfGCJExwAzCX-cjM9Ma9aZnB7f2rV7yFI6-l44B1p9HvZRn5etzJtoxWvI2LRsoZrhEGSP1O_MiiG9jLbPiTPv1XAbuSEVx-OTiLTJF8dbvd7K6rU1YzSOOE1x4lpRMOE-ZjcsMKx=w1916-h1078-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN0heh5KiJ3hh4sjsaDuHUPeXEdAJEyXFp1dtntubeDfuFWVgzG9fC6rJt_Zxq0K-U63lJzncZJfhJ-U1c7oGClrjt_BnwV0kY8IDElNIqAPAlXlISUpZUedskDUMAXBIGdPvsHO0mGlp0UPSdreVzh=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMz_CepnCaNc5sdPkdTAXSBpxxYMWcJYoomA8a-_QfGxBy_vCvPl9rH5UOAU3MnnRgAWTV9waLwUPNmRhgAZF8X0sO6wabSpxXvsOvZfreqnp87wkk-uUdqhZw4LVw2YCgDYJg4-xf3owKNAjmUsSqv=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPuNCe0Hk5O9lPge1R-MmkDCZvB7QcCqu4gats1jQb9nGfWvOstNK4YRYXE2_3yRweqvcJdmGZ0cvQS22KjfEw0OmGhLcvBbCN1ZaVNfiZU8-IgPSAyd_XndURjg3EOhx_HWdQKvYNuMZqQe6-V8QBF=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPbEeT3ISEjxFHe3om_Td9pzHWSi2iAWF4mdP9fqlLsI8teNZJ24iWXT_abpLGL8bm98aRay_-Zx4tWm7UKY8njjF-8vCyGox6GL2mj0mkYBV96eD8LfIKxfUs0-0mezw7lczVcmqe3y2zDJvdjJdqg=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPH9Upvr8JrZYeksCdb8TVGxEqeIntD1V-tZX4IDBDTQj78AzAjJcRr-5Bq_oPcWsIKmqaU3FDsTSwxnVDjLG2xboMSfpwHKGgAte3EHIsMt3aaMoydDr2bhKgRZawMUwE7AVZvohEi997zvHOPCUGD=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNRIyA8nxR9HhkMRmxaYKPIK6cAOSzwdzRPJVqn_a76clP-L9nyZA9YpkWg_dlD9hKMjVMgmZWUxbU5y0Ye9h6x4ed9cIoB7s4XaQhVXytMZHyhpreqS_kBjiDA9BhSZJpZiUN6Iwz74pPhH_VfPH2j=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNNvJbT8U2Luc2HesB_k4IRAEkMLf0TqHwhQslzgxnDBC9hgsdepZrT_EzvQmwNN348T_w-5iRkF_ekWM49gbn49zFW2_XlckAvRLoJKzC_fuSl-Dj1gWcXxYQ3Cavbn3L_rIOfNGP6yv0OVdFFkQN5=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPNMWWW5G0OuTeUiE-JKTGcuiOVVBZxPhvgMHhk7Lvr3mK63O-CdP0iUPQwx5ougILvhuR4OgifUObgH3rCKcvUw3vkKi1HzzJQb9-w0HXPcN8Z1CblZr4nOnOhtRsm3Fcp_m3G4psXl-9v4y6EX6rL=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOhetp4wV8rP8Kb-ttsyL7F6Hi6hHJ-XAXQo914YphFcNghHv1pKeOn4bJZTLXU3eO9WIBclU_-_WDhUc1rfB770JQNSxkFsqqvN1xXo-A17hR7BXuhoI9I4F_ule17i_a8uES0uwhjR7KMWBaetJ-M=w1042-h1854-s-no?authuser=0"
	  
     
    ]
  } ,
{
    date: "2026-01-07",
    title: "1er date de l'année 2026 : guess where ?",
    description: "Une année 2026 qui sera chargée en (heureux) évenements",
    location: { name: "Marina Mall,Alger", lat: 36.74000714167303, lng: 3.143309797906855 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPqwIzFGQ8W_0-0F0X9HlBHbNAG_rGa-arzDvw-LlOK7_mPrL7ljaOdAhScTibJlkASFkkStOPDkqHwFCTjhyWpoiB-9sao_uQ5hNJGkL11SGOXk1sgljjgE1ogsazkiqoS5_pFmtls4tkAg3VZQZB6=w1916-h1438-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczODsotKZN-is0hdNyezdz4Ncrv3WYK9GUvh4NNazCNNd_o0WsTG2F2liziK-B8kxrTXCCFzXshCZT7RcUDJlfAyECoRHcEfWJzbCor-xDhJ1Wh9szDlibuAPElpVaDoueWmxDFAQ3fQdZBF_YBftryA=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP-b_l0XDb82VzuVau5gSrwrEyp8E64NF2tfi2d81JD-CHuFyxmhBZmw5ProJsUbGMiBcfV4y03DHgqN_EccgnCS9Gxi0xGH_sAUIBXTtzurp8Otb3Sf0IjcJjkH45uwpkvdAkdpz2PmZBNXlQsNSNs=w1916-h1078-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMRtBDvk9F8e1ed2Bg42YK08WGEHiCKBIvkM6t2kNgx0phX-wDF70InSJ4advzSSvT8MePNgbxQrZ4ysufmvQrurpDsRo-tN0L_zedVfiAnajco-zKQsSpKBoNpEBN0KQWtVkdLDrrsdL6YGZYxP4SJ=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNDi28pL4Y9qGU5E4OT1RnP3zuqS9Y6qR7Llrgm-KdABXzF3_bp-Ss2RdMUFhPgkDn-JIsa5OvRoIoNicq4JJBM4tDjpHJSTEz8xGeuC2CDPt5EJdb_Cst0UEUVJtfti64jaD_JhBxr0V93COQQoHBf=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczODK7kyG0IdQlPdTfeTWNGvG_8-GLlgU1LLBVTfM4mmyPsVjji_42qTN-e_o5mgW7m9INulXEwl-IOh5tlrCD1jsQnzhmoPjNFH94wU6_W6J2NPAC2T4VxE1my_7xpcfl6IZdp1uOSIghN39zjwPate=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM4BpVQVKYvQvLqbcMSIDQToZzBGFPU-2NkMlRssUPui4PC9OXxvVFchaeNH7Fln8q74d3BiOVJVrX24Cb29gex8GRJdrwykHqlePvKHuM1FH7Wa_xxBdROdcj5SZznX6--vQGQqF4rnVz7Gs42eOZZ=w1916-h1078-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOXgcD3HJ9IMDSAc8usBA5O1rTEiHczVqNXiW2eEP5G57Ha5nM4qHWWxgFuam8JhChHnEMqjY0t_ukwMcfGXqJ4yYxNBDbpDG4Qd7dTo85Uc-Pz5aNJJ33aGzJ8R7NJutL7ch-uIx5aowtg7XHRhOe0=w1916-h1078-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNy9YZIrGT6YPbbftYWaShuFgDSkD4LRS_81MT6waNsDyRlg0aoGr7akysJSj4PlKPY0FURAUJZn3BkqYRUZHgb_WqjPewxEAOyqyom-6dz2sUqWPUiy4jdua6ibbLWiZ98UsnaOONuFDPbBueQPqAg=w1916-h1078-s-no?authuser=0",
     "https://lh3.googleusercontent.com/pw/AP1GczMjRTsOvfRcTx_Zqz3E1NJUFdJJNRLbK3xirt_ZodF18Jy7UDSen1jLCG0nMJ9Dk5QLWhRJuG4jT1GqqF1uSGy8pwDptl5UFCUjCDTRyP3RPWGtGAY1AiTgLdmLwhDYJ4U4Xp1bJ9HzS6O7qBe3aN8r=w1390-h1854-s-no?authuser=0"
    ]
  } ,

{
    date: "2026-01-11",
    title: "1st Ptit déj of the year",
    description: "",
    location: { name: "la buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOiwLtZ5MQM0_zWfxWl1r7TI2C1MLUj6DqAVtSoYhJcykFNSii7FyZFJrMbofxkBjDi8j32zfGBsPIQzeziK7ZZzCzHix5lnuLZjICzlsLVKpTWDAquqI_qbmdo8eAZsvhO3GajZIAeX484SGO2m-mj=w1196-h1594-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPPAuZXO86RWDmU1QqlewKY6Gak9CUYxyi-vuFEZA0XHXkrInkEyvjMupmdHIJ3YohhmiQkwg07nzhr_4qO5ffBUTzyQw1-lM3cTvyKl_eXFnS7LYuLem2QzaZgrDJOQgao4EpVN4IOcthu4q0H5Lix=w1196-h672-s-no?authuser=0"
     
    ]
  } ,





{
    date: "2026-01-14",
    title: "Date n°40 : Are you kidding me ? XD",
    description: "'....washbik m3a Ardis Menad ???'",
    location: { name: "Marina Mall, Alger", lat: 36.74000714167303, lng: 3.143309797906855 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMBrzmSujPUWxuijm8OJPR6YEORxoVbGPQc7_NV54UuM5H8jlsFxisFWZg4Un3iVMj9aXDkgJno811OvPogVI4V0hTLN_XVav8NBeIBMnVtqk_Ycsa57D3gyG4lYtw_tzZ4uHVTwpSUnw28ImNeb0VC=w1042-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNb5393E3EjXQJQmRJjxDQaUOgUqdCxdyic4LAqU2f8ff8np0k0KfhScimXCIN0GNJMQR5PaZ-tTkzU0QRWBtRduZcK84iKOTogD4tdcH9f9J6Lbjjmy7nmkURd0T5ODGIL-SYLTQJ9hfuOx_kIFLnk=w1916-h1078-s-no?authuser=0",
     "https://lh3.googleusercontent.com/pw/AP1GczNf9b16OnyAutaezj-v5p9M_MnO8DjJ2Z_nCM_et9hm_bF0st7Q6jKFnxn8agz_PTlY9_T9Q-t7ZLXsir4Id5eBpHF4iD4x9qdnzPYMMOdC9WYmF1_XyeXXcEEpKIIRZciZqNdviQ6wyqu_cuftVaqm=w1390-h1854-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczMaT0JvLcrydjNviL2dtXebYUAYUfJI9mRFai-ropouL9Hqhv-H7PNAJn8hNrRVwKHirPh53Vj7LJ8h54f28EZWncm5UgLy2myb7grOGF_Tnr3TBT1AdD9YkkJ8bVUrvEZY9__sSt-1SLjgGryhkDE7=w1916-h1078-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczMpgo3Iohy21RegITd98wu8QnLxq2EWLy-UrwqnuDITZEn2AJ6M0tjuFiCg5SvJC2V_pM94BDskwUO2i_tzlAt9_EcLAZ42csrTUm0RlfjlD1LkobdW_uILEjM-CCWH8TtRhtY30EkW1UJcFy33JDW8=w1916-h1078-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczMHk1mbSSmgklFDpV1czv0hoVIct-JcKI19viP0dOfZgzTagp-48pHNzxwyS4TOZyC_Yr3v-7wEQPf4ibzta9ohjQ9hZmhA-U7OeO2RJ5fEWMq8ToAGnTKhsn4XD4EBBMPbSTnqeeeISelsDeJ18mbk=w1916-h1438-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczP0NmuKhOywbWCyoh_hmW8BfYRyFropK6HdfyxDNVilqHPHHgKnIiQKjNm2xhPItf45EriGNsJvQk5AlgTzhMDU7Rj7eZiun2VTm6IJ83catPa1SeGovjPNCHdqtZFfrBXPfEira9r6lkAvFfwvqC0w=w1042-h1854-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczNbGvSDwLerfiVPs438s7CATJBXj7M4dZ2AxpDwuYLmdnt4kmvEHqt1Quzq39fAQUp03iFFUioHvflx3O3ScYptlwK2i5wEcJb852ETlcQax1d0rw1iGlEv6Vozj3oUvQoaFRpyeNXITR76z14Z_9NN=w1916-h1078-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczPkjxmXQIyYkHhYUYcsMfe1WZZJWoUMvAA9xZXogQL9hffh2485ds2JOHqudszQ5q0HO7VVO9y27_EUNg0gwowNd_roZQsrCfo4SEUIDcbNiOVQ434npJqwlSKsZPU47flH8s8LpKJZUPkKPrcN9-mr=w1390-h1854-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczM9yBTSyF8DdZlkRMNAyugwzrK-1IW6ztPsUAJBe0U2f5ZQv9i_fYfHG85bfcQ3UNiLehfq6zXt_lHvo2Hvkhva5LOcoWbErViAccKFE3BcN0FHBBOIBafZMdgQg6H7-CAAd3b9bG0KzTlGMZ5r1LdK=w1390-h1854-s-no?authuser=0"
    ]
  } ,

{
    date: "2026-01-18",
    title: "el desayuno de Domingo",
    description: "",
    location: { name: "la buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMBfWqz0wBaSveKX0xgX_ujlu2GHX4XI0M5D9T4f-S8C2HkbcCXmGHFEPboMrBmfi12d4qpwU2D0fkp8mqTwI-dpZepZakZ7HhajLjk6bkz5N00L-aC_cMyCVg7tuDjEuR68QncIp6gbaR_8kseloq9=w1042-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNfJa7XE7y1vdcR3EDsDfl5bjH57li_bLwcoM50IqTJxi3IcA6DORaM8tSPFkXdE-e8QlxbrKIskEDeuRci27Ho82RoMSgHiYeYtk0QoD1lL21snmLvm7aAOxAeHdwnhev5e9lk79DTh8rDeHnILkbf=w1196-h898-s-no?authuser=0"
     
    ]
  } ,
{
    date: "2026-01-21",
    title: "Oh come on !",
    description: "in this episode : a tutorial on how to park a car ",
    location: { name: "Marina Mall, Alger", lat: 36.74000714167303, lng: 3.143309797906855 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM2rBbei-zSZ9Vha8vC8zFs5S4-cFq8PJ4VhMDuoO0BecfS164uAzifiELw7dQCcVEZ-7cfZZ5vFOvM5-EMkk_XYPS1Y7r8jhvnYf1N_vy3U5_tF0W1bsYaQ8OexK5kY6L8dPe0xwP9M7vtUuT_j20W=w1390-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPwdnLEwaO2RQV85E5Srymt9T03NKwss6jWasp3rVB5TpSl7PrwrFbJkzsOB28dlu4fTDpDXcECSz6qGCaZVT_Ahlu6tpoC4MaiQDbHdNsyATsw8dIr5QpQGzQF7YP_MJvMv1Gyq0yPp8WvYmVz3vnH=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP6sP2SM3qmF5655uRNbBHR1sV5tccruOvdawa-6KMqNDOCVZbOUdF-ELc_tOkdvGs565MQGUS51fciJ56US1D3WzY870H5cnLcXLXUZGwVJYAS-HZ40P1257A14mEPhckGiO8icQT7phx0R_uHHmud=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMVvGZKSVa-NjhhAhtW3uB-N_vngRbUZDNpJN4Pon7dsF-PXj56ULoGlKhBu53SKXfCw-Bvny0-DWTsPxzbajTllNNQ2ePBFNc9lpuzQ5WrYOX9zQBw5t4cEjNI2cy9rYWbahByOClRIoGpdX8yDNO6=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPv0zZRBqKLen8R_vwMYzEaFtBObTeEuw5IvZbKeIIRj_uuj4z8V4TgZ4MG32qMWvtxPJmLMUJY5BSWvAP0c75GMD_U_PNUPPvKwLZFymEPPaJdKStf3vvgU4Eq0gTogg45sWO_P7va6HJxId4mUzZ3=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMbU3VqdK7v6cbBKXdaKt_I6BZWJIkOBKc1IiDcx-Bd6fpo0xUsFfZDw4UTo3jFdh9SGYAXxbJu5tukWdnCFSrFB6Fd9f_YN5bzGzzB2CpSCP5SisQFsYtkvK1yr2x_yQIvKmpj56071TgUF6g1714D=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOe4QejnMYOerSrE5KRhFe9N0h0fGsv0Mt2B8ykfEV6838CkPSjVmCOP1qVBWBswtO5qCDhPPU4SII0vpDWFYTPM11bILEGWiH2DKAUQlpL7101Sf7Bk6gCxuKIobdFxftJ4AUBQnQ6O6DU-cj5kNB3=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM4i0sk-J-JGY5euKNkrLSnsBhCzp94KDBjOLwhe2rQIwGoyUuacf7iHxihFfzYzKH0b2GyGQ0d_XgRz6EBLlF1pQW8R2hAMHrsxAkdeHf1N-mILLoRsQQLuDAysGbaixzkZiAo93Rm43kEXPsmqHj9=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMCg-2jaUU5iMTEjwPM0eZsvcVgVkLW1-zYhmmBE0wK3my7AzHg5rgKNeDFICwoMigFa35J_ClKHVws5-X50mQHFkUrphCarzNaPY4ahSvjbKs3LdbeppdxFp60995zqnblOzvNpKhyn1awW8_iud0v=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM8Ny-g7z61liEU_jcwss1YvevczQTuTHT5OWe6aNlhUK2-zZW41drCI327lOgoBaPH6VGpGPcIqlT4P_whibw8Q_Z-PAyfFJurDHQLeFUI8zQ7ndjBmAQJHYP0YJkZe7s4T6xsneIcTMliAbz_L_4Y=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPAC_Aku3sYlRGT5wBrSkpzaxcJCkPa2PZmtQ_wIua3fbH0XEPSvrwZARG-LhuyWYSmPBD1T6uhjt9nbi5jdztc7wHgROcBspntuRdGgO9DAlnsNvyAkHdUwkZp01QOth6IVIMEOu75KMwGfcOwoYKe=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOOGVB1WXyY1XDmaghF2dYugPVeCUHGjsx2cu-TNvRMoyqa0rfy5qnvYk4FlT6G5d4G_u1Ki397eUfbObDqksc_GjQKMB-RVdLXgoz67Oq4ebj-6PSNO0IY-eDpkSAs6_WsE2n48rZrscHtSKAkeDhq=w1916-h1438-s-no?authuser=0",
     "https://lh3.googleusercontent.com/pw/AP1GczMRuMliZebFroU8pbM3di3o5fpL2UUddqxt2rKBvGTnbD7t22WUyxbI-KC7DJaigm6OzVXAJ-7CxeRZHviGXSRPXyCXb9Sk-2o_u0pPzUH7E_5xga_ROwAhWJMsKzMHoR5w9Cc2_SS8I1dLAwWfUcHJ=w1196-h1594-s-no?authuser=0"
    ]
  } ,


{
    date: "2026-01-22",
    title: "Borgir (horrible) chez Pepper",
    description: "",
    location: { name: "Sidji Yaya, Alger", lat: 36.738805421343535, lng: 3.033386565377242 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOOjdxAzWRnbmd8M6ZLQSorkyS7TCGhiQtPIEulprHrZBrohg9Ds4OyBbuGjq0QVG4Pk3BJIYxZB8OL0I1Dyjac7EbSWp1ORpewawPkcBbNVay3wV8kWe815lv1XUrw6lhtqSGxOubxG2lx4K0GQ7v2fA=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMk3Yh4yEzT2_9FeB5EwJn-fopNd066RyuTS-OS5QhGWAlv9p5GUm4Aqm6yFfm5Aog11vFn4Ci2KeoNx1N1LaTaynfDAqtNsByU9brNiFbSL0jkq5PwUp-OI5DSpVlJmzZ_TutGGZ2PoYF2tA-WK3-icQ=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczO-cLQuCq7KQyRGNrIhP2fJdAkJX-FZ3ndaMyeq-tGWNg7GXDllkV91GU00IihbeNS95x7aruo4o-9t6yEY_1skaxa8NsuUaHwRIl5LVRXupTI_VJ32HFw0kHrTeVMdQ4j4tmolChFoU4Uj_iMDN6YFaA=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMC1jikGiAcC3IlJAgYvbzy1usax1YhW4eX_Lyaq4tWKtdFr0FQ_t4sqF2P8_Vrfs8L0XJ3BJl3VtVzERpilpTzgdAJgRdVD1xn76y3I5RejNlBV9LuI8R3F5cXFXiSn6qhnsll2mz0hJ6aKrxjgvcbbw=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPYj3Dcbw7LdyvxXdPfcPxECU6HwXSj6qaC44mExFLEusF5fxWg5NYctEi52IGUaghGtD8UoJ2NESVRuAp_HBYPALSTjlv0QlNtp59FV5azX3WoP0PZ9cM0pgE4eRertfXTArYA5IMOfrzlXkjInoh6Yw=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN-S0bwl7qwcEmJ_4qXTSVTTuqaD_2mYIcuZFp3sJWFpYFSRW5g2MbUS5zcY2TKQ7-XTFBrhnrPS__-3qoI2Pz9T_Urd6XskPFUlLxM1b3cbCIlRds10YKXKWc0r6-Mca31t3WNcArTonLIXSW1QHJrrw=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM_0rZc_1f_7FGszeBgSiXdUb5m3qbSR7_w93F3e6VKNIIi0k0rEZUN_V1vZ4Fj6eqc7H1RFf7QNvoUOoOlhHMfWMEDYhUu48eSQCNV9sYMppfGCZMh3_gaYaGRwOSgzd8YfLxcrVw1pZqlyeTQKXqJ=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNJ9ctKwDaax8WYRK-OMmhfaZeFXN-xImAOXb-Vc_hCRgfjhex2GN_8qLzntb9e8qxkdBFAtgslXsYWXQrBcTH0qM-kf6BU9XJYNG4jIR4Bb6hMDJ0yh3LBfO9_Po5l8VjT7NnL-OI12VYCR6OugC86=w1196-h898-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-01-24",
    title: "On va déposer quelques CV à la foire, pré-inscription pour une formation chez Code2013 ...",
    description: "....then let's go to Yass favourite place, (also 1er date un Samedi ?",
    location: { name: "Safex, Alger", lat: 36.73452742891914, lng: 3.1524335114007096 },  
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMxB_aSXg9-_a_kmHXu6m5lDUgX5HKgNdiCjKe9lb3Km3M225EXpNSDfEh3a0OXIBCqkuHLin3ouWRYZfj_UQIhbrTBXetJBJ-ogPpMf1dnB_LIfiv1wBCa6i7JJlwehFupKvz2Fgq49zVMUkceyNLS=w1196-h1594-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOzmFJBSfun_dyAykvxkrBd8JWxAG0Brz_tXtJn5U2m5zEJBi4KGn32JutKfzycyGc7mPiPj9gT_JIGadaZ3E1mS7_iNcWnU2M5zHdvVRWLBHss6OPK8UQaoX5WjeOajoF80O6H3BKsvfeEjTJO7cwJ=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPSD7aZJ2-CBb39B4Xhdps3PoKB77r5U_isbJSGgAV7ZrltAlZkgb_SyVUJn3_al8BHgYgC-g8DBFUG9DkTQVPp4Yw2JmhJEMDJDMc7XaAgKoVaBa2NNnxgSrmwD2rMqYa1Pupy6sx9grNUafbpCYbqqg=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNQxza5OLHkuhBL9ChUPkMYOS3Mp6lIXMazR1by2lTsus2IhdcfCCaIibkEFfADQ8DLQtgIPmG98woJwZWANDqtGedaBmVWFFBc0hnqDUHTGXe70WhlGZLgxbttPOwDs94RbYFcBRbzUKcvYcwLhvSpwg=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOhIi0iJvKfOsXhH2uzIcnACrFF5fPCYP-S386RegeuNZS8ouv3fkY-tGvl80eOV0sfbb6ahPwfvMnY5AzlmWcVuwyEFzYYmQAVs6skQ5S0sD8kxuMzauPtAVb32HUAprxj-vpoImsxoh2q6n1w-qzJ-A=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMVdH_OwUSmw3tEi6XpKCJribg5QcAaZ0cwxAjMnCp9OrEXw5CQpbjUWAaNcdaFLwthzRsDazNZXah_sfbZzw_zE1gERzGobdqBiL-0m1VXd1nuLH_lMjXbBX7NRMrrRKC0KglsHp_AdeDjP-WrUhG4Sw=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOKL3zskeynbyvH0oXFKjBgMo49I8PwTySTt4wkJ0EsgotjjL76ycVteMzTSd_nes5HxwL7Y1cxVbY1M-KPPWKqTVFB4_5ZaidqUFeL41SVfENakXteBfqNkuT2sit2fwnf-UQzxNUH6aA579Jf8LUg-w=w1390-h1854-s-no?authuser=0"
     
    ]
  } ,
{
    date: "2026-01-26",
    title: "Ptit dej bel qaada",
    description: "",
    location: { name: "la buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPCFFtDCR85RxBuMzVTCZaHm9WLSjnCc3WveNBbC3S47qi7jq-Ji7S9kHTaduX3YLb1PHVmEmtRAjF2BsDxyDdi2LT5BF9POi1BNV2iR9K_RfLhzltCa7eSXE1Gj7Pq6Dc8FemoC5pkcd_DqTHmUktr=w1042-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMtqXWRsr6X3eAm5llGO-vsuSy2eOK7q3xjGy6TNcZeK0m6DPnBqOKHQp8rLlEdZ3cINuCms9i9HGfNJA2ZiJ8Gq16dS0n1wl3F8XSKBRnqLnMG2iI22yNfs0qwy2fwtgFG1WXxb1oMaGT51KDL2m7g=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM4bRK3dxzVFk7uhhfc3t9xUlE3dM68-4FcjtIzwDHaQ7NsNLD5szEZ45CFkagcuRad7ICi4bI361h9L1h5pT16xIuru5e7wG-I9OjORHrmnk1cBGVx6wngEkbAtIlqVjQ3AZihW9hrMW-tA9lHfLQo=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOsbashlJex2TqcFZNe8F4ysiObxVbMk6YSNYAnnuG29e29yrQ5pGmMAcmr9Cx9ujDnRqUuo1NqRtk2anshHJSK86sw-444GgUzeTZ0CDPLN6yP2x6wf9tZZ2XLjBZ4cLg9mkLaIfV-SEye4zRAttsA=w1196-h898-s-no?authuser=0"
     
    ]
  } ,
{
    date: "2026-02-01",
    title: "Aprés le petit-dej let's try Déjeuner 3and la Buvette",
    description: "au menu frites omelette",
    location: { name: "la buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczNKEyBjRfbLQ7rmtAWX7ZlCVbXX1YnEdb3Je5BE5o21idcj4wXSxWsL80zc-zXoRLC7mXv0xzD00Ayf-FEpav5h4knWLZFIsvu3GDcq8K1agbHy2b6TEqUkJXkoJAilsy6o3qpYRwwtFB5-J-PBDwPE=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPlvNyrKTQ2eT4gFc5-Ul2SHzbiNIWBSEKJeD65VC56mYRyD7h7yHD5009hyMgfH7RTtuc1EZHdB4eurUHQisN6UCUGmPFzd1n-EvB2-DqIXzPX2pc76FxA7LDzo_phrEGMXbiQnNwl_GGTveVWo2Y5=w1196-h1594-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-02-04",
    title: "Naan Time",
    description: "",
    location: { name: "Cheraga, Alger", lat: 36.76714005186158, lng: 2.959915926988183 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOsKwQvmIzfk2hh2W0hTOqGFRes24KQMIq9EDnwxw3MzmckKe8F0puPiLCeBlGcYe4B79b1KpDtphReJiO0QGT8dJBV91mwe9ut0zfaJTEvLIIY0T-IPuGLtHUptKQUADg-4aPHlmHL5lsnxakd1Jfr=w1390-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOq80xtoM_4UtuUN6sMw2Tcf9X_FO31aY2GqKeTmBUR4-tdvlhxUvoc1SovVjU9VxFGfr-5Pr4AqMPvCeWnMIW-HFzuAS4ys_KYKcCxNWGl2YhOUd4u97pj6-bV1Ef6JiZCY4r8r3hHSC9mUfRRiI2g=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPwOBp0Zsmw2riOeESaFG7hwFFKRNLXlQ89eS4UuUPuEh-Ym_wXYq5wnHJnVkyqc7qryzLeL9EpdUIgJLPEKTkU2pZlxlsaUzAA3e7rxNyEXWw_E8eSOZwd90l5xziqjYJ4Ap-fbBQaJNZSA93dgwl9=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPANgXfOBzOTA5CMimJ_1rt-NjOmqlr_ZE7Ftq-XzZrLZIrnnWOQs3mmPZ9m2NkONcFvZruovfbPwAy704h8axApfy2ZSwDlf7rW3u5JolmWh7MW4QKhhMeRBhaRF7LtJs7WyTMgm-ELFRa9LaNcIti=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPGLI87pCJKGxpMhqfX9Xnufu0UG6dO84kkU6c0W9ZcKup00mpXnvxmh1RXQ1GukY-OhajdyklJNpvKO_CCAHIM_haZ6SaQk_oi_ssxqqUjxjqHioc0RRaxsAGXWqYn86helOWOkWaoHSaFC9qbD0kN=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPq1J2qMvdud7bDvLSmPEAS3JCi-4qNcUGnCRt2wubaTGeReB37p5btkNv0YqiZO0v7ON6zZjRFjy3bSkPgmpg6NE4P9dXQzTuhHFIKbziBUdi6mftVhoRvfeSq4eZ1cYC3ULUifc5ppItt2G8Pnbse=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOfwrxZqy9tkX87WmB6Mm3wy2sluZJPUUcEJIPfk-51zy3KhTKne3Dq3Pq7iAKAR1gvnh3ZqxxqWN9Eugdy7AA1p_Xx8jmMN5kvTGIhTGyMSUbzDBGtyhTSw6a-mkeeoJUcNIw4CBsxZSd47Eabfiai=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM71boJ2wMTbEYh8r_txhTOJXj3an3e-B9OXWLSmLzsTR7MYQm_hSICP0RStAJopI8y3SJDddHGCUCK1qm8D1Sh1u0ZiEstLA7DEnuSqkZZ09LazR09eq29bSX9yFDc82pZOKI_-RNji0zJVtTWSQ00=w1916-h1438-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-02-05",
    title: "Uncle Buns",
    description: "",
    location: { name: "Les sources, Alger", lat: 36.73428493808473, lng: 3.06134593838889 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOoSxJhwGsqEhoGJu_WaW7b-Q8CXXUjaNdru-cvSvJeUI6KkVhMtvvnoy4DSjs3Mo7TZhYwn2WbzHEkfsV95q0quwho0imIQHjFfoqJLAeahfjQN2D8tJ14iAEeikPBxqIqjy4x6_X3AecW1brWohei=w1916-h1438-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOvpxUjb574BaD3PJAxRfbu8uaTmRnd2-oFa5flDY40R18CemYFTY4Z-kPdFppfLPkbCdKKfmQlzNErxF3VlxSEi_V_k6rLLzQv1jcL8PLumlNTA7Nb5vVJmxWaiGVOPEgUsajaA_PH31AQz5EsACsU=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMx35ZFnQH32nYzMw7luHXsgVyq-LpLQ1XScZFwCNjyEUGzYpz3eh0lqRvGHfwpXCNrH2ZyAH8yaRWm9fjrFkcYtsZ6B4GB8LsQX1FxkHqDeyWWYhSWHKWclrqytldOv81ncyt_CGawi_cUX67JrHei=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOMZig063oxcuwCLbgUyCDucJ4hG6LvVPbuwYeHuTySRi4-drh9Q8b6XkCXkTQFpcEUa39ue8Xmp6KNlxPIqKEq9NKj7BknZTCXMhgxP9aAtAChmgL0gLlQd5FcSDqm3SdDyQEpYs4ZITgpwl1CUU95=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOZQq33Lh8bHCWRevHoru_5WCciZ6hvusVufmK6AclcVzl2h3ljgVtRLOuU2DWXjD6fA_P4nWhDQgh6P1Lxla1ftVE4iYfN0Ea7t5Vypr-7JbYKpBbbO_JuCFer9vl10eCXmn0Z2D4aMgxz-rshK4DD=w1390-h1854-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-02-09",
    title: "AMAZING MILESTONE : Date 50",
    description: "Nos deux amoureux n'en croivent pas leurs yeux : but yes(mine) it's real",
    location: { name: "Said Hamdine, Alger", lat: 36.7538, lng: 3.0588 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczP8-KpvCZ7bIyDi7JbMGwWbgHL4lE5kwgyx7hBWRo_NaBVB0petQaIfT7WbVZ2-qLgmmMXbO50jbSV8wBVUx002K1yXtLNza5Jioil6kEHWXV3AYgiKCAGkT2H0HDpH1Etm_5sh0G3vg4zACcmqFGiZ=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczM1gDEU89ksA_8ecj1OncVsdVFoDBArACwANYRetmDM_cGFvz7z6wLUbn3vzx3G3DfBaVdj9QqX-3rsbevLif2yA3K9J_hYdsBCgZJAYHNCF89Lf_CR2teWiQLeesYqgqwXChVVplzolhCQT_M6Pz_M=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMqlkNGhPzuJqmIcqeVGBpvr9wGTnvRJmPuThsj5ulVTJUkibkRK8M9AqclrkBiqVsS7mni9YDWiRKLtmA96AssLRxHeu5yd4_KYgkqFm_coMpLSm2AB4ylOtZ2U2cK8ODPn-6ZrbmscRjbfmPuSSHP=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMz-UXQVKwgdpQJP0qFf0pdX1307W95zQA0UhQ55UspYbc-RssIdPBdN_WSKV7tcmKzC0c3yrjOLD6kRNWu15Bvz6TjCrdwCyuT_6AdVTxwRv9PaV_dZOa0uuSos1Nzz5VvrHx5M5_BSnD0n4tvqflu=w1196-h898-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-02-11",
    title: "it's been a long time let's get back to Jardin d'essais",
    description: "Durant cet épisode Yasmine installe Snapchat sur le téléphone de Menad",
    location: { name: "Jardin d'essais, Alger", lat: 36.748464449140435, lng: 3.0763037089899274 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPfpp781cIObvqddCnONQTQpLhCaWBJOK5pGM6tgnTHVFcSWq2PBju4MTHLYwKyuep_h0heQw9Wj2FqMdCuPWUGJfozPSJjER-BzP1OegF0O0k7xngdy7yxS2L_UHv_ZRnOyXf0y3u1y11nMWC088oT=w1196-h1594-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczO9VwoEs949YBbTC59a4Esqp_ETNuUL4Lw2V4gHIaVpI2A6bShyaIrxVxCGb8JtVwiAMBZPtiNM5M6-DuRQMuioXWaDZsTruf-E9vYompBByCXmUUBq27pHclWiI7ZTmsEdq74jlxsB18ZAISx-elHb=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNwFabWdnM6fc5q1KC-1FLQC0_VFL2ZgpQcswZh-X-v2HMm8HCCiGVMwyYPK102sOnxY_1xYasaRhYJuuCPd7GCeKATp5S-hWzm5eUJzYPySZCQ9TeC2caTTYDu530-7zRk8JhtnLquAWvpL8AuV6kE=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP08raCZfJM340L5MekUU3R0xMOnD5OAUy8TER6Fjcm5wCMrSu6esosHgC-HoDUV7-O4ZuKFWzo649mNPQV7fbHLzfBXdoWkyAQCrTUUpZefS3PRSQcetX5_wy2F_2aLZoZKC3fLocJxzQPXYhZT19L=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPnpiGszQ7stQtGkAWPlO9cfpf57_YtDxfW4F1rtoWycZOx-AbhHlErY7Wq9rrl-0Wyp5xuBuOZ1_icXFAmAsoVXRG9sdTpzS4MlPavGspXOPgiW37f3_AU-SHQ2KIhHrEltz6IVZKw4w5nIsdnQi29=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN6HgNVavd9d2qgnn_sjgcUOLwjmu5Kj4wwrLqFsuD4HIaM8TfDEYxsmgpjyowbMrChD0KxIfXNixjZ4X_PmkvS7IxvxKJGnuxNlnHwPvI7mb25gXMd5bdON7FH8qn9yUfnNgrUw3O0mm0kVnvTpZtX=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczObMNYjLvvCK4tTnYaotpYBLQAdaZElQnoPBXZa0URQYY4VK5wMB1ASN8RMBo2i9TukSOdIPZTvdWB_CaNShexwlrbaSGwar0wdjZJAzjMYHjp1Wx9SDVNjMKRQqnm9ODN2WnlGEz5Oj9eWNDpv3-Nx=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMEv725wjRzN01-kXsZnatQPSYVDnvUhOGzGlXGtBlve_lX61PoSiY9mA9HtvIHBafC38ALk1WRp8mbP6I-dewowRF7msTt1qbj30WAOZvSUr0mGANfMOASgM3-oJGZVij1AJVY8ne7UOnt5wfcDkaL=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMtDbjwxCkwQXlwpUUY97EBoDCaXpMFOINkw8p88LMUkzwzC8IvFCbW8hJlfUe5w0Ws7A9_GpDDXY8tlC2XxOvYH3cTFVCF_f2-fBclXVnUBA7SLjl_fmvt9BUjK8_1MSXScRB8IDLLQW0c2wKk7rVi=w1042-h1854-s-no?authuser=0"
	  
     
    ]
  } ,

{
    date: "2026-02-18",
    title: "Last date before Ramadan",
    description: "",
    location: { name: "Sidi Fredj, Alger", lat: 36.76510857416144, lng: 2.8480988402373586 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMUFbjTEdoICJtCFpS2KOpKDXT6S1FLLL4g-dNUZMeINccoEfbmAHr8PFxkaC7UfiHJ4V-ls5h5dasRn6A6xtj_yLxpNCSaHH1Hnxq3iH9Bt3UQRlPULoaZE-_fi7JDHcs72j1BfHe6FkXcBe871Md9=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPZGR3fSmfMrjMneHDXHQbZhzZys8tcySsRBOko4IRzrXsFQKC7z-lwinaU9zRDK0VgFBmb8nTOBLwTOOXfASyiet8p_NfhY1F3HXJR7Y4Jg8SZ7e5mkYBWDBA0AaO5jdmWak3kiff-cGgGsrmrcVEd=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP8z4TnmbNZ1YTcKMkprRmxg6f-X3kujbOaCqnwl9LC8zuCQ-ucQDktJQvrPZlDvfCKkLmoKYf7qlmJ9ppoe3v-Mu5lbetEzC6m3VV4TnD4sBSKSB9aVeejOU4hYeaO7OhkuvoTsTeM4S2dRWYXBJTp=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMzBTI9oznN7EYSx_uaRokEIvaj7Pbn-NZC3clTZmu_oZujbpAxo1JUJC2C-YE1idqaXH4GAQLL_gYnYDPu2CbVra_PBnu5RQeuB5x2-JwKbLPN5qzrA99X2WTL-sIzFLQX-1Z77hEK4CeMZRq8Ro9P=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNXT8vAlyCCqcqmE3qn0d-ZNb4sSuOrGcCLFc3lohF4QcAFUHIdn1fLwZZs_P0SSKlgmNFRhF8v2of7Ac2oJ9hyEW80pMPJZO_mMmk4DUrnsgj-NBOLpBC_ePDoDKxdjuk3ssorui_3ZFVBeEebDp9m=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM-Ty7M7MC6VHVoYg3gvh-deKYAjxUjArJi0_kt5oFUH9cOUOriFQC8BpS_FffbIdGWDldc0HpcoHNkk-2w516O9nJ-SlK7UUh1IDlKOhMAkzlHrpwhNn27snl3DU661Wr6w7AORux6V8_vCTwezhgo=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMOdq3hqJFHDPbzcVMfjeJRL_TrQj6TFUzBarklz9fgqbgJBw3ZGIzW1ueMtkEf0fBN5GOmS5WpvgCwSgDJzEpKIIOwbDbBkf7Oe6zZa8Ahl0vLqBeJvHof32IIRaGVz8QDN9sfSjpUpvBlUf6wirBz=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOzlAjAbqN159EKHcf94hIjruGWn0OErBfCqi8BRUc4Jbaqd2Fkz5HlOjFD-wMViKFx7K0eYrygYMlGIp-Lw-VEclgFAKU3KWncquA_2ti1RRhBqzQvGYvduiTlqWyfNxq1WQTiLkgQxmw6eh236qTP=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN_dnG-mckKKt4OWZbBb4RdCImPuQlGvmq2j54vTADjpa4bUhbqrTxUTvE1ysHnI_1fS6ODeHhkt8TpMHj70r20GDveSWUFETtomTCjy4o54clBEDctKm-6dPb_ZbHs6EkD12vQ-rbyKk9UF2xxOQRi=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMef7o3jvpL5eVseMVr4-je2PoG1IO21c9K0_1TgBQ-qYVnqNW_QYJ8wYy9U0Fnr5EmMCOcTHHp3MsFuQpk5kYqiyhxv1vDqBMjm2U11D7umQ9HicI-jjWHlzX7zmicZZ9JE3GJErI_oi9Vo0HnNa8z=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMkz9lkNh3K73EyCeNlJKSTYxZ3TBKRgUB14XKgiSB_JLuuBmZNyQUrNbQ3l7R8gMcn7Bzv7Hag8J0yY3KzfyevfG7zY-ZNnnWievomW1-wWTPsAX5tYdk4Y1LvG206a7mAIKsYyVFty22-Hef1rko5=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMX1Prkf800Y9wb0Ea6W0ItVZCS8vlsxmDcYvGXzVPng-yrXNOVVFY9yJhOocXf_6NWHWnY6B4aQB8wVfSKnFf52FQH6ZBM3YQxF8BlaBJGVuH5wU0UnJAcuWIkosOD8X3S0X5UsoLvPC9MkL5mxHTI=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNLOJ6GFNXyQ5zWiOSJYvgdb298yb37UV_qxKxyV3c6BcEBDgclMNpBKiqOWn2XPMqU1051_8ShU7YgaR5_n9B5WS4rVLv23dxL_yLWMJSqmtA_ugVkMbrtO7pXdOht7jXfyZsaohLsziJGIZ8Iqetn=w1196-h1594-s-no?authuser=0"
     
    ]
  } ,
{
    date: "2026-02-21",
    title: "First Date of ramadan grace à la formation en #DigitalMarketing chez #Code2012 #Sa77awYaSa77a",
    description: "also Menad flexin with his new jacket",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMR7AkorMthhz95FtInReJMySVEWZfYrBAzQue-A6f_EsQAl4uK2zaeiXrezx2KgSDEecoX0-GHIWH_Noy_dQwzL7HwAxOAqfrtmdQxesJZ-Dyl6oO1QH7H5UuyybjK91fhc4b-g7pITFY-LAiGOA3W=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNY5vZI8OeZrVeW6fcN5p_xCak9lfJSfKWJKzNa5ZIeWV83P1vn_b86b-ve_Dthu-s5deKDMfEozsh-pO3JEwagVZrae4OzRfC0p5hQ6tVOOu6MIY5smOmMfZ40zPVNe-OfF0IruMTI0pX2ybMHoS7d=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNVtpPliIl8A98qrOmnsu6BtCZrR4Mvo_rkOh0fsZUii7rclSQNImkhNVakzkZjf38twpCjeFt5pR5x3qiXiS3gP8jpF-2_lKBtzrDGF95tzZN3XqEjuWl7izQc5pxrmwhhVKGnj_TRPGDgN4vo0e4a=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPo4SlEBb9he0MU0BQglAbqx5FQdZnL4ErV3rKSm0MgZKIEKGHG6zUA5I3xvdVDz7bGECKyajbxLTxUq3JfWwG2zOXBEGyluEE28etZTWlJev3e3i1YDgfr9jPLKcvFNZMm2AoWibGtrzKGaX3Qn8fX=w1196-h1594-s-no?authuser=0"
	  
	  
     
    ]
  } ,

{
    date: "2026-02-25",
    title: "Mini Date : let's go récupérer une commande chez Yassir",
    description: "elle ne le sait pas encore mais c'est le nouveau powerbank de Yasmine",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "img/firefox_HjWGjbDjA4.jpg",
      "img/firefox_BaiPxmPHzQ.jpg",
     "https://lh3.googleusercontent.com/pw/AP1GczMe9YMWRy_uENIWqu0BWjrtALT-kht4pq-wTEdD61bk274dr4BmmvHTl6QcilRK-DnhUGp3u8HdLZBRyd-4K3M1nf9RA16sPem5YCUNg6vYDbNY_o87pm9ggRSlgNC3MZmDBCdM0ubLWFE2QlmBM3nm=w1392-h1856-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczO7VmAwav7b90ZFP0aYNIwFpDcrKwRCjd3eRIC-dwxq9wIdXTqP9SKW7sqmwZZOxDBbAx-RQ2dVxKuGT3cihv6gpHHXAsdSXVQA8jJH-W3EXOrPc16-huJkm3aYWF5TAxeoIZQYjFTSMjCHDFDzHnsK=w2474-h1856-s-no?authuser=0"
    ]
  } ,



{
    date: "2026-02-28",
    title: "3rd Date of ramadan #DigitalMarketing #Code213 #qalbifilmadina",
    description: "",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczO9pfYwBTSbwCBnWve-8-D1DFJycDHHQvXCE81rK-ErQFBEJ23eOFN1cUglWSzr_LswvKosHyTU_2L8xeZmA2XuE0PWbo72QTx6n9j5DZPGlS3_hYjwN3jsijNmgwbfys9YImyKJ8fMluu7At7vo5TK=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczO5qPOZ8VlwCTx0B0nYmSqI8ab1sf_HzFVV6RpDNWM9AEdxypKaMYISgxf_tWlR8nLSvF3Fm7Vy2FQTWBqWnzEXVEThDxKNz1nUwY7vSBHYKF5RQK6oqKpnHfqPdYpbce5psP1ZHAVxq0tVEoj0fPmn=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNpV4HpxnFFnGjZEC717jOnyXwPoo_PrSTt5iq6aOHit_kxPgFDjp0wddqwv8ijZ-pO6NSeemfdGm9I3J_ZhwxjIfgGZdt6BWOQCf8Y8EOpiQEXb-DetpJ_5vOMpkxXK2Gp0UbiPzLweeLwikFc6d80=w1196-h898-s-no?authuser=0"
	  
     
    ]
  } ,

{
    date: "2026-03-05",
    title: "4th Date of ramadan ",
    description: "",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMVF0-f6oQWn1tzWKk0y6ZWTbDDlmIUjJQCCEYp-3t3GhbosXDuNRmlExJZteLj-HAFFxO9WF5AzSV1ztd4dpFqcdvJBK-sGkP12Px3Xl_NHVDWKxF0C_61jKUPxJPxwP1Q4mnLYtUdI_Mm3wM5mJ08=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOJVyOstk9VLJZuPvHjVV9LLe1L7mPdlkGNP9gKkah76jBVUGYGfiFkl3VNDUqkD38IS1X4jtftVkZ3X4eFJ0Novn7C0zyQYnxEPegjiHkjRhyQcKt1IMbxu2NIWia_hbxip6vC8stcZMQinDx41zWL=w1196-h1594-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMRrm7sZ5nCAdNZKxpa51cOo8Zf6dP1w7j1TdRptObHIotqvYl5vF01WohZIGZvsuz5Nf6eJyfehcuZLJOSrA9Z7L0YTgVaVvKqTJ7lm2Qq1AD5rtCaMjKIIhNiWCAushKVArfjqK3367jkpQi-rXwC=w1196-h898-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-03-07",
    title: "4th Date of ramadan ",
    description: "",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOE22elljYyZX2pale9zNfc2kh-4dpirB2x-cEDnIMbzw8Fo3tiXHZaFjmJI4oXCSvB9m60snNXI8exOHhpGRjPsprlIq61Kb7qkAIRwGaMoM4pithY8jCqqK-kQs2yj3YriJ5lHc7risEF-YfEFg7U=w1042-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczN9m1GJ8dEXjehr6bIc2zAoBMeV694yDfiGrjafF5Hg3HCg3_RpJcYliJ0_91mae463qnlRNgH3_ycKvcK7CuQ5GLeVRaRQT_dCjNhn7u-XkPPU8iJo9n6m73VlwszJqCXz2ul4zm_B3ZLMudryEM4E=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPIhtbtF1U0oX09hnQcuCKFUlNGyebzR306rgdCTkJPbfmlyxGUOxCA-DeGBakalMzAdETXuMEW-o5EBRgtlvQJmujRNi6BPldoBmR8Ov7MyDSPnihxhqt4FW9upotN2bX_J5X86lTBCy6IKnat-TVC=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOqVKFub5BToE59-eKeOUo5-SCnw5gym96tLgwORc2jI53uO4F0kLxi0NssJVzGf6LJX4MwBhw-mfJmu42v2q-OuJiBxxJqVV-gVaiMs8YqT5eR79CNUqFSx8NKlRE1kgBXwK8zL27-mEeA_RO6n51J=w1196-h898-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-03-11",
    title: "5th Date of ramadan ",
    description: "",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczONxtc9NBofnTUW_P2AHSpRCnLAiPNpM_wUWvEL_uBOrP4Ql8_fAA2AGKahb2dKa6n6IoJ6sxT5A3h9StR-nHN69iaVEIjgGhfFjRJofRFu_wEuydE5EWibcbcUGllxng_0xHP8TnrfuWeVqhwYQrJn=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczN8LT06bi0I_CDhlMaI73iz1uyxjEQ3X9nDt3pVRUcSThDk_Tk_974Ux-gLsHYKk605Ff8GAZ1t2oWNq6CViQNJZeEQz922GUP4vc7nZEd3-zYtu3z1OxHEVLVVhU7Zr6mk7MB1ELdLL9_6MpyRN8sP=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPATkL5MN5KHn3AZLzHE2te-3xGcJenvpMIdS0_CKZ68rEH6uspdP1EW64YKXo2HhZTKT7YCLM0_s7kG0uXUxQulrPfD2y7y4p1E7gVMCMXANq5nZ5g23CP_ApwkCbg_CEtlXa0ce-gV3fTZ37A1pGQ=w1196-h898-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-03-15",
    title: "6th Date of ramadan ",
    description: "Yasmine's hand is empty .... mais pas pour longtemps",
    location: { name: "Sacré Coeur, Alger", lat: 36.763505587525, lng: 3.048014110411325},
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPEZoXoVUWseUt7I5N99fma5tYvp0CXZewhyRTVmerJB-H4qZa2qsQreqOceUcYjVeCxn65YIK-Jz3VzO2axWH2gw_7LU5YAziyFuUyzeeVAT6aMnte-THqdln4B8s25AQJHwYzQqrBAKh5zRRke-VX=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPb0Lq6Pzx_HuwiO8G57cRZZlzZLNJqZ12UCaaUQUUrSowokyS0AWZ2UOu3_P6_hJFRr_8DHmkhVJEnuDchqjqPvteuomhjciwgdtTzlw5EE4DF1fg-42ddLPj0gM7XkaIrzhf9dQ5N6E8Q28VXVCZ7=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczORfDceNYQ1pv1eoAiCnmgxCADHXPvT8NZNCiSOWDF7TyHhbxvZm9XZyhcYBn84unwzbI5NhCnjEZECdUFqqLvbtm0lyz54jfd5OIi-0M8Dp8pPQqlitz8dkjRQgy7ZgCF47a_0fo3SjkYDweCv2Zsi=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPhXgMkn7PD9E_Ca8lbNPM80iLkZ-5q_z2sKrBNDSwaC6zvQTYKCP0eQjc-aLdVggx3bZU-7YW-xbh0m0VseaYUZKdexlAoFOdRTKg4XSfseB-XlHZoVpLSVYcjC9RnkYCactP8CVPTO9XDiPVTRLk-=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNIp62adZ2j6xCL-_WIT6gbofcYllphKzjWFiN2f1llhMvMTzriyfA_VmmEbRdyhdMPO2nCPbLCs5a2l5TLmGMCyv02r761gZZL66FGCoW8qvNxyjOPU9dCTkIpWmw9wLycrXsKmIdjHrUbPoOfT_1y=w1196-h1594-s-no?authuser=0",
     "https://lh3.googleusercontent.com/pw/AP1GczMMXEFIsWIuxpaJQwmmN5JHqFIDLachLbM8FynzvM8SIioxSaLOMcxGMgCFdA-vG2FYbg6D3bJUQPj7SO0YOWlkDR1sysF_-Oewi40CiFdtSBhE6CyhXvd0wjz6_yAXHk4UJUvk0fbHrzuI91DKf6xq=w1196-h898-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczPLsk0OKc9ALfwSpKC_jYYIL1fEOYId77ALU1dSw0WuZuGdCWL5N0TAX6EtAkXl2l6YuUZbXg_pAUf0alz6X8jksPdRg1aDy2G6rd75cJckVCqxgj17dHtuFkAyICHgw3IeVLu8ZSF4Z0iiOO9N8YXA=w1196-h1594-s-no?authuser=0"
    ]
  } ,


{
    date: "2026-03-22",
    title: "Mhiba Day",
    description: "",
    location: { name: "Résidence La Belle Colline, Alger", lat: 36.69979090237409, lng: 3.045510167222708 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPk2oHeTBkrvT4GsmB9Uc7rHOSqxygoaB_ShlOgFdiHHwjLH4gfxtdjcXFzq_r4oLjOSev0VnEkAKU774W9OBfaFBh0IJnwWBgPCjtsqa5JUvJ-38R5GCTSK9qQQgQfO_qYsHD1i6FJCiyoIwsbAJmf=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOi7XatlEsm2mAQtPFGwLfSY8GJVLm4GgB_8jDRX3Ikrq7_Z0IbrEkijndCQbk9VTKqsDqNVN5aV9J-EpnRs-bjCfEp5u-f0iVGdLvCzefW8bU-Lklgq6q6FwfBwSNWinJ8sVyvvUuZR9EjqLvo2lGR=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMmv64lt-j2s5Sy1TPeWUN98Zmnr1mtJHNB4IK-7fyj2dYXiX9FWzAO0aZOgt847rVv5Pocl9BH-LskczpkPC9IdEnFuZL2_Q7Fxkfu-8TmUZhcBArPxL67SH-iYgKJA0UAsS4DwsAsvstIHrJGZBQ5YA=w1196-h898-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-03-25",
    title: "Date 60 : Let's go to our favourite place",
    description: "",
    location: { name: "Ruines Romaines, Tipaza", lat: 36.594083579319715, lng: 2.443332118260243 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM_j-gp4MQGs_E0YGvVhkc4n511w6KSIeUbRpdBrH47Gw9aMYwcXPVVA99qARN2ymuaIBXtcn1BD5Ca8t7KmV574IDjiwhuYCREIJPKqo88qJleVKdBSW9prD28PrCFxccA6YgnMDo0wRTvQE3uP5RP=w1196-h1594-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczONgATU28NcFArgMprEVaDTpBOxM06yfD5rafi7IRmE7-HdMEAjaCN4v9xjX8KVPmKQF1ec32r0ziNg2xSzDWhEFUDwpqysOkE0JbfqqBFaYg1Ik5iuKHkNIBIb4RlNWjVtjOE_JD3L8HSfKtdgJDMy=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNPkTbPhwy30fXkovc5-1Kw9GlTffp8x13bAmcVNF6D2mhepir5lJ0dFz6E8FlNNKGHtYZ3QpzIbbzD_F9iVZEuZkALzwO-At61BMvGGIBrL37cMy1xeQIeQD7JHArYvYrXoQsDp3KC2DE1gUt5fAwl=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczO7WFYgx9RfECPH2A8cJ0xfU0P12NtsT45SYxUqABxgP0sDN2m-xINjPmP7JDPdSCdSVYzeD6nIUH_PgmOY73mpf4qxa0PoEqcK4OAPs1cyiRbicDkNg-X8tbQ9VjNmRxcBPHhZTrN9uKl3ic7IWXBw=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMLbLx2tZ-CzLFL-I_dyejneX1uiF4t3x9yJYy3MeiJyoJcLqF7uHxGi1upyXCpDGidyycM8-P5HGElG924a6fRGlEIRkH-KPLBSN3VgjLiJJ_AOIRA1hgNL_TlWPnUt5RqTi1WCjQUEwrQjJSJPF_R=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOy7io5xhGGe_WQYC-EWRJ4frGS6Sc2l1s3AHxNIJm7i8WjUdj8iARccGr78Niz53JNgRnX_O31U45k27dcXJPS5P755T-rTdizhQjNo5GnyTCdnxJfQ_OSZrLu5cR4iowkk-xEhcelzlsM-9ENNehamA=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP16wTXq-4RbopZmvuQBnx2J1ISMD_qTDvC6RzJF_zFdKScFZ1lSpi1hmZXaHXfaksqSFRF5-cfGfgFwA72zDwCmXmRM9gQJ2VdBnpwjgjyGIJNgbiw_P_7hV9YKnszHSyosNOvfor8gl-CUp7z4K4hxw=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNJfGMDL-RXTaMBiMTT6TL0DIR_ALCTvPC8bVssVwQ1ibUnYTykjihOCSkvlaY2M7I9-MLDv_V9GZ4-KamCS8UVDIIVAODNirNmMRHjcj5Nee044ZmLv11KwKwKpNQWi2QqXP2xgq7ElSzv0nvpUX_Q=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM8BJLTx3SQbsXOuZQMj0bxA1ju4oxN7ySy7s6_5E9cfMuSHqFoxAv6u8Xv45D3JdSrindc6cb1779pfwScyAi3bp_QIRuRPaiQYgZrGHVPAEJShwcELZEDyJDDsbbIqx4a6eKlv91fs6K69xTVWT2F4w=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMwBnD_fRa_AxIQW6OsgPazcvTBrJFuYfNWYJO9HjOkhZuZa4-CZXceJQOgabJoo7wZadAVGcGmc161oKIdApdIVB0nzQT-IekZImgdmvT07eoB_khDpvArAKVqEdCTE61QQhHog1eHsrDSe8uDxGeWqg=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPvSLkVcrZisMF_TtcGniF-j4LrRpKA1xFbtd6aPv8GUJVAinkB5ON5OreZv6mpvs4nYGHWeAl31hTBepl7DmxCOwoRzhT6cAbNhg43qtA0LmaU9hDnrR6CzTZHEjr8uwVkAcTyAIyX_gp-IjZ0X5VEQg=w1196-h1594-s-no?authuser=0"
     
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
      "https://lh3.googleusercontent.com/pw/AP1GczMbk-bihqEcznCVWCXGvM4e5m_CrVnz1ELXcqQ_9L4OWKQUVhSQnqlc_CryyWEezGDRPpm6AJWwBJfN8lp5iPioTmst1aLniiQPyHJgkHLuX9lVHc0fCPC6uI6IgOHenlFpjv1Sxlf6b2TqUdsV1WcTGg=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPeDcnSH7p2xh6rT1GabyIX2NneRcOEpVCz4x-Oi3h65t0v1Ob6kC6IUeOHyWm4evV8RAdabBbQBX27Lpc4P-pTi7v8Pcm2-1-bSJ_miuPnshC78KeMVwazUGXz2FGvTSQwHfu_ZJh4RTJ4Npp770k3=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMeJiFuFgTiNyZ9NnyYhddMQBpppgqAjtiqE8fx2qfb0piQZ3kD-Xm_yewy0Llvh5zcIqmFL-j3lAfK_QVH_Zxolt0omkY6nLWy5Gy9ucfi6_amip2OD9Zm0AjZPw5v57NTKxPzqJzTkYbFuq71o_Lr2w=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP9HqV-rBttMT7fBV_khXQrtn2DjYVOJel-PaApaVHJwIAvr1BcEDO_4f8SESyqRubxvREbJ3bYDTCWW-FeURPHCBhT9ptGLJFEN-6TkdDMBYkbfu8muxOTdosc3gSZQkOm3fqCH2Q_mD8BdWYoPfot=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOd_OMxWWTNoDjqpxLlbQ__mGcZTSoMQ1JapLKMUyFMtFDuxCLppaO-EnMDfNCfY-ihK-aI4SmIrum6Y6c0z8EPKaTR1lK6pUaiTsejoSfShJMLqnMLu6Cw6dZjUkafruEvU9bNgxZt3OaFwfw-w_35=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPjG2bIz5fQO1Jb-7ULBMziWMP1VexQAJfwLFwGN8V5VGKI1QE1qjart5UJaVMuSJp05nnDP0ztXbv5qLrtTODym10lHRhqj9_Rb4yz9yKsfBMTiMljlkZ0E-YlrRJp4UBb4vytcPSSMwk5SrrGIYTD=w1196-h898-s-no?authuser=0",
	  ""
     
    ]
  } ,

{
    date: "2026-04-01",
    title: "Ce n'est pas un poisson d'avril : it's date number 62",
    description: "Hayya naddarbo chwa",
    location: { name: "Chiffa, Blida", lat: 36.3714692699027, lng: 2.771704340220241 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczN9UBDtPw50LZ5RvKKeT2ykyqVubraxJsmRJfYYoJRcNIJP_2NP3TdADN9pJSEm-GjRI2nYrhE_Bo-ntrQ9MhzwBpQHktroe5NYA4kl0sGSNbePKE1ptBFJ2vajzUBL3DrSC-gk7VNQT6sq_i9bWAzt_g=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczP23vX6ozfHqG-jacs6_dEoHtwZBuAgq3AflyvX2XkjJ3gxEUUe0Mt68n6lypQjfuf7CfEzjThonYw8cQVyNyJC-DIR7tBs2Q3USJHaG-o0AgLEX7JDJdk4OlWWcKC200Chl20AjO-X_PI5fkBmSbgpUg=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOy9QbRfmpxevCX9JDEjciaFnbtfYirJR9yyBCeOgiRsrA4cNtDtihzMQ0Y2otci0im09u0GQP2k_EoTm5ufWJKwkDzkjuyamIIkehkeGwOxpp-vBI9lDMmurX0k_LL-gsTez0KIJpqr7-aG_kIHEkKZg=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMM8Q9su0Kl5gagrH2kw8VHYs0zG1xDJSpn3dkIRmi0U36Nlx8icm5GpoMr71-7Gsjm6nYngvQmWI31CAUgwhGP5F7IAABzHKdBvcsFNIG6A2QS1VYMLQlpMpny0cb3LmzggR8jpVWERiO_NIEdi6TnCQ=w1196-h674-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOZe7yv992WWLDOdqUqGYgYw2kQcI2eu8Qj2riY39qdd3E_cRw6kDii2j6ma2ktaovYfF67z1cWQQogClrRHbagbtTX4ZaIjJeynLx5h0r9s6ydr9lqjTaQHzxD5hnYEh8Xr9EAM72QkG5gc1dSkuqxKQ=w1196-h674-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPuiVyjZTM1C__o-pPIbGs1LyUW5X5TYTqX796L6sZ6Twn9vfAsUDCOh0zXoHo05hU-XS4HTtD1KYisZiAqf_45I6b74pF4hpULrConpI2oKsK3MUggVtmXlkDmDAdhwAK9d0CTCfaX51Qbs2LUX0B0Jg=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNbcz_T0rv-oJal3fPlA2bnTOZ8L0YKb4sRk8Odfnb1O_b8AtcvylVQOgkkvw4h0Bv3ttbArUlPAs9QkVD_1rmXI0CxVVoEBft9VY3V_cBGCuorsfmAGOualLf7QH0F3-aS-RLxrTeBSvWpUWAFUYJoZQ=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNLuH_uNYqCWSVMzZN9Cts4aDnGGKxiTb5O06Z263PI2b-sROXThpFS218zbg_hzggU-dE-6JK4iR6LToKWvrDOe1ty0pnoiuEhUBtsfC401afO3nJCHOLcbU7rn1z74tBiGrjvLaqFbhfSVEizI3TL=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOAH4Sz949P-7k_R-iC9LsUSgPcTXsfzZWS1GjTIEYiwbQ7uIMNjYz0NYmgM-XisUdp_GRmy5Y53VaqEyDzXiL81k37QUyOlhhzlHRyHk92hgmaiqEeSJxG0tbATjAreXAyyA4-LwfHEY8ZY4SeXX2u0w=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNv3vE0ZsddbhiRkv7xy0dJk9wir6GgLQMXNsnkd9yIF2gdgvHxckwojHK3bcwhVF8eeNMceTnQ4P2MiN21Ba5sSKtOmh5NjikWo4A1HKhbAwTUc06xjVJ70_w4B9lE4YWAzsWS-Ntae_v5nwfd0H75=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN8i6QN_f6JyTKkyuWtQdGJ3r66J4tX_TwIfsuQzx2iVWpyASeDzW-mlMRXvunacdJIIKYRG796uDlLA__l7RxFWiT4VMVBTaRGs_YHOlEz77Fpt7WB86m1XTsZ0Vdm2FSzFPSOjZQ0l4QZuPS6H9mKfw=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczO4AePVGg0g5EhTKYiW-xqBW123mP3b6zSCYIoB5YocUA-uyyapKHM7IiZyE_6YFB9SwYG9-POUIcIzfDTXOvRQ5mJYWVU7bUOdqX9B2QToB1WRczTSJqkQe_lk9nbkkSVyjAyji5sUTJk_L9i0q1X8cA=w1196-h898-s-no?authuser=0"
     
    ]
  } ,
{
    date: "2026-04-06",
    title: "Date 63",
    description: "Petit dej avec des madelaines and du café en capsules (unbelievable)",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      
	  "https://lh3.googleusercontent.com/pw/AP1GczNep9ikMCdhdMfSbwJyUxhlyM-uUOz-9Ej14LU0WFdt6T1-atzvDpBxw5PAoyEneD1iQb66da8pNXToFlM0wZcvwLC86Pxul2j3_hKw_taCs1Rn77fwM8-7TqZEsybPRUWp74RCtie4kOqvgnj866V-lg=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM7vYXx02uDgVHe9AVjFRa7pvIEk3Q3mGG_cVOUGFpftlhWRChmobYLZ5SkkrPCuPIufQ7RnMoiOGVnaO3XuaALdzgsIiXZSpaXEm7QPIs_Ea5U8zm-k_QIwQRvbZa8a_3YxAUGX8QKtGE2Yo81EVrkVA=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMhOY75QvPX9B3jPIgGMnDKXYLMqkIh0LAsXHMznx7DljdXhTWsZIuR4ZZcmVjKPvK1rZ4v34Y1HmIJm6mK0Cj9BZaEsNc_6oNnkipa9W7IM9zDRk6wBAqmHHYeOutKNTTbzAqx3v3NBnNrvAGy1EEK=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPuv92ETfaJomuOsC13tNr-mc-vF2c6ra1l5Rpcjgc4Nm6MNACy3PdFd1PT7VCCLe8YoIyltlyemlKd9BgSc6fvFz-tUJ_XW5m9-Xc6wQKEs6QD6d8Fgn9pJk4Nw8DzwRTjCu_SgpMBYBvo548LgrL7=w1196-h898-s-no?authuser=0"
	  
     
    ]
  } ,


{
    date: "2026-04-08",
    title: "Plan B then 1st Gelato of the season",
    description: "",
    location: { name: "Sidi Yaya, Alger", lat: 36.742134833403405, lng: 3.0296833564404753 },  
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPXlCtL0--1Vp3TGXdeiVMel8PzsIwRcpgG9soka3Ay6zp_n5qWLXbZYosFLhsWxWwKEaa3SOeGMMu82Pf9wah4-Gl_rpRjG7atWiiMUSSGkTw9QNjk3zijKwLCAfcvRurNvxFlH8FwJ6qyp2hqJF16iw=w1390-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPU_LwGiWqjVqkKGDsB2VA9YUCzevipu9l8Bmmd37fG57C2URHp2slx512yTH1u2z41k6J2qLcO4miUB_38avMGI-tYksQbUIorYaCPx6YUHJq8TuANOLvP9dKjUD_ezEn5pEof6Dm5BDOnbsUbskQ-0g=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPzh28I59nmBySqXkBhh2D0o6Iytao2B3a3znNckDl3wpCt0pCTHST9ceya41WN4wj5GqtOBPOYYJjzSQ8xcsN_zt4-cPpG86_r4E_C8kmYN56fXqFXZW2kg8f7mdQeGLEM_ivZAGRnbTnQyZ5axdg_=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPNtN-_fjvft504H_7bUowZSBzMYHQr-TjFLRkyGXg4A_LAQcvQdcQO4qXA9vBawxdUAxtyNEnq4YJEkpZJoX7gzGMjVLFGMODQAAiLzHH9YhALE_7dac_jF9tAWT2QWNcROz8xEWk9CSrD9eunS_TKrQ=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM0nOmZ-Uglo03xCHwUUBka-OI0QrsjGmOfhBuTlwZbd8eg6WvhL_y3fw5OzR4Y8wo2k0yoDajVM2Khzzimd-qAHVgR3-Bl364EB04SZej70-zRGX6mY8g2b-p2n1Mgty7iTsUz_-WMQYVcXOBkg0zzTQ=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMOsJ6Vp-4CE1hkZVIDC0bH4WO6a1ay_AejMGPu1ZgMEOYDV7244fuseAuTJtOJHkq4fAgVhuWOdekrZM8miB7T7TMNa-eabeCWHlwVNU6_wz9QaY04qiDSjTHVF20XwbSh7hb-HPmQzI38NqWhaaqDUQ=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPz2QoE5UEgVlhfZDcy1xRaQlUC7WzTAoCBo_f-ZlHa7GAk9zZkCVgwHEiEhMLI8Ft58TkTfuR41EFBrbuQktRrUEUius7_G8Zy9TYtH8NKNj5NyOhNL5v0OvweRYgGb1eDj3TRWpgfPAlfEbRrnQi5TQ=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNz-_dsZisx4slx4Jx3k37TJubiqc5QQ_TjEQKzBdhU204i1KM5PpSi_VpqUcRfVEieGyljsLATAbqxIfektiCTeG0qlkcxGzlwGL_sFdDBj98BiQ4YPEYm1SRVKx1zMro-F_dY0gz-mnMijFyHc15Hqw=w1042-h1854-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-04-09",
    title: "Date 65",
    description: "Dans ce nouvel épisode, Yasmine aide à changer le filtre de la clim",
    location: { name: "Les sources, Alger", lat: 36.73428493808473, lng: 3.06134593838889 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOS4HM1tBmh8iiQb8c3OaQTwO8k_Y8assMKfK-U3-2cQ9PZ2NXdGMrsG3nWWe5LyhduYacw79MaZzGbE_v3EnwO_cpSd5gB0JMXExqjz9EWwlkB0qsAwUhCElvLxkW7cBMa-KYabvv7XUuKRvzaomiZ=w1196-h1594-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMwPB72kMdp1gki5MC5juAPOunfXtdEKQDtnWbXMHNQfcqP4JUhhnOkSRL1MBqBpUr68uOsdLa2FiIB2Bit8WNUmIuCiw2mw58U2toWVgAds9fqdC_L4Pa00AlSxJhYrFQBBJuZoKgEV9fgTDnjJ2rT=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNhNrpU7AOqJv5kondKQt6Fpibg_B3fV1dPBwhtVuoyvUjxINhiipT1SVh_3kxdijuBqbnF3jaEYrSYTZQAdlYCpVBUvktJiICrWH7E920odt1b9K_8nlM77_9KOpnV9g3h79tinJ-Qp_zozmbBxbmt-A=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNMKfySC_axPOwMBgmhlNioGMNfkRX8CvAXdWUyrQGHqqaawJvVrb6KUuJX0N3RubFZmKZpSWcn5Mgx35U-AXksCOyOvRN4RM3pLt2Qd5O3RVYDeBKlN0EgvW8hHybGuWnryXzd9qOTPbs5es1pi1Q5Rg=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOXx-VYAS5XpBa0TfrF48vYaQZbe_hmHXt4xGhcMOu9MF3bEyPTii9-MgreajvngKC8XjVBOxAtAPgHcHr3GhySMgc744cxA51ayNBeo8g4k9n3Ojtv9Acugle_rMWKmh01tb290gF8GskZeQN7gUGd=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOsDhYgva2RTHXtGqOhDY9NF1AG-RJmyLAm46I-s43ACs2ahxxkN3bdAMzOQRZJooiJKGPGgBCRvwEHuFYZtcBHOtvNWNIoqizwzUfgRraLV4GNMedznk4XOTJkzL8wH19KFY9hm7ixmww9wmqN-2Dx=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMT3YvYOBwV6U1d2ao_mWoVMYcDP66Fm132bCfQrYaXfSerwAdhDmRACQteF0H5HAMnn4sD1_HFa_bDIkRHHI1xskvNPWpZ6oBBWbmhCs27L0Fj4n8YTlCaE9JKAzf6uG-AJ0DI_V12YaME-Y-LwTY_=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczObjk_2qHZsN19E9MA-pE4K2xFfwsTvW-S0SSA0p__2JhVFGiH37cOWkdG1U4vjvlVOJsIroikOEfltARpatsBjtxrd-CG0KtB2UUbnVj_rup0TS8IYqovQ-AuZCiq77JjdrX-6_b3OnaNA1WPKfgdG=w1196-h898-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-04-13",
    title: "Petit dej avec du chocolé",
    description: "",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMf38H6CIgOfwLWUtMSDV5VF5NyMqSyy93tiPEEtX5lMZ2MDnp6SS53nZ17h_jexnqwWCo-0V96JYqodkdJQH-IzhtgqkhlFBrVh9KGVKQynJ5zerggtI-7dwu832_dyYzI1bYZ3lpYdZZ2U2vgSh8K=w1196-h1594-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNsc0xOBAkO7yh5XA4p5c5XNskRehxhKtaz3uYjIip5RpaFmSpjIGhNIOMPqaOKsSdtmE18l8FG37ADAkjfataNQbvmTyZ9_0rMTzLJRZaj5QKFcF8esJFOEBhWbgTie2EVRfFi-Q26UUTrdQsEleUa=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOypQxR1s9S-hveBQ9mk1GDjNiF-9ovT-sr7X_3vgEMzRyogZKWhi_e5-tKp9Tkkv3c3zuExqh9BSTui6n6LtSHfM3XO0Tx_L0t_zjjII66Oev_EHFwM8f03JJPkWORdsyEFKyzInxLLOOxgbW8LiX2GA=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPntApiv_muF3-0Wguxn3TYhwpGwjMzqxQZFXMkxtewywrWztYpr6MNMbkRMeTjEiEwoxyiRz-0ngVtFK7YGPdhA7N7BDAr09vdH6xXqaaPwKe9KWGgg3IFXumfZyXFTsQ1GiNzlMtCyDGc-GjXdwXyDQ=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMpyt61naLI4tjg_wj1v7xmeW40ensFoJ3oNs6n697blyBEg9LeigALEqk2Gt-6eyccIFRQPliXoQOgHzVRZ-az2Ilkz470OAjU3GK-YiKB_sYsM5Vx-8m2TelfaFyyVXc1wQl2GNnbJlfiAUQRsoqS=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczO_kQqP49c7xwjGh7Fy4gMVTJojxjbPKzTlhoJLfMpYGzVt7n-PUNwdQ3HiDSc8dWGaFTXFhmX8_vxmXyGr-90EBP4CPaZAfmgn1or5EoLBkBWHUdP0Fq9y9sCockSdsltvSnIMESiV8L9nNMziUBqg=w1196-h898-s-no?authuser=0"
     
    ]
  } ,


{
    date: "2026-04-15",
    title: "2eme Cinoche à Cosmos",
    description: "Sorry Ryan Gosling it was not a great movie, at least it was a Lovely Moment with my habibti",
    location: { name: "Cosmos, Alger", lat: 36.74336261774533, lng: 3.070489933156982}, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOF9ZUUG_GH2gdAj7Up83Ek8TqTm0U_PTop88N1ZnSdo3Vtwjf0ExYkuAbZ5C-6nAJZl_DAB7shSiTt9yV-3-hDFfjQkMevFIRb9OPeM5Sn6LRQ0wpxTtuvwNZvWr2q13CFyV3pL2krNKTWJ860G_Gd4A=w1042-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPO8O-v67cqZyZ7kaDr332hv-FpRurgjfvUCKDxj42bAX7RICGCOJX2WNXPQgumj2iX60RWSoYTQ-jqXrwd7h56aLnTqIULwX5fV-u8KLUlnshAaM_lKkSSJW1lrOzMNfelIi70Q1rZBtv1gxYGvSEPpQ=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNwYsdE7fu3w06bh8JxqfHqoTdqpLI20UaPGm7CdQPmWpxWbCCgqsdjM7TnZrYMBLVq5R55B8aeDerLODd4viBJUf4d9Zo1FGwexBM1t5IuFFPty69PSgZ31-19a5JjBO7zlfW11L_NDsqE-mVytxegAQ=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPX8sMPr21wyRFo24Kw9GCcHS0X9P2n4PUNUjb3C0qyw7q0wJgrt9zmPLuzygu26fvtdZDYkNUovBjjNShsQtFkHgicA5u9L10_pvMdPG3n5AuFt5jMayOXseUZfQG_e8xlBZvadXJe-xLUTcW6C2vV=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP987UZKQi5CoBhSkvr4o7iQP7--c8ByBz9epgdS4qR9FzVaJv3vrArdzmnGmLZoZZ8ebW9r6cp9VqEoTxtIrllZzBKfK9-mVooOHnyVVNB1tRc49WfjOdlnEWrQlMihJ0pVUbwVR9ElA-VnnpuS4iD_w=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN5MqC7czjNRC42GcC1jYQZbdTh17JVEnF17_wvHpKam81vGIODi6B6RFhZlZnj4VdCSd8it4wjq9NISykAS3D49icOJIimt_VKvZMeRNRLYQQv7ndj8fOSaU75pVBn2rMu8G31MwJEGO_OBevd_weYBA=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNy0buSQb37TY0S95hWZRbW6brHnLYaZq2LpKSui89PmFV42jwHXsaypDsz7Vav61s9YCmlvWNe3BU2ZFL0-5MhJPTiMcVHysOabNjDZ6Fo7JOpFxI10X3Ycxv5JKGaX792oqTUiRvYKi_MrkrSjshD=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOFDvaVdCedKkJFlAem4RyWNm2RQMaWI608rj_6k1QeBN34gmXqAE_6dg1nJzLXl_vqq0p0_DumC18-2D-xURvzdfHq1fBqW_kCquhz6Nboz19szY4MyvG0QXuQWhIu_E23xWWOw6ZYiNTehDUELmHc3Q=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNvaf4tSgUZm-KZALaXuWPVSSc8n9-qitKF2gp39AHTs32VmxzilPi-gZA_nausWTGsf6A3ShXlrIXIzSvpvhjxKEagJT2MUvmvMsghPHy8QnQbuJ-hnlptqytp_ZSuT6pwj1HSo897DBJ3Q90mY49qXg=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPbNoPl3atReCRJ1Nqa5Ec8aWFoPQ3K7_ECZqhDV_wGIBD53TSc7HkS-PvEKU5pkWvh1J3F-pjqkrMN3u5o6dWsysQ3lFQl5bprLHNzvk-1-7A3GWAKi8cilsp5l3pBSGCM3GsvlDg4ceytv1Wr853fcA=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN-FTfHXisKUnvbjmYZPNDLO8ZVVgmb744l12Dc2vtfS7OJQzh6rVk2deJ2wOUCAjbtb-lytk2X916wxfEqBNY63YMR3EHA7Q84Qeb-6HfX4jV0sK9P5CrSuEl2VK13Zzhv5ojqmegv-xN8LBLRfrVokg=w1042-h1854-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-04-20",
    title: "Petit dej avec du café seulement",
    description: "on sent que la saison tire sur la fin",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672},
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMkw6DjlIULCFh6vcTbRAE6S_9Mkaywqe9eJidq-BDwyakplCqJux7CZGUyXYdmkJ-O8SWKytQhFyYCcgBwPeNxL5ppu-ca-muimAEFX7ztqh-B7iaWmksI0mS_WZ-M4VhrwbdZtEVO0D-tATHKobadlg=w1196-h1594-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMRxuZeYIunj88js-eQZR9k6h-wUyyqBgj4HqCs5fbSOHzmvRONHhX-H-yz2DwTJ62JlX7wv0pNTqxESP87B6vhbSjgTFt3EbIL_qw6yTT6naN2cY9CWcC6KZGq7LBcxzJtwk8BKMVpoy5cNODnpnHa=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNRjPPq2GZIhlqcbIn5cy_28KFOu784EHaTIGMKeE79cHF0jrgjm77d7mG_SHmlZg9uKth-dnGxQWm5iv7sbc1Kvh1XuRy2nuIDyj56umL8DyqV7VpqVULQjRrpz7dBJpL58xaYF2idvXtuUIezENow=w1196-h898-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-04-22",
    title: "NOTRE DAME FINALLY",
    description: "... and then dejeuner fl'endroit préféré de Yasmine ",
    location: [{ name: "Notre Dame, Alger", lat: 36.80116569733494, lng: 3.0426257699350656 },  
				{ name: "Marina Mall, Alger", lat: 36.74000714167303, lng: 3.143309797906855 }]  , 
	images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMu42Xum49AB_AtCS1CoeE0apnazlfmTysDen5uhZ_aRw3d-FhOvUFlAlu1aS2UYHKAsK8HNzz4NfSL_6FwAFid0SGcpK2QmsRUNmnwbKjhFzoUCmzuhzwBdJ6ChJhFsgbxpNJE-dTtixuPNENj99-MPA=w1390-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNX54A2yqXlBvf2HQNmF8gf0ansUCG3-KVR_o0FcVJy8jf94kpezvAbSwj5lKpulrSOSdLjHOXUldGt5w94xSBfHaVT9C1d7VKikH92SRnMpJVzXrOZ3gUqCbLE7wFPvN7Vyi7h6Nt_UGR3QDvjFhCyMg=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczODLIRhbAYuDImfWw_JAbJaxu3mBQlBTWTnFoePtPUXA3TPYsmY3Umdf5tnYbNUwdTL-HNcOQP8AkTI7p1JhqQC0KDTKdnrP1WgD1vb7a2ge6ZHxAi357WFb9MGdUxtpKgBb-GPeV4f4LYCcipFoLJq=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOJ1P3Q6-Blw3s_OOeJzgLuYB8nMvz8sCuoHaCJLpcQ2eZySZ10ITlPpTk3rfSbKAu6S4hDpzy3hg37YpCip32fIVuOohkEKvbQsJctBNbuRjuS0_c54zxvl0dPz23De74MwQTXWQ21fs6KbOELHa8suw=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN5d-ox97uAfmPVnUENHRiX43dtc5YfepgNa0g9bC5zgLoZko9i82qkp_0-iglTCsX70_zlYK0ZqC9zy95FnksPbgHIjScQRpRQzPJ86Q5-x3w-IWSYhow8JxwIQmNmJgVLzMCzR4pBMMeLMl9ZYwxWng=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMc_-HWzs0M5V421cFTFud1T_08FHkl873G7Wb6BZD2AXeIOh0WgghjrPMfB5-I2tIeiv6cweYJWLYpeqrQ2-nUQNASXBpK8JKZi-LcaOnBvP25li7f5ISuOEge3A2jc6PlBCEHCxtnAdtshKCre5K9=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNxAbdiNowb0MBGh_A9A9RL9-gC1_HNU1imnlwez7r3d92R9j5d8D84kuvQwMdLCWMuMGuEVHKHtT56dpJdVvWo99-XvKnwztjsqExVfh7i8Sn1jafKhWKEoz2pskpXure2376b1i0egSDV687NHB_MPA=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOStrMNWM3sHqutporrqXXf7JX0ZKMuLjXwbgg8yoJfywleY7OBYe2SkVMOLk6JMDAa28bFV-tEnTSNTe7eO7ANtKnv3AIGiEUSZNjXpl8x2l-Hw3ao2tgT0eqr3_c6Irc5UTK3GC2xnvOivEqdV6SwIg=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMUYQV68BOeF_-mmwXK0FJ3T1l5nTVLGF1476itUXh7SLewcaPXTuzCCaFf9Q5iJqyNr0y1Xsyj2tol9QVBMgxKfDpbYRmzDUHKe9f9Wp9p_h5zMJ-xbITPTTB-QssQ8Y6VzW9FBzFyGeu40eXOYEzYnw=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNxYcGOhOLmnU0v3-mjaXIJxBehFKxTp8wqEw2AkVExAwTxK6y2kbVK1rvPkdRdE-FIRjsm2_M7c0rx_zDUmt1SenJAd3Msq-lt3sJia1jyUq8S11okxc9H52gqpLBm-Wk52hTycrKU2A8ND8ZYk0AH6A=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOOhnhl-BHwHjVSOqPJsGdJFPcwjm4TFTaDO7ikNut-UT2UNxAbZLdMGlJHSmYFelBepOiSiFy93nz6tvQUjPOm-j5gOspWKYff2b3Wk1lcTa0imvTLGwEG1VNwuSAZbHmTYyFMkqY_QhMu2s2eD5G-QQ=w1390-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczP6z8ScRJ6YqlvVaCGc5NIppQ2ucHkKLdN6nZ5fAsT7GGWch9eoI6uKaVFy_Hix-Gd8xOu45Si9pQ7IbX8lRatXnb-nwM-YjzYPhS6lKmQE23N832i9aLm0OBbOw-uFF52VC93CKGRluZQugqvdwOjo3Q=w1916-h1438-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMnuiFPs5KURuxO73PqiWcQFXy-UQhFmNiq0kvmN4Cvm5QNTazO8A4ZOABy7ZTtrE5Y_XmpXEpsvORF10D930EmxZ3-AUTCkhYTousmGEzvC17ptKxQoo5tKW-z-tMItjLHCW4c-7PyjKTnM41CG3sphA=w1916-h1438-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-04-26",
    title: "Date Numero 70",
    description: "Fritet omlitet à la Buvette",
    location: { name: "La Buvette, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMPtfJRd-7hR2oe86WTVMuoz2pXzLqcGNYL6Dg1W1ejDrbhPDm-XyjjlD2uPyGS2H9-2d1e9q5CNGjmdJAXDeNhezj5ufHaAM8Bpp8IaNRqoYBWINA5kwBLJIwT0DB3RuaQLWuDcVH6zuugze9Vn9qq=w1042-h1854-s-no?authuser=0",
	 "https://lh3.googleusercontent.com/pw/AP1GczMrWi9aQZq70D47ujjLk--kJTAjh_ixFM3Z9-olfVOY9Vs7zDcJ6szjqx9HfuoTKCGohTFFfqPCB4gf6A4ndVOurrwrckrkYqIa0Uaw6vmGf81z-oRBDLQjY16p-EvrJ8Gpl1TTG36cmkhleqj2Mlzc=w1042-h1854-s-no?authuser=0",
     "https://lh3.googleusercontent.com/pw/AP1GczND6Epr4ApsA76YV3Gt2GseChsDKk6zNrdXekQZ-ipDa8AraeqKJa3C8iykh4UIcGZZ_UM91-C32MmXip8VNBQWzWXv_St7et02oXjqicZ1lT8xEH7wn5QxwVZxAOJYnb5ix_tllpCf2VqzXYDEfmjP=w1042-h1854-s-no?authuser=0"
    ]
  } ,

{
    date: "2026-04-29",
    title: "Chewai Staifi then Oued Smar",
    description: "au menu : brochettes, les chaussettes jaunes, Yasmine qui conduit alors que c'est interdit",
     location: [{ name: "l'jomhoriya, Alger", lat: 36.67497984617233, lng: 3.1935108545874344 },
	{ name: "Oued Smar, Alger", lat: 36.698783612656534, lng: 3.1567433732618064 }] ,
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPz37JxbXXY2ZfoGGuyCt_p3K7p7bjYSpkABspmzGK564ARZPlJNARHU4EHujh9J30KMGz2-peYHGhBwudYzHh9GyoursDIjGjKOehDRtlDITBXj39TgV6TTNgMvF3jhU8kUnO_Uddur4-SRstWIkNX=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMOaTlkh065LaMFIDBaf6IYj8jk-AANBMp8h77OKG-T-7GnWsBS7TVmnnahhGGAyVtYo8TVUct_CNR6xE-zx1f6-AZraB7KFhos9YGXgGnvGumPeuxlTWaL_fvhe4TQW5xDl0ZsdbsfSq0QqNAkpAIR=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPXZhHfFLfneOKi9BmgMC25tTMsffrJcf02pWagDJXFtsBcRfImDdK8p_9FQNVKbTwu2IVVrOyDL1BY9xwwnOxr5IwZqBMLIoU1Ua_CqSKTx85l2I34Eo2_DprLdBHyRRILkmNXl0UoBnCQmp-k9zbq=w1196-h898-s-no?authuser=0",
      "img/firefox_tgQ9HJT0dY.jpg",	 
	 "https://lh3.googleusercontent.com/pw/AP1GczOOEgZQ1uC3yjd74EME-AozdZ0UPBq5yyeOlQ2FgTyKI4uiAQKIJ4zNS953NKbzJTgDMBKWhqpJ-fKCC0UhwnmMMYak3J1N7tadgkzT8--P7RO5sr1z6mirphRh6-hmjCH-ZgFpUbJoWwNHADVIPdAk=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPJMibuZ7flzQV7V5zNwIKiRgDd8xw-U1MxrQjoiix9T3pudM3Q4klyiWXN-Pbmmjae1YthSun2O3HySEYsH6SEYZaRrSoNjI3zmQ3je7iLFzjuZxxB-Kaps4_wGRgSJ6zTuAbpnQOSjUTH0hDqBx3b=w1196-h1594-s-no?authuser=0",
	  "img/firefox_jmL8s2R7Qj.jpg",
	 "img/vlc_KSldSoWGuS.jpg"
	 
    ]
  } ,

{
    date: "2026-05-13",
    title: "Comme un air de vacances",
    description: "",
     location: 
	{ name: "Hadiqat El Raboua, Tipaza", lat: 36.59226335499861, lng: 2.4667259834204507 },  
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczNhYfEMJdF7ZGkNiUKej8hFVlyqPGM3z3GlZUCDTUf3jeS4oisMCHU0vdMmtiSNGVlssC6zA8u9ttdz5VL5ofnTjBFmoxjhC1Od9FNBhtL9nx9RHLZS2PcuMDD_F_yRAYlC9ikTcZ5qFFXp1r7w3IFo=w2474-h1856-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMCM4nH1ntphgEJDywSMlB_ztJvDqR7Ievhf_izlKglP4z5GUxmxTNhlE3fBHAt5RfGbhy4EeOfODnEsmVvD_q2SkTC8L7T4cTRnYsmJjNcjzAZrbh4Xh3PxGlA5ZsPb4UPpPbtzNo_NnYk_k3abCx8=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNYLxSh5v_lKHCeZUuS57w061b4W4gCVQVlUU0m903a1KLDDEp_MVbAyb_VB21MJYCA2tTaV0CEp5DsxId9Mr3u_HSJrTl6FROXq2aNmM0kvAhJMu-i44XmkVkbh1emMk96Z4uN7dM55Noldu8WmzZ9=w1196-h674-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOqGPunJiGbzqg6eSvLUPx4KNrTuOmx-OPwsDV4lYFS4b7fXFXmmxtGDBMATOEnq7LFSM_FmXhgUiDcKckhMmz1lJyqtPfsQmKLEzgQTQ-chwOZvxlCkmoUB9EIGkHdtnjpQi57tCnblXeGsMlrP3me=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPHGkZEvwDsFg0l0gZcl0eFjUuAWuUFM2QsKfj2NcpQoOnAhXdPW6QAa5Ft0GxkC50THn0vDSs_taEQkMwcCw7E0IbityUQlnTVzh5FAgk3kz0nYEUH_Dw_cRqCrCBJFTgJ8Kn8iIyDCXjbreRpM1zE=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMXkZtKjZr8282AmzRlf3-6M9YDancA6o-gTm_eVkeFLtaMmn1aiekdKLbeP2YqwiEz_jO12BqCFblzsMJTsHPGc-RXUThrEJTn_ept8DGoaEyONEIRICdpdT9nuLoh0JFpvFZtHDHNIKD3fPmNsFjw=w1196-h898-s-no?authuser=0"
	 
     
    ]
  } ,
{
    date: "2026-05-20",
    title: "Looking for a chambre à coucher puis Pasta Time chez La Raviole then Gelato",
    description: "Prospection infructuese",
     location: { name: "Draria, Alger", lat: 36.7106968916634, lng: 2.997867988048374 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPdrUVQqN0EZOOuk_r67E7R_Xyh5I78k32RqC6mhKEdp8AmQIpp8QtjlnnyAlLrSddos3t9wv8PPOuOykrE7CzUe7oxIAOb0AFLwEPm3lVKtCTZS7WumMWOuyEtpgh3FJx83r5q3QroRAceBFg2smgp=w1196-h898-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMMi5A-5tATuqdeJ6bQuzu7R3I8aqLyJkXLRNTHRV5akrj3ozxc94Lj5hp7Hr_q3nHXT_I6810ocSqFMOKS5lkWGD0OUs71wwb-3Aj4gmV-s9IDISAMGer2MZ08sqV-pWSReQTdlbpi_UvTiwP14dOS=w1196-h898-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPQQkTmh2zVsLKhizPiFb6os0ebvXD75LGItoSYJidBPV1k30CgYtLoWe8SMyw2uneo8tiCeVurxv5gsEDGNZUueNdIeop6BKfhxF4_GNGaj2RbH3BPIwdtgEWt9VoT7BQ2eTfv-ppl7H7Jxc_kES50=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNwwOUA3-f_qXFYnT5zn0TZU-vV8f27edGBSY3pfm-ZpwlCn0GLSWHM0_S6msb1q-xMAHfpLCQx1e8aOQlrJVvSbANHPYkQr88iyuv7E7lvHrXLo-BpIK-G5t3KtEpCMFE9luNCgMeLOhoJSvPLHUZq=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPEcLvzUnaBjSZvq_WVDPCk3DTZ6qIGSVBt8DP71VKYufd_uRda8x-jMq_mFKkr9dUqllhCF3TD5wIMMPnxWT_GaAsViiUXBurvlKxIiGo4K13F0gPphTQIJIeU3bFHosBtUqETtuQMFztcZoa3EPni=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMlDbbfWxBjAQgKYVG9zBpJQY427w2AZuSA3sERTssO0B3PFfEjK04mEX_XcNw3lOpziAce3F5phfuLND1YH2-tUZF_dl1M-4aJZRyKxC_D4bnAmolYVmXHnDWNLN0yLYw0Ae-uvj0rdSfcx3x6zLgE=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPh0QA6ZaaMzCwJAQG5iZqZq3eeGjbluldh7JBqZ1WFMRco9b6rfZVwx8i8_O35vxgLUUeFwiwZIUvYDBJBvcE3L2k-nIwQAMH0gOPVRxKbogFvEGVhbh3fQog71sWSNi6-PQfe-fxTOG04R79BaMoO=w1196-h1594-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM3W6BpyadpSeUAf4-ADbmTKbyF7E2LMWZydV2FC6rQn_y4GbhaQodCAHkC-DCv8Js741hMFkdrd3usHNFPhxl0OI7p2NzEGa7-vhZ-rDGxzB37M1CNJ7QBEMJrTDkXKUolKaI-wu4_c4Fu-v-vEDbo=w720-h1280-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMF_rDxyfvIIw7vtaDXZ4VfUqOXuwC-hUeK0lsifBMJEV0CBwZl1z8K1_9rVQc-3MXRo4Zmnw0nwTfSGiroBgT8XIh83ATSOnVb5VV3oEB7p9yVSzECHRvmMbhkTjhSfZfkRqsDrj_YedU9CDdGQFF6=w720-h1280-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOryOk3s8ff5v3CK2P2fjr9DHKKVtOZwoK4JkBjE_TJoCgxdxa4nV40u1BMWC00v-JDwzDEyIVCptV9m_2mGr7lZ5x4PNm2p9tHRlY0sY_4NLmhO2l7NyAeSFXQcK0MCZ7FD9Nanu9TNrqaVRYP-U_7=w720-h1280-s-no?authuser=0"
	  
     
    ]
  } ,

{
    date: "2026-05-30",
    title: "Tour des salles",
    description: "....(save the date : 17/12/2026)",
     location: { name: "Dely Brahim, Alger", lat: 36.754930619932885, lng: 2.9785521313066137 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczNwA_8OTXn5ebRCUaC83JBnPmggk7bPMW_vLQgaViQcQj_iNPGMP9VnDhZL7E5RcwqHCXZFLR1JPY_df6FIJmIDwF7jeHN8H9A_keCdHfUoOfLDCG_xsNqJcB0Si134IfNMvRlb0W659yiA9pYP6bdF=w1046-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOASp4JLuof06-52f0p882o-zj4cWBxzAmHQBq7UGtY7aPlsmPxUNRKGxnhEq3OEq-WeX3saGqsqQz9WW1iU2vy_8pSfbXtriZKbTo9cVMLMRmWdJICcG5Mfzb_ZLka13qMuPGA5D_qv89jk49OcdGK=w1046-h1854-s-no?authuser=0"
     
    ]
  } ,



{
    date: "2026-06-02",
    title: "Rajlek houwa 3douwek",
    description: "Yasmine a pris cette phrase très au serieux",
     location: { name: "El Hamma, Alger", lat: 36.748464449140435, lng: 3.0763037089899274 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM3-onwJG8t9rkGDzEL6Z8kb8jN4wCKljo-24QGTakvaPRSdoJPYueLOZbrUwSd3DYL8hcDULz-5sry16iutHyzMMha0NQdP4RG8Eww9Y8bTDZoNC7KhMDt3QdVoMtDS1ZkcGYoPy513W-PTnA6_UT-=w1044-h1856-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczP88sUCtlPwni-M68zQLvzjnaUFKEQ2GF6-uv5a_D06WfuAN0MZKOGJ-413BuULwTsl6oKoPVoQXBzTBdz6nLzXNssXAfrMoTY_9wdeQbKxjLEzYj69DU6JwfUurfSFeAUe-7v2R57YEFF8-0nEXQeD=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOtNQYJQ-LeieWzKQ8y2RWgXcaxzEzMH9XPFN9l1KznhDMKOM2eYJ5g4HLQJGIbE5vEHkav7PaFcHZxFstdzSjF9s5_r2QH3-FkwHDQSodKyohlev_XAWVETLTfc3rFoSIM2JVxq92xOyx2-WBvMJJj=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPg0904vZeM6yKdXgXuhZnc7YhjjeOBmUulI22z83_8XJBsisajHiuoRzB0FybTo8rpwUCPxskDgLd4LklyjGXDGh9wTZ-8EMWBr4SCBA8KDZOXTGcxMRkqrORe6sCeme5F8fxoPJDj-NDgTpDo631v=w1046-h1854-s-no?authuser=0"
	  
     
    ]
  } ,

{
    date: "2026-06-03",
    title: "Petit tour à Marina Mall : le dernier avant l'été ",
    description: "Yasmine souhaite que ça soit le dernier tout court (comme à chaque fois)",
     location: { name: "Marina Mall, Alger", lat: 36.74000714167303, lng: 3.143309797906855},
    images: [
      "",
      "https://lh3.googleusercontent.com/pw/AP1GczMEdRpAaU1tyfavoQZc-Qx5tMERzrMSDDEFDpY5ugRzpyH2Ml4iaLZLgPbjAL0d8ZdatgWFXS37k1eLsRgB4pYs5QMQZBHsw4jiV4HcBJG5T7byrO_oVpt_2LdRVoIAfBz1rlzK7Ju2IC3a-GtPw7zt=w1042-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOF8MEeEzDckeR6wZnfDTrnTinHEW6ZbdnoUAtkWXU23kgoMdgfOWmB5s0YaNnRsY02FLjaMcsXjJ-VKOgAwG4ccFvlZ7ZEpOfMFit6ZT0vsoIyhctCPn8yhBjLQXwX15WA0UJaJ9s9hG2FWLY2Wq8f=w1046-h1854-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-06-13",
    title: "Fiançailles Day : she's finally got a ring",
    description: "",
     location: { name: "Résidence La Belle Colline, Alger", lat: 36.69979090237409, lng: 3.045510167222708 },
    images: [
      "img/01.jpg",
      "img/02.jpg",
	  "img/03.jpg",
	  "img/04.jpg",
	  "img/05.jpg",
	  "img/06.jpg",
	  "img/07.jpg",
	  "img/08.jpg",
	  "img/09.jpg",
	  "img/10.jpg",
	  "img/11.jpg",
	  "img/12.jpg",
	  "img/13.jpg",
	  "img/14.jpg"
     
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
      "https://lh3.googleusercontent.com/pw/AP1GczMrOq8ZUgXeJZ41zarc2YcEya1WQ3rKE2mr3JiO4cM7cLLwGZ2B-fLOQlurV7iaAeGmA-CPaRSEyPQcMlnaeFZth-jxIqsL3bUV5TuDhh4F5kzoxE3rpPBMxURxzsDWzjXfu56Gow5dRbCBHRaObZH3=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPAZ6rhz-US_FFq1_bb4HEYafiUPg22Nm6nJ5zlxkiHURhBCL9tM4k8K69SpbT5PSrawZ4N3V1SwFbXLskhKyexUGw8LDkjetlANiE4fUv_jbOQ9Z8EtrrZ3y6XmFceA_b3DfrbmNVb7yBkatdCL5cX=w1196-h674-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOoiCQaOTVf27NcHIH7iexMDyUeCN5zm-e-E7W7Xq7fm3b3oxgxRLx-2Fua1kDDSa-rSiYufyGo7E2JlLDOjPdRXnskTanjvch6KM-4Ee2C8YY8aOuT9uxcCBn8_K_8KFjkd8YXlVg4AHzHBRWuUzcS=w1196-h674-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNZJJBNFV8ZQpTNiK0ecTZwdFdoJR42uhj7IEAmwOd3DJ1BxwSLuOLfi2BiqlbGzZhpa1EELy2uKi1lAMr3DrkNh-DZr5a8oWGddO1qGYVP8eU4xBU6EWslBe-A7zvncgL8Alvy8vcZu9ThelH-wrqz=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMu0GOT-dnE9eAZ1n2bqJiwqTJbzLdOe2kouWhVrKvA_mvd2yHQzYp4L-jsFCnH5i21nIxBv14S50lrmyBdlF0bZFIZL-ECslTSnCB3cxrVBtkcqh1vzQeJwpAtm3HBgBYObXigTgZ8PHdJ5YRMbPRh=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOCNwwnwwOa37yqMv_3sq3miq1bql99UnHJHFsvW0CMDUE1yKuQD_QKHicYhfTet7S9lHqo97zgQP7Uq5Y0vdrlPJc6Lg2XhNZzqne4WtGwMKaqZt8R31EY0GlTwZ9SfpNV-LEBkO954MPIt0CQnLn6=w1046-h1854-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-07-11",
    title: "Let's celebrate in a fancy restaurant",
    description: "et comme de tradition on se fait dégager avant 15h xD",
     location: { name: "Dar el Beida, Alger", lat: 36.71848587347081, lng: 3.209058896917279 }, 
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPH7aEi0gWgBhsvDNfOMl7GBAaQC30BZ79tIONuHuvHSWvsJJWeDgUYTU4lGMiUloujRYsIMXCTu15aXoq04pzzIbCtWe8Gx3vVZbG6sKX8sSs-pVVN68vo77VeGhwclFmzo-ogiLqPovC5C0ufmkTK=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPS504QB-7vdHgAjhjqQrvHQWuF6voWERqQVX5IAbx9GfeJpjace2j2lsbouTouWPAAvPVMgdT8ZzITp8Xd5HsjDIYL4XRp61VLmSzAuRJ-enshffuywpEbDOszJudeRkQHd9jV_ywSmWOwWBbu1uJ-=w1046-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPMXV9YqKZdLc3Ed3fr1ysLKszu441sb5DX6-TKBu0tUpXbAsUruIIQFAhIGFKC0_jEE-8Oi07PKmqjuna1bNpCgZIWO3zE8qM9XAniECQAX1RZ1hmZ5hcZFQxNoemhiDShj07fSNYgQ5WiVj2I7Sah=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPXW_qf4QKv0k_EP5kAcP4BTgr35t_f1ncIqFk0Qe5R0xWibf9FrWxo1x8UDu0y7JhrwgViN3A0mcSiEOC99EPs4B46Cs0pqlU8qwwOAbEsmp6unn46xkONo5mHWgf1acRdqh4XRJdahvV6BdZsXclq=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOZGShTq0oTiLGmRX35gkmEk4uuUoWWH_0-xeZfEKV-EnOjlQcBQQAlmmnY-CZksRUV-yvfV3JCoVgP3Bk7M1Jm_RGI1JhxtW_A-JLaQeq5p8c5cgndpHubwaf_OzYaTv4Aagr-yfcApQ50aDFM8GYT=w1196-h672-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-07-16",
    title: "Date numéro 80",
    description: "",
     location: { name: "Ain Naadja, Alger", lat: 36.7056578218444, lng: 3.0820411834243067 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczMSu3Bi5Nq4BCvGzaxwxeDb1wabTckbG1M7Ys8y5j6g4S09aHMvbIIK7NNWm6X64UB4pONRI_LE6WHLEuDVsbhG40cisGKsffFMxSNo8T3VwrFwzIqxK_uATgyXiRz149ZGTAMNvsnDu5W2HzkxIJ5Q=w1196-h672-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOjmJUzxxmBDGN-pwfT7BNlir7KNUw8e7t6fua0et0XBhI0XPt28ATj6PMEpYC6P6k1XO4YXAwvnLWj3l1krLXnz6ZJb99SMNmDjxOKXIfZIJAsJm1SU7fWOmZS86NB24g2nZRvjKpqDgmeAA5zYbqh=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNXopMF7WK8QekbW-ZdNgGh-1J5qzsjH2O-v3ueDavJgMVtKO_JJr1Eq3nsKz6YZFouLo2FjPgTRe05Li2S87WQq_SV1DRIADZ2lQes0JYKjIoiqHHdJ99u4Nq36OSU1hn1nNubGhC4ZkjLJpearmI4=w1046-h1854-s-no?authuser=0"
     
    ]
  } ,



{
    date: "2026-07-22",
    title: "The ring is back baby",
    description: "Unusual Date at 18h et découverte de Bravo Ice Cream",
     location: { name: "Birkhadem, Alger", lat: 36.719273471767615, lng: 3.0504094410964337 },
    images: [
      "img/vlc_oXdU05rG0G.jpg",
	  "https://lh3.googleusercontent.com/pw/AP1GczPGnoxJ6KQYRDB2-zV9zDPMQgzt-rDTyGMbwwgzwvw7pHOYqQLP5uYlw6qF-GzxXy0anUnAo8RU7lnvLgWi_peB_1hCkPRPXWzv_XjlSwEGf5xWtY-AddZoE76HpjJGQATzB7DzlC-98mmYZjFA0BJQ=w1196-h672-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPD34BbC5tHe-Crz_YGOLGU2mX1S4LcamnPxSd9CdBeNg0oc4QZ-txKvQFPXn-4hpMZs7V7R8arbkxdWXLrgVglhKIGP2pAzNsA0TZQ6HfE2-Ng8UnEFYQfw8uRSBjWFCtecaSa85tUrXtOXhRITh-o=w1196-h672-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-07-24",
    title: "1er (double) date un vendredi bi ri3ayat #Code213",
    description: "et retour du petit dej dans la voiture avec des crepes #MondayTradition",
     location: { name: "La Buvette then Val d'hydra, Alger", lat: 36.73387447161416, lng: 3.028299046079672 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczNTG2Y2gz4IHW5ygPPspiDT5fO2UaJrKb_7P9DNoSO-PcQ1duc5Gb_LJbIYnHoM9TsFulOz57aClMZpeHdiM14vpwS346_nI4ERziSPQoDeUWJ3opqAb2kdKeW2ZmKzb4aXbCbxPyLh1Z16RuhhsB0p=w1046-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPzXsWZ3z_SCiDVyPkuAWeOCxP063VThGWCq4KQKqzymTfhvr_XksKgS3nrL34AfLFJCLv_yZHbjVQJ99nRDgPJ59A0afbizhcOFgwSnmHWttGa0nUvE1jSM6rVaj26O6ksCG4MrYA6JVSEU7vSFlrL=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNDriZ3tvznTCwkoecmcUYQ_Zoi14ixFpCCiv7DDbzTo16o_K0tBHOf919M-6vPyAsjqyybXV_TwW6U9jSOWYACd-HC2PRRqooZBaAhhozy3lmfhiT9H8ZG0htb4g8bmWU3SId6bOMnG3K9l-DMRpTf=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOlsAlj352Gp-ai9lX1niqvVSGoc0VvXkLqx_QbzTvcbjs_nV6C8UP2jEvxF1weTS3I0fsiTjJ9xFwwFmTvsKaL4H0J01J6X2VR0kroHPJNtH3SYHK6MR7DZMkWR97IXai-wegYd0-cUnReRQW8HTlJ=w1196-h672-s-no?authuser=0"
     
    ]
  } ,
{
    date: "2026-07-25",
    title: "Toutes les ocasions sont bonnes pour se retrouver #Code213",
    description: "et déjeuner tardif featuring Yass Borgir + Gelato",
     location: { name: "Val d'hydra, Alger", lat: 36.761688624420046,  lng: 3.0248953712472186 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPcQy4mxig6oTYfnf8UH-WYr6bfAFNzN-jQLQnt8OgEfaGTCqps0tyxYmWz3e8toOarRUevGUOO3Mfu5t70Ob-J1XbLnPp7ql8fdT2rS1s_7JY9r6Jxopuyz26YaCJ7t9aj3FqrulkVB4aBYnCPANKF=w1046-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMku7VBMKn-WjGpfg4cf6MxoxYigP9zJVxuZjX6wB8rmkenmtI0pYwIWWiudN8xNtA7BRAVCJ6Hhpiba0YkrZmXpTPK6aRQ_ZnckmVXvM5vQOLVAiBWnBTUmnx4EA9QNq1BeToJgQd2V_73lOcYZ5i6=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOv9TKW-e5fWEwQjQqaDcJN2v7dtERMHaPzYeIC1a3TU-GW4dDdz07zEREviVufmwhOUAoq3LxWW_cuztgxQP5NziPHH_1gB3si9ApWEskWlBpgy0MqAMC8zhT77-ZgkHR_n5ckNpfgL_0EIUXxvo-2=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOyn2YftI3AbK1YsYLAHlsqTiOdCLQTznSlk-14nAXx-g85l4REpDVLlNTm01IwYEdx7tABxQe-ZQHhdG_0CnVSwc9SPnd7dpo533imP0295XH6uW64nEMsann0f3ZyhFH2FUDrUE_H-OwnT0HGmvHY=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczM6sCO8-uI3fFUGue-FtGrbS4-gXcj3vqbm1dbmx4Ff0aiKCKjb1Rf7j6DvKbGbmAkpnqwcRg7YosKKSKhdWVIGd44w3cWWjSQ1Js46rPSOhQX0lO9UiYVCRTx32oB50iBxbSgOMOeF3bXKjq2o8jk_=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczObzDYT50aEPmU2sTfqzt6d_Ol8Mt1iYywRynDF4qoPLQQythFcE3cypXyue2_DyLXBgLk_foDsh8MeMibXaq1tgncq24tFQ9iwq2wpOknP9tTNXu1x3cC4E2Y5IFH_fXUAQl_FsrwzZa1rJJ0JInDh=w1196-h672-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-07-31",
    title: "Ofet celle du 24-07 ce n'était pas la derniere séance de formation",
    description: "une autre occasion pour se revoir ... 2 fois :D",
     location: { name: "Val d'hydra, Alger", lat: 36.761688624420046,  lng: 3.0248953712472186 },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczM4IabHhbQZghfq2IGpsubsju77m6dFPtLYtZsFTGPGQtprjkmlLyFvnlqPLLiiU2l43WPbpb1URjvlxr9jC9k0V0xYDOd3xPrXspBLw6SGMfp_GfR7-al5FlyYNU1Q1Ci_Qml0fm0ApwDHdMWtHcEj=w1196-h672-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNxvWnWKG5R4OXuo8z51Y8ryXCo_haAnrXpl5dkrR9VJCEsfm-QQIZv1q-ghnlcvHvacGtrDbELRyQ1GP8nZs6jOI-kELs1STGl3QIqGdeiU8UkQVFqZiNg8NAMgGlNJnJg-3JPaDP2VaQoewlfo1t3=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMWKbxVWQLGUMmSTHagFUOisEw89yPsCAFfSYhfLLDZXb9MCfCk4izf0J7Y0FpQWBbohLj_8liyWL1XDmktJ4DCXjCMr2BQnFB-HhHukQCjfhIYxMAyaPNnP9TuBoeNShvNYI5zFupH2JU1oxohh66y=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOvRrITHdkeZuVKLeHmu3rnzi9qZCxwVirA8qfy15wzJgKDm3KvMa7cTndpuk8jDnhbOngtJB_DJ9vKlAR4G0DGIY-tHid76MCj50C6YhM4k-_u_D0sAb2V6sWOAvIpVmlC3KlcfP4-1PB28i7KMbWd=w1196-h672-s-no?authuser=0"
     
    ]
  } ,

{
    date: "2026-08-02",
    title: "34+1 : The Anniversary Menad Edition",
    description: "Une année passée ensemble et quelle année, I Love You So Much <3",
     location: { name: "Hadiqat El Raboua, Tipaza", lat: 36.59226335499861, lng: 2.4667259834204507  },
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPjA-NcPELrUk0lBodR1Qx6tT4utqw7LT6BH0EEa2HcW_Sr91M5RzNAs-HnosyO2xo0RRc_ahp-y6Z5b5J0DzZNjiwsW-Q4n16Ef2Hl8oNYD1OCZvAcRW5vNXyQ1yVrbtvGOts1txQ12V_Il0n7p16j=w1046-h1854-s-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczP5G5teCmXgzIcdDtzeMxqu8a0zl5hvslUmjntfl09SYLVEiimuT0XWDgyB4j0NmQA6q_1ACPZoPmkt0NbAyXLdehrS_F16a8TobBCHdh0kK20FSAW2RYvuMuMStAe3Mdf-LXgtqbwW2E42u9tRLQLk=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNyxmu6comwKu0n6Iy4IifYrPRFy3TQ64NwXKFbtVoQsLqx3VPD5K9wTcMvuwmXaaZIjKJ6QQJYadlJm426tr0cgwJJnJg7xgUjehx9AFCt0rz8mtzewwbZZNrVhs6T2cWUZyDbNtvK9qtYrwQDIDr0=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczNoe_d66j2_r2eMwk7mj5MUaOPrk-bJGeMiY0i83guzs2nrvq11AKTqcPpssxmXan-NcLDoJl_hK9qF65-WnWbAtoCPd9icFuS19rHkZEWVOpyQV_5pn5xoV-_uCitBePxo2E9w7i-Rg88Iie7LLDOi=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczMjMYbAqd00oX098jLxpbX2D2PoHyz2k95JZMthWoRA4VclOxANJlAdekXGFY5M9HLbY2AGEvIV0XBTCoqJ61A5paFGGIndJKxCTQyg3e3V38mTJajf3KyLuI3mzonZ2iiG1MHwmxrylI3W8avR0YB7=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOkvccOPSRI9C4BqOr9iRTpByA-LjhSyoaIleNq_SLBHB4snGVjuQ1keBDOFJASuDWvRNoaYbR43xQZfXP-QsW44j6TFKI8CIYGIxs7e_X_5xZQtvAaPPnIGpvYw5S7CePPMIs2Ozxf0D5Hf1D2Nfyj=w1196-h672-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczOIWq4hxLGjPdcta3chFZBsCvKx9Rk6VzIJSAKBw88LYuae3oRLAfV3hxT26jygQNKdvuZoJmdwv0Pt2VqDUpAwgSvToHSKsCJ-Fl6Lwp-oUz7g_zxN-5-OEWSTWNQGtVpybgBAh4IbRsr-lK_NLDyr=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczN47LpmzME83xXZOlrH9JwiGM5SuP957YGyCUprMfTfwpDx8XR2113oufWEN6x9w9S8FL6Y8D-l2GaeJAB7U_gqElgcW_4gGf1NXkUrXVNiIw_ONPQYyPrJrV5CGU_V_WK-tKy-dSskN13r2fBhE39O=w1046-h1854-s-no?authuser=0",
	  "https://lh3.googleusercontent.com/pw/AP1GczPN9gHaR98hc2oVgZhJ_ZJLHHXMVRHjrLn74MyixJkm3pkc7aZLBWEFX4QGZYSXl82lbm8KE0079qkX9msJjPXHKqAfBcTAdOqaVLFOCcysybzi3nt1RQugQR3bcKj-0h4ups_SSHwv3iJf0TNKNNkO=w1046-h1854-s-no?authuser=0"
     
    ]
  } ,


];
