/////////////////////////////////////////////////////////////
// TODO : function to automatically generate muliple nodes //

// const nodeCount = {
//   nodeInc: 0,
//   badgeInc: 0
// }

// function createNewNode(type='node', pos, text=undefined, color=undefined) {
//   let inc = nodeCount[type + 'Inc'] += 1;
//   if (type == 'node') {
//     return new Node(type + inc, pos, text, color);
//   } else if (type == 'badge') {
//     return new Badge(type + inc, pos, text, color);
//   } 
// }

/////////////////////////////////////////////////////////////

const creaColor = '#6D314F';
const codeColor = '#3B3B78';
const commColor = '#5F3270';

const textBadge1 = " --------- CREA -------- CREA";
const badge1 = new Badge("crea", [468, 495], textBadge1, creaColor);
const textBadge2 = " --------- CODE -------- CODE";
const badge2 = new Badge("code", [718, 449], textBadge2, codeColor);
const textBadge3 = "------- COMM ------ COMM ";
const badge3 = new Badge("comm", [968, 495], textBadge3, commColor);

const creaNode1Txt = [
  ["• INFOGRAPHISTE 2D/3D freelance 2005-2007, 2011-2018"],
  ["Multimédia Print / Vidéo. Modélisation 3D, animation 3D, Affiches, flyers, cartes de visite, illustration vectorielle, story-boarding."],
  ["• GRAPHIR DESIGN Paris 1998"],
  ["Stage entreprise graphisme spécialisée dans le print."]
];
const creaNode1 = new Node("crea1", [353, 192], creaNode1Txt, creaColor);

const creaNode2Txt = [
  ["• SUPINFOCOM Arles 2003-2004"],
  ["Aujourd'hui Ecole MOPA - Ecole du film d'animation et de l'image de synthèse. "],
  ["• E-ART SUP Paris 2001-2003"],
  ["École de multimédia - création numérique"],
  ["• BAC ARTS APPLIQUÉS Paris 1998"]
];
const creaNode2 = new Node("crea2", [143, 487], creaNode2Txt, creaColor);

const codeNode1Txt = [
  ["• IFOCOP DÉVELOPPEUR WEB Montigny-le-Bretonneux 2018-2019"],
  ["Formation diplomante bac+3 en alternance. Front-end + Back-end. Responsive-design, référencement, outils productivité, modélisation bases de données, outils CMS."]
];
const codeNode1 = new Node("code1", [642, 242], codeNode1Txt, codeColor);

const codeNode2Txt = [
  ["• FORMATIONS EN LIGNE UDEMY"],
  ["\"Git a Web Developer Job: Mastering the Modern Workflow\", Brad Schiff."],
  ["\"The Complete JavaScript Course\", Jonas Schmedtmann."],
  ["• LIVRES PROGRAMMATION"],
  ["\"Learning Pyhton The Hard Way\", Zed Shaw"],
  ["\"Eloquent Javascript\", Marijn Haverbeke"]
];
const codeNode2 = new Node("code2", [642, 583], codeNode2Txt, codeColor);

const commNode1Txt = [
  ["• \" ZOBAR \" pièce mise-en-scène M. Tracke. Théâtre de Ménilmontant Paris 2013-2014"],
  ["• COURS FLORENT Paris 2007-2010"],
  ["Formation à l'acteur. Jeu face caméra, improvisation, corps en mouvement."],
];
const commNode1 = new Node("comm1", [932, 250], commNode1Txt, commColor);

const commNode2Txt = [
  ["• VENTE ET BANCAIRE"],
  ["Vendeur Printemps textile homme, Célio, Séphora CC Parly2, Le Chesnay 2001 et 2008"],
  ["Saisonnier Société Générale - en bureaux et guichet - Paris et Caen 1998-2000."]
];
const commNode2 = new Node("comm2", [1146, 500], commNode2Txt, commColor);


var nodes = [badge1, badge2, badge3, creaNode1, creaNode2, codeNode1, codeNode2, commNode1, commNode2];

badge1.getChildren(creaNode1, creaNode2);
badge2.getChildren(badge1, badge3, codeNode1, codeNode2);
badge3.getChildren(commNode1, commNode2);

for (let n of nodes) {
  n.getParents();
  n.linkChildren();
  n.move(...n.initPos);
}