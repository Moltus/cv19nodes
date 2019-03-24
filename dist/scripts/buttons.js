document.getElementById("toggle-edit").addEventListener('click', toggleOptions);
document.getElementById("random-pos").addEventListener('click', randomPositions);
document.getElementById("random-colors").addEventListener('click', randomColors);

document.getElementById("get-coords").addEventListener('click', getNodesCoords);
document.getElementById("reset-cv2019").addEventListener('click', resetNodes);



const options = document.getElementById('options');
const optionsBtn = document.getElementById('toggle-edit');
function toggleOptions() {
  options.classList.toggle('active');
  optionsBtn.classList.toggle('active');
  document.body.classList.toggle('edit-mode');
  optionsBtn.textContent = optionsBtn.classList.contains('active') ? "> Mode Visualisation" : "> Mode Édition";
}

function randomPositions() {
  for (let n of nodes) {
    if (n.animation) return;
    rndX = Math.floor(Math.random() * 80) + 1;
    rndY = Math.floor(Math.random() * 70) + 10;
    n.move([rndX, rndY], 'vwvh');
  }
}

function randomColors() {
  for (let n of nodes) {
    n.getColor();
  }
}

function resetNodes() {
  initLayout(cv2019v2Layout);
}


const infoCoords = document.getElementById('info-coords');
function getNodesCoords() {
  let infoText = '';
  if (targetNodeObj) {
    let coords = targetNodeObj.getCoords('px').map(a => a.toFixed(2));
    infoText = ` ${targetNodeObj.id}  x: ${coords[0]} px, y: ${coords[1]} px `;
  } else infoText = "cliquez sur un élément pour obtenir ses coordonnées";
  infoCoords.textContent = infoText;
}