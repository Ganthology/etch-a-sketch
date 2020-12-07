// container to put in the grids
// slider input to control the grid size
// color button to control the color variable
// add mouseover event to grid, color grid depends on the color variable

const container = document.querySelector('.container');
const colorButtons = document.querySelectorAll('.color-buttons');
const resetButton = document.querySelector('.reset');
const colorPicked = document.querySelector('#color-picker');
let slider = document.querySelector('#quantity');
let colorChosen = 'black';

// create grids and append in container
createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  console.log(userInput.value);
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", colorChosen);
});

// update value when a color button is clicked
function changeColor(event) {
  console.log(event.target.value)
  switch(event.target.value) {
    case 'black':
      colorChosen = 'black';
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

// random color function
function randomColor() {
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);
  let alpha = (0.5 + Math.random()*0.5);
  return [red, green, blue, alpha];
}

function colorPicker(event) {
  colorChosen = event.target.value;
}



// onmouseover event class
function colorGrid() {
  switch (colorChosen) {
    case 'black':
      this.style.backgroundColor = 'black';
      break;
    case 'random':
      this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);;
      break;
    case 'eraser':
      this.style.backgroundColor = 'white';
      break;
    case 'user':
      this.style.backgroundColor = colorPicked.target.value;
    default:
      this.style.backgroundColor = 'black';
      break;
  }
}

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor));

createGrid();
colorPicked.addEventListener('change', colorPicker, false);
colorPicked.addEventListener('input', colorPicker, false);
