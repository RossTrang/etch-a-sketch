/* This is the code to create the drawing grid.
Initial values will be set to 16x16.
The 'Reset' button will also prompt the user to enter dimensions for a new grid. */

const resetBtn = document.getElementById('resetBtn').addEventListener("click", newPad)
let dimensions = 16;

document.body.onload = createGrid(dimensions);

function createGrid () {
  
  const sketchPad = document.createElement('div')
  sketchPad.id = 'sketchPad'
  
  for (let index = 0; index < dimensions * dimensions; index++) {
    const gridCell = document.createElement('div')
    gridCell.className = 'gridCell';
    sketchPad.appendChild(gridCell);
  }
  
  const sheet = document.createElement('style')
  sheet.innerHTML = "#sketchPad {display: grid; grid-template-rows: repeat("+dimensions+", 1fr); grid-template-columns: repeat("+dimensions+", 1fr); height: 70vh; width: 70vw; margin: auto; border: 1px #53b3d6 solid}";
  document.body.appendChild(sheet);
  
  var currentDiv = document.getElementById('resetBtn'); 
  document.body.insertBefore(sketchPad, currentDiv); 
  
  // Set listener to change the cell background as mouse moves over
  
  let cells = sketchPad.getElementsByClassName('gridCell')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function(event) {
      event.target.classList.add('changeColor');
    });
  }
  
}

function newPad () {
  let scratch = document.getElementById('sketchPad')
  if (scratch.parentNode) {scratch.parentNode.removeChild(scratch)}
  dimensions = prompt('What size of grid woud you like?', 16);
  createGrid(dimensions)
}
