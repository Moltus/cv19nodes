const creaColor = '#6D314F';
const codeColor = '#3B3B78';
const commColor = '#5F3270';

const cv2019v1Layout = [
  {
    type: "badge",
    id: "crea-badge",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: " --------- CREA -------- CREA",
    color: "rgb(109, 49, 79)",
    children: [
      "crea1",
      "crea2"
    ]
  },
  {
    type: "badge",
    id: "code-badge",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: " --------- CODE -------- CODE",
    color: "rgb(59, 59, 120)",
    children: [
      "crea-badge",
      "comm-badge",
      "code1",
      "code2"
    ]
  },
  {
    type: "badge",
    id: "comm-badge",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: "------- COMM ------ COMM ",
    color: "rgb(95, 50, 112)",
    children: [
      "comm1",
      "comm3",
      "comm4"
    ]
  },
  {
    type: "node",
    id: "crea1",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [
      [
        "-------- INFOGRAPHISTE 2D/3D ------ "
      ],
      [
        "Freelance 2005-2007, 2011-2018. Multimédia Print / Vidéo. Modélisation 3D, animation 3D, Affiches, flyers, cartes de visite, illustration vectorielle."
      ],
      [
        "------------ GRAPHIR DESIGN -----------"
      ],
      [
        "Stage entreprise graphisme spécialisée \"print\". Paris 1998."
      ]
    ],
    color: "rgb(109, 49, 79)",
    children: [
      "max3ds",
      "photoshop",
      "illustrator"
    ]
  },
  {
    type: "node",
    id: "crea2",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [
      [
        "--------- SUPINFOCOM ARLES ---------"
      ],
      [
        "Aujourd'hui Ecole MOPA - Ecole du film d'animation et de l'image de synthèse. 2003-2004."
      ],
      [
        "------------ E-ART SUP PARIS -----------"
      ],
      [
        "École de multimédia - création numérique. 2001-2003."
      ],
      [
        "----- BAC ARTS APPLIQUÉS 1998 ---"
      ]
    ],
    color: "rgb(109, 49, 79)",
    children: [
      "crea3"
    ]
  },
  {
    type: "node",
    id: "crea3",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [
      [
        "------------ Arts traditionnels ------------"
      ],
      [
        "Dessin, peinture, sculpture, photographie. "
      ],
      [
        "------------ Arts numériques -------------"
      ],
      [
        "Digital painting/sculpting."
      ]
    ],
    color: "rgb(109, 49, 79)",
    children: [
      "crea4"
    ]
  },
  {
    type: "node",
    id: "crea4",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [
      [
        "• Curiosité • Créativité • Polyvalence"
      ]
    ],
    color: "rgb(109, 49, 79)",
    children: []
  },
  {
    type: "node",
    id: "code1",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [
      [
        "---- IFOCOP DÉVELOPPEUR WEB ---"
      ],
      [
        "Montigny-le-Bretonneux 2018-2019. Formation diplomante bac+3 en alternance. Front-end + back-end. Responsive-design, référencement, outils productivité, modélisation bases de données, outils CMS."
      ]
    ],
    color: "rgb(59, 59, 120)",
    children: [
      "sql",
      "php",
      "ajax"
    ]
  },
  {
    type: "node",
    id: "code2",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [
      [
        "- FORMATIONS EN LIGNE UDEMY -"
      ],
      [
        "\"Git a Web Developer Job: Mastering the Modern Workflow\", Brad Schiff."
      ],
      [
        "\"The Complete JavaScript Course\", Jonas Schmedtmann."
      ],
      [
        "----- LIVRES PROGRAMMATION -----"
      ],
      [
        "\"Learning Python The Hard Way\", Zed Shaw."
      ],
      [
        "\"Eloquent Javascript\", Marijn Haverbeke."
      ]
    ],
    color: "rgb(59, 59, 120)",
    children: [
      "html5",
      "css3",
      "js",
      "python",
      "git"
    ]
  },
  {
    type: "node",
    id: "comm1",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [
      [
        " -------- PIÈCE THÉÂTRE ZOBAR -------"
      ],
      [
        "Comédien. mise-en-scène M. Tracke. Théâtre de Ménilmontant Paris 2013-2014."
      ],
      [
        "------------ COURS FLORENT -----------"
      ],
      [
        "Formation à l'acteur. Jeu face caméra, improvisation, corps en mouvement. Paris 2007-2010."
      ]
    ],
    color: "rgb(95, 50, 112)",
    children: [
      "comm2"
    ]
  },
  {
    type: "node",
    id: "comm2",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [
      [
        "• Expression en public"
      ],
      [
        "• Improvisation • Face caméra"
      ]
    ],
    color: "rgb(95, 50, 112)",
    children: []
  },
  {
    type: "node",
    id: "comm3",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [
      [
        "• ANGLAIS LU ET PARLÉ. (niv. B2+)"
      ],
      [
        "language technique / conversation."
      ]
    ],
    color: "rgb(95, 50, 112)",
    children: []
  },
  {
    type: "node",
    id: "comm4",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [
      [
        "--------- VENTE ET BANCAIRE ---------"
      ],
      [
        "Vendeur Printemps textile homme, Célio, Séphora CC Parly2, Le Chesnay 2001 et 2008."
      ],
      [
        "Saisonnier Société Générale - en bureaux et guichet - Paris et Caen 1998-2000."
      ]
    ],
    color: "rgb(95, 50, 112)",
    children: [
      "comm5"
    ]
  },
  {
    type: "node",
    id: "comm5",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [
      [
        " • Communication • Adaptabilité"
      ],
      [
        " • Patience • Structure"
      ]
    ],
    color: "rgb(95, 50, 112)",
    children: []
  },
  {
    type: "node",
    id: "max3ds",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(109, 49, 79)",
    "image": "images/3dsmax-white.svg",
    children: []
  },
  {
    type: "node",
    id: "photoshop",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(109, 49, 79)",
    "image": "images/photoshop-white.svg",
    children: []
  },
  {
    type: "node",
    id: "illustrator",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(109, 49, 79)",
    "image": "images/illustrator-white.svg",
    children: []
  },
  {
    type: "node",
    id: "sql",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(59, 59, 120)",
    "image": "images/sql-white.svg",
    children: []
  },
  {
    type: "node",
    id: "php",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(59, 59, 120)",
    "image": "images/php-white.svg",
    children: []
  },
  {
    type: "node",
    id: "ajax",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(59, 59, 120)",
    "image": "images/ajax-white.svg",
    children: []
  },
  {
    type: "node",
    id: "html5",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(59, 59, 120)",
    "image": "images/html5-white.svg",
    children: []
  },
  {
    type: "node",
    id: "css3",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(59, 59, 120)",
    "image": "images/css3-white.svg",
    children: [
      "sass"
    ]
  },
  {
    type: "node",
    id: "sass",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(59, 59, 120)",
    "image": "images/sass-white.svg",
    children: []
  },
  {
    type: "node",
    id: "git",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(59, 59, 120)",
    "image": "images/git-white.svg",
    children: []
  },
  {
    type: "node",
    id: "python",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(59, 59, 120)",
    "image": "images/python-white.svg",
    children: []
  },
  {
    type: "node",
    id: "js",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(59, 59, 120)",
    "image": "images/js-white.svg",
    children: [
      "gulp"
    ]
  },
  {
    type: "node",
    id: "gulp",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(59, 59, 120)",
    "image": "images/gulp-white.svg",
    children: []
  },
  {
    type: "node",
    id: "git",
    posVWVH: [
      50.59901338971106,
      46.917450365726225
    ],
    text: [],
    color: "rgb(59, 59, 120)",
    "image": "images/git-white.svg",
    children: []
  }
]