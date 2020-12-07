// container to put in the grids
// slider input to control the grid size
// color button to control the color variable
// add mouseover event to grid, color grid depends on the color variable
const container = document.querySelector('.container');
const colorButtons = document.querySelectorAll('.color-buttons');
const resetButton = document.querySelector('.reset');
const colorPicked = document.querySelector('#color-picker');
const userInput = document.getElementById("quantity");
let slider = document.querySelector('#quantity');
let color = 'black';
let colorChosen;


// create grids and append in container
function createGrid(numberPerSide) {
  removeCells();
  container.style.gridTemplateColumns = (`repeat(${numberPerSide}, 2fr)`);
  container.style.gridTemplateRows = (`repeat(${numberPerSide}, 2fr)`);
  let gridArea = numberPerSide * numberPerSide;
  for (let i = 0; i < gridArea; i++){
    let grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style = 'background-color: white';
    container.appendChild(grid);
  }
  let grids = container.querySelectorAll('div');
  grids.forEach(grid => grid.addEventListener('mouseover', colorGrid));
}

// remove grids, if container is not empty, removeChild()
function removeCells() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// reset function
function resetAll() {
  let grids = container.querySelectorAll('div');
  grids.forEach(grid => grid.style.backgroundColor = 'white');
  createGrid(slider.value);
}

// get value from color picker
function colorPicker(event) {
  color = event.target.value;
}

// update value when a color button is clicked
function changeColor(event) {
  switch(event.target.value) {
    case 'black':
      colorChosen = 'black';
      break;
    case 'skyblue':
      colorChosen = 'skyblue';
      break;
    case 'random':
      colorChosen = 'random';
      break;
    case 'user':
      colorChosen = 'user';
      break;
    case 'eraser':
      colorChosen = 'eraser';
      break;
    default:
      colorChosen = 'black';
      break;
  }
}

// onmouseover event class
function colorGrid() {
  switch (colorChosen) {
    case 'black':
      this.style.backgroundColor = 'black';
      this.style.outline = 'none';
      break;
    case 'skyblue':
      this.style.backgroundColor = 'skyblue';
      this.style.outline = 'none';
      break;
    case 'random':
      this.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
      this.style.outline = 'none';
      break;
    case 'eraser':
      this.style.backgroundColor = 'white';
      this.style.outline = '1px solid lightblue';
      break;
    case 'user':
      this.style.backgroundColor = color;
      this.style.outline = 'none';
      break;
    default:
      this.style.backgroundColor = color;
      this.style.outline = 'none';
      break;
  }
}

createGrid(16);

resetButton.addEventListener('click', resetAll);
userInput.addEventListener("change", resetAll);
colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor));
colorPicked.addEventListener('change', colorPicker, false);
colorPicked.addEventListener('input', colorPicker, false);
