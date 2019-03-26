
const wrapper = document.getElementById("wrapper");
var nodes;

function initLayout(layout) {
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  nodes = [];
  }

  for (let i of layout) {
    if (i.type == "badge") {
      const node = new Badge(i.id, i.posXY, i.text, i.color, i.image || null, i.children);
      nodes.push(node);
    } else if (i.type == "node") {
      const node = new Node(i.id, i.posXY, i.text, i.color, i.image || null, i.children);
      nodes.push(node);
    }
  }
  
  for (let n of nodes) {
    n.getChildren()
    n.getParents();
    n.linkChildren();
    n.move(n.posXY);
  }

  // node and badge DOM elements
  nodeElements = nodes.map(a => a.domElement);
  for (let element of nodeElements){
    element.addEventListener('mousedown', dragStart, true);
    element.addEventListener('mouseup', dragLeave, true);
    element.addEventListener('mousemove', drag, true);
  }
}

initLayout(cv2019v3Layout);

const nodesInfo1 = [];

function saveNodeInfo(destination, ...nodes) {
  for (let n of nodes) {
    let obj = {};
    obj.type = n.type
    obj.id = n.id;
    obj.posXY = n.getCoords(unit="px");
    obj.text = n.text;
    obj.color = n.color;
    obj.image = n.image;
    obj.children = n.children.map(i => i.id);
    destination.push(obj)
  }
}

function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

// saveNodeInfo(nodesInfo1, ...nodes);

// const nodesInfo1Json = JSON.stringify(nodesInfo1);

// download(nodesInfo1Json, 'nodesInfo1.json', 'text/plain');