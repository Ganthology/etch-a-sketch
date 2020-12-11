# Etch-a-sketch project
This is a project from The Odin Project. The project is to create an Etch-to-sketch webpage. The project is build using Html, CSS and javascript.
The link to the live preview: https://ganthology.github.io/etch-a-sketch/

## HTML code
The webpage is divided into 4 sections. Header containing the title, a grid container containing the grid items, a control section containing the slider and reset button, and the color section for controlling the color of the paint. For the control section, an input with range type are used to create a slider. For the color section, 5 inputs with radio type are used to create radio buttons for the color selection. Input with color type are used for user defined color picker.

## CSS code
For the CSS, the main thing is grid items are created in the grid container using repeat(number, size) function. A default outline rule are set for the grid items to differentiate when the grids are initialised. A media query are also used for the webpage when the screen is smaller.

## Javascript code
The javascript part can be separated into two parts. The first part is to create grid items according to the value input by the user, the default is 16. The default grid have a white background color, for loops are used to create new div and append to the container. Each grid are added with Event Listener where it changes color when hovered each time. The second part is the colorGrid function where when the grid items are hovered it changed its background color depending on the color chosen by the user. A colorChosen variable are created to store the value of the color chosen by the user.