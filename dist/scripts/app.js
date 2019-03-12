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

const textCode = [];

const textBadge1 = " --------- CREA -------- CREA";
const badge1 = new Badge("crea", [468, 495], textBadge1, '#6D214F');
const textBadge2 = " --------- CODE -------- CODE";
const badge2 = new Badge("code", [718, 495], textBadge2, '#3B3B98');
const textBadge3 = "------- COMM ------ COMM ";
const badge3 = new Badge("comm", [968, 495], textBadge3, '#5F3280');
const creaNode1Txt = [
  ["INFOGRAPHISTE 2D/3D FREELANCE"],
  ["Multimédia Print / Vidéo. Modélisation 3D (box-modeling), animation 3D (keyframing), Affiches, flyers, cartes de visite, illustration vectorielle, story-boarding."]
]
const creaNode1 = new Node("crea1", [400, 280], creaNode1Txt, '#6D214F');
const codeNode1Txt = [
  ["IFOCOP DÉVELOPPEUR WEB"],
  ["Formation diplomante bac+3 en alternance. Front-end + Back-end. Déc. 2018 à Juill. 2019."]
]
const codeNode1 = new Node("code1", [650, 340], codeNode1Txt, '#3B3B98')

var nodes = [badge1, badge2, badge3, creaNode1,codeNode1];

badge1.getChildren(creaNode1);
badge2.getChildren(badge1, badge3, codeNode1);


for (let n of nodes) {
  n.getParents();
  n.linkChildren();
  n.move(...n.initPos);
}