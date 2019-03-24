// drag and drop elements with 'mousedown' 'mousemove' and 'mouseup' events

// offset to initial position at 'mousedown'
let offset = [0, 0];
let dragTarget;
var targetNodeObj;
let isDown = false;
var nodeElements; // node and badge DOM elements

function dragStart(e) {
  if (!document.body.classList.contains("edit-mode")) return;
  dragTarget = e.target;
  if (dragTarget !== this) return;
  if (nodeElements.includes(dragTarget)) {
    targetNodeObj = dragTarget;
  } else {
    return;
  }
  for (let n of nodes) if (n.domElement === dragTarget) targetNodeObj = n;
  if (targetNodeObj.animation) return;
  isDown = true;
  offset = [
    dragTarget.getBoundingClientRect().left - e.clientX,
    dragTarget.getBoundingClientRect().top - e.clientY
  ];
}

function drag(e) {
  e.preventDefault();
  if (isDown) {
    dragTarget.style.left = (e.clientX + offset[0]) + 'px';
    dragTarget.style.top = (e.clientY + offset[1]) + 'px';
    targetNodeObj.deleteLinks();
    targetNodeObj.linkParents();
    targetNodeObj.linkChildren();
  }
}

function dragLeave(e) {
  isDown = false;
}



