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

// const creaColor = '#6D314F';
// const codeColor = '#3B3B78';
// const commColor = '#5F3270';

// const creaText = " --------- CREA -------- CREA";
// const creaBadge = new Badge("crea-badge", [468, 495], creaText, creaColor);
// const codeText = " --------- CODE -------- CODE";
// const codeBadge = new Badge("code-badge", [718, 466], codeText, codeColor);
// const commText = "------- COMM ------ COMM ";
// const commBadge = new Badge("comm-badge", [968, 495], commText, commColor);

// const creaNode1Txt = [
//   ["-------- INFOGRAPHISTE 2D/3D ------ "],
//   ["Freelance 2005-2007, 2011-2018. Multimédia Print / Vidéo. Modélisation 3D, animation 3D, Affiches, flyers, cartes de visite, illustration vectorielle."],
//   ["------------ GRAPHIR DESIGN -----------"],
//   ["Stage entreprise graphisme spécialisée \"print\". Paris 1998."]
// ];
// const creaNode1 = new Node("crea1", [353, 210], creaNode1Txt, creaColor);

// const creaNode2Txt = [
//   ["--------- SUPINFOCOM ARLES ---------"],
//   ["Aujourd'hui Ecole MOPA - Ecole du film d'animation et de l'image de synthèse. 2003-2004."],
//   ["------------ E-ART SUP PARIS -----------"],
//   ["École de multimédia - création numérique. 2001-2003."],
//   ["----- BAC ARTS APPLIQUÉS 1998 ---"]
// ];
// const creaNode2 = new Node("crea2", [120, 487], creaNode2Txt, creaColor);

// const creaNode3Txt = [
//   ["------------ Arts traditionnels ------------"],
//   ["Dessin, peinture, sculpture, photographie. "],
//   ["------------ Arts numériques -------------"],
//   ["Digital painting/sculpting."]
// ];
// const creaNode3 = new Node("crea3", [120, 747], creaNode3Txt, creaColor);

// const creaNode4Txt = [
//   ["• Curiosité • Créativité • Polyvalence"]
// ];
// const creaNode4 = new Node("crea4", [120, 937], creaNode4Txt, creaColor);

// const codeNode1Txt = [
//   ["---- IFOCOP DÉVELOPPEUR WEB ---"],
//   ["Montigny-le-Bretonneux 2018-2019. Formation diplomante bac+3 en alternance. Front-end + back-end. Responsive-design, référencement, outils productivité, modélisation bases de données, outils CMS."]
// ];
// const codeNode1 = new Node("code1", [642, 262], codeNode1Txt, codeColor);

// const codeNode2Txt = [
//   ["- FORMATIONS EN LIGNE UDEMY -"],
//   ["\"Git a Web Developer Job: Mastering the Modern Workflow\", Brad Schiff."],
//   ["\"The Complete JavaScript Course\", Jonas Schmedtmann."],
//   ["----- LIVRES PROGRAMMATION -----"],
//   ["\"Learning Python The Hard Way\", Zed Shaw."],
//   ["\"Eloquent Javascript\", Marijn Haverbeke."]
// ];
// const codeNode2 = new Node("code2", [642, 605], codeNode2Txt, codeColor);

// const commNode1Txt = [
//   [" -------- PIÈCE THÉÂTRE ZOBAR -------"],
//   ["Comédien. mise-en-scène M. Tracke. Théâtre de Ménilmontant Paris 2013-2014."],
//   ["------------ COURS FLORENT -----------"],
//   ["Formation à l'acteur. Jeu face caméra, improvisation, corps en mouvement. Paris 2007-2010."],
// ];
// const commNode1 = new Node("comm1", [932, 226], commNode1Txt, commColor);

// const commNode2Txt = [
//   ["• Expression en public"],
//   ["• Improvisation • Face caméra"]
// ];
// const commNode2 = new Node("comm2", [1220, 287], commNode2Txt, commColor);

// const commNode3Txt = [
//   ["• ANGLAIS LU ET PARLÉ. (niv. B2+)"],
//   ["language technique / conversation."]
// ];
// const commNode3 = new Node("comm3", [1167, 502], commNode3Txt, commColor);

// const commNode4Txt = [
//   ["--------- VENTE ET BANCAIRE ---------"],
//   ["Vendeur Printemps textile homme, Célio, Séphora CC Parly2, Le Chesnay 2001 et 2008."],
//   ["Saisonnier Société Générale - en bureaux et guichet - Paris et Caen 1998-2000."]
// ];
// const commNode4 = new Node("comm4", [1167, 632], commNode4Txt, commColor);

// const commNode5Txt = [
//   [" • Communication • Adaptabilité"],
//   [" • Patience • Structure"]
// ];
// const commNode5 = new Node("comm5", [1167, 852], commNode5Txt, commColor);

// const sqlNode = new Node("sql", [610, 100], null, codeColor, "images/sql-white.svg");
// const phpNode = new Node("php", [717, 100], null, codeColor, "images/php-white.svg");
// const ajaxNode = new Node("ajax", [824, 100], null, codeColor, "images/ajax-white.svg");

// const max3dsNode = new Node("max3ds", [100, 272], null, creaColor, "images/3dsmax-white.svg");
// const photoshopNode = new Node("photoshop", [195, 210], null, creaColor, "images/photoshop-white.svg");
// const illustratorNode = new Node("illustrator", [195, 335], null, creaColor, "images/illustrator-white.svg");

// const html5Node = new Node("html5", [468, 638], null, codeColor, "images/html5-white.svg");
// const css3Node = new Node("css3", [468, 764], null, codeColor, "images/css3-white.svg");
// const sassNode = new Node("sass", [468, 902], null, codeColor, "images/sass-white.svg");
// const pythonNode = new Node("python", [968, 638], null, codeColor, "images/python-white.svg");
// const jsNode = new Node("js", [968, 764], null, codeColor, "images/js-white.svg");
// const gulpNode = new Node("gulp", [968, 902], null, codeColor, "images/gulp-white.svg");
// const gitNode = new Node("git", [717, 923], null, codeColor, "images/git-white.svg");


// var nodes = [creaBadge, codeBadge, commBadge, creaNode1, creaNode2, creaNode3, creaNode4, codeNode1, codeNode2, commNode1, commNode2, commNode3, commNode4, commNode5, max3dsNode, photoshopNode, illustratorNode, sqlNode, phpNode, ajaxNode, html5Node, css3Node, sassNode, gitNode, pythonNode, jsNode, gulpNode, gitNode];

// creaBadge.getChildren(creaNode1, creaNode2);
// creaNode1.getChildren(max3dsNode, photoshopNode, illustratorNode);
// creaNode2.getChildren(creaNode3);
// creaNode3.getChildren(creaNode4);
// codeBadge.getChildren(creaBadge, commBadge, codeNode1, codeNode2);
// commBadge.getChildren(commNode1, commNode3, commNode4);
// commNode1.getChildren(commNode2);
// commNode4.getChildren(commNode5);
// codeNode1.getChildren(sqlNode, phpNode, ajaxNode);
// codeNode2.getChildren(html5Node, css3Node, jsNode, pythonNode, gitNode);
// css3Node.getChildren(sassNode);
// jsNode.getChildren(gulpNode);

const nodes = [];

for (let i of cv2019v1Layout) {
  if (i.type == "badge") {
    console.log(i.children);
    const node = new Badge(i.id, i.posVWVH, i.text, i.color, i.image || null, i.children);
    nodes.push(node);
  } else if (i.type == "node") {
    const node = new Node(i.id, i.posVWVH, i.text, i.color, i.image || null, i.children);
    nodes.push(node);
  }
}

for (let n of nodes) {
  n.getChildren()
  n.getParents();
  n.linkChildren();
  n.move(n.posXY);
}

const nodesInfo1 = [];

function saveNodeInfo(destination, ...nodes) {
  console.log(nodes);
  console.log(nodes[1].getCoords(unit="vwvh"));
  for (let n of nodes) {
    let obj = {};
    obj.type = n.type
    obj.id = n.id;
    obj.posVWVH = n.getCoords(unit="vwvh");
    obj.text = n.text;
    obj.color = n.color;
    obj.image = n.image;
    obj.children = n.children.map(i => i.id);
    destination.push(obj)
  }
}

saveNodeInfo(nodesInfo1, ...nodes);

const nodesInfo1Json = JSON.stringify(nodesInfo1);

function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
// download(nodesInfo1Json, 'nodesInfo1.json', 'text/plain');