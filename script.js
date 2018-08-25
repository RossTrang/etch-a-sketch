/* This is the code to create the drawing grid.
Initial values will be set to 16x16.
The 'Clear' button will also prompt the user to enter dimensions for a new grid. */

let dimensions = 16;

document.body.onload = createGrid(dimensions);

function createGrid () {

  const sketchPad = document.createElement('div')
  sketchPad.className = 'sketchPad';

  for (let index = 0; index < dimensions * dimensions; index++) {
    var gridCell = document.createElement('div')
    gridCell.className = 'gridCell';
    sketchPad.appendChild(gridCell);
  }

  const sheet = document.createElement('style')
  sheet.innerHTML = ".sketchPad {display: grid; grid-template-rows: repeat("+dimensions+", 1fr); grid-template-columns: repeat("+dimensions+", 1fr); height: 70vh; width: 70vw; margin: auto; border: 1px black solid}";
  document.body.appendChild(sheet);

  var currentDiv = document.getElementById('resetBtn'); 
  document.body.insertBefore(sketchPad, currentDiv); 
}
